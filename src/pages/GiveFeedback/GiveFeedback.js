import React from 'react';
import Header from '../../compo/Shared/Header/Header';
import Footer from '../../compo/Shared/Footer/Footer';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, Grid, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import { useStyles } from '../../compo/IndexView/Banner/Banner';
import { useStyles2 } from '../Login/Login/Login';
import feedbackImg from '../../images/feedbackk/feedback2.png';

const GiveFeedback = () => {
    const { register, handleSubmit } = useForm();
    // Handle Login Form
    const onSubmit = data => {
        // Call/register existing user func
        console.log(data)
    };

    const classes = useStyles();
    const classes2 = useStyles2();
    return (
        <div>
            <Header />
            <Box component="section" sx={{ my: 5 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Grid xs={12} sm={12} md={7}>
                            <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Please Share Your Experience!</Typography>
                            {/* Feedback Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    sx={{ width: { xs: '95%', md: '80%' }, mb: 2 }}
                                    className={classes2.textFiled}
                                    type="text"
                                    required
                                    label="Your Full Name"
                                    variant="outlined"
                                    {...register("name")}
                                />
                                <TextField
                                    sx={{ width: { xs: '95%', md: '80%' }, mb: 2 }}
                                    className={classes2.textFiled}
                                    required
                                    label="Doctor name"
                                    variant="outlined"
                                    type="text"
                                    {...register("doctorName")}
                                />
                                <TextField
                                    sx={{ width: { xs: '95%', md: '80%' }, mb: 2 }}
                                    className={classes2.textFiled}
                                    required
                                    label="Rating"
                                    variant="outlined"
                                    type="number"
                                    {...register("rating", { min: 1, max: 5 })}
                                />
                                <TextField
                                    sx={{ width: { xs: '95%', md: '80%' }, mb: 2 }}
                                    className={classes2.textFiled}
                                    required
                                    label="Comment"
                                    variant="outlined"
                                    type="text"
                                    multiline
                                    maxRows={4}
                                    {...register("comment")}
                                />
                                <Button
                                    sx={{ width: { xs: '95%', md: '80%' }, py: 1.5, mb: 2 }}
                                    className={classes.btnRegular}
                                    type="submit"
                                >
                                    Share</Button>
                            </form>
                        </Grid>
                        <Grid xs={12} sm={12} md={5}>
                            <img style={{ width: '100%', height: '100%' }} src={feedbackImg} alt="" />
                        </Grid>
                    </Grid>
                </Container>

            </Box>
            <Footer />
        </div>
    );
};

export default GiveFeedback;