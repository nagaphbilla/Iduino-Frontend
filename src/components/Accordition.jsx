import React, { useState, useEffect } from "react";
import Data from "../Data.json";

const Accordition = ({setVideoSrc}) => {
  const [data, setData] = useState(
    Data[0].course1.couseStructure.coursecontent.chapters
  );
  const toggleAccordion = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].isOpen = !newData[index].isOpen;
      return newData;
    });
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          id={`accordion-${index}`}
          data-accordion={item.isOpen ? "open" : ""}
          key={index}
        >
          <h2 id={`accordion-heading-${index}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
              data-accordion-target={`#accordion-body-${index}`}
              aria-expanded={item.isOpen ? "true" : "false"}
              aria-controls={`accordion-body-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
                {item.title}
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${
                  item.isOpen ? "rotate-180" : ""
                } shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-body-${index}`}
            className={`hidden ${item.isOpen ? "" : "hidden"}`}
            aria-labelledby={`accordion-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              {item.topics.map((topic, topicIndex) => (
                <div
                  className="flex items-center gap-3 mb-2 text-gray-500 dark:text-gray-400 cursor-pointer"
                  key={topicIndex}
                  onClick={() => {
                    // handle topic click
                    setVideoSrc(topic.videoSrc)
                  }}
                >
                  <input
                    type="checkbox"
                    name={`topic-${index}-${topicIndex}`}
                    id={`topic-${index}-${topicIndex}`}
                  />
                  {topic.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordition;
