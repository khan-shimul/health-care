import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth/useAuth';
import DateTime from '../DateTime/DateTime';
import { useStyles2 } from '../../../pages/Login/Login/Login';
import { useStyles } from '../../IndexView/Banner/Banner';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4
};

const useStyles3 = makeStyles({
    fieldInput: {
        // color: 'red',
        width: '92%',
        padding: '20px 15px',
        border: '1px solid #C5C5C5',
        borderRadius: '3px',
        fontSize: '16px',
        marginBottom: '15px'

    }
})

export default function AppointmentModal({ setIsAppointment, doctor, open, handleClose, total }) {
    const { register, handleSubmit } = useForm();
    // Date and Time
    const [value, setValue] = React.useState(new Date());
    const { user } = useAuth();

    // Handle Appointment Form
    const onSubmit = data => {
        data.date = value;
        const appointment = {
            ...data,
            date: data.date.toLocaleDateString(),
            email: user.email,
            price: doctor.price,
            status: 'Pending'
        };

        // send data to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsAppointment(true)
                    handleClose();
                }
            })

    };

    // handle Discount
    // if (doctor.price >= 500) {
    //     const discount = doctor.price * (20 / 100);
    //     const total = doctor.price - discount;
    //     doctor.price = total;
    // }

    const classes = useStyles()
    const classes3 = useStyles3();
    const classes2 = useStyles2();

    return (
        <Container>
            <Modal

                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ my: 2 }}>
                        Create Appointments with the Doctor
                    </Typography>
                    {/* Appointment Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className={classes3.fieldInput}
                            readOnly
                            defaultValue={doctor.name}
                            {...register("doctorName")}
                        />
                        <TextField
                            sx={{ width: { xs: 1, md: '100%' }, mb: 2 }}
                            className={classes2.textFiled}
                            type="text"
                            required
                            label="Your Full Name"
                            variant="outlined"
                            {...register("name")}
                        />
                        {/* <TextField
                            sx={{ width: { xs: 1, md: '100%' }, mb: 2 }}
                            className={classes2.textFiled}
                            type="email"
                            required
                            label="Email Address"
                            variant="outlined"
                            {...register("email")}
                        /> */}
                        <TextField
                            sx={{ width: { xs: 1, md: '100%' }, mb: 3 }}
                            className={classes2.textFiled}
                            type="number"
                            required
                            label="Your Phone Number"
                            variant="outlined"
                            {...register("phoneNumber")}
                        />
                        <DateTime
                            value={value}
                            setValue={setValue}
                            {...register("date")}
                        />
                        {/* Default Price */}
                        {!total ? <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 1, mt: 1 }}>
                            <Box sx={{ width: '150px' }}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: '16px', color: '#222222', fontWeight: 700, mr: 5 }}
                                >
                                    Fees
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                            >
                                {doctor.price}
                            </Typography>
                        </Box>
                            :
                            <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #C5C5C5', py: 1, mt: 1 }}>
                                <Box sx={{ width: '150px' }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontSize: '16px', color: '#222222', fontWeight: 700, mr: 5 }}
                                    >
                                        Fees
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '16px', color: '#565656', fontWeight: 500 }}
                                >
                                    {total}
                                </Typography>
                            </Box>
                        }
                        <Button
                            type="submit"
                            sx={{ px: 4, py: 1, mt: 3 }}
                            className={classes.btnRegular}
                        >
                            Appointment Now
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Container>
    );
}
