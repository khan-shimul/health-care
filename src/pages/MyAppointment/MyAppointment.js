import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../compo/Shared/Footer/Footer';
import Header from '../../compo/Shared/Header/Header';
import useAuth from '../../hooks/useAuth/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';
import Swal from 'sweetalert2';

const MyAppointment = () => {
    const [myAppointments, setMyAppointments] = useState([]);

    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myAppointments?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyAppointments(data)
                console.log(data)
            })
    }, [myAppointments]);

    // Handle Delete Appointment
    const handleAppointmentRemove = id => {
        const proceed = window.confirm('Are you sure you want to delete this appointment?');
        if (proceed) {
            const url = `https://whispering-escarpment-66831.herokuapp.com/appointments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Cancel Appointment',
                            text: `You have successfully Cancel Your Appointment!`
                        });
                        const remainingAppointments = myAppointments.filter(appointment => appointment._id !== id);
                        setMyAppointments(remainingAppointments)
                    }
                })
        }
    };

    return (
        <div>
            <Header />
            <Box component="section" sx={{ my: 5 }}>
                <Container maxWidth="lg">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ background: '#FF7F47' }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 700 }}>Patient</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }} align="right">Doctor</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }} align="right">Fees</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }} align="right">Date</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }} align="right">Status</TableCell>
                                    <TableCell sx={{ fontWeight: 700 }} align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myAppointments.map((appointment) => (
                                    <TableRow
                                        key={appointment._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {appointment.name}
                                        </TableCell>
                                        <TableCell align="right">{appointment.doctorName}</TableCell>
                                        <TableCell align="right">{appointment.price}</TableCell>
                                        <TableCell align="right">{appointment.date}</TableCell>
                                        <TableCell align="right">{appointment.status}</TableCell>
                                        <TableCell align="right"><ButtonGroup variant="outlined" size="small" aria-label="small button group">
                                            <Button color="error" onClick={() => handleAppointmentRemove(appointment._id)}>Cancel</Button>
                                        </ButtonGroup></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default MyAppointment;