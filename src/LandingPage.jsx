import React from "react";
import Navbar from "./components/Navbar";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Slide1/>
      <Slide2/>
    </div>
  );
}
