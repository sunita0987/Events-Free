import React from "react";

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[100vh] flex items-center justify-center px-20"
      style={{ backgroundImage: "url('/assets/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white font-poppins text-left">
          Sed tortor in quisque morbi
          <br />
          scelerisque etiam eu.
        </h1>
        <p className="text-sm md:text-base mb-6 text-white max-w-xl font-poppins text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit,
          malesuada id suscipit cursus,
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-full  font-poppins text-semibold">
            Get Started
          </button>
          <a
            href="#"
            className="text-white hover:bg-blue-600 rounded-full px-6 py-2 text-semibold font-poppins"
          >
            Learn more
          </a>
        </div>

        {/* Search Inputs */}
        <div className="mt-10 bg-blue-600 rounded-full p-4 flex items-center justify-around shadow-lg text-white max-w-3xl mx-auto">
          <div className="flex flex-col items-center font-poppins text-medium">
            <span className="text-sm">Location</span>
            <input
              type="text"
              placeholder="Search by city"
              className="text-sm text-center bg-transparent outline-none"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Date</span>
            <input
              type="Date"
              className="text-sm text-center bg-transparent outline-none "
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Capacity</span>
            <input
              type="text"
              placeholder="Search by city"
              className="text-sm text-center bg-transparent outline-none"
            />
          </div>
          <button className="bg-white hover:bg-blue-600 text-blue-500 px-4 py-2 rounded-full text-semibold font-poppins cursor-pointer ">
            GO CHECK
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
