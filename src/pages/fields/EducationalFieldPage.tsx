import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, BookOpen, GraduationCap, MonitorPlay, FileText, Trophy, Eye
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface EducationalFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function EducationalFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: EducationalFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال التعليمي' : 'Educational Field',
        description: direction === 'rtl'
            ? 'أنظمة إدارة تعلم (LMS) ومنصات تعليمية تفاعلية تمكن المدارس والجامعات من تقديم تجربة تعليمية متميزة عن بعد وحضورياً.'
            : 'Learning Management Systems (LMS) and interactive educational platforms enabling schools and universities to deliver exceptional remote and in-person learning experiences.',
        stats: {
            projects: '150+',
            clients: '45+',
            experience: '8+ Years',
            satisfaction: '95%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول التعليمية؟' : 'Why Choose Pencil for Educational Solutions?',
            features: [
                {
                    icon: MonitorPlay,
                    title: direction === 'rtl' ? 'تفاعلية عالية' : 'High Interactivity',
                    description: direction === 'rtl'
                        ? 'أدوات تفاعلية تجعل التعلم ممتعاً وتزيد من اندماج الطلاب ومشاركتهم'
                        : 'Interactive tools making learning fun and increasing student engagement and participation'
                },
                {
                    icon: Users,
                    title: direction === 'rtl' ? 'دعم أعداد ضخمة' : 'High Scalability',
                    description: direction === 'rtl'
                        ? 'بنية تحتية قوية تتحمل آلاف الطلاب المتصلين في نفس الوقت خاصة أوقات الامتحانات'
                        : 'Robust infrastructure handling thousands of concurrent students especially during exams'
                },
                {
                    icon: BookOpen,
                    title: direction === 'rtl' ? 'محتوى تعليمي ذكي' : 'Smart Content',
                    description: direction === 'rtl'
                        ? 'نظم تدعم جميع أنواع المحتوى الرقمي من فيديو، ملفات تفاعلية، واختبارات ذكية'
                        : 'Systems supporting all digital content types including video, interactive files, and smart quizzes'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'تحليل الاحتياجات' : 'Needs Assessment',
                description: direction === 'rtl'
                    ? 'نجلس مع الكادر التعليمي والإداري لفهم متطلبات العملية التعليمية بدقة'
                    : 'We sit with academic and admin staff to precisely understand educational process requirements',
                icon: Target
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم الرحلة التعليمية' : 'Learning Journey Design',
                description: direction === 'rtl'
                    ? 'نصمم تجربة مستخدم تناسب عمر الطلاب ومستوى مهاراتهم التقنية'
                    : 'We design a user experience suitable for students\' age and technical skill levels',
                icon: Sparkles
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'تطوير المنصة' : 'Platform Development',
                description: direction === 'rtl'
                    ? 'نبني المنصة التعليمية بأحدث تقنيات الويب والموبايل لضمان السهولة والسرعة'
                    : 'We build the educational platform with latest web and mobile tech ensuring ease and speed',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'التوجيه والإطلاق' : 'Onboarding & Launch',
                description: direction === 'rtl'
                    ? 'نساعد في إدخال البيانات وتدريب المعلمين والطلاب لبداية قوية'
                    : 'We assist in data entry and train teachers and students for a strong start',
                icon: Rocket
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'المتابعة والتطوير' : 'Monitoring & Growth',
                description: direction === 'rtl'
                    ? 'نراقب الاستخدام ونضيف مميزات جديدة بناء على تغذية راجعة من الميدان'
                    : 'We monitor usage and add new features based on feedback from the field',
                icon: TrendingUp
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'نظام إدارة التعلم (LMS)' : 'Learning Management System (LMS)',
                description: direction === 'rtl'
                    ? 'منصة متكاملة لإدارة العملية التعليمية، الفصول الافتراضية، الواجبات، والاختبارات'
                    : 'Integrated platform for managing the educational process, virtual classrooms, assignments, and exams',
                features: [
                    direction === 'rtl' ? 'فصول افتراضية مدمجة' : 'Integrated Virtual Classrooms',
                    direction === 'rtl' ? 'بنوك أسئلة ذكية' : 'Smart Question Banks',
                    direction === 'rtl' ? 'تتبع تقدم الطالب' : 'Student Progress Tracking',
                    direction === 'rtl' ? 'تطبيق جوال للمعلم والطالب' : 'Teacher & Student Apps'
                ],
                icon: BookOpen,
                pricing: direction === 'rtl' ? 'من 3,500$' : 'From $3,500'
            },
            {
                title: direction === 'rtl' ? 'نظام معلومات الطلاب (SIS)' : 'Student Information System (SIS)',
                description: direction === 'rtl'
                    ? 'قاعدة بيانات مركزية لإدارة بيانات الطلاب، القبول والتسجيل، الحضور، والدرجات'
                    : 'Central database for managing student data, admissions, attendance, and grades',
                features: [
                    direction === 'rtl' ? 'بوابة قبول إلكتروني' : 'Online Admission Portal',
                    direction === 'rtl' ? 'إدارة الرسوم والمدفوعات' : 'Fees & Payments Mgmt',
                    direction === 'rtl' ? 'تقارير وشهادات آلية' : 'Auto Reports & Certificates',
                    direction === 'rtl' ? 'تواصل مع أولياء الأمور' : 'Parents Communication'
                ],
                icon: Users,
                pricing: direction === 'rtl' ? 'من 4,000$' : 'From $4,000'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات التعليم الذاتي' : 'E-Learning Apps',
                description: direction === 'rtl'
                    ? 'تطبيقات تعليمية (EdTech) تقدم دورات مسجلة أو تفاعلية للجمهور العام بأسلوب شيق'
                    : 'Educational apps (EdTech) offering recorded or interactive courses to the public in an engaging way',
                features: [
                    direction === 'rtl' ? 'بيع الدورات أونلاين' : 'Sell Courses Online',
                    direction === 'rtl' ? 'مشاهدة أوفلاين' : 'Offline Viewing',
                    direction === 'rtl' ? 'اختبارات وشهادات إتمام' : 'Quizzes & Completion Certs',
                    direction === 'rtl' ? 'نظام اشتراكات عضوية' : 'Membership Subscriptions'
                ],
                icon: MonitorPlay,
                pricing: direction === 'rtl' ? 'من 2,500$' : 'From $2,500'
            },
            {
                title: direction === 'rtl' ? 'أتمتة المدارس والجامعات' : 'School & Uni Automation',
                description: direction === 'rtl'
                    ? 'حلول لأتمتة العمليات الإدارية، المكتبات، النقل المدرسي، والمقاصف'
                    : 'Solutions to automate admin processes, libraries, school transport, and canteens',
                features: [
                    direction === 'rtl' ? 'إدارة المكتبات الرقمية' : 'Library Mgmt',
                    direction === 'rtl' ? 'تتبع الحافلات المدرسية' : 'Bus Tracking',
                    direction === 'rtl' ? 'محفظة المقصف الإلكترونية' : 'E-Wallet for Canteen',
                    direction === 'rtl' ? 'نظام البصمة والحضور' : 'Biometric Attendance'
                ],
                icon: Building2,
                pricing: direction === 'rtl' ? 'من 3,000$' : 'From $3,000'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'مدارس المستقبل الأهلية' : 'Future Private Schools',
                industry: direction === 'rtl' ? 'تعليم عام' : 'K-12 Education',
                challenge: direction === 'rtl'
                    ? 'صعوبة التواصل مع أولياء الأمور وفوضى في توزيع الواجبات والدرجات الورقية'
                    : 'Difficulty communicating with parents and chaos in distributing paper assignments and grades',
                solution: direction === 'rtl'
                    ? 'تطوير تطبيق مدرسي شامل يربط الإدارة، المعلم، الطالب، وولي الأمر في حلقة واحدة'
                    : 'Developed a comprehensive school app connecting admin, teacher, student, and parent in one loop',
                results: [
                    {
                        metric: direction === 'rtl' ? 'مشاركة أولياء الأمور' : 'Parent Engagement',
                        value: '+85%',
                        description: direction === 'rtl' ? 'زيادة في التفاعل' : 'Increase in interaction'
                    },
                    {
                        metric: direction === 'rtl' ? 'تسليم الواجبات' : 'Assignment Submission',
                        value: '98%',
                        description: direction === 'rtl' ? 'التزام الطلاب' : 'Student compliance'
                    },
                    {
                        metric: direction === 'rtl' ? 'العبء الإداري' : 'Admin Workload',
                        value: '-40%',
                        description: direction === 'rtl' ? 'توفير وقت المعلم' : 'Teacher time saved'
                    },
                    {
                        metric: direction === 'rtl' ? 'التحصيل الدراسي' : 'Academic Performance',
                        value: '+15%',
                        description: direction === 'rtl' ? 'تحسن المتوسط' : 'Average improvement'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'التطبيق أصبح قلب المدرسة النابض. لا يمكننا تخيل العودة للنظام الورقي القديم. لقد نقلنا لمصاف المدارس الذكية.'
                        : "The app became the beating heart of the school. We can't imagine going back to paper. It elevated us to Smart School status.",
                    author: direction === 'rtl' ? 'أ. ناصر العمري' : 'Mr. Nasser Al-Omari',
                    position: direction === 'rtl' ? 'المدير الأكاديمي' : 'Academic Director'
                }
            },
            {
                clientName: direction === 'rtl' ? 'أكاديمية تدريب' : 'Tadreeb Academy',
                industry: direction === 'rtl' ? 'تدريب مهني' : 'Vocational Training',
                challenge: direction === 'rtl'
                    ? 'محدودية القاعات الدراسية كانت تمنع قبول أعداد أكبر من المتدربين'
                    : 'Limited classroom space prevented accepting more trainees',
                solution: direction === 'rtl'
                    ? 'إطلاق منصة تدريب هجين (Hybrid) تتيح حضور المحاضرات أونلاين وأداء الاختبارات'
                    : 'Launched a Hybrid training platform allowing online attendance and exams',
                results: [
                    {
                        metric: direction === 'rtl' ? 'الطاقة الاستيعابية' : 'Capacity',
                        value: '4x',
                        description: direction === 'rtl' ? 'تضاعفت 4 مرات' : 'Quadrupled'
                    },
                    {
                        metric: direction === 'rtl' ? 'تكلفة الطالب' : 'Cost per Student',
                        value: '-35%',
                        description: direction === 'rtl' ? 'توفير التكاليف' : 'Cost saving'
                    },
                    {
                        metric: direction === 'rtl' ? 'الوصول الجغرافي' : 'Geo Reach',
                        value: '100%',
                        description: direction === 'rtl' ? 'تغطية المملكة' : 'Nationwide coverage'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$404 مليار' : '$404 Billion',
            growthRate: direction === 'rtl' ? '16.3% سنوياً' : '16.3% Annually',
            keyTrends: [
                direction === 'rtl' ? 'التعلم المصغر (Microlearning)' : 'Microlearning',
                direction === 'rtl' ? 'اللعب في التعليم (Gamification)' : 'Gamification',
                direction === 'rtl' ? 'الواقع الافتراضي والمعزز' : 'AR/VR in Education',
                direction === 'rtl' ? 'التعلم التكيفي بالذكاء الاصطناعي' : 'AI Adaptive Learning',
                direction === 'rtl' ? 'الشهادات الرقمية (Blockchain)' : 'Blockchain Credentials'
            ],
            whyDigital: direction === 'rtl'
                ? 'التعليم التقليدي يتغير. الجيل الجديد (Gen Z & Alpha) يفضلون التعلم التفاعلي والمرن. المؤسسات التعليمية التي توفر تجربة رقمية غنية هي التي ستجذب وترضي طلاب المستقبل.'
                : 'Traditional education is changing. New generations (Gen Z & Alpha) prefer interactive and flexible learning. Institutions providing rich digital experiences will attract and satisfy future students.'
        },

        technologies: [
            { name: 'LTI Standards', category: direction === 'rtl' ? 'معايير' : 'Standards', icon: Layers },
            { name: 'Video Streaming', category: direction === 'rtl' ? 'فيديو' : 'Video', icon: MonitorPlay },
            { name: 'Cloud LMS', category: direction === 'rtl' ? 'أنظمة' : 'LMS', icon: Cloud },
            { name: 'AR Visualization', category: direction === 'rtl' ? 'واقع معزز' : 'AR', icon: Layers },
            { name: 'Mobile Learning', category: direction === 'rtl' ? 'موبايل' : 'Mobile', icon: Phone },
            { name: 'Analytics', category: direction === 'rtl' ? 'تحليلات' : 'Analytics', icon: BarChart3 },
            { name: 'Gamification', category: direction === 'rtl' ? 'تعهيد' : 'Gamification', icon: Trophy },
            { name: 'Proctoring AI', category: direction === 'rtl' ? 'مراقبة' : 'Proctoring', icon: Eye }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل يدعم النظام الفصول الافتراضية (Zoom/Teams)؟' : 'Does system support virtual classrooms (Zoom/Teams)?',
                answer: direction === 'rtl'
                    ? 'نعم، أنظمتنا تتكامل بسلاسة مع Zoom, Microsoft Teams, و Google Meet لإنشاء وإدارة الفصول الافتراضية من داخل المنصة مباشرة.'
                    : 'Yes, our systems integrate seamlessly with Zoom, Microsoft Teams, and Google Meet to create and manage virtual classrooms directly from the platform.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن تخصيص النظام ليتناسب مع هويتنا؟' : 'Can system be customized to our branding?',
                answer: direction === 'rtl'
                    ? 'بالتأكيد (White-label). نقوم بتخصيص الواجهة، الألوان، والشعارات لتعكس هوية مؤسستك التعليمية بالكامل.'
                    : 'Absolutely (White-label). We customize interface, colors, and logos to fully reflect your educational institution\'s branding.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن إجراء اختبارات نهائية عن بعد؟' : 'Can final exams be conducted remotely?',
                answer: direction === 'rtl'
                    ? 'نعم، نوفر أنظمة اختبارات آمنة تدعم مراقبة المتصفح (Browser Lockdown) والذكاء الاصطناعي لمنع الغش وضمان نزاهة الاختبار.'
                    : 'Yes, we provide secure exam systems supporting Browser Lockdown and AI proctoring to prevent cheating and ensure exam integrity.'
            },
            {
                question: direction === 'rtl' ? 'هل التطبيق يعمل بدون إنترنت؟' : 'Does the app work offline?',
                answer: direction === 'rtl'
                    ? 'ندعم خاصية "العمل دون اتصال" للمحتوى، حيث يمكن للطالب تحميل الدروس ومشاهدتها لاحقاً، وتتم مزامنة التقدم عند عودة الاتصال.'
                    : 'We support "Offline Mode" for content, where students can download lessons to watch later, and progress syncs when back online.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'مستقبل التعليم يبدأ هنا' : 'The Future of Education Starts Here',
            description: direction === 'rtl'
                ? 'دعنا نساعدك في بناء بيئة تعليمية ذكية تلهم طلابك وتسهل عمل معلميك'
                : 'Let us help you build a smart educational environment that inspires your students and eases your teachers\' work',
            primaryButton: direction === 'rtl' ? 'احجز استشارة تقنية' : 'Book Tech Consultation',
            secondaryButton: direction === 'rtl' ? 'طلب عرض للمدارس' : 'Request School Proposal',
            urgency: direction === 'rtl' ? '⚡ للمدارس: باقة "العودة للمدارس" بخصم 20% لفترة محدودة' : '⚡ For Schools: "Back to School" package with 20% off limited time'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-gray-900 dark:via-orange-900 dark:to-amber-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-orange-400/20 dark:from-orange-500/30 dark:via-yellow-500/30 dark:to-orange-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-orange-400/10 dark:bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-400/10 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 dark:bg-amber-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <GraduationCap className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                                    <span className="text-orange-700 dark:text-orange-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'مستقبل التعليم' : 'Future of Education'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">تعليمية</span> تلهم الجيل القادم
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Educational</span> Solutions Inspiring Next Gen
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-orange-600 dark:text-orange-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-orange-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-600 mb-2">
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
                            <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-orange-500/5 hover:shadow-orange-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
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
                            <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 dark:from-gray-800 dark:via-orange-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-4" />
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
                            <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-orange-900/5 hover:shadow-orange-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
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
                                                <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
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
                            <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-orange-600 dark:text-orange-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-orange-900 to-amber-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-orange-300">
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
                                                        <h4 className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-1">
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
                <section className="py-20 bg-orange-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-orange-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-orange-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-orange-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-orange-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-orange-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-orange-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-orange-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
