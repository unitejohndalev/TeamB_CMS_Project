import React, { useState } from "react";
import logo from "../assets/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";

const Nav = () => {
  //react hook for showing and hiding element
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="sticky top-0">
        <div className="flex justify-between lg:justify-normal bg-[#BCE8B1] py-3 lg:py-0">
          <img
            className="h-[3rem] lg:h-[5rem] pl-2"
            src={logo}
            alt="tsukidenLogo"
          />
          <div className="hidden lg:flex lg:items-end lg:w-[30%] lg:pl-10 lg:justify-between">
            <ul>Dashboard</ul>
            <ul>Profile</ul>
            <ul>My Course</ul>
            <ul>Forum</ul>
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
