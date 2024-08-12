import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import AdminWorkPage from './pages/AdminWorkPage'; // Import AdminWorkPage
import Events from './pages/Events';
import CheckHours from './pages/CheckHours';
import HoursComplaint from './pages/HoursComplaint';
import Volunteer from './pages/Volunteer';
import VolunteerPolicy from './pages/VolunteerPolicy';
import EventDetails from './pages/EventDetails';
import EventRegistration from './pages/EventRegistration';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-work" element={<AdminWorkPage />} /> {/* Add AdminWorkPage route */}
          <Route path="/events" element={<Events />} />
          <Route path="/check-hours" element={<CheckHours />} />
          <Route path="/hours-complaint" element={<HoursComplaint />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/volunteer-policy" element={<VolunteerPolicy />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/event-registration" element={<EventRegistration />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
