// 1/31/2024 junite, UI Modifications (blur and mt)

import React, { useContext } from "react";
import { DashBoardContext } from "../context/DashBoardContext";

//import close icon
import { IoMdClose } from "react-icons/io";

const DashBoardCardHover = () => {
  const { dashBoardHover, setDashBoardHover, hoverClose, setHoverClose } =
    useContext(DashBoardContext);

  return (
    <div className="flex items-center justify-center w-[98vw] pt-[20vh] h-[120vh]  backdrop-blur-[.1rem]">
      <div className="h-[75vh] w-[60vw]  bg-[#BCE8B1] rounded-lg">
        <div
          className="w-[100%] flex items-end justify-end relative"
          onClick={() => setDashBoardHover((prev) => !prev)}>
          <span
            className="pt-2 pr-2 cursor-pointer text-[1.5rem]"
            onMouseOver={() => setHoverClose(true)}
            onMouseLeave={() => setHoverClose(false)}
            onClick={() => setHoverClose(false)}>
            <IoMdClose />
          </span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-[2rem] font-bold">Web Development Course</p>
          <div className="p-10">
            <p className="bg-[#87D275] p-5 rounded-lg text-justify">
              Web development is the creation, building, and maintaining of
              websites. It includes aspects such as web design, web publishing,
              web programming, and database management. Web development can
              range from developing a simple single static page of plain text to
              complex web applications, electronic businesses, and social
              network services. It mainly deals with the non-design aspect of
              building websites, which includes coding and writing markup.
              <p className="pt-3">With 3 Chapters and 2 topic each</p>
              <p className="pt-2">
                Get a certificate for passing the course by passing 80% of quiz
                and assessment
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCardHover;
