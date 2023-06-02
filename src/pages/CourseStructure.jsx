import React, { useState } from "react";
import img2 from "../assets/images_courses/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";
import Navbar from "../components/Navbar";
import "../styles.css";
import Video from "./Video";
import Accordition from "../components/Accordition";

export default function CourseStructure() {
  return (
    <div>
      <Navbar />
      <div className="button-clr-primary w-full h-60 grid place-items-center">
        <div className="grid grid-cols-3 w-11/12 mx-auto">
          {/* left part  start*/}
          <div className="col-span-2 place-self-center">
            <h1 className="text-4xl font-semibold py-3 text-white">
              Enter into field of Robotics
            </h1>
            <p className="py-3 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quas quo vel eligendi amet quam saepe in quod provident hic
              quaerat voluptate, officia ipsa magni inventore, atque, dolor
              facere sapiente neque doloribus?
            </p>
          </div>
          {/* left part end */}
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 place-self-end fixed top-32">
            <img class="rounded-t-lg" src={img2} alt="" />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class=" flex justify-center w-full px-3 py-2 text-sm font-medium text-white button-clr-primary rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Enroll for Free
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-11/12 mx-auto">
        <div className="col-span-2 my-5">
          <h2 className="text-2xl font-semibold">Course content</h2>
          {/* Accordition  start*/}
          <Accordition />
          {/* Accordition end */}
          <div>
            <h3 className="text-2xl font-semibold py-3">About this course</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              rem facilis reiciendis praesentium tempora optio voluptates,
              inventore sunt ipsa maiores assumenda quam culpa accusantium
              eveniet eaque repudiandae velit exercitationem eius, consequuntur
              deleniti magnam provident fuga cupiditate? Sapiente beatae magnam
              atque quia dolore perferendis esse quibusdam consequuntur,
              voluptatum ipsa qui. Architecto, sunt quibusdam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
