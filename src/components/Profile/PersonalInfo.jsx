//january 12 2024
import axios from "axios";
import { useEffect, useState } from "react";

//import logo for profile pic
import profilePic from "../../assets/Registration.png";
import Footer from "../Footer";

const PersonalInfo = () => {
  const [instructors, setInstructors] = useState([]);

  const [instructor, setInstructor] = useState({
    instructor_first_name: "",
    instructor_last_name: "",
    instructor_username: "",
    instructor_email: "",
  });

  useEffect(() => {
    const loadInstructors = async () => {
      const result = await axios.get("http://localhost:8080/instructors");
      setInstructors(result.data);
    };

    loadInstructors();
  }, []);

  const handleInputChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/instructor", instructor);
  };

  console.log(instructors);
  const { first_name, last_name, email, username } = instructor;
  return (
    <>
      <div className="relative w-[90%] flex flex-col justify-end items-start h-full  lg:w-[700px] lg:h-[480px] xl:w-[979px] xl:h-[702px] bg-[#126912] lg:rounded-md shadow-md">
        <p className="absolute top-0  text-white lg:text-[1.5rem] xl:text-[32px] lg:italic lg:pl-5">
          Personal Information
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="absolute bottom-[-.3rem] flex flex-col h-full gap-y-5 w-[90%] lg:h-[450px]  lg:w-[680px]  xl:h-[655px] xl:w-[948px] bg-[#BCE8B1] lg:rounded-b-md lg:rounded-tr-md shadow-md">
          <div className="lg:w-[90%] lg:m-auto">
            <div className="lg:flex lg:w-[100%] lg:gap-x-5">
              <div className="lg:w-[30%]">
                <img
                  src={profilePic}
                  alt=""
                  className="cursor-pointer hidden lg:flex lg:w-[200px] lg:h-[150px] xl:w-[292px] xl:h-[239px]"
                />
              </div>
              <div className="relative lg:flex lg:flex-col lg:w-[70%] xl:gap-y-10 lg:gap-y-5">
                <label
                  htmlFor="firstName"
                  className=" text-[#4D4141] text-opacity-[53%] absolute z-10 top-10 left-2 text-[.8rem] xl:text-[16px]  xl:top-[5rem]">
                  First Name <span className="text-[#FF2626]">*</span>
                </label>
                <input
                  className="relative input-style lg:w-full lg:mt-10 xl:mt-20 bg-[#EBFFE5]"
                  id="firstName"
                  type="text"
                  name="instructor_first_name" //should be edited
                  value={first_name}
                  onChange={(e) => handleInputChange(e)}
                />
                <label
                  htmlFor="lastName"
                  className=" text-[#4D4141] text-opacity-[53%] absolute z-10 top-[6.7rem] left-2 text-[.8rem] xl:text-[16px] xl:top-[10.5rem] ">
                  Last Name <span className="text-[#FF2626]">*</span>
                </label>
                <input
                  className="input-style lg:w-full bg-[#EBFFE5]"
                  id="lastName"
                  type="text"
                  name="instructor_last_name" //edit
                  value={last_name}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="lg:flex lg:gap-y-5 lg:flex-col xl:gap-y-10">
              <label
                htmlFor="Email"
                className=" text-[#4D4141] text-opacity-[53%] absolute xl:top-[20.9rem] xl:left-[3.5rem] z-10 top-[13.2rem] left-[2.7rem] text-[.8rem] xl:text-[16px]">
                Email Address
              </label>
              <input
                className=" input-style lg:mt-5"
                id="Email"
                type="text"
                name="instructor_username" //edit
                value={username}
                disabled
                onChange={(e) => handleInputChange(e)}
              />
              <label
                htmlFor="Username"
                className=" text-[#4D4141] text-opacity-[53%] absolute z-10 top-[17.4rem] left-[2.7rem] text-[.8rem] xl:text-[16px] xl:top-[26.5rem] xl:left-[3.5rem]">
                Contact Number <span className="text-[#FF2626]">*</span>
              </label>

              <input
                className=" input-style bg-[#EBFFE5] placeholder:text-[#4D4141] placeholder:text-opacity-[53%]"
                placeholder="+63"
                type="text"
                id="Username"
                name="instructor_email" //edit
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
              <div className="lg:w-[100%] lg:flex lg:justify-end">
                <button className="w-full mb-5 lg:mb-0 lg:mt-5 btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full ">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfo;

//1/19/2024
