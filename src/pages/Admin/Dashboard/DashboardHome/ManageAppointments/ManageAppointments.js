import { Box, Typography } from '@mui/material';
import AppointmentTable from '../AppointmentTable/AppointmentTable';

const ManageAppointments = () => {

    return (
        <Box component="section">
            <Typography
                variant="h6"
                sx={{ fontSize: '25px', fontWeight: 700, mb: 3, mt: 1 }}
            >ManageAppointments</Typography>

            <AppointmentTable />
        </Box>
    );
};

export default ManageAppointments;