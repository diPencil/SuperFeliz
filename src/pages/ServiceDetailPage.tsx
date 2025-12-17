import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Users, Clock, Award, Star } from 'lucide-react';
import { translations, Language } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ServiceDetailPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function ServiceDetailPage({ direction, theme, toggleTheme, toggleDirection, t }: ServiceDetailPageProps) {
  const { serviceType } = useParams<{ serviceType: string }>();
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  // Map service URLs to service keys for /services/:serviceType routes
  const serviceUrlMap: { [key: string]: string } = {
    'graphic-design': 'branding',
    'web-development': 'web',
    'mobile-apps': 'mobile',
    'marketing-social-media': 'marketing',
    'hosting-cloud': 'cloud',
    'it-consulting': 'consulting',
    'printing-services': 'printing',
    'server-management': 'server',
    'email-plans': 'email'
  };

  // Handle /services/:serviceType routes only
  let serviceKey = serviceUrlMap[serviceType || ''] || serviceType;
  const service = t.services.items[serviceKey as keyof typeof t.services.items];

  // Service stats (you can customize these per service)
  const serviceStats = [
    { icon: Users, value: '500+', label: direction === 'rtl' ? 'عميل سعيد' : 'Happy Clients', color: 'text-blue-600' },
    { icon: Clock, value: '10+', label: direction === 'rtl' ? 'سنوات خبرة' : 'Years Experience', color: 'text-green-600' },
    { icon: Award, value: '1000+', label: direction === 'rtl' ? 'مشروع مكتمل' : 'Projects Done', color: 'text-purple-600' },
    { icon: Star, value: '4.9', label: direction === 'rtl' ? 'تقييم العملاء' : 'Client Rating', color: 'text-yellow-600' }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
          <div className="relative max-w-7xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate('/services')}
              className={`inline-flex items-center gap-2 px-4 py-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft className={`w-4 h-4 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              <span>{direction === 'rtl' ? 'العودة للخدمات' : 'Back to Services'}</span>
            </button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className={`${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'} ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                    {t.services.badge}
                  </span>
                </div>

                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {service.title}
                </h1>

                <p className={`text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {service.detailedDescription}
                </p>

                {/* Service Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {serviceStats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className={`text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                        <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className={`${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'} order-1 lg:order-2`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={`/images/services/${serviceKey}.jpg`}
                    alt={service.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                    onError={(e) => {
                      // Fallback image if service specific image doesn't exist
                      (e.target as HTMLImageElement).src = "/images/Comprehensive Digital Solutions En.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Features */}
              <div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {direction === 'rtl' ? 'المميزات' : 'Features'}
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className={`flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg ${direction === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className={`text-3xl lg:text-4xl font-bold mb-8 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {direction === 'rtl' ? 'الفوائد' : 'Benefits'}
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit: string, index: number) => (
                    <div key={index} className={`flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 ${direction === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {direction === 'rtl' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {direction === 'rtl' ? 'دعنا نناقش كيف يمكننا مساعدة تحويل فكرتك إلى واقع رقمي ناجح.' : 'Let\'s discuss how we can help transform your idea into a successful digital reality.'}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${direction === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
              <button className={`inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 group ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <span>{direction === 'rtl' ? 'ابدأ مشروعك' : 'Start Your Project'}</span>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
              <button className={`inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 group ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <span>{direction === 'rtl' ? 'تواصل معنا' : 'Contact Us'}</span>
                <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>
            </div>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
