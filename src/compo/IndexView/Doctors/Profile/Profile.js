import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import AppointmentModal from '../../../AppointmentModal/AppointmentModal/AppointmentModal';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import { useStyles } from '../../Banner/Banner';

const Profile = () => {
    const [isAppointment, setIsAppointment] = useState(false);
    const [total, setTotal] = useState('');
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    // Destructuring
    const { name, title, price, image, experience, speciality, degrees, workDays, discount } = doctor;

    // Load Doctor
    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data)
                if (data.price >= 25000) {
                    const discountAmount = parseInt(data.price) * (discount / 100);
                    const totalAmount = data.price - discountAmount;
                    setTotal(totalAmount)
                }
            })
    }, []);

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // if successfully set a appointment
    if (isAppointment) {
        Swal.fire({
            icon: 'success',
            title: 'Congrats',
            text: `You have successfully Set Your Appointment!`
        });
    };

    const classes = useStyles();

    return (
        <Box>
            <Header />
            <Container maxWidth="lg">
                <Box component="section" sx={{ my: 10 }}>
                    <Grid container spacing={4} sx={{ alignItems: 'center' }}>
                        <Grid item xs={12} sm={12} md={5}>
                            <Box>
                                <img style={{ height: 'auto', maxWidth: '100%' }} src={image} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: '25px', color: '#222222', fontWeight: 700 }}
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '15px', color: '#565656', fontWeight: 500 }}
                                >
                                    {title}
                                </Typography>
                                {/* Speciality */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700 }}
                                        >
                                            Speciality
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        {speciality}
                                    </Typography>
                                </Box>
                                {/* Degrees */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700 }}
                                        >
                                            Degrees
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        {degrees}
                                    </Typography>
                                </Box>
                                {/* Experience */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700, mr: 8 }}
                                        >
                                            Experience
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        {experience} years of Experience
                                    </Typography>
                                </Box>
                                {/* Work Days */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700, mr: 8 }}
                                        >
                                            Work Days
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        {workDays}
                                    </Typography>
                                </Box>
                                {/* Appointment Fee */}
                                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700, mr: 8 }}
                                        >
                                            Appointment
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        ৳ {price}
                                    </Typography>
                                </Box>
                                {/* Discount Fee */}
                                {price >= 25000 && <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 2 }}>
                                    <Box sx={{ width: '180px' }}>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontSize: '20px', color: '#222222', fontWeight: 700, mr: 8 }}
                                        >
                                            Total
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                    >
                                        ৳ {total} Got {discount}% Discount
                                    </Typography>
                                </Box>}
                                {/* Create Appointment */}
                                <Button
                                    sx={{ mt: 3, px: 4, py: 1.5 }}
                                    className={classes.btnRegular}
                                    onClick={handleOpen}
                                >
                                    Create Appointment
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* Modal */}
                <AppointmentModal
                    setIsAppointment={setIsAppointment}
                    doctor={doctor}
                    total={total}
                    open={open}
                    handleClose={handleClose}
                />
            </Container>
            <Footer />
        </Box>
    );
};

export default Profile;