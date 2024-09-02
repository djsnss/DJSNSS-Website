import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import AdminWorkPage from './pages/AdminWorkPage';
import Events from './pages/Events';
import CheckHours from './pages/CheckHours';
import HoursComplaint from './pages/HoursComplaint';
import Volunteer from './pages/Volunteer';
import VolunteerPolicy from './pages/VolunteerPolicy';
import EventDetails from './pages/EventDetails';
import EventRegistration from './pages/EventRegistration';
import Login from './pages/Login';
import License from './pages/License';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Routes>
          <Route path="/team" element={<Team />} />
          <Route path="/license" element={<License />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-work" element={<AdminWorkPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/check-hours" element={<CheckHours />} />
          <Route path="/hours-complaint" element={<HoursComplaint />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/volunteer-policy" element={<VolunteerPolicy />} />
          <Route path="/eventdetails/:slug" element={<EventDetails />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/event-registration" element={<EventRegistration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
