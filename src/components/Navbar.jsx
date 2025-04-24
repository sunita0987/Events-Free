import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black">
      <div className="flex items-center space-x-2">
        <img src="/assets/images/logo.png" alt="logo" className="w-8 h-8" />
        <span className="text-xl font-bold text-blue-500">Events<span className="text-indigo-200">Free</span></span>
      </div>
      <ul className="flex space-x-6 text-sm uppercase text-white font-semibold ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Feed</a></li>
        <li><a href="#">User Name</a></li>
      </ul>
      <button className="bg-blue-500 text-white px-4 py-1  hover:bg-blue-600  rounded-full text-sm ml-4 font-poppins font-semibold cursor-pointer">Log Out</button>
    </nav>
  );
}

export default Navbar
