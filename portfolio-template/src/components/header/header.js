import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className="w-f bg-red-500 h-auto p-2 md:flex md:flex-row black md:p-5 lg:justify-between items-center flex flex-col"
      id="header"
    >
      <h1 className="text-black">Header</h1>
      <div className="flex justify-between w-1/3 bg-red-200 p-1">
        <ul className=" flex justify-between w-full  items-center  flex-col md:flex md:flex-row">
          <li className="text-black hover:text-white"><Link href="/">Home </Link></li>
          <li className="text-black hover:text-white"><Link href="/about">About</Link></li>
          <li className="text-black hover:text-white"><Link href="/">Contact Us</Link></li>
          <li className="text-black hover:text-white"><Link href="/">Something</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
