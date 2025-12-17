import { Building2, Globe, TrendingUp, CheckCircle, BookOpen, Home, Trophy, Star, Layers, Zap, Hexagon, ArrowRight, Sparkles, BarChart3, PieChart, Activity, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useRef, useEffect } from 'react';

interface OurStructuresPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function OurStructuresPage({ direction, theme, toggleTheme, toggleDirection, t }: OurStructuresPageProps) {
  const navigate = useNavigate();
  // Mouse Move Gradient Logic
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    const element = heroRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const fields = [
    {
      id: 'industrial',
      title: direction === 'rtl' ? 'المجال الصناعي' : 'Industrial Field',
      titleEn: 'Industrial Field',
      titleAr: 'المجال الصناعي',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20',
      description: direction === 'rtl'
        ? 'حلول أتمتة متكاملة وذكاء اصطناعي للمصانع.'
        : 'Integrated automation and AI solutions for factories.',
      stats: { projects: '150+', experience: '8Y+' }
    },
    {
      id: 'tourism',
      title: direction === 'rtl' ? 'المجال السياحي' : 'Tourism Field',
      titleEn: 'Tourism Field',
      titleAr: 'المجال السياحي',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      shadowColor: 'shadow-green-500/20',
      description: direction === 'rtl'
        ? 'منصات حجز وسفر ذكية لتجربة سياحية فريدة.'
        : 'Smart booking and travel platforms for unique experiences.',
      stats: { projects: '85+', experience: '6Y+' }
    },
    {
      id: 'commercial',
      title: direction === 'rtl' ? 'المجال التجاري' : 'Commercial Field',
      titleEn: 'Commercial Field',
      titleAr: 'المجال التجاري',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      shadowColor: 'shadow-purple-500/20',
      description: direction === 'rtl'
        ? 'أنظمة تجارة إلكترونية وإدارة مبيعات متطورة.'
        : 'Advanced e-commerce and sales management systems.',
      stats: { projects: '200+', experience: '10Y+' }
    },
    {
      id: 'medical',
      title: direction === 'rtl' ? 'المجال الطبي' : 'Medical Field',
      titleEn: 'Medical Field',
      titleAr: 'المجال الطبي',
      icon: CheckCircle,
      color: 'from-red-500 to-red-600',
      shadowColor: 'shadow-red-500/20',
      description: direction === 'rtl'
        ? 'حلول صحية رقمية وأنظمة إدارة مستشفيات.'
        : 'Digital health solutions and hospital management systems.',
      stats: { projects: '65+', experience: '7Y+' }
    },
    {
      id: 'educational',
      title: direction === 'rtl' ? 'المجال التعليمي' : 'Educational Field',
      titleEn: 'Educational Field',
      titleAr: 'المجال التعليمي',
      icon: BookOpen,
      color: 'from-indigo-500 to-indigo-600',
      shadowColor: 'shadow-indigo-500/20',
      description: direction === 'rtl'
        ? 'منصات تعليم إلكتروني تفاعلية وأنظمة LMS.'
        : 'Interactive e-learning platforms and LMS systems.',
      stats: { projects: '95+', experience: '9Y+' }
    },
    {
      id: 'banks-insurance',
      title: direction === 'rtl' ? 'البنوك والتأمين' : 'Banks & Insurance',
      titleEn: 'Banks & Insurance',
      titleAr: 'البنوك والتأمين',
      icon: Building2,
      color: 'from-teal-500 to-teal-600',
      shadowColor: 'shadow-teal-500/20',
      description: direction === 'rtl'
        ? 'حلول مالية آمنة (FinTech) وأنظمة بنكية.'
        : 'Secure financial solutions (FinTech) and banking systems.',
      stats: { projects: '55+', experience: '6Y+' }
    },
    {
      id: 'furniture',
      title: direction === 'rtl' ? 'مجال الأثاث' : 'Furniture Field',
      titleEn: 'Furniture Field',
      titleAr: 'مجال الأثاث',
      icon: Home,
      color: 'from-orange-500 to-orange-600',
      shadowColor: 'shadow-orange-500/20',
      description: direction === 'rtl'
        ? 'تصاميم 3D وواقع معزز (AR) لمعارض الأثاث.'
        : '3D designs and Augmented Reality (AR) for showrooms.',
      stats: { projects: '75+', experience: '5Y+' }
    },
    {
      id: 'sports',
      title: direction === 'rtl' ? 'المجال الرياضي' : 'Sports Field',
      titleEn: 'Sports Field',
      titleAr: 'المجال الرياضي',
      icon: Trophy,
      color: 'from-yellow-500 to-yellow-600',
      shadowColor: 'shadow-yellow-500/20',
      description: direction === 'rtl'
        ? 'تطبيقات لياقة وتحليل بيانات رياضية ذكية.'
        : 'Fitness apps and smart sports data analytics.',
      stats: { projects: '60+', experience: '4Y+' }
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'} `} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section - Advanced & Chic & Interactive */}
        <section
          ref={heroRef}
          className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Main Background */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-gray-900/80"></div>
          </div>

          {/* Mouse Moving Gradient Overlay - INTENSIFIED */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: opacity,
              background: `radial - gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.25), transparent 40 %)`
            }}
          ></div>

          {/* Additional Dark Mode Glow for better visibility - INTENSIFIED */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 hidden dark:block"
            style={{
              opacity: opacity * 0.6,
              background: `radial - gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.3), transparent 40 %)`
            }}
          ></div>

          {/* Static Glowing Orbs (for ambiance) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

              {/* Left Side: Advanced Analytics Element */}
              <div className="hidden lg:block w-48 relative group">
                {/* Floating Element 1 - Top Left */}
                <div className="absolute -top-8 -right-8 z-20 animate-bounce delay-700">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700 ring-1 ring-purple-500/10">
                    <BarChart3 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                {/* Main Analytics Circle */}
                <div className="w-36 h-36 mx-auto relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>

                  {/* Glass Container */}
                  <div className="w-full h-full bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 backdrop-blur-xl rounded-full border border-white/50 dark:border-gray-600 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <div className="relative">
                      <Activity className="w-16 h-16 text-gray-900 dark:text-white drop-shadow-lg" strokeWidth={1.5} />
                      {/* Decoration inside glass */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                <div className={`absolute top - 1 / 2 ${direction === 'rtl' ? '-left-20' : '-right-20'} w - 20 h - px bg - gradient - to - r from - gray - 300 via - purple - 400 to - transparent dark: from - gray - 600 dark: via - purple - 500 hidden xl:block opacity - 50`}></div>
              </div>

              {/* Center Content - Advanced Typography */}
              <div className="flex-1 text-center max-w-4xl mx-auto z-20 px-4">

                {/* Chic Tile */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Layers className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
                    {direction === 'rtl' ? 'تخصصاتنا' : 'Our Structures'}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                  {direction === 'rtl'
                    ? <span className="text-gray-900 dark:text-white">نبتكر <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-gradient-x">حلول المستقبل</span></span>
                    : <span className="text-gray-900 dark:text-white">Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-gradient-x">Tomorrow's</span> Solutions</span>
                  }
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  {direction === 'rtl'
                    ? 'تقنيات متقدمة لدعم نمو أعمالك، مصممة خصيصاً لتلبية طموحاتك.'
                    : 'Advanced technologies to support your business growth, tailored to meet your ambitions.'
                  }
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full">
                  <button className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 min-w-[200px] overflow-hidden">
                    <span className="relative z-10">{direction === 'rtl' ? 'ابدأ كشريك' : 'Join as Partner'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <button className="group relative px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-800 hover:scale-105 transition-all duration-300 min-w-[200px]">
                    <span className="flex items-center justify-center gap-2">
                      {direction === 'rtl' ? 'انضم كعميل' : 'Start Project'}
                      <Hexagon className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500 text-purple-500" />
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Side: Advanced Tech Element */}
              <div className="hidden lg:block w-48 relative group">
                {/* Floating Element 2 - Bottom Right */}
                <div className="absolute -bottom-8 -left-8 z-20 animate-bounce delay-1000">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700 ring-1 ring-blue-500/10">
                    <PieChart className="w-6 h-6 text-blue-500 fill-blue-500/20" />
                  </div>
                </div>

                {/* Main Tech Circle */}
                <div className="w-36 h-36 mx-auto relative z-10">
                  <div className="absolute inset-0 bg-gradient-to-bl from-orange-400 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse delay-75"></div>

                  {/* Glass Container */}
                  <div className="w-full h-full bg-gradient-to-bl from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 backdrop-blur-xl rounded-full border border-white/50 dark:border-gray-600 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <Zap className="w-16 h-16 text-gray-900 dark:text-white drop-shadow-lg fill-yellow-400/20" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Connector Line */}
                <div className={`absolute top - 1 / 2 ${direction === 'rtl' ? '-right-20' : '-left-20'} w - 20 h - px bg - gradient - to - l from - gray - 300 via - purple - 400 to - transparent dark: from - gray - 600 dark: via - purple - 500 hidden xl:block opacity - 50`}></div>
              </div>
            </div>

            {/* Partner Logos Strip (Simplistic - Glass) */}
            <div className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800/50 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['HubSpot', 'GitLab', 'loom', 'LiveChat', 'ahrefs'].map((brand) => (
                <span key={brand} className="text-xl font-bold text-gray-400 dark:text-gray-600 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Fields Grid - Advanced Redesign */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          {/* Abstract Background pattern for Grid */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-600 font-bold tracking-wider text-sm uppercase mb-2 block">{direction === 'rtl' ? 'اكتشف' : 'Discover'}</span>
              <h2 className={`text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight`}>
                {direction === 'rtl' ? <>تخصصات <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">احترافية</span></> : <>Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Specializations</span></>}
              </h2>
              <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed`}>
                {direction === 'rtl'
                  ? 'اختر مجالك وانطلق في رحلة التحول الرقمي مع حلول مبتكرة ومخصصة.'
                  : 'Choose your field and embark on a digital transformation journey with innovative, tailored solutions.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fields.map((field) => {
                const IconComponent = field.icon;
                return (
                  <div
                    key={field.id}
                    onClick={() => navigate(`/structures/${field.id}`)}
                    className={`group relative bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer overflow-hidden ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {/* Hover Gradient Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/20 rounded-3xl transition-colors duration-500"></div>

                    {/* Icon Container - Advanced Glass */}
                    <div className={`mb-6 relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${field.color} shadow-lg ${field.shadowColor} group-hover:scale-110 transition-transform duration-500`}>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                      <IconComponent className="w-8 h-8 text-white relative z-10" />

                      {/* Sparkle Decoration on Hover */}
                      <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300 flex items-center gap-2">
                        {field.title}
                        <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform ${direction === 'rtl' ? 'rotate-180 -translate-x-2' : 'translate-x-2'}`} />
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                        {field.description}
                      </p>

                      {/* Stats / Metalabels */}
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {field.stats.projects}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 px-2.5 py-1 rounded-lg">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {field.stats.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </section>

        {/* Redesigned CTA - Reference Style (Content Left / Form Right) */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden" id="consultation-form">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>

              {/* Left Side: Content & Stats */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2 text-right' : 'text-left'} `}>
                <span className="text-purple-400 font-bold tracking-wider text-sm uppercase mb-4 block">
                  {direction === 'rtl' ? 'لماذا تختارنا' : 'Why Choose Us'}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {direction === 'rtl' ? (
                    <>نلتزم بتقديم <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">نتائج دقيقة</span> وحلول مبتكرة</>
                  ) : (
                    <>Committed to Provide <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Accurate Findings</span> & Solutions</>
                  )}
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                  {direction === 'rtl'
                    ? 'نؤمن بمستقبل تقوده التكنولوجيا لتعزيز الأعمال. نقدم مجموعة واسعة من الخدمات الرقمية لضمان نجاح مشروعك من البداية للنهاية.'
                    : 'We believe in a future driven by technology to empower businesses. We provide a wide range of digital services to ensure your project success from start to finish.'}
                </p>

                {/* Points */}
                <div className="space-y-8 mb-12">
                  {[
                    {
                      id: '01',
                      title: direction === 'rtl' ? 'خبرة وكفاءة' : 'Experience and Expertise',
                      desc: direction === 'rtl' ? 'فريق من الخبراء المتخصصين في أحدث التقنيات لضمان أفضل الحلول.' : 'A team of experts specialized in the latest technologies to ensure the best solutions.'
                    },
                    {
                      id: '02',
                      title: direction === 'rtl' ? 'دعم متواصل' : 'Continuous Support',
                      desc: direction === 'rtl' ? 'نحن معك في كل خطوة، من التخطيط وحتى ما بعد الإطلاق.' : 'We are with you at every step, from planning to post-launch support.'
                    }
                  ].map((point) => (
                    <div key={point.id} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-lg group-hover:bg-purple-600 group-hover:border-purple-500 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
                        {point.id}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Circular Stats */}
                <div className="flex gap-8 border-t border-white/10 dark:border-white/10 border-gray-200 pt-8">
                  {[
                    { label: direction === 'rtl' ? 'نجاح المشاريع' : 'Project Success', value: '98%', color: '#a855f7' }, // Purple
                    { label: direction === 'rtl' ? 'رضا العملاء' : 'Client Satisfaction', value: '100%', color: '#3b82f6' } // Blue
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 bg-gray-100 box-border"
                        style={{
                          background: `conic - gradient(${stat.color} calc(${parseFloat(stat.value)}%), rgba(255, 255, 255, 0.05) 0)`
                        }}>
                        <div className="absolute inset-[4px] bg-white dark:bg-black rounded-full flex items-center justify-center">
                          <span className="text-gray-900 dark:text-white font-bold text-lg">{stat.value}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-900 dark:text-white font-bold text-lg">{stat.label}</span>
                        <span className="text-gray-600 dark:text-gray-500 text-sm">{direction === 'rtl' ? 'تقييم عالي' : 'Highly Rated'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Form Card */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1' : ''} `}>
                <div className="relative bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gray-100 dark:border-gray-800">
                  <div className="text-center mb-8">
                    <span className="text-blue-500 font-semibold text-xs uppercase tracking-widest mb-2 block">
                      {direction === 'rtl' ? 'خدمات عالية الأداء لـ' : 'High Performance Services For'}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {direction === 'rtl' ? 'احجز استشارتك الآن' : 'Schedule An Appointment'}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-3 max-w-xs mx-auto">
                      {direction === 'rtl' ? 'فريقنا جاهز لمساعدتك في تحقيق أهدافك التقنية.' : 'Our team is ready to help you achieve your technical goals.'}
                    </p>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    {/* Service Select */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Zap className="w-5 h-5 text-gray-400" />
                      </div>
                      <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl py-3 pl-12 pr-4 appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all">
                        <option value="" disabled selected>{direction === 'rtl' ? 'اختر الخدمة' : 'Select Service'}</option>
                        {fields.map((field) => (
                          <option key={field.id} value={field.title}>
                            {field.title}
                          </option>
                        ))}
                      </select>
                      <div className={`absolute inset - y - 0 ${direction === 'rtl' ? 'left-0 pl-4' : 'right-0 pr-4'} flex items - center pointer - events - none`}>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="text"
                          placeholder={direction === 'rtl' ? 'الاسم الكامل *' : 'Full Name *'}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-400 transition-all"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder={direction === 'rtl' ? 'البريد الإلكتروني *' : 'Email Address *'}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-400 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <input
                          type="tel"
                          placeholder={direction === 'rtl' ? 'رقم الهاتف *' : 'Phone No *'}
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none placeholder-gray-400 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl py-3 px-4 appearance-none focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-400">
                          <option value="" disabled selected>{direction === 'rtl' ? 'الموقع' : 'Location'}</option>
                          <option>Remote</option>
                          <option>Office</option>
                        </select>
                        <div className={`absolute inset - y - 0 ${direction === 'rtl' ? 'left-0 pl-4' : 'right-0 pr-4'} flex items - center pointer - events - none`}>
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-200 text-white dark:text-black font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300">
                      {direction === 'rtl' ? 'تأكيد الموعد' : 'Make Appointment'}
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                      {direction === 'rtl'
                        ? 'بإرسال هذا النموذج، أنت توافق على شروط الاستخدام وسياسة الخصوصية.'
                        : 'I agree to the Terms of Use and Privacy Policy'}
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
