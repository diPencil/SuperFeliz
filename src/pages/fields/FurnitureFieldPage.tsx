
import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, Armchair, PenTool, Layout, Box, Eye
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface FurnitureFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function FurnitureFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: FurnitureFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'مجال الأثاث والديكور' : 'Furniture & Decor',
        description: direction === 'rtl'
            ? 'حلول تقنية مبتكرة لمعارض الأثاث ومصممي الديكور، تشمل الواقع المعزز (AR) ومتاجر إلكترونية تفاعلية تعطي العميل تجربة تسوق واقعية.'
            : 'Innovative tech solutions for furniture showrooms and interior designers, including Augmented Reality (AR) and interactive e-stores giving customers a realistic shopping experience.',
        stats: {
            projects: '85+',
            clients: '30+',
            experience: '5+ Years',
            satisfaction: '94%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil لحلول الأثاث؟' : 'Why Choose Pencil for Furniture Solutions?',
            features: [
                {
                    icon: Box,
                    title: direction === 'rtl' ? 'واقع معزز (AR)' : 'Augmented Reality (AR)',
                    description: direction === 'rtl'
                        ? 'نمكّن عملائك من تجربة قطع الأثاث في منازلهم قبل الشراء باستخدام كاميرا الجوال'
                        : 'We enable your customers to try furniture pieces in their homes before buying using mobile camera'
                },
                {
                    icon: Layout,
                    title: direction === 'rtl' ? 'تصميم داخلي ذكي' : 'Smart Interior Design',
                    description: direction === 'rtl'
                        ? 'أدوات تخطيط الغرف ثلاثية الأبعاد تساعد العميل على فرش منزله بالكامل من منتجاتك'
                        : '3D room planning tools helping customers furnish their entire home with your products'
                },
                {
                    icon: Zap,
                    title: direction === 'rtl' ? 'تجربة بصرية مذهلة' : 'Stunning Visual Experience',
                    description: direction === 'rtl'
                        ? 'نعرض منتجاتك بجودة صور وتفاصيل فائقة الوضوح تبرز جمال التصميم والخامات'
                        : 'We showcase your products with ultra-high quality images and details highlighting design and materials'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'رقمنة المنتجات' : 'Product Digitization',
                description: direction === 'rtl'
                    ? 'نقوم بتحويل كتالوج منتجاتك إلى نماذج ثلاثية الأبعاد (3D Models) عالية الدقة'
                    : 'We convert your product catalog into high-fidelity 3D Models',
                icon: Box
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'بناء المتجر/المنصة' : 'Platform Build',
                description: direction === 'rtl'
                    ? 'نصمم متجراً يركز على الصورة والتجربة البصرية لإقناع العميل بالجودة'
                    : 'We design a store focusing on visuals and experience to convince customer of quality',
                icon: Layout
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'دمج التقنيات' : 'Tech Integration',
                description: direction === 'rtl'
                    ? 'نضيف خصائص AR و VR وأدوات تخصيص الألوان والمقاسات'
                    : 'We add AR, VR features, and color/size customization tools',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'الربط اللوجستي' : 'Logistics Sync',
                description: direction === 'rtl'
                    ? 'نربط عمليات البيع مع المخزون والشحن لضمان توفر القطع وسرعة التوصيل'
                    : 'We sync sales with inventory and shipping to ensure availability and fast delivery',
                icon: Layers
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'التسويق البصري' : 'Visual Marketing',
                description: direction === 'rtl'
                    ? 'نطلق حملات إعلانية تعتمد على المحتوى البصري الجذاب للمنتجات'
                    : 'We launch ad campaigns based on attractive visual content of products',
                icon: Target
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'متاجر أثاث بالواقع المعزز' : 'AR Furniture Stores',
                description: direction === 'rtl'
                    ? 'متجر إلكتروني يتيح للعميل استعراض القطعة وتجربتها "افتراضياً" في غرفته للتأكد من المقاس واللون'
                    : 'Online store allowing customers to view items and try them "virtually" in their room to check size and color',
                features: [
                    direction === 'rtl' ? 'خاصية "جرب في غرفتك"' : '"Try in Room" Feature',
                    direction === 'rtl' ? 'نماذج 3D تفاعلية' : 'Interactive 3D Models',
                    direction === 'rtl' ? 'دوران 360 درجة' : '360 Degree View',
                    direction === 'rtl' ? 'تغيير الأقمشة والألوان' : 'Fabric & Color Configurator'
                ],
                icon: Box,
                pricing: direction === 'rtl' ? 'من 5,000$' : 'From $5,000'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات التصميم الداخلي' : 'Interior Design Apps',
                description: direction === 'rtl'
                    ? 'منصات تربط المصممين بالعملاء، مع أدوات لإدارة المشاريع ومشاركة المخططات ولوحات الإلهام (Moodboards)'
                    : 'Platforms connecting designers with clients, with project management tools and sharing moodboards/plans',
                features: [
                    direction === 'rtl' ? 'معرض أعمال للمصممين' : 'Designers Portfolio',
                    direction === 'rtl' ? 'أدوات رسم مخططات' : 'Floor Planning Tools',
                    direction === 'rtl' ? 'قوائم تسوق للمشاريع' : 'Project Shopping Lists',
                    direction === 'rtl' ? 'حجوزات واستشارات' : 'Bookings & Consultations'
                ],
                icon: PenTool,
                pricing: direction === 'rtl' ? 'من 4,000$' : 'From $4,000'
            },
            {
                title: direction === 'rtl' ? 'نظام إدارة معارض والمخازن' : 'Showroom & Warehouse WMS',
                description: direction === 'rtl'
                    ? 'نظام يربط معارضك بمستودعاتك لتتبع حركة المخزون من الأثاث الضخم وقطع الديكور الصغيرة بدقة'
                    : 'System connecting showrooms to warehouses to track inventory of bulky furniture and small decor items accurately',
                features: [
                    direction === 'rtl' ? 'تتبع بالباركود/RFID' : 'Barcode/RFID Tracking',
                    direction === 'rtl' ? 'تنبيهات انخفاض المخزون' : 'Low Stock Alerts',
                    direction === 'rtl' ? 'إدارة التوصيل والتركيب' : 'Delivery & Assembly Mgmt',
                    direction === 'rtl' ? 'تقارير مبيعات المعارض' : 'Showroom Sales Reports'
                ],
                icon: Building2,
                pricing: direction === 'rtl' ? 'من 3,500$' : 'From $3,500'
            },
            {
                title: direction === 'rtl' ? 'أداة تفصيل الأثاث (Configurator)' : 'Furniture Configurator',
                description: direction === 'rtl'
                    ? 'أداة ويب تتيح للعميل تصميم قطعته الخاصة (كنب، دولاب، مطبخ) واختيار الوحدات والمقاسات ورؤية السعر فوراً'
                    : 'Web tool allowing customers to design their own piece (sofa, wardrobe, kitchen), choose units/sizes and see price instantly',
                features: [
                    direction === 'rtl' ? 'بناء وتجميع الوحدات' : 'Modular Building',
                    direction === 'rtl' ? 'تسعير ديناميكي' : 'Dynamic Pricing',
                    direction === 'rtl' ? 'تصدير قائمة القطع' : 'Bill of Materials Export',
                    direction === 'rtl' ? 'حفظ التصميم' : 'Save Design'
                ],
                icon: Layout,
                pricing: direction === 'rtl' ? 'من 6,000$' : 'From $6,000'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'مفروشات الرقي' : 'High-End Furnishings',
                industry: direction === 'rtl' ? 'أثاث منزلي' : 'Home Furniture',
                challenge: direction === 'rtl'
                    ? 'ارتفاع معدل إرجاع المنتجات (Returns) لأن العملاء يكتشفون أن القطع لا تناسب مساحة غرفهم أو ألوانها'
                    : 'High return rates because customers discover items do not fit their room space or colors',
                solution: direction === 'rtl'
                    ? 'تطوير متجر مع خاصية AR تتيح للعميل رؤية الكنبة في صالته قبل الشراء بدقة 98%'
                    : 'Developed store with AR feature allowing customer to see sofa in their living room with 98% accuracy',
                results: [
                    {
                        metric: direction === 'rtl' ? 'معدل الإرجاع' : 'Return Rate',
                        value: '-70%',
                        description: direction === 'rtl' ? 'انخفاض هائل' : 'Massive drop'
                    },
                    {
                        metric: direction === 'rtl' ? 'وقت التصفح' : 'Time on Site',
                        value: '3x',
                        description: direction === 'rtl' ? 'تفاعل أكبر' : 'Higher engagement'
                    },
                    {
                        metric: direction === 'rtl' ? 'معدل التحويل' : 'Conversion Rate',
                        value: '+45%',
                        description: direction === 'rtl' ? 'زيادة الشراء' : 'Purchase increase'
                    },
                    {
                        metric: direction === 'rtl' ? 'ثقة العميل' : 'Customer Trust',
                        value: 'High',
                        description: direction === 'rtl' ? 'بناء علامة قوية' : 'Strong branding'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'التقنية وفرت علينا تكاليف شحن واسترجاع ضخمة، والعملاء منبهرون بدقة التجربة وكأن القطعة أمامهم.'
                        : "Technology saved us huge shipping and return costs. Customers are amazed by the accuracy, as if the piece is right there.",
                    author: direction === 'rtl' ? 'م. ريم الفهد' : 'Arch. Reem Al-Fahd',
                    position: direction === 'rtl' ? 'المدير التنفيذي' : 'CEO'
                }
            },
            {
                clientName: direction === 'rtl' ? 'مطابخ المستقبل' : 'Future Kitchens',
                industry: direction === 'rtl' ? 'تصنيع مطابخ' : 'Kitchen Mfg',
                challenge: direction === 'rtl'
                    ? 'عملية البيع تستغرق ساعات طويلة لرسم المطبخ للعميل وتعديل التصميم يدوياً'
                    : 'Sales process takes hours to draw kitchen for client and manually edit errors',
                solution: direction === 'rtl'
                    ? 'بناء Configurator ثلاثي الأبعاد يتيح للعميل تصميم مطبخه بنفسه أونلاين والحصول على سعر مبدئي'
                    : 'Built 3D Configurator allowing client to design kitchen online and get prelim quote',
                results: [
                    {
                        metric: direction === 'rtl' ? 'دورة المبيعات' : 'Sales Cycle',
                        value: '-50%',
                        description: direction === 'rtl' ? 'أسرع بمرتين' : '2x Faster'
                    },
                    {
                        metric: direction === 'rtl' ? 'العملاء المحتملين' : 'Qualified Leads',
                        value: '+200%',
                        description: direction === 'rtl' ? 'من الموقع' : 'From website'
                    },
                    {
                        metric: direction === 'rtl' ? 'رضا فريق المبيعات' : 'Sales Team Satisfaction',
                        value: '100%',
                        description: direction === 'rtl' ? 'أداة مساعدة قوية' : 'Powerful sales tool'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$650 مليار' : '$650 Billion',
            growthRate: direction === 'rtl' ? '5.2% سنوياً' : '5.2% Annually',
            keyTrends: [
                direction === 'rtl' ? 'تسوق الأثاث بالواقع المعزز (AR)' : 'AR Furniture Shopping',
                direction === 'rtl' ? 'الأثاث المستدام' : 'Sustainable Furniture',
                direction === 'rtl' ? 'المنازل الذكية المتصلة' : 'Connected Smart Homes',
                direction === 'rtl' ? 'التجارة الاجتماعية (Pinterest/Insta)' : 'Social Commerce',
                direction === 'rtl' ? 'الطباعة ثلاثية الأبعاد' : '3D Printing'
            ],
            whyDigital: direction === 'rtl'
                ? 'شراء الأثاث تجربة عاطفية وبصرية. 60% من العملاء يفضلون الشراء من علامات توفر تجربة AR. التحول الرقمي في هذا القطاع لا يعني فقط البيع أونلاين، بل يعني مساعدة العميل على تخيل منزله الجديد.'
                : 'Furniture buying is visual and emotional. 60% of customers prefer brands with AR. Digital transformation here isn\'t just online sales, it\'s helping customers visualize their new home.'
        },

        technologies: [
            { name: 'ARKit/ARCore', category: direction === 'rtl' ? 'واقع معزز' : 'AR', icon: Box },
            { name: 'WebGL (Three.js)', category: direction === 'rtl' ? 'ثلاثي أبعاد' : '3D Web', icon: Code },
            { name: 'PBR Rendering', category: direction === 'rtl' ? 'واقعية' : 'Rendering', icon: Sparkles },
            { name: 'Headless Global', category: direction === 'rtl' ? 'تجارة' : 'Commerce', icon: Layout },
            { name: 'AI Visual Search', category: direction === 'rtl' ? 'بحث' : 'Search', icon: Eye },
            { name: 'Cloud CDN', category: direction === 'rtl' ? 'سرعة' : 'Speed', icon: Cloud },
            { name: 'React Native', category: direction === 'rtl' ? 'تطبيقات' : 'Apps', icon: Phone },
            { name: 'IoT', category: direction === 'rtl' ? 'أشياء' : 'IoT', icon: Cpu }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل نماذج الـ 3D تبطئ الموقع؟' : 'Do 3D models slow down the site?',
                answer: direction === 'rtl'
                    ? 'نستخدم تقنيات ضغط متقدمة (glTF/Draco Compression) و تحميل ذكي (Lazy Loading) لضمان عرض مجسمات ثلاثية الأبعاد عالية الدقة دون التأثير على سرعة الموقع.'
                    : 'We use advanced compression (glTF/Draco) and Lazy Loading to ensure high-fidelity 3D models display without affecting site speed.'
            },
            {
                question: direction === 'rtl' ? 'هل تدعمون الربط مع شركات الشحن؟' : 'Do you integrate with shipping carriers?',
                answer: direction === 'rtl'
                    ? 'نعم، نربط نظام إدارة الطلبات مع شركات الشحن والخدمات اللوجستية المتخصصة في نقل الأثاث لحساب التكلفة وتتبع الشحنة تلقائياً.'
                    : 'Yes, we integrate OMS with shipping carriers specialized in furniture logistics to calculate costs and track shipments automatically.'
            },
            {
                question: direction === 'rtl' ? 'هل يحتاج العميل لتحميل تطبيق لاستخدام الـ AR؟' : 'Does customer need an app for AR?',
                answer: direction === 'rtl'
                    ? 'لا، نستخدم تقنية WebAR التي تتيح تشغيل الواقع المعزز مباشرة من متصفح الإنترنت (Chrome/Safari) دون الحاجة لتحميل أي تطبيق إضافي.'
                    : 'No, we use WebAR technology allowing AR to run directly from browser (Chrome/Safari) without downloading any extra app.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكن تطبيق النظام على مصانع الأثاث؟' : 'Can system apply to furniture factories?',
                answer: direction === 'rtl'
                    ? 'نعم، لدينا حلول مخصصة للمصانع (Manufacturing ERP) تتبع عملية الإنتاج من المواد الخام حتى المنتج النهائي، وتربطها بالمبيعات.'
                    : 'Yes, we have custom Manufacturing ERP solutions tracking production from raw materials to final product, linked with sales.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'حول معرضك إلى تجربة رقمية' : 'Digitize Your Showroom Experience',
            description: direction === 'rtl'
                ? 'دعنا نساعدك في ابهار عملائك وزيادة مبيعاتك بأحدث تقنيات العرض الرقمي'
                : 'Let us help you wow your customers and boost sales with latest digital display tech',
            primaryButton: direction === 'rtl' ? 'طلب ديمو AR' : 'Request AR Demo',
            secondaryButton: direction === 'rtl' ? 'استشارة مجانية' : 'Free Consultation',
            urgency: direction === 'rtl' ? '⚡ لمعارض الأثاث: احصل على نموذج 3D مجاني لمنتجك الأكثر مبيعاً' : '⚡ For Showrooms: Get a free 3D model for your bestseller'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'} `} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900 dark:to-orange-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 dark:from-amber-500/30 dark:via-orange-500/30 dark:to-amber-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-amber-400/10 dark:bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 dark:bg-yellow-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium"
                            >
                                {direction === 'rtl' ? 'المجالات' : 'Fields'}
                            </button>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 dark:text-white font-semibold">{fieldData.title}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left: Text Content */}
                            <div className={`${direction === 'rtl' ? 'lg:order-2 text-right' : 'text-left'} `}>
                                {/* Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <Armchair className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                    <span className="text-amber-700 dark:text-amber-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'أثاث و ديكور' : 'Furniture & Decor'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            تجربة <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">تسوق أثاث</span> رقمية تفاعلية
                                        </>
                                    ) : (
                                        <>
                                            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Furniture</span> Digital Experience
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.projects} {direction === 'rtl' ? 'مشروع' : 'Projects'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Stats Cards */}
                            <div className={`${direction === 'rtl' ? 'lg:order-1' : ''} `}>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(fieldData.stats).map(([key, value], index) => (
                                        <div
                                            key={key}
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-amber-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100} ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-orange-600 mb-2">
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
                            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-amber-500/5 hover:shadow-amber-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
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
                            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 dark:from-gray-800 dark:via-amber-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
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
                            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-amber-900/5 hover:shadow-amber-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
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
                                                <CheckCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
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
                            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-amber-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-amber-800 to-orange-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-amber-300">
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
                                                        <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-1">
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
                <section className="py-20 bg-amber-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-amber-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-amber-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-amber-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-amber-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-amber-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-amber-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
