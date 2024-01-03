import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", inputs);
    // You can perform further actions, such as sending the data to a server.
  };


  return (
    <div
      className="relative shadow-md h-full w-[90vw] mt-10 m-auto
    lg:max-w-[740px]
    ">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#4D4141] font-bold text-[1.5rem] lg:text-[2rem] text-center">
          Sign in to your account.
        </p>
        <p className="text-[#4D4141] font-bold text-[1.5rem] lg:text-[2rem] text-center">
          Be part of the success.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[90%] min-h-[40vh] lg:mt-5 justify-between lg:flex lg:items-center">
          <div className="mt-10 h-[15vh] flex flex-col justify-between lg:w-[100%] lg:h-[17vh]">
            <input
              className="input-style"
              placeholder="Email Address"
              type="text"
              name="email"
              value={inputs.email || ""}
              onChange={handleChange}
            />

            <input
              className="input-style"
              placeholder="Password"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
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
