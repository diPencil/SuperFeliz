import { useState } from 'react';
import {
    ArrowLeft, Users, Star, Award, Target, CheckCircle,
    Building2, Phone, MessageCircle, Calendar,
    Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp, TrendingUp,
    Code, Database, Cloud, Cpu, Lock, Layers, ShoppingCart, CreditCard, Tag, Mail
} from 'lucide-react';
import { translations } from '../../translations';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface CommercialFieldPageProps {
    direction: 'rtl' | 'ltr';
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    toggleDirection: () => void;
    t: typeof translations.en;
}

export default function CommercialFieldPage({ direction, theme, toggleTheme, toggleDirection, t }: CommercialFieldPageProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Field-specific data
    const fieldData = {
        title: direction === 'rtl' ? 'المجال التجاري' : 'Commercial Field',
        description: direction === 'rtl'
            ? 'حلول تجارة إلكترونية وأنظمة إدارة مبيعات متطورة تمكن الشركات وتجار التجزئة من التوسع الرقمي وزيادة المبيعات.'
            : 'Advanced e-commerce solutions and sales management systems empowering businesses and retailers to expand digitally and increase sales.',
        stats: {
            projects: '200+',
            clients: '60+',
            experience: '9+ Years',
            satisfaction: '97%'
        },

        whyChooseUs: {
            title: direction === 'rtl' ? 'لماذا تختار Pencil للحلول التجارية؟' : 'Why Choose Pencil for Commercial Solutions?',
            features: [
                {
                    icon: ShoppingCart,
                    title: direction === 'rtl' ? 'خبرة في التجارة الإلكترونية' : 'E-commerce Expertise',
                    description: direction === 'rtl'
                        ? 'بنينا مئات المتاجر الإلكترونية الناجحة التي تحقق مبيعات يومية ضخمة'
                        : 'We have built hundreds of successful online stores generating massive daily sales'
                },
                {
                    icon: Zap,
                    title: direction === 'rtl' ? 'سرعة وأداء عالي' : 'High Performance',
                    description: direction === 'rtl'
                        ? 'متاجر سريعة التحميل ومحسنة لتحويل الزوار إلى عملاء بأعلى كفاءة'
                        : 'Fast-loading stores optimized to convert visitors into customers with maximum efficiency'
                },
                {
                    icon: BarChart3,
                    title: direction === 'rtl' ? 'نمو قابل للتوسع' : 'Scalable Growth',
                    description: direction === 'rtl'
                        ? 'أنظمة قوية تتحمل الزيادة المستمرة في عدد الزوار والطلبات دون توقف'
                        : 'Robust systems that handle continuous growth in traffic and orders without downtime'
                }
            ]
        },

        process: [
            {
                step: 1,
                title: direction === 'rtl' ? 'تحليل السوق' : 'Market Analysis',
                description: direction === 'rtl'
                    ? 'ندرس منافسيك وجمهورك المستهدف لتحديد أفضل استراتيجية بيع'
                    : 'We study your competitors and target audience to define the best sales strategy',
                icon: Target
            },
            {
                step: 2,
                title: direction === 'rtl' ? 'تصميم المتجر' : 'Store Design',
                description: direction === 'rtl'
                    ? 'نصمم تجربة تسوق سلسة وجذابة تشجع على الشراء المتكرر'
                    : 'We design a seamless and attractive shopping experience that encourages repeat purchases',
                icon: Sparkles
            },
            {
                step: 3,
                title: direction === 'rtl' ? 'تطوير النظام' : 'System Development',
                description: direction === 'rtl'
                    ? 'نطور المتجر بأحدث التقنيات ونربطه ببوابات الدفع وشركات الشحن'
                    : 'We develop the store with latest tech and integrate payment gateways and shipping providers',
                icon: Code
            },
            {
                step: 4,
                title: direction === 'rtl' ? 'اختبار الأداء' : 'Performance Testing',
                description: direction === 'rtl'
                    ? 'نختبر سرعة التحميل وعملية الدفع لضمان عدم فقدان أي عميل'
                    : 'We test load speed and checkout process to ensure no customer is lost',
                icon: CheckCircle
            },
            {
                step: 5,
                title: direction === 'rtl' ? 'التسويق والنمو' : 'Marketing & Growth',
                description: direction === 'rtl'
                    ? 'نساعدك في إطلاق حملات تسويقية ذكية لزيادة المبيعات من اليوم الأول'
                    : 'We help you launch smart marketing campaigns to drive sales from day one',
                icon: TrendingUp
            }
        ],

        servicesDetailed: [
            {
                title: direction === 'rtl' ? 'متاجر إلكترونية متكاملة' : 'Full E-commerce Stores',
                description: direction === 'rtl'
                    ? 'تصميم وتطوير متاجر إلكترونية احترافية على منصات مخصصة أو عالمية (Shopify, WooCommerce, Magento)'
                    : 'Design and development of professional online stores on custom or global platforms (Shopify, WooCommerce, Magento)',
                features: [
                    direction === 'rtl' ? 'تصميم متجاوب مع الجوال' : 'Mobile-responsive design',
                    direction === 'rtl' ? 'لوحة تحكم سهلة' : 'Easy admin dashboard',
                    direction === 'rtl' ? 'إدارة مخزون متقدمة' : 'Advanced inventory management',
                    direction === 'rtl' ? 'دعم لغات وعملات متعددة' : 'Multi-language & currency'
                ],
                icon: ShoppingCart,
                pricing: direction === 'rtl' ? 'من 1,200$' : 'From $1,200'
            },
            {
                title: direction === 'rtl' ? 'أنظمة نقاط البيع (POS)' : 'Point of Sale (POS)',
                description: direction === 'rtl'
                    ? 'نظام كاشير وسحابي يربط فروعك ومخازنك بمتجرك الإلكتروني في مكان واحد'
                    : 'Cloud-based POS system connecting your branches and warehouses with your online store in one place',
                features: [
                    direction === 'rtl' ? 'مزامنة فورية للمخزون' : 'Real-time inventory sync',
                    direction === 'rtl' ? 'تقارير مبيعات تفصيلية' : 'Detailed sales reports',
                    direction === 'rtl' ? 'إدارة ولاء العملاء' : 'Loyalty program management',
                    direction === 'rtl' ? 'يعمل دون إنترنت (Offline)' : 'Offline mode support'
                ],
                icon: CreditCard,
                pricing: direction === 'rtl' ? 'من 2,000$' : 'From $2,000'
            },
            {
                title: direction === 'rtl' ? 'تطبيقات التوصيل والمتاجر' : 'Delivery & Store Apps',
                description: direction === 'rtl'
                    ? 'تطبيقات جوال لمتجرك تزيد من ولاء العملاء وتسهل الطلب المتكرر'
                    : 'Mobile apps for your store increasing customer loyalty and facilitating repeat ordering',
                features: [
                    direction === 'rtl' ? 'إشعارات بالعروض' : 'Push notifications for offers',
                    direction === 'rtl' ? 'تتبع الطلب المباشر' : 'Live order tracking',
                    direction === 'rtl' ? 'محفظة إلكترونية' : 'Digital wallet',
                    direction === 'rtl' ? 'كوبونات وخصومات' : 'Coupons & discounts'
                ],
                icon: Phone,
                pricing: direction === 'rtl' ? 'من 3,500$' : 'From $3,500'
            },
            {
                title: direction === 'rtl' ? 'أنظمة ERP للتجزئة' : 'Retail ERP Systems',
                description: direction === 'rtl'
                    ? 'نظام شامل لإدارة الموارد، المشتريات، الحسابات، والموارد البشرية للشركات التجارية'
                    : 'Comprehensive system for managing resources, procurement, accounting, and HR for commercial enterprises',
                features: [
                    direction === 'rtl' ? 'إدارة سلسلة التوريد' : 'Supply chain management',
                    direction === 'rtl' ? 'محاسبة وفوترة إلكترونية' : 'Accounting & E-invoicing',
                    direction === 'rtl' ? 'تحليلات ذكاء الأعمال' : 'Business Intelligence analytics',
                    direction === 'rtl' ? 'أتمتة المهام اليومية' : 'Daily task automation'
                ],
                icon: Building2,
                pricing: direction === 'rtl' ? 'من 5,000$' : 'From $5,000'
            }
        ],

        caseStudies: [
            {
                clientName: direction === 'rtl' ? 'سلسلة أسواق الخير' : 'Al-Khair Markets Chain',
                industry: direction === 'rtl' ? 'تجارة التجزئة' : 'Retail',
                challenge: direction === 'rtl'
                    ? 'صعوبة إدارة المخزون بين 20 فرع والمتجر الإلكتروني، مما يسبب تضارب في الكميات'
                    : 'Difficulty managing inventory across 20 branches and online store, causing stock discrepancies',
                solution: direction === 'rtl'
                    ? 'تنفيذ نظام ERP مركزي مربوط بنقاط البيع والمتجر الإلكتروني لتحديث المخزون لحظياً'
                    : 'Implemented a central ERP linked to POS and online store for real-time stock updates',
                results: [
                    {
                        metric: direction === 'rtl' ? 'دقة المخزون' : 'Inventory Accuracy',
                        value: '100%',
                        description: direction === 'rtl' ? 'القضاء على التضارب' : 'Discrepancy eliminated'
                    },
                    {
                        metric: direction === 'rtl' ? 'المبيعات أونلاين' : 'Online Sales',
                        value: '+150%',
                        description: direction === 'rtl' ? 'بعد الربط' : 'After integration'
                    },
                    {
                        metric: direction === 'rtl' ? 'تكاليف التشغيل' : 'Operating Costs',
                        value: '-25%',
                        description: direction === 'rtl' ? 'توفير في الهدر' : 'Waste reduction'
                    },
                    {
                        metric: direction === 'rtl' ? 'سرعة التوصيل' : 'Delivery Speed',
                        value: '2x',
                        description: direction === 'rtl' ? 'تحسن ملحوظ' : 'Significant improvement'
                    }
                ],
                testimonial: {
                    quote: direction === 'rtl'
                        ? 'النظام الموحد وفر علينا ساعات من العمل اليدوي يومياً ومكننا من التوسع في محافظات جديدة بكل ثقة.'
                        : "The unified system saved us hours of manual work daily and enabled us to expand to new regions with confidence.",
                    author: direction === 'rtl' ? 'محمد العلي' : 'Mohamed Al-Ali',
                    position: direction === 'rtl' ? 'المدير العام' : 'General Manager'
                }
            },
            {
                clientName: direction === 'rtl' ? 'متجر مودا ستايل' : 'Moda Style Store',
                industry: direction === 'rtl' ? 'الأزياء والموضة' : 'Fashion',
                challenge: direction === 'rtl'
                    ? 'موقع بطيء وتجربة مستخدم سيئة على الموبايل كانت تؤدي لترك السلة (Cart Abandonment)'
                    : 'Slow website and poor mobile UX leading to high Cart Abandonment rates',
                solution: direction === 'rtl'
                    ? 'إعادة تصميم المتجر بتقنية PWA (Progressive Web App) لسرعة خيالية وتجربة شبيهة بالتطبيق'
                    : 'Redesigned store using PWA (Progressive Web App) for blazing speed and app-like experience',
                results: [
                    {
                        metric: direction === 'rtl' ? 'معدل التحويل' : 'Conversion Rate',
                        value: '+80%',
                        description: direction === 'rtl' ? 'زيادة في المبيعات' : 'Sales increase'
                    },
                    {
                        metric: direction === 'rtl' ? 'سرعة التحميل' : 'Load Speed',
                        value: '0.8s',
                        description: direction === 'rtl' ? 'أسرع 5 مرات' : '5x Faster'
                    },
                    {
                        metric: direction === 'rtl' ? 'ترك السلة' : 'Cart Abandonment',
                        value: '-40%',
                        description: direction === 'rtl' ? 'تحسن كبير' : 'Major improvement'
                    }
                ]
            }
        ],

        industryInsights: {
            marketSize: direction === 'rtl' ? '$6.3 تريليون' : '$6.3 Trillion',
            growthRate: direction === 'rtl' ? '10.4% سنوياً' : '10.4% Annually',
            keyTrends: [
                direction === 'rtl' ? 'التجارة عبر السوشيال' : 'Social Commerce',
                direction === 'rtl' ? 'الشراء الآن والدفع لاحقاً' : 'BNPL (Buy Now Pay Later)',
                direction === 'rtl' ? 'التجارة الصوتية' : 'Voice Commerce',
                direction === 'rtl' ? 'الواقع المعزز للتجربة' : 'AR Shopping',
                direction === 'rtl' ? 'الاستدامة في التغليف' : 'Sustainable Packaging'
            ],
            whyDigital: direction === 'rtl'
                ? 'مستقبل التجارة رقمي بامتياز. بحلول 2026، من المتوقع أن تشكل التجارة الإلكترونية 24% من إجمالي مبيعات التجزئة عالمياً. الشركات التي لا تستثمر في قنوات بيع رقمية قوية تخاطر بخسارة حصة سوقية كبيرة.'
                : 'The future of commerce is purely digital. By 2026, e-commerce is expected to make up 24% of total global retail sales. Businesses ignoring strong digital sales channels risk losing significant market share.'
        },

        technologies: [
            { name: 'Headless CMS', category: direction === 'rtl' ? 'محتوى' : 'Content', icon: Layers },
            { name: 'Payment Gateways', category: direction === 'rtl' ? 'مدفوعات' : 'Payments', icon: CreditCard },
            { name: 'PWA', category: direction === 'rtl' ? 'ويب متطور' : 'Web', icon: Code },
            { name: 'AI Recommendations', category: direction === 'rtl' ? 'توصيات' : 'AI', icon: Sparkles },
            { name: 'Inventory Mgmt', category: direction === 'rtl' ? 'مخزون' : 'Inventory', icon: Database },
            { name: 'Marketing Automation', category: direction === 'rtl' ? 'تسويق' : 'Marketing', icon: Mail },
            { name: 'Analytics', category: direction === 'rtl' ? 'تحليلات' : 'Analytics', icon: BarChart3 },
            { name: 'Cloud Hosting', category: direction === 'rtl' ? 'استضافة' : 'Hosting', icon: Cloud }
        ],

        faq: [
            {
                question: direction === 'rtl' ? 'هل تدعمون الربط مع بوابات الدفع المحلية؟' : 'Do you support local payment gateways?',
                answer: direction === 'rtl'
                    ? 'نعم، نربط متجرك مع كافة بوابات الدفع المحلية والعالمية (مثل Fawry, Paymob, Stripe, PayPal, Mada, STC Pay) لتسهيل الدفع لعملائك.'
                    : 'Yes, we integrate your store with all local and global payment gateways (like Fawry, Paymob, Stripe, PayPal, Mada, STC Pay) to facilitate payments.'
            },
            {
                question: direction === 'rtl' ? 'هل يمكنني إدارة المتجر بنفسي؟' : 'Can I manage the store myself?',
                answer: direction === 'rtl'
                    ? 'بالتأكيد. نوفر لك لوحة تحكم عربية سهلة الاستخدام تمكنك من إضافة المنتجات، متابعة الطلبات، وإدارة المخزون دون الحاجة لخبرة تقنية.'
                    : 'Absolutely. We provide an easy-to-use Arabic admin dashboard allowing you to add products, track orders, and manage inventory without technical skills.'
            },
            {
                question: direction === 'rtl' ? 'هل المتجر آمن؟' : 'Is the store secure?',
                answer: direction === 'rtl'
                    ? 'الأمان أولويتنا. نستخدم شهادات SSL، جدران حماية، ونسخ احتياطي يومي، مع التزام تام بمعايير PCI-DSS لحماية بيانات البطاقات الائتمانية.'
                    : 'Security is our priority. We use SSL certificates, firewalls, daily backups, and fully comply with PCI-DSS standards to protect credit card data.'
            },
            {
                question: direction === 'rtl' ? 'كم تكلفة إنشاء متجر إلكتروني؟' : 'How much does an online store cost?',
                answer: direction === 'rtl'
                    ? 'تختلف التكلفة حسب المميزات. لدينا باقات تبدأ من أسعار اقتصادية للمتاجر الناشئة وتصل لحلول مخصصة للشركات الكبرى. تواصل معنا لعرض سعر دقيق.'
                    : 'Cost varies by features. We have packages starting from economy for startups to custom enterprise solutions. Contact us for an accurate quote.'
            }
        ],

        contact: {
            title: direction === 'rtl' ? 'ابدأ البيع أونلاين اليوم!' : 'Start Selling Online Today!',
            description: direction === 'rtl'
                ? 'دعنا نساعدك في بناء متجر أحلامك والوصول لعملاء جدد في كل مكان'
                : 'Let us help you build your dream store and reach new customers everywhere',
            primaryButton: direction === 'rtl' ? 'أطلق متجرك الآن' : 'Launch Your Store',
            secondaryButton: direction === 'rtl' ? 'استشارة مجانية' : 'Free Consultation',
            urgency: direction === 'rtl' ? '⚡ عرض خاص: استضافة مجانية لمدة سنة لأول 10 تعاقدات' : '⚡ Special Offer: 1 Year Free Hosting for first 10 contracts'
        }
    };

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-900 dark:to-purple-900">
                        {/* Moving Gradient Overlay */}
                        <div className="absolute inset-0 opacity-60">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 via-fuchsia-400/20 to-violet-400/20 dark:from-violet-500/30 dark:via-fuchsia-500/30 dark:to-violet-500/30 animate-gradient-x"></div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-20 left-10 w-96 h-96 bg-violet-400/10 dark:bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-fuchsia-400/10 dark:bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
                        {/* Breadcrumb */}
                        <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
                            <button
                                onClick={() => window.location.href = '/structures'}
                                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
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
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full mb-4 backdrop-blur-sm shadow-sm">
                                    <ShoppingCart className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                                    <span className="text-violet-700 dark:text-violet-400 text-xs font-semibold">
                                        {direction === 'rtl' ? 'تجارة إلكترونية' : 'E-Commerce'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {direction === 'rtl' ? (
                                        <>
                                            أنظمة <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">تجارية</span> تدفع نمو أعمالك
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Commercial</span> Systems Driving Your Growth
                                        </>
                                    )}
                                </h1>

                                {/* Description */}
                                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                                    {fieldData.description}
                                </p>

                                {/* CTA Buttons */}
                                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                                    <button className="group px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
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
                                        <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                        <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{fieldData.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
                                            className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-violet-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 transform hover:scale-105"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Gradient Border Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            <div className="relative z-10">
                                                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-fuchsia-600 mb-2">
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
                            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
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
                                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-violet-500/5 hover:shadow-violet-500/10 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="w-14 h-14 bg-violet-100 dark:bg-violet-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-violet-600 dark:text-violet-400" />
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
                            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'كيف نعمل' : 'Our Process'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'رحلة التحول الرقمي' : 'Digital Transformation Journey'}
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-200 to-violet-100 dark:from-gray-800 dark:via-violet-900 dark:to-gray-800 transform -translate-y-1/2 hidden lg:block"></div>

                            <div className="grid lg:grid-cols-5 gap-8">
                                {fieldData.process.map((step, index) => (
                                    <div key={index} className="relative group">
                                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white dark:border-gray-900">
                                                {step.step}
                                            </div>
                                            <div className="mt-8 text-center">
                                                <step.icon className="w-8 h-8 text-violet-600 dark:text-violet-400 mx-auto mb-4" />
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
                            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'حلول شاملة لكل احتياجاتك' : 'Comprehensive Solutions for Every Need'}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {fieldData.servicesDetailed.map((service, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl shadow-violet-900/5 hover:shadow-violet-500/10 transition-all duration-300 group">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-16 h-16 bg-violet-50 dark:bg-violet-900/20 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                                            <service.icon className="w-8 h-8 text-violet-600 dark:text-violet-400" />
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
                                                <CheckCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0" />
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
                            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
                                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
                            </span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                {direction === 'rtl' ? 'أحدث التقنيات المستخدمة' : 'Cutting-Edge Technologies'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {fieldData.technologies.map((tech, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300 group cursor-default">
                                    <tech.icon className="w-10 h-10 text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 mb-3 transition-colors duration-300" />
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">{tech.name}</span>
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
                            <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
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
                                        <div className="p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-violet-900 to-fuchsia-900 text-white">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center gap-2 mb-6 text-violet-300">
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
                                                        <h4 className="text-sm font-semibold text-violet-300 uppercase tracking-wider mb-2">
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
                                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-1">
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
                <section className="py-20 bg-violet-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2">
                                <span className="text-violet-400 font-semibold tracking-wider uppercase text-sm">
                                    {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
                                </span>
                                <h2 className="mt-2 text-3xl font-bold mb-6 sm:text-4xl">
                                    {direction === 'rtl' ? 'توجهات الصناعة العالمية' : 'Global Industry Trends'}
                                </h2>
                                <p className="text-xl text-violet-100 mb-8 leading-relaxed">
                                    {fieldData.industryInsights.whyDigital}
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-4xl font-bold text-violet-400 mb-1">{fieldData.industryInsights.marketSize}</div>
                                        <div className="text-sm text-violet-200">{direction === 'rtl' ? 'حجم السوق' : 'Market Size'}</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-violet-400 mb-1">{fieldData.industryInsights.growthRate}</div>
                                        <div className="text-sm text-violet-200">{direction === 'rtl' ? 'معدل النمو' : 'Growth Rate'}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-violet-400" />
                                    {direction === 'rtl' ? 'أهم التوجهات الحالية' : 'Key Current Trends'}
                                </h3>
                                <ul className="space-y-4">
                                    {fieldData.industryInsights.keyTrends.map((trend, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm">
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
                        <div className="relative bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                    {fieldData.contact.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-violet-100 mb-10 max-w-3xl mx-auto">
                                    {fieldData.contact.description}
                                </p>

                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-10 inline-block">
                                    <p className="font-semibold flex items-center justify-center gap-2">
                                        {fieldData.contact.urgency}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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
