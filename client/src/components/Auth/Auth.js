import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

import { useDispatch } from 'react-redux';
import { createOrGetUser } from '../../actions/auth';

import Input from './Input';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {};

  const handleChange = () => {};

  // const googleSuccess = (res) => {
  //   try {
  //     dispatch({ type: 'AUTH', data: { result, token } });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstname'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name='lastname'
                  label='Last Name'
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={() => setShowPassword(!showPassword)}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>

          <Grid container justify='flex-end'>
            <Grid item>
              <GoogleLogin
                onSuccess={(response) => dispatch(createOrGetUser(response))}
                onError={(error) => console.log('Error')}
              />
            </Grid>

            <Grid item>
              <Button onClick={() => setIsSignup(!isSignup)}>
                {isSignup
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
