import * as React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/AuthSlice'

import styled from 'styled-components';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
    {
        "titulo": "Inicio",
        "path": "/dashboard/inicio"
    },
    {
        "titulo": "Chat",
        "path": "/dashboard/chat"
    },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const CustomNavLink = styled.button`
    background: #1976d2;
    border-radius: 3px;
    color: white;
    font-size: 20px;
    margin-inline: 10px;
    padding: 10px;
    text-decoration: none;

    :hover{
        background: #318ce7;
    }
`

export const Navbar = () => {

    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogOut = () => {
        dispatch( logout() )
        localStorage.removeItem('loggedIn')
    }

    return (
        <AppBar position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        as={NavLink}  
                        to="/dashboard/inicio"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Prueba
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            {pages.map((page) => (
                                <MenuItem key={page.titulo} onClick={handleCloseNavMenu}>
                                    <Typography 
                                        as={NavLink}  
                                        to={page.path} 
                                        key={page.titulo} 
                                        textAlign="center"
                                        sx={{ 'textDecoration': 'none', 'color': '#1976d2'}}
                                        >{page.titulo}</Typography>
                                </MenuItem>
                            ))}
                             <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography 
                                        as={NavLink}  
                                        to='/login'
                                        textAlign="center"
                                        onClick={ handleLogOut }
                                        sx={{ 'textDecoration': 'none', 'color': '#1976d2'}}
                                        >LogOut</Typography>
                                </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Prueba
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, 'justifyContent': 'space-evenly' }}>
                        {pages.map((page) => (

                            <CustomNavLink
                                as={NavLink}
                                to={page.path}
                                key={page.titulo}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.titulo}
                            </CustomNavLink>

                        ))}
                        <CustomNavLink
                                as={NavLink}
                                to="/login"
                                onClick={() => { handleCloseNavMenu(); handleLogOut();}}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                LogOut
                            </CustomNavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

