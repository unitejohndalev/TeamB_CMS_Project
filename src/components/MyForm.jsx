import { useState, useEffect } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import axios from 'axios';

function MyForm() {
  const [instructors, setInstructors] = useState([]);

  const [instructor, setInstructor] = useState({
    instructor_name: '',
    instructor_username: '',
    instructor_email: '',
  });

  useEffect(() => {
    const loadInstructors = async () => {
      const result = await axios.get('http://localhost:8080/instructors');
      setInstructors(result.data);
    };
    loadInstructors();
  }, []);

  const handleInputChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/instructor', instructor);
  };

  console.log(instructors);
  const { email, password } = instructor;
  return (
    <div
      className="relative shadow-md h-full w-[90vw] mt-10 m-auto
    lg:max-w-[740px]
    ">
      {
        //for fetching data to show in
        instructors.map((instructor, idx) => {
          return (
            <div key={idx}>
              ,<p>{instructor.name}</p>
              <p>{instructor.username}</p>
              <p>{instructor.email}</p>
              <p>{instructor.password}</p>
            </div>
          );
        })
      }
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#4D4141] font-bold text-[1.5rem] lg:text-[2rem] text-center">
          Sign in to your account.
        </p>
        <p className="text-[#4D4141] font-bold text-[1.5rem] lg:text-[2rem] text-center">
          Be part of the success.
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col w-[90%] min-h-[40vh] lg:mt-5 justify-between lg:flex lg:items-center">
          <div className="mt-10 h-[15vh] flex flex-col justify-between lg:w-[100%] lg:h-[17vh]">
            <input
              className="input-style"
              placeholder="Email Address"
              type="email"
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />

            <input
              className="input-style"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>

          <button type="submit" className="btn-style mb-10 lg:max-w-[30%]">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[1.3rem]">Sign in</span>
              <span>
                <IoIosArrowRoundForward className="text-[2rem]" />
              </span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyForm;
