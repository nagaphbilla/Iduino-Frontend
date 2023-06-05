import React, { useState } from "react";
import img2 from "../assets/images_courses/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";
import Navbar from "../components/Navbar";
import "../styles.css";
import Video from "./Video";
import Accordition from "../components/Accordition";
import CourseStructureAccordition from "../components/CourseStructureAccordition";
import data from "../Data.json";
import VerticalCardComponent from "../components/VerticalCardComponent";

{
  /* <VerticalCardComponent key={obj.course1.id} obj={obj} /> */
}
export default function CourseStructure() {
  const card = data.map((obj) => {
    return (
      <>
        <div className="button-clr-primary w-full h-60 grid place-items-center">
          <div className="grid grid-cols-3 w-11/12 mx-auto">
            {/* left part  start*/}
            <div className="col-span-2 place-self-start">
              <h1 className="text-4xl font-semibold py-3 text-white">
                {obj.course1.couseStructure.title}
              </h1>
              <p className="py-3 text-white">
                {obj.course1.couseStructure.info}
              </p>
            </div>
            {/* left part end */}
            {/* right part start */}
            <VerticalCardComponent key={obj.course1.id} obj={obj} />
            {/* right part end */}
          </div>
        </div>
        <div className="grid grid-cols-3 w-11/12 mx-auto">
          <div className="col-span-2 my-5">
            <h2 className="text-2xl font-semibold my-5">Course content</h2>
            {/* Accordition  start*/}
            <CourseStructureAccordition obj={obj} />
            {/* Accordition end */}
            <div>
              <h3 className="text-2xl font-semibold py-3">About this course</h3>
              <p>{obj.course1.couseStructure.aboutcourse}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <div>
      <Navbar />
      {card}
    </div>
  );
}
