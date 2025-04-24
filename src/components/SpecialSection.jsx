import React from "react";

function SpecialSection() {
  return (
    <section className="py-16 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left - Image */}
        <div className="flex-1 relative  rounded">
          <img
            src="public/assets/surface.png"
            alt="Speaker"
            className="w-full rounded"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg">
              <i className="fas fa-play text-blue-600 text-xl"></i>
            </button>
          </div>
        </div>

        {/* Right - Text & Cards */}
        <div className="flex-1 space-y-6">
          <div>
            <div className="h-1 w-12 bg-blue-500 mb-2"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-poppins">
              What make us special ?
            </h2>
            <p className="text-regular text-gray-600 max-w-xl font-poppins">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
              Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit
              elit, malesuada id suscipit cursus,
            </p>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white text-black p-10 rounded shadow-md cursor-pointer hover:bg-blue-600 hover:text-white">
              <i className="fas fa-share-alt text-xl mb-2"></i>
              <h3 className="font-medium">Sharing</h3>
              <p className="text-regular font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                efficitur urna in
              </p>
            </div>
            <div className="border p-10 rounded shadow-md cursor-pointer hover:bg-blue-600 hover:text-white">
              <i className="fas fa-info-circle text-blue-600 text-xl mb-2"></i>
              <h3 className="font-medium">Info</h3>
              <p className="text-regular font-poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                efficitur urna in
              </p>
            </div>
            <div className="border p-10 rounded shadow-md sm:col-span-2 sm:w-1/2 sm:mx-auto cursor-pointer hover:bg-blue-600 hover:text-white">
              <i className="fas fa-hands-helping text-blue-600 text-xl mb-2"></i>
              <h3 className="font-medium">Help</h3>
              <p className="text-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                efficitur urna in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;
