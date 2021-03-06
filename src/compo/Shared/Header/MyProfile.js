import { Box } from '@mui/material';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const MyProfile = ({ classes }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <div>
            {/* Mobile View */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, color: '#1C2A47', ml: 2 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block' },
                    }}
                >
                    <Box onClick={handleCloseNavMenu}>
                        <Link to="/my-appointment">
                            <MenuItem className={classes.menu}>My Appointment</MenuItem>
                        </Link>
                        <Link to="/feedback">
                            <MenuItem className={classes.menu}>Feedback</MenuItem>
                        </Link>
                    </Box>
                </Menu>
            </Box>
        </div>
    );
};

export default MyProfile;