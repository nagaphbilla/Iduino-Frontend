import React from 'react'
import rightImg from "../assets/Group6.svg";

export default function Slide1() {
  return (
    <div className="mx-auto flex py-10 justify-between px-14 items-center background_img">
        <div className="flex flex-col gap-7 py-16">
          <h2 className="font-bold text-5xl lineHeight tracking-wide" style={{color : "#141E32"}}>
          Studying<span className="text-clr-primary"> Online</span> is now
            <br />
            much easier
          </h2>
          <p className="text-gray-600 text-sm tracking-wide">
            Rees52 is an interesting platform that will teach
            <br />
            you in more an interactive way
          </p>
          <div className="flex items-center gap-5">
            <button className="w-36 p-3 button-clr-primary rounded-lg text-white text-center font-semibold">
              Join for free
            </button>
            <button className="w-10 h-10 bg-white rounded-full background_img_play"></button>
            {/* <span>watch how it works</span> */}
          </div>
        </div>
        <div className="background_img_right">
          <img src={rightImg} alt="img." className="h-11/12 w-11/12"/>
        </div>
      </div>
  )
}
