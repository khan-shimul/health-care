import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';

const Testimonial = ({ doctor }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://whispering-escarpment-66831.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // Filtered Reviews
    const filteredReviews = reviews.filter(filteredReview => filteredReview.doctorName === doctor.name);


    return (
        <Box component="div" sx={{ mb: 5 }}>
            {/* {filteredReviews.length < 1 && <CircularProgress />} */}
            {filteredReviews.length > 0 && <Box component="div">
                <Typography
                    variant="h6"
                    sx={{ fontSize: '22px', fontWeight: 600, mb: 2 }}
                >Testimonial of {doctor.name}</Typography>
                <Grid container spacing={2}>

                    {
                        filteredReviews.map(filterReview => <Grid key={filterReview._id} xs={12} sm={12} md={4}>
                            <Paper elevation={0} sx={{ p: 2, boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '14px' }}
                                    >Patient: <Box component="span" sx={{ fontWeight: 700, fontSize: '15px' }}>{filterReview.name}</Box> </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '14px' }}
                                    >Rating: <Box component="span" sx={{ fontWeight: 700, fontSize: '15px' }}>{filterReview.rating}*</Box> </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '12px', fontWeight: 700, mt: 0.5, mb: 0.7 }}
                                    ><Box component="span" sx={{ fontWeight: 600 }}>"{filterReview.comment}"</Box> </Typography>
                                </Box>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Box>}
        </Box>
    );
};

export default Testimonial;