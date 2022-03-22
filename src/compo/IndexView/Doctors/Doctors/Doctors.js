import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://whispering-escarpment-66831.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Box component="section">
            <Container maxWidth="lg">
                <Box>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: '42px' }}
                    >
                        Meet Our <Box component="span" sx={{ fontWeight: 700 }}>Specialists</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: '18px' }}
                    >
                        Best Doctors can help. Get an Expert Medical Opinion from one of our world-renowned specialists
                    </Typography>
                </Box>
                {/* Display Doctors */}
                <Box component="div" sx={{ my: 5 }}>
                    <Grid container spacing={4}>
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor._id}
                                doctor={doctor}
                            />)
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Doctors;