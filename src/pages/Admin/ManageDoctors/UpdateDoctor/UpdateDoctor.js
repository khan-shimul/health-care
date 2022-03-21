import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, TextField } from '@mui/material';
import { useStyles2 } from '../../AddDoctors/AddDoctors';
import Swal from 'sweetalert2';

const UpdateDoctor = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    // Destructuring
    const { name, title, price, image, description, experience, speciality, degrees, workDays, } = doctor;

    // Load Doctor
    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, []);

    // handle change doctor data
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDoctorData = { ...doctor };
        newDoctorData[field] = value;
        setDoctor(newDoctorData);
    };

    // Handle Update Doctor Info
    const handleUpdateDoctor = e => {
        e.preventDefault();
        const url = `http://localhost:5000/doctors/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctor)
        })
            .then(res => res.json())
            .then(data => {
                // Display Successfully Update Message
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!!',
                        text: `You have successfully Updated!`
                    });
                    setDoctor({});
                };
            })

    };

    const classes2 = useStyles2();

    return (
        <Box>
            <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Please Add Your Doctors Here!!</Typography>
            {/* Add Doctor Form */}
            <Box>
                <form onSubmit={handleUpdateDoctor}>
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Name"
                        name="name"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={name || ''}
                        onChange={handleOnChange}

                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Title"
                        name="title"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={title || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Doctor Image URL"
                        name="image"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={image || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Appointment Cost"
                        name="price"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={price || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Speciality"
                        name="speciality"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={speciality || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Degrees"
                        name="degrees"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={degrees || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Experience"
                        name="experience"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={experience || ''}
                        type="number"
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Work Days"
                        name="workDays"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={workDays || ''}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                        className={classes2.textFiled}
                        required
                        label="Description"
                        name="description"
                        variant="outlined"
                        multiline
                        maxRows={4}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={description || ''}
                        onChange={handleOnChange}
                    />
                    <Button
                        sx={{ width: { xs: 1, md: '20%' }, display: 'block', py: 1.5, mb: 2 }}
                        // className={classes.btnRegular}
                        variant="contained"
                        type="submit"
                    >
                        Add Doctors</Button>
                </form>
            </Box>

        </Box>
    );
};

export default UpdateDoctor;