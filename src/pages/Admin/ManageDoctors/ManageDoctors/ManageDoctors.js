import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    // Handle update
    const handleUpdate = id => {
        navigate(`/dashboard/update-doctor/${id}`)
    };

    // Handle Delete Doctor
    const handleRemoveDoctor = id => {
        const proceed = window.confirm('Are you sure you want to delete the document?');
        if (proceed) {
            const url = `http://localhost:5000/doctors/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!!',
                            text: `You have successfully Deleted!`
                        });
                        const remainingDoctors = doctors.filter(doctor => doctor._id !== id);
                        setDoctors(remainingDoctors)
                    }
                })
        }
    };

    return (
        <Box
            component="section"
        >
            <Typography
                variant="h6"
                sx={{ fontSize: '22px', fontWeight: 700 }}
            >Manage Your Doctors</Typography>

            <Box component="div">
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Grid item xs={12} sm={12} md={4} key={doctor._id}>
                            <Box>
                                <img style={{ width: '100%', height: 'auto' }} src={doctor.image} alt="" />
                            </Box>
                            <Typography
                                variant="h2"
                                sx={{ fontSize: '25px', color: '#525866', fontWeight: 700, mt: 3, mb: 1 }}
                            >
                                {doctor.name}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontSize: '17px', color: '#525866', fontWeight: 600, fontStyle: 'italic', mb: 2 }}
                            >
                                {doctor.title}
                            </Typography>

                            <Button
                                sx={{ mr: 5 }}
                                onClick={() => handleUpdate(doctor._id)}
                            >
                                Update Info
                            </Button>
                            <Button
                                color="error"
                                onClick={() => handleRemoveDoctor(doctor._id)}
                            >
                                Remove
                            </Button>
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default ManageDoctors;