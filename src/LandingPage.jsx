import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="background_img">
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}
