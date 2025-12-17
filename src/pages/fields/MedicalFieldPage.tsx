import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, Heart, Activity, Stethoscope, FileText
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface MedicalFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function MedicalFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: MedicalFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال الطبي' : 'Medical Field',
        description: direction === 'rtl'
            ? 'حلول رعاية صحية رقمية تمكن المستشفيات والعيادات من تحسين إدارة المرضى وتقديم خدمات طبية عن بعد بأعلى معايير الأمان.'
            : 'Digital healthcare solutions enabling hospitals and clinics to improve patient management and provide telemedicine services with highest security standards.',
        stats: {
            projects: '90+',
            clients: '40+',
            experience: '6+ Years',
            satisfaction: '99%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول الطبية؟' : 'Why Choose Pencil for Medical Solutions?',
            features: [
                {
                    icon: Shield,
                    title: direction === 'rtl' ? 'التزام بمعايير HIPAA' : 'HIPAA Compliance',
                    description: direction === 'rtl'
                        ? 'أنظمتنا مصممة وفقاً لأعلى معايير الخصوصية العالمية لحماية بيانات المرضى الحساسة'
                        : 'Our systems are designed according to highest global privacy standards to protect sensitive patient data'
                },
                {
                    icon: Activity,
                    title: direction === 'rtl' ? 'استقرارية عالية' : 'High Stability',
                    description: direction === 'rtl'
                        ? 'أنظمة حرجة تعمل 99.99% من الوقت لضمان الوصول للملفات الطبية في أي لحظة'
                        : 'Critical systems with 99.99% uptime ensuring access to medical records at any moment'
                },
                {
                    icon: Users,
                    title: direction === 'rtl' ? 'تصميم محوره المريض' : 'Patient-Centric Design',
                    description: direction === 'rtl'
                        ? 'واجهات سهلة الاستخدام للمرضى وكبار السن لتسهيل حجز المواعيد والتواصل'
                        : 'User-friendly interfaces for patients and elderly to facilitate appointments and communication'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'تحليل سير العمل' : 'Workflow Analysis',
                description: direction === 'rtl'
                    ? 'ندرس رحلة المريض داخل منشأتك لتحديد نقاط التأخير والتحسين'
                    : 'We study the patient journey within your facility to identify delay points and improvements',
                icon: Activity
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'أمن البيانات' : 'Data Security Design',
                description: direction === 'rtl'
                    ? 'نخطط هيكلية بيانات مشفرة وآمنة تماماً قبل كتابة أي كود'
                    : 'We plan a fully encrypted and secure data architecture before writing any code',
                icon: Lock
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'بناء النظام' : 'System Build',
                description: direction === 'rtl'
                    ? 'نطور التطبيق أو النظام باستخدام تقنيات طبية متخصصة ومستقرة'
                    : 'We develop the application or system using specialized and stable medical technologies',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'التدريب والاعتماد' : 'Training & Compliance',
                description: direction === 'rtl'
                    ? 'ندرب الطاقم الطبي والإداري ونتأكد من مطابقة المعايير الصحية'
                    : 'We train medical and admin staff and ensure health standards compliance',
                icon: CheckCircle
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'الدعم المستمر' : 'Ongoing Support',
                description: direction === 'rtl'
                    ? 'دعم فني 24/7 لضمان عدم توقف الخدمات الطبية نهائياً'
                    : '24/7 technical support to ensure medical services never stop',
                icon: Heart
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'أنظمة إدارة المستشفيات (HMS)' : 'Hospital Management Systems (HMS)',
                description: direction === 'rtl'
                    ? 'نظام شامل لإدارة المرضى، المواعيد، الفواتير، الصيدلية، والمختبر في منصة واحدة'
                    : 'Comprehensive system for managing patients, appointments, billing, pharmacy, and lab in one platform',
                features: [
                    direction === 'rtl' ? 'ملف صحي إلكتروني (EMR)' : 'Electronic Medical Records (EMR)',
                    direction === 'rtl' ? 'إدارة المواعيد والعيادات' : 'Appointment & Clinic Mgmt',
                    direction === 'rtl' ? 'إدارة التامين الطبي' : 'Insurance Mgmt',
                    direction === 'rtl' ? 'تكامل مع الأشعة والمختبر (PACS/LIS)' : 'PACS/LIS Integration'
                ],
                icon: Building2,
                pricing: direction === 'rtl' ? 'من 6,000$' : 'From $6,000'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات الطب الاتصالي' : 'Telemedicine Apps',
                description: direction === 'rtl'
                    ? 'منصات للاستشارات الطبية عن بعد عبر الفيديو والدردشة مع وصفات طبية إلكترونية'
                    : 'Platforms for remote medical consultations via video and chat with e-prescriptions',
                features: [
                    direction === 'rtl' ? 'مكالمات فيديو عالية الدقة' : 'HD Video Calls',
                    direction === 'rtl' ? 'وصفة طبية رقمية' : 'Digital Prescription',
                    direction === 'rtl' ? 'الدفع الإلكتروني للاستشارة' : 'Online Payment',
                    direction === 'rtl' ? 'سجل المحادثات الآمن' : 'Secure Chat History'
                ],
                icon: Phone,
                pricing: direction === 'rtl' ? 'من 4,500$' : 'From $4,500'
            },
            {
                title: direction === 'rtl' ? 'بوابات المرضى' : 'Patient Portals',
                description: direction === 'rtl'
                    ? 'بوابة آمنة تتيح للمريض الإطلاع على نتائجه، حجز مواعيده، والتواصل مع طبيبه'
                    : 'Secure portal allowing patients to view results, book appointments, and communicate with their doctor',
                features: [
                    direction === 'rtl' ? 'عرض نتائج التحاليل والأشعة' : 'Lab & Radiology Results',
                    direction === 'rtl' ? 'تذكير بالمواعيد والأدوية' : 'Appointment & Med Requests',
                    direction === 'rtl' ? 'إدارة الملف العائلي' : 'Family Profile Mgmt',
                    direction === 'rtl' ? 'تثقيف صحي' : 'Health Education'
                ],
                icon: Users,
                pricing: direction === 'rtl' ? 'من 2,800$' : 'From $2,800'
            },
            {
                title: direction === 'rtl' ? 'حلول تحليل البيانات الطبية' : 'Healthcare Analytics',
                description: direction === 'rtl'
                    ? 'أدوات ذكاء أعمال لتحليل أداء المستشفى، وتتبع النتائج العلاجية وجودة الخدمة'
                    : 'BI tools to analyze hospital performance, track treatment outcomes, and quality of service',
                features: [
                    direction === 'rtl' ? 'مؤشرات الأداء الرئيسية (KPIs)' : 'Healthcare KPIs',
                    direction === 'rtl' ? 'تتبع العدوى والأوبئة' : 'Infection Tracking',
                    direction === 'rtl' ? 'تحليل إشغال الأسرة' : 'Bed Occupancy Analysis',
                    direction === 'rtl' ? 'تقارير مالية وتشغيلية' : 'Financial & Ops Reports'
                ],
                icon: BarChart3,
                pricing: direction === 'rtl' ? 'من 3,500$' : 'From $3,500'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'مستشفيات الشفاء' : 'Al-Shifa Hospitals',
                industry: direction === 'rtl' ? 'رعاية صحية' : 'Healthcare',
                challenge: direction === 'rtl'
                    ? 'طول فترات انتظار المرضى وضياع بعض الملفات الورقية مما يؤثر على جودة الخدمة'
                    : 'Long patient waiting times and loss of some paper records affecting service quality',
                solution: direction === 'rtl'
                    ? 'تحول رقمي كامل لنظام بلا ورق (Paperless) مع تطبيق لحجز المواعيد وتتبع الدور'
                    : 'Full digital transformation to paperless system with appointment booking and queue tracking app',
                results: [
                    {
                        metric: direction === 'rtl' ? 'وقت الانتظار' : 'Waiting Time',
                        value: '-60%',
                        description: direction === 'rtl' ? 'تحسن ملحوظ' : 'Significant improvement'
                    },
                    {
                        metric: direction === 'rtl' ? 'الملفات المفقودة' : 'Lost Records',
                        value: '0%',
                        description: direction === 'rtl' ? 'أرشفة إلكترونية كاملة' : 'Full digital archiving'
                    },
                    {
                        metric: direction === 'rtl' ? 'رضا المرضى' : 'Patient Satisfaction',
                        value: '95%',
                        description: direction === 'rtl' ? 'ارتفاع من 70%' : 'Up from 70%'
                    },
                    {
                        metric: direction === 'rtl' ? 'التكاليف الإدارية' : 'Admin Costs',
                        value: '-30%',
                        description: direction === 'rtl' ? 'توفير الورق والطباعة' : 'Paper & printing savings'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'النظام لم يحسن العمليات فقط، بل أنقذ أرواحاً بتوفير المعلومات الطبية الحيوية للأطباء في ثوانٍ.'
                        : "The system didn't just improve operations; it saved lives by providing vital medical info to doctors in seconds.",
                    author: direction === 'rtl' ? 'د. خالد سمير' : 'Dr. Khaled Samir',
                    position: direction === 'rtl' ? 'المدير الطبي' : 'Medical Director'
                }
            },
            {
                clientName: direction === 'rtl' ? 'عيادات دكتور أونلاين' : 'Dr. Online Clinics',
                industry: direction === 'rtl' ? 'الطب الاتصالي' : 'Telemedicine',
                challenge: direction === 'rtl'
                    ? 'الحاجة لمنصة آمنة ومستقرة لتقديم استشارات نفسية عن بعد مع ضمان الخصوصية التامة'
                    : 'Need for a secure, stable platform for remote psychiatric consultations ensuring total privacy',
                solution: direction === 'rtl'
                    ? 'بناء منصة فيديو مشفرة End-to-End مع نظام دفع مسبق ومواعيد مرنة'
                    : 'Built an End-to-End encrypted video platform with prepaid system and flexible scheduling',
                results: [
                    {
                        metric: direction === 'rtl' ? 'عدد الاستشارات' : 'Consultations',
                        value: '5000+',
                        description: direction === 'rtl' ? 'في أول 3 أشهر' : 'In first 3 months'
                    },
                    {
                        metric: direction === 'rtl' ? 'الوصول الجغرافي' : 'Geo Reach',
                        value: '12',
                        description: direction === 'rtl' ? 'دولة مختلفة' : 'Different countries'
                    },
                    {
                        metric: direction === 'rtl' ? 'خصوصية البيانات' : 'Data Privacy',
                        value: '100%',
                        description: direction === 'rtl' ? 'بدون أي اختراقات' : 'Zero breaches'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$230 مليار' : '$230 Billion',
            growthRate: direction === 'rtl' ? '15% سنوياً' : '15% Annually',
            keyTrends: [
                direction === 'rtl' ? 'الذكاء الاصطناعي التشخيصي' : 'Diagnostic AI',
                direction === 'rtl' ? 'مراقبة المرضى عن بعد (RPM)' : 'Remote Patient Monitoring (RPM)',
                direction === 'rtl' ? 'إنترنت الأشياء الطبية (IoMT)' : 'Internet of Medical Things (IoMT)',
                direction === 'rtl' ? 'البلوك تشين للسجلات' : 'Blockchain for Records',
                direction === 'rtl' ? 'الطب الشخصي والجيني' : 'Personalized & Genomic Medicine'
            ],
            whyDigital: direction === 'rtl'
                ? 'الرعاية الصحية تتحول بسرعة نحو النموذج الرقمي. المرضى يتوقعون تجربة سلسة تشبه خدمات البنوك والتسوق. المؤسسات الطبية التي تتبنى التقنية لا تحسن كفاءتها فحسب، بل تحسن نتائج علاج مرضاها بشكل مباشر.'
                : 'Healthcare is rapidly shifting to a digital model. Patients expect a seamless experience like banking or shopping. Medical institutions adopting tech not only improve efficiency but directly improve patient treatment outcomes.'
        },

        technologies: [
            { name: 'HL7 & FHIR', category: direction === 'rtl' ? 'معايير' : 'Standards', icon: Code },
            { name: 'WebRTC', category: direction === 'rtl' ? 'فيديو' : 'Video', icon: Phone },
            { name: 'Cloud Security', category: direction === 'rtl' ? 'أمان' : 'Security', icon: Lock },
            { name: 'AI Diagnostics', category: direction === 'rtl' ? 'تشخيص' : 'Diagnosis', icon: Sparkles },
            { name: 'IoT Wearables', category: direction === 'rtl' ? 'أجهزة' : 'Wearables', icon: Activity },
            { name: 'Big Data', category: direction === 'rtl' ? 'بيانات' : 'Data', icon: Database },
            { name: 'Mobile SDKs', category: direction === 'rtl' ? 'موبايل' : 'Mobile', icon: Layers },
            { name: 'Compliance', category: direction === 'rtl' ? 'امتثال' : 'Compliance', icon: Shield }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل النظام يتوافق مع قوانين وزارة الصحة؟' : 'Is the system compliant with Ministry of Health laws?',
                answer: direction === 'rtl'
                    ? 'نعم، جميع أنظمتنا مصممة لتتوافق مع اللوائح المحلية (مثل NPHIES في السعودية) والمعايير العالمية لتبادل البيانات الصحية.'
                    : 'Yes, all our systems are designed to comply with local regulations (like NPHIES in KSA) and global health data exchange standards.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن ربط النظام بأجهزة المختبر مباشرة؟' : 'Can system connect directly to lab machines?',
                answer: direction === 'rtl'
                    ? 'نعم، ندعم بروتوكول LIS (Laboratory Information System) لربط النظام بأجهزة التحليل لسحب النتائج تلقائياً ومنع الخطأ البشري.'
                    : 'Yes, we support LIS protocol to connect the system with analyzers to pull results automatically and prevent human error.'
            },
            {
                question: direction === 'rtl' ? 'كيف يتم حماية بيانات المرضى؟' : 'How is patient data protected?',
                answer: direction === 'rtl'
                    ? 'نستخدم تشفير AES-256 للبيانات، مع صلاحيات وصول دقيقة (Role-Based Access)، وتسجيل كامل لكل عملية دخول أو تعديل (Audit Logs).'
                    : 'We use AES-256 data encryption, precise Role-Based Access Control, and full Audit Logs for every access or modification.'
            },
            {
                question: direction === 'rtl' ? 'هل توفرون تطبيقاً للأطباء؟' : 'Do you provide an app for doctors?',
                answer: direction === 'rtl'
                    ? 'نعم، نوفر تطبيقاً مخصصاً للأطباء يمكنهم من إدارة جدولهم، الاطلاع على ملفات المرضى، وكتابة الملاحظات والوصفات من أي مكان.'
                    : 'Yes, we provide a dedicated doctor app enabling them to manage schedules, view patient records, and write notes/prescriptions from anywhere.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'ارتقِ بخدماتك الطبية' : 'Elevate Your Medical Services',
            description: direction === 'rtl'
                ? 'تواصل معنا لنبني معاً مستقبل الرعاية الصحية في مؤسستك'
                : 'Contact us to build the future of healthcare in your institution together',
            primaryButton: direction === 'rtl' ? 'طلب عرض فني' : 'Request Technical Proposal',
            secondaryButton: direction === 'rtl' ? 'استشارة مجانية' : 'Free Consultation',
            urgency: direction === 'rtl' ? '⚡ للمراكز الطبية: تحويل رقمي كامل خلال 4 أسابيع فقط' : '⚡ For Medical Centers: Full digital transformation in just 4 weeks'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-emerald-400/20 dark:from-emerald-500/30 dark:via-green-500/30 dark:to-emerald-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-400/10 dark:bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-400/10 dark:bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 dark:bg-teal-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Heart className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                    <span className="text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'رعاية صحية ذكية' : 'Smart Healthcare'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            تكنولوجيا <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">طبية</span> تخدم الإنسان
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Medical</span> Technology Serving Humanity
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-emerald-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-teal-600 mb-2">
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
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-emerald-500/5 hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
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
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100 dark:from-gray-800 dark:via-emerald-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
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
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-emerald-900/5 hover:shadow-emerald-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
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
                                                <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-emerald-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-emerald-300">
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
                                                        <h4 className="text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-1">
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
                <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-emerald-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-emerald-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-emerald-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
