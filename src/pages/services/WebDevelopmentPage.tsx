import { useState } from 'react';
import {
  ArrowRight, CheckCircle, Globe, Code, Smartphone,
  Layout, Zap, Shield, Search, BarChart, MessageSquare,
  ChevronDown, ChevronUp, Star, TrendingUp,
  Award, Target, Rocket, DollarSign, Check, Sparkles,
  Settings, BadgeCheck
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface WebDevelopmentPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function WebDevelopmentPage({ direction, theme, toggleTheme, toggleDirection, t }: WebDevelopmentPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* SECTION 1: Hero Section */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/20 dark:bg-orange-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/5 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 mb-6">
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                    {direction === 'rtl' ? '🚀 متاح للمشاريع الجديدة' : '🚀 Available for New Projects'}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {direction === 'rtl' ? (
                    <>
                      موقعك الإلكتروني،{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                        على بُعد نقرة
                      </span>
                    </>
                  ) : (
                    <>
                      Your Website, Just{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                        A Click Away
                      </span>
                    </>
                  )}
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {direction === 'rtl'
                    ? 'نصمم ونطور مواقع إلكترونية احترافية وسريعة تجذب العملاء وتحول الزوار إلى عملاء دائمين. حلول متكاملة لجميع القطاعات.'
                    : 'We design and develop professional, fast websites that attract customers and convert visitors into loyal clients. Complete solutions for all sectors.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="px-8 py-4 bg-gray-900 dark:bg-orange-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <span>{direction === 'rtl' ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}</span>
                    <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                    {direction === 'rtl' ? 'شاهد أعمالنا' : 'View Our Work'}
                  </button>
                </div>

                {/* Customer Reviews */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white dark:border-gray-900"></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {direction === 'rtl' ? 'موثوق من قبل 500+ عميل راضٍ' : 'Trusted by 500+ Happy Clients'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Website Preview */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 mx-4 px-4 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs text-gray-500 dark:text-gray-400">
                      {direction === 'rtl' ? 'موقعك-الجديد.com' : 'your-new-website.com'}
                    </div>
                  </div>

                  {/* Website Preview Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Code className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-2" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full mb-2"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gray-900 dark:bg-orange-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
                        {direction === 'rtl' ? 'ابدأ مشروعك' : 'Start Project'}
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                        <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">500+</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'مشروع' : 'Projects'}</p>
                    </div>
                    <div className="border-x border-gray-200 dark:border-gray-700">
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">98%</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'رضا' : 'Satisfaction'}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">24/7</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'دعم' : 'Support'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Trusted By Companies */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
              {direction === 'rtl' ? 'أكثر من 100 شركة تثق بنا لبناء مستقبلها الرقمي' : 'Trusted by over 100 companies for their digital transformation'}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['logo10.png', 'logo11.png', 'logo12.png', 'logo13.png', 'logo14.png'].map((logo, index) => (
                <div key={index} className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                  <img
                    src={`/images/brands/${logo}`}
                    alt="Brand Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Service Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'حلول ويب متكاملة لنمو أعمالك' : 'Integrated Web Solutions for Your Business Growth'}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {direction === 'rtl'
                    ? 'نقدم مجموعة شاملة من خدمات تطوير الويب المصممة خصيصاً لتلبية احتياجات عملك وتحقيق أهدافك الرقمية.'
                    : 'We offer a comprehensive range of web development services tailored to meet your business needs and achieve your digital goals.'}
                </p>
              </div>
              <div></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-8 h-8" />,
                  title: direction === 'rtl' ? 'مواقع الشركات' : 'Corporate Websites',
                  description: direction === 'rtl'
                    ? 'تصميم مواقع احترافية تعكس هوية شركتك وتعزز مصداقيتها أمام العملاء.'
                    : 'Professional website design that reflects your corporate identity and enhances credibility.'
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: direction === 'rtl' ? 'المتاجر الإلكترونية' : 'E-Commerce Stores',
                  description: direction === 'rtl'
                    ? 'متاجر إلكترونية متكاملة وسهلة الاستخدام لزيادة مبيعاتك عبر الإنترنت.'
                    : 'Integrated, user-friendly e-commerce stores to boost your online sales.'
                },
                {
                  icon: <Rocket className="w-8 h-8" />,
                  title: direction === 'rtl' ? 'تطبيقات الويب' : 'Web Applications',
                  description: direction === 'rtl'
                    ? 'تطبيقات ويب مخصصة قوية وآمنة لأتمتة عملياتك التجارية.'
                    : 'Powerful and secure custom web applications to automate your business processes.'
                }
              ].map((feature, index) => (
                <div key={index} className="group p-8 bg-white dark:bg-gray-900 rounded-2xl hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Expert Solutions with Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 aspect-square flex items-center justify-center">
                  <img 
                    src="/images/dl.beatsnoop.com-low-smi03.jpg" 
                    alt={direction === 'rtl' ? 'تطوير احترافي' : 'Professional Development'}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {direction === 'rtl' ? 'إنجاز المشاريع' : 'Project Delivery'}
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white dark:border-gray-800"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-green-500 font-bold">100%</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'في الوقت المحدد' : 'On Time'}</span>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    {direction === 'rtl' ? 'لماذا نحن' : 'Why Us'}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? (
                    <>خبرة تقنية تبني <span className="text-orange-600">المستقبل</span></>
                  ) : (
                    <>Technical Expertise Building the <span className="text-orange-600">Future</span></>
                  )}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  {direction === 'rtl'
                    ? 'فريقنا من المطورين والمصممين المحترفين يمتلك الخبرة اللازمة لتحويل أفكارك إلى واقع رقمي مبهر باستخدام أحدث التقنيات.'
                    : 'Our team of professional developers and designers has the expertise to transform your ideas into stunning digital reality using the latest technologies.'}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'جودة الكود' : 'Code Quality'}</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">100%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <BadgeCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{direction === 'rtl' ? 'دعم فني' : 'Tech Support'}</p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">24/7</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'مشروع مكتمل' : 'Completed Projects'}</p>
                  </div>
                  <div className="text-center border-x border-gray-200 dark:border-gray-700">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'سنوات خبرة' : 'Years Experience'}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">98%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{direction === 'rtl' ? 'سعادة العملاء' : 'Client Satisfaction'}</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 rounded-2xl border border-orange-200 dark:border-orange-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {direction === 'rtl' 
                      ? 'نحن ملتزمون بتقديم حلول ويب مبتكرة تلبي احتياجاتك وتتجاوز توقعاتك'
                      : 'We are committed to delivering innovative web solutions that meet your needs and exceed your expectations'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Detailed Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                {direction === 'rtl' ? 'الميزات' : 'Features'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'كل ما تحتاجه للنجاح الرقمي' : 'Everything You Need for Digital Success'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {direction === 'rtl'
                  ? 'ميزات تقنية متقدمة تضمن لك التفوق في العالم الرقمي'
                  : 'Advanced technical features to ensure your superiority in the digital world'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Globe className="w-6 h-6" />, title: direction === 'rtl' ? 'تصميم متجاوب' : 'Responsive Design', desc: direction === 'rtl' ? 'يعمل بشكل مثالي على جميع الأجهزة' : 'Works perfectly on all devices' },
                { icon: <Code className="w-6 h-6" />, title: direction === 'rtl' ? 'كود نظيف' : 'Clean Code', desc: direction === 'rtl' ? 'كود منظم وسهل الصيانة' : 'Organized and maintainable code' },
                { icon: <Zap className="w-6 h-6" />, title: direction === 'rtl' ? 'سرعة فائقة' : 'Lightning Fast', desc: direction === 'rtl' ? 'تحميل سريع وأداء ممتاز' : 'Fast loading and excellent performance' },
                { icon: <Shield className="w-6 h-6" />, title: direction === 'rtl' ? 'أمان عالي' : 'High Security', desc: direction === 'rtl' ? 'حماية متقدمة لبياناتك' : 'Advanced protection for your data' },
                { icon: <Search className="w-6 h-6" />, title: direction === 'rtl' ? 'SEO محسّن' : 'SEO Optimized', desc: direction === 'rtl' ? 'ظهور أفضل في محركات البحث' : 'Better visibility in search engines' },
                { icon: <BarChart className="w-6 h-6" />, title: direction === 'rtl' ? 'تحليلات متقدمة' : 'Advanced Analytics', desc: direction === 'rtl' ? 'تقارير تفصيلية عن الأداء' : 'Detailed performance reports' }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-white dark:bg-gray-900 rounded-xl hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Pricing Comparison */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                {direction === 'rtl' ? 'الأسعار' : 'Pricing and Plans'}
              </span>
            </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {direction === 'rtl' ? 'أسعار شفافة للجميع' : 'Transparent pricing for all'}
            </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {direction === 'rtl'
                ? 'كل باقة مصممة بعناية. لا توجد رسوم خفية أو مفاجآت.'
                : 'Every feature is carefully crafted. No hidden fees or surprises.'}
            </p>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  title: direction === 'rtl' ? 'البداية' : 'Starter',
                  subtitle: direction === 'rtl' ? 'مثالي للمواقع الشخصية والصغيرة' : 'Perfect for personal and small websites',
                  price: '499',
                  originalPrice: '600',
                  cents: '99',
                  isCustom: false,
                  priceLabel: direction === 'rtl' ? 'سعر البداية' : 'Starting price',
                  priceNote: direction === 'rtl' ? 'التعديلات غير مشمولة' : 'Revisions not included',
                  description: direction === 'rtl' ? 'موقع حتى 5 صفحات مع تصميم متجاوب' : 'Up to 5 pages website with responsive design',
                  save: direction === 'rtl' ? 'لوحة تحكم بسيطة' : 'Simple CMS included',
                  features: [
                    direction === 'rtl' ? 'موقع حتى 5 صفحات' : 'Up to 5 Pages',
                    direction === 'rtl' ? 'تصميم متجاوب' : 'Responsive Design',
                    direction === 'rtl' ? 'لوحة تحكم أساسية' : 'Basic CMS',
                    direction === 'rtl' ? 'SEO أساسي' : 'Basic SEO',
                    direction === 'rtl' ? 'نموذج اتصال' : 'Contact Form',
                    direction === 'rtl' ? 'بوابة دفع (إضافة منفصلة)' : 'Payment Gateway (Add-on)'
                  ],
                  badge: null
                },
                {
                  title: direction === 'rtl' ? 'الأعمال' : 'Business',
                  subtitle: direction === 'rtl' ? 'للشركات والمؤسسات الصغيرة' : 'For small businesses and organizations',
                  price: '849',
                  originalPrice: '1000',
                  cents: '99',
                  isCustom: false,
                  priceLabel: direction === 'rtl' ? 'سعر البداية' : 'Starting price',
                  priceNote: direction === 'rtl' ? 'الدفع مقسم على 3 أقساط' : 'Payment divided into 3 installments',
                  description: direction === 'rtl' ? 'موقع احترافي مع ميزات متقدمة' : 'Professional website with advanced features',
                  save: direction === 'rtl' ? 'تحسين محركات البحث' : 'SEO Optimization',
                  features: [
                    direction === 'rtl' ? 'موقع حتى 10 صفحات' : 'Up to 10 Pages',
                    direction === 'rtl' ? 'تصميم مخصص' : 'Custom Design',
                    direction === 'rtl' ? 'لوحة تحكم متقدمة' : 'Advanced CMS',
                    direction === 'rtl' ? 'تحسين SEO متقدم' : 'Advanced SEO',
                    direction === 'rtl' ? 'تكامل مع Google Analytics' : 'Google Analytics Integration',
                    direction === 'rtl' ? 'بوابة دفع (إضافة منفصلة)' : 'Payment Gateway (Add-on)'
                  ],
                  badge: null
                },
                {
                  title: direction === 'rtl' ? 'المتجر الإلكتروني' : 'E-commerce',
                  subtitle: direction === 'rtl' ? 'للمتاجر الإلكترونية الكاملة' : 'For full online stores',
                  price: '1349',
                  originalPrice: '1700',
                  cents: '99',
                  isCustom: false,
                  priceLabel: direction === 'rtl' ? 'سعر البداية' : 'Starting price',
                  priceNote: direction === 'rtl' ? 'الدفع مقسم على 3 أقساط' : 'Payment divided into 3 installments',
                  description: direction === 'rtl' ? 'متجر إلكتروني متكامل مع جميع الميزات' : 'Full e-commerce store with all features',
                  save: direction === 'rtl' ? 'إدارة المنتجات غير محدودة' : 'Unlimited products management',
                  features: [
                    direction === 'rtl' ? 'متجر إلكتروني كامل' : 'Full E-commerce Store',
                    direction === 'rtl' ? 'منتجات غير محدودة' : 'Unlimited Products',
                    direction === 'rtl' ? 'إدارة المخزون' : 'Inventory Management',
                    direction === 'rtl' ? 'لوحة تحكم المتجر' : 'Store Dashboard',
                    direction === 'rtl' ? 'بوابة دفع (إضافة منفصلة)' : 'Payment Gateway (Add-on)'
                  ],
                  badge: direction === 'rtl' ? 'الأكثر استخداماً' : 'MOST USED',
                  hasPaymentGateway: true
                },
                {
                  title: direction === 'rtl' ? 'المؤسسات' : 'Enterprise',
                  subtitle: direction === 'rtl' ? 'للمشاريع الكبيرة والتطبيقات المخصصة' : 'For large projects and custom applications',
                  price: direction === 'rtl' ? 'عرض سعر مخصص' : 'Custom Quote',
                  isCustom: true,
                  description: direction === 'rtl' ? 'تطبيق ويب مخصص مع جميع الميزات' : 'Custom web application with all features',
                  save: direction === 'rtl' ? 'دعم فني مخصص 24/7' : '24/7 Dedicated Support',
                  features: [
                    direction === 'rtl' ? 'تطبيق ويب مخصص' : 'Custom Web Application',
                    direction === 'rtl' ? 'صفحات غير محدودة' : 'Unlimited Pages',
                    direction === 'rtl' ? 'تطوير API مخصص' : 'Custom API Development',
                    direction === 'rtl' ? 'أمان متقدم' : 'Advanced Security',
                    direction === 'rtl' ? 'دعم فني ذو أولوية' : 'Priority Support',
                    direction === 'rtl' ? 'بوابة دفع (إضافة منفصلة)' : 'Payment Gateway (Add-on)'
                  ],
                  badge: null
                }
              ].map((plan, index) => {
                const isHighlighted = index === 2; // E-commerce plan

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
                    {plan.badge && (
                      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                        plan.badge === 'MOST USED' || plan.badge === 'الأكثر استخداماً'
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
                      {plan.isCustom ? (
                        <div className="flex items-center justify-center">
                          <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
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
                            {plan.priceLabel || (direction === 'rtl' ? '/شهر' : '/month')}
              </div>
                          {plan.priceNote && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-normal">
                              {plan.priceNote}
                            </div>
                          )}
                        </>
                      )}
                </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${
                      isHighlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                    }`}>
                  {direction === 'rtl' ? 'ابدأ الآن' : 'Get Started'}
                </button>

                    {/* Features */}
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                      </div>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {plan.description}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {plan.save}
                          </span>
                        </li>
                      </ul>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => {
                            const isAddon = feature.includes('(Add-on)') || feature.includes('(إضافة منفصلة)');
                            return (
                              <li key={idx} className="flex items-center gap-2">
                                {isAddon ? (
                                  <span className="w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[8px] text-orange-600 dark:text-orange-400 font-bold">+</span>
                                  </span>
                                ) : (
                                  <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                                )}
                                <span className={`text-xs ${isAddon ? 'text-orange-600 dark:text-orange-400 font-medium' : 'text-gray-600 dark:text-gray-400'}`}>
                                  {feature}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment Gateway Add-ons Section */}
            <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {direction === 'rtl' ? 'بوابات الدفع المتاحة (إضافات منفصلة)' : 'Available Payment Gateways (Add-ons)'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {direction === 'rtl' 
                    ? 'يمكنك إضافة بوابة دفع من اختيارك بسعر منفصل عن سعر الباقة'
                    : 'You can add a payment gateway of your choice at an additional cost'}
                </p>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {[
                {
                  name: 'PayPal',
                  price: '50',
                  description: direction === 'rtl' ? 'تكامل مع PayPal' : 'PayPal integration'
                },
                {
                  name: 'Stripe',
                  price: '75',
                  description: direction === 'rtl' ? 'تكامل مع Stripe' : 'Stripe integration'
                },
                {
                  name: 'Square',
                  price: '60',
                  description: direction === 'rtl' ? 'تكامل مع Square' : 'Square integration'
                },
                {
                  name: 'Apple Pay',
                  price: '70',
                  description: direction === 'rtl' ? 'تكامل مع Apple Pay' : 'Apple Pay integration'
                },
                {
                  name: 'Google Pay',
                  price: '65',
                  description: direction === 'rtl' ? 'تكامل مع Google Pay' : 'Google Pay integration'
                },
                {
                  name: 'Amazon Pay',
                  price: '55',
                  description: direction === 'rtl' ? 'تكامل مع Amazon Pay' : 'Amazon Pay integration'
                },
                {
                  name: '2Checkout',
                  price: '80',
                  description: direction === 'rtl' ? 'تكامل مع 2Checkout' : '2Checkout integration'
                },
                {
                  name: 'Authorize.Net',
                  price: '90',
                  description: direction === 'rtl' ? 'تكامل مع Authorize.Net' : 'Authorize.Net integration'
                },
                {
                  name: 'Braintree',
                  price: '85',
                  description: direction === 'rtl' ? 'تكامل مع Braintree' : 'Braintree integration'
                },
                {
                  name: 'Razorpay',
                  price: '75',
                  description: direction === 'rtl' ? 'تكامل مع Razorpay' : 'Razorpay integration'
                },
                {
                  name: 'PayU',
                  price: '70',
                  description: direction === 'rtl' ? 'تكامل مع PayU' : 'PayU integration'
                },
                {
                  name: direction === 'rtl' ? 'مدى' : 'Mada',
                  price: '100',
                  description: direction === 'rtl' ? 'تكامل مع مدى' : 'Mada integration'
                },
                {
                  name: 'Fawaterak',
                  price: '90',
                  description: direction === 'rtl' ? 'تكامل مع Fawaterak' : 'Fawaterak integration'
                },
                {
                  name: 'Paymob',
                  price: '85',
                  description: direction === 'rtl' ? 'تكامل مع Paymob' : 'Paymob integration'
                },
                {
                  name: direction === 'rtl' ? 'تمارا' : 'Tamara',
                  price: '80',
                  description: direction === 'rtl' ? 'تكامل مع تمارا' : 'Tamara integration'
                },
                {
                  name: direction === 'rtl' ? 'تابي' : 'Tabby',
                  price: '85',
                  description: direction === 'rtl' ? 'تكامل مع تابي' : 'Tabby integration'
                },
                {
                  name: 'HyperPay',
                  price: '95',
                  description: direction === 'rtl' ? 'تكامل مع HyperPay' : 'HyperPay integration'
                },
                {
                  name: 'Tap Payments',
                  price: '80',
                  description: direction === 'rtl' ? 'تكامل مع Tap Payments' : 'Tap Payments integration'
                },
                {
                  name: 'PayTabs',
                  price: '75',
                  description: direction === 'rtl' ? 'تكامل مع PayTabs' : 'PayTabs integration'
                },
                {
                  name: 'PayFort',
                  price: '90',
                  description: direction === 'rtl' ? 'تكامل مع PayFort' : 'PayFort integration'
                },
                {
                  name: 'CashU',
                  price: '70',
                  description: direction === 'rtl' ? 'تكامل مع CashU' : 'CashU integration'
                },
                {
                  name: 'OneCard',
                  price: '85',
                  description: direction === 'rtl' ? 'تكامل مع OneCard' : 'OneCard integration'
                },
                {
                  name: 'Klarna',
                  price: '90',
                  description: direction === 'rtl' ? 'تكامل مع Klarna' : 'Klarna integration'
                },
                {
                  name: 'Afterpay',
                  price: '85',
                  description: direction === 'rtl' ? 'تكامل مع Afterpay' : 'Afterpay integration'
                },
                {
                  name: 'Mollie',
                  price: '70',
                  description: direction === 'rtl' ? 'تكامل مع Mollie' : 'Mollie integration'
                },
                {
                  name: 'Adyen',
                  price: '95',
                  description: direction === 'rtl' ? 'تكامل مع Adyen' : 'Adyen integration'
                },
                {
                  name: 'Worldpay',
                  price: '100',
                  description: direction === 'rtl' ? 'تكامل مع Worldpay' : 'Worldpay integration'
                }
              ].map((gateway, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">{gateway.name}</h4>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ${gateway.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{gateway.description}</p>
                    </div>
                  ))}
                </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {direction === 'rtl' 
                    ? 'ملاحظة: الأسعار المذكورة هي رسوم التكامل الأولي. قد توجد رسوم إضافية حسب البوابة المختارة.'
                    : 'Note: The prices mentioned are initial integration fees. Additional fees may apply depending on the chosen gateway.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Process/Workflow */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
                <Rocket className="w-4 h-4" />
                {direction === 'rtl' ? 'العملية' : 'Process'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'كيف نعمل معك' : 'How We Work With You'}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: direction === 'rtl' ? 'تحليل المتطلبات' : 'Requirements Analysis', desc: direction === 'rtl' ? 'نفهم أهدافك وجمهورك المستهدف بدقة' : 'We understand your goals and target audience thoroughly' },
                { step: '02', title: direction === 'rtl' ? 'التصميم والنموذج' : 'Design & Prototyping', desc: direction === 'rtl' ? 'نصمم واجهة مستخدم لا تُنسى (UI/UX)' : 'We create unforgettable UI/UX designs' },
                { step: '03', title: direction === 'rtl' ? 'التطوير والبرمجة' : 'Development', desc: direction === 'rtl' ? 'نحول التصميم إلى موقع يعمل بكفاءة' : 'We turn the design into a fully functional website' },
                { step: '04', title: direction === 'rtl' ? 'الاختبار والإطلاق' : 'Testing & Launch', desc: direction === 'rtl' ? 'نختبر الموقع ونطلقه للعالم' : 'We test the site and launch it to the world' }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-orange-200 dark:text-orange-900/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-transparent dark:from-orange-700"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
                <Settings className="w-4 h-4" />
                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'نستخدم أحدث التقنيات' : 'We Use the Latest Technologies'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {direction === 'rtl'
                  ? 'نعمل بأحدث التقنيات والأدوات لضمان أفضل أداء وجودة لمشروعك'
                  : 'We work with the latest technologies and tools to ensure the best performance and quality for your project'}
              </p>
            </div>

            {/* Frontend Technologies */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center">
                {direction === 'rtl' ? 'تقنيات الواجهة الأمامية' : 'Frontend Technologies'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: 'React', iconPath: 'react-svgrepo-com.svg' },
                  { name: 'Next.js', iconPath: 'next-dot-js-svgrepo-com.svg' },
                  { name: 'Vue.js', iconPath: 'vue-js-svgrepo-com.svg' },
                  { name: 'Angular', iconPath: 'angular-svgrepo-com.svg' },
                  { name: 'TypeScript', iconPath: 'typescript-icon-svgrepo-com.svg' },
                  { name: 'JavaScript', iconPath: 'javascript-svgrepo-com.svg' },
                  { name: 'Tailwind CSS', iconPath: 'tailwind-css-svgrepo-com.svg' },
                  { name: 'Bootstrap', iconPath: 'bootstrap-svgrepo-com.svg' },
                  { name: 'Sass', iconPath: 'sass-svgrepo-com.svg' },
                  { name: 'Redux', iconPath: 'redux-svgrepo-com.svg' }
                ].map((tech, index) => (
                  <div key={index} className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={`/images/technologies/${tech.iconPath}`} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center">
                {direction === 'rtl' ? 'تقنيات الخادم' : 'Backend Technologies'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: 'Node.js', iconPath: 'node-js-svgrepo-com.svg' },
                  { name: 'Python', iconPath: 'python-svgrepo-com.svg' },
                  { name: 'PHP', iconPath: 'php2-svgrepo-com.svg' },
                  { name: 'Laravel', iconPath: 'laravel-svgrepo-com.svg' },
                  { name: 'Django', iconPath: 'django-svgrepo-com.svg' },
                  { name: 'NestJS', iconPath: 'nestjs-svgrepo-com.svg' },
                  { name: 'FastAPI', iconPath: 'fastapi-svgrepo-com.svg' },
                  { name: 'Ruby on Rails', iconPath: 'rails-svgrepo-com.svg' },
                  { name: 'ASP.NET', iconPath: 'aspnet-svgrepo-com.svg' },
                  { name: 'JavaScript', iconPath: 'js-svgrepo-com.svg' }
                ].map((tech, index) => (
                  <div key={index} className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={`/images/technologies/${tech.iconPath}`} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Database & Tools */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center">
                {direction === 'rtl' ? 'قواعد البيانات والأدوات' : 'Databases & Tools'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: 'MongoDB', iconPath: 'mongo-svgrepo-com.svg' },
                  { name: 'PostgreSQL', iconPath: 'postgresql-logo-svgrepo-com.svg' },
                  { name: 'MySQL', iconPath: 'mysql-svgrepo-com.svg' },
                  { name: 'Redis', iconPath: 'redis-svgrepo-com.svg' },
                  { name: 'Firebase', iconPath: 'firebase-svgrepo-com.svg' },
                  { name: 'Docker', iconPath: 'docker-svgrepo-com.svg' },
                  { name: 'Git', iconPath: 'git-svgrepo-com.svg' },
                  { name: 'AWS', iconPath: 'aws-ec2-svgrepo-com.svg' },
                  { name: 'GraphQL', iconPath: 'graphql-svgrepo-com.svg' },
                  { name: 'REST API', iconPath: 'rest-api-svgrepo-com.svg' }
                ].map((tech, index) => (
                  <div key={index} className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                      <img 
                        src={`/images/technologies/${tech.iconPath}`} 
                        alt={tech.name}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          // Fallback to default icon if image not found
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center';
                          fallback.innerHTML = '<svg class="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
                <MessageSquare className="w-4 h-4" />
                {direction === 'rtl' ? 'الأسئلة الشائعة' : 'FAQ'}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: direction === 'rtl' ? 'كم يستغرق بناء الموقع؟' : 'How long does it take to build a website?', a: direction === 'rtl' ? 'عادة من 2-4 أسابيع حسب حجم المشروع ومتطلباته.' : 'Usually 2-4 weeks depending on project size and requirements.' },
                { q: direction === 'rtl' ? 'هل الموقع متجاوب مع جميع الأجهزة؟' : 'Is the website responsive on all devices?', a: direction === 'rtl' ? 'نعم، جميع مواقعنا متجاوبة 100% وتعمل بشكل مثالي على جميع الأجهزة.' : 'Yes, all our websites are 100% responsive and work perfectly on all devices.' },
                { q: direction === 'rtl' ? 'ما هي التقنيات المستخدمة؟' : 'What technologies do you use?', a: 'React, Next.js, TypeScript, Tailwind CSS' },
                { q: direction === 'rtl' ? 'هل تقدمون الدعم الفني؟' : 'Do you provide technical support?', a: direction === 'rtl' ? 'نعم، نقدم دعم فني شامل 24/7 لجميع عملائنا.' : 'Yes, we provide comprehensive 24/7 technical support for all our clients.' },
                { q: direction === 'rtl' ? 'هل يمكنني تعديل الموقع بنفسي؟' : 'Can I edit the website myself?', a: direction === 'rtl' ? 'نعم، نوفر لوحة تحكم سهلة الاستخدام لإدارة المحتوى.' : 'Yes, we provide an easy-to-use control panel for content management.' }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.q}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Smart Solutions (Additional Info) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold">
                    <Target className="w-4 h-4" />
                    {direction === 'rtl' ? 'مستقبل رقمي' : 'Digital Future'}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? (
                    <>شريكك في <span className="text-orange-600">التحول الرقمي</span></>
                  ) : (
                    <>Your Partner in <span className="text-orange-600">Digital Transformation</span></>
                  )}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {direction === 'rtl'
                    ? 'نحن لا نبني مجرد مواقع، بل نخلق تجارب رقمية متكاملة تساعدك على الوصول لعملائك وتحقيق أهدافك التجارية.'
                    : 'We don\'t just build websites; we create integrated digital experiences that help you reach your customers and achieve your business goals.'}
                </p>

                <div className="mb-8 space-y-3">
                  {[
                    direction === 'rtl' ? 'حلول مخصصة تلبي احتياجاتك الفريدة' : 'Custom solutions tailored to your unique needs',
                    direction === 'rtl' ? 'تقنيات حديثة وأدوات متطورة' : 'Modern technologies and advanced tools',
                    direction === 'rtl' ? 'دعم مستمر وخدمة ما بعد البيع' : 'Ongoing support and after-sales service',
                    direction === 'rtl' ? 'نتائج قابلة للقياس وتحسين مستمر' : 'Measurable results and continuous improvement'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-4 bg-gray-900 dark:bg-orange-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                  <span>{direction === 'rtl' ? 'اطلب استشارة' : 'Book Consultation'}</span>
                  <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 aspect-square flex items-center justify-center">
                <img 
                  src="/images/dl.beatsnoop.com-low-smi03.jpg" 
                  alt={direction === 'rtl' ? 'نمو مستمر' : 'Continuous Growth'}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 11: Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {direction === 'rtl' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              {direction === 'rtl'
                ? 'انضم إلى آلاف العملاء الراضين واحصل على موقع ويب احترافي اليوم'
                : 'Join thousands of satisfied customers and get your professional website today'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-white text-orange-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                {direction === 'rtl' ? 'احصل على عرض سعر' : 'Get Free Quote'}
              </button>
              <button className="px-10 py-5 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                {direction === 'rtl' ? 'تحدث مع خبير' : 'Talk to an Expert'}
              </button>
            </div>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
