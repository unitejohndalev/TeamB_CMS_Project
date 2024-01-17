import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

  const { first_name, last_name, email, username } = instructor;

  return (
   
      <div className="box-outer p-4">
        {/* Inner Box */}
        <div className="w-[90%] flex flex-col m-auto h-full lg:w-[700px]  p-6">
          {/* Navigation Tabs */}
          <div className="flex gap-5 mt-5  ">
            {/* <NavLink to="/personal-info" activeClassName="active-tab"> */}
            {/* </NavLink> */}
            {/* Add more tabs as needed */}
          </div>

          {/* Content */}
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col h-full gap-y-5 w-full m-auto"
          />
          <div className="w-[90%] flex flex-col m-auto h-full shadow-[10px_-20px_1px_10px_rgba(0,100,0,.75)] lg:w-[700px]">
            <p className="text-white">Personal Information</p>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col h-full gap-y-5 w-[90%] m-auto "
            >
              <img src="" alt="" />

              <input
                className="input-style"
                placeholder="First Name * "
                type="text"
                name="instructor_first_name" //should be edited
                value={first_name}
                onChange={(e) => handleInputChange(e)}
              />

              <input
                className="input-style"
                placeholder="Last Name * "
                type="text"
                name="instructor_last_name" //edit
                value={last_name}
                onChange={(e) => handleInputChange(e)}
              />

              <input
                className="input-style"
                placeholder="Username * "
                type="text"
                name="instructor_username" //edit
                value={username}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                className="input-style"
                placeholder="Email Address * "
                type="text"
                name="instructor_email" //edit
                value={email}
                onChange={(e) => handleInputChange(e)}
              />

              <button className="mb-5 btn-style w-full m-auto">Update</button>
            </form>
          </div>
        </div>
      </div>

  );
};

export default PersonalInfo;
