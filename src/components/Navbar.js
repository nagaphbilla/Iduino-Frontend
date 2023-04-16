import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState("hidden md:block");
  function handleClick() {
    console.log('clicked!');
    if (open === "hidden md:block") {
      setOpen("block md:block");
    } else {
      setOpen("hidden md:block");
    }
  }
  return (
    <nav className="w-11/12 mx-auto py-4 flex items-center md:flex justify-between md:py-7 ">
      <div>logo</div>
      <div className="fixed right-3 top-3 block md:hidden">
        <button className="custom-img" onClick={handleClick}></button>
      </div>
      <div className={open}>
        <ul className="custom-nav" data-expanded={open==='block md:block'?"true":"false"}>
          <li className="px-2 cursor-pointer">Home</li>
          <li className="px-2 cursor-pointer">Careers</li>
          <li className="px-2 cursor-pointer">About Us</li>
          <li className="px-2 w-20 py-2 bg-gray-400 rounded-3xl text-white text-center">
            <button>Login</button>
          </li>
          <li className="px-2 w-24 py-2 bg-orange-400 rounded-3xl text-white text-center">
            <button>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
