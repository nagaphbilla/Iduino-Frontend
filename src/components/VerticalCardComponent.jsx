import React from "react";
import img2 from "../assets/images_courses/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";

export default function VerticalCardComponent({obj}) {
  return (
    <>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 place-self-end fixed top-32">
        <img class="rounded-t-lg" src={img2} alt="" />
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {obj.course1.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {obj.course1.info}
          </p>
          <a
            href="#"
            class=" flex justify-center w-full px-3 py-2 text-sm font-medium text-white button-clr-primary rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Enroll for Free
          </a>
        </div>
      </div>
    </>
  );
}
