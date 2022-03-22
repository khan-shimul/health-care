import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login/login.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useStyles2 } from '../Login/Login';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import { useStyles } from '../../../compo/IndexView/Banner/Banner';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { user, registerNewUser, loginWithGoogle, loading, authError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const classes = useStyles();
    const classes2 = useStyles2();

    // Handle Register Form
    const onSubmit = data => {
        // if pass not 6 characters
        if (data.password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Password Should be at least 6 characters!'
            });
            return;
        };

        // if both pass not matched
        if (data.password !== data.password2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your Password Did Not Match!'
            });
            return
        };

        // Call / register new user func
        registerNewUser(data.email, data.password, data.name, navigate);
    };

    // Handle login with google
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, navigate);
    }

    // Display Successfully Register Message
    if (user.email) {
        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: `You have successfully registered!`
        })
    };

    return (
        <Box>
            <Container>
                <Box sx={{ my: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 8 }} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <img style={{ width: '100%' }} src={login} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            {!loading && <Box >
                                <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Register</Typography>
                                {/* Login Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        label="Your Name"
                                        variant="outlined"
                                        {...register("name")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        type="email"
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                        {...register("email")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        {...register("password")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        // required
                                        label="Confirm Password"
                                        variant="outlined"
                                        type="password"
                                        {...register("password2")}
                                    />
                                    {/* Display Register Error Message */}
                                    {authError && <Alert severity="error" sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}>{authError}</Alert>}
                                    <Button
                                        sx={{ width: { xs: 1, md: '80%' }, py: 1.5, mb: 2 }}
                                        className={classes.btnRegular}
                                        type='submit'
                                    >
                                        Register</Button>
                                </form>
                                <Typography variant="body1" sx={{ fontFamily: 'Lato', width: { xs: 1, md: '80%' }, textAlign: 'center', mb: 2 }}>
                                    <Box component="span" sx={{ color: '#938E8E' }}> Already Registered? </Box>
                                    <Box component="span" sx={{ fontWeight: 600, color: '#2A2929' }}><NavLink to='/login'>Login</NavLink></Box>
                                </Typography>
                                {/* Social Media */}
                                <Box sx={{ width: { xs: 1, md: '80%' }, textAlign: 'center', mt: { xs: 0, md: 3 } }}>
                                    <Button
                                        onClick={handleLoginWithGoogle}
                                        sx={{ color: '#F44A4A' }}
                                        startIcon={<GoogleIcon />}
                                    ></Button>
                                    <Button
                                        startIcon={<FacebookIcon />}
                                    ></Button>
                                    <Button
                                        sx={{ color: '#1D9BF0' }}
                                        startIcon={<TwitterIcon />}
                                    ></Button>
                                    <Button
                                        sx={{ color: '#F44A4A' }}
                                        startIcon={<InstagramIcon />}
                                    ></Button>
                                </Box>
                            </Box>}
                            {loading && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <CircularProgress sx={{ color: '#EA4544' }} />
                            </Box>}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;