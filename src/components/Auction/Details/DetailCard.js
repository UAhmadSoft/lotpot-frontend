import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box, Chip, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { calculateCountdown } from 'utils/dateFunctions';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    // borderRadius: 8,
    // marginBottom: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
    position: 'relative',
    '& .MuiCardContent-root': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
    },
  },
  cardMedia: {
    width: 160,
  },
  shareBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  createdInfo: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
  cardCategories: {
    flexBasis: '40%',
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 5,
    justifyContent: 'flex-end',
    '& .MuiChip-root:first-child': {
      backgroundColor: theme.palette.warning.main,
    },
    '& .MuiChip-root:last-child': {
      backgroundColor: theme.palette.success.main,
    },
    '& .MuiChip-root': {
      marginRight: 10,
      color: '#fff',
      // marginBottom: 10,
    },
  },
}));

export default function FeaturedPost({ auction, handleBookmark, bookmaking }) {
  const classes = useStyles();

  const timeLeft = useMemo(() => {
    if (!auction) return;
    let countdown = calculateCountdown(auction.timeLine);

    if (countdown.days === 0)
      return `${countdown.days} days ${countdown.hours} hours`;
    else return `${countdown.hours} hours ${countdown.min} mins`;
  }, [auction]);
  if (!auction) return <div></div>;
  const {
    _id,
    title,
    location,
    startingPrice,
    user,
    createdAt,
    description,
    categories,
  } = auction;

  const handleShare = (e) => {
    const { item } = e.currentTarget.dataset;
    // console.log(`item`, item);
  };

  return (
    <>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Box
              display='flex'
              // columnGap={5}
              justifyContent='space-between'
              //   flexBasis='40%'
              sx={{
                columnGap: 20,
                pb: 2,
              }}
            >
              <Box
                sx={{
                  flexBasis: '35%',
                }}
              >
                <Typography component='h2' variant='h4'>
                  {title}
                </Typography>
                <Typography variant='h3' color='textSecondary'>
                  $ {startingPrice}
                </Typography>

                <Box
                  mt={4}
                  display='flex'
                  flexDirection='column'
                  sx={{ rowGap: 5 }}
                >
                  <Chip
                    size='small'
                    variant='outlined'
                    label={`At : ${location}`}
                    color='primary'
                  />
                  <Chip
                    size='small'
                    label={`Time Left : ${timeLeft}`}
                    color='primary'
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  flexBasis: '60%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <Typography variant='body1' paragraph>
                  {description}
                </Typography>

                <Box mt={1} display='flex' alignItems='center'>
                  <Box className={classes.cardCategories}>
                    {categories.map((a, ind) => (
                      <Chip
                        size='small'
                        label={a.name}
                        color={ind === 1 ? 'secondary' : 'default'}
                      />
                    ))}
                  </Box>
                  <IconButton
                    aria-label='bookmark'
                    aria-haspopup='true'
                    data-item={_id}
                    onClick={handleBookmark}
                    style={{
                      marginLeft: 'auto',
                      color: '#000',
                    }}
                    // disabled
                  >
                    <VisibilityIcon color='primary' />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            {/* <Box
              mb={3}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <IconButton
                aria-label='bookmark'
                aria-haspopup='true'
                data-item={_id}
                onClick={handleBookmark}
                style={{
                  marginLeft: 'auto',
                  color: '#000',
                }}
              >
                <VisibilityIcon color='primary' />
              </IconButton>
            </Box> */}
            <Divider />
            <div className={classes.createdInfo}>
              <Typography variant='body1' color='textSecondary'>
                Created By : {user?.name}
              </Typography>
              <Typography variant='body1' color='textSecondary'>
                Created At : {new Date(createdAt).toLocaleDateString()}
              </Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};