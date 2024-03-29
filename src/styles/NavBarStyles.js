import { makeStyles } from '@material-ui/core';

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      boxShadow: 'none',
      borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
      // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    },

    '& h4': {
      alignSelf: 'start',
    },
  },
  NavPadding: {
    paddingTop: 64,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 55,
    },
  },
  Appbar: {
    // // backgroundColor: '#212325',
    backgroundColor: theme.custom.svg,
    '& .MuiToolbar-regular': {
      alignItems: 'center',
      justifyContent: 'space-between',
      columnGap: '1em',
    },
    '& a': {
      color: theme.palette.text.primary,
      '&.active': {
        color: theme.palette.primary.main,
      },
      // '&:hover': {
      //   color: theme.palette.primary.main,
      //   transition: '0.3s',
      // },
    },
    columnGap: 20,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  // NavItem: {
  //   display: 'block',
  //   // color: '#000',
  //   // textDecoration: 'none',
  //   // '& a': {
  //   //   color: theme.palette.text.primary,
  //   // },
  //   // '&:hover': {
  //   //   // borderBottom: '2px solid #B033fa',
  //   //   color: 'deepskyblue',
  //   //   transition: '0.3s',
  //   // },
  // },
  darkBtn: {
    overflow: 'unset !important',
    '&button': {},
  },
  RegisterBtn: {
    '&.MuiButton-contained': {
      // borderRadius: 20,
      color: '#fff',
      transition: '0.6s',
      // fontWeight: 'bold',
      backgroundColor: theme.palette.primary.light,
    },
  },

  sectionDesktop: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  MobileMenu: {
    height: 500,
  },
  SearchBar: {
    '&.MuiPaper-root': {
      boxShadow: 'none',
    },
  },
  navLink: {
    '&.active': {
      color: theme.palette.primary.main,
    },
    '& svg': {
      color: theme.palette.primary.main,
    },
  },

  navSearch: {
    columnGap: 30,
    maxWidth: 550,
    flex: 2,
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    '& a': {
      color: theme.palette.text.primary,
    },
  },
}));

export default useStyles;

// export const NavLink = styled(({ theme }) => ({
//   color: theme.palette.primary.main,
//   display: 'flex',
//   alignItems: 'center',
//   textDecoration: 'none',
//   padding: '0 1rem',
//   height: '100%',
//   cursor: 'pointer',
//   // '&.active': {
//   //   color: '#15cdfc',
//   // },
// }));
