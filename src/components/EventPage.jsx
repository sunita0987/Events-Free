import React from 'react';
import EventCard from '../components/EventCard';
import events from '../utils/helper';

const EventPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 border-gray-400">
      <h1 className="text-4xl font-bold text-center mb-8 font-poppins">Choose your next event</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
