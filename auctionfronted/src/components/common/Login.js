import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Grid,
  Typography,
  CircularProgress,
  TextField,
  Tab,
  Tabs,
} from '@material-ui/core';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { Alert } from 'components/common/Alert';
// import FormLayout from 'components/layouts/formLayout';
import useManyInputs from 'hooks/useManyInputs';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
// import { AuthContext } from 'contexts/AuthContext';
// import { API_BASE_URL, handleCatch } from 'utils/makeReq';
const Login = () => {
  //   const { token, user, signInUser } = useContext(AuthContext);
  const classes = globalStyles();
  const formClasses = formStyles();

  // const navigate = useNavigate();
  // const location = useLocation();

  const initialState = {
    email: '',
    password: '',
  };

  const [
    inputState,
    handleTxtChange,
    handleToggleChange,
    changeInput,
    resetState,
    setInputstate,
  ] = useManyInputs(initialState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   let redirect = location.search ? location.search.split('=')[1] : '/';

  //   useEffect(() => {
  //     console.log(`redirect`, redirect);

  //     // if (user) {
  //     //   navigate(redirect);
  //     // }
  //   }, [user, navigate, redirect]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //   const res = await axios.post(`${API_BASE_URL}/auth/login/freelancer`, {
      //     ...inputState,
      //   });
      //   console.log(`res`, res);

      //   signInUser(res.data.token, res.data.user);

      resetState();
    } catch (error) {
      //   handleCatch(error);
    } finally {
      setLoading(false);
    }
  };

  const [tabState, setTabState] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabState(newValue);
    setInputstate((st) => ({
      ...st,
      form: newValue === 0 ? 'join' : 'login',
    }));
  };
  return (
    <div className={formClasses.mainContainer}>
      <div className={formClasses.formSelection}>
        <NavLink to='/login'>
          <Typography variant='subtitle1'>LOGIN</Typography>
        </NavLink>
        <Link to='/register'>
          <Typography variant='subtitle1'>JOIN</Typography>
        </Link>
      </div>
      <div className={formClasses.formContent}>
        <Typography
          vaiant='subtitle2'
          sx={{ color: 'textSecondary' }}
          gutterBottom
          align='center'
        >
          Welcome Back
        </Typography>
        <section className={classes.wrapper}>
          <form onSubmit={onFormSubmit}>
            <Grid container spacing={3}>
              {error !== null && (
                <Grid item xs={12}>
                  <Alert severity='error'>{error}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField
                  name='email'
                  value={inputState.email}
                  label='Email'
                  type='email'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name='password'
                  value={inputState.password}
                  label='Password'
                  type='password'
                  onChange={handleTxtChange}
                  variant='outlined'
                  fullWidth
                  size='small'
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress size={20} color='inherit' />
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: 'right' }}>
                  <Link to='/forgotpassword' variant='body2'>
                    Forgot password?
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </form>
        </section>

        <Grid item xs={6} sm={12}>
          <Box
            mt={2}
            className={classes.textWithlink}
            sx={{
              columnGap: 4,
              height: '100%',
              justifyContent: 'center',
            }}
          >
            <Typography variant='subtitle2'>
              not a member?
              <Link to='/register'>Join </Link>
            </Typography>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default Login;