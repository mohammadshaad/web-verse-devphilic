import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/Login';
import RegistrationForm from './components/Register';
import LandingPage from './components/Landing';
import StudentHome from './components/StudentHome';
import LeaveRequest from './components/LeaveRequest';
import Dashboard from './components/LeaveRequest';
import ViewLeave from './components/ViewLeave';
import ViewComplaints from './components/ViewComplaints';
import CreateComplaints from './components/CreateComplaints';
import RoomDetails from './components/RoomDetails';
import MessDetails from './components/MessDetails';
import FacultyLoginForm from './components/FacultyLogin';
import FacultyRegister from './components/FacultyRegister';
import StudentEvent from './components/StudentEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegistrationForm />} />
        <Route path="studentHome" element={<StudentHome />} />
        <Route path="leave-request" element={<LeaveRequest />} />
        <Route path="view-leave-requests" element={<ViewLeave />} />
        <Route path="view-complaints" element={<ViewComplaints />} />
        <Route path="create-complaints" element={<CreateComplaints />} />
        <Route path="room-details" element={<RoomDetails />} />
        <Route path="mess-details" element={<MessDetails />} />
        <Route path="faculty-login" element={<FacultyLoginForm />} />
        <Route path="faculty-register" element={<FacultyRegister />} />
        <Route path="student-event" element={<StudentEvent />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
