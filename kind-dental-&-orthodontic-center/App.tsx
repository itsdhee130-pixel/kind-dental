import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DoctorProfile from './components/DoctorProfile';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const openAppointment = () => setIsAppointmentOpen(true);
  const closeAppointment = () => setIsAppointmentOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-neutral-dark font-display selection:bg-medical-light/30">
      <Navbar onBookVisit={openAppointment} />
      <main>
        <Hero onBookAppointment={openAppointment} />
        <Services onBookAppointment={openAppointment} />
        <DoctorProfile />
        <BeforeAfter />
        <Testimonials />
      </main>
      <Footer />
      <AppointmentForm 
        isOpen={isAppointmentOpen} 
        onOpen={openAppointment} 
        onClose={closeAppointment} 
      />
    </div>
  );
};

export default App;