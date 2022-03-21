import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../../images/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import useAuth from '../../../hooks/useAuth/useAuth';
import { useStyles } from '../../IndexView/Banner/Banner';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const useStyles2 = makeStyles({
    root: {
        background: '#fff !important',
        padding: '10px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px !important'
    },
    menu: {
        color: '#000 !important',
        fontSize: '17px !important',
        transition: '0.3s !important',
        '&:hover': {
            background: 'transparent !important',
            color: '#0186D5 !important',
        }
    },
    activePage: {
        color: '#F34A4A !important',
        borderBottom: '1.5px solid #0186D5',
    }
})

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, logout } = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const classes = useStyles2();
    const btnClass = useStyles();

    return (
        <AppBar
            component="div"
            position="sticky"
            className={classes.root}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Box
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src={logo} alt="" />
                    </Box>
                    {/* Mobile View */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: '#1C2A47' }}>
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Box onClick={handleCloseNavMenu}>
                                <Link to="/home">
                                    <MenuItem className={classes.menu} >Home</MenuItem>
                                </Link>
                                <Link to="/doctors">
                                    <MenuItem className={classes.menu}>Doctors</MenuItem>
                                </Link>
                                <Link to="/about">
                                    <MenuItem className={classes.menu}>About</MenuItem>
                                </Link>
                                <Link to="/contact">
                                    <MenuItem className={classes.menu}>Contact</MenuItem>
                                </Link>
                                {
                                    user?.email ?
                                        <MenuItem onClick={logout} className={classes.menu}>Logout</MenuItem>
                                        :
                                        <Link to="/login">
                                            <MenuItem className={classes.menu}>Login</MenuItem>
                                        </Link>
                                }
                            </Box>
                        </Menu>
                    </Box>
                    {/* Mobile Logos View */}
                    <Box
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={logo} alt="" />
                    </Box>
                    {/* Desktop View */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
                        <NavLink to="/home"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>Home</Button>
                        </NavLink>
                        <NavLink to="/doctors"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>Doctors</Button>
                        </NavLink>
                        <NavLink to="/about"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>About</Button>
                        </NavLink>
                        <NavLink to="/contact"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>Contact</Button>
                        </NavLink>
                        {
                            !user.email && <NavLink to="/login"
                                className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                            >
                                <Button className={classes.menu}>Login</Button>
                            </NavLink>
                        }

                        {
                            user.email && <Button onClick={logout} className={classes.menu}>Logout</Button>
                        }
                        <Button
                            sx={{ px: 4, py: 1, ml: 3 }}
                            className={btnClass.btnRegular}
                        >
                            Book Appointment
                        </Button>
                        <NavLink to="/dashboard"
                            className={(navInfo) => ((navInfo.isActive ? classes.activePage : ''))}
                        >
                            <Button className={classes.menu}>Dashboard</Button>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
