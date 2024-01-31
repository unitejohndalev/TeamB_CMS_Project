// 1/31/2024 from junite, to ced. TODO
//Only show

import React, { useContext } from "react";
import logo from "../../assets/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
//import profile logo
import profileLogo from "../../assets/profile.svg";

//import react icon
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { NavBarContext } from "../context/NavBarContext";

const Nav = () => {
  const {
    header,
    dashBoardShow,
    profileShow,
    courseListShow,
    showDropDown,
    setShowDropDown,
    showLogout,
    show,
    setShow,
    showLogo,
    showDashBoard,
    showProfile,
    showCourseList,
  } = useContext(NavBarContext);

  return (
    <>
      <nav className="fixed w-full top-0 z-[100] ">
        <div
          className={
            header
              ? "relative flex justify-between items-center lg:justify-normal bg-[#D9FFCF] h-[69px] transition-all "
              : "relative flex justify-between items-center lg:justify-normal bg-transparent h-[69px] transition-all "
          }>
          <Link to="/">
            <img
              className="  ml-10 xl:w-[171.67px] xl:h-[50px] lg:h-[5rem] xl:ml-[95px] py-3 xl:py-1"
              src={logo}
              alt="tsukidenLogo"
              width={171.67}
              height={50}
              onClick={showLogo}
            />
            {/* January 30, 2024 - Cedrick */}
          </Link>
          <div className="hidden lg:flex lg:items-end xl:w-[300px] lg:pl-10 lg:min-w-[280px] lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/" onClick={showDashBoard}>
              <ul
                className={
                  dashBoardShow
                    ? "font-semibold text-[#116211] text-center p-1 TeamB_text-shadow   transition-all"
                    : "font-bold TeamB_text-shadow   p-1  hover:text-[#116211] transition-all hover:bg-opacity-[50%] hover:font-semibold "
                }>
                Dashboard
              </ul>
            </Link>
            <Link to="/courselist" onClick={showCourseList}>
              <ul
                className={
                  courseListShow
                    ? "font-semibold text-[#116211]  text-center p-1 TeamB_text-shadow   transition-all"
                    : "font-bold TeamB_text-shadow   p-1  hover:text-[#116211] hover:bg-opacity-[50%] hover:font-semibold transition-all"
                }>
                Course List
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
          <div className="drop-shadow-lg shadow-lg  bg-[#ffffff] cursor-pointer lg:text-[1rem] lg:w-[18vw] 2xl:w-[193px] h-[7vh] rounded-md absolute right-5 hidden border-lime-900 border-[.1rem] lg:flex justify-between items-center p-1 text-[#126912]">
            <img
              src={profileLogo}
              alt=""
              className="h-[5vh] p-1"
              onClick={() => setShowDropDown((prev) => !prev)}
            />
            <p
              onClick={() => setShowDropDown((prev) => !prev)}
              className=" text-shadow text-[2.5vh]">
              Hi, JMacaballes!
            </p>
            <span
              onClick={() => setShowDropDown((prev) => !prev)}
              className="cursor-pointer">
              {showDropDown ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {showDropDown && (
              <div className="absolute bg-[#D9FFCF] right-0 top-12 w-[18vw] flex flex-col justify-center items-center border-solid border-2 border-[#116211]">
                <Link
                  to="/profile"
                  onClick={showProfile}
                  className="w-full text-center ">
                  <p
                    className={
                      profileShow
                        ? showDropDown
                        ? "font-semibold text-[#116211] text-center p-1 text-shadow transition-all bg-[#D9FFCF] text-[#000000] text-center p-1-shadow  hover:font-semibold"
                        : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                      : showDropDown
                      ? "font-semibold text-[#000000] text-start p-1 text-shadow hover:font-semibold hover:text-[#116211]"
                      : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                    }>
                    <CgProfile className="text-[4vh] inline-block align-middle mr-3 " />
                    PROFILE
                  </p>
                </Link>
                <Link
                  to="/"
                  src="CgProfile"
                  onClick={showLogout}
                  className="w-full text-center ">
                  <p
                    className={
                      profileShow
                        ? showDropDown
                          ? "font-semibold text-[#116211] text-center p-1 text-shadow transition-all text-center p-1  text-shadow  hover:bg-opacity-[50%] "
                          : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                        : showDropDown
                        ? "font-semibold text-red-600 text-start p-1 bg-[#D9FFCF] text-shadow hover:text-red-500"
                        : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                    }>
                      <MdOutlineLogout className=" text-[4vh] inline-block align-middle mr-3 " />
                    LOGOUT
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
//1/24/2024
