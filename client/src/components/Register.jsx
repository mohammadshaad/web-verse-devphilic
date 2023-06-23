import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [block, setBlock] = useState('');
  const [password, setPassword] = useState('');
  const [roomNo, setRoomNo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/student/auth/register', {
        name,
        regNo,
        block,
        password,
        roomNo
      });

      console.log(response.data);

      // Clear form fields after successful registration
      setName('');
      setRegNo('');
      setBlock('');
      setPassword('');
      setRoomNo('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex items-center justify-center flex-col w-screen mt-8">
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Registration Number:</label>
        <input
          type="text"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Block:</label>
        <input
          type="text"
          value={block}
          onChange={(e) => setBlock(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Room Number:</label>
        <input
          type="text"
          value={roomNo}
          onChange={(e) => setRoomNo(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Register
      </button>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

export default RegistrationForm;
