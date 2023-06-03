import React from "react";
import img1 from "../assets/images_courses/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";
import Navbar from "../components/Navbar";
import data from "../Data.json";
import CourseCards from "./CourseCards";

export default function Courses() {
  const cardcomponents = data.map((obj) => <CourseCards key={obj.course1.id} obj={obj}/>);
  return (
    <div>
      <Navbar />
      <div>{/* headings and info */}</div>
      <div>{cardcomponents}</div>
    </div>
  );
}
