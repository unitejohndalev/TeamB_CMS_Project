import React, { useContext } from "react";
import { DashBoardContext } from "../context/DashBoardContext";

//import close icon
import { IoMdClose } from "react-icons/io";

const DashBoardCardHover = () => {
  const { dashBoardHover, setDashBoardHover, hoverClose, setHoverClose } =
    useContext(DashBoardContext);

  return (
    <div className="">
      <div className="flex items-center justify-center w-[95vw]  backdrop-blur-sm">
        <div className="h-[85vh] w-[60vw] bg-[#BCE8B1] rounded-lg">
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
            {hoverClose && (
              <div className="absolute top-[-1rem] right-0">Close</div>
            )}
          </div>

          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-[2rem] font-bold">Course Title</p>
            <div className="p-10">
              <p className="bg-[#87D275] p-5 rounded-lg text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestiae alias veniam ad cumque, et consectetur repellendus
                ducimus quidem consequatur amet reprehenderit laborum laboriosam
                repellat similique expedita quas sed autem corporis. Provident
                vel necessitatibus blanditiis quidem repellendus nesciunt unde
                quasi cumque fugit hic, quae qui voluptatibus, sunt eum, ratione
                error magni labore. Distinctio incidunt molestiae voluptatem a
                aliquam voluptas quam neque? Tempora ipsum, quod eum at quos
                obcaecati in nobis maxime officia minus quae iusto quis
                necessitatibus dolorem! Quisquam recusandae porro tenetur
                consectetur, inventore facilis illo at, fuga eius, rerum
                aperiam. Aliquam vero alias illo optio rem cum odio, est
                recusandae saepe. Libero, ea commodi sint quam beatae dicta
                rerum, deleniti ex porro, vel sequi veniam. Minima nemo
                accusamus iusto pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCardHover;
