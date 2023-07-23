import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import "./Navbar.scss";
//import CloseIcon from './CloseIcon';
import BurgerIcon from './BurgerIcon';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar = () => {
   
  const location = useLocation();


  {/*mobile */}

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
      <div className="container-navbar">
        <ul className='nav-list'>
          <li className="nav-list__item">
          <Link
              to="/"
              className={`nav-list__link ${location.pathname === "/" ? "nav-list__link--active" : ""}`}
              
            >
              Home
            </Link>
          </li>
          <li className="nav-list__item">
          <Link
              to="/about"
              className={`nav-list__link ${location.pathname === "/about" ? "nav-list__link--active" : ""}`}
              
              >About
            </Link>
          </li>
          <li className="nav-list__item">
          <Link
              to="/contact"
              className={`nav-list__link ${location.pathname === "/contact" ? "nav-list__link--active" : ""}`}
            >
              Contact
            </Link>
          </li>
        </ul>

    {/*mobile-btn */}

        <div className='mobile-menu'>
      <div
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <BurgerIcon />
      </div>
      <Menu className='active-Menu__mobile'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
         MenuListProps={{
          'aria-labelledby': 'basic-button',
         
          }}
                >
        <MenuItem sx={{
                fontFamily: "'Dongle', sans-serif",
                fontSize: "30px",
                weight: '500',
                margin: "0",
                color: 'white',
                
                }}  onClick={handleClose} component={Link}
                to="/">Home</MenuItem>
        <MenuItem  sx={{
                fontFamily: "'Dongle', sans-serif",
                fontSize: "30px",
                weight: '500',
                margin: "0",
                color: 'white',
                }}   onClick={handleClose} component={Link}
                to="/about">About</MenuItem>
        <MenuItem  sx={{
                fontFamily: "'Dongle', sans-serif",
                fontSize: "30px",
                weight: '500',
                margin: "0",
                color: 'white',
                }} onClick={handleClose}  component={Link}
                to="/contact">Contact</MenuItem>
      </Menu>
    </div>







      </div>
    </nav>
  );
}

export default Navbar;








