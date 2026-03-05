import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NarrativeSection from '@/components/NarrativeSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import FoundersSection from '@/components/FoundersSection';
import TopDestinations from '@/components/TopDestinations';

import ServicesGrid from '@/components/ServicesGrid';
import CoursesSpotlight from '@/components/CoursesSpotlight';
import StatsBar from '@/components/StatsBar';
import NewsSection from '@/components/NewsSection';
import InstagramSection from '@/components/InstagramSection';
import UniversityTicker from '@/components/UniversityTicker';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AspireEach",
    "url": "https://aspireeach.com",
    "logo": "https://aspireeach.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9324482899",
      "contactType": "customer service",
      "areaServed": "IN, US, UK, CA, AU",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/p/Aspire-Each-Overseas-61550339423810/",
      "https://www.instagram.com/aspireeachoverseas",
      "https://www.linkedin.com/company/aspire-each/"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="AspireEach - Global Education Consultancy"
        description="Navigate your global education journey with India's most trusted consultancy. We bridge the gap between your dreams and top-tier universities worldwide."
        canonical="https://aspireeach.com/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <Navbar />
      <HeroSection />
      <TopDestinations />
      <NarrativeSection />
      <WhyChooseUs />
      <ProcessSteps />
      <FoundersSection />
      <ServicesGrid />
      <CoursesSpotlight />
      <StatsBar />
      <UniversityTicker />

      <Testimonials />
      <NewsSection />
      <InstagramSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
