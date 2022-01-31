import {
  Box,
  Button,
  CircularProgress,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useContext, useEffect, useMemo } from 'react';
import styles from 'styles/commonStyles';
import AuctionStepper from './DetailsAucStepper';
// import AuctionStepper from '../AuctionStepperM';
import Card from './DetailCard';
import { useParams, useNavigate } from 'react-router';
import ScrollToTop from 'utils/ScrollToTop';
import tableStyles from 'styles/TableStyles';
import { useFetch, useToggleInput } from 'hooks';
import { toast } from 'react-toastify';
import Loading from './LoadingDetails';
import { API_BASE_URL, handleCatch, makeReq } from 'utils/makeReq';
import { AuthContext } from 'contexts/AuthContext';
import { AuctionsContext } from 'contexts/AuctionsContext';
import { Navigate } from 'react-router-dom';
import CreateBidForm from './CreateBidForm';
import { useGaTracker } from 'hooks';
import BidTable from './BidTable';
import { SocketContext } from 'contexts/SocketContext';
import ClaimMessageDialog from './ClaimMessageDialog';

const useStyles = makeStyles((theme) => ({
  contentCont: {
    boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 10px 0px',
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#fff',
    height: 'fit-content',
  },
  histCard: {
    display: 'flex',
    justifyContent: 'end',
    columnGap: '2em',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      rowGap: '2em',
    },
  },
}));

const AuctionDetails = () => {
  useGaTracker();
  const { token, isLoggedIn, user } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const { addToWatchlist } = useContext(AuctionsContext);
  const globalClasses = styles();

  const customClasses = useStyles();
  const tableClasses = tableStyles();

  const [isClaiming, toggleClaiming] = useToggleInput(false);
  const [isClaimOpen, toggleClaimOpen] = useToggleInput(false);
  const navigate = useNavigate();

  const { id } = useParams();

  let {
    value: auction,
    loading,
    error,
    setValue: setAuction,
  } = useFetch(
    `${API_BASE_URL}/auctions/${id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
    [id],
    'auction'
  );

  const handleClaim = () => {
    // * if user is Not logged in, redirect him
    if (!isLoggedIn) return navigate(`/login?redirect=/auctionDetails/${id}`);

    toggleClaiming();
    // * Check if user is verified,
    if (!user.isVerified) {
      toggleClaiming();
      return toast.error(
        'You must validate your Social Accounts before claim!'
      );
    }

    // * Check if user is tagged on specific,
    if (
      auction.type === 'specific' &&
      auction.twitterTarget !== user.twitterProfile?.username
      // TODO: || instagramTarget === user.instagram?.username)
    ) {
      toggleClaiming();
      return toast.error('Only the person tagged in the auction can claim!');
    }
    toggleClaiming();
    toggleClaimOpen();
  };

  // * Fetch Bid from api
  const [isMakingBid, toggleMakingBid] = useToggleInput(false);

  // * Bid
  const createBid = async (amount, auctionId, callBack) => {
    toggleMakingBid();

    try {
      const resData = await makeReq(
        `/auctions/${auctionId}/bid`,
        {
          body: {
            biddingPrice: amount,
            bidBeaten: auction.bids[0]?._id || null,
          },
          // * maybe 1st bid
        },
        'PATCH'
      );
      // console.log(`resData`, resData);

      setAuction(resData.auction);
      toast.success('Success');
      callBack?.();
    } catch (err) {
      handleCatch(err);
    } finally {
      toggleMakingBid();
    }
  };

  const handleBookmark = async (e) => {
    addToWatchlist(id);
  };

  const createAuctionClaim = async (message) => {
    toggleClaiming();
    try {
      const resData = await makeReq(
        `/auctions/${id}/${auction.winningBid}/claim`,
        {
          body: {
            message,
          },
        },
        'POST'
      );
      console.log('resData', resData);
      toast.success('Claim Sent Successfully!');
    } catch (err) {
      handleCatch(err);
    } finally {
      toggleClaiming();
    }
  };

  useEffect(() => {
    if (!socket || !isLoggedIn) return;
    socket.on('newBid', ({ updatedAuction }) => {
      console.log(`new bid received`, updatedAuction);
      setAuction(updatedAuction);
    });
  }, [socket, isLoggedIn]);

  const minBidAmount = useMemo(() => {
    console.log('auction', auction);
    if (!auction) return 0;

    // * for 1st bid , min amount is auction's startingPricce
    if (!auction.bids.length) return auction.startingPrice + 1;

    // * as bids are sorted as latest first, so first bid's value should be highest
    return auction.bids[0].biddingPrice + 1;
  }, [auction]);

  const isAuctionOver = useMemo(
    () => new Date(auction?.timeLine) < new Date(),
    [auction]
  );

  const isMyAuction = useMemo(
    () => isLoggedIn && auction?.user?._id === user?._id[auction]
  );

  // * Sometimes loading becomes false , but auction is still undefined
  // * for small amount of time , so in that case !auction is put here
  if (loading || !auction) return <Loading />;

  if (error) return <Navigate to='/' />;

  return (
    <>
      <ScrollToTop />
      <Container>
        <section className={globalClasses.containerMargin}>
          <Typography variant='h4' align='center'>
            Auction Details
          </Typography>
        </section>
        {auction ? (
          <section className={globalClasses.containerMargin}>
            <div className={`${globalClasses.flexJustDisp}`}>
              <div
                className={`${globalClasses.customStyledBox} ${globalClasses.flexJustDisp}`}
              >
                <AuctionStepper auction={auction} />
                <div className={globalClasses.content}>
                  <Card auction={auction} handleBookmark={handleBookmark} />
                </div>
              </div>
            </div>

            {/* If Auction is archived, dont show bids and bidForm */}
            {auction?.status === 'published' && (
              <Box mt={5} className={`${customClasses.histCard}`}>
                <Box
                  sx={{ flexBasis: '60%' }}
                  className={`${customClasses.contentCont}`}
                >
                  <Typography variant='h5'>Bidding Info</Typography>
                  {auction.bids?.length === 0 ? (
                    <Typography variant='body1' align='center'>
                      Be the first one to make bid
                    </Typography>
                  ) : (
                    <BidTable
                      globalClasses={globalClasses}
                      tableClasses={tableClasses}
                      bids={auction.bids}
                      isAuctionOver={isAuctionOver}
                      isMyAuction={isMyAuction}
                      // isAuctionOver={true}
                      // isMyAuction={true}
                    />
                  )}
                </Box>
                <CreateBidForm
                  createBid={createBid}
                  isMakingBid={isMakingBid}
                  customClasses={customClasses}
                  globalClasses={globalClasses}
                  auctionId={auction._id}
                  startingPrice={minBidAmount}
                />
              </Box>
            )}

            {/* If Auction is archived and is specific, then show Claim Button*/}
            {auction.status === 'archived' && (
              <Box style={{ marginTop: '1rem', textAlign: 'right' }}>
                <Button
                  disabled={isClaiming}
                  variant='contained'
                  color='primary'
                  type='submit'
                  onClick={handleClaim}
                >
                  Claim Auction
                  {isClaiming && <CircularProgress size={25} />}
                </Button>{' '}
                <ClaimMessageDialog
                  open={isClaimOpen}
                  toggleDialog={toggleClaimOpen}
                  success={createAuctionClaim}
                />
              </Box>
            )}
          </section>
        ) : (
          <Typography variant='subtitle1'>Auction Not Found</Typography>
        )}
      </Container>
    </>
  );
};

export default AuctionDetails;