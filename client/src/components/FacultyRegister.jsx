import React, { useState } from 'react';
import axios from 'axios';

function FacultyRegistrationForm() {
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [isHOD, setIsHOD] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/v1/faculty/auth/register', {
        name,
        empId,
        password,
        isHOD
      });

      setMessage(response.data.message);
      // Clear form fields
      setName('');
      setEmpId('');
      setPassword('');
      setIsHOD(false);
    } catch (error) {
      setMessage('Error occurred during registration');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen flex-col mt-8">
      <h2>Faculty Registration</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Name:</label>
          <input
            // style={{"padding"}}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label>Head of Department:</label>
          <input
            type="checkbox"
            checked={isHOD}
            onChange={(e) => setIsHOD(e.target.checked)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FacultyRegistrationForm;