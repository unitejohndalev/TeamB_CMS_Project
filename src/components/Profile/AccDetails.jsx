import Footer from "../Footer";

const AccDetails = () => {
  return (
    <>
      {/* 1/11/2024 Created Account Details UI Ouline */}
      {/* Note: Change UI according to UI Designed */}
      <div className="mb-10 relative w-[90%] flex flex-col justify-end items-start h-full  lg:w-[700px] lg:h-[350px] xl:w-[979px] xl:h-[512px] bg-[#126912] lg:rounded-md shadow-md ">
        <p className="absolute top-0  text-white lg:text-[1.5rem] xl:text-[32px] lg:italic lg:pl-5">
          Account Details
        </p>
        <div className="absolute bottom-[-.3rem] flex items-center flex-col h-full gap-y-5 w-[90%] lg:h-[320px]  lg:w-[680px]  xl:w-[948px] xl:h-[455px] bg-[#BCE8B1] lg:rounded-b-md lg:rounded-tr-md shadow-md">
          <div className="xl:w-[90%] flex flex-col items-center mt-10 xl:mt-7 lg:gap-y-[2rem] xl:gap-y-[3rem]">
            <p className="relative lg:w-[600px] lg:h-[50px] xl:w-[829px] xl:h-[70px] bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex items-center pl-2 ">
              <span className="absolute top-1">Email</span>
            </p>
            <p className="relative lg:w-[600px] lg:h-[50px] xl:w-[829px] xl:h-[70px] bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex items-center pl-2 ">
              <span className="absolute top-1">Username</span>
            </p>
            <p className="relative lg:w-[600px] lg:h-[50px] xl:w-[829px] xl:h-[70px] bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg  flex items-center pl-2 ">
              <span className="absolute top-1">Password</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccDetails;
//1/19/2024
