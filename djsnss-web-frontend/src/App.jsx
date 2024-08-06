import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Events from './pages/Events';
import CheckHours from './pages/CheckHours';
import HoursComplaint from './pages/HoursComplaint';
import Volunteer from './pages/Volunteer';
import VolunteerPolicy from './pages/VolunteerPolicy';
import EventDetails from './pages/EventDetails';

const App = () => {
  return (
    <Router className="flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/check-hours" element={<CheckHours />} />
        <Route path="/hours-complaint" element={<HoursComplaint />} />
        <Route path='/volunteer' element={<VolunteerPolicy />} />
        <Route path='/eventdetails' element={<EventDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
