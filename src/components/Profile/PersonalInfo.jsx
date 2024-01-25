/* eslint-disable react/no-unknown-property */
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
    instructor_contact_number: "",
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
    // Validate contact number
    if (instructor.instructor_contact_number.length !== 11) {
      // Show an error message or handle the invalid input as per your requirement
      alert("Contact number must be exactly 11 digits.");
      return; // Stop the submission process
    }

    await axios.post("http://localhost:8080/instructor", instructor);

    setErrorFirstName(false);
    setErrorLastName(false);
    setErrorContactNo(false);

    if (instructor.instructor_first_name === "") {
      setErrorFirstName(true);
    }
    if (instructor.instructor_last_name == "") {
      setErrorLastName(true);
    }
    if (instructor.instructor_contact_number == "") {
      setErrorContactNo(true);
    }

    setEditPersonalInfo(true);
  };

  console.log(instructors);
  const {
    instructor_first_name,
    instructor_last_name,
    instructor_email,
    instructor_contact_number,
  } = instructor;

  //react hook for tooltip
  const [showTooltipFirstName, setShowTooltipFirstName] = useState(false);
  const [showTooltipLastName, setShowTooltipLastName] = useState(false);
  // const [showTooltipEmail, setShowTooltipEmail] = useState(false);
  const [showTooltipContactNo, setShowTooltipContactNo] = useState(false);

 //edit update personal info
 const [editPersonalInfo, setEditPersonalInfo] = useState(true)


