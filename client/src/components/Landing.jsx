import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, AcademicCapIcon, ClipboardListIcon } from '@heroicons/react/outline';
import LoginForm from './Login';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Hostel Management System</h1>
      <p className="text-lg mb-4">Please select your role:</p>
      <ul className="list-none">
        <li className="mb-2">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">
            <UserCircleIcon className="w-6 h-6 mr-2" />
            Student
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/warden" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center">
            <ClipboardListIcon className="w-6 h-6 mr-2" />
            Warden
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/faculty" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2" />
            Faculty
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
