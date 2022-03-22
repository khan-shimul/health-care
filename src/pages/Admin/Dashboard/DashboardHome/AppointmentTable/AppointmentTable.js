import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';
import Swal from 'sweetalert2';



export default function AppointmentTable() {
    const [appointments, setAppointments] = React.useState([]);

    // Load Data from DB
    React.useEffect(() => {
        fetch('https://whispering-escarpment-66831.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [appointments])

    // Handle Status Update
    const handleAppointmentStatus = id => {
        fetch(`https://whispering-escarpment-66831.herokuapp.com/appointments/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }

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
                            title: 'Success!!',
                            text: `You have successfully Deleted!`
                        });
                        const remainingAppointments = appointments.filter(appointment => appointment._id !== id);
                        setAppointments(remainingAppointments)
                    }
                })
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ background: '#FF7F47' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 700 }}>User Name</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Doctor Name</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Fees</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Date</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Email</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Status</TableCell>
                        <TableCell sx={{ fontWeight: 700 }} align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {appointments.map((appointment) => (
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
                            <TableCell align="right">{appointment.email}</TableCell>
                            <TableCell align="right">{appointment.status}</TableCell>
                            <TableCell align="right"><ButtonGroup variant="outlined" size="small" aria-label="small button group">
                                <Button onClick={() => handleAppointmentStatus(appointment._id)}>✓</Button>
                                <Button color="error" onClick={() => handleAppointmentRemove(appointment._id)}>X</Button>
                            </ButtonGroup></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
