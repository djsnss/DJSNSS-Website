import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './components/ErrorPage';
import Loader from './components/Loaders/loader2/CustomLoader2'

// Lazy loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./pages/Admin'));
const Contact = lazy(() => import('./pages/ContactUs'));
const AdminWorkPage = lazy(() => import('./pages/AdminWorkPage'));
const Events = lazy(() => import('./pages/Events'));
const CheckHours = lazy(() => import('./pages/CheckHours'));
const HoursComplaint = lazy(() => import('./pages/HoursComplaint'));
const Volunteer = lazy(() => import('./pages/Volunteer'));
const VolunteerPolicy = lazy(() => import('./pages/VolunteerPolicy'));
const EventDetails = lazy(() => import('./pages/EventDetails'));
const EventRegistration = lazy(() => import('./pages/EventRegistration'));
const Login = lazy(() => import('./pages/Login'));
const License = lazy(() => import('./pages/License'));
const Team = lazy(() => import('./pages/Team'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={<div className='h-screen flex items-center justify-center bg-gradient-to-tr from-blue-300 to-white'><Loader className="pt-20 h-40" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
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
            <Route path="/license" element={<License />} />
            <Route path="/team/:year" element={<Team />} />

            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
