import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}
