import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://whispering-escarpment-66831.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    // handle Reviews update
    const handleReviewApprove = id => {
        fetch(`https://whispering-escarpment-66831.herokuapp.com/reviews/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    };

    // handle delete order
    const handleDeleteReview = id => {
        const proceed = window.confirm('Are you sure want to delete the Review?');
        if (proceed) {
            fetch(`https://whispering-escarpment-66831.herokuapp.com/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: `Successfully Deleted`
                        });
                        const restReviews = reviews?.filter(rest => rest._id !== id);
                        setReviews(restReviews)
                    }
                })
        }
    }

    return (
        <Box component="section">
            <Typography
                variant="h6"
                sx={{ fontWeight: 700, fontSize: '24px', textAlign: 'center' }}
            >
                Manage Doctors Reviews
            </Typography>

            <Box>
                <Grid container spacing={3}>
                    {
                        reviews.map(review => <Grid item xs={12} sm={12} md={4} key={review._id}>
                            <Paper elevation={0} sx={{ boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px' }}>
                                <Box sx={{ p: 2.2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '14px' }}
                                    >User: <Box component="span" sx={{ fontWeight: 700, fontSize: '15px' }}>{review.name}</Box> </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '14px' }}
                                    >Rating: <Box component="span" sx={{ fontWeight: 700, fontSize: '15px' }}>{review.rating}*</Box> </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '12px', fontWeight: 700, mt: 0.5, mb: 0.7 }}
                                    >Comment: <Box component="span" sx={{ fontWeight: 600 }}>{review.comment}</Box> </Typography>

                                    {/* Approve Button */}
                                    {!review.isApproved && <Button
                                        size="small"
                                        onClick={() => handleReviewApprove(review._id)}
                                    >Approve</Button>}

                                    {review.isApproved && <Button size="small" disabled>Approved</Button>}

                                    {/* Delete Button */}
                                    <Button
                                        size="small"
                                        color="error"
                                        onClick={() => handleDeleteReview(review._id)}
                                    >Delete</Button>
                                </Box>
                            </Paper>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default ManageReviews;