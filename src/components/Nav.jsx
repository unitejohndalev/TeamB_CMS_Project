import React from 'react';
import logo from '../assets/companyLogo.png';

const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-container-left">
          <img className='logo' src={logo} alt="no" />
          <ul>Dashboard</ul>
          <ul>Profile</ul>
          <ul>My Course</ul>
          <ul>Forum</ul>
        </div>

        <div className="nav-container-right">
          <li> </li>
          </div>
       
      </nav>
    </div>
  );
};

export default Nav;
