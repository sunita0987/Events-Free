import React from "react";

function Join() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-10 items-center">
        {/* Decorative Left Side Image */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex gap-6 ">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="w-16 h-64 rounded-full overflow-hidden"
                style={{
                  backgroundImage: "url('public/assets/join.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 max-w-xl">
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 mb-4"></div>
          <h2 className="text-3xl font-bold">Join Us !</h2>
          <p className="text-regular text-gray-600 mt-2 mb-6 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue
          </p>

          <h3 className="text-xl font-bold mb-4 font-poppins">Sign Up</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border px-4 py-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border px-4 py-2 rounded-md md:col-span-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border px-4 py-2 rounded-md"
            />
            <textarea
              placeholder="About Me"
              rows="3"
              className="border px-4 py-2 rounded-md md:col-span-2 font-poppins"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 text-semibold bg-blue-600 text-white py-2  rounded-md hover:bg-blue-700 transition-all cursor-pointer font-poppins"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Join;
