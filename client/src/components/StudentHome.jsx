import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ClipboardListIcon, AcademicCapIcon, UserCircleIcon, UserGroupIcon, CalendarIcon } from '@heroicons/react/outline';
import LeaveRequest from './LeaveRequest';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <Link to="/leave-request" className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <HomeIcon className="w-12 h-12 mb-2" />
          Apply and View Leave
        </Link>
        <Link to="/view-complaints" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <ClipboardListIcon className="w-12 h-12 mb-2" />
          Apply and View Complaints
        </Link>
        <Link to="/room-details" className="bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <UserCircleIcon className="w-12 h-12 mb-2" />
          Apply and View Room Details
        </Link>
        <Link to="/courses" className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <AcademicCapIcon className="w-12 h-12 mb-2" />
          View and Register Courses
        </Link>
        <Link to="/mess" className="bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <UserGroupIcon className="w-12 h-12 mb-2" />
          Apply For Mess
        </Link>
        <Link to="/events" className="bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded flex flex-col items-center">
          <CalendarIcon className="w-12 h-12 mb-2" />
          Post Events
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
