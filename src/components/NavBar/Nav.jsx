import React, { useState } from "react";
import logo from "../../assets/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";
import { Link } from "react-router-dom";

const Nav = () => {
  //react hook for showing and hiding element
  const [show, setShow] = useState(false);

  //nav active focus when clicking elements
  const [dashBoardShow, setDashBoardShow] = useState(false)
  const [profileShow, setProfileShow] = useState(false)
  const [courseListShow, setCourseListShow] = useState(false)

  const showDashBoard = () => {
    setDashBoardShow(true)
    setProfileShow(false)
    setCourseListShow(false)
  }
  const showProfile = () => {
    setProfileShow(true);
    setDashBoardShow(false);
    setCourseListShow(false);
  };
  const showCourseList = () => {
    setCourseListShow(true);
    setProfileShow(false);
    setDashBoardShow(false);
  };

  
  return (
    <>
      <nav className="sticky top-0 z-[100]">
        <div className="flex justify-between items-center lg:justify-normal bg-[#BCE8B1] h-[69px] ">
         
         <Link to="/">
          
          <img
            className="  ml-10 xl:w-[171.67px] xl:h-[50px] lg:h-[5rem] xl:ml-[95px] py-3 xl:py-1"
            src={logo}
            alt="tsukidenLogo"
            width={171.67}
            height={50}
          />
         </Link>
          <div className="hidden lg:flex lg:items-end xl:w-[32%] 2xl:w-[25%] lg:pl-10 lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/" onClick={showDashBoard}>
              <ul
                className={
                  dashBoardShow ? "font-bold text-[#126912]" : "font-light"
                }>
                Dashboard
              </ul>
            </Link>
            <Link to="/profile" onClick={showProfile}>
              <ul
                className={
                  profileShow ? "font-bold text-[#126912]" : "font-light"
                }>
                Profile
              </ul>
            </Link>
            <Link to="/courselist" onClick={showCourseList}>
              <ul
                className={
                  courseListShow ? "font-bold text-[#126912]" : "font-light"
                }>
                My Course
              </ul>
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
//1/18/2024
