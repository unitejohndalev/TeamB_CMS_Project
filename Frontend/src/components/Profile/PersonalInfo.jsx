import axios from "axios";
import { useEffect, useState } from "react";
import profilePic from "../../assets/Registration.png";
import Footer from "../Footer";
import PersonalEdit from "./PersonalEdit";

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

  const {
    instructor_first_name,
    instructor_last_name,
    instructor_email,
    instructor_contact_number,
  } = instructor;

  const [editPersonalInfo, setEditPersonalInfo] = useState(true);
  const [updatePersonalInfo, setUpdatePersonalInfo] = useState(false);

  const showEdit = () => {
    setEditPersonalInfo(true);
    setUpdatePersonalInfo(false);
  };

  const showUpdate = () => {
    setEditPersonalInfo(false);
    setUpdatePersonalInfo(true);
  };

  return (
    <>
      {editPersonalInfo && (
        <div className="container mx-auto p-4 lg:p-8">
          <div className="bg-[#BCE8B1] rounded shadow-md p-8">
            <div className="flex flex-col lg:flex-row justify-center items-center mb-10 gap-y-5 lg:gap-y-0 lg:gap-x-10 lg:w-[99%] lg:m-auto xl:w-[948px]">
              <div className="lg:w-2/6 mb-20">
                <img
                  src={profilePic}
                  alt=""
                  className="w-full lg:w-70 h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-3/5">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <label
                      htmlFor="firstName"
                      className="text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem]"
                    >
                      First Name{" "}
                      <span className="text-[#FF2626]">*</span>
                    </label>
                    <input
                      className="px-2 TeamB_input-style"
                      id="firstName"
                      type="text"
                      name="instructor_first_name"
                      value={instructor_first_name}
                      onChange={(e) => handleInputChange(e)}
                      maxLength={50}
                      disabled
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="lastName"
                      className="text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem]"
                    >
                      Last Name{" "}
                      <span className="text-[#FF2626]">*</span>
                    </label>
                    <input
                      className="px-2 TeamB_input-style"
                      id="lastName"
                      type="text"
                      name="instructor_last_name"
                      value={instructor_last_name}
                      onChange={(e) => handleInputChange(e)}
                      disabled
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="Email"
                      className="text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem]"
                    >
                      Email Address
                    </label>
                    <input
                      className="px-2 TeamB_input-style"
                      id="Email"
                      type="email"
                      name="instructor_email"
                      value={instructor_email}
                      onChange={(e) => handleInputChange(e)}
                      disabled
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="ContactNumber"
                      className="text-[#4D4141] text-opacity-[53%] absolute z-10 top-0 left-2 text-[.8rem]"
                    >
                      Contact Number
                    </label>
                    <input
                      className="px-2 TeamB_input-style"
                      placeholder="+63"
                      type="tel"
                      id="ContactNumber"
                      name="instructor_contact_number"
                      value={instructor_contact_number}
                      onChange={(e) => handleInputChange(e)}
                      disabled
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-5">
                  <button
                    onClick={showUpdate}
                    className="w-full TeamB_btn-style lg:w-auto rounded-full"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {updatePersonalInfo && <PersonalEdit />}
    </>
  );
};

export default PersonalInfo;
