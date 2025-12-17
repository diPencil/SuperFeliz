import { useState } from 'react';
import { Mail, Shield, Smartphone, Globe, CheckCircle, Users, Server, Zap, ArrowRight, User, Building, Lock, Search, X, Check } from 'lucide-react';
import { translations, Language } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface EmailPlansPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: any;
}

export default function EmailPlansPage({ direction, theme, toggleTheme, toggleDirection, t }: EmailPlansPageProps) {
  const [emailSearch, setEmailSearch] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [orderFormData, setOrderFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requestedEmail: ''
  });

  const handleSearch = () => {
    if (!emailSearch.trim()) return;
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
      // For demo, we'll just show the modal to order
      setSelectedPlan({ name: 'Custom Search', price: 'Variable' });
      setOrderFormData(prev => ({ ...prev, requestedEmail: emailSearch }));
      setShowOrderModal(true);
    }, 1000);
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(direction === 'rtl' ? 'تم استلام طلبك بنجاح!' : 'Your request has been received successfully!');
    setShowOrderModal(false);
  };

  const emailPlans = [
    {
      name: direction === 'rtl' ? 'بريد شخصي' : 'Personal Email',
      price: '1.99',
      period: direction === 'rtl' ? 'شهرياً / مستخدم' : '/month per user',
      features: [
        direction === 'rtl' ? 'مساحة تخزين 10 جيجابايت' : '10GB Storage',
        direction === 'rtl' ? 'عنوان بريد مخصص' : 'Custom Email Address',
        direction === 'rtl' ? 'حماية من الفيروسات' : 'Virus Protection',
        direction === 'rtl' ? 'الوصول عبر الجوال' : 'Mobile Access'
      ],
      icon: User,
      color: 'blue'
    },
    {
      name: direction === 'rtl' ? 'بريد أعمال' : 'Business Email',
      price: '4.99',
      period: direction === 'rtl' ? 'شهرياً / مستخدم' : '/month per user',
      features: [
        direction === 'rtl' ? 'مساحة تخزين 50 جيجابايت' : '50GB Storage',
        direction === 'rtl' ? 'بريد نطاق مخصص' : 'Domain Based Email',
        direction === 'rtl' ? 'مزامنة التقويم والجهات' : 'Calendar & Contacts Sync',
        direction === 'rtl' ? 'دعم فني للأعمال' : 'Business Support',
        direction === 'rtl' ? 'نسخ احتياطي يومي' : 'Daily Backup'
      ],
      recommended: true,
      icon: Building,
      color: 'purple'
    },
    {
      name: direction === 'rtl' ? 'بريد مؤسسي' : 'Enterprise Email',
      price: direction === 'rtl' ? 'طلب مخصص' : 'Custom Request',
      period: '',
      features: [
        direction === 'rtl' ? 'مساحة تخزين غير محدودة' : 'Unlimited Storage',
        direction === 'rtl' ? 'أرشفة البريد الإلكتروني' : 'Email Archiving',
        direction === 'rtl' ? 'حماية متقدمة من التهديدات' : 'Advanced Threat Protection',
        direction === 'rtl' ? 'إدارة الأجهزة المتنقلة' : 'Mobile Device Management',
        direction === 'rtl' ? 'دعم فني مخصص 24/7' : 'Dedicated 24/7 Support'
      ],
      icon: Server,
      color: 'indigo'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: direction === 'rtl' ? 'آمن ومحمي' : 'Secure & Protected',
      desc: direction === 'rtl' ? 'حماية متقدمة من البريد العشوائي والفيروسات' : 'Advanced spam and virus protection filters'
    },
    {
      icon: Smartphone,
      title: direction === 'rtl' ? 'مزامنة فورية' : 'Instant Sync',
      desc: direction === 'rtl' ? 'الوصول لبريدك من أي جهاز وفي أي وقت' : 'Access your email from any device, anytime'
    },
    {
      icon: Globe,
      title: direction === 'rtl' ? 'عنوان احترافي' : 'Professional Address',
      desc: direction === 'rtl' ? 'عزز ثقة عملائك ببريد يحمل اسم نطاقك' : 'Build trust with an email matching your domain'
    },
    {
      icon: Zap,
      title: direction === 'rtl' ? 'سريع وموثوق' : 'Fast & Reliable',
      desc: direction === 'rtl' ? 'وقت تشغيل بنسبة 99.9% لضمان تواجدك الدائم' : '99.9% uptime guarantee for your business'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-8">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                {direction === 'rtl' ? 'حلول البريد الإلكتروني الاحترافية' : 'Professional Email Solutions'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {direction === 'rtl' ? 'بريد إلكتروني يعكس' : 'Email That Reflects'}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
                {direction === 'rtl' ? 'هويتك الاحترافية' : 'Your Professionalism'}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
              {direction === 'rtl'
                ? 'احصل على عناوين بريد إلكتروني مخصصة باسم نطاقك. آمنة، خالية من الإعلانات، وتعمل على جميع أجهزتك.'
                : 'Get custom email addresses matching your domain. Secure, ad-free, and works on all your devices.'
              }
            </p>

            {/* Enhanced Search Box */}
            <div className="max-w-3xl mx-auto">
              {/* Search Label */}
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {direction === 'rtl' ? 'ابحث عن عنوان البريد الإلكتروني المثالي' : 'Find Your Perfect Email Address'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {direction === 'rtl' ? 'اختر اسم البريد الذي يعكس هوية عملك' : 'Choose an email address that reflects your business identity'}
                </p>
              </div>

              {/* Search Input Container */}
              <div className="relative group">
                {/* Main Search Box */}
                <div className="relative bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`flex items-center ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    {/* Search Icon */}
                    <div className="flex-shrink-0 p-4 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-l-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                      <Search className="w-5 h-5" />
                    </div>

                    {/* Input Field */}
                    <input
                      type="text"
                      value={emailSearch}
                      onChange={(e) => setEmailSearch(e.target.value)}
                      placeholder={direction === 'rtl' ? 'مثال: name@yourcompany.com' : 'e.g., name@yourcompany.com'}
                      className={`flex-1 bg-transparent border-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500 text-base py-3 px-2 ${direction === 'rtl' ? 'text-right' : 'text-left'} focus:outline-none transition-all duration-300`}
                      onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />

                    {/* Search Button */}
                    <button
                      onClick={handleSearch}
                      disabled={!emailSearch.trim()}
                      className={`flex-shrink-0 px-6 py-3 font-semibold text-white rounded-full transition-all duration-300 flex items-center gap-2 ${
                        isSearching
                          ? 'bg-gray-500 cursor-not-allowed rounded-r-full'
                          : emailSearch.trim()
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-full'
                            : 'bg-gray-400 cursor-not-allowed rounded-r-full'
                      }`}
                    >
                      {isSearching ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span className="hidden sm:inline">{direction === 'rtl' ? 'يبحث...' : 'Searching...'}</span>
                        </>
                      ) : (
                        <>
                          <span className="hidden sm:inline">{direction === 'rtl' ? 'ابحث' : 'Search'}</span>
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Example Suggestions */}
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {[
                    'sales@company.com',
                    'info@business.com',
                    'support@brand.com',
                    'contact@startup.com'
                  ].map((example, index) => (
                    <button
                      key={index}
                      onClick={() => setEmailSearch(example)}
                      className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-200 border border-gray-200 dark:border-gray-600"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 text-center group">
                  <div className="w-14 h-14 bg-white dark:bg-gray-700 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? 'اختر الخطة المناسبة لك' : 'Choose the Right Plan'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {direction === 'rtl' 
                  ? 'خطط مرنة تناسب الأفراد والشركات الصغيرة والمؤسسات الكبيرة'
                  : 'Flexible plans suitable for individuals, small businesses, and large enterprises'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {emailPlans.map((plan, index) => {
                const isHighlighted = plan.recommended;

                return (
                  <div
                    key={index}
                    className={`relative group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border ${
                      isHighlighted
                        ? 'border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                        : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800'
                    }`}
                  >
                    {/* Badge */}
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-blue-600 text-white">
                        {direction === 'rtl' ? 'موصى به' : 'Recommended'}
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">
                        {direction === 'rtl'
                          ? plan.name === 'بريد شخصي'
                            ? 'حل مثالي للأفراد والمستقلين'
                            : plan.name === 'بريد أعمال'
                              ? 'الأكثر شعبية للشركات الصغيرة والمتوسطة'
                              : 'حل شامل للمؤسسات الكبيرة'
                          : plan.name === 'Personal Email'
                            ? 'Perfect solution for individuals and freelancers'
                            : plan.name === 'Business Email'
                              ? 'Most popular for small and medium businesses'
                              : 'Comprehensive solution for large enterprises'
                        }
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      {plan.price === (direction === 'rtl' ? 'طلب مخصص' : 'Custom Request') ? (
                        <div className="flex items-baseline gap-0.5">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                            {direction === 'rtl' ? 'طلب مخصص' : 'Custom Request'}
                          </span>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-sm text-gray-400 line-through font-medium">
                              {plan.name === (direction === 'rtl' ? 'بريد شخصي' : 'Personal Email') ? '$2.99' :
                               plan.name === (direction === 'rtl' ? 'بريد أعمال' : 'Business Email') ? '$7.99' : ''}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                              ${plan.price.split('.')[0]}
                            </span>
                            {plan.price.includes('.') && (
                              <span className="text-xl font-bold text-gray-900 dark:text-white -mt-4">
                                .{plan.price.split('.')[1]}
                              </span>
                            )}
                          </div>
                        </>
                      )}
                      <div className="text-sm text-gray-500 mt-2 font-medium">
                        {plan.period}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        setSelectedPlan(plan);
                        setOrderFormData(prev => ({ ...prev, requestedEmail: '' }));
                        setShowOrderModal(true);
                      }}
                      className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${
                        isHighlighted
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                      }`}
                    >
                      {direction === 'rtl' ? 'اختر الخطة' : 'Choose Plan'}
                    </button>

                    {/* Features */}
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                      </div>
                      <ul className="space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: direction === 'rtl' ? 'ما الفرق بين البريد الشخصي والاحترافي؟' : 'What is the difference between personal and professional email?',
                  a: direction === 'rtl' 
                    ? 'البريد الاحترافي يحمل اسم نطاقك الخاص (name@company.com) مما يعطي انطباعاً بالثقة والمهنية، بينما البريد المجاني (مثل Gmail) لا يوفر ذلك.'
                    : 'Professional email uses your own domain name (name@company.com) which builds trust and professionalism, unlike free email services.'
                },
                {
                  q: direction === 'rtl' ? 'هل يمكنني استخدام برامج البريد مثل Outlook؟' : 'Can I use email clients like Outlook?',
                  a: direction === 'rtl'
                    ? 'نعم، تدعم خدماتنا جميع برامج البريد الإلكتروني الشهيرة مثل Outlook و Apple Mail وغيرها عبر بروتوكولات POP/IMAP/SMTP.'
                    : 'Yes, our services support all popular email clients like Outlook, Apple Mail, and others via POP/IMAP/SMTP protocols.'
                },
                {
                  q: direction === 'rtl' ? 'هل البريد محمي من الرسائل المزعجة؟' : 'Is the email protected from spam?',
                  a: direction === 'rtl'
                    ? 'بالتأكيد، نستخدم تقنيات متطورة لفلترة الرسائل المزعجة والفيروسات لضمان وصول الرسائل الهامة فقط إلى صندوق الوارد.'
                    : 'Absolutely, we use advanced filtering technologies to block spam and viruses, ensuring only important messages reach your inbox.'
                },
                {
                  q: direction === 'rtl' ? 'هل يمكنني نقل بريدي الحالي إليكم؟' : 'Can I migrate my current email to you?',
                  a: direction === 'rtl'
                    ? 'نعم، يوفر فريق الدعم الفني لدينا خدمة نقل البيانات ومساعدتك في إعداد حساباتك الجديدة دون فقدان أي رسائل.'
                    : 'Yes, our support team offers migration services to help you set up your new accounts without losing any emails.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">?</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed pr-9">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Order Modal */}
        {showOrderModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {direction === 'rtl' ? 'طلب خدمة البريد' : 'Order Email Service'}
                </h3>
                <button onClick={() => setShowOrderModal(false)} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleOrderSubmit} className="p-6 space-y-4">
                {selectedPlan && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-100">{selectedPlan.name}</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{selectedPlan.price} {selectedPlan.period}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                )}

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                    value={orderFormData.name}
                    onChange={(e) => setOrderFormData({...orderFormData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'اسم الشركة (اختياري)' : 'Company (Optional)'}
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                    value={orderFormData.company}
                    onChange={(e) => setOrderFormData({...orderFormData, company: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'البريد الإلكتروني للتواصل' : 'Contact Email'}
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                    value={orderFormData.email}
                    onChange={(e) => setOrderFormData({...orderFormData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                    value={orderFormData.phone}
                    onChange={(e) => setOrderFormData({...orderFormData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'عنوان البريد المطلوب' : 'Requested Email Address'}
                  </label>
                  <input
                    type="text"
                    placeholder="name@yourcompany.com"
                    className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
                    value={orderFormData.requestedEmail}
                    onChange={(e) => setOrderFormData({...orderFormData, requestedEmail: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {direction === 'rtl' ? 'تأكيد الطلب' : 'Confirm Order'}
                </button>
              </form>
            </div>
          </div>
        )}

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