//set react hook for all text field
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorContactNo, setErrorContactNo] = useState(false);

  return (
    <>
      <div className="relative w-[90%] flex flex-col justify-end items-start h-full  lg:w-[700px] lg:h-[480px] xl:w-[979px] xl:h-[702px] bg-[#126912] lg:rounded-md shadow-md">
        <p className="absolute top-0  text-white lg:text-[1.5rem] xl:text-[32px] lg:italic lg:pl-5">
          Personal Information
        </p>
        <form
          autoComplete="off"
          required
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
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className={
                      editPersonalInfo
                        ? " text-[#4D4141] text-opacity-[53%] absolute  xl:left-[3.5rem] z-10 top-0 left-2 text-[.8rem] xl:text-[16px]"
                        : showTooltipLastName
                        ? " text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem] xl:text-[16px]   blur-lg"
                        : " text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem] xl:text-[16px]  "
                    }>
                    First Name <span className="text-[#FF2626]">*</span>
                  </label>
                  <input
                    className={
                      editPersonalInfo
                        ? "input-style px-2"
                        : showTooltipLastName
                        ? " relative input-style px-2 lg:w-full  bg-[#EBFFE5] blur-[.1rem]"
                        : " relative input-style px-2 lg:w-full  bg-[#EBFFE5] "
                    }
                    id="firstName"
                    type="text"
                    name="instructor_first_name" //should be edited
                    value={instructor_first_name}
                    onChange={(e) => handleInputChange(e)}
                    maxLength={50}
                    required={true}
                    onError={errorFirstName}
                    onKeyPress={(e) => {
                      // Allow only alphabets and some special characters like space
                      const regex = /^[a-zA-Z\s]*$/;
                      if (!regex.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onMouseOver={() => setShowTooltipFirstName(true)}
                    onMouseLeave={() => setShowTooltipFirstName(false)}
                    disabled={editPersonalInfo}
                  />
                  {showTooltipFirstName && editPersonalInfo === false && (
                    <div className="absolute top-[-3.5rem] left-10 bg-[#fff] w-[60%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
                      <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                        Maximum of 50 letters, only alphabets and spaces are
                        allowed.
                      </p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className=" text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem] xl:text-[16px] ">
                    Last Name <span className="text-[#FF2626]">*</span>
                  </label>
                  <input
                    className={
                      editPersonalInfo
                        ? "input-style px-2 "
                        : "relative input-style px-2 lg:w-full bg-[#EBFFE5]"
                    }
                    id="lastName"
                    type="text"
                    name="instructor_last_name" //edit
                    value={instructor_last_name}
                    onChange={(e) => handleInputChange(e)}
                    maxLength={50}
                    required={true}
                    onError={errorLastName}
                    onKeyPress={(e) => {
                      // Allow only alphabets and some special characters like space
                      const regex = /^[a-zA-Z\s]*$/;
                      if (!regex.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onMouseOver={() => setShowTooltipLastName(true)}
                    onMouseLeave={() => setShowTooltipLastName(false)}
                    disabled={editPersonalInfo}
                  />
                  {showTooltipLastName && editPersonalInfo === false && (
                    <div className="absolute top-[-3.5rem] 2xl:top-[-2.5rem] left-10 bg-[#fff] w-[60%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
                      <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                        Maximum of 50 letters, only alphabets and spaces are
                        allowed.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:flex lg:gap-y-5 lg:flex-col xl:gap-y-10">
              <label
                htmlFor="Email"
                className={
                  editPersonalInfo
                    ? " text-[#4D4141] text-opacity-[53%] absolute xl:top-[20.9rem] xl:left-[3.5rem] z-10 top-[13.2rem] left-[2.7rem] text-[.8rem] xl:text-[16px]"
                    : showTooltipContactNo
                    ? " text-[#4D4141] text-opacity-[53%] absolute xl:top-[20.9rem] xl:left-[3.5rem] z-10 top-[13.2rem] left-[2.7rem] text-[.8rem] xl:text-[16px] blur-lg"
                    : " text-[#4D4141] text-opacity-[53%] absolute xl:top-[20.9rem] xl:left-[3.5rem] z-10 top-[13.2rem] left-[2.7rem] text-[.8rem] xl:text-[16px]"
                }>
                Email Address
              </label>
              <input
                className={
                  showTooltipContactNo
                    ? " input-style px-2 lg:mt-5 blur-[.01rem]"
                    : " input-style px-2 lg:mt-5"
                }
                id="Email"
                type="number"
                name="instructor_username" //edit
                value={instructor_email}
                onChange={(e) => handleInputChange(e)}
                disabled
              />
              <div className="relative">
                <label
                  htmlFor="ContactNumber"
                  className=" text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem] xl:text-[16px] xl:top-[26.5rem] xl:left-[3.5rem]">
                  Contact Number <span className="text-[#FF2626]">*</span>
                </label>

                <input
                  className={
                    editPersonalInfo
                      ? "input-style px-2 "
                      : " input-style px-2 bg-[#EBFFE5] placeholder:text-[#4D4141] placeholder:text-opacity-[53%]"
                  }
                  placeholder="+63"
                  type="text"
                  id="ContactNumber"
                  name="instructor_contact_number" //edit
                  value={instructor_contact_number}
                  onChange={(e) => handleInputChange(e)}
                  maxLength={11}
                  required={true}
                  onError={errorContactNo}
                  onKeyPress={(e) => {
                    // Allow only numeric input
                    const isNumeric = /^[0-9\b]+$/;
                    if (!isNumeric.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  disabled={editPersonalInfo}
                  onMouseOver={() => setShowTooltipContactNo(true)}
                  onMouseLeave={() => setShowTooltipContactNo(false)}
                />
                {showTooltipContactNo && editPersonalInfo === false && (
                  <div className="absolute top-[-3.5rem] left-10 bg-[#fff] w-[40%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
                    <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                      Maximum of 11 numbers, only numbers are allowed.
                    </p>
                  </div>
                )}
              </div>
              <div className="lg:w-[100%] lg:flex lg:justify-end">
                <button
                  type="submit"
                  onClick={() => setEditPersonalInfo(false)}
                  className="w-full mb-5 lg:mb-0 lg:mt-5 btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full ">
                  {editPersonalInfo ? "Edit" : "Update"}
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
