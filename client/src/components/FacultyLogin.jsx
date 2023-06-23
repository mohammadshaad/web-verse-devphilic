import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FacultyLoginForm() {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/faculty/auth/login', {
        empId,
        password
      });

      // Check login status
      if (response.data.success) {
        setMessage('Login successful');
        // Perform any further actions or navigate to a different page
      } else {
        setMessage('Invalid credentials');
      }

      // Clear form fields
      setEmpId('');
      setPassword('');
    } catch (error) {
      setMessage('Error occurred during login');
      console.error(error);
    }
  };

  return (
    <div className=" flex items-center justify-center flex-col w-screen mt-8">
      <h2>Faculty Login</h2>
      <form onSubmit={handleSubmit} className=" flex items-center justify-center flex-col w-screen mt-8">
        <div className="mb-4">
          <label className="block mb-2">Employee ID:</label>
          <input
            type="text"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"

          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
        <div>
        Don't have an account? <Link to="/faculty-login">Register</Link>
      </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FacultyLoginForm;