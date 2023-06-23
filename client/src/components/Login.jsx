import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/student/auth/login', {
        regNo,
        password
      });

      console.log(response.data);

      // Clear form fields after successful login
      setRegNo('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center w-screen flex-col mt-8">
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
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <Link href='/register'>
      </Link>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Login
      </button>

      <div>
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </form>
  );
}

export default LoginForm;
