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
        <div className="flex justify-between lg:justify-normal bg-[#BCE8B1] py-3 lg:py-0">
          <img
            className="h-[3rem] lg:h-[5rem] pl-2"
            src={logo}
            alt="tsukidenLogo"
          />
          <div className="hidden lg:flex lg:items-end lg:w-[30%] lg:pl-10 lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/">
              <button>
                <ul>Dashboard</ul>
              </button>
            </Link>
            <Link to="/profile">
              <button>
                <ul>Profile</ul>
              </button>
            </Link>
            <Link to="/courselist">
              <button>
                <ul>My Course</ul>
              </button>
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
