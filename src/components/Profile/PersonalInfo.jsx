//january 12 2024
import axios from "axios";
import { useEffect, useState } from "react";

//import logo for profile pic
import profilePic from "../../assets/Registration.svg";

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
              <div className="lg:flex lg:flex-col lg:w-[70%] xl:gap-y-10 lg:gap-y-5">
                <input
                  className="input-style lg:w-full lg:mt-10 xl:mt-20"
                  placeholder="First Name * "
                  type="text"
                  name="instructor_first_name" //should be edited
                  value={first_name}
                  onChange={(e) => handleInputChange(e)}
                />

                <input
                  className="input-style lg:w-full"
                  placeholder="Last Name * "
                  type="text"
                  name="instructor_last_name" //edit
                  value={last_name}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>
            <div className="lg:flex lg:gap-y-5 lg:flex-col xl:gap-y-10">
              <input
                className=" input-style lg:mt-5"
                placeholder="Username * "
                type="text"
                name="instructor_username" //edit
                value={username}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                className=" input-style"
                placeholder="Email Address * "
                type="text"
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

//january 12 2024
