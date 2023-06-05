import React from 'react'

export default function CourseStructureAccordition({obj}) {
  return (
    <div>
      <div id="accordion-open" data-accordion="open" className="my-5">
        <h2 id="accordion-open-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-1"
            aria-expanded="true"
            aria-controls="accordion-open-body-1"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Chapter-1
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-1"
          class="hidden"
          aria-labelledby="accordion-open-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div
              class="flex items-center gap-3 mb-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            //   onClick={() => {
            //     setVideoSrc("https://www.youtube.com/embed/Nm2Fsi7lLsg");
            //   }}
            >
              <input type="checkbox" name="topic-1" id="topic-1" />
              IoT Revolution Kit - ELGYEM by REES52 Complete Introduction
              Tutorial (KT560)
            </div>
            <div
              class="flex items-center gap-3 mb-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            //   onClick={() => {
            //     setVideoSrc("https://www.youtube.com/embed/7whA0Rl0JmM");
            //   }}
            >
              <input type="checkbox" name="topic-2" id="topic-2" />
              Turn On/Off led via web Server using NodeMCU ESP8266-12E Board - IoT Based Project- ELGYEM
            </div>
            <div
              class="flex items-center gap-3 mb-2 text-gray-500 dark:text-gray-400 cursor-pointer"
            //   onClick={() => {
            //     setVideoSrc("https://www.youtube.com/embed/CwcJvdw_mJY");
            //   }}
            >
              <input type="checkbox" name="topic-3" id="topic-3" />
              Make a Led Chaser Circuit using Leds interfacing with NodeMCU ESP8266-12e Wi-Fi board - ELGYEM
            </div>
          </div>
        </div>
        <h2 id="accordion-open-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-open-body-2"
            aria-expanded="false"
            aria-controls="accordion-open-body-2"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Chapter-2
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-2"
          class="hidden"
          aria-labelledby="accordion-open-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <div class="mb-2 text-gray-500 dark:text-gray-400 cursor-pointer">
              topic-1
            </div>
            <div class="mb-2 text-gray-500 dark:text-gray-400">topic-2</div>
          </div>
        </div>
        <h2 id="accordion-open-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 "
            data-accordion-target="#accordion-open-body-3"
            aria-expanded="false"
            aria-controls="accordion-open-body-3"
          >
            <span class="flex items-center">
              <svg
                class="w-5 h-5 mr-2 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Chapter-3
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-open-body-3"
          class="hidden"
          aria-labelledby="accordion-open-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <div class="mb-2 text-gray-500 dark:text-gray-400 cursor-pointer">
              topic-1
            </div>
            <div class="mb-2 text-gray-500 dark:text-gray-400">topic-2</div>
          </div>
        </div>
      </div>
    </div>
  )
}