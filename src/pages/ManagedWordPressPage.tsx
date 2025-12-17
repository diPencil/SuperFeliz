import { useState, useEffect } from 'react';
import { Globe, Shield, Zap, RefreshCw, Database, Users, CheckCircle, ArrowRight, Star, Building, Smartphone, Lock, Settings, Cpu, Cloud, Monitor, Wrench, Clock, AlertTriangle, X, Check, TrendingUp, BarChart3, Sparkles, MessageCircle, User } from 'lucide-react';
import { translations, Language } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ManagedWordPressPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function ManagedWordPressPage({ direction, theme, toggleTheme, toggleDirection, t }: ManagedWordPressPageProps) {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
  const [orderForm, setOrderForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    websiteUrl: '',
    requirements: ''
  });

  // Typing effect state
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toggleCard = (cardKey: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  // Initialize typing text on mount or direction change
  useEffect(() => {
    const typingTexts = direction === 'rtl'
      ? [
        'راقب أداء موقعك وأمانه مع WordPress Bot. هذا كل ما تحتاجه...',
        'إدارة تلقائية لموقعك مع ذكاء اصطناعي متقدم...',
        'نسخ احتياطي تلقائي وأمان متقدم...',
        'أداء محسّن وسرعة فائقة...'
      ]
      : [
        'Track your site performance and security with WordPress Bot. That\'s it...',
        'Automated site management with advanced AI...',
        'Automatic backups and advanced security...',
        'Optimized performance and blazing speed...'
      ];

    setTypingText('');
    setCurrentTextIndex(0);
    setIsDeleting(false);
  }, [direction]);

  // Typing effect useEffect
  useEffect(() => {
    const typingTexts = direction === 'rtl'
      ? [
        'راقب أداء موقعك وأمانه مع WordPress Bot. هذا كل ما تحتاجه...',
        'إدارة تلقائية لموقعك مع ذكاء اصطناعي متقدم...',
        'نسخ احتياطي تلقائي وأمان متقدم...',
        'أداء محسّن وسرعة فائقة...'
      ]
      : [
        'Track your site performance and security with WordPress Bot. That\'s it...',
        'Automated site management with advanced AI...',
        'Automatic backups and advanced security...',
        'Optimized performance and blazing speed...'
      ];

    const currentText = typingTexts[currentTextIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && typingText === currentText) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && typingText === '') {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypingText(currentText.substring(0, typingText.length - 1));
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting, direction]);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(direction === 'rtl' ? 'تم استلام طلبك بنجاح!' : 'Your request has been received successfully!');
    setShowOrderModal(false);
    setOrderForm({
      name: '',
      email: '',
      company: '',
      phone: '',
      websiteUrl: '',
      requirements: ''
    });
  };

  const managedServices = [
    {
      icon: Shield,
      title: direction === 'rtl' ? 'أمان متقدم' : 'Advanced Security',
      description: direction === 'rtl'
        ? 'حماية شاملة من التهديدات السيبرانية مع مراقبة مستمرة على مدار الساعة'
        : 'Comprehensive protection against cyber threats with continuous 24/7 monitoring',
      features: [
        direction === 'rtl' ? 'جدار ناري متقدم' : 'Advanced firewall protection',
        direction === 'rtl' ? 'حماية من الهجمات DDoS' : 'DDoS attack protection',
        direction === 'rtl' ? 'فحص أمني يومي' : 'Daily security scans',
        direction === 'rtl' ? 'شهادات SSL مجانية' : 'Free SSL certificates'
      ]
    },
    {
      icon: RefreshCw,
      title: direction === 'rtl' ? 'نسخ احتياطي تلقائي' : 'Automatic Backup',
      description: direction === 'rtl'
        ? 'نسخ احتياطي يومي للموقع والقاعدة مع إمكانية الاستعادة الفورية'
        : 'Daily backup of website and database with instant restore capability',
      features: [
        direction === 'rtl' ? 'نسخ احتياطي يومي تلقائي' : 'Daily automatic backup',
        direction === 'rtl' ? 'استعادة بنقرة واحدة' : 'One-click restore',
        direction === 'rtl' ? 'حفظ لمدة 30 يوم' : '30-day retention period',
        direction === 'rtl' ? 'نسخ احتياطي خارجي' : 'Off-site backup storage'
      ]
    },
    {
      icon: Zap,
      title: direction === 'rtl' ? 'أداء محسن' : 'Performance Optimization',
      description: direction === 'rtl'
        ? 'تحسين سرعة التحميل وأداء الموقع مع تقنيات التخزين المؤقت المتقدمة'
        : 'Optimized loading speed and site performance with advanced caching technologies',
      features: [
        direction === 'rtl' ? 'تخزين مؤقت متقدم' : 'Advanced caching system',
        direction === 'rtl' ? 'ضغط الصور التلقائي' : 'Automatic image optimization',
        direction === 'rtl' ? 'شبكة CDN عالمية' : 'Global CDN network',
        direction === 'rtl' ? 'تحميل سريع للمحتوى' : 'Fast content delivery'
      ]
    },
    {
      icon: Monitor,
      title: direction === 'rtl' ? 'مراقبة مستمرة' : 'Continuous Monitoring',
      description: direction === 'rtl'
        ? 'مراقبة حالة الموقع والأداء على مدار الساعة مع تنبيهات فورية'
        : '24/7 monitoring of site status and performance with instant alerts',
      features: [
        direction === 'rtl' ? 'مراقبة وقت التشغيل' : 'Uptime monitoring',
        direction === 'rtl' ? 'تنبيهات الأداء' : 'Performance alerts',
        direction === 'rtl' ? 'تقارير شهرية مفصلة' : 'Detailed monthly reports',
        direction === 'rtl' ? 'دعم فني فوري' : 'Instant technical support'
      ]
    },
    {
      icon: Wrench,
      title: direction === 'rtl' ? 'صيانة تلقائية' : 'Automatic Maintenance',
      description: direction === 'rtl'
        ? 'تحديثات تلقائية لووردبريس والإضافات مع صيانة دورية للموقع'
        : 'Automatic updates for WordPress and plugins with regular site maintenance',
      features: [
        direction === 'rtl' ? 'تحديثات ووردبريس التلقائية' : 'Automatic WordPress updates',
        direction === 'rtl' ? 'تحديث الإضافات الآمن' : 'Safe plugin updates',
        direction === 'rtl' ? 'تنظيف قاعدة البيانات' : 'Database optimization',
        direction === 'rtl' ? 'صيانة أمنية منتظمة' : 'Regular security maintenance'
      ]
    },
    {
      icon: Users,
      title: direction === 'rtl' ? 'دعم فني متخصص' : 'Expert Technical Support',
      description: direction === 'rtl'
        ? 'فريق دعم فني متخصص في ووردبريس متاح على مدار الساعة لمساعدتك'
        : 'Specialized technical support team in WordPress available 24/7 to help you',
      features: [
        direction === 'rtl' ? 'دعم فني 24/7' : '24/7 technical support',
        direction === 'rtl' ? 'خبراء ووردبريس' : 'WordPress experts',
        direction === 'rtl' ? 'حل المشاكل الفوري' : 'Instant problem resolution',
        direction === 'rtl' ? 'استشارات تقنية مجانية' : 'Free technical consultation'
      ]
    }
  ];

  const wordpressPlans = [
    {
      title: direction === 'rtl' ? 'خطة البداية' : 'Starter Plan',
      subtitle: direction === 'rtl' ? 'مثالي للمواقع الشخصية والمدونات الصغيرة' : 'Perfect for personal websites and small blogs',
      price: '12',
      cents: '99',
      originalPrice: '19',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'اقتصادي' : 'STARTER',
      description: direction === 'rtl' ? 'استضافة WordPress أساسية مع جميع الأدوات المطلوبة لبدء موقعك' : 'Basic WordPress hosting with all tools needed to start your website',
      save: direction === 'rtl' ? 'وفر 20%' : 'Save 20%',
      features: [
        direction === 'rtl' ? 'استضافة WordPress أساسية' : 'Basic WordPress hosting',
        direction === 'rtl' ? 'مساحة تخزين 10 جيجابايت' : '10GB storage space',
        direction === 'rtl' ? 'نقل بيانات غير محدود' : 'Unlimited data transfer',
        direction === 'rtl' ? 'نسخ احتياطي يومي' : 'Daily backups',
        direction === 'rtl' ? 'دعم فني أساسي' : 'Basic technical support',
        direction === 'rtl' ? 'شهادة SSL مجانية' : 'Free SSL certificate',
        direction === 'rtl' ? 'تثبيت WordPress تلقائي' : 'Automatic WordPress installation',
        direction === 'rtl' ? 'تحديثات أمنية أساسية' : 'Basic security updates'
      ],
      icon: Globe,
      color: 'blue'
    },
    {
      title: direction === 'rtl' ? 'خطة الأعمال' : 'Business Plan',
      subtitle: direction === 'rtl' ? 'للشركات والمتاجر الإلكترونية المتوسطة' : 'For businesses and medium e-commerce stores',
      price: '19',
      cents: '99',
      originalPrice: '29',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'الأكثر طلباً' : 'MOST POPULAR',
      description: direction === 'rtl' ? 'استضافة WordPress متقدمة مع أدوات الأعمال والأمان العالي' : 'Advanced WordPress hosting with business tools and high security',
      save: direction === 'rtl' ? 'وفر 29%' : 'Save 29%',
      features: [
        direction === 'rtl' ? 'استضافة WordPress متقدمة' : 'Advanced WordPress hosting',
        direction === 'rtl' ? 'مساحة تخزين 50 جيجابايت' : '50GB storage space',
        direction === 'rtl' ? 'نقل بيانات غير محدود' : 'Unlimited data transfer',
        direction === 'rtl' ? 'نسخ احتياطي يومي' : 'Daily backups',
        direction === 'rtl' ? 'دعم فني ممتاز 24/7' : 'Premium 24/7 technical support',
        direction === 'rtl' ? 'تحسين الأداء التلقائي' : 'Automatic performance optimization',
        direction === 'rtl' ? 'مراقبة أمنية متقدمة' : 'Advanced security monitoring',
        direction === 'rtl' ? 'CDN مجاني للتسريع' : 'Free CDN for acceleration',
        direction === 'rtl' ? 'حماية من البرمجيات الضارة' : 'Malware protection',
        direction === 'rtl' ? 'استعادة الموقع بنقرة واحدة' : 'One-click site restoration'
      ],
      recommended: true,
      icon: Building,
      color: 'blue'
    },
    {
      title: direction === 'rtl' ? 'خطة المتقدمة' : 'Advanced Plan',
      subtitle: direction === 'rtl' ? 'للمواقع المتوسطة الكبيرة والمتاجر الإلكترونية' : 'For medium-large websites and e-commerce stores',
      price: '29',
      cents: '99',
      originalPrice: '39',
      period: direction === 'rtl' ? '/شهر' : '/month',
      badge: direction === 'rtl' ? 'متقدم' : 'ADVANCED',
      description: direction === 'rtl' ? 'استضافة WordPress متقدمة مع أدوات التجارة الإلكترونية والأداء العالي' : 'Advanced WordPress hosting with e-commerce tools and high performance',
      save: direction === 'rtl' ? 'وفر 29%' : 'Save 29%',
      features: [
        direction === 'rtl' ? 'استضافة WordPress متقدمة جداً' : 'Highly advanced WordPress hosting',
        direction === 'rtl' ? 'مساحة تخزين 200 جيجابايت' : '200GB storage space',
        direction === 'rtl' ? 'نقل بيانات غير محدود' : 'Unlimited data transfer',
        direction === 'rtl' ? 'نسخ احتياطي متقدم كل ساعة' : 'Advanced hourly backups',
        direction === 'rtl' ? 'دعم فني مخصص 24/7' : 'Dedicated 24/7 technical support',
        direction === 'rtl' ? 'تحسين الأداء المتقدم' : 'Advanced performance optimization',
        direction === 'rtl' ? 'مراقبة أمنية مؤسسية' : 'Enterprise security monitoring',
        direction === 'rtl' ? 'CDN متقدم مع 100GB' : 'Advanced CDN with 100GB',
        direction === 'rtl' ? 'حماية DDoS متقدمة' : 'Advanced DDoS protection',
        direction === 'rtl' ? 'تكامل مع WooCommerce' : 'WooCommerce integration',
        direction === 'rtl' ? 'تحليلات الأداء المتقدمة' : 'Advanced performance analytics',
        direction === 'rtl' ? 'استعادة فورية للموقع' : 'Instant site restoration'
      ],
      icon: Cpu,
      color: 'indigo'
    },
    {
      title: direction === 'rtl' ? 'خطة المؤسسات' : 'Enterprise Plan',
      subtitle: direction === 'rtl' ? 'حلول مخصصة للمواقع الكبيرة والمعقدة' : 'Custom solutions for large and complex websites',
      price: direction === 'rtl' ? 'طلب عرض أسعار' : 'Custom Quote',
      cents: '',
      originalPrice: '',
      period: '',
      badge: direction === 'rtl' ? 'مؤسسي' : 'ENTERPRISE',
      description: direction === 'rtl' ? 'استضافة WordPress مؤسسية مع دعم مخصص وأمان متقدم' : 'Enterprise WordPress hosting with dedicated support and advanced security',
      save: direction === 'rtl' ? 'وفر 30%' : 'Save 30%',
      features: [
        direction === 'rtl' ? 'استضافة WordPress مؤسسية' : 'Enterprise WordPress hosting',
        direction === 'rtl' ? 'مساحة تخزين غير محدودة' : 'Unlimited storage space',
        direction === 'rtl' ? 'نقل بيانات غير محدود' : 'Unlimited data transfer',
        direction === 'rtl' ? 'نسخ احتياطي متقدم متعدد المواقع' : 'Advanced multi-location backups',
        direction === 'rtl' ? 'دعم فني مخصص 24/7' : 'Dedicated 24/7 technical support',
        direction === 'rtl' ? 'استشاري WordPress شخصي' : 'Personal WordPress consultant',
        direction === 'rtl' ? 'استشارات تقنية متخصصة' : 'Specialized technical consulting',
        direction === 'rtl' ? 'حلول أمان مؤسسي متقدمة' : 'Advanced enterprise security solutions',
        direction === 'rtl' ? 'تكامل مع AWS وخدمات خارجية' : 'AWS integration and third-party services',
        direction === 'rtl' ? 'تقارير أداء مفصلة شهرية' : 'Detailed monthly performance reports',
        direction === 'rtl' ? 'تحسين محركات البحث' : 'SEO optimization',
        direction === 'rtl' ? 'تدريب الفريق الفني' : 'Technical team training'
      ],
      icon: Star,
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: direction === 'rtl' ? 'توفير الوقت' : 'Time Saving',
      description: direction === 'rtl'
        ? 'ركز على أعمالك بدلاً من إدارة التقنية. نحن نكفل تشغيل موقعك بسلاسة'
        : 'Focus on your business instead of managing technology. We ensure your site runs smoothly'
    },
    {
      icon: Shield,
      title: direction === 'rtl' ? 'أمان مضمون' : 'Guaranteed Security',
      description: direction === 'rtl'
        ? 'حماية متقدمة تضمن سلامة موقعك وبياناتك من جميع التهديدات المحتملة'
        : 'Advanced protection ensures your site and data safety from all potential threats'
    },
    {
      icon: Zap,
      title: direction === 'rtl' ? 'سرعة فائقة' : 'Superior Speed',
      description: direction === 'rtl'
        ? 'تحسينات مستمرة تضمن أسرع أداء ممكن لموقعك مع تجربة مستخدم استثنائية'
        : 'Continuous optimizations ensure the fastest possible performance with exceptional user experience'
    },
    {
      icon: AlertTriangle,
      title: direction === 'rtl' ? 'حل المشاكل الفوري' : 'Instant Problem Resolution',
      description: direction === 'rtl'
        ? 'فريقنا المتخصص جاهز لحل أي مشكلة تقنية في أسرع وقت ممكن'
        : 'Our specialized team is ready to resolve any technical issue as quickly as possible'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-blue-50/20 to-indigo-50/30 dark:from-blue-900/5 dark:via-blue-900/5 dark:to-indigo-900/5 pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-6">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {direction === 'rtl' ? 'ووردبريس مُدار' : 'Managed WordPress'}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {direction === 'rtl' ? 'مساعد ووردبريس' : 'WordPress Assistant'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {direction === 'rtl' ? 'طريقة مبسطة لبدء موقعك' : 'A Simplified Way to Start Your Site'}
                  </span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed min-h-[3rem]">
                  <span>{typingText}</span>
                  <span className="animate-pulse">|</span>
                </p>

                {/* Input Field with Button */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <MessageCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      placeholder={direction === 'rtl' ? 'مرحباً WordPress Bot...' : 'Hi WordPress Bot...'}
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400"
                    />
                    <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* User Avatars */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex -space-x-2">
                    {[
                      { gradient: 'from-blue-400 to-indigo-500' },
                      { gradient: 'from-indigo-400 to-blue-500' },
                      { gradient: 'from-purple-400 to-pink-500' },
                      { gradient: 'from-orange-400 to-red-500' }
                    ].map((avatar, i) => (
                      <div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatar.gradient} border-2 border-white dark:border-gray-900 flex items-center justify-center shadow-md`}>
                        <User className="w-5 h-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    +{direction === 'rtl' ? '39 عميل' : '39 Clients'}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    direction === 'rtl' ? 'استضافة' : 'Hosting',
                    direction === 'rtl' ? 'أمان' : 'Security',
                    direction === 'rtl' ? 'صيانة' : 'Maintenance',
                    direction === 'rtl' ? '+32 موضوع' : '+32 Topics'
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual Elements */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1' : ''} relative`}>
                <div className="relative">
                  {/* Main Image Container */}
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4 h-[500px] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
                    <img
                      src="/images/dl.beatsnoop.com-low-Vinwm.jpg"
                      alt="WordPress Management"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>

                  {/* Floating Cards */}
                  {/* Today Report Card */}
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 w-64">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{direction === 'rtl' ? 'تقرير اليوم' : 'Today Report'}</h3>
                    <div className="space-y-2">
                      {[
                        { time: direction === 'rtl' ? '08:00 ص' : '08:00 AM', meal: direction === 'rtl' ? 'إفطار' : 'Breakfast', kcal: '280', color: 'yellow' },
                        { time: direction === 'rtl' ? '01:00 م' : '01:00 PM', meal: direction === 'rtl' ? 'غداء' : 'Lunch', kcal: '390', color: 'orange' },
                        { time: direction === 'rtl' ? '08:00 م' : '08:00 PM', meal: direction === 'rtl' ? 'عشاء' : 'Dinner', kcal: '420', color: 'red' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs">
                          <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                          <span className="text-gray-600 dark:text-gray-400">{item.meal} {item.time}</span>
                          <span className="ml-auto font-semibold text-gray-900 dark:text-white">{item.kcal}kcal</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Card */}
                  <div className={`absolute ${direction === 'rtl' ? 'left-4' : 'right-4'} bottom-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'الأداء' : 'Performance'}</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">+45%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="currentColor" className="text-blue-500"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'ذكاء اصطناعي ذكي' : 'Smart AI That Gets You!'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {direction === 'rtl' ? 'تتبع الأداء بلا جهد، مصمم خصيصاً لك' : 'Effortless Performance Tracking, Tailored for You'}
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {direction === 'rtl'
                    ? 'راقب الأداء والأمان والنسخ الاحتياطي في لمحة—لا تعقيد، لا تخمين.'
                    : 'Keep an eye on performance, security, and backups in a snap—no fuss, no guessing.'
                  }
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-3">
                  {[
                    { icon: CheckCircle, text: direction === 'rtl' ? 'مراقبة فورية للأداء' : 'Real-time performance monitoring' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'تحليلات أمنية متقدمة' : 'Advanced security analytics' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'نسخ احتياطي تلقائي' : 'Automatic backups' },
                    { icon: CheckCircle, text: direction === 'rtl' ? 'توصيات مخصصة' : 'Personalized recommendations' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">99.9%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'التوافر' : 'Uptime'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-800">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">24/7</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'دعم' : 'Support'}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-800">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">AI</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'ذكاء' : 'Powered'}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('plans-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}
                </button>
              </div>

              {/* Right Side - Benefits Cards */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1' : ''}`}>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
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
              <path d="M0,0 Q300,100 600,50 T1200,60 L1200,0 L0,0 Z" fill="currentColor" className="text-blue-500"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Blue Block with Cards */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2' : ''} relative`}>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[500px]">
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src="/images/dl.beatsnoop.com-low-Tpw2H.jpg"
                      alt="WordPress AI Assistant"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Overlay Gradient - Darker blue tint to maintain blue color while showing image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/65 to-indigo-600/65 z-0"></div>

                  {/* Floating Cards Inside Blue Block */}
                  <div className="relative z-10 space-y-4 mb-6">
                    {/* Today Report Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl w-full max-w-xs">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{direction === 'rtl' ? 'تقرير اليوم' : 'Today Report'}</h3>
                      <div className="space-y-2">
                        {[
                          { time: direction === 'rtl' ? '08:00 ص' : '08:00 AM', meal: direction === 'rtl' ? 'إفطار' : 'Breakfast', kcal: '280', color: 'yellow' },
                          { time: direction === 'rtl' ? '01:00 م' : '01:00 PM', meal: direction === 'rtl' ? 'غداء' : 'Lunch', kcal: '390', color: 'orange' }
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs">
                            <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                            <span className="text-gray-600 dark:text-gray-400">{item.meal} {item.time}</span>
                            <span className="ml-auto font-semibold text-gray-900 dark:text-white">{item.kcal}kcal</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bar Chart Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl w-full max-w-xs">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">{direction === 'rtl' ? 'الأداء' : 'Performance'}</h3>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        </div>
                      </div>
                      <div className="h-24 bg-gray-100 dark:bg-gray-700 rounded flex items-end justify-around gap-1 p-2">
                        {[20, 35, 25, 40, 30, 45, 35].map((height, i) => (
                          <div key={i} className="bg-blue-500 rounded-t w-full" style={{ height: `${height}%` }}></div>
                        ))}
                      </div>
                      <div className="flex justify-around text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                          <span key={i}>{day}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed relative z-10">
                    {direction === 'rtl'
                      ? 'احصل على تحليلات فورية لموقعك، مما يساعدك على البقاء على المسار الصحيح مع أهداف الأداء اليومية.'
                      : 'Receive real-time breakdowns of your site, helping you stay on track with your daily performance goals.'
                    }
                  </p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'ووردبريس AI أذكى' : 'Smarter WordPress AI'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {direction === 'rtl' ? 'مساعد ووردبريس المدعوم بالذكاء الاصطناعي' : 'Your AI-Powered WordPress Assistant'}
                  </span>
                </h2>

                {/* Accordion Sections */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      key: 'ai-coaching',
                      icon: Sparkles,
                      title: direction === 'rtl' ? 'تدريب مدعوم بالذكاء الاصطناعي' : 'AI-Powered Coaching',
                      description: direction === 'rtl' ? 'احصل على توصيات مخصصة بناءً على أهداف موقعك' : 'Get personalized recommendations based on your site goals',
                      details: direction === 'rtl'
                        ? 'نظام ذكاء اصطناعي متقدم يحلل أداء موقعك ويقدم توصيات مخصصة لتحسين السرعة والأمان. يتعلم من سلوك زوارك ويقترح تحسينات تلقائية لتحقيق أفضل أداء ممكن.'
                        : 'Advanced AI system that analyzes your site performance and provides personalized recommendations for speed and security improvements. Learns from your visitor behavior and suggests automatic optimizations for best performance.'
                    },
                    {
                      key: 'community-support',
                      icon: Users,
                      title: direction === 'rtl' ? 'المجتمع والدعم' : 'Community & Support',
                      description: direction === 'rtl' ? 'انضم إلى مجتمع من مالكي المواقع' : 'Join a community of site owners',
                      details: direction === 'rtl'
                        ? 'انضم إلى مجتمع نشط من مالكي المواقع ومطوري ووردبريس. احصل على دعم فني 24/7، شارك تجاربك، وتعلم من خبرات الآخرين. فريقنا المتخصص جاهز لمساعدتك في أي وقت.'
                        : 'Join an active community of WordPress site owners and developers. Get 24/7 technical support, share experiences, and learn from others. Our specialized team is ready to help you anytime.'
                    }
                  ].map((item) => {
                    const isExpanded = expandedCards[item.key];
                    return (
                      <div key={item.key} className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300">
                        <div
                          onClick={() => toggleCard(item.key)}
                          className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h3>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                          </div>
                          <div className={`w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
                            <span className="text-gray-600 dark:text-gray-300 text-xs">+</span>
                          </div>
                        </div>
                        {isExpanded && (
                          <div className="px-4 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top duration-300">
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              {item.details}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {direction === 'rtl'
                    ? 'وصل إلى أهداف موقعك بسهولة مع الذكاء الاصطناعي الذي يبسط التتبع والصيانة، مما يسمح لك بالتركيز على التقدم.'
                    : 'Effortlessly reach your site goals with AI that simplifies tracking and maintenance, allowing you to focus on progress.'
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'خطط الاستضافة المدارة' : 'Managed Hosting Plans'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {direction === 'rtl'
                  ? 'اختر الخطة التي تناسب حجم موقعك واحتياجاتك التقنية'
                  : 'Choose the plan that fits your site size and technical needs'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {wordpressPlans.map((plan, index) => {
                // Highlight logic - make second plan (index 1) highlighted like in Pricing
                const isHighlighted = index === 1;

                return (
                  <div
                    key={index}
                    className={`relative group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border ${isHighlighted
                        ? 'border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                        : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800'
                      }`}
                  >
                    {/* Badge */}
                    {(plan.badge) && (
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${plan.badge === 'الأكثر طلباً' || plan.badge === 'MOST POPULAR'
                          ? 'bg-blue-600 text-white'
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
                      {plan.price === (direction === 'rtl' ? 'طلب عرض أسعار' : 'Custom Quote') ? (
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                            {plan.price}
                          </span>
                        </div>
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${isHighlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                      }`}>
                      {plan.price === (direction === 'rtl' ? 'طلب عرض أسعار' : 'Custom Quote')
                        ? (direction === 'rtl' ? 'اطلب عرض أسعار' : 'Request Quote')
                        : (direction === 'rtl' ? 'اطلب الآن' : 'Get Started')
                      }
                    </button>

                    {/* Features / Description */}
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                      </div>
                      <ul className="space-y-3 max-h-48 overflow-y-auto">
                        {plan.features.slice(0, 8).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="mt-1 w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {direction === 'rtl' ? 'انقل موقعك اليوم واستمتع بالراحة' : 'Migrate Your Site Today and Enjoy Peace of Mind'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {direction === 'rtl'
                ? 'فريقنا المتخصص سيقوم بنقل موقعك بأمان تام ودون أي انقطاع في الخدمة'
                : 'Our specialized team will migrate your site safely and without any service interruption'
              }
            </p>
            <button
              onClick={() => setShowOrderModal(true)}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <span>{direction === 'rtl' ? 'ابدأ النقل المجاني' : 'Start Free Migration'}</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />

        {/* Order Modal */}
        {showOrderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {direction === 'rtl' ? 'طلب استضافة مدارة' : 'Managed Hosting Order'}
                </h3>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>


              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    required
                    value={orderForm.email}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'اسم الشركة' : 'Company Name'}
                  </label>
                  <input
                    type="text"
                    value={orderForm.company}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={orderForm.phone}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'رابط الموقع الحالي (اختياري)' : 'Current Website URL (Optional)'}
                  </label>
                  <input
                    type="url"
                    value={orderForm.websiteUrl}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, websiteUrl: e.target.value }))}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {direction === 'rtl' ? 'متطلبات خاصة' : 'Special Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={orderForm.requirements}
                    onChange={(e) => setOrderForm(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder={direction === 'rtl' ? 'أي متطلبات خاصة...' : 'Any special requirements...'}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
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
