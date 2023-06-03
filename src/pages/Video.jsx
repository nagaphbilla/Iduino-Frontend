import React, { useState } from "react";
import "../styles.css";
import Accordition from "../components/Accordition";
export default function Video() {
  const [videoSrc,setVideoSrc]=useState('https://www.youtube.com/embed/Nm2Fsi7lLsg')
  return (
    <div>
      <iframe
        className="w-2/3 mx-auto min-height-50 my-5"
        src={videoSrc}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="w-2/3 mx-auto">
        <Accordition setVideoSrc={setVideoSrc}/>
      </div>
    </div>
  );
}
