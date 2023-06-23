import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = () => {
  const [complaintType, setComplaintType] = useState('');
  const [complaintDate, setComplaintDate] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');
  const [complaintSeverity, setComplaintSeverity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const complaintData = {
      complaintType,
      complaintDate,
      complaintDescription,
      complaintSeverity,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/v1/student/complaint/', complaintData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmVnTm8iOiIyMUJDRTE1NDIiLCJuYW1lIjoiTW9oYW1tYWQgU2hhYWQiLCJibG9jayI6IkMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzU1NjQwMiwiZXhwIjoxNjg3NjQyODAyfQ.dfQB2NvTCWujS9qzpGzBBkFo7UnCDr1opLXs-FFviwc',
        },
      });

      if (response.status === 200) {
        // Handle successful complaint submission
        console.log('Complaint submitted successfully');
      } else {
        // Handle error
        console.log('Failed to submit complaint');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="complaintType" className="text-lg font-bold mb-2">Complaint Type</label>
        <input
          type="text"
          id="complaintType"
          name="complaintType"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="complaintDate" className="text-lg font-bold mb-2">Complaint Date</label>
        <input
          type="text"
          id="complaintDate"
          name="complaintDate"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={complaintDate}
          onChange={(e) => setComplaintDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="complaintDescription" className="text-lg font-bold mb-2">Complaint Description</label>
        <textarea
          id="complaintDescription"
          name="complaintDescription"
          className="border border-gray-400 rounded-md py-2 px-4 w-80 h-40"
          value={complaintDescription}
          onChange={(e) => setComplaintDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <label htmlFor="complaintSeverity" className="text-lg font-bold mb-2">Complaint Severity</label>
        <input
          type="text"
          id="complaintSeverity"
          name="complaintSeverity"
          className="border border-gray-400 rounded-md py-2 px-4 w-80"
          value={complaintSeverity}
          onChange={(e) => setComplaintSeverity(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
    </form>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Complaint Form</h1>
      <ComplaintForm />
    </div>
  );
};

export default Dashboard;
