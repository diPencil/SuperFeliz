import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface IndustrialFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function IndustrialFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: IndustrialFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال الصناعي' : 'Industrial Field',
        description: direction === 'rtl'
            ? 'حلول تقنية متكاملة للقطاع الصناعي تساعد المصانع والشركات الصناعية على تحسين الإنتاجية وتقليل التكاليف من خلال الأتمتة الذكية وتحليل البيانات.'
            : 'Comprehensive technological solutions for the industrial sector that help factories and industrial companies improve productivity and reduce costs through smart automation and data analytics.',
        stats: {
            projects: '150+',
            clients: '45+',
            experience: '8+ Years',
            satisfaction: '98%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول الصناعية؟' : 'Why Choose Pencil for Industrial Solutions?',
            features: [
                {
                    icon: Cpu,
                    title: direction === 'rtl' ? 'أتمتة ذكية' : 'Smart Automation',
                    description: direction === 'rtl'
                        ? 'نحول العمليات اليدوية إلى أنظمة آلية ذكية لزيادة الكفاءة وتقليل الأخطاء البشرية'
                        : 'We transform manual processes into smart automated systems to increase efficiency and reduce human errors'
                },
                {
                    icon: BarChart3,
                    title: direction === 'rtl' ? 'رؤى مبنية على البيانات' : 'Data-Driven Insights',
                    description: direction === 'rtl'
                        ? 'نستخدم تحليلات البيانات المتقدمة لاتخاذ قرارات استراتيجية دقيقة وتحسين الأداء التشغيلي'
                        : 'We use advanced data analytics to make accurate strategic decisions and improve operational performance'
                },
                {
                    icon: Shield,
                    title: direction === 'rtl' ? 'أمان وموثوقية' : 'Security & Reliability',
                    description: direction === 'rtl'
                        ? 'أنظمة صناعية آمنة وموثوقة تعمل على مدار الساعة لضمان استمرارية الإنتاج'
                        : 'Secure and reliable industrial systems running 24/7 to ensure production continuity'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'التحليل والتقييم' : 'Analysis & Assessment',
                description: direction === 'rtl'
                    ? 'نقوم بدراسة شاملة لعملياتك الحالية وتحديد فرص التحسين والأتمتة'
                    : 'We conduct a comprehensive study of your current processes and identify opportunities for improvement and automation',
                icon: MessageCircle
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم الحل' : 'Solution Design',
                description: direction === 'rtl'
                    ? 'نصمم نظاماً مخصصاً يلبي احتياجاتك الفريدة ويتكامل مع بنيتك التحتية الحالية'
                    : 'We design a custom system that meets your unique needs and integrates with your existing infrastructure',
                icon: Target
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'التطوير والتنفيذ' : 'Development & Implementation',
                description: direction === 'rtl'
                    ? 'نقوم ببناء وتثبيت الأنظمة والبرمجيات باستخدام أحدث التقنيات الصناعية'
                    : 'We build and install systems and software using the latest industrial technologies',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'الاختبار والتدريب' : 'Testing & Training',
                description: direction === 'rtl'
                    ? 'نختبر الحل بشكل شامل ونقدم تدريباً متكاملاً لفريقك لضمان الاستخدام الأمثل'
                    : 'We comprehensively test the solution and provide complete training for your team to ensure optimal use',
                icon: CheckCircle
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'التشغيل والدعم' : 'Deployment & Support',
                description: direction === 'rtl'
                    ? 'نطلق الحل في بيئة الإنتاج ونقدم دعماً مستمراً وتحديثات دورية'
                    : 'We launch the solution in production and provide ongoing support and regular updates',
                icon: Rocket
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'أتمتة العمليات الصناعية' : 'Industrial Process Automation',
                description: direction === 'rtl'
                    ? 'حلول أتمتة متقدمة تحسن الكفاءة وتقلل الأخطاء البشرية في خطوط الإنتاج والعمليات الصناعية'
                    : 'Advanced automation solutions that improve efficiency and reduce human errors in production lines and industrial processes',
                features: [
                    direction === 'rtl' ? 'أنظمة SCADA متطورة' : 'Advanced SCADA systems',
                    direction === 'rtl' ? 'تكامل مع PLC وأجهزة التحكم' : 'PLC and controller integration',
                    direction === 'rtl' ? 'مراقبة وتحكم في الوقت الفعلي' : 'Real-time monitoring and control',
                    direction === 'rtl' ? 'تقارير أداء تلقائية' : 'Automated performance reports'
                ],
                icon: Cpu,
                pricing: direction === 'rtl' ? 'من 3,500$' : 'From $3,500'
            },
            {
                title: direction === 'rtl' ? 'إدارة المخزون الذكية' : 'Smart Inventory Management',
                description: direction === 'rtl'
                    ? 'أنظمة إدارة مخزون متطورة باستخدام IoT وAI لتحسين إدارة الموارد وتقليل الهدر'
                    : 'Advanced inventory management systems using IoT and AI to improve resource management and reduce waste',
                features: [
                    direction === 'rtl' ? 'تتبع المخزون بتقنية RFID' : 'RFID inventory tracking',
                    direction === 'rtl' ? 'تنبؤ ذكي بالطلب' : 'Smart demand forecasting',
                    direction === 'rtl' ? 'تحسين مستويات المخزون' : 'Inventory level optimization',
                    direction === 'rtl' ? 'تكامل مع أنظمة ERP' : 'ERP system integration'
                ],
                icon: Database,
                pricing: direction === 'rtl' ? 'من 2,800$' : 'From $2,800'
            },
            {
                title: direction === 'rtl' ? 'تحليلات البيانات الصناعية' : 'Industrial Data Analytics',
                description: direction === 'rtl'
                    ? 'منصات تحليل بيانات شاملة لاتخاذ قرارات مبنية على البيانات وتحسين الأداء التشغيلي'
                    : 'Comprehensive data analytics platforms for data-driven decisions and operational performance improvement',
                features: [
                    direction === 'rtl' ? 'لوحات تحكم تفاعلية' : 'Interactive dashboards',
                    direction === 'rtl' ? 'تحليلات تنبؤية بالذكاء الاصطناعي' : 'AI-powered predictive analytics',
                    direction === 'rtl' ? 'كشف الأنماط والشذوذ' : 'Pattern and anomaly detection',
                    direction === 'rtl' ? 'تقارير مخصصة' : 'Custom reporting'
                ],
                icon: BarChart3,
                pricing: direction === 'rtl' ? 'من 2,200$' : 'From $2,200'
            },
            {
                title: direction === 'rtl' ? 'أنظمة الصيانة التنبؤية' : 'Predictive Maintenance Systems',
                description: direction === 'rtl'
                    ? 'حلول صيانة ذكية تتنبأ بالأعطال قبل حدوثها وتقلل وقت التوقف عن العمل'
                    : 'Smart maintenance solutions that predict failures before they occur and reduce downtime',
                features: [
                    direction === 'rtl' ? 'مراقبة حالة المعدات' : 'Equipment condition monitoring',
                    direction === 'rtl' ? 'تنبؤ بالأعطال بالذكاء الاصطناعي' : 'AI-powered failure prediction',
                    direction === 'rtl' ? 'جدولة صيانة ذكية' : 'Smart maintenance scheduling',
                    direction === 'rtl' ? 'تتبع تاريخ الصيانة' : 'Maintenance history tracking'
                ],
                icon: Shield,
                pricing: direction === 'rtl' ? 'من 4,200$' : 'From $4,200'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'مصنع النيل للصلب' : 'Nile Steel Factory',
                industry: direction === 'rtl' ? 'صناعة الصلب' : 'Steel Industry',
                challenge: direction === 'rtl'
                    ? 'كان المصنع يعاني من توقفات متكررة غير مجدولة وهدر في المواد الخام بنسبة 15%'
                    : 'The factory suffered from frequent unscheduled downtimes and 15% raw material waste',
                solution: direction === 'rtl'
                    ? 'قمنا بتنفيذ نظام مراقبة وتحكم SCADA متكامل مع وحدة صيانة تنبؤية'
                    : 'We implemented an integrated SCADA monitoring and control system with a predictive maintenance module',
                results: [
                    {
                        metric: direction === 'rtl' ? 'زيادة الإنتاجية' : 'Productivity Increase',
                        value: '25%',
                        description: direction === 'rtl' ? 'في أول 6 أشهر' : 'In first 6 months'
                    },
                    {
                        metric: direction === 'rtl' ? 'تقليل الهدر' : 'Waste Reduction',
                        value: '12%',
                        description: direction === 'rtl' ? 'توفير في المواد الخام' : 'Raw material savings'
                    },
                    {
                        metric: direction === 'rtl' ? 'تقليل التوقف' : 'Downtime Reduction',
                        value: '40%',
                        description: direction === 'rtl' ? 'انخفاض في الأعطال' : 'Decrease in breakdowns'
                    },
                    {
                        metric: direction === 'rtl' ? 'عائد الاستثمار' : 'ROI',
                        value: '300%',
                        description: direction === 'rtl' ? 'خلال عام واحد' : 'Within one year'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'النظام الجديد نقل عملياتنا إلى مستوى آخر تماماً. أصبح لدينا رؤية كاملة لخط الإنتاج وتحكم دقيق في كل مرحلة.'
                        : "The new system took our operations to a whole new level. We now have full visibility of the production line and precise control at every stage.",
                    author: direction === 'rtl' ? 'أحمد حسن' : 'Ahmed Hassan',
                    position: direction === 'rtl' ? 'مدير التشغيل' : 'Operations Manager'
                }
            },
            {
                clientName: direction === 'rtl' ? 'شركة الدلتا للأغذية' : 'Delta Foods Co.',
                industry: direction === 'rtl' ? 'الصناعات الغذائية' : 'Food Industry',
                challenge: direction === 'rtl'
                    ? 'صعوبة في تتبع المخزون وانتهاء صلاحية المواد الخام مما يؤدي لخسائر مالية'
                    : 'Difficulty tracking inventory and raw material expiration leading to financial losses',
                solution: direction === 'rtl'
                    ? 'تطوير نظام إدارة مخزون ذكي مدعوم بإنترنت الأشياء (IoT) لتتبع الشحنات وظروف التخزين'
                    : 'Developed a smart inventory management system powered by IoT to track shipments and storage conditions',
                results: [
                    {
                        metric: direction === 'rtl' ? 'دقة المخزون' : 'Inventory Accuracy',
                        value: '99.9%',
                        description: direction === 'rtl' ? 'مقارنة بـ 85% سابقاً' : 'Compared to 85% previously'
                    },
                    {
                        metric: direction === 'rtl' ? 'توفير التكاليف' : 'Cost Savings',
                        value: '20%',
                        description: direction === 'rtl' ? 'تقليل التالف' : 'Reduction in spoilage'
                    },
                    {
                        metric: direction === 'rtl' ? 'سرعة التوريد' : 'Supply Speed',
                        value: '35%',
                        description: direction === 'rtl' ? 'تحسن في سلاسل الإمداد' : 'Supply chain improvement'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$200+ مليار' : '$200+ Billion',
            growthRate: direction === 'rtl' ? '8.5% سنوياً' : '8.5% Annually',
            keyTrends: [
                direction === 'rtl' ? 'الصناعة 4.0 و IoT' : 'Industry 4.0 & IoT',
                direction === 'rtl' ? 'التصنيع الذكي' : 'Smart Manufacturing',
                direction === 'rtl' ? 'الأتمتة الروبوتية' : 'Robotic Automation',
                direction === 'rtl' ? 'التوائم الرقمية' : 'Digital Twins',
                direction === 'rtl' ? 'الاستدامة الصناعية' : 'Industrial Sustainability'
            ],
            whyDigital: direction === 'rtl'
                ? 'التحول الرقمي في الصناعة لم يعد خياراً بل ضرورة. المصانع الذكية تحقق إنتاجية أعلى بنسبة 30% وتكاليف تشغيل أقل بنسبة 20%. الاستثمار في التكنولوجيا الصناعية هو استثمار مباشر في مستقبل وكفاءة مؤسستك.'
                : 'Digital transformation in industry is no longer an option but a necessity. Smart factories achieve 30% higher productivity and 20% lower operating costs. Investing in industrial technology is a direct investment in your organization\'s future and efficiency.'
        },

        technologies: [
            { name: 'IoT Sensors', category: direction === 'rtl' ? 'أجهزة استشعار' : 'Sensors', icon: Zap },
            { name: 'PLC Systems', category: direction === 'rtl' ? 'تحكم' : 'Control', icon: Cpu },
            { name: 'Cloud Computing', category: direction === 'rtl' ? 'سحابية' : 'Cloud', icon: Cloud },
            { name: 'AI & ML', category: direction === 'rtl' ? 'ذكاء اصطناعي' : 'AI/ML', icon: Sparkles },
            { name: 'Cybersecurity', category: direction === 'rtl' ? 'أمان' : 'Security', icon: Lock },
            { name: 'Big Data', category: direction === 'rtl' ? 'بيانات ضخمة' : 'Big Data', icon: Database },
            { name: 'Robotics', category: direction === 'rtl' ? 'روبوتات' : 'Robotics', icon: Rocket },
            { name: 'Edge Computing', category: direction === 'rtl' ? 'حوسبة طرفية' : 'Edge', icon: Layers }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'ما هي المدة اللازمة لتنفيذ نظام أتمتة كامل؟' : 'How long does it take to implement a full automation system?',
                answer: direction === 'rtl'
                    ? 'تعتمد المدة على حجم وتعقيد المشروع. المشاريع الصغيرة قد تستغرق 2-3 أشهر، بينما المصانع الكبيرة قد تحتاج 6-12 شهراً. نقوم بتقديم جدول زمن مفصل بعد مرحلة التحليل.'
                    : 'Duration depends on project size and complexity. Small projects may take 2-3 months, while large factories may need 6-12 months. We provide a detailed timeline after the analysis phase.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن تحديث الأنظمة القديمة دون استبدالها بالكامل؟' : 'Can legacy systems be upgraded without full replacement?',
                answer: direction === 'rtl'
                    ? 'نعم، في كثير من الحالات يمكننا دمج تقنيات حديثة مع المعدات الحالية باستخدام مستشعرات IoT وبوابات اتصال ذكية، مما يوفر التكاليف مقارنة بالاستبدال الكامل.'
                    : 'Yes, in many cases we can integrate modern technologies with existing equipment using IoT sensors and smart gateways, saving costs compared to full replacement.'
            },
            {
                question: direction === 'rtl' ? 'كيف تضمنون أمان البيانات الصناعية؟' : 'How do you ensure industrial data security?',
                answer: direction === 'rtl'
                    ? 'نحن نتبع معايير الأمن السيبراني الصناعي الصارمة (مثل IEC 62443). نستخدم تشفير البيانات، تجزئة الشبكات، وأنظمة كشف التسلل لحماية مصنعك من التهديدات السيبرانية.'
                    : 'We follow strict industrial cybersecurity standards (like IEC 62443). We use data encryption, network segmentation, and intrusion detection systems to protect your factory from cyber threats.'
            },
            {
                question: direction === 'rtl' ? 'هل تقدمون دعماً فنياً بعد التنفيذ؟' : 'Do you provide technical support after implementation?',
                answer: direction === 'rtl'
                    ? 'نعم، نقدم عقود صيانة ودعم فني شاملة تشمل التحديثات، الإصلاحات الطارئة، والدعم عن بعد وعلى الموقع لضمان استمرارية عملياتك.'
                    : 'Yes, we provide comprehensive maintenance and technical support contracts including updates, emergency repairs, and remote/on-site support to ensure your operations continuity.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'جاهز لتطوير مصنعك؟' : 'Ready to Upgrade Your Factory?',
            description: direction === 'rtl'
                ? 'تواصل معنا اليوم للحصول على استشارة مجانية حول كيف يمكن لتقنياتنا تحويل عملياتك الصناعية'
                : 'Contact us today for a free consultation on how our technologies can transform your industrial operations',
            primaryButton: direction === 'rtl' ? 'احجز استشارة مجانية' : 'Book Free Consultation',
            secondaryButton: direction === 'rtl' ? 'تحدث مع خبير' : 'Talk to an Expert',
            urgency: direction === 'rtl' ? '⚡ عرض لفترة محدودة: تقييم مجاني للموقع لأول 5 عملاء' : '⚡ Limited Time Offer: Free site assessment for first 5 clients'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-400/20 dark:from-blue-500/30 dark:via-cyan-500/30 dark:to-blue-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                                    <span className="text-blue-700 dark:text-cyan-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'حلول احترافية' : 'Professional Solutions'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">متطورة</span> للمجال الصناعي
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Advanced</span> Solutions for {fieldData.title}
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600 mb-2">
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
                            <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
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
                            <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 dark:from-gray-800 dark:via-blue-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-blue-600 dark:text-cyan-400 mx-auto mb-4" />
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
                            <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-blue-900/5 hover:shadow-blue-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
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
                                                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
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
                            <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-cyan-300">
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
                                                        <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-1">
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
                <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-cyan-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-blue-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-cyan-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-blue-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
