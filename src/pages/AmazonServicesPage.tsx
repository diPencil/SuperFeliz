import { useState } from 'react';
import { Cloud, Shield, Zap, Server, Globe, Users, CheckCircle, ArrowRight, Star, Building, Smartphone, Database, Lock, Settings, Cpu, Network, X, Check, TrendingUp, Award, Clock, Send, CreditCard, DollarSign, Earth } from 'lucide-react';
import { translations, Language } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AmazonServicesPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function AmazonServicesPage({ direction, theme, toggleTheme, toggleDirection, t }: AmazonServicesPageProps) {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    requirements: '',
    budget: ''
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      ...consultationForm,
      serviceType: selectedService
    };
    console.log('AWS Service Request:', formData);
    alert(direction === 'rtl'
      ? `تم استلام طلب خدمة ${selectedService ? `(${selectedService})` : ''} AWS بنجاح!`
      : `Your AWS service request${selectedService ? ` (${selectedService})` : ''} has been received successfully!`
    );
    setShowConsultationModal(false);
    setSelectedService('');
    setConsultationForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      requirements: '',
      budget: ''
    });
  };

  const awsServices = [
    {
      icon: Cloud,
      title: direction === 'rtl' ? 'استضافة سحابية' : 'Cloud Hosting',
      description: direction === 'rtl'
        ? 'استضافة موثوقة وقابلة للتوسع على منصة AWS العالمية'
        : 'Reliable and scalable hosting on the global AWS platform',
      features: [
        direction === 'rtl' ? 'توافر بنسبة 99.99%' : '99.99% uptime guarantee',
        direction === 'rtl' ? 'توسع تلقائي حسب الطلب' : 'Auto-scaling based on demand',
        direction === 'rtl' ? 'نسخ احتياطي تلقائي' : 'Automatic backup systems'
      ]
    },
    {
      icon: Database,
      title: direction === 'rtl' ? 'قواعد البيانات' : 'Database Solutions',
      description: direction === 'rtl'
        ? 'حلول قواعد بيانات متقدمة مع أداء عالي وأمان محكم'
        : 'Advanced database solutions with high performance and tight security',
      features: [
        direction === 'rtl' ? 'قواعد بيانات مدارة بالكامل' : 'Fully managed databases',
        direction === 'rtl' ? 'تشفير البيانات المتقدم' : 'Advanced data encryption',
        direction === 'rtl' ? 'نسخ احتياطي مستمر' : 'Continuous backup solutions'
      ]
    },
    {
      icon: Shield,
      title: direction === 'rtl' ? 'الأمان والحماية' : 'Security & Protection',
      description: direction === 'rtl'
        ? 'حماية متقدمة للبيانات والتطبيقات مع شهادات الأمان العالمية'
        : 'Advanced protection for data and applications with global security certifications',
      features: [
        direction === 'rtl' ? 'حماية من التهديدات السيبرانية' : 'Cyber threat protection',
        direction === 'rtl' ? 'امتثال لمعايير SOC 2' : 'SOC 2 compliance standards',
        direction === 'rtl' ? 'مراقبة أمنية على مدار الساعة' : '24/7 security monitoring'
      ]
    },
    {
      icon: Cpu,
      title: direction === 'rtl' ? 'الحوسبة السحابية' : 'Cloud Computing',
      description: direction === 'rtl'
        ? 'قوة حوسبة هائلة مع موارد قابلة للتخصيص حسب احتياجاتك'
        : 'Massive computing power with customizable resources based on your needs',
      features: [
        direction === 'rtl' ? 'خوادم افتراضية مرنة' : 'Flexible virtual servers',
        direction === 'rtl' ? 'معالجة بيانات متقدمة' : 'Advanced data processing',
        direction === 'rtl' ? 'تكامل مع الذكاء الاصطناعي' : 'AI integration capabilities'
      ]
    },
    {
      icon: Network,
      title: direction === 'rtl' ? 'شبكات وCDN' : 'Networks & CDN',
      description: direction === 'rtl'
        ? 'توزيع محتوى عالمي سريع مع شبكة عالمية واسعة النطاق'
        : 'Fast global content distribution with extensive worldwide network',
      features: [
        direction === 'rtl' ? 'تسريع تحميل المحتوى' : 'Content delivery acceleration',
        direction === 'rtl' ? 'نقاط توزيع عالمية' : 'Global distribution points',
        direction === 'rtl' ? 'ضغط الصور التلقائي' : 'Automatic image optimization'
      ]
    },
    {
      icon: Settings,
      title: direction === 'rtl' ? 'إدارة وصيانة' : 'Management & Maintenance',
      description: direction === 'rtl'
        ? 'إدارة كاملة للبنية التحتية مع مراقبة وصيانة مستمرة'
        : 'Complete infrastructure management with continuous monitoring and maintenance',
      features: [
        direction === 'rtl' ? 'مراقبة الأداء في الوقت الفعلي' : 'Real-time performance monitoring',
        direction === 'rtl' ? 'تحديثات أمنية تلقائية' : 'Automatic security updates',
        direction === 'rtl' ? 'دعم فني متخصص' : 'Expert technical support'
      ]
    }
  ];

  const awsPlans = [
    {
      title: direction === 'rtl' ? 'خطة البداية' : 'Startup Plan',
      subtitle: direction === 'rtl' ? 'مثالي للشركات الناشئة والمشاريع الصغيرة' : 'Perfect for startups and small projects',
      price: '49',
      cents: '99',
      originalPrice: '69',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'اقتصادي' : 'ECONOMICAL',
      description: direction === 'rtl' ? 'استضافة أساسية على AWS مع جميع الأدوات المطلوبة لبدء مشروعك' : 'Basic AWS hosting with all the tools you need to start your project',
      save: direction === 'rtl' ? 'وفر 29%' : 'Save 29%',
      features: [
        direction === 'rtl' ? 'استضافة أساسية على AWS EC2' : 'Basic AWS EC2 hosting',
        direction === 'rtl' ? 'مساحة تخزين 50GB على S3' : '50GB S3 storage space',
        direction === 'rtl' ? 'دعم فني أساسي عبر البريد' : 'Basic email technical support',
        direction === 'rtl' ? 'مراقبة أساسية للأداء' : 'Basic performance monitoring',
        direction === 'rtl' ? 'نسخ احتياطي يومي تلقائي' : 'Daily automatic backups',
        direction === 'rtl' ? 'شهادة SSL مجانية' : 'Free SSL certificate',
        direction === 'rtl' ? 'لوحة تحكم بسيطة' : 'Simple control panel',
        direction === 'rtl' ? 'حركة مرور تصل إلى 10GB' : 'Up to 10GB traffic'
      ],
      icon: Zap,
      color: 'blue'
    },
    {
      title: direction === 'rtl' ? 'خطة الأعمال' : 'Business Plan',
      subtitle: direction === 'rtl' ? 'للشركات المتوسطة التي تحتاج حلولاً متقدمة' : 'For medium businesses needing advanced solutions',
      price: '129',
      cents: '99',
      originalPrice: '179',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'الأكثر طلباً' : 'MOST POPULAR',
      description: direction === 'rtl' ? 'استضافة متقدمة مع توسع تلقائي وأمان عالي المستوى' : 'Advanced hosting with auto-scaling and high-level security',
      save: direction === 'rtl' ? 'وفر 28%' : 'Save 28%',
      features: [
        direction === 'rtl' ? 'استضافة متقدمة مع EC2 Auto Scaling' : 'Advanced EC2 hosting with Auto Scaling',
        direction === 'rtl' ? 'قواعد بيانات RDS مدارة' : 'Managed RDS databases',
        direction === 'rtl' ? 'مساحة تخزين 500GB على S3' : '500GB S3 storage space',
        direction === 'rtl' ? 'حماية DDoS متقدمة' : 'Advanced DDoS protection',
        direction === 'rtl' ? 'دعم فني عبر الهاتف والدردشة' : 'Phone and chat technical support',
        direction === 'rtl' ? 'مراقبة متقدمة 24/7' : 'Advanced 24/7 monitoring',
        direction === 'rtl' ? 'نسخ احتياطي متقدم متعدد المواقع' : 'Advanced multi-location backups',
        direction === 'rtl' ? 'شهادات SSL مخصصة' : 'Custom SSL certificates',
        direction === 'rtl' ? 'تحليلات الأداء المتقدمة' : 'Advanced performance analytics',
        direction === 'rtl' ? 'حركة مرور غير محدودة' : 'Unlimited traffic'
      ],
      recommended: true,
      icon: Building,
      color: 'purple'
    },
    {
      title: direction === 'rtl' ? 'خطة المؤسسات' : 'Enterprise Plan',
      subtitle: direction === 'rtl' ? 'حلول مخصصة للمؤسسات الكبيرة والمعقدة' : 'Custom solutions for large and complex enterprises',
      price: '449',
      cents: '99',
      originalPrice: '629',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'مؤسسي' : 'ENTERPRISE',
      description: direction === 'rtl' ? 'بنية تحتية مخصصة بالكامل مع دعم فني مخصص 24/7' : 'Fully customized infrastructure with dedicated 24/7 technical support',
      save: direction === 'rtl' ? 'وفر 29%' : 'Save 29%',
      features: [
        direction === 'rtl' ? 'بنية تحتية مخصصة بالكامل' : 'Fully customized infrastructure',
        direction === 'rtl' ? 'حلول أمان مؤسسي متقدمة' : 'Advanced enterprise security solutions',
        direction === 'rtl' ? 'دعم فني مخصص 24/7' : 'Dedicated 24/7 technical support',
        direction === 'rtl' ? 'استشاري تقني شخصي' : 'Personal technical consultant',
        direction === 'rtl' ? 'تكامل مع أنظمة موجودة' : 'Integration with existing systems',
        direction === 'rtl' ? 'استشارات تقنية متخصصة' : 'Specialized technical consulting',
        direction === 'rtl' ? 'تقارير أداء مفصلة شهرية' : 'Detailed monthly performance reports',
        direction === 'rtl' ? 'حلول Disaster Recovery' : 'Disaster Recovery solutions',
        direction === 'rtl' ? 'خدمات الامتثال والحوكمة' : 'Compliance and governance services',
        direction === 'rtl' ? 'تدريب الفريق التقني' : 'Technical team training',
        direction === 'rtl' ? 'تحسين الأداء المتخصص' : 'Specialized performance optimization',
        direction === 'rtl' ? 'إدارة التكاليف والفواتير' : 'Cost and billing management'
      ],
      icon: Server,
      color: 'indigo'
    },
    {
      title: direction === 'rtl' ? 'خطة الابتكار' : 'Innovation Plan',
      subtitle: direction === 'rtl' ? 'للشركات الرقمية والتكنولوجيا المتقدمة' : 'For digital companies and advanced technology',
      price: '279',
      cents: '99',
      originalPrice: '389',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'متقدم' : 'ADVANCED',
      description: direction === 'rtl' ? 'حلول مبتكرة مع أحدث التقنيات السحابية والذكاء الاصطناعي' : 'Innovative solutions with the latest cloud technologies and AI',
      save: direction === 'rtl' ? 'وفر 28%' : 'Save 28%',
      features: [
        direction === 'rtl' ? 'تقنيات ذكاء اصطناعي متقدمة' : 'Advanced AI technologies',
        direction === 'rtl' ? 'حلول Big Data وتحليلات' : 'Big Data and analytics solutions',
        direction === 'rtl' ? 'خدمات AWS Lambda serverless' : 'AWS Lambda serverless services',
        direction === 'rtl' ? 'تكامل مع API وخدمات خارجية' : 'API integration and third-party services',
        direction === 'rtl' ? 'أتمتة عمليات متقدمة' : 'Advanced process automation',
        direction === 'rtl' ? 'حلول Machine Learning' : 'Machine Learning solutions',
        direction === 'rtl' ? 'تحليلات البيانات المتقدمة' : 'Advanced data analytics',
        direction === 'rtl' ? 'دعم تقني متخصص' : 'Specialized technical support',
        direction === 'rtl' ? 'تدريب الفريق التقني' : 'Technical team training',
        direction === 'rtl' ? 'استشارات الابتكار الرقمي' : 'Digital innovation consulting',
        direction === 'rtl' ? 'حلول IoT وEdge Computing' : 'IoT and Edge Computing solutions',
        direction === 'rtl' ? 'تطوير تطبيقات مخصصة' : 'Custom application development'
      ],
      icon: Cpu,
      color: 'emerald'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: direction === 'rtl' ? 'انتشار عالمي' : 'Global Reach',
      description: direction === 'rtl'
        ? 'وصول إلى جمهور عالمي مع بنية تحتية منتشرة في جميع أنحاء العالم'
        : 'Reach a global audience with infrastructure spread across the world'
    },
    {
      icon: Shield,
      title: direction === 'rtl' ? 'أمان متقدم' : 'Advanced Security',
      description: direction === 'rtl'
        ? 'حماية على مستوى المؤسسات مع تشفير متقدم وامتثال للمعايير العالمية'
        : 'Enterprise-level protection with advanced encryption and global compliance standards'
    },
    {
      icon: Zap,
      title: direction === 'rtl' ? 'أداء فائق' : 'Superior Performance',
      description: direction === 'rtl'
        ? 'سرعة وأداء استثنائي مع ضمان توافر بنسبة 99.99% لخدماتك'
        : 'Exceptional speed and performance with 99.99% uptime guarantee for your services'
    },
    {
      icon: Users,
      title: direction === 'rtl' ? 'دعم متخصص' : 'Expert Support',
      description: direction === 'rtl'
        ? 'فريق دعم فني متخصص في تقنيات AWS مع خبرة واسعة في الحلول السحابية'
        : 'Specialized technical support team with extensive experience in AWS technologies and cloud solutions'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 via-red-100/40 to-pink-100/50 dark:from-orange-900/10 dark:via-red-900/8 dark:to-pink-900/10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-purple-100/25 to-transparent dark:from-blue-900/8 dark:via-purple-900/6 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-50/20 via-orange-50/15 to-transparent dark:from-yellow-900/5 dark:via-orange-900/4 pointer-events-none"></div>
          
          <div className="relative max-w-7xl mx-auto z-10">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Visual */}
              <div className={`relative ${direction === 'rtl' ? 'lg:col-start-2' : ''}`}>
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Main Circular Image Container */}
                  <div className="relative w-96 h-96 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-full blur-3xl opacity-50"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-8 flex items-center justify-center shadow-2xl">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src="/images/icons/aws-svgrepo-com.svg" 
                          alt="AWS Logo" 
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </div>

                    {/* Floating Cards Around Circle */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'التوافر' : 'Uptime'}</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">99.99%</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-8 left-1/4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'الأداء' : 'Performance'}</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">{direction === 'rtl' ? 'عالٍ' : 'High'}</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'الأمان' : 'Security'}</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">{direction === 'rtl' ? 'متقدم' : 'Advanced'}</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                          <Globe className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'انتشار' : 'Global'}</div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">200+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full mb-6">
              <Cloud className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {direction === 'rtl' ? 'خدمات أمازون AWS' : 'Amazon AWS Services'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {direction === 'rtl' ? 'نحن نساعدك في' : "We're helping you"}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    {direction === 'rtl' ? 'إدارة البنية التحتية السحابية' : 'manage cloud infrastructure'}
              </span>
            </h1>

                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {direction === 'rtl'
                    ? 'استفد من أقوى منصة سحابية في العالم. حلول AWS المتقدمة تضمن لأعمالك الأداء العالي، الأمان المتقدم، والتوسع غير المحدود في أكثر من 30 دولة حول العالم.'
                    : 'Harness the world\'s most powerful cloud platform. Advanced AWS solutions ensure high performance, advanced security, and unlimited scalability in over 30 countries worldwide.'
              }
            </p>

                {/* Features List */}
                <div className={`grid grid-cols-2 gap-4 mb-8 ${direction === 'rtl' ? 'justify-items-start' : 'justify-items-start'}`}>
                  {[
                    { icon: CheckCircle, text: direction === 'rtl' ? 'معدل تبادل ممتاز' : 'Excellent exchange rate' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'إرسال سريع' : 'Quick send' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'الأموال آمنة' : 'Money is safe' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'أمان عالي' : 'High security' }
                  ].map((feature, index) => (
                    <div key={index} className={`flex items-center gap-3 w-full justify-start ${direction === 'rtl' ? '' : ''}`}>
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

              <button
                onClick={() => setShowConsultationModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto lg:mx-0"
              >
                  <span>{direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-orange-500"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'نحن مرنون في' : "We're flexible with"}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    {direction === 'rtl' ? 'مستوى التسعير' : 'our pricing level'}
                  </span>
              </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {direction === 'rtl'
                    ? 'استخدم خدماتنا السحابية في أي مكان في العالم بدون رسوم إضافية ومعدلات تبادل ممتازة. اختر الخطة التي تناسب احتياجاتك.'
                    : 'Use our cloud services anywhere in the world with no additional fees and excellent exchange rates. Choose the plan that fits your needs.'
                    }
                  </p>

                {/* Features List */}
                <div className="mb-6 space-y-3">
                  {[
                    { icon: CheckCircle, text: direction === 'rtl' ? 'لا توجد رسوم خفية' : 'No hidden fees' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'أسعار شفافة وواضحة' : 'Transparent pricing' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'خطط قابلة للتخصيص' : 'Customizable plans' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'دفع مرن حسب الاستخدام' : 'Pay as you go' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-3 border border-orange-200 dark:border-orange-800">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">4</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'خطط' : 'Plans'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'دعم' : 'Support'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'توفير' : 'Save'}</div>
                  </div>
                </div>

                <button
                  onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {direction === 'rtl' ? 'اعرف المزيد' : 'Learn more'}
                </button>
                </div>

              {/* Right Side - Benefits Cards */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1' : ''}`}>
                <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                        </div>
                      </div>
                      </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Decorative Wave */}
          <div className="absolute top-0 left-0 right-0 h-32 opacity-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 Q300,100 600,50 T1200,60 L1200,0 L0,0 Z" fill="currentColor" className="text-orange-500"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Mobile App Visual */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2' : ''} relative`}>
                <div className="relative max-w-md mx-auto">
                  {/* Main Phone Mockup */}
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl">
                      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-6 h-[600px] overflow-hidden flex flex-col">
                        {/* App Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center p-2 shadow-md">
                              <img 
                                src="/images/icons/aws-svgrepo-com.svg" 
                                alt="AWS Logo" 
                                className="w-full h-full object-contain filter brightness-0 invert"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900 dark:text-white">AWS Console</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'إدارة سحابية' : 'Cloud Management'}</div>
                            </div>
                          </div>
                        </div>

                        {/* Service Cards */}
                        <div className="flex-1 space-y-3 overflow-y-auto">
                          {awsServices.slice(0, 3).map((service, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-300 group">
                              <div className="flex items-start gap-3">
                                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                  <service.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{service.title}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{service.description}</div>
                                </div>
                                <div className="flex-shrink-0">
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                </div>
                              </div>
                            </div>
                          ))}

                          {/* Additional Info Section */}
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-2 gap-3">
                              {/* Uptime Stat */}
                              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                                <div className="flex items-center gap-2 mb-1">
                                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{direction === 'rtl' ? 'التوافر' : 'Uptime'}</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">99.99%</div>
                              </div>

                              {/* Regions Stat */}
                              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                                <div className="flex items-center gap-2 mb-1">
                                  <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{direction === 'rtl' ? 'المناطق' : 'Regions'}</span>
                                </div>
                                <div className="text-lg font-bold text-gray-900 dark:text-white">200+</div>
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-3 space-y-2">
                              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                                <Zap className="w-3 h-3" />
                                <span>{direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}</span>
                              </button>
                              <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold py-2 px-3 rounded-lg transition-colors duration-200">
                                {direction === 'rtl' ? 'عرض جميع الخدمات' : 'View All Services'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>

                  {/* Floating Card */}
                  <div className={`absolute ${direction === 'rtl' ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 z-20`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'الأداء' : 'Performance'}</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">+45%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'نقل وخدمات مجانية' : 'Free and instant transfers'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                    {direction === 'rtl' ? 'لأكثر من 50 دولة حول العالم' : 'over 50+ Countries all over the world'}
                  </span>
                </h2>

                <div className="space-y-6 mb-8">
                  {[
                    direction === 'rtl' ? 'احصل على معدل التبادل الفوري كلما قمت بتبادل العملات الرئيسية.' : 'Get the instant exchange rate whenever you exchange major currencies.',
                    direction === 'rtl' ? 'استفد من نقل عبر الحدود مجاناً شهرياً، أو قم بالترقية إلى المميز أو المعدني للوصول إلى غير محدود.' : 'Benefits from one monthly cross-border transfer for free, or upgrade to premium or metal to go unlimited.',
                    direction === 'rtl' ? 'استفد من الترقية إلى المميز أو المعدني للحصول على نقل SWIFT شهري مجاناً.' : 'Upgrade to premium or metal to get one monthly SWIFT transfer for free.'
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-3 justify-start">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{text}</span>
                  </div>
              ))}
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      icon: Send,
                      title: direction === 'rtl' ? 'نقل فوري' : 'Instant Transfer',
                      description: direction === 'rtl' ? 'نقل فوري في ثوانٍ' : 'Transfer in seconds'
                    },
                    {
                      icon: Globe,
                      title: direction === 'rtl' ? 'انتشار عالمي' : 'Global Reach',
                      description: direction === 'rtl' ? 'أكثر من 50 دولة' : '50+ Countries'
                    },
                    {
                      icon: Shield,
                      title: direction === 'rtl' ? 'دفع آمن' : 'Secure Payment',
                      description: direction === 'rtl' ? 'حماية متقدمة' : 'Advanced Security'
                    },
                    {
                      icon: DollarSign,
                      title: direction === 'rtl' ? 'رسوم منخفضة' : 'Low Fees',
                      description: direction === 'rtl' ? 'أسعار تنافسية' : 'Competitive Rates'
                    }
                  ].map((card, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <card.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'خطط AWS المصممة لك' : 'AWS Plans Designed for You'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {direction === 'rtl'
                  ? 'اختر الخطة التي تناسب حجم أعمالك واحتياجاتك التقنية'
                  : 'Choose the plan that fits your business size and technical needs'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {awsPlans.map((plan, index) => {
                // Highlight logic - make second plan (index 1) highlighted like in Pricing
                const isHighlighted = index === 1;

                return (
                <div
                  key={index}
                    className={`relative group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border ${
                      isHighlighted
                        ? 'border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.15)]'
                        : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800'
                    }`}
                >
                  {/* Badge */}
                    {(plan.badge) && (
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                        plan.badge === 'الأكثر طلباً' || plan.badge === 'MOST POPULAR'
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                      }`}>
                        {plan.badge}
                      </div>
                    )}

                  {/* Card Header */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.title}
                    </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">
                      {plan.subtitle}
                    </p>
                  </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-sm text-gray-400 line-through font-medium">
                          ${plan.originalPrice}
                        </span>
                        </div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                          ${plan.price}
                        </span>
                        {plan.cents && (
                          <span className="text-xl font-bold text-gray-900 dark:text-white -mt-4">
                            {plan.cents}
                          </span>
                        )}
                         </div>
                      <div className="text-sm text-gray-500 mt-2 font-medium">
                        {plan.period}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${
                      isHighlighted
                        ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-500/25'
                        : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                    }`}>
                      {direction === 'rtl' ? 'اطلب الآن' : 'Get Started'}
                    </button>

                    {/* Features / Description */}
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                      </div>
                      <ul className="space-y-3 max-h-48 overflow-y-auto">
                        {plan.features.slice(0, 8).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="mt-1 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                        {plan.features.length > 8 && (
                          <li className="text-xs text-gray-500 dark:text-gray-400 italic mt-2">
                            {direction === 'rtl' ? `+ ${plan.features.length - 8} مزايا أخرى...` : `+ ${plan.features.length - 8} more features...`}
                          </li>
                        )}
                      </ul>
                    </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {direction === 'rtl' ? 'ابدأ رحلتك مع AWS اليوم' : 'Start Your AWS Journey Today'}
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              {direction === 'rtl'
                ? 'فريقنا من الخبراء جاهز لمساعدتك في اختيار أفضل الحلول السحابية لأعمالك'
                : 'Our team of experts is ready to help you choose the best cloud solutions for your business'
              }
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{direction === 'rtl' ? 'استشارة مجانية 100%' : '100% Free Consultation'}</span>
                <span className="text-xs opacity-75">•</span>
                <span className="text-xs">{direction === 'rtl' ? 'لا التزام' : 'No Obligation'}</span>
              </div>
              <button
                onClick={() => setShowConsultationModal(true)}
                className="px-10 py-5 bg-white text-orange-600 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto relative overflow-hidden group border-2 border-orange-600"
              >
                <span className="relative z-10 text-lg">{direction === 'rtl' ? 'ابدأ استشارتك المجانية الآن' : 'Start Your Free Consultation Now'}</span>
                <ArrowRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 relative z-10 ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />

        {/* Consultation Modal */}
        {showConsultationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {direction === 'rtl' ? 'طلب خدمة AWS' : 'AWS Service Request'}
                </h3>
                <button
                  onClick={() => setShowConsultationModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'نوع الخدمة المطلوبة' : 'Service Type Needed'}
                  </label>
                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">{direction === 'rtl' ? 'اختر نوع الخدمة' : 'Select Service Type'}</option>
                    <option value="cloud-hosting">{direction === 'rtl' ? 'استضافة سحابية' : 'Cloud Hosting'}</option>
                    <option value="databases">{direction === 'rtl' ? 'قواعد البيانات' : 'Databases'}</option>
                    <option value="security">{direction === 'rtl' ? 'الأمان والحماية' : 'Security & Protection'}</option>
                    <option value="computing">{direction === 'rtl' ? 'الحوسبة السحابية' : 'Cloud Computing'}</option>
                    <option value="cdn">{direction === 'rtl' ? 'شبكات وCDN' : 'Networks & CDN'}</option>
                    <option value="management">{direction === 'rtl' ? 'إدارة وصيانة' : 'Management & Maintenance'}</option>
                    <option value="consultation">{direction === 'rtl' ? 'استشارة تقنية' : 'Technical Consultation'}</option>
                    <option value="migration">{direction === 'rtl' ? 'نقل البيانات والتطبيقات' : 'Data & Application Migration'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={consultationForm.name}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={consultationForm.email}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    value={consultationForm.company}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={consultationForm.phone}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'وصف المشروع والمتطلبات' : 'Project Description & Requirements'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={consultationForm.requirements}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder={direction === 'rtl' ? 'وصف مشروعك بالتفصيل واحتياجاتك من خدمات AWS...' : 'Describe your project in detail and your AWS service needs...'}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'الميزانية المتوقعة (اختياري)' : 'Expected Budget (Optional)'}
                  </label>
                  <select
                    value={consultationForm.budget}
                    onChange={(e) => setConsultationForm(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">{direction === 'rtl' ? 'اختر الميزانية' : 'Select Budget Range'}</option>
                    <option value="under-5000">{direction === 'rtl' ? 'أقل من 5000 ريال' : 'Under $5000'}</option>
                    <option value="5000-15000">{direction === 'rtl' ? '5000 - 15000 ريال' : '$5000 - $15000'}</option>
                    <option value="15000-50000">{direction === 'rtl' ? '15000 - 50000 ريال' : '$15000 - $50000'}</option>
                    <option value="over-50000">{direction === 'rtl' ? 'أكثر من 50000 ريال' : 'Over $50000'}</option>
                    <option value="discuss">{direction === 'rtl' ? 'نناقش الميزانية' : 'Discuss Budget'}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  {direction === 'rtl' ? 'إرسال الطلب' : 'Send Request'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
