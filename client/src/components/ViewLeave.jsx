import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  const fetchLeaveRequests = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/student/leave/', {
        headers: {
          'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmVnTm8iOiIyMUJDRTE1NDIiLCJuYW1lIjoiTW9oYW1tYWQgU2hhYWQiLCJibG9jayI6IkMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzU1NjQwMiwiZXhwIjoxNjg3NjQyODAyfQ.dfQB2NvTCWujS9qzpGzBBkFo7UnCDr1opLXs-FFviwc',
        },
      });

      if (response.status === 200) {
        setLeaveRequests(response.data.results);
      } else {
        console.log('Failed to fetch leave requests');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Leave Requests</h1>
      <ul className="grid grid-cols-1 gap-4">
        {leaveRequests && leaveRequests.map((request) => (
          <li key={request.id} className="border border-gray-400 rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Leave Type: {request.leaveType}</h2>
            <p className="text-sm">Date: {request.leaveDate}</p>
            <p className="text-sm">Time: {request.leaveTime}</p>
            <p className="text-sm">Duration: {request.leaveDuration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
