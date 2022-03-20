import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import MasksIcon from '@mui/icons-material/Masks';

const Testing = () => {
    return (
        <Box variant="section" sx={{ my: 5 }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{ fontSize: '35px', fontWeight: 700 }}
                    >
                        Why We The Best
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', mx: 'auto', height: '1.5px', width: '80px', background: '#FE824C' }}></Box>
                </Box>
                <Grid container spacing={6}>
                    {/* Operation Theater */}
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ background: '#0186D5', px: 2, mr: 2.5, height: '70px', width: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                <MedicalInformationIcon
                                    style={{ color: '#fff', fontSize: '40px' }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', fontWeight: 700 }}
                                >
                                    Operation Theater
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '14px' }}
                                >
                                    An operating theater is a facility within a hospital where surgical operations are carried out in an aseptic environment. The term is "operating theater" referred to a non-sterile, tiered theater.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Emergency Services */}
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ background: '#0186D5', px: 2, mr: 2.5, height: '70px', width: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                <LocalHospitalIcon
                                    style={{ color: '#fff', fontSize: '40px' }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', fontWeight: 700 }}
                                >
                                    Emergency Services
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '14px' }}
                                >
                                    Emergency services and rescue services are organizations which ensure public safety and health by addressing different emergencies. Some of these agencies exist solely for addressing certain.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Rehabilitation Center */}
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ background: '#0186D5', px: 2, mr: 2.5, height: '70px', width: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                <VaccinesIcon
                                    style={{ color: '#fff', fontSize: '40px' }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', fontWeight: 700 }}
                                >

                                    Rehabilitation Center
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '14px' }}
                                >
                                    Rehabilitation is the process of helping an individual achieve the highest level of function, independence, and quality of life possible. Rehabilitation does not reverse or undo the damage.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Qualified Doctors */}
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ background: '#0186D5', px: 2, mr: 2.5, height: '70px', width: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px' }}>
                                <MasksIcon
                                    style={{ color: '#fff', fontSize: '40px' }}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{ fontSize: '30px', fontWeight: 700 }}
                                >

                                    Qualified Doctors
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontSize: '14px' }}
                                >
                                    qualified doctor means a person who holds a degree recognised by the Medical Council of India and is registered by the Medical Council of any State; (b) “nurse” means a person who holds a certificate.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Testing;