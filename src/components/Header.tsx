import { Menu, X, Moon, Sun, Languages, ChevronDown, Info, Mail, BookOpen, ArrowUpRight, Calendar, Users, FileText, HelpCircle, Handshake, ArrowRight, Briefcase, Newspaper, Building2, Users2, TrendingUp, Award, Star, Trophy, CheckCircle, MessageCircle, Palette, Megaphone, Printer, Code, Smartphone, Server, Wand2, Zap, Globe, Search, Image, Instagram, Globe2, Layers, Cloud, Network, Settings, Shield, DollarSign, Home } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  direction: 'rtl' | 'ltr';
  toggleDirection: () => void;
  t: typeof translations.en;
}

const getLogoImage = (theme: 'light' | 'dark'): string => {
  return theme === 'light'
    ? '/images/logos/logowhite.png'
    : '/images/logos/logodark.png';
};

export default function Header({ theme, toggleTheme, direction, toggleDirection, t }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isCaseStudiesDropdownOpen, setIsCaseStudiesDropdownOpen] = useState(false);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const caseStudiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: direction === 'rtl' ? 'الرئيسية' : 'Home', href: '/' },
    { label: direction === 'rtl' ? 'الخدمات' : 'Services', href: '/services' },
    { label: direction === 'rtl' ? 'من نحن' : 'About', href: '/about' },
    { label: direction === 'rtl' ? 'دراسات الحالة' : 'Case Studies', href: '#case-studies' },
  ];

  const companyAboutItems = [
    {
      label: t.nav.about,
      href: '#about',
      icon: Info,
      description: direction === 'rtl' ? 'تعرف على فريقنا وقصتنا' : 'Learn about our team and story'
    },
    {
      label: direction === 'rtl' ? 'لماذا نحن' : 'Why Us',
      href: '#why-us',
      icon: Star,
      description: direction === 'rtl' ? 'اكتشف ما يميزنا' : 'Discover what makes us unique'
    },
    {
      label: direction === 'rtl' ? 'الفريق' : 'Team',
      href: '#team',
      icon: Users2,
      description: direction === 'rtl' ? 'تعرف على فريقنا المتميز' : 'Meet our exceptional team'
    },
  ];

  const companyInfoItems = [
    {
      label: direction === 'rtl' ? 'التقييمات والجوائز' : 'Reviews & Awards',
      href: '#reviews-awards',
      icon: Trophy,
      description: direction === 'rtl' ? 'شهاداتنا وإنجازاتنا' : 'Our achievements and recognition'
    },
    {
      label: direction === 'rtl' ? 'الشركاء والشهادات' : 'Partners & Certifications',
      href: '#partners-certifications',
      icon: CheckCircle,
      description: direction === 'rtl' ? 'شركاؤنا المعتمدون' : 'Trusted partners and credentials'
    },
    {
      label: direction === 'rtl' ? 'الأسئلة الشائعة' : 'FAQ',
      href: '#faq',
      icon: HelpCircle,
      description: direction === 'rtl' ? 'أسئلة شائعة' : 'Common questions answered'
    },
  ];

  const companyBusinessItems = [
    {
      label: t.nav.contact,
      href: '#contact',
      icon: Mail,
      description: direction === 'rtl' ? 'تواصل معنا واحصل على الدعم' : 'Get in touch and receive support'
    },
    {
      label: direction === 'rtl' ? 'الصحافة' : 'Press & Media',
      href: '#press',
      icon: Newspaper,
      description: direction === 'rtl' ? 'آخر الأخبار والإعلانات' : 'Latest news and announcements'
    },
    {
      label: direction === 'rtl' ? 'الفعاليات' : 'Events',
      href: '#events',
      icon: Calendar,
      description: direction === 'rtl' ? 'الفعاليات والأنشطة القادمة' : 'Upcoming events and activities'
    },
  ];

  const resourcesMenuItems = [
    {
      label: direction === 'rtl' ? 'نقل مجاني بواسطة الخبراء' : 'Free Migration by Experts',
      href: '#migration',
      icon: ArrowRight,
      description: direction === 'rtl' ? 'نقل المواقع بسهولة بواسطة الخبراء' : 'Effortless website transfers by experts'
    },
    {
      label: t.nav.blog,
      href: '#blog',
      icon: BookOpen,
      description: direction === 'rtl' ? 'أحدث الأفكار والرؤى' : 'Latest insights'
    },
    {
      label: direction === 'rtl' ? 'قاعدة المعرفة' : 'Knowledge Base',
      href: '#knowledge-base',
      icon: HelpCircle,
      description: direction === 'rtl' ? 'تعرف على المزيد حول منتجاتنا' : 'Learn more about our products'
    },
  ];

  const resourcesCompanyItems = [
    {
      label: direction === 'rtl' ? 'الصناعات' : 'Industries',
      href: '#industries',
      icon: Users2,
      description: direction === 'rtl' ? 'اكتشف الصناعات التي نخدمها' : 'Discover the industries we serve'
    },
    {
      label: direction === 'rtl' ? 'الوظائف' : 'Careers',
      href: '#careers',
      icon: Briefcase,
      description: direction === 'rtl' ? 'انضم إلى فريقنا المتميز' : 'Join our exceptional team'
    },
    {
      label: direction === 'rtl' ? 'الوثائق' : 'Documentation',
      href: '#documentation',
      icon: FileText,
      description: direction === 'rtl' ? 'دليل شامل للمنتجات والخدمات' : 'Comprehensive guide to products and services'
    },
  ];

  const programsMenuItems = [
    {
      label: direction === 'rtl' ? 'تطبيقات المؤسسات' : 'Enterprise Applications',
      href: '#enterprise-applications',
      icon: Building2,
      description: direction === 'rtl' ? 'حلول تطبيقية للمؤسسات الكبيرة' : 'Enterprise-level application solutions'
    },
    {
      label: direction === 'rtl' ? 'تكاملات API' : 'API integrations',
      href: '#api-integrations',
      icon: Network,
      description: direction === 'rtl' ? 'تكاملات API احترافية' : 'Professional API integrations'
    },
    {
      label: direction === 'rtl' ? 'الأسعار' : 'Pricing',
      href: '#pricing',
      icon: DollarSign,
      description: direction === 'rtl' ? 'خطط وأسعار شفافة' : 'Transparent plans and pricing'
    },
  ];

  const servicesMenuItems = [
    {
      label: direction === 'rtl' ? 'الهوية التجارية والتصميم' : 'Branding & Graphic Design',
      href: '/graphic-design',
      icon: Palette,
      description: direction === 'rtl' ? 'إنشاء هويات تجارية مميزة' : 'Create memorable brand identities'
    },
    {
      label: direction === 'rtl' ? 'التسويق ووسائل التواصل' : 'Marketing & Social Media',
      href: '/marketing-social-media',
      icon: Megaphone,
      description: direction === 'rtl' ? 'حملات تسويقية فعالة' : 'Effective marketing campaigns'
    },
    {
      label: direction === 'rtl' ? 'تطوير الويب' : 'Web Development',
      href: '/web-development',
      icon: Code,
      description: direction === 'rtl' ? 'مواقع ويب حديثة ومتجاوبة' : 'Modern and responsive websites'
    },
    {
      label: direction === 'rtl' ? 'تطبيقات الجوال' : 'Mobile Apps',
      href: '/mobile-apps',
      icon: Smartphone,
      description: direction === 'rtl' ? 'تطبيقات موبايل احترافية' : 'Professional mobile applications'
    },
    {
      label: direction === 'rtl' ? 'الاستضافة والسحابة' : 'Hosting & Cloud',
      href: '/hosting-cloud',
      icon: 'cloud',
      description: direction === 'rtl' ? 'استضافة موثوقة وآمنة' : 'Reliable and secure hosting'
    },
    {
      label: direction === 'rtl' ? 'استشارات تكنولوجيا المعلومات' : 'IT Consulting',
      href: '/it-consulting',
      icon: 'network',
      description: direction === 'rtl' ? 'استشارات تقنية متخصصة' : 'Expert technical consulting'
    },
    {
      label: direction === 'rtl' ? 'خدمات الطباعة' : 'Printing Services',
      href: '/printing-services',
      icon: Printer,
      description: direction === 'rtl' ? 'طباعة عالية الجودة' : 'High-quality printing services'
    },
    {
      label: direction === 'rtl' ? 'إدارة الخوادم' : 'Server Management',
      href: '/server-management',
      icon: Server,
      description: direction === 'rtl' ? 'إدارة وصيانة الخوادم' : 'Server management and maintenance'
    },
  ];

  const businessChallengesItems = [
    {
      label: direction === 'rtl' ? 'النطاقات والشهادات الأمنية' : 'Domains & SSL',
      href: '/domains-ssl',
      icon: 'domain',
      description: direction === 'rtl' ? 'خدمات النطاقات والحماية الأمنية' : 'Domain and security certificate services'
    },
    {
      label: direction === 'rtl' ? 'خطط البريد الإلكتروني' : 'Email Plans',
      href: '/email-plans',
      icon: 'email',
      description: direction === 'rtl' ? 'خطط بريد إلكتروني احترافية' : 'Professional email plans'
    },
    {
      label: direction === 'rtl' ? 'خدمات أمازون' : 'Amazon Services',
      href: '/amazon-services',
      icon: 'aws',
      description: direction === 'rtl' ? 'استضافة سحابية على AWS' : 'Cloud hosting on AWS'
    },
    {
      label: direction === 'rtl' ? 'ووردبريس مُدار' : 'Managed WordPress',
      href: '/managed-wordpress',
      icon: 'wordpress',
      description: direction === 'rtl' ? 'استضافة ووردبريس مُدارة بالكامل' : 'Fully managed WordPress hosting'
    },
    {
      label: direction === 'rtl' ? 'تحسين الإضافات والواجهات' : 'Plugins & API Optimize',
      href: '/plugins-api-optimize',
      icon: 'api',
      description: direction === 'rtl' ? 'تحسين شامل للإضافات والأداء' : 'Comprehensive plugins and performance optimization'
    },
  ];

  const structuresItems = [
    {
      label: direction === 'rtl' ? 'المجال الصناعي' : 'Industrial Field',
      href: '/structures/industrial',
      icon: Building2,
      description: direction === 'rtl' ? 'حلول للصناعة' : 'Industrial solutions'
    },
    {
      label: direction === 'rtl' ? 'المجال السياحي' : 'Tourism Field',
      href: '/structures/tourism',
      icon: Globe,
      description: direction === 'rtl' ? 'حلول للسياحة' : 'Tourism solutions'
    },
    {
      label: direction === 'rtl' ? 'المجال التجاري' : 'Commercial Field',
      href: '/structures/commercial',
      icon: TrendingUp,
      description: direction === 'rtl' ? 'حلول تجارية' : 'Commercial solutions'
    },
    {
      label: direction === 'rtl' ? 'المجال الطبي' : 'Medical Field',
      href: '/structures/medical',
      icon: CheckCircle,
      description: direction === 'rtl' ? 'حلول طبية' : 'Medical solutions'
    },
    {
      label: direction === 'rtl' ? 'المجال التعليمي' : 'Educational Field',
      href: '/structures/educational',
      icon: BookOpen,
      description: direction === 'rtl' ? 'حلول تعليمية' : 'Educational solutions'
    },
    {
      label: direction === 'rtl' ? 'البنوك والتأمين' : 'Banks & Insurance',
      href: '/structures/banks-insurance',
      icon: Building2,
      description: direction === 'rtl' ? 'حلول مالية' : 'Financial solutions'
    },
    {
      label: direction === 'rtl' ? 'مجال الأثاث' : 'Furniture Field',
      href: '/structures/furniture',
      icon: Home,
      description: direction === 'rtl' ? 'حلول للأثاث' : 'Furniture solutions'
    },
    {
      label: direction === 'rtl' ? 'المجال الرياضي' : 'Sports Field',
      href: '/structures/sports',
      icon: Trophy,
      description: direction === 'rtl' ? 'حلول رياضية' : 'Sports solutions'
    },
  ];

  const corporateIdentitiesItems = [
    {
      label: direction === 'rtl' ? 'الهويات المؤسسية' : 'Corporate Identities',
      href: '#corporate-identities',
      icon: Building2,
      description: direction === 'rtl' ? 'تصميمات الهوية المؤسسية الكاملة' : 'Complete corporate identity designs'
    },
    {
      label: direction === 'rtl' ? 'عينات الشعارات' : 'Logos Sample',
      href: '#logos-sample',
      icon: Image,
      description: direction === 'rtl' ? 'مجموعة من تصميمات الشعارات' : 'Collection of logo designs'
    },
    {
      label: direction === 'rtl' ? 'تصميمات وسائل التواصل' : 'Social media designs',
      href: '#social-media-designs',
      icon: Instagram,
      description: direction === 'rtl' ? 'تصميمات احترافية لوسائل التواصل' : 'Professional social media designs'
    },
  ];

  const portfolioItems = [
    {
      label: direction === 'rtl' ? 'مواقع الويب' : 'Website portfolio',
      href: '#website-portfolio',
      icon: Globe2,
      description: direction === 'rtl' ? 'معرض مواقع الويب' : 'Website portfolio showcase'
    },
    {
      label: direction === 'rtl' ? 'تطبيقات الموبايل' : 'Mobile Apps',
      href: '#mobile-apps',
      icon: Smartphone,
      description: direction === 'rtl' ? 'تطبيقات موبايل احترافية' : 'Professional mobile applications'
    },
    {
      label: direction === 'rtl' ? 'أنظمة CRM/ERP' : 'CRM/ERP Systems',
      href: '#crm-erp-systems',
      icon: Layers,
      description: direction === 'rtl' ? 'أنظمة إدارة علاقات العملاء والمؤسسات' : 'Customer & enterprise management systems'
    },
  ];

  const platformPartnershipsItems = [
    {
      label: 'AWS',
      href: '#aws',
      icon: 'aws',
      description: direction === 'rtl' ? 'شراكة مع Amazon Web Services' : 'Amazon Web Services partnership'
    },
    {
      label: 'Google Cloud',
      href: '#google-cloud',
      icon: 'google-cloud',
      description: direction === 'rtl' ? 'شراكة مع Google Cloud' : 'Google Cloud partnership'
    },
    {
      label: 'Microsoft',
      href: '#microsoft',
      icon: 'microsoft',
      description: direction === 'rtl' ? 'شراكة مع Microsoft' : 'Microsoft partnership'
    },
    {
      label: 'Salesforce',
      href: '#salesforce',
      icon: 'salesforce',
      description: direction === 'rtl' ? 'شراكة مع Salesforce' : 'Salesforce partnership'
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 overflow-visible">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 relative overflow-visible">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={getLogoImage(theme)}
              alt="Pencil Studio Logo"
              className="h-8 sm:h-8 object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Services Dropdown - Mega Menu */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) {
                  clearTimeout(servicesTimeoutRef.current);
                }
                setIsServicesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => {
                  setIsServicesDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                {direction === 'rtl' ? 'الحلول' : 'Solutions'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div
                  className="fixed left-0 right-0 top-[80px] z-[9999]"
                  style={{ paddingTop: '8px' }}
                  onMouseEnter={() => {
                    if (servicesTimeoutRef.current) {
                      clearTimeout(servicesTimeoutRef.current);
                    }
                    setIsServicesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    servicesTimeoutRef.current = setTimeout(() => {
                      setIsServicesDropdownOpen(false);
                    }, 200);
                  }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <div className="grid gap-8" style={{ gridTemplateColumns: '2fr 1.2fr 1.2fr' }}>
                        {/* Services Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-5">
                            {direction === 'rtl' ? 'الخدمات' : 'Services'}
                          </h3>

                          {/* Search Bar */}
                          <div className="mb-4">
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                type="text"
                                placeholder={direction === 'rtl' ? 'ابحث عن حل...' : 'Search for a solution...'}
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3.5">
                            {servicesMenuItems.map((item) => {
                              return (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsServicesDropdownOpen(false);
                                  }}
                                >
                                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-200 shadow-lg group-hover:shadow-blue-500/50">
                                    {item.icon === 'network' ? (
                                      <img
                                        src="/images/icons/network-svgrepo-com.svg"
                                        alt="IT Consulting"
                                        className="w-7 h-7 filter brightness-0 invert"
                                      />
                                    ) : item.icon === 'cloud' ? (
                                      <img
                                        src="/images/icons/cloud-svgrepo-com.svg"
                                        alt="Hosting & Cloud"
                                        className="w-7 h-7 filter brightness-0 invert"
                                      />
                                    ) : typeof item.icon === 'string' ? (
                                      <img
                                        src={`/images/icons/${item.icon}-svgrepo-com.svg`}
                                        alt={item.label}
                                        className="w-7 h-7 filter brightness-0 invert"
                                      />
                                    ) : (
                                      <item.icon className="w-7 h-7 text-white" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-0.5">
                                      {item.label}
                                    </h3>
                                    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-tight line-clamp-2">
                                      {item.description}
                                    </p>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                                </a>
                              );
                            })}
                          </div>
                        </div>

                        {/* Business Challenges Column */}
                        <div className="space-y-3">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-5">
                            {direction === 'rtl' ? 'التحديات' : 'Challenges'}
                          </h3>
                          {businessChallengesItems.map((item) => {
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsServicesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  {item.icon === 'wordpress' ? (
                                    <img
                                      src="/images/icons/wordpress-svgrepo-com.svg"
                                      alt="WordPress"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : item.icon === 'aws' ? (
                                    <img
                                      src="/images/icons/aws-svgrepo-com.svg"
                                      alt="AWS"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : item.icon === 'domain' ? (
                                    <img
                                      src="/images/icons/domain-www-svgrepo-com.svg"
                                      alt="Domains & SSL"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : item.icon === 'email' ? (
                                    <img
                                      src="/images/icons/email-envelope-letter-message-fast-svgrepo-com.svg"
                                      alt="Email Plans"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : item.icon === 'api' ? (
                                    <img
                                      src="/images/icons/api-svgrepo-com.svg"
                                      alt="API & Plugins"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : item.icon === 'network' ? (
                                    <img
                                      src="/images/icons/network-svgrepo-com.svg"
                                      alt="IT Consulting"
                                      className="w-5 h-5 filter brightness-0 invert"
                                    />
                                  ) : (
                                    <IconComponent className="w-5 h-5 text-white" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Our Structures Column */}
                        <div className="space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'هياكلنا' : 'Our Structures'}
                          </h3>
                          {structuresItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsServicesDropdownOpen(false);
                                }}
                              >
                                <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                <span className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.label}
                                </span>
                              </a>
                            );
                          })}
                          <a
                            href="/structures"
                            className="block mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsServicesDropdownOpen(false);
                            }}
                          >
                            {direction === 'rtl' ? 'عرض جميع المجالات التي نخدمها' : 'View All Fields We Serve'}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown - Mega Menu */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => {
                if (caseStudiesTimeoutRef.current) {
                  clearTimeout(caseStudiesTimeoutRef.current);
                }
                setIsCaseStudiesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                caseStudiesTimeoutRef.current = setTimeout(() => {
                  setIsCaseStudiesDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsCaseStudiesDropdownOpen(!isCaseStudiesDropdownOpen)}
              >
                {t.nav.caseStudies}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCaseStudiesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCaseStudiesDropdownOpen && (
                <div
                  className="fixed left-0 right-0 top-[80px] z-[9999]"
                  style={{ paddingTop: '8px' }}
                  onMouseEnter={() => {
                    if (caseStudiesTimeoutRef.current) {
                      clearTimeout(caseStudiesTimeoutRef.current);
                    }
                    setIsCaseStudiesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    caseStudiesTimeoutRef.current = setTimeout(() => {
                      setIsCaseStudiesDropdownOpen(false);
                    }, 200);
                  }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <div className="grid gap-8" style={{ gridTemplateColumns: '1.2fr 1.2fr 1.6fr' }}>
                        {/* Branding Column */}
                        <div className="space-y-3">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-5">
                            {direction === 'rtl' ? 'العلامة التجارية' : 'Branding'}
                          </h3>
                          {corporateIdentitiesItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCaseStudiesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Portfolio Column */}
                        <div className="space-y-3">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-5">
                            {direction === 'rtl' ? 'معرض الأعمال' : 'Portfolio'}
                          </h3>
                          {portfolioItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCaseStudiesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Platform Partnerships Column */}
                        <div className="space-y-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-5">
                            {direction === 'rtl' ? 'شراكات المنصات' : 'Platform Partnerships'}
                          </h3>
                          {platformPartnershipsItems.map((item) => {
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCaseStudiesDropdownOpen(false);
                                }}
                              >
                                {item.icon === 'aws' ? (
                                  <img
                                    src="/images/icons/aws-svgrepo-com.svg"
                                    alt="AWS"
                                    className="w-4 h-4 flex-shrink-0"
                                  />
                                ) : item.icon === 'google-cloud' ? (
                                  <img
                                    src="/images/icons/google-cloud-svgrepo-com.svg"
                                    alt="Google Cloud"
                                    className="w-4 h-4 flex-shrink-0"
                                  />
                                ) : item.icon === 'microsoft' ? (
                                  <img
                                    src="/images/icons/microsoft-svgrepo-com.svg"
                                    alt="Microsoft"
                                    className="w-4 h-4 flex-shrink-0"
                                  />
                                ) : item.icon === 'salesforce' ? (
                                  <img
                                    src="/images/icons/salesforce-logo-svgrepo-com.svg"
                                    alt="Salesforce"
                                    className="w-4 h-4 flex-shrink-0"
                                  />
                                ) : (
                                  <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                )}
                                <span className="font-medium text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {item.label}
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown - Mega Menu */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => {
                if (companyTimeoutRef.current) {
                  clearTimeout(companyTimeoutRef.current);
                }
                setIsCompanyDropdownOpen(true);
              }}
              onMouseLeave={() => {
                companyTimeoutRef.current = setTimeout(() => {
                  setIsCompanyDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCompanyDropdownOpen && (
                <div
                  className="fixed left-0 right-0 top-[80px] z-[9999]"
                  style={{ paddingTop: '8px' }}
                  onMouseEnter={() => {
                    if (companyTimeoutRef.current) {
                      clearTimeout(companyTimeoutRef.current);
                    }
                    setIsCompanyDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    companyTimeoutRef.current = setTimeout(() => {
                      setIsCompanyDropdownOpen(false);
                    }, 200);
                  }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <div className="grid grid-cols-4 gap-6">
                        {/* About Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'عن الشركة' : 'About'}
                          </h3>
                          {companyAboutItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCompanyDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Info Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'المعلومات' : 'Information'}
                          </h3>
                          {companyInfoItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCompanyDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Business Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'الأعمال' : 'Business'}
                          </h3>
                          {companyBusinessItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsCompanyDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* CTA Section */}
                        <div className="col-span-1">
                          <div className="bg-blue-600 rounded-xl p-6 h-full flex flex-col justify-between">
                            <div>
                              <h3 className="text-white font-bold text-lg mb-2">
                                {direction === 'rtl' ? 'احجز استشارة' : 'Book a Consultation'}
                              </h3>
                              <p className="text-white/90 text-sm leading-relaxed">
                                {direction === 'rtl'
                                  ? 'اكتشف الحلول الموثوقة من قبل الآلاف'
                                  : 'Discover solutions trusted by thousands'}
                              </p>
                            </div>
                            <a
                              href="#contact"
                              className="mt-4 inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsCompanyDropdownOpen(false);
                              }}
                            >
                              <span>{direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown - Mega Menu */}
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => {
                if (resourcesTimeoutRef.current) {
                  clearTimeout(resourcesTimeoutRef.current);
                }
                setIsResourcesDropdownOpen(true);
              }}
              onMouseLeave={() => {
                resourcesTimeoutRef.current = setTimeout(() => {
                  setIsResourcesDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              >
                {direction === 'rtl' ? 'الموارد' : 'Resources'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isResourcesDropdownOpen && (
                <div
                  className="fixed left-0 right-0 top-[80px] z-[9999]"
                  style={{ paddingTop: '8px' }}
                  onMouseEnter={() => {
                    if (resourcesTimeoutRef.current) {
                      clearTimeout(resourcesTimeoutRef.current);
                    }
                    setIsResourcesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    resourcesTimeoutRef.current = setTimeout(() => {
                      setIsResourcesDropdownOpen(false);
                    }, 200);
                  }}
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <div className="grid grid-cols-4 gap-6">
                        {/* Company Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'استكشف' : 'Explore'}
                          </h3>
                          {resourcesCompanyItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsResourcesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Resources Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'تعلم' : 'Learn'}
                          </h3>
                          {resourcesMenuItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsResourcesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Programs Column */}
                        <div className="space-y-4">
                          <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide mb-4">
                            {direction === 'rtl' ? 'البرامج' : 'Programs'}
                          </h3>
                          {programsMenuItems.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <a
                                key={item.label}
                                href={item.href}
                                className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsResourcesDropdownOpen(false);
                                }}
                              >
                                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                                  <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                      {item.label}
                                    </h3>
                                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* CTA Section */}
                        <div className="col-span-1">
                          <div className="bg-green-600 rounded-xl p-6 h-full flex flex-col justify-between">
                            <div>
                              <h3 className="text-white font-bold text-base mb-2">
                                {direction === 'rtl' ? 'تحدث مع فريق المبيعات' : 'Talk to our sales team'}
                              </h3>
                              <p className="text-white/90 text-xs leading-relaxed">
                                {direction === 'rtl'
                                  ? 'تواصل مع فريقنا لإيجاد أفضل حل لك'
                                  : 'Get in touch with our team to find the best solution for you'}
                              </p>
                            </div>
                            <a
                              href="#contact"
                              className="mt-4 inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all duration-200"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsResourcesDropdownOpen(false);
                              }}
                            >
                              <span>{direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple Dropdown for Tablet - Services */}
            <div className="hidden md:block lg:hidden relative">
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                {direction === 'rtl' ? 'الحلول' : 'Solutions'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className={`absolute top-full mt-2 ${direction === 'rtl' ? 'right-0' : 'left-0'} bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 min-w-[200px] z-[9999]`}>
                  {[...servicesMenuItems, ...businessChallengesItems, ...structuresItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Simple Dropdown for Tablet - Company */}
            <div className="hidden md:block lg:hidden relative">
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCompanyDropdownOpen && (
                <div className={`absolute top-full mt-2 ${direction === 'rtl' ? 'right-0' : 'left-0'} bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 min-w-[200px] z-[9999]`}>
                  {[...companyAboutItems, ...companyInfoItems, ...companyBusinessItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsCompanyDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Simple Dropdown for Tablet - Resources */}
            <div className="hidden md:block lg:hidden relative">
              <button
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
              >
                {direction === 'rtl' ? 'الموارد' : 'Resources'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isResourcesDropdownOpen && (
                <div className={`absolute top-full mt-2 ${direction === 'rtl' ? 'right-0' : 'left-0'} bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-2 min-w-[200px] z-[9999]`}>
                  {[...resourcesMenuItems, ...programsMenuItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsResourcesDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              onClick={toggleDirection}
              className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              aria-label="Toggle direction"
            >
              <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {direction === 'rtl' ? 'English' : 'عربي'}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <a href="/superfeliz" className="px-4 lg:px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5 text-sm lg:text-base">
              {t.getConsultation}
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </a>

            {/* Services Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {direction === 'rtl' ? 'الحلول' : 'Solutions'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesDropdownOpen && (
                <div className="mt-2 space-y-2 pr-4">
                  {[...servicesMenuItems, ...businessChallengesItems, ...structuresItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="/services"
                    className="block text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesDropdownOpen(false);
                    }}
                  >
                    {direction === 'rtl' ? 'عرض جميع الخدمات' : 'View All Services'}
                  </a>
                </div>
              )}
            </div>

            <a
              href="#case-studies"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.caseStudies}
            </a>

            {/* Company Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Company
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCompanyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCompanyDropdownOpen && (
                <div className="mt-2 space-y-2 pr-4">
                  {[...companyAboutItems, ...companyInfoItems, ...companyBusinessItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsCompanyDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                {direction === 'rtl' ? 'الموارد' : 'Resources'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isResourcesDropdownOpen && (
                <div className="mt-2 space-y-2 pr-4">
                  {[...resourcesMenuItems, ...programsMenuItems].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsResourcesDropdownOpen(false);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={toggleDirection}
                className="flex-1 px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium flex items-center justify-center gap-2"
                aria-label="Toggle direction"
              >
                <Languages className="w-4 h-4" />
                <span>{direction === 'rtl' ? 'English' : 'عربي'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </div>
            <button className="w-full px-6 py-2.5 bg-green-600 text-white rounded-full font-medium">
              {t.getConsultation}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
