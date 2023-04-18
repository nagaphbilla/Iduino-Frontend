import React from "react";
import image from "../assets/Group1964.svg";

export default function Slide3() {
  return (
    <div className="flex background-slide3 w-full h-full items-center px-16 py-16 gap-10">
      <div className="w-2/5">
        <img src={image} alt="img.." className="h-11/12 w-11/12" />
      </div>
      <div className="flex flex-col px-14 w-3/5 gap-7">
        <span className="text-clr-slide3">SELECTED COURSE</span>
        <span className="text-4xl font-semibold text-white">
          People Taking Courses
        </span>
        <p className="text-white font-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic,
          facilis, dolor eaque libero ex nostrum magnam molestiae quis sed
          provident voluptatibus distinctio laudantium ea dolorum ratione nisi.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">6,000</span>
            <span className="text-white font-extralight text-sm">
              People Veiws
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">4,000</span>
            <span className="text-white font-extralight text-sm">
              Users
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-clr-slide3 font-semibold">6,000</span>
            <span className="text-white font-extralight text-sm">
              Courses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
