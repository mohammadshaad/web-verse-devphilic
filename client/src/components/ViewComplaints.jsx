import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/student/complaint/', {
        headers: {
          'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicmVnTm8iOiIyMUJDRTE1NDIiLCJuYW1lIjoiTW9oYW1tYWQgU2hhYWQiLCJibG9jayI6IkMiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTY4NzU1NjQwMiwiZXhwIjoxNjg3NjQyODAyfQ.dfQB2NvTCWujS9qzpGzBBkFo7UnCDr1opLXs-FFviwc',
        },
      });

      console.log(response.data); // Check the response data in the console

      if (response.status === 200) {
        setComplaints(response.data);
      } else {
        console.log('Failed to fetch complaints');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-2xl font-bold mb-4">Complaints</h1>
      <ul className="grid grid-cols-1 gap-4">
        {complaints.map((complaint) => (
          <li key={complaint.id} className="border border-gray-400 rounded-md p-4">
            <h2 className="text-lg font-bold mb-2">Title: {complaint.title}</h2>
            <p className="text-sm">Description: {complaint.description}</p>
            <p className="text-sm">Status: {complaint.status}</p>
          </li>
        ))}
      </ul>
      <Link to="/create-complaints">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Create Complaint
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
