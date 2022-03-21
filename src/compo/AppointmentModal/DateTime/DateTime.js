import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function DateTime({ value, setValue }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} sx={{ width: '100%' }} />}
                label="Appointment Date"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
            />
        </LocalizationProvider>
    );
};