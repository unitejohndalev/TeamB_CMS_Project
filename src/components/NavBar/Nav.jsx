import React, { useState } from "react";
import logo from "../../assets/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";
import { Link } from "react-router-dom";

const Nav = () => {
  //react hook for showing and hiding element
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-[100]">
        <div className="flex justify-between items-center lg:justify-normal bg-[#BCE8B1] h-[69px] ">
          <img
            className="  ml-10 xl:w-[171.67px] xl:h-[50px] lg:h-[5rem] xl:ml-[95px] py-3"
            src={logo}
            alt="tsukidenLogo"
            width={171.67}
            height={50}
          />
          <div className="hidden lg:flex lg:items-end lg:w-[30%] lg:pl-10 lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/">
              <ul >Dashboard</ul>
            </Link>
            <Link to="/profile">
              <ul>Profile</ul>
            </Link>
            <Link to="/courseoverview">
              <ul>My Course</ul>
            </Link>
          </div>
          <div className="relative flex items-center px-3 lg:hidden">
            <GiHamburgerMenu
              className="text-[2rem]"
              onClick={() => setShow((prev) => !prev)}
            />
            {show && <NavSideBar />}
          </div>
        </div>
    
      </nav>
    </>
  );
};

export default Nav;
