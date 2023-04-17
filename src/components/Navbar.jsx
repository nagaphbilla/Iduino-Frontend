import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState("false");
  function handleClick() {
    console.log("clicked!");
    if (open === "false") {
      setOpen("true");
    } else {
      setOpen("false");
    }
  }
  return (
    <nav className="w-11/12 mx-auto py-4 flex items-center  md:flex justify-between md:py-7 ">
      <div>logo</div>
      <div className="block md:hidden">
        <button className="custom-img" onClick={handleClick}></button>
      </div>
      <ul className="custom-nav" data-expanded={open}>
        <li className="px-2 cursor-pointer text-gray-600">Home</li>
        <li className="px-2 cursor-pointer text-gray-600">Careers</li>
        <li className="px-2 cursor-pointer text-gray-600">About Us</li>
        <li className="px-2 w-20 py-2 bg-white rounded-3xl text-gray-600 text-center">
          <button>Login</button>
        </li>
        <li className="px-2 w-24 py-2 bg-orange-400 rounded-3xl text-white text-center">
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}
