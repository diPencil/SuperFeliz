import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, Activity, Trophy, HeartPulse, Dumbbell, Eye, UserCheck
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface SportsFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function SportsFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: SportsFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال الرياضي' : 'Sports & Fitness',
        description: direction === 'rtl'
            ? 'حلول رقمية للأندية الرياضية والصالات (Gyms) لإدارة الاشتراكات، الحجوزات، ومتابعة أداء الرياضيين بدقة متناهية.'
            : 'Digital solutions for sports clubs and Gyms to manage memberships, bookings, and track athlete performance with high precision.',
        stats: {
            projects: '60+',
            clients: '35+',
            experience: '6+ Years',
            satisfaction: '97%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول الرياضية؟' : 'Why Choose Pencil for Sports Solutions?',
            features: [
                {
                    icon: Activity,
                    title: direction === 'rtl' ? 'تتبع الأداء' : 'Performance Tracking',
                    description: direction === 'rtl'
                        ? 'أنظمة متقدمة لتحليل بيانات اللاعبين (IoT) وتقديم تقارير دقيقة للمدربين'
                        : 'Advanced systems to analyze player data (IoT) and provide accurate reports to coaches'
                },
                {
                    icon: Calendar,
                    title: direction === 'rtl' ? 'حجوزات ذكية' : 'Smart Booking',
                    description: direction === 'rtl'
                        ? 'نظام حجز ملاعب وحصص تدريبية يمنع التضارب ويسهل الدفع الإلكتروني'
                        : 'Booking system for courts and training sessions preventing conflicts with easy online payment'
                },
                {
                    icon: Users,
                    title: direction === 'rtl' ? 'بناء المجتمع' : 'Community Building',
                    description: direction === 'rtl'
                        ? 'تطبيقات اجتماعية تربط الأعضاء ببعضهم وتزيد من ولائهم للنادي'
                        : 'Social apps connecting members and increasing their loyalty to the club'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'تحليل المنشأة' : 'Facility Analysis',
                description: direction === 'rtl'
                    ? 'ندرس احتياجات النادي أو الصالة الرياضية وتدفق الأعضاء'
                    : 'We study needs of the club or gym and member flow',
                icon: Building2
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم تجربة العضو' : 'Member UX Design',
                description: direction === 'rtl'
                    ? 'نصمم رحلة رقمية تبدأ من التسجيل وحتى تجديد الاشتراك بسلاسة'
                    : 'We design a digital journey starting from registration to renewal smoothly',
                icon: Sparkles
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'تطوير النظام' : 'System Development',
                description: direction === 'rtl'
                    ? 'نبرمج التطبيقات ونربطها بالبوابات الإلكترونية وأجهزة اللياقة'
                    : 'We code apps and integrate them with e-gates and fitness equipment',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'التشغيل التجريبي' : 'Pilot Run',
                description: direction === 'rtl'
                    ? 'نجرب النظام مع مجموعة مختارة من المدربين والأعضاء'
                    : 'We test system with a select group of coaches and members',
                icon: Activity
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'الإطلاق والتسويق' : 'Launch & Marketing',
                description: direction === 'rtl'
                    ? 'نطلق التطبيق ونساعد في الترويج له لزيادة التحميلات'
                    : 'We launch the app and help promote it to increase downloads',
                icon: Rocket
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'برنامج إدارة الصالات (Gym Management)' : 'Gym Management Software',
                description: direction === 'rtl'
                    ? 'نظام شامل لإدارة العضويات، المبيعات، المدربين، والتحكم في بوابات الدخول (Access Control)'
                    : 'Comprehensive system for managing memberships, sales, trainers, and Access Control gates',
                features: [
                    direction === 'rtl' ? 'تجديد اشتراكات تلقائي' : 'Auto-Renewal',
                    direction === 'rtl' ? 'تطبيق للمدربين' : 'Trainers App',
                    direction === 'rtl' ? 'تقارير مالية يومية' : 'Daily Financial Reports',
                    direction === 'rtl' ? 'ربط مع البوابات (Turnstiles)' : 'Turnstile Integration'
                ],
                icon: Dumbbell,
                pricing: direction === 'rtl' ? 'من 2,500$' : 'From $2,500'
            },
            {
                title: direction === 'rtl' ? 'منصة الفعاليات الرياضية' : 'Sports Events Platform',
                description: direction === 'rtl'
                    ? 'موقع وتطبيق لبيع تذاكر المباريات والبطولات، مع نظام إدارة الحشود والدخول'
                    : 'Website and app for selling match and tournament tickets, with crowd and entry management system',
                features: [
                    direction === 'rtl' ? 'حجز مقاعد تفاعلي' : 'Interactive Seat Booking',
                    direction === 'rtl' ? 'تذاكر QR Code' : 'QR Code Tickets',
                    direction === 'rtl' ? 'بث مباشر للنتائج' : 'Live Score Streaming',
                    direction === 'rtl' ? 'إدارة المتطوعين' : 'Volunteers Mgmt'
                ],
                icon: Trophy,
                pricing: direction === 'rtl' ? 'من 5,000$' : 'From $5,000'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات اللياقة الشخصية' : 'Personal Fitness Apps',
                description: direction === 'rtl'
                    ? 'تطبيقات توفر جداول تمارين وتغذية مخصصة للمستخدمين، مع فيديوهات تعليمية ومتابعة التقدم'
                    : 'Apps providing custom workout and nutrition plans for users, with tutorial videos and progress tracking',
                features: [
                    direction === 'rtl' ? 'خطط تمارين مخصصة' : 'Custom Workout Plans',
                    direction === 'rtl' ? 'حاسبة سعرات حرارية' : 'Calorie Calculator',
                    direction === 'rtl' ? 'دردشة مع المدرب' : 'Chat with Coach',
                    direction === 'rtl' ? 'ربط مع Apple Health' : 'Apple Health Sync'
                ],
                icon: HeartPulse,
                pricing: direction === 'rtl' ? 'من 6,000$' : 'From $6,000'
            },
            {
                title: direction === 'rtl' ? 'نظام الأكاديميات الرياضية' : 'Sports Academy System',
                description: direction === 'rtl'
                    ? 'نظام لإدارة مدارس الكرة والألعاب المختلفة، تسجيل اللاعبين، تقييم المهارات، والتواصل مع أولياء الأمور'
                    : 'System to manage soccer schools and sports, player registration, skills assessment, and parent communication',
                features: [
                    direction === 'rtl' ? 'سجلات طبية للاعبين' : 'Player Medical Records',
                    direction === 'rtl' ? 'تقييم فني وبدني' : 'Technical & Physical Eval',
                    direction === 'rtl' ? 'إدارة الرحلات والمباريات' : 'Trips & Matches Mgmt',
                    direction === 'rtl' ? 'مدفوعات الأقساط' : 'Installment Payments'
                ],
                icon: Award,
                pricing: direction === 'rtl' ? 'من 4,000$' : 'From $4,000'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'سلسلة فتنس برو' : 'Fitness Pro Chain',
                industry: direction === 'rtl' ? 'أندية رياضية' : 'Fitness Clubs',
                challenge: direction === 'rtl'
                    ? 'طوابير طويلة عند الاستقبال لتجديد الاشتراكات ودخول الأعضاء'
                    : 'Long queues at reception for membership renewals and member entry',
                solution: direction === 'rtl'
                    ? 'تطوير تطبيق موبايل يتيح التجديد والدخول عبر الجوال (QR/NFC) دون الحاجة لموظف استقبال'
                    : 'Developed mobile app allowing renewal and entry via mobile (QR/NFC) bypassing reception',
                results: [
                    {
                        metric: direction === 'rtl' ? 'وقت الدخول' : 'Entry Time',
                        value: '3 sec',
                        description: direction === 'rtl' ? 'سرعة فائقة' : 'Super fast'
                    },
                    {
                        metric: direction === 'rtl' ? 'مبيعات الأونلاين' : 'Online Sales',
                        value: '75%',
                        description: direction === 'rtl' ? 'من إجمالي الاشتراكات' : 'Of total subs'
                    },
                    {
                        metric: direction === 'rtl' ? 'رضا الأعضاء' : 'Member CSAT',
                        value: '4.8/5',
                        description: direction === 'rtl' ? 'تجربة سلسة' : 'Smooth experience'
                    },
                    {
                        metric: direction === 'rtl' ? 'التكاليف التشغيلية' : 'OpEx',
                        value: '-25%',
                        description: direction === 'rtl' ? 'تقليل الموظفين' : 'Staff reduction'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'النظام غير طريقة عملنا تماماً. أصبحنا نركز على تدريب الأعضاء بدلاً من الأعمال الورقية والإدارية.'
                        : "The system completely changed how we operate. We now focus on training members instead of paperwork and admin.",
                    author: direction === 'rtl' ? 'كابتن أحمد' : 'Captain Ahmed',
                    position: direction === 'rtl' ? 'مدير العمليات' : 'Operations Manager'
                }
            },
            {
                clientName: direction === 'rtl' ? 'دوري المدارس' : 'Schools League',
                industry: direction === 'rtl' ? 'تنظيم فعاليات' : 'Event Organizing',
                challenge: direction === 'rtl'
                    ? 'صعوبة في إدارة جداول المباريات ونتائج آلاف الطلاب المشاركين'
                    : 'Difficulty managing match schedules and results for thousands of participating students',
                solution: direction === 'rtl'
                    ? 'منصة سحابية تدير التسجيل، القرعة الإلكترونية، وتحدث النتائج والجداول فورياً'
                    : 'Cloud platform managing registration, automated draw, and updating results/tables instantly',
                results: [
                    {
                        metric: direction === 'rtl' ? 'المشاركين' : 'Participants',
                        value: '10,000+',
                        description: direction === 'rtl' ? 'طالب' : 'Student'
                    },
                    {
                        metric: direction === 'rtl' ? 'المباريات' : 'Matches',
                        value: '500+',
                        description: direction === 'rtl' ? 'مدارة بنجاح' : 'Managed successfully'
                    },
                    {
                        metric: direction === 'rtl' ? 'الأخطاء' : 'Errors',
                        value: '0%',
                        description: direction === 'rtl' ? 'دقة تامة' : 'Full accuracy'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$180 مليار' : '$180 Billion',
            growthRate: direction === 'rtl' ? '30% سنوياً' : '30% Annually',
            keyTrends: [
                direction === 'rtl' ? 'اللياقة المتصلة (Connected Fitness)' : 'Connected Fitness',
                direction === 'rtl' ? 'الأجهزة القابلة للارتداء' : 'Wearables',
                direction === 'rtl' ? 'التدريب عن بعد (Virtual Coaching)' : 'Virtual Coaching',
                direction === 'rtl' ? 'تحليل البيانات الرياضية' : 'Sports Analytics',
                direction === 'rtl' ? 'الرياضات الإلكترونية' : 'eSports'
            ],
            whyDigital: direction === 'rtl'
                ? 'الوعي الصحي يزداد والناس يبحثون عن تجارب رياضية شخصية ومريحة. التقنية هي الوسيلة الوحيدة لتقديم تجربة لياقة مخصصة لكل فرد على نطاق واسع.'
                : 'Health awareness is rising; people seek personalized, convenient sports experiences. Tech is the only way to deliver custom fitness at scale.'
        },

        technologies: [
            { name: 'IoT Sensors', category: direction === 'rtl' ? 'حساسات' : 'Sensors', icon: Activity },
            { name: 'Computer Vision', category: direction === 'rtl' ? 'رؤية' : 'Vision', icon: Eye },
            { name: 'Big Data', category: direction === 'rtl' ? 'بيانات' : 'Data', icon: Database },
            { name: 'Apple HealthKit', category: direction === 'rtl' ? 'صحة' : 'Health', icon: HeartPulse },
            { name: 'RFID/NFC', category: direction === 'rtl' ? 'دخول' : 'Access', icon: UserCheck },
            { name: 'Real-time DB', category: direction === 'rtl' ? 'فوري' : 'Real-time', icon: Zap },
            { name: 'Mobile Apps', category: direction === 'rtl' ? 'تطبيقات' : 'Apps', icon: Phone },
            { name: 'Cloud Infra', category: direction === 'rtl' ? 'سحابي' : 'Cloud', icon: Cloud }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل يعمل تطبيقكم مع ساعات أبل وغارمين؟' : 'Does app work with Apple/Garmin watches?',
                answer: direction === 'rtl'
                    ? 'نعم، تطبيقاتنا تدعم التكامل الكامل (API Integration) مع Apple Health, Google Fit, Garmin, و Fitbit لسحب البيانات الصحية.'
                    : 'Yes, our apps support full API Integration with Apple Health, Google Fit, Garmin, and Fitbit to sync health data.'
            },
            {
                question: direction === 'rtl' ? 'هل النظام يدعم تعدد الفروع؟' : 'Does system support multi-branch?',
                answer: direction === 'rtl'
                    ? 'بالتأكيد، نظامنا مبني ليدير سلاسل الأندية الكبيرة، حيث يمكنك متابعة أداء كل فرع على حدة أو المجموعة كاملة من لوحة تحكم واحدة.'
                    : 'Absolutely, our system is built to manage large fitness chains, allowing you to track each branch or the whole group from one dashboard.'
            },
            {
                question: direction === 'rtl' ? 'كيف يتم التحكم في البوابات؟' : 'How is gate control managed?',
                answer: direction === 'rtl'
                    ? 'نربط برنامجنا مع أجهزة التحكم (Controllers) الخاصة بالبوابات عبر الشبكة، مما يسمح بفتح البوابة تلقائياً عند مسح كود العضوية الصالح.'
                    : 'We integrate our software with gate Controllers via network, allowing auto-opening upon scanning a valid membership code.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن بيع مكملات غذائية عبر التطبيق؟' : 'Can we sell supplements via app?',
                answer: direction === 'rtl'
                    ? 'نعم، يتوفر متجر إلكتروني مدمج (Included E-store) داخل التطبيق لبيع المنتجات، المكملات، والملابس الرياضية.'
                    : 'Yes, a built-in E-store is included in the app to sell products, supplements, and sports gear.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'ارفع مستوى ناديك' : 'Level Up Your Club',
            description: direction === 'rtl'
                ? 'احصل على النظام الذي يثق به كبار المدربين وأصحاب الأندية لتحقيق النمو والنجاح'
                : 'Get the system trusted by top coaches and club owners to achieve growth and success',
            primaryButton: direction === 'rtl' ? 'طلب ديمو للنادي' : 'Request Club Demo',
            secondaryButton: direction === 'rtl' ? 'تواصل معنا' : 'Contact Us',
            urgency: direction === 'rtl' ? '⚡ للأندية الجديدة: عرض "الافتتاح" يشمل تركيب البوابات مجاناً' : '⚡ For New Clubs: "Opening" offer includes free gate installation'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-gray-900 dark:via-red-900 dark:to-rose-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-rose-400/20 to-red-400/20 dark:from-red-500/30 dark:via-rose-500/30 dark:to-red-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-red-400/10 dark:bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-rose-400/10 dark:bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/5 dark:bg-pink-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Activity className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                                    <span className="text-red-700 dark:text-red-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'رياضة ولياقة' : 'Sports & Fitness'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">رياضية</span> ذكية للأبطال
                                        </>
                                    ) : (
                                        <>
                                            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Sports</span> Solutions for Champions
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-red-600 dark:text-red-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-red-600 dark:text-red-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-red-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-rose-600 mb-2">
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
                            <span className="text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-red-500/5 hover:shadow-red-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-red-600 dark:text-red-400" />
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
                            <span className="text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-100 via-red-200 to-red-100 dark:from-gray-800 dark:via-red-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-red-600 dark:text-red-400 mx-auto mb-4" />
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
                            <span className="text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-red-900/5 hover:shadow-red-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
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
                                                <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
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
                            <span className="text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-red-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-red-600 dark:text-red-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-red-800 to-rose-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-red-300">
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
                                                        <h4 className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600 mb-1">
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
                <section className="py-20 bg-red-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-red-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-red-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-red-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-red-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-red-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-red-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-red-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-red-600 to-rose-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-red-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
