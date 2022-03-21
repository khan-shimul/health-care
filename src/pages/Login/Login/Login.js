import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login/login.png';
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth/useAuth';


export const useStyles2 = makeStyles({
    textFiled: {
        '& label.Mui-focused': {
            color: '#FF725E',
        },
        '& .MuiInput-underline:after': {
            // borderBottomColor: 'pink',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DCDCDC',
            },
            '&:hover fieldset': {
                borderColor: '#DCDCDC',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF725E',
            },
        }
    }
});

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { user, loading, loginUser, loginWithGoogle, authError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Handle Login Form
    const onSubmit = data => {
        // Call/register existing user func
        loginUser(data.email, data.password, location, navigate);
    };

    // Handle login with google
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, navigate);
    }

    // Display Successfully Login Message
    if (user.email) {
        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: `You have successfully Login!`
        });
    };

    const classes2 = useStyles2();
    return (
        <Box>
            <Container>
                <Box sx={{ my: 10 }}>
                    <Grid container spacing={{ xs: 2, md: 8 }} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Box>
                                <img style={{ maxWidth: '100%', height: '100%' }} src={login} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            {!loading && <Box>
                                <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Login</Typography>
                                {/* Login Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        type="email"
                                        required
                                        label="Email Address"
                                        variant="outlined"
                                        {...register("email")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Password"
                                        variant="outlined"
                                        type="password"
                                        {...register("password")}
                                    />
                                    {/* Display Login Error Message */}
                                    {authError && <Alert severity="error" sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}>{authError}</Alert>}
                                    <Button
                                        sx={{ width: { xs: 1, md: '80%' }, py: 1.5, mb: 2 }}
                                        // className={classes.btnRegular}
                                        type="submit"
                                    >
                                        Login</Button>
                                </form>
                                <Typography variant="body1" sx={{ fontFamily: 'Lato', width: { xs: 1, md: '80%' }, textAlign: 'center', mb: 2 }}>
                                    <Box component="span" sx={{ color: '#938E8E' }}> Don't have an account? </Box>
                                    <Box component="span" sx={{ fontWeight: 600, color: '#2A2929' }}><NavLink to='/register'>Register</NavLink></Box>
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

export default Login;