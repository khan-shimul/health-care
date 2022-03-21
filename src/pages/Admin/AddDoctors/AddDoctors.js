import React from 'react';
import axios from 'axios';
import { Box, Button, Container, Grid, Typography, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';


export const useStyles2 = makeStyles({
    textFiled: {
        '& label.Mui-focused': {
            color: '#FF725E',
        },
        '& .MuiInput-underline:after': {
            // borderBottomColor: 'pink',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DCDCDC',
            },
            '&:hover fieldset': {
                borderColor: '#DCDCDC',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FF725E',
            },
        }
    }
});

const AddDoctors = () => {
    const { register, handleSubmit } = useForm();

    // add Doctors api
    const onSubmit = data => {
        data.discount = 20;
        axios.post('http://localhost:5000/doctors', { data })
            .then(result => {
                if (result.data.insertedId) {
                    alert('added successfully')
                }
            })
    };

    // const classes = useStyles();
    const classes2 = useStyles2();
    return (
        <Box>
            <Container>
                <Box sx={{ my: 2 }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box>
                                <Typography variant="h5" sx={{ my: 3, fontWeight: 600, fontFamily: 'Lato' }}>Please Add Your Doctors Here!!</Typography>
                                {/* Add Doctor Form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Name"
                                        variant="outlined"
                                        {...register("name")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Title"
                                        variant="outlined"
                                        {...register("title")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Doctor Image URL"
                                        variant="outlined"
                                        {...register("image")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Appointment Cost"
                                        variant="outlined"
                                        {...register("price")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Speciality"
                                        variant="outlined"
                                        {...register("speciality")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Degrees"
                                        variant="outlined"
                                        {...register("degrees")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Experience"
                                        variant="outlined"
                                        type="number"
                                        {...register("experience")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Work Days"
                                        variant="outlined"
                                        {...register("workDays")}
                                    />
                                    <TextField
                                        sx={{ width: { xs: 1, md: '80%' }, mb: 2 }}
                                        className={classes2.textFiled}
                                        required
                                        label="Description"
                                        variant="outlined"
                                        multiline
                                        maxRows={4}
                                        {...register("description")}
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

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    );
};

export default AddDoctors;