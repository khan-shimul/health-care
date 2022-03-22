import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import dentalImg from '../../../images/dental/dental.png';
import { useStyles } from '../Banner/Banner';

const DentalCare = () => {
    const classes = useStyles();
    return (
        <Box component="section" sx={{ my: 10 }}>
            <Container maxWidth="lg">
                <Grid container spacing={5} sx={{ alignItems: 'center' }}>
                    <Grid data-aos="zoom-in-left" data-aos-duration="1000" item xs={12} sm={12} md={6}>
                        <img style={{ width: '100%', height: 'auto' }} src={dentalImg} alt="" />
                    </Grid>
                    <Grid data-aos="zoom-in-right" data-aos-duration="1000" item xs={12} sm={12} md={6}>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{ fontSize: '25px', fontWeight: 700, color: '#4A525D' }}
                            >
                                DENTAL CARE
                            </Typography>
                            <Box sx={{ mt: 1, height: '1.5px', width: '80px', background: '#0186D5' }}></Box>
                            <Typography
                                variant="body1"
                                sx={{ my: 3, color: '#363636' }}
                            >
                                People typically use the term “dental problems” to refer to conditions that affect oral health. Dental problems include cavities, tooth erosion. may affect a person's ability to eat, and may have a negative.
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ my: 3, color: '#565656' }}
                            >
                                Gum infections, and gum diseases. They can cause pain and discomfort, may affect a person's ability to eat, and may have a negative impact on an individual's self-esteem. gum infections, and gum diseases. They can cause pain and discomfort, may affect a person's ability to eat, and may have a negative impact on an individual's self-esteem.
                            </Typography>
                            <Button
                                sx={{ px: 4, py: 1 }}
                                className={classes.btnRegular}
                            >
                                READ MORE
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DentalCare;