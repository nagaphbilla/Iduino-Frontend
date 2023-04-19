import React from "react";
import rightImg from "../assets/Group6.svg";

export default function Slide1() {
  return (
    <div className="px-5  mx-auto flex justify-center md:py-10 md:justify-between md:px-14 items-center background_img">
      <div className="flex flex-col gap-6 py-16 justify-center items-center md:items-start">
        <p className="hidden md:block text-sm text-clr-primary">Let's <strong>Begins</strong></p>
        <h2 className="font-bold md:text-5xl lineHeight tracking-wide text-hero-clr text-4xl">
          Studing<span className="text-clr-primary"> Online </span>is now
          <br />
           much easier
        </h2>
        <p className="text-gray-600 text-sm tracking-wide">
          Rees52 is an intresting platform that will teach
          <br />
          you in more an interactive way
        </p>
        <div className="block md:hidden">
          <img src={rightImg} alt="img." className="h-11/12 w-11/12" />
        </div>
        <div className="flex items-center gap-5">
          <button className="p-3 w-36 button-clr-primary rounded-lg text-white text-center font-semibold text-lg">
            Join for free
          </button>
          <button className="w-10 h-10 bg-white rounded-full background_img_play"></button>
          <span className="font-bold text-lg">Play Video</span>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={rightImg} alt="img." className="h-11/12 w-11/12" />
      </div>
    </div>
  );
}