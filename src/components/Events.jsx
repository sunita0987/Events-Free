import React from "react";

const events = [
  {
    id: 1,
    date: "09/23/2021",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in",
    imgSrc: "./assets/4thsection.png",
  },
  {
    id: 2,
    date: "09/23/2021",
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in",
    imgSrc: "./assets/event.png",
  },
];

export default function App() {
  return (
    <div className="min-h-[40vh] bg-white px-3 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {}
        <div className="md:w-1/3">
          <div className="h-1 w-20 bg-blue-500 mb-4"></div>
          <h2 className="text-3xl font-bold">
            Explore our <br />
            <span className="text-black">latest events</span>
          </h2>
          <p className="text-sm text-gray-600 mt-4 font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
            Donec ut justo et leo congue lacinia vitae nec arcu.
          </p>
          <button className="mt-6 text-xs font-bold text-black hover:underline cursor-pointer">
            LEARN MORE
          </button>
        </div>

        {}
        <div className="md:w-2/3 grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={event.imgSrc}
                alt={event.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-500">{event.date}</p>
                <h3 className="font-semibold text-lg mt-1">{event.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
