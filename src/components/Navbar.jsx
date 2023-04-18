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
    <nav className="px-14 nav-clr mx-auto py-4 flex items-center  md:flex justify-between md:py-7 drop-shadow-md">
      <div>logo</div>
      <div className="block md:hidden">
        <button className="custom-img" onClick={handleClick}></button>
      </div>
      <ul className="custom-nav" data-expanded={open}>
        <li className="px-2 cursor-pointer text-gray-600">Home</li>
        <li className="px-2 cursor-pointer text-gray-600">Careers</li>
        <li className="px-2 cursor-pointer text-gray-600">About Us</li>
        <li className="px-2 w-32 py-2 bg-inherit text-clr-primary border-clr-primary rounded-lg  text-center">
          <button>Login</button>
        </li>
        <li className="px-2 w-32 py-2 button-clr-primary rounded-lg text-white text-center font-medium">
          <button>Register</button>
        </li>
      </ul>
    </nav>
  );
}
