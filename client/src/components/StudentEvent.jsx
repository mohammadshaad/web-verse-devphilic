import React, { useState } from 'react';
import axios from 'axios';
// import './index.css'

function EventForm() {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventOrganiser, setEventOrganiser] = useState('');
  const [participantCount, setParticipantCount] = useState('');
  const [hostedBy, setHostedBy] = useState('');
  const [eventPoster, setEventPoster] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/student/event/', {
        eventName,
        eventDescription,
        eventDate,
        eventTime,
        eventVenue,
        eventOrganiser,
        participantCount,
        hostedBy,
        eventPoster
      });

      console.log(response.data);

      // Clear form fields after successful submission
      setEventName('');
      setEventDescription('');
      setEventDate('');
      setEventTime('');
      setEventVenue('');
      setEventOrganiser('');
      setParticipantCount('');
      setHostedBy('');
      setEventPoster('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex items-center justify-center flex-col w-screen mt-8">
      <div className="mb-4">
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Event Description:</label>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div >
      <div className="mb-4">
        <label>Event Date:</label>
        <input
          type="text"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Event Time:</label>
        <input
          type="text"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Event Venue:</label>
        <input
          type="text"
          value={eventVenue}
          onChange={(e) => setEventVenue(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Event Organiser:</label>
        <input
          type="text"
          value={eventOrganiser}
          onChange={(e) => setEventOrganiser(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Participant Count:</label>
        <input
          type="text"
          value={participantCount}
          onChange={(e) => setParticipantCount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Hosted By:</label>
        <input
          type="text"
          value={hostedBy}
          onChange={(e) => setHostedBy(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <div className="mb-4">
        <label>Event Poster:</label>
        <input
          type="text"
          value={eventPoster}
          onChange={(e) => setEventPoster(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"

        />
      </div>
      <button className="btn btn-blue" type="submit">Submit</button>
    </form>
  );
}

export default EventForm;