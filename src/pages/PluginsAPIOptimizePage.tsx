import React, { useState, useEffect } from 'react';
import { Settings, Zap, Database, Globe, CheckCircle, ArrowRight, Star, Building, Smartphone, Lock, Cpu, Network, BarChart, Code, Layers, Wrench, Clock, TrendingUp, MessageCircle, FileText, Mic, Volume2, Users, ChevronDown, X, Shield } from 'lucide-react';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PluginsAPIOptimizePageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function PluginsAPIOptimizePage({ direction, theme, toggleTheme, toggleDirection, t }: PluginsAPIOptimizePageProps) {
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect texts
  useEffect(() => {
    const typingTexts = direction === 'rtl'
      ? [
        'حلول متقدمة لتحسين الإضافات والواجهات البرمجية. هذا كل ما تحتاجه...',
        'تحسين شامل للأداء والسرعة مع تقنيات حديثة...',
        'تكامل سلس مع جميع الأنظمة والمنصات...',
        'مراقبة وتحليل مستمر للأداء...'
      ]
      : [
        'Advanced solutions for plugins and API optimization. That\'s it...',
        'Comprehensive performance and speed optimization with modern techniques...',
        'Seamless integration with all systems and platforms...',
        'Continuous performance monitoring and analysis...'
      ];

    setTypingText('');
    setCurrentTextIndex(0);
    setIsDeleting(false);
  }, [direction]);

  useEffect(() => {
    const typingTexts = direction === 'rtl'
      ? [
        'حلول متقدمة لتحسين الإضافات والواجهات البرمجية. هذا كل ما تحتاجه...',
        'تحسين شامل للأداء والسرعة مع تقنيات حديثة...',
        'تكامل سلس مع جميع الأنظمة والمنصات...',
        'مراقبة وتحليل مستمر للأداء...'
      ]
      : [
        'Advanced solutions for plugins and API optimization. That\'s it...',
        'Comprehensive performance and speed optimization with modern techniques...',
        'Seamless integration with all systems and platforms...',
        'Continuous performance monitoring and analysis...'
      ];

    const currentText = typingTexts[currentTextIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && typingText === currentText) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && typingText === '') {
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

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(direction === 'rtl' ? 'تم استلام طلب الاستشارة بنجاح!' : 'Your consultation request has been received successfully!');
    setShowConsultationModal(false);
  };

  const faqs = [
    {
      icon: Settings,
      question: direction === 'rtl' ? 'ما هو تحسين الإضافات والواجهات البرمجية؟' : 'What is Plugins & API Optimization?',
      answer: direction === 'rtl'
        ? 'تحسين الإضافات والواجهات البرمجية هو عملية تحليل وتحسين أداء الإضافات وواجهات برمجة التطبيقات لضمان أقصى كفاءة وسرعة في التحميل والاستجابة. نحن نستخدم تقنيات متقدمة لتحليل الكود وتحسينه.'
        : 'Plugins & API Optimization is the process of analyzing and improving the performance of plugins and APIs to ensure maximum efficiency and speed in loading and response times. We use advanced techniques to analyze and optimize code.'
    },
    {
      icon: Clock,
      question: direction === 'rtl' ? 'كم من الوقت يستغرق التحسين؟' : 'How long does optimization take?',
      answer: direction === 'rtl'
        ? 'يعتمد الوقت على حجم الموقع وتعقيده. عادة ما يستغرق التحسين الأساسي من 2-5 أيام عمل، بينما قد يستغرق التحسين الشامل من أسبوع إلى أسبوعين. نضمن لك الحصول على نتائج ملحوظة في أقصر وقت ممكن.'
        : 'The time depends on the size and complexity of your site. Basic optimization usually takes 2-5 business days, while comprehensive optimization may take 1-2 weeks. We ensure you get noticeable results in the shortest time possible.'
    },
    {
      icon: Shield,
      question: direction === 'rtl' ? 'هل سيتأثر موقعي أثناء عملية التحسين؟' : 'Will my site be affected during optimization?',
      answer: direction === 'rtl'
        ? 'لا، نعمل على نسخة تجريبية من موقعك أولاً، وبعد التأكد من نجاح التحسينات، نطبقها على الموقع الحي دون أي انقطاع في الخدمة. نحن نضمن عدم تأثر موقعك بأي شكل من الأشكال.'
        : 'No, we work on a staging version of your site first, and after confirming the success of optimizations, we apply them to the live site without any service interruption. We guarantee your site won\'t be affected in any way.'
    },
    {
      icon: Zap,
      question: direction === 'rtl' ? 'ما هي النتائج المتوقعة بعد التحسين؟' : 'What results can I expect after optimization?',
      answer: direction === 'rtl'
        ? 'بعد التحسين، يمكنك توقع تحسينات ملحوظة في سرعة التحميل (عادة 40-60%)، تحسين تجربة المستخدم، تقليل استهلاك الموارد، وتحسين ترتيب الموقع في محركات البحث. نحن نقدم تقارير مفصلة عن جميع التحسينات.'
        : 'After optimization, you can expect noticeable improvements in loading speed (typically 40-60%), better user experience, reduced resource consumption, and improved search engine rankings. We provide detailed reports on all improvements.'
    },
    {
      icon: Database,
      question: direction === 'rtl' ? 'هل تقدمون دعم بعد التحسين؟' : 'Do you provide support after optimization?',
      answer: direction === 'rtl'
        ? 'نعم، نقدم دعم فني مستمر بعد التحسين. يتضمن ذلك مراقبة الأداء، تحديثات دورية، ودعم فني متاح 24/7. نحن ملتزمون بضمان استمرار الأداء الأمثل لموقعك.'
        : 'Yes, we provide ongoing technical support after optimization. This includes performance monitoring, regular updates, and 24/7 technical support. We are committed to ensuring your site maintains optimal performance.'
    },
    {
      icon: BarChart,
      question: direction === 'rtl' ? 'كيف يمكنني تتبع نتائج التحسين؟' : 'How can I track optimization results?',
      answer: direction === 'rtl'
        ? 'نوفر لك لوحة تحكم شاملة تتيح لك تتبع جميع مؤشرات الأداء في الوقت الفعلي. يمكنك مراقبة سرعة التحميل، استهلاك الموارد، وحركة المرور. نحن نقدم تقارير شهرية مفصلة.'
        : 'We provide you with a comprehensive dashboard that allows you to track all performance metrics in real-time. You can monitor loading speed, resource consumption, and traffic. We provide detailed monthly reports.'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Subtle Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-green-50/30 dark:from-green-900/5 dark:via-emerald-900/5 dark:to-green-900/5 pointer-events-none"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Gradient Blobs */}
            <div className="absolute top-10 -left-20 w-80 h-80 bg-gradient-to-br from-green-300/15 to-emerald-300/10 dark:from-green-700/8 dark:to-emerald-700/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 -right-20 w-96 h-96 bg-gradient-to-tl from-emerald-300/15 to-green-300/10 dark:from-emerald-700/8 dark:to-green-700/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-green-200/12 to-transparent dark:from-green-800/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>

            {/* Geometric Shapes */}
            <div className="absolute top-20 right-1/3 w-32 h-32 border-2 border-green-200/20 dark:border-green-800/15 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-emerald-200/20 dark:border-emerald-800/15 rounded-full animate-pulse" style={{ animationDelay: '1.2s' }}></div>

            {/* Diagonal Lines Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(16, 185, 129, 0.1) 10px, rgba(16, 185, 129, 0.1) 20px)'
            }}></div>

            {/* Curved Lines */}
            <svg className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5" style={{ pointerEvents: 'none' }}>
              <path d="M 0,100 Q 200,50 400,100 T 800,100" stroke="currentColor" strokeWidth="1" fill="none" className="text-green-500" />
              <path d="M 0,300 Q 300,250 600,300 T 1200,300" stroke="currentColor" strokeWidth="1" fill="none" className="text-emerald-500" />
            </svg>

            {/* Floating Particles */}
            <div className="absolute top-40 left-1/5 w-3 h-3 bg-green-400/30 dark:bg-green-500/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-60 right-1/4 w-2 h-2 bg-emerald-400/30 dark:bg-emerald-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-green-500/25 dark:bg-green-400/15 rounded-full animate-bounce" style={{ animationDelay: '1.4s' }}></div>
            <div className="absolute bottom-60 right-1/5 w-3 h-3 bg-emerald-500/25 dark:bg-emerald-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-green-300/35 dark:bg-green-600/20 rounded-full animate-bounce" style={{ animationDelay: '2.1s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${direction === 'rtl' ? 'lg:grid-flow-dense' : ''}`}>
              {/* Left Side - Content */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-2 lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-6 text-sm font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>{direction === 'rtl' ? 'حلول تحسين متقدمة' : 'Advanced Optimization Solutions'}</span>
                </div>
                <h1 className="mb-4 leading-[1.15]">
                  {direction === 'rtl' ? (
                    <>
                      <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">نساعدك فوراً</span>
                      <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-1">
                        <span className="block">مع حلول تحسين</span>
                        <span className="block">متقدمة</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">Help you instantly</span>
                      <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mt-1">
                        <span className="block">with advanced</span>
                        <span className="block">optimization</span>
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {direction === 'rtl'
                    ? 'حلول ذكية مدعومة بالذكاء الاصطناعي لتحسين الأداء والسرعة والأمان.'
                    : 'Smart AI-powered solutions to enhance performance, speed, and security.'}
                </p>

                <p className="text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed min-h-[3rem]">
                  <span>{typingText}</span>
                  <span className="animate-pulse">|</span>
                </p>

                {/* Quick Features */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  {[
                    { icon: Zap, text: direction === 'rtl' ? 'استجابة فورية' : 'Instant Response' },
                    { icon: Shield, text: direction === 'rtl' ? 'أمان متقدم' : 'Advanced Security' },
                    { icon: BarChart, text: direction === 'rtl' ? 'تحليلات شاملة' : 'Comprehensive Analytics' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                      <feature.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto lg:mx-0"
                >
                  <span>{direction === 'rtl' ? 'احصل على 14 يوم تجربة مجانية' : 'Get 14 Days Free Trial'}</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Right Side - Phone Mockup with Floating Cards */}
              <div className={`${direction === 'rtl' ? 'lg:col-start-1' : ''} relative`}>
                <div className="relative mx-auto max-w-[280px] lg:max-w-[320px]">
                  {/* Phone Mockup - Larger and Taller */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl relative z-10">
                    <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden h-[520px] lg:h-[580px] flex flex-col">
                      {/* Status Bar */}
                      <div className="bg-gray-100 dark:bg-gray-700 h-12 flex items-center justify-center border-b border-gray-200 dark:border-gray-600">
                        <div className="w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>

                      {/* Chat Content */}
                      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                        {/* Bot Message */}
                        <div className="flex items-start gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Settings className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl rounded-tl-sm p-3 mb-1">
                              <div className="text-xs font-medium text-gray-900 dark:text-white">
                                {direction === 'rtl' ? 'مرحباً، كيف يمكنني مساعدتك؟' : 'Hello, how can I assist you?'}
                              </div>
                            </div>
                            <div className="text-[10px] text-gray-500 dark:text-gray-400 px-2">
                              {direction === 'rtl' ? 'الآن' : 'Just now'}
                            </div>
                          </div>
                        </div>

                        {/* User Message */}
                        <div className="flex items-start gap-2 justify-end">
                          <div className="flex-1 flex justify-end">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl rounded-tr-sm p-3 max-w-[85%]">
                              <div className="text-xs font-medium text-white">
                                {direction === 'rtl' ? 'أحتاج إلى تحسين أداء موقعي' : 'I need to optimize my site performance'}
                              </div>
                            </div>
                          </div>
                          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                          </div>
                        </div>

                        {/* Bot Response */}
                        <div className="flex items-start gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Settings className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl rounded-tl-sm p-3 mb-1">
                              <div className="text-xs font-medium text-gray-900 dark:text-white">
                                {direction === 'rtl'
                                  ? 'ممتاز! يمكنني مساعدتك في تحسين أداء موقعك. دعني أبدأ بتحليل الموقع الحالي...'
                                  : 'Great! I can help you optimize your site performance. Let me start by analyzing your current site...'}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Typing Indicator */}
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Settings className="w-5 h-5 text-white" />
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl rounded-tl-sm p-2">
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Input Area */}
                      <div className="border-t border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 border border-gray-200 dark:border-gray-700">
                            <input
                              type="text"
                              placeholder={direction === 'rtl' ? 'اكتب رسالتك...' : 'Type your message...'}
                              className="w-full text-xs text-gray-900 dark:text-white bg-transparent outline-none"
                              readOnly
                            />
                          </div>
                          <button className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Top Right */}
                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center relative">
                        <div className="absolute inset-0 border-3 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                        <div className="text-[10px] font-bold text-green-600 dark:text-green-400 z-10">95%</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">95%</div>
                        <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">{direction === 'rtl' ? 'استجابة فائقة السرعة' : 'Super fast response'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Top Left */}
                  <div className="absolute top-1/4 -left-6 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-xl border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-[10px] font-semibold text-gray-900 dark:text-white">
                        {direction === 'rtl' ? 'تكامل محلي' : 'Local Integration'}
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Middle Right */}
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-xl border-2 border-emerald-200 dark:border-emerald-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <div className="text-[10px] font-semibold text-gray-900 dark:text-white">
                        {direction === 'rtl' ? 'أداء محسّن' : 'Performance+'}
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Middle Left */}
                  <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-xl border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <div className="text-[10px] font-semibold text-gray-900 dark:text-white">
                        {direction === 'rtl' ? 'أمان عالي' : 'High Security'}
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Bottom Right */}
                  <div className="absolute bottom-1/4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border-2 border-emerald-200 dark:border-emerald-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center relative">
                        <div className="absolute inset-0 border-3 border-emerald-600 border-t-transparent rounded-full" style={{ clipPath: 'inset(0 0 30% 0)' }}></div>
                        <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 z-10">70%</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white">70%</div>
                        <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium">{direction === 'rtl' ? 'بحث محسّن' : 'Optimized Search'}</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Bottom Left */}
                  <div className="absolute -bottom-4 left-1/4 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-xl border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Mic className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-[10px] font-semibold text-gray-900 dark:text-white">
                        {direction === 'rtl' ? 'تحسين متقدم' : 'Advanced Optimize'}
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards - Top Center */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 shadow-xl border-2 border-yellow-200 dark:border-yellow-800 hover:scale-105 transition-transform duration-300 z-20">
                    <div className="flex items-center gap-2">
                      <BarChart className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <div className="text-[10px] font-semibold text-gray-900 dark:text-white">
                        {direction === 'rtl' ? 'تحليلات' : 'Analytics'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              {direction === 'rtl' ? 'موثوق به من قبل 10,000+ مؤسس ومالك أعمال' : 'Trusted by 10,000+ founders & business owners'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['Nietzsche', 'Epicurious', 'CloudWatch', 'Acme Corp', 'Polymath', 'Craftgram'].map((company, index) => (
                <div key={index} className="text-2xl font-bold text-gray-400 dark:text-gray-500">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Solution Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {direction === 'rtl' ? 'حلول ذكية للتحسين والتفاعل' : 'Smart optimization solution for interactions'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: direction === 'rtl' ? 'تدفقات تحسين قابلة للتخصيص' : 'Customizable optimization flows',
                  description: direction === 'rtl' ? 'صمم تدفقات تحسين مخصصة تناسب احتياجات عملك' : 'Design custom optimization flows that suit your business needs'
                },
                {
                  icon: BarChart,
                  title: direction === 'rtl' ? 'تحليلات وتقارير' : 'Analytics and reporting',
                  description: direction === 'rtl' ? 'احصل على رؤى شاملة عن أداء موقعك' : 'Get comprehensive insights into your site performance'
                },
                {
                  icon: Globe,
                  title: direction === 'rtl' ? 'نماذج ذكاء اصطناعي متعددة اللغات' : 'Multilingual AI models',
                  description: direction === 'rtl' ? 'دعم متعدد اللغات للوصول إلى جمهور عالمي' : 'Multilingual support to reach a global audience'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boost Efficiency Section - Reference Style */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Side - Image from folder */}
              <div className={`relative ${direction === 'rtl' ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Abstract Shield/Shape Base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-[3rem] transform -rotate-6 shadow-2xl border border-white/50 dark:border-gray-600/50 backdrop-blur-sm z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-[3rem] transform rotate-3 shadow-xl opacity-90 scale-95 z-0"></div>

                  {/* CENTRAL IMAGE */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
                    <img
                      src="/images/Domain & Security Services.png"
                      alt={direction === 'rtl' ? 'أمان وخدمات' : 'Security & Services'}
                      className="w-full h-full object-contain drop-shadow-sm opacity-90 mix-blend-multiply"
                    />
                  </div>

                  {/* RESTORED FLOATING ELEMENTS (Z-Index 20 to float OVER the image) */}

                  {/* Security Badge */}
                  <div className="absolute top-10 -left-6 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-sm text-gray-900 dark:text-white px-2">Security</div>
                    </div>
                  </div>

                  {/* Green Shield Icon */}
                  <div className="absolute -top-6 right-20 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 z-20 animate-float-delayed">
                    <Shield className="w-10 h-10 text-white" />
                  </div>

                  {/* Connect Link */}
                  <div className="absolute bottom-20 -left-4 w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <Network className="w-7 h-7 text-white" />
                  </div>

                  {/* Login/User Card */}
                  <div className="absolute top-1/2 right-0 transform translate-x-10 -translate-y-1/2 bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 z-30 animate-float">
                    <div className="flex flex-col items-center gap-3 w-48">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="h-2 w-20 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="w-full h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-bold text-sm mt-2 shadow-lg shadow-emerald-500/20">
                        Login
                      </div>
                    </div>
                    {/* Dashed Line Connection */}
                    <div className="absolute top-1/2 right-full w-20 h-0.5 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-full transform -translate-x-20 -translate-y-1/2 w-3 h-3 bg-gray-800 rounded-full border-2 border-white"></div>
                  </div>

                  {/* Support Label */}
                  <div className="absolute bottom-20 right-20 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold shadow-xl z-20">
                    Support
                  </div>
                </div>
              </div>
              {/* Right Side - Content List */}
              <div className={`${direction === 'rtl' ? 'lg:order-1 text-right' : 'text-left'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 leading-tight">
                  {direction === 'rtl' ? 'أمان أصولك وأداء عالي' : 'Security of Your Assets & High Performance'}
                </h2>

                <div className="space-y-8">
                  {/* Item 1 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-emerald-500 rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-emerald-500/30 transform group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                        {direction === 'rtl' ? 'ضمان الأمان' : 'Security Guarantee'}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {direction === 'rtl'
                          ? 'يتم تأمين الأصول الرقمية لكل مستخدم على منصتنا بأحدث تقنيات التشفير والحماية.'
                          : 'The digital assets of every user on our platform are insured with state-of-the-art encryption and protection technologies.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-emerald-500 rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-emerald-500/30 transform group-hover:scale-110 transition-transform duration-300">
                        <Network className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                        {direction === 'rtl' ? 'أصول مؤمنة' : 'Assets Insured'}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {direction === 'rtl'
                          ? 'يتم تخزين معظم أصول المستخدم في محافظ باردة مؤمنة بالكامل لضمان أقصى درجات الحماية.'
                          : 'Most user assets are stored in fully secured cold wallets to ensure maximum protection.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-emerald-500 rounded-[1.2rem] flex items-center justify-center shadow-lg shadow-emerald-500/30 transform group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 transition-colors">
                        {direction === 'rtl' ? 'دعم 24/7' : 'Support 24/7'}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {direction === 'rtl'
                          ? 'فريق الدعم الفني متاح على مدار الساعة لمساعدتك في أي وقت.'
                          : 'Our technical support team is available around the clock to assist you at any time.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="hidden lg:block">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 border-8 border-green-200 dark:border-green-800 rounded-full"></div>
                  <div className="absolute inset-0 border-8 border-green-600 dark:border-green-400 rounded-full" style={{ clipPath: 'inset(0 0 24% 0)' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-green-600 dark:text-green-400">76%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        {direction === 'rtl' ? 'تحليل البيانات' : 'Data Analysis'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'ميزات متقدمة للأداء الأمثل' : 'Advanced features for optimal performance'}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {direction === 'rtl'
                    ? 'استخدم تقنيات الذكاء الاصطناعي المتقدمة لتحليل البيانات والتنبؤ بالأداء وتحسين النتائج بشكل مستمر.'
                    : 'Use advanced AI techniques to analyze data, predict performance, and continuously improve results.'
                  }
                </p>
                <button
                  onClick={() => setShowConsultationModal(true)}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {direction === 'rtl' ? 'ابدأ' : 'Get Started'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Experiences Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? 'تجارب عملاء تتحدث عن نفسها' : 'Customer experiences that speak volumes'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {direction === 'rtl'
                  ? 'اكتشف ما يقوله عملاؤنا عن خدماتنا وكيف ساعدناهم في تحقيق أهدافهم'
                  : 'Discover what our customers say about our services and how we helped them achieve their goals'
                }
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'محمد بن سعيد',
                  nameEn: 'Mohammed bin Saeed',
                  role: direction === 'rtl' ? 'مؤسس شركة تقنية' : 'Tech Company Founder',
                  company: direction === 'rtl' ? 'شركة التقنيات الذكية' : 'Smart Tech Co.',
                  text: direction === 'rtl'
                    ? 'دعم فوري رائع وسرعة استجابة مذهلة! فريق العمل محترف جداً وساعدنا في تحسين أداء موقعنا بنسبة 60%.'
                    : 'Great instant support and amazing response speed! The team is very professional and helped us improve our site performance by 60%.',
                  gradient: 'from-green-400 to-emerald-500'
                },
                {
                  name: 'نورة بنت عبدالله',
                  nameEn: 'Noura bint Abdullah',
                  role: direction === 'rtl' ? 'مديرة تقنية' : 'Tech Manager',
                  company: direction === 'rtl' ? 'شركة الحلول الرقمية' : 'Digital Solutions Co.',
                  text: direction === 'rtl'
                    ? 'التكامل مع CRM كان سلساً تماماً. الآن لدينا نظام موحد يعمل بكفاءة عالية. أنصح به بشدة!'
                    : 'Integration with CRM was completely seamless. Now we have a unified system working with high efficiency. Highly recommended!',
                  gradient: 'from-blue-400 to-cyan-500'
                },
                {
                  name: 'خالد بن فهد',
                  nameEn: 'Khalid bin Fahd',
                  role: direction === 'rtl' ? 'رائد أعمال' : 'Entrepreneur',
                  company: direction === 'rtl' ? 'مؤسسة الابتكار' : 'Innovation Foundation',
                  text: direction === 'rtl'
                    ? 'زادت الكفاءة بشكل كبير بعد التحسين. الموقع أصبح أسرع بثلاث مرات وزوارنا سعداء جداً بالتحسينات.'
                    : 'Efficiency increased significantly after optimization. The site became three times faster and our visitors are very happy with the improvements.',
                  gradient: 'from-purple-400 to-pink-500'
                },
                {
                  name: 'لولوة بنت سلمان',
                  nameEn: 'Lulwa bint Salman',
                  role: direction === 'rtl' ? 'مديرة مشاريع' : 'Project Manager',
                  company: direction === 'rtl' ? 'مجموعة الأعمال المتقدمة' : 'Advanced Business Group',
                  text: direction === 'rtl'
                    ? 'دعم متاح 24/7 مع نتائج ممتازة. الفريق دائماً متاح ويساعدنا في حل أي مشكلة بسرعة. خدمة استثنائية!'
                    : '24/7 support available with excellent results. The team is always available and helps us solve any problem quickly. Exceptional service!',
                  gradient: 'from-orange-400 to-red-500'
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed min-h-[80px]">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {direction === 'rtl' ? testimonial.name.charAt(0) : testimonial.nameEn.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white text-base">
                        {direction === 'rtl' ? testimonial.name : testimonial.nameEn}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Driven Insights Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {direction === 'rtl' ? 'رؤى مدعومة بالذكاء الاصطناعي لاتخاذ قرارات أفضل' : 'AI driven insights for better decision making'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Mic className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {direction === 'rtl' ? 'صوت إلى نص ونص إلى صوت' : 'Voice to Text & Text to Voice'}
                    </h3>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 h-24 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-1 bg-green-600 rounded-full" style={{ height: `${Math.random() * 40 + 20}px` }}></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                    <Network className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {direction === 'rtl' ? 'التكامل مع CRM والأدوات' : 'Integration with CRM and Tools'}
                    </h3>
                  </div>
                </div>
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">20k+</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {direction === 'rtl' ? 'مستخدم راضٍ' : 'Satisfied Users'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {direction === 'rtl' ? 'خطط التحسين للتفاعل السلس' : 'Optimization plans for seamless interaction'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                {
                  name: direction === 'rtl' ? 'الباقة الأساسية' : 'Starter Plan',
                  price: '$29',
                  features: [
                    direction === 'rtl' ? 'حتى 500 محادثة' : 'Up to 500 conversations',
                    direction === 'rtl' ? 'دعم المجتمع' : 'Community support',
                    direction === 'rtl' ? 'سرعة قياسية' : 'Standard speed',
                    direction === 'rtl' ? 'وصول للوحة التحكم' : 'Dashboard access'
                  ]
                },
                {
                  name: direction === 'rtl' ? 'الباقة القياسية' : 'Standard Plan',
                  price: '$59',
                  features: [
                    direction === 'rtl' ? 'حتى 1,000 محادثة' : 'Up to 1,000 conversations',
                    direction === 'rtl' ? 'تحليلات أساسية' : 'Basic analytics',
                    direction === 'rtl' ? 'دعم عبر البريد' : 'Email support',
                    direction === 'rtl' ? 'تكامل API محدود' : 'Limited API access'
                  ]
                },
                {
                  name: direction === 'rtl' ? 'الباقة الاحترافية' : 'Pro Plan',
                  price: '$99',
                  features: [
                    direction === 'rtl' ? 'محادثات غير محدودة' : 'Unlimited conversations',
                    direction === 'rtl' ? 'تحليلات متقدمة' : 'Advanced analytics',
                    direction === 'rtl' ? 'دعم 24/7' : '24/7 priority support',
                    direction === 'rtl' ? 'تكامل متقدم' : 'Advanced integration'
                  ],
                  popular: true
                },
                {
                  name: direction === 'rtl' ? 'باقة الشركات' : 'Enterprise',
                  price: '$199',
                  features: [
                    direction === 'rtl' ? 'نطاق مخصص' : 'Custom domain',
                    direction === 'rtl' ? 'مدير حساب خاص' : 'Dedicated manager',
                    direction === 'rtl' ? 'SLA 99.9%' : '99.9% SLA',
                    direction === 'rtl' ? 'حلول مخصصة' : 'Custom solutions'
                  ]
                }
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border ${plan.popular
                    ? 'border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)]'
                    : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-green-200 dark:hover:border-green-800'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg bg-green-600 text-white">
                      {direction === 'rtl' ? 'الأكثر طلباً' : 'MOST POPULAR'}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">{plan.price}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 font-medium">/month</div>
                  </div>

                  <button
                    onClick={() => setShowConsultationModal(true)}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${plan.popular
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                      }`}
                  >
                    {direction === 'rtl' ? 'اختر الخطة' : 'Choose Plan'}
                  </button>

                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                      {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                    </div>
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? 'الأسئلة الشائعة' : 'Frequently asked questions'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {direction === 'rtl'
                  ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدمات التحسين والتطوير'
                  : 'Answers to the most common questions about our optimization and development services'
                }
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${expandedFAQ === index
                    ? 'border-green-500 shadow-xl shadow-green-500/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-lg'
                    }`}
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className={`w-full p-6 flex items-center gap-4 text-left transition-all duration-300 ${expandedFAQ === index
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${expandedFAQ === index
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      }`}>
                      <faq.icon className="w-6 h-6" />
                    </div>
                    <span className={`font-semibold text-lg flex-1 transition-colors ${expandedFAQ === index
                      ? 'text-green-700 dark:text-green-300'
                      : 'text-gray-900 dark:text-white'
                      }`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${expandedFAQ === index
                      ? 'bg-green-600 text-white rotate-180'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                      }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-16 border-l-2 border-green-200 dark:border-green-800">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {direction === 'rtl' ? 'حان وقت تحسين موقعك' : 'Time to Optimize Your Site'}
            </h2>
            <p className="text-xl text-green-100 mb-8">
              {direction === 'rtl'
                ? 'لا تدع موقعك يعاني من بطء الأداء. ابدأ رحلة التحسين اليوم مع فريقنا المتخصص'
                : 'Don\'t let your site suffer from slow performance. Start your optimization journey today with our specialized team'
              }
            </p>
            <button
              onClick={() => setShowConsultationModal(true)}
              className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <span>{direction === 'rtl' ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}</span>
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />

        {/* Consultation Modal */}
        {
          showConsultationModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {direction === 'rtl' ? 'طلب استشارة تحسين' : 'Optimization Consultation Request'}
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
                      {direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'اسم الشركة' : 'Company Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'رابط الموقع' : 'Website URL'}
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'المشاكل الحالية' : 'Current Issues'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={direction === 'rtl' ? 'وصف المشاكل التي تواجهها...' : 'Describe the issues you are facing...'}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {direction === 'rtl' ? 'الأهداف المرجوة' : 'Desired Goals'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={direction === 'rtl' ? 'ما تريد تحقيقه من التحسين...' : 'What you want to achieve from optimization...'}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    {direction === 'rtl' ? 'إرسال الطلب' : 'Send Request'}
                  </button>
                </form>
              </div>
            </div>
          )
        }
      </div >
    </div >
  );
}
