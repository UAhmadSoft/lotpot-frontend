import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Typography, Box, Container, Button, Icon } from '@material-ui/core';
import { footerInfo } from 'data';
// import { animateScroll as scroll } from 'react-scroll';
import Logo from './Logo';
import facebookIcon from 'assets/facebook.png';
import twitterIcon from 'assets/twitter.png';
import { styles } from 'styles/FooterStyles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import googleIcon from 'assets/google.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

const Footer = () => {
  const history = useNavigate();
  const classes = styles();

  //   const handleClick = () => {
  //     scroll.scrollToTop({
  //       duration: 1500,
  //       delay: 100,
  //     });
  //   };

  return (
    <>
      <footer className={classes.root}>
        {/* <Container> */}
        <div className={classes.footer}>
          <div className={`${classes.footerItem} firstItem`}>
            <Logo w={35} h={35} textColor='#fff' />
            <Box
              my={1}
              sx={{ letterSpacing: 1, textAlign: 'justify', marginTop: 35 }}
            >
              <Box my={1} sx={{ color: '#fff' }}>
                <Typography variant='h5'>Disclosure</Typography>
              </Box>
              <Typography variant='body1'>{footerInfo.decription}</Typography>
            </Box>
          </div>

          <div className={`${classes.footerItem} lastItem`}>
            <NavLink to='/contact-us' className={classes.link}>
              <Typography variant='subtitle1'>Contact Us</Typography>
              <ArrowForwardIcon size='small' />
            </NavLink>
            <NavLink to='/tos' className={classes.link}>
              <Typography variant='subtitle1'>Terms & Conditions</Typography>
              <ArrowForwardIcon size='small' />
            </NavLink>
            <NavLink to='/privacy' className={classes.link}>
              <Typography variant='subtitle1'>Privacy Policy</Typography>
              <ArrowForwardIcon size='small' />
            </NavLink>
            <NavLink to='/faq' className={classes.link}>
              <Typography variant='subtitle1'>FAQ's</Typography>
              <ArrowForwardIcon size='small' />
            </NavLink>

            <Box mt={2}>
              <Typography variant='subtitle1'>
                {' '}
                For queries feel free to contact
              </Typography>
              <Typography variant='body2'>
                Press & Media : {footerInfo.contactUs.pressEmail}
              </Typography>
              <Typography variant='body2'>
                Help & Support : {footerInfo.contactUs.helpEmail}
              </Typography>
            </Box>

            <Box
              display='flex'
              mt={3}
              sx={{
                columnGap: 10,
                '& img': {
                  width: 30,
                  height: 30,
                },
              }}
            >
              {/* <Link to='/'>
                <img src={facebookIcon} alt='auction-facebook' />
              </Link>
              <Link to='/'>
                <img src={twitterIcon} alt='auction-facebook' />
              </Link>
              <Link to='/'>
                <img src={GoogleIcon} alt='auction-facebook' />
              </Link> */}

              <Link to='/'>
                <div className={`${classes.share} ${classes.twitter}`}>
                  <TwitterIcon />
                </div>
              </Link>
              <Link to='/'>
                <div className={`${classes.share} ${classes.facebook}`}>
                  <FacebookIcon />
                </div>
              </Link>
              <Link to='/'>
                <div className={`${classes.share} ${classes.google}`}>
                  <YouTubeIcon />
                  {/* <svg viewBox='0 0 50 50' width='24px' height='24px'>
                    <path d='M 17.1875 10.9375 C 9.421875 10.9375 3.125 17.234375 3.125 25 C 3.125 32.765625 9.421875 39.0625 17.1875 39.0625 C 24.953125 39.0625 31.25 32.765625 31.25 25 C 31.25 24.035156 31.144531 23.09375 30.960938 22.1875 L 30.882812 21.875 L 17.1875 21.875 L 17.1875 26.5625 L 26.5625 26.5625 C 25.816406 30.996094 21.832031 34.375 17.1875 34.375 C 12.007812 34.375 7.8125 30.179688 7.8125 25 C 7.8125 19.820312 12.007812 15.625 17.1875 15.625 C 19.53125 15.625 21.667969 16.492188 23.3125 17.914062 L 26.671875 14.625 C 24.171875 12.335938 20.84375 10.9375 17.1875 10.9375 Z M 39.0625 17.1875 L 39.0625 21.875 L 34.375 21.875 L 34.375 25 L 39.0625 25 L 39.0625 29.6875 L 42.1875 29.6875 L 42.1875 25 L 46.875 25 L 46.875 21.875 L 42.1875 21.875 L 42.1875 17.1875 Z M 39.0625 17.1875 ' />
                  </svg> */}
                </div>
              </Link>
            </Box>
          </div>
        </div>
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;