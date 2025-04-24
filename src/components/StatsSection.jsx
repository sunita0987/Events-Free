import React from "react";
function StatsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4"
      style={{ backgroundImage: "url('public/assets/3rdsection.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-700 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Lorem ipsum dolor sit amet,
          <br /> consectetur
        </h2>
        <p className="text-sm md:text-lg max-w-2xl mx-auto text-gray-200 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue lacinia vitae nec
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div className="flex flex-col items-center">
            <i className="fas fa-users text-3xl mb-2"></i>
            <h3 className="text-2xl font-bold">8800</h3>
            <p className="text-sm">PARTICIPANTS</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-book text-3xl mb-2"></i>
            <h3 className="text-2xl font-bold">300</h3>
            <p className="text-sm">TOPICS</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-microphone text-3xl mb-2"></i>
            <h3 className="text-2xl font-bold">50</h3>
            <p className="text-sm">SPEAKERS</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fas fa-trophy text-3xl mb-2"></i>
            <h3 className="text-2xl font-bold">30</h3>
            <p className="text-sm">AWARDS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
