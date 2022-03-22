import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import bannerBG from '../../../images/banner/banner2.jpg';


// Custom Style
export const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${bannerBG})`,
        minHeight: '100vh',
        width: '100%',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
    },
    btnRegular: {
        background: '#FE824C !important',
        color: '#fff !important',
        borderRadius: '0 !important',
        transition: '0.5s !important',
        '&:hover': {
            background: '#0186D5 !important'
        }
    }

});

const Banner = () => {
    const classes = useStyles();
    return (
        <Box
            component="section"
            className={classes.root}
        >
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12} sm={12} md={6}>
                        <Box data-aos="zoom-in-right" data-aos-duration="3000">
                            <Typography
                                variant="h2"
                                sx={{ fontSize: { xs: '23px', sm: '33px', md: '55px' }, color: '#404D5F', fontWeight: 800 }}
                            >
                                Medical Services <br /> You Can Trust!!
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ width: { xs: '60%', sm: '70%', md: '80%' }, fontSize: { xs: '13px', sm: '15px', md: '16px' }, mt: 2, mb: 2.2 }}
                            >
                                Medical Pro means any medical treatment or any medical, surgical,  and other related services.
                            </Typography>
                            <Button
                                sx={{ px: 4, py: 1 }}
                                className={classes.btnRegular}
                            >VIEW SERVICES</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}></Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;