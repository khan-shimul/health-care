import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useStyles } from '../../../compo/IndexView/Banner/Banner';
import { useStyles2 } from '../../Login/Login/Login';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    // Handle Make Admin
    const onSubmit = data => {
        console.log(data)
    };

    const classes = useStyles();
    const classes2 = useStyles2();

    return (
        <div>
            <Typography sx={{ fontSize: '22px', fontWeight: 700, my: 5, textAlign: 'center' }}>MakeAdmin</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        sx={{ width: { xs: 1, md: '40%' }, mb: 2 }}
                        className={classes2.textFiled}
                        type="email"
                        required
                        label="Email Address"
                        variant="outlined"
                        {...register("email")}
                    />
                    <Button
                        sx={{ width: { xs: 1, md: '15%' }, ml: 1, py: 1.5, mb: 2 }}
                        className={classes.btnRegular}
                        type="submit"
                    >
                        Make Admin</Button>
                </Box>
            </form>
        </div>
    );
};

export default MakeAdmin;