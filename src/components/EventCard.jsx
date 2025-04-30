import React from "react";
import card from "../assets/images/card.png";

const EventCard = ({ title, date, location, organizer }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-9 m-2 ">
      <img
        src={card}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="font-semibold mt-2 font-poppins text-2xl"> {title}</h3>
      <p className="text-sm text-gray-600"> {date}</p>
      <p className="text-sm text-gray-600 font-poppins font-regular"> {location}</p>
      <p className="text-sm text-gray-600"> {organizer}</p>
      <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 font-poppins cursor-pointer font-semibold ">
        Go Check
      </button>
    </div>
  );
};

export default EventCard;
