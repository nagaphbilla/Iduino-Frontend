import React from "react";
import image from "../assets/Group1964.svg";

export default function Slide3() {
  return (
    <div className="flex background-slide3 w-full h-full items-center md:px-16 py-16 gap-10 px-4">
      <div className="hidden md:w-2/5 md:block">
        <img src={image} alt="img.." className="h-11/12 w-11/12" />
      </div>
      <div className="flex flex-col md:px-14 md:w-3/5 gap-7 px-4">
        <span className="text-clr-slide3">SELECTED COURSE</span>
        <span className="text-4xl font-semibold text-white">
          People Taking Courses
        </span>
        <p className="text-white font-extralight">
        Education is a fundamental right, and we believe that cost should not be a barrier to learning. That's why we offer free courses to students who cannot afford them. Our courses are designed by experts and cover diverse subjects, from basic skills to advanced topics. We're committed to ensuring everyone has access to quality education, regardless of their financial situation.
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
