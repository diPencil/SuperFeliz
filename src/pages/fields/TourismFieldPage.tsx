import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, Globe, Map
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface TourismFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function TourismFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: TourismFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال السياحي' : 'Tourism Field',
        description: direction === 'rtl'
            ? 'حلول تقنية متكاملة للقطاع السياحي تساعد الفنادق، المنتجعات، ووكالات السفر على تحسين تجربة العملاء وزيادة الحجوزات من خلال الرقمنة الذكية.'
            : 'Comprehensive technological solutions for the tourism sector that help hotels, resorts, and travel agencies improve customer experience and increase bookings through smart digitization.',
        stats: {
            projects: '120+',
            clients: '35+',
            experience: '7+ Years',
            satisfaction: '96%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول السياحية؟' : 'Why Choose Pencil for Tourism Solutions?',
            features: [
                {
                    icon: Globe,
                    title: direction === 'rtl' ? 'خبرة عالمية' : 'Global Expertise',
                    description: direction === 'rtl'
                        ? 'فهم عميق لمتطلبات السائح العالمي وتوقعاته لتوفير تجربة عالمية المستوى'
                        : 'Deep understanding of global tourist requirements and expectations to provide world-class experience'
                },
                {
                    icon: Calendar,
                    title: direction === 'rtl' ? 'أنظمة حجز ذكية' : 'Smart Booking Systems',
                    description: direction === 'rtl'
                        ? 'محركات حجز متطورة تزيد من المبيعات المباشرة وتقلل من العمولات للمنصات الخارجية'
                        : 'Advanced booking engines that increase direct sales and reduce commissions to third-party platforms'
                },
                {
                    icon: MessageCircle,
                    title: direction === 'rtl' ? 'تواصل متعدد اللغات' : 'Multilingual Communication',
                    description: direction === 'rtl'
                        ? 'حلول تدعم لغات متعددة لخدمة ضيوفك من جميع أنحاء العالم بسلاسة'
                        : 'Solutions supporting multiple languages to serve your guests from around the world seamlessly'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'فهم احتياجات الضيوف' : 'Understanding Guest Needs',
                description: direction === 'rtl'
                    ? 'نحلل رحلة العميل لتحديد نقاط الاحتكاك وفرص تحسين التجربة'
                    : 'We analyze the customer journey to identify friction points and opportunities for experience improvement',
                icon: Users
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم التجربة الرقمية' : 'Digital Experience Design',
                description: direction === 'rtl'
                    ? 'نصمم واجهات جذابة وسهلة الاستخدام تعكس هوية علامتك التجارية الفاخرة'
                    : 'We design attractive, user-friendly interfaces that reflect your premium brand identity',
                icon: Sparkles
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'التكامل مع الأنظمة' : 'System Integration',
                description: direction === 'rtl'
                    ? 'نربط حلولنا مع أنظمة PMS و Channel Managers لضمان تدفق البيانات'
                    : 'We integrate our solutions with PMS and Channel Managers to ensure data flow',
                icon: Layers
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'إطلاق المنصة' : 'Platform Launch',
                description: direction === 'rtl'
                    ? 'نطلق المنصة مع حملات تسويقية رقمية لجذب الزوار والحجوزات'
                    : 'We launch the platform with digital marketing campaigns to attract visitors and bookings',
                icon: Rocket
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'تحسين معدل التحويل' : 'CRO & Optimization',
                description: direction === 'rtl'
                    ? 'نراقب الأداء ونحسن مسارات الحجز لزيادة العائد باستمرار'
                    : 'We monitor performance and optimize booking paths to continuously increase revenue',
                icon: BarChart3
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'محركات الحجز المباشر' : 'Direct Booking Engines',
                description: direction === 'rtl'
                    ? 'نظام حجز متكامل لموقعك الفندقي يتيح للضيوف الحجز والدفع مباشرة دون وسطاء'
                    : 'Integrated booking system for your hotel website allowing guests to book and pay directly without intermediaries',
                features: [
                    direction === 'rtl' ? 'واجهة حجز سهلة وسريعة' : 'Fast and easy booking interface',
                    direction === 'rtl' ? 'دعم العملات المتعددة' : 'Multi-currency support',
                    direction === 'rtl' ? 'عروض وباقات ديناميكية' : 'Dynamic offers and packages',
                    direction === 'rtl' ? 'تكامل مع بوابات الدفع' : 'Payment gateway integration'
                ],
                icon: Calendar,
                pricing: direction === 'rtl' ? 'من 2,500$' : 'From $2,500'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات تجربة الضيف' : 'Guest Experience Apps',
                description: direction === 'rtl'
                    ? 'تطبيق موبايل خاص بفندقك يتيح للضيوف طلب الخدمات، فتح الغرفة، واستكشاف المرافق'
                    : 'Dedicated mobile app for your hotel allowing guests to request services, unlock rooms, and explore facilities',
                features: [
                    direction === 'rtl' ? 'تسجيل دخول/خروج رقمي' : 'Digital Check-in/Check-out',
                    direction === 'rtl' ? 'مفتاح غرفة رقمي' : 'Digital Room Key',
                    direction === 'rtl' ? 'طلب الطعام للغرف' : 'In-room Dining Ordering',
                    direction === 'rtl' ? 'دليل سياحي للمدينة' : 'City Travel Guide'
                ],
                icon: Phone,
                pricing: direction === 'rtl' ? 'من 3,200$' : 'From $3,200'
            },
            {
                title: direction === 'rtl' ? 'إدارة القنوات والتوزيع' : 'Channel & Distribution Mgmt',
                description: direction === 'rtl'
                    ? 'نظام مركزي لإدارة المخزون والأسعار عبر جميع منصات الحجز العالمية (OTA) في وقت واحد'
                    : 'Centralized system to manage inventory and rates across all global booking platforms (OTAs) simultaneously',
                features: [
                    direction === 'rtl' ? 'تحديث فوري للتوافر' : 'Real-time availability updates',
                    direction === 'rtl' ? 'توحيد الأسعار' : 'Rate parity management',
                    direction === 'rtl' ? 'منع الحجز المزدوج' : 'Overbooking prevention',
                    direction === 'rtl' ? 'تقارير أداء القنوات' : 'Channel performance reports'
                ],
                icon: Globe,
                pricing: direction === 'rtl' ? 'من 1,800$' : 'From $1,800'
            },
            {
                title: direction === 'rtl' ? 'التسويق الفندقي الرقمي' : 'Hotel Digital Marketing',
                description: direction === 'rtl'
                    ? 'استراتيجيات تسويق مخصصة للفنادق لزيادة الظهور وجذب الحجوزات المباشرة'
                    : 'Tailored marketing strategies for hotels to increase visibility and attract direct bookings',
                features: [
                    direction === 'rtl' ? 'تحسين محركات البحث SEO' : 'Hotel SEO',
                    direction === 'rtl' ? 'إعلانات جوجل والسوشيال' : 'Google & Social Ads',
                    direction === 'rtl' ? 'إدارة السمعة والتقييمات' : 'Reputation & Review Mgmt',
                    direction === 'rtl' ? 'تسويق عبر البريد الإلكتروني' : 'Email Marketing Automation'
                ],
                icon: Target,
                pricing: direction === 'rtl' ? 'من 1,500$' : 'From $1,500'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'منتجع البحر الأحمر' : 'Red Sea Resort',
                industry: direction === 'rtl' ? 'منتجعات سياحية' : 'Tourism Resorts',
                challenge: direction === 'rtl'
                    ? 'اعتماد كلي على وكالات السفر (OTAs) ودفع عمولات تصل إلى 20%، مع ضعف التواصل المباشر مع الضيوف'
                    : 'Total reliance on OTAs paying up to 20% commissions, with poor direct communication with guests',
                solution: direction === 'rtl'
                    ? 'تطوير موقع حجز مباشر متكامل وتطبيق للضيوف، مع حملة تسويق رقمية للترويج للحجز المباشر'
                    : 'Developed a fully integrated direct booking website and guest app, with a digital campaign promoting direct bookings',
                results: [
                    {
                        metric: direction === 'rtl' ? 'الحجوزات المباشرة' : 'Direct Bookings',
                        value: '+65%',
                        description: direction === 'rtl' ? 'زيادة في أول سنة' : 'Increase in first year'
                    },
                    {
                        metric: direction === 'rtl' ? 'توفير العمولات' : 'Commission Savings',
                        value: '$45K',
                        description: direction === 'rtl' ? 'سنوياً' : 'Annually'
                    },
                    {
                        metric: direction === 'rtl' ? 'متوسط الإنفاق' : 'Avg. Guest Spend',
                        value: '+20%',
                        description: direction === 'rtl' ? 'بسبب التطبيق' : 'Due to mobile app'
                    },
                    {
                        metric: direction === 'rtl' ? 'رضا الضيوف' : 'Guest Satisfaction',
                        value: '4.8/5',
                        description: direction === 'rtl' ? 'على TripAdvisor' : 'On TripAdvisor'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'الحل التقني من Pencil ساعدنا نستعيد السيطرة على حجوزاتنا. الضيوف يعشقون التطبيق، ونحن نعشق زيادة الأرباح.'
                        : "Pencil's tech solution helped us regain control of our bookings. Guests love the app, and we love the increased revenue.",
                    author: direction === 'rtl' ? 'سارة المنصوري' : 'Sarah Mansour',
                    position: direction === 'rtl' ? 'مديرة التسويق' : 'Marketing Director'
                }
            },
            {
                clientName: direction === 'rtl' ? 'شركة ترافيل ماستر' : 'Travel Master Co.',
                industry: direction === 'rtl' ? 'وكالات السفر' : 'Travel Agencies',
                challenge: direction === 'rtl'
                    ? 'عمليات يدوية بطيئة في إصدار التذاكر والحجوزات مما يؤدي لخدمة عملاء بطيئة'
                    : 'Slow manual processes in ticketing and booking leading to slow customer service',
                solution: direction === 'rtl'
                    ? 'بناء بوابة حجز B2B و B2C مخصصة مع أتمتة إصدار التذاكر والفواتير'
                    : 'Built a custom B2B & B2C booking portal with automated ticketing and invoicing',
                results: [
                    {
                        metric: direction === 'rtl' ? 'كفاءة التشغيل' : 'Operational Efficiency',
                        value: '3x',
                        description: direction === 'rtl' ? 'سرعة المعالجة' : 'Processing speed'
                    },
                    {
                        metric: direction === 'rtl' ? 'حجم المبيعات' : 'Sales Volume',
                        value: '+40%',
                        description: direction === 'rtl' ? 'نمو سنوي' : 'YOY Growth'
                    },
                    {
                        metric: direction === 'rtl' ? 'الأخطاء اليدوية' : 'Manual Errors',
                        value: '0%',
                        description: direction === 'rtl' ? 'تم القضاء عليها' : 'Eliminated'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$11 تريليون' : '$11 Trillion',
            growthRate: direction === 'rtl' ? '5.8% سنوياً' : '5.8% Annually',
            keyTrends: [
                direction === 'rtl' ? 'السياحة البيئية المستدامة' : 'Sustainable Eco-Tourism',
                direction === 'rtl' ? 'التخصيص بالذكاء الاصطناعي' : 'AI Personalization',
                direction === 'rtl' ? 'الواقع الافتراضي (VR) قبل السفر' : 'Try-before-you-buy VR',
                direction === 'rtl' ? 'سياحة العمل عن بعد' : 'Bleisure/Remote Work Tourism',
                direction === 'rtl' ? 'المدفوعات اللاتلامسية' : 'Contactless Payments'
            ],
            whyDigital: direction === 'rtl'
                ? 'المسافر الحديث رقمي بامتياز. 80% من الحجوزات تتم عبر الإنترنت، و70% من المسافرين يفضلون استخدام التكنولوجيا للتحكم في إقامتهم. التواجد الرقمي القوي ليس رفاهية بل هو قلب العمل السياحي اليوم.'
                : 'The modern traveler is digitally native. 80% of bookings happen online, and 70% of travelers prefer using tech to control their stay. A strong digital presence is not a luxury, it is the heart of tourism business today.'
        },

        technologies: [
            { name: 'Booking Engines', category: direction === 'rtl' ? 'حجز' : 'Booking', icon: Calendar },
            { name: 'Channel Manager', category: direction === 'rtl' ? 'توزيع' : 'Distribution', icon: Globe },
            { name: 'Mobile Apps', category: direction === 'rtl' ? 'موبايل' : 'Mobile', icon: Phone },
            { name: 'CRM', category: direction === 'rtl' ? 'عملاء' : 'CRM', icon: Users },
            { name: 'Virtual Tours', category: direction === 'rtl' ? 'واقع افتراضي' : 'VR', icon: Map },
            { name: 'Payment Gateway', category: direction === 'rtl' ? 'مدفوعات' : 'Payments', icon: Lock },
            { name: 'AI Chatbots', category: direction === 'rtl' ? 'دعم آلي' : 'AI Support', icon: MessageCircle },
            { name: 'Cloud PMS', category: direction === 'rtl' ? 'إدارة' : 'Mgmt', icon: Cloud }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل يمكن ربط النظام مع بوكينج واكسبيديا؟' : 'Can integration be done with Booking.com & Expedia?',
                answer: direction === 'rtl'
                    ? 'نعم، نستخدم Channel Manager معتمد يربط مخزون غرفك وأسعارك مع أكثر من 100 منصة عالمية بما فيها Booking.com و Expedia و Airbnb في الوقت الفعلي.'
                    : 'Yes, we use a certified Channel Manager that connects your room inventory and rates with over 100 global platforms including Booking.com, Expedia, and Airbnb in real-time.'
            },
            {
                question: direction === 'rtl' ? 'هل يدعم النظام الدفع بالعملات المختلفة؟' : 'Does the system support multi-currency payments?',
                answer: direction === 'rtl'
                    ? 'بالتأكيد، تدعم أنظمتنا الدفع بأكثر من 130 عملة، مع إمكانية عرض الأسعار بعملة الضيف المحلية لتحسين تجربة المستخدم.'
                    : 'Absolutely, our systems support payments in over 130 currencies, with the ability to display prices in the guest\'s local currency to improve user experience.'
            },
            {
                question: direction === 'rtl' ? 'هل التطبيق يعمل على آيفون وأندرويد؟' : 'Does the app work on iPhone and Android?',
                answer: direction === 'rtl'
                    ? 'نعم، نطور تطبيقات Native أو Cross-platform تعمل بكفاءة عالية على كلا النظامين iOS و Android لضمان وصولك لكل ضيوفك.'
                    : 'Yes, we develop Native or Cross-platform apps that work efficiently on both iOS and Android to ensure you reach all your guests.'
            },
            {
                question: direction === 'rtl' ? 'كم يستغرق بناء موقع حجز مباشر؟' : 'How long to build a direct booking website?',
                answer: direction === 'rtl'
                    ? 'عادة ما يستغرق المشروع من 4 إلى 8 أسابيع حسب حجم الفندق والمتطلبات الخاصة والتكاملات المطلوبة.'
                    : 'Typically, the project takes 4 to 8 weeks depending on the hotel size, specific requirements, and needed integrations.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'جاهز لمضاعفة حجوزاتك؟' : 'Ready to Double Your Bookings?',
            description: direction === 'rtl'
                ? 'تواصل معنا لتكتشف كيف نساعد الفنادق والشركات السياحية على النمو في العصر الرقمي'
                : 'Contact us to discover how we help hotels and tourism companies grow in the digital age',
            primaryButton: direction === 'rtl' ? 'احجز استشارة مجانية' : 'Book Free Consultation',
            secondaryButton: direction === 'rtl' ? 'عرض توضيحي للنظام' : 'Request System Demo',
            urgency: direction === 'rtl' ? '⚡ موسم السياحة قادم: احصل على خصم 15% على الباقات السنوية' : '⚡ High Season is Coming: Get 15% off annual packages'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900 dark:to-blue-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-blue-400/20 to-teal-400/20 dark:from-teal-500/30 dark:via-blue-500/30 dark:to-teal-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                            >
                                {direction === 'rtl' ? 'المجالات' : 'Fields'}
                            </button>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 dark:text-white font-semibold">{fieldData.title}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left: Text Content */}
                            <div className={`${direction === 'rtl' ? 'lg:order-2 text-right' : 'text-left'}`}>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                                    <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'وجهات عالمية' : 'Global Destinations'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">سياحية</span> ذكية ومبتكرة
                                        </>
                                    ) : (
                                        <>
                                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Tourism</span> Solutions
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                        <span>{fieldData.contact.primaryButton}</span>
                                        <ArrowLeft className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                                    </button>
                                    <button className="px-8 py-3 bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm shadow-sm">
                                        {fieldData.contact.secondaryButton}
                                    </button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="mt-6 flex flex-wrap items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.satisfaction} {direction === 'rtl' ? 'رضا العملاء' : 'Satisfaction'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.projects} {direction === 'rtl' ? 'مشروع' : 'Projects'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Stats Cards */}
                            <div className={`${direction === 'rtl' ? 'lg:order-1' : ''}`}>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(fieldData.stats).map(([key, value], index) => (
                                        <div
                                            key={key}
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-teal-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-600 to-blue-600 mb-2">
                                                    {value}
                                                </div>
                                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                                    {direction === 'rtl' ?
                                                        key === 'projects' ? 'مشاريع' :
                                                            key === 'clients' ? 'عملاء' :
                                                                key === 'experience' ? 'خبرة' : 'رضا' :
                                                        key.charAt(0).toUpperCase() + key.slice(1)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                    </div>
                </section>

                {/* SECTION 2: Why Choose Us */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'مميزاتنا' : 'Why Choose Us'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {fieldData.whyChooseUs.title}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {fieldData.whyChooseUs.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-teal-500/5 hover:shadow-teal-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Our Process */}
                <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100 dark:from-gray-800 dark:via-teal-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Services Detailed */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-teal-900/5 hover:shadow-teal-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                                        </div>
                                        {service.pricing && (
                                            <span className="px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold rounded-full">
                                                {service.pricing}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-3 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                                                <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                                                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Technologies */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">{tech.name}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tech.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 6: Case Studies */}
                <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'قصص نجاح' : 'Success Stories'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'نتائج حقيقية لعملائنا' : 'Real Results for Our Clients'}
                            </h2>
                        </div>

                        <div className="space-y-12">
                            {fieldData.caseStudies.map((study, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                                    <div className="grid md:grid-cols-2">
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-teal-900 to-blue-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-teal-300">
                                                    <Building2 className="w-5 h-5" />
                                                    <span className="font-semibold tracking-wide uppercase text-sm">{study.industry}</span>
                                                </div>
                                                <h3 className="text-3xl font-bold mb-4">{study.clientName}</h3>
                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-2">
                                                            {direction === 'rtl' ? 'التحدي' : 'The Challenge'}
                                                        </h4>
                                                        <p className="text-lg leading-relaxed">{study.challenge}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-teal-300 uppercase tracking-wider mb-2">
                                                            {direction === 'rtl' ? 'الحل' : 'The Solution'}
                                                        </h4>
                                                        <p className="text-lg leading-relaxed text-white/90">{study.solution}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 md:p-12 bg-white dark:bg-gray-800 flex flex-col justify-center">
                                            <div className="grid grid-cols-2 gap-8 mb-8">
                                                {study.results.map((result, rIndex) => (
                                                    <div key={rIndex}>
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 mb-1">
                                                            {result.value}
                                                        </div>
                                                        <div className="font-semibold text-gray-900 dark:text-white mb-1">{result.metric}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">{result.description}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {study.testimonial && (
                                                <div className="mt-auto pt-8 border-t border-gray-100 dark:border-gray-700">
                                                    <div className="flex gap-1 mb-4">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                        ))}
                                                    </div>
                                                    <p className="italic text-gray-600 dark:text-gray-300 mb-4 text-lg">"{study.testimonial.quote}"</p>
                                                    <div>
                                                        <div className="font-bold text-gray-900 dark:text-white">{study.testimonial.author}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">{study.testimonial.position}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Industry Insights */}
                <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-teal-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-teal-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-teal-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-teal-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-teal-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-lg">{trend}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: FAQ */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {fieldData.faq.map((item, index) => (
                                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                                    <button
                                        className="w-full flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    >
                                        <span className={`font-semibold text-lg text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                            {item.question}
                                        </span>
                                        {openFaqIndex === index ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>
                                    {openFaqIndex === index && (
                                        <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                                            <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 9: Final CTA */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-teal-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-teal-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                                        {fieldData.contact.primaryButton}
                                    </button>
                                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                        {fieldData.contact.secondaryButton}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer theme={theme} direction={direction} t={t} />
            </div>
        </div>
    );
}
