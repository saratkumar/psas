import React, { useRef, useLayoutEffect } from 'react';
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
import AdbIcon from '@mui/icons-material/Adb';
import { MENUS, MORE_MENUS } from '../../constants/menu';
import HouseIcon from '@mui/icons-material/House';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Link,
} from "react-router-dom";
import './Header.css';
import logo from './../../images/logo.png'
const pages = MENUS;
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const stickyHeader = useRef();
  // useLayoutEffect(() => {
  //   const mainHeader = document.getElementById('mainHeader');
  // //   let fixedTop = stickyHeader.current.offsetTop
  // //   const fixedHeader = () => {
  // //     if (window.pageYOffset < fixedTop) {
  // //       mainHeader.classList.remove('fixedTop')
  // //     } else {
  // //       mainHeader.classList.add('fixedTop')
  // //     }
  // //   }
  // //   window.addEventListener('scroll', fixedHeader)
  // }, [window.location.pathname])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar className="z-1 fixedTop" position="static" id="mainHeader" ref={stickyHeader}>
      <Container maxWidth="xl">
        <Toolbar >
        <Box sx={{display: { xs: 'none', md: 'flex' }}} className="logo" ></Box>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: 'inherit',textDecoration: 'none', width: "100%"}}>
            Pegasus Sports & Mental Wellbeing Academy
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu id="menu-appbar" anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left',}}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{display: { xs: 'block', md: 'none' },}}
            >
            {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> <Link to={page.link}>{page.name}</Link></Typography>
                </MenuItem>
              ))}

              {MORE_MENUS.map(el => {
                return(<Typography textAlign="center"><Link to={el.link}><MenuItem >{el.name}</MenuItem></Link></Typography>)
              })}
            </Menu>
          </Box>
          {/* <Box sx={{display: { xs: 'flex', md: 'none' }}} className="logo" ></Box> */}
          <Typography variant="h5" noWrap component="a" href="" sx={{ mr: 2, display: { xs: 'flex', md: 'none' },flexGrow: 1, color: 'inherit', textDecoration: 'none', fontSize: "24px", fontWeight:"bold", letterSpacing: "4px"}}>
            P.S.A.S
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, width: "100%", justifyContent: "right" }} className="color-white">
            {pages.map((page) => (
              <Button key={page.id} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to={page.link} className="menu">{page.name}</Link>
              </Button>
            ))}

            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                          <span style={{fontSize: "14px"}}> MORE </span><ExpandMoreIcon> </ExpandMoreIcon>
                          </IconButton>
                          <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorEl)} onClose={handleClose}>
                            {MORE_MENUS.map(el => {
                              return(<Link to={el.link}><MenuItem >{el.name}</MenuItem></Link>)
                            })}
                          </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }} className="color-white">
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
              <HouseIcon />
            </IconButton>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
              <ShoppingBagIcon />
            </IconButton>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" color="inherit">
              <SupervisedUserCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>  


      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;