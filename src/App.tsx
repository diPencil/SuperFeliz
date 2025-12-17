import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import { translations, Language } from './translations';

// Lazy load heavy components for better performance
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const OurStructuresPage = lazy(() => import('./pages/OurStructuresPage'));
const FieldDetailPage = lazy(() => import('./pages/FieldDetailPage'));
const IndustrialFieldPage = lazy(() => import('./pages/fields/IndustrialFieldPage'));
const TourismFieldPage = lazy(() => import('./pages/fields/TourismFieldPage'));
const CommercialFieldPage = lazy(() => import('./pages/fields/CommercialFieldPage'));
const MedicalFieldPage = lazy(() => import('./pages/fields/MedicalFieldPage'));
const EducationalFieldPage = lazy(() => import('./pages/fields/EducationalFieldPage'));
const BanksInsuranceFieldPage = lazy(() => import('./pages/fields/BanksInsuranceFieldPage'));
const FurnitureFieldPage = lazy(() => import('./pages/fields/FurnitureFieldPage'));
const SportsFieldPage = lazy(() => import('./pages/fields/SportsFieldPage'));
const DomainsSSLPage = lazy(() => import('./pages/DomainsSSLPage'));
const EmailPlansPage = lazy(() => import('./pages/EmailPlansPage'));
const AmazonServicesPage = lazy(() => import('./pages/AmazonServicesPage'));
const ManagedWordPressPage = lazy(() => import('./pages/ManagedWordPressPage'));
const PluginsAPIOptimizePage = lazy(() => import('./pages/PluginsAPIOptimizePage'));
const TestPage = lazy(() => import('./pages/TestPage'));
const SuperFelizPage = lazy(() => import('./pages/SuperFelizPage'));
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'));
const Pricing = lazy(() => import('./components/Pricing'));
const StartBusiness = lazy(() => import('./components/StartBusiness'));
const Brands = lazy(() => import('./components/Brands'));
const Projects = lazy(() => import('./components/Projects'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const CTASection = lazy(() => import('./components/CTASection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('ltr');
  const language: Language = direction === 'rtl' ? 'ar' : 'en';
  const t = translations[language];

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleDirection = () => {
    setDirection(prev => prev === 'rtl' ? 'ltr' : 'rtl');
  };

  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
    document.documentElement.setAttribute('lang', language);
  }, [direction, language]);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
              <Hero direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Services direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Pricing direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <StartBusiness direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Brands direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Projects direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <WhyChooseUs direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Testimonials direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <CTASection direction={direction} t={t} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <ContactSection direction={direction} t={t} theme={theme} />
            </Suspense>
            <Suspense fallback={<div className="py-20 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
              <Footer direction={direction} theme={theme} t={t} />
            </Suspense>
          </div>
        } />

        {/* Services Page */}
        <Route path="/services" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <ServicesPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* About Us Page */}
        <Route path="/about" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <AboutUsPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Our Structures Page */}
        <Route path="/structures" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <OurStructuresPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Field Detail Pages */}
        <Route path="/structures/industrial" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <IndustrialFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Tourism Field */}
        <Route path="/structures/tourism" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <TourismFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Commercial Field */}
        <Route path="/structures/commercial" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <CommercialFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Medical Field */}
        <Route path="/structures/medical" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <MedicalFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Educational Field */}
        <Route path="/structures/educational" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <EducationalFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Banks & Insurance Field */}
        <Route path="/structures/banks-insurance" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <BanksInsuranceFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Furniture Field */}
        <Route path="/structures/furniture" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <FurnitureFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Sports Field */}
        <Route path="/structures/sports" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <SportsFieldPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Fallback for other fields - still using old FieldDetailPage */}
        <Route path="/structures/:fieldId" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <FieldDetailPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Domains & SSL Page */}
        <Route path="/domains-ssl" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <DomainsSSLPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Web Development Page (New Design) */}
        <Route path="/web-development" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <WebDevelopmentPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Individual Service Pages - OLD DYNAMIC ROUTE (Keep for now as fallback) */}
        <Route path="/services/:serviceType" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <ServiceDetailPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        <Route path="/email-plans" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <EmailPlansPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Amazon Services Page */}
        <Route path="/amazon-services" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <AmazonServicesPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Managed WordPress Page */}
        <Route path="/managed-wordpress" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <ManagedWordPressPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Plugins & API Optimize Page */}
        <Route path="/plugins-api-optimize" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <PluginsAPIOptimizePage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Test Page */}
        <Route path="/test" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <TestPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Super Feliz AI Consultation Page */}
        <Route path="/superfeliz" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
            <SuperFelizPage direction={direction} theme={theme} toggleTheme={toggleTheme} toggleDirection={toggleDirection} t={t} />
          </Suspense>
        } />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
