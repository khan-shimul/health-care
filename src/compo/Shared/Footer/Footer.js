import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Box variant="div">
                <Typography
                    variant="body2"
                    sx={{ background: '#404D5F', textAlign: 'center', color: '#fff', p: 3 }}
                >
                    All Rights Reserve © Shimul Khan 2022. Made with love for great people.
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;