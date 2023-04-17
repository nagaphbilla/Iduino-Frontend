import React from "react";
import Navbar from "./components/Navbar";

export default function LandingPage() {
  return (
    <div className="background_img">
      <Navbar />
      <div className="w-11/12 mx-auto py-10">
        <div className="flex flex-col gap-7">
          <h2 className="font-bold text-5xl lineHeight tracking-wide text-blue-900">
            <span className="text-orange-400">Studying</span> Online is now
            <br />
            much easier
          </h2>
          <p className="text-gray-600 text-sm tracking-wide">
            Rees52 is an intresting platform that will teach
            <br />
            you in more an interactive way
          </p>
          <div className="flex items-center gap-5">
            <button className="px-2 w-36 py-2 bg-orange-400 rounded-3xl text-white text-center">
              Join for free
            </button>
            <button className="w-10 h-10 bg-white rounded-full background_img_play"></button>
            <span>watch how it works</span>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}