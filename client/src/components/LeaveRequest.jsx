import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ClipboardListIcon, AcademicCapIcon, UserCircleIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/outline';
import axios from 'axios';


const LeaveForm = () => {
  const [leaveType, setLeaveType] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [leaveTime, setLeaveTime] = useState('');
  const [leaveDuration, setLeaveDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = {
      leaveType,
      leaveDate,
      leaveTime,
      leaveDuration,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/v1/student/leave/', leaveData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmVnTm8iOiIyMUJDRTE1NDIiLCJuYW1lIjoiTW9oYW1tYWQgU2hhYWQiLCJibG9jayI6IkMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzU1NjQwMiwiZXhwIjoxNjg3NjQyODAyfQ.dfQB2NvTCWujS9qzpGzBBkFo7UnCDr1opLXs-FFviwc',
        },
      });

      if (response.status === 200) {
        // Handle successful leave application
        console.log('Leave application submitted successfully');
      } else {
        // Handle error
        console.log('Failed to submit leave application');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="leaveType" className="text-lg font-bold mb-2">Leave Type</label>
        <select
          id="leaveType"
          name="leaveType"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="option1">Outing</option>
          <option value="option2">Incident</option>
          <option value="option3">College Work</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="leaveDate" className="text-lg font-bold mb-2">Leave Date</label>
        <input
          type="text"
          id="leaveDate"
          name="leaveDate"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={leaveDate}
          onChange={(e) => setLeaveDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="leaveTime" className="text-lg font-bold mb-2">Leave Time</label>
        <input
          type="text"
          id="leaveTime"
          name="leaveTime"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={leaveTime}
          onChange={(e) => setLeaveTime(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="leaveDuration" className="text-lg font-bold mb-2">Leave Duration</label>
        <input
          type="text"
          id="leaveDuration"
          name="leaveDuration"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={leaveDuration}
          onChange={(e) => setLeaveDuration(e.target.value)}
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Submit
      </button>
    </form>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <LeaveForm />
    </div>
  );
};

export default Dashboard;
