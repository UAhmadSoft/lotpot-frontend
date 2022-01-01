import React from 'react';
import { AppBar, Toolbar, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from 'styles/NavBarStyles';
import { Box, Button, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import AccountPopover from './AccountPopover';
import Logo from './Logo';
// import { AuthContext } from 'contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import Search from 'components/common/Search';
import { Add } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MHidden from 'components/layouts/DrawerLayout/MHidden';
import globalStyles from 'styles/commonStyles';

const Navbar = (props) => {
  const classes = useStyles();
  const classes_g = globalStyles();
  //   const { user } = useContext(AuthContext);
  const user = props.user;

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSwitchUser = () => {};

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.MobileMenu}
    >
      {user ? (
        <>
          <MenuItem>
            <AccountPopover />
          </MenuItem>
          <MenuItem>
            <Typography variant='subtitle2' className={classes.NavItem}>
              <NavLink to='/createAuction'>Create Auction</NavLink>
            </Typography>
          </MenuItem>

          <MenuItem>
            <Typography variant='subtitle2' className={classes.NavItem}>
              <NavLink to='myauctions'>My Auctions</NavLink>
            </Typography>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem>
            <Typography variant='body1' color='textPrimary' noWrap>
              <NavLink to='/leaderboard'>Leaderboard</NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant='body1' color='textPrimary' noWrap>
              <NavLink to='/login'>Login</NavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            {/* <Button
            //   variant='contained'
            //   className={classes.RegisterBtn}
            //   style={{
            //     minWidth: 80,
            //   }}
            //   onClick={() => navigate('/register')}
            // >
              JOIN
            </Button> */}
            <Typography variant='body1' color='textPrimary' noWrap>
              <NavLink to='/register'>Join</NavLink>
            </Typography>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <div className={`${classes.root}`}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <div className={`${classes_g.flexAlignDisp} ${classes.navSearch}`}>
            <Logo w={35} h={35} />
            <Search />
          </div>

          <div className={classes.sectionDesktop}>
            <Box
              display='flex'
              justifyContent='space-around'
              sx={{
                marginLeft: 'auto',
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              {user ? (
                <>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    sx={{
                      marginLeft: 20,
                      columnGap: 15,
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='subtitle2'>
                      <NavLink to='/leaderboard'>Leaderboard</NavLink>
                    </Typography>
                    <Typography variant='subtitle2' noWrap>
                      <NavLink to='/createAuction'>Create Auction</NavLink>
                    </Typography>
                    <MHidden width='smDown'>
                      <Typography variant='subtitle2'>
                        <NavLink to='/myauctions/watchlist'>
                          My Auctions
                        </NavLink>
                      </Typography>
                    </MHidden>

                    {/* <NotificationsPopover /> */}
                    <IconButton aria-label='delete'>
                      <NotificationsIcon fontSize='small' color='primary' />
                    </IconButton>
                  </Box>
                  <AccountPopover />
                </>
              ) : (
                <>
                  <Box
                    display='flex'
                    // justifyContent='space-between'
                    maxWidth='400px'
                    minWidth='200px'
                    gridColumnGap='20px'
                    sx={{ columnGap: 10 }}
                  >
                    <Typography variant='subtitle2' noWrap>
                      <NavLink to='/leaderboard'>Leaderboard</NavLink>
                    </Typography>
                    <Button
                      variant='outlined'
                      color='primary'
                      size='small'
                      style={{
                        minWidth: 80,
                      }}
                      onClick={() => navigate('/login')}
                    >
                      LOGIN
                    </Button>
                    <Button
                      variant='contained'
                      className={classes.RegisterBtn}
                      size='small'
                      style={{
                        minWidth: 80,
                      }}
                      onClick={() => navigate('/register')}
                    >
                      JOIN
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label='delete'>
              <NotificationsIcon fontSize='small' />
            </IconButton>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              style={{
                marginLeft: 'auto',
                color: '#000',
              }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      <Box paddingTop={'64px'}> </Box>
    </div>
  );
};
export default Navbar;
