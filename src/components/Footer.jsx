import React from "react";
function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and About */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src="public/assets/images/logo.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-blue-500 font-poppins">
              Events<span className="text-cyan-400">Free</span>
            </h1>
          </div>
          <p className="text-sm text-white font-poppins text-regular ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. c
          </p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <i className="  cursor-pointer hover:text-white"></i>
            <i className="  cursor-pointer hover:text-white"></i>
            <i className="  cursor-pointer hover:text-white"></i>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex gap-16">
          <div>
            <h3 className="font-bold text-sm mb-2">SERVICES</h3>
            <ul className="text-white text-regular space-y-1  cursor-pointer">
              <li>About</li>
              <li>News</li>
              <li>ullamcorper</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-2 font-poppins">EVENTS</h3>
            <ul className="text-white  text-regular space-y-1 cursor-pointer">
              <li>ullamcorper</li>
              <li>ullamcorper</li>
              <li>ullamcorper</li>
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="font-bold text-sm mb-2">GALLERY</h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="public/assets/images/footer1.png"
              className="w-20 h-12 object-cover"
            />
            <img
              src="public/assets/images/footer2.png"
              className="w-20 h-12 object-cover"
            />
            <img
              src="public/assets/images/footer3.png"
              className="w-20 h-12 object-cover"
            />
            <img
              src="public/assets/images/footer4.png"
              className="w-20 h-12 object-cover"
            />
            <img
              src="public/assets/images/footer5.png"
              className="w-20 h-12 object-cover"
            />
            <img
              src="public/assets/images/footer6.png"
              className="w-20 h-12 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-white text-xs mt-10">
        © Credits of companyName belong to companyName.
      </div>
    </footer>
  );
}

export default Footer;
