import AuctionDetails from 'components/Auction/Details';
import Previous from 'components/Auction/MyAuctions/Previous';
import Unclaimed from 'components/Auction/MyAuctions/Unclaimed';
import Unpulished from 'components/Auction/MyAuctions/Unpublished';
import WatchList from 'components/Auction/MyAuctions/WatchList';
import Login from 'components/common/Login';
import Home from 'components/Home';
import DrawerLayout from 'components/layouts/DrawerLayout';
import FormLayout from 'components/layouts/FormLayout';
import LeaderBoard from 'components/LeaderBoard';
import CreateAuction from 'components/Auction/Create';
import Profile from 'components/Profile';
import ContactUs from 'components/ContactUs';
import Register from 'components/common/Register';
// import { Navigate } from 'react-router-dom';

export const protectedRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'leaderboard',
    element: <LeaderBoard />,
  },
  {
    path: 'auctionDetails/:id',
    element: <AuctionDetails />,
  },
  {
    path: 'myauctions',
    element: <DrawerLayout />,
    children: [
      {
        path: '',
        element: <WatchList />,
      },
      {
        path: 'unclaimed',
        element: <Unclaimed />,
      },
      {
        path: 'unpublished',
        element: <Unpulished />,
      },
      {
        path: 'previous',
        element: <Previous />,
      },
    ],
  },
  {
    path: 'login',
    element: <FormLayout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: 'register',
    element: <FormLayout />,
    children: [
      {
        path: '',
        element: <Register />,
      },
    ],
  },
  {
    path: 'createAuction',
    element: <CreateAuction />,
  },
  {
    path: 'account',
    element: <Profile />,
  },
  {
    path: 'contact-us',
    element: <ContactUs />,
  },
];

// export const publicRoutes = [
//   {
//     path: 'login',
//     element: <FormLayout />,
//     children: [
//       {
//         path: '',
//         element: <Login />,
//       },
//     ],
//   },
//   // {
//   //   path: 'register',
//   //   element: <FormLayout />,
//   //   children: [
//   //     {
//   //       path: '',
//   //       element: <Register />,
//   //     },
//   //   ],
//   // },
//   { path: '*', element: <Navigate to='/login' /> },
// ];