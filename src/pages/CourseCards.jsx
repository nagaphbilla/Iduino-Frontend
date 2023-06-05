import React from "react";
import img1 from "../assets/images_courses/marilia-castelli-wCVNhNnI_2s-unsplash.jpg";
import { Link } from "react-router-dom";

export default function CourseCards({ obj }) {
  return (
    <div>
      <div className="grid grid-cols-2 w-11/12 mx-auto justify-items-center gap-12 my-10">
        <div
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  "
        >
          <img
            className="object-cover min-h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={img1}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {obj.course1.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {obj.course1.info}
            </p>
            <Link to='/courses/courseStructure'>
              <button className="flex justify-center w-32 px-3 py-2 text-sm font-medium text-white button-clr-primary rounded-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700">
                Join now
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
