import {useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {BookingFormSection} from './components/BookingFormSection';
import {ContactSection} from './components/ContactSection';
import {DestinationsSection} from './components/DestinationsSection';
import {FleetSection} from './components/FleetSection';
import {FloatingWhatsApp} from './components/FloatingWhatsApp';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {ReviewsSection} from './components/ReviewsSection';
import {ServicesSection} from './components/ServicesSection';
import {WhyChooseSection} from './components/WhyChooseSection';
import {BookingPrefill} from './types/booking';

export default function App() {
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill | null>(null);

  const handleSelectBookingPrefill = (prefill: Omit<BookingPrefill, 'timestamp'>) => {
    setBookingPrefill({
      ...prefill,
      timestamp: Date.now(),
    });

    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E2420] overflow-x-clip">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection onSelectBookingPrefill={handleSelectBookingPrefill} />
        <FleetSection onSelectBookingPrefill={handleSelectBookingPrefill} />
        <DestinationsSection onSelectBookingPrefill={handleSelectBookingPrefill} />
        <WhyChooseSection />
        <ReviewsSection />
        <BookingFormSection prefill={bookingPrefill} />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
