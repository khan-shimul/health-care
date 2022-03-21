import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, title, image, description } = doctor;

    const navigate = useNavigate();

    const handleDoctor = id => {
        navigate(`/doctor-profile/${id}`)
    }

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Box>
                <img style={{ height: '100%', width: '100%' }} src={image} alt="" />
            </Box>
            <Box>
                <Typography
                    variant="h2"
                    sx={{ fontSize: '25px', color: '#525866', fontWeight: 700, mt: 3, mb: 1 }}
                >
                    {name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ fontSize: '17px', color: '#525866', fontWeight: 600, fontStyle: 'italic', mb: 2 }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: '16px', color: '#525866', mb: 1 }}
                >
                    {description.slice(0, 110)}...
                </Typography>
                <Button
                    onClick={() => handleDoctor(doctor._id)}
                >
                    View Details
                </Button>
            </Box>
        </Grid>
    );
};

export default Doctor;