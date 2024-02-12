import Footer from "../Footer";

const AccDetails = () => {
  return (
    <>
      {/* 1/11/2024 Created Account Details UI Outline */}
      {/* Note: Change UI according to UI Designed */}

      <div className="static bottom-[-.3rem] mb-10 ml-8 mr-9 mt-8 flex items-center flex-col h-full lg:h-[23.3rem] gap-y-5 w-full lg:w-[43.1rem] xl:w-[680px] bg-[#BCE8B1] lg:rounded-b-md rounded shadow-md p-4 lg:p-0 lg:px-6">
        <div className="w-full lg:w-[90%] flex flex-col items-center mt-10 lg:mt-7 lg:gap-y-[2rem] xl:gap-y-[3rem]">
          <div className="relative w-full mt-10 lg:max-w-[600px] xl:max-w-[829px] bg-[#D1DFCD] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg pl-2">
            <input type="text" className="static w-full lg:w-full xl:w-full h-[3rem] lg:h-[3rem] xl:h-[4rem] lg:text-[.8rem] 2xl:text-[16px] bg-transparent focus:outline-none px-2" placeholder="Email" readOnly />
          </div>
          <div className="relative w-full lg:max-w-[600px] xl:max-w-[829px] bg-[#D1DFCD] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg pl-2 mt-4 lg:mt-6">
            <input type="text" className="static w-full lg:w-full xl:w-full h-[3rem] lg:h-[3rem] xl:h-[4rem] lg:text-[.8rem] 2xl:text-[16px] bg-transparent focus:outline-none px-2" placeholder="Username" readOnly />
          </div>
          <button className="static cursor-pointer w-[160px] lg:w-[140px] xl:w-[160px] h-[3rem] lg:h-[3rem] xl:h-[3.75rem] text-center font-semibold bg-[#D1DFCD] lg:text-[.8rem] 2xl:text-[16px] lg:rounded-lg 2xl:rounder-[5px] text-[#4D4141] text-opacity-[53%] shadow-lg mt-4 lg:mt-6 whitespace-nowrap mb-4">
            Change Password
          </button>
        </div>
      </div>
    </>
  );
};

export default AccDetails;
