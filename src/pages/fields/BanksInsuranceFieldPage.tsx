import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, Landmark, Wallet, Banknote, ShieldCheck, Archive, Fingerprint, Activity, Eye
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface BanksInsuranceFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function BanksInsuranceFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: BanksInsuranceFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'البنوك والتأمين' : 'Banks & Insurance',
        description: direction === 'rtl'
            ? 'حلول تقنية مالية (FinTech) آمنة وموثوقة للبنوك وشركات التأمين، تركز على أمن البيانات وتجربة العميل الرقمية.'
            : 'Secure and reliable FinTech solutions for banks and insurance companies, focusing on data security and digital customer experience.',
        stats: {
            projects: '70+',
            clients: '25+',
            experience: '10+ Years',
            satisfaction: '98%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول المالية؟' : 'Why Choose Pencil for Financial Solutions?',
            features: [
                {
                    icon: ShieldCheck,
                    title: direction === 'rtl' ? 'أمان سيبراني متقدم' : 'Advanced Cyber Security',
                    description: direction === 'rtl'
                        ? 'نطبق أحدث معايير التشفير والحماية (PCI-DSS, ISO 27001) لضمان سلامة الأموال والبيانات'
                        : 'We implement latest encryption and security standards (PCI-DSS, ISO 27001) to ensure safety of funds and data'
                },
                {
                    icon: Landmark,
                    title: direction === 'rtl' ? 'امتثال وتشريعات' : 'Regulatory Compliance',
                    description: direction === 'rtl'
                        ? 'حلولنا متوافقة تماماً مع لوائح البنك المركزي وهيئات سوق المال والتأمين'
                        : 'Our solutions are fully compliant with Central Bank and Capital Market Authority regulations'
                },
                {
                    icon: Zap,
                    title: direction === 'rtl' ? 'سرعة المعاملات' : 'Transaction Speed',
                    description: direction === 'rtl'
                        ? 'بنية تحتية تتحمل ملايين المعاملات في الثانية مع استجابة فورية (Low Latency)'
                        : 'Infrastructure handling millions of transactions per second with instant response (Low Latency)'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'تقييم المخاطر' : 'Risk Assessment',
                description: direction === 'rtl'
                    ? 'نحلل بيئة العمل لتحديد المخاطر الأمنية والتشغيلية ووضع خطط للتخفيف منها'
                    : 'We analyze environment to identify security and operational risks and plan mitigation',
                icon: Shield
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم الهيكلية الآمنة' : 'Secure Architecture',
                description: direction === 'rtl'
                    ? 'نبني هيكلية النظام على مبدأ "الأمان أولاً" مع طبقات حماية متعددة'
                    : 'We build system architecture on "Security First" principle with multiple protection layers',
                icon: Lock
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'التطوير والتكامل' : 'Dev & Integration',
                description: direction === 'rtl'
                    ? 'نطور الحلول ونربطها مع الأنظمة البنكية الأساسية (Core Banking) بدقة'
                    : 'We develop solutions and integrate them with Core Banking systems with precision',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'اختبارات الاختراق' : 'Penetration Testing',
                description: direction === 'rtl'
                    ? 'نجري اختبارات اختراق صارمة للتأكد من خلو النظام من أي ثغرات'
                    : 'We conduct rigorous penetration testing to ensure system is free of vulnerabilities',
                icon: CheckCircle
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'المراقبة المستمرة' : 'Continuous Monitoring',
                description: direction === 'rtl'
                    ? 'نراقب النظام 24/7 لكشف أي نشاط مشبوه ومنعه فوراً'
                    : 'We monitor system 24/7 to detect and prevent any suspicious activity immediately',
                icon: Activity
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'تطبيقات البنوك الرقمية' : 'Digital Banking Apps',
                description: direction === 'rtl'
                    ? 'تطبيقات موبايل تمكن العملاء من فتح حسابات، تحويل الأموال، ودفع الفواتير بسهولة وأمان'
                    : 'Mobile apps enabling customers to open accounts, transfer funds, and pay bills easily and securely',
                features: [
                    direction === 'rtl' ? 'اعرف عميلك إلكترونياً (eKYC)' : 'Electronic KYC',
                    direction === 'rtl' ? 'المصادقة البيومترية' : 'Biometric Auth',
                    direction === 'rtl' ? 'تحويلات فورية' : 'Instant Transfers',
                    direction === 'rtl' ? 'إدارة البطاقات' : 'Card Management'
                ],
                icon: Landmark,
                pricing: direction === 'rtl' ? 'من 15,000$' : 'From $15,000'
            },
            {
                title: direction === 'rtl' ? 'أنظمة التأمين الآلية' : 'Automated Insurance Systems',
                description: direction === 'rtl'
                    ? 'منصات لبيع وثائق التأمين وإدارة المطالبات بشكل آلي لتقليل الوقت والتكلفة'
                    : 'Platforms for selling insurance policies and managing claims automatically to reduce time and cost',
                features: [
                    direction === 'rtl' ? 'إصدار فوري للوثائق' : 'Instant Policy Issuance',
                    direction === 'rtl' ? 'تقييم ذكي للمطالبات' : 'AI Claims Assessment',
                    direction === 'rtl' ? 'مقارنة الأسعار' : 'Price Comparison',
                    direction === 'rtl' ? 'تجديد تلقائي' : 'Auto Renewal'
                ],
                icon: ShieldCheck,
                pricing: direction === 'rtl' ? 'من 8,000$' : 'From $8,000'
            },
            {
                title: direction === 'rtl' ? 'المحافظ الرقمية' : 'Digital Wallets',
                description: direction === 'rtl'
                    ? 'تطوير محافظ إلكترونية للدفع السريع والتحويل ودعم المدفوعات اللاتلامسية (NFC)'
                    : 'Developing e-wallets for fast payments, transfers, and contactless payments (NFC) support',
                features: [
                    direction === 'rtl' ? 'QR Code للدفع' : 'QR Code Payments',
                    direction === 'rtl' ? 'برامج ولاء واسترداد' : 'Loyalty & Cashback',
                    direction === 'rtl' ? 'شحن رصيد متعدد الطرق' : 'Multi-method Top-up',
                    direction === 'rtl' ? 'دفع الفواتير' : 'Bill Payments'
                ],
                icon: Wallet,
                pricing: direction === 'rtl' ? 'من 10,000$' : 'From $10,000'
            },
            {
                title: direction === 'rtl' ? 'كشف الاحتيال بالذكاء الاصطناعي' : 'AI Fraud Detection',
                description: direction === 'rtl'
                    ? 'أنظمة ذكية تحلل المعاملات في الوقت الفعلي لاكتشاف الأنماط المشبوهة ومنع الاحتيال'
                    : 'Smart systems analyzing transactions in real-time to detect suspicious patterns and prevent fraud',
                features: [
                    direction === 'rtl' ? 'تحليل سلوكي' : 'Behavioral Analysis',
                    direction === 'rtl' ? 'تنبيهات فورية' : 'Real-time Alerts',
                    direction === 'rtl' ? 'تقليل الإنذارات الكاذبة' : 'Reduce False Positives',
                    direction === 'rtl' ? 'تعلم آلي مستمر' : 'Continuous ML'
                ],
                icon: Eye,
                pricing: direction === 'rtl' ? 'من 12,000$' : 'From $12,000'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'بنك التمويل الرقمي' : 'Digital Finance Bank',
                industry: direction === 'rtl' ? 'بنوك' : 'Banking',
                challenge: direction === 'rtl'
                    ? 'تطبيق البنك القديم كان بطيئاً ومعقداً مما أدى لهجرة العملاء للبنوك المنافسة'
                    : 'Old bank app was slow and complex causing customers to churn to competitors',
                solution: direction === 'rtl'
                    ? 'إعادة تصميم كاملة لتجربة المستخدم (UX) وبناء تطبيق جديد (Native) فائق السرعة'
                    : 'Complete UX redesign and built a new Native super-fast app',
                results: [
                    {
                        metric: direction === 'rtl' ? 'تقييم التطبيق' : 'App Rating',
                        value: '4.7',
                        description: direction === 'rtl' ? 'ارتفاع من 2.1' : 'Up from 2.1'
                    },
                    {
                        metric: direction === 'rtl' ? 'فتح الحسابات' : 'Acct Openings',
                        value: '+300%',
                        description: direction === 'rtl' ? 'شهرياً' : 'Monthly'
                    },
                    {
                        metric: direction === 'rtl' ? 'التحويلات اليومية' : 'Daily Transfers',
                        value: '50K+',
                        description: direction === 'rtl' ? 'معاملة ناجحة' : 'Successful txn'
                    },
                    {
                        metric: direction === 'rtl' ? 'وقت الانتظار' : 'Downtime',
                        value: '0%',
                        description: direction === 'rtl' ? 'استقرار تام' : 'Full stability'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'التطبيق الجديد وضعنا في مقدمة البنوك الرقمية في المنطقة. ردود فعل العملاء كانت إيجابية بشكل مذهل.'
                        : "The new app positioned us ahead of digital banks in the region. Customer feedback has been amazingly positive.",
                    author: direction === 'rtl' ? 'عبدالله السعيد' : 'Abdullah Al-Saeed',
                    position: direction === 'rtl' ? 'رئيس القنوات الرقمية' : 'Head of Digital Channels'
                }
            },
            {
                clientName: direction === 'rtl' ? 'تأمين تك' : 'TameenTech',
                industry: direction === 'rtl' ? 'شركات تأمين' : 'Insurance',
                challenge: direction === 'rtl'
                    ? 'عملية مطالبات معقدة تستغرق أسابيع وتعتمد على الورق والفاكس'
                    : 'Complex claims process taking weeks relying on paper and fax',
                solution: direction === 'rtl'
                    ? 'أتمتة عملية المطالبات بالكامل عبر تطبيق الموبايل باستخدام الذكاء الاصطناعي لفحص الصور'
                    : 'Fully automated claims process via mobile app using AI for image inspection',
                results: [
                    {
                        metric: direction === 'rtl' ? 'زمن المعالجة' : 'Processing Time',
                        value: '10 min',
                        description: direction === 'rtl' ? 'بدلاً من 14 يوم' : 'Instead of 14 days'
                    },
                    {
                        metric: direction === 'rtl' ? 'تكلفة المطالبة' : 'Claim Cost',
                        value: '-60%',
                        description: direction === 'rtl' ? 'تخفيض التكاليف' : 'Cost reduction'
                    },
                    {
                        metric: direction === 'rtl' ? 'رضا العملاء' : 'Customer CSAT',
                        value: '9/10',
                        description: direction === 'rtl' ? 'تقييم ممتاز' : 'Excellent score'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$310 مليار' : '$310 Billion',
            growthRate: direction === 'rtl' ? '24% سنوياً' : '24% Annually',
            keyTrends: [
                direction === 'rtl' ? 'البنوك المفتوحة (Open Banking)' : 'Open Banking',
                direction === 'rtl' ? 'العملات الرقمية (CBDC)' : 'CBDC',
                direction === 'rtl' ? 'التأمين المخصص (Usage-based Insurance)' : 'Usage-based Insurance',
                direction === 'rtl' ? 'المستشار المالي الآلي (Robo-Advisors)' : 'Robo-Advisors',
                direction === 'rtl' ? 'الأمن البيومتري' : 'Biometric Security'
            ],
            whyDigital: direction === 'rtl'
                ? 'القطاع المالي يمر بأكبر ثورة تقنية في تاريخه. دخول شركات التقنية المالية (FinTech) أجبر البنوك وشركات التأمين التقليدية على الابتكار بسرعة. البقاء للأسرع والأكثر تكيفاً مع احتياجات العميل الرقمية.'
                : 'Financial sector is undergoing its biggest tech revolution. FinTech entry forced traditional banks and insurance to innovate fast. Survival is for the fastest and most adaptable to digital customer needs.'
        },

        technologies: [
            { name: 'Blockchain', category: direction === 'rtl' ? 'سجلات' : 'Records', icon: Archive },
            { name: 'AI/ML', category: direction === 'rtl' ? 'تحليل' : 'Analysis', icon: Cpu },
            { name: 'Microservices', category: direction === 'rtl' ? 'بنية' : 'Arch', icon: Layers },
            { name: 'Cloud Native', category: direction === 'rtl' ? 'سحابي' : 'Cloud', icon: Cloud },
            { name: 'Biometrics', category: direction === 'rtl' ? 'أمان' : 'Security', icon: Fingerprint },
            { name: 'APIs', category: direction === 'rtl' ? 'ربط' : 'Integration', icon: Code },
            { name: 'Big Data', category: direction === 'rtl' ? 'بيانات' : 'Data', icon: Database },
            { name: 'Cybersec', category: direction === 'rtl' ? 'حماية' : 'Protection', icon: Shield }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'كيف تضمنون أمن المعلومات؟' : 'How do you ensure info security?',
                answer: direction === 'rtl'
                    ? 'نتبع نهج "الأمان بالتصميم" (Security by Design)، ونقوم بتشفير البيانات في النقل والتخزين، ونخضع لمراجعات أمنية دورية من جهات خارجية.'
                    : 'We follow "Security by Design" approach, encrypt data in transit and rest, and undergo periodic external security audits.'
            },
            {
                question: direction === 'rtl' ? 'هل لديكم خبرة في الربط مع "سداد"؟' : 'Do you have experience integrating with "SADAD"?',
                answer: direction === 'rtl'
                    ? 'نعم، لدينا خبرة واسعة في الربط مع أنظمة المدفوعات الوطنية مثل "سداد"، "مدى"، و "سريع" في المملكة العربية السعودية وغيرها.'
                    : 'Yes, we have extensive experience integrating with national payment systems like "SADAD", "Mada", and "Sarie" in KSA and others.'
            },
            {
                question: direction === 'rtl' ? 'هل تدعمون تقنية البلوك تشين؟' : 'Do you support Blockchain technology?',
                answer: direction === 'rtl'
                    ? 'نعم، نقدم حلول مبنية على البلوك تشين للعقود الذكية (Smart Contracts) والتحويلات الآمنة، خاصة في قطاع التأمين والتمويل التجاري.'
                    : 'Yes, we offer Blockchain-based solutions for Smart Contracts and secure transfers, especially in Insurance and Trade Finance sectors.'
            },
            {
                question: direction === 'rtl' ? 'كم يستغرق بناء تطبيق بنكي؟' : 'How long to build a banking app?',
                answer: direction === 'rtl'
                    ? 'المشاريع المالية معقدة وتتطلب وقتاً للامتثال والاختبار. عادة ما يستغرق MVP من 4 إلى 6 أشهر، والتطبيق الكامل من 9 إلى 12 شهراً.'
                    : 'Financial projects are complex and require compliance and testing time. MVP typically takes 4-6 months, full app 9-12 months.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'مستعد للثورة المالية؟' : 'Ready for Financial Revolution?',
            description: direction === 'rtl'
                ? 'شاركنا رؤيتك لنبني الجيل القادم من الخدمات المالية الآمنة والذكية'
                : 'Share your vision to build the next generation of secure and smart financial services',
            primaryButton: direction === 'rtl' ? 'تواصل مع الخبراء' : 'Contact Experts',
            secondaryButton: direction === 'rtl' ? 'طلب عرض تقني' : 'Request Tech Proposal',
            urgency: direction === 'rtl' ? '⚡ للبنوك: استشارة أمنية وتقنية مجانية للمشاريع الجديدة' : '⚡ For Banks: Free security & tech consultation for new projects'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900 dark:to-zinc-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/20 via-gray-400/20 to-slate-400/20 dark:from-slate-500/30 dark:via-gray-500/30 dark:to-slate-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-slate-400/10 dark:bg-slate-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gray-400/10 dark:bg-gray-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-400/5 dark:bg-zinc-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-slate-900/30 border border-slate-300 dark:border-slate-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Landmark className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                                    <span className="text-slate-700 dark:text-slate-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'تقنية مالية آمنة' : 'Secure FinTech'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">مالية</span> آمنة ومبتكرة
                                        </>
                                    ) : (
                                        <>
                                            Secure & Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600">Financial</span> Solutions
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-slate-700 to-zinc-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-slate-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-slate-600 dark:text-slate-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-slate-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-500/10 to-zinc-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-600 to-zinc-600 mb-2">
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
                            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-slate-500/5 hover:shadow-slate-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-slate-600 dark:text-slate-400" />
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
                            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-gray-800 dark:via-slate-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-slate-600 to-zinc-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-slate-600 dark:text-slate-400 mx-auto mb-4" />
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
                            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-slate-900/5 hover:shadow-slate-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-slate-600 dark:text-slate-400" />
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
                                                <CheckCircle className="w-5 h-5 text-slate-600 dark:text-slate-400 flex-shrink-0" />
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
                            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-slate-600 dark:group-hover:text-slate-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-slate-600 dark:text-slate-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-slate-800 to-zinc-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-slate-300">
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
                                                        <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-zinc-600 mb-1">
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
                <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-slate-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-slate-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-slate-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-slate-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-slate-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-slate-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-slate-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-slate-700 to-zinc-700 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-slate-800 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
