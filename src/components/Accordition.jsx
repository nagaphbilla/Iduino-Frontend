import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import DataJson from "../Data.json";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Accordition({setVideoSrc}) {
  const [data, setData] = useState(
    DataJson[0].course1.couseStructure.coursecontent.chapters
  );
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {data.map((item, index) => (
        <Accordion
          open={open === index + 1}
          icon={<Icon id={index + 1} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(index + 1)}
            className="`flex items-center justify-between w-full p-5 font-medium text-left text-xl text-gray-700 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`"
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody className="flex flex-col justify-between w-full p-5 font-medium text-left text-base text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 py-3">
            {item.topics.map((topic, index) => (
              <div className="flex items-center gap-3 mb-2 text-gray-700 dark:text-gray-400 cursor-pointer"
              onClick={()=>{setVideoSrc(topic.videoSrc)
              console.log(topic.videoSrc) }}
              >
              <input type="checkbox" name="topic-1" id="topic-1" />
                {topic.title}
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
