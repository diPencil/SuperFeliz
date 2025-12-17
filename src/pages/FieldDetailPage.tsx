import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft, Users, Star, Award, Target, CheckCircle, Globe,
  Building2, BookOpen, Home, Trophy, Phone, MessageCircle, Calendar,
  Sparkles, Zap, Shield, Clock, BarChart3, Rocket, ChevronDown, ChevronUp,
  Code, Database, Cloud, Cpu, Lock, Layers
} from 'lucide-react';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FieldDetailPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function FieldDetailPage({ direction, theme, toggleTheme, toggleDirection, t }: FieldDetailPageProps) {
  const { fieldId } = useParams<{ fieldId: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Enhanced data structure with all new sections
  const fieldsData: {
    [key: string]: {
      title: string;
      titleEn: string;
      titleAr: string;
      icon: any;
      heroImage: string;
      description: string;
      stats: { projects: string; clients: string; experience: string; satisfaction: string };

      // New: Why Choose Us
      whyChooseUs: {
        title: string;
        features: Array<{
          icon: any;
          title: string;
          description: string;
        }>;
      };

      // New: Our Process
      process: Array<{
        step: number;
        title: string;
        description: string;
        icon: any;
      }>;

      // Enhanced: Services (previously solutions)
      servicesDetailed: Array<{
        title: string;
        description: string;
        features: string[];
        icon: any;
        pricing: string;
      }>;

      // Enhanced: Multiple Case Studies
      caseStudies: Array<{
        clientName: string;
        industry: string;
        challenge: string;
        solution: string;
        results: Array<{
          metric: string;
          value: string;
          description: string;
        }>;
        testimonial?: {
          quote: string;
          author: string;
          position: string;
        };
      }>;

      // New: Industry Insights
      industryInsights: {
        marketSize: string;
        growthRate: string;
        keyTrends: string[];
        whyDigital: string;
      };

      // Enhanced: Technologies
      technologies: Array<{
        name: string;
        category: string;
        icon: any;
      }>;

      // New: FAQ
      faq: Array<{
        question: string;
        answer: string;
      }>;

      // Enhanced: Contact/CTA
      contact: {
        title: string;
        description: string;
        primaryButton: string;
        secondaryButton: string;
        urgency: string;
      };
    }
  } = {
    industrial: {
      title: direction === 'rtl' ? 'المجال الصناعي' : 'Industrial Field',
      titleEn: 'Industrial Field',
      titleAr: 'المجال الصناعي',
      icon: Building2,
      heroImage: '/images/fields/industrial.jpg',
      description: direction === 'rtl'
        ? 'نقدم حلولاً تقنية متكاملة للقطاع الصناعي تساعد الشركات على تحسين الكفاءة التشغيلية، تقليل التكاليف، وزيادة الإنتاجية من خلال الأتمتة والرقمنة الذكية.'
        : 'We provide comprehensive technological solutions for the industrial sector that help companies improve operational efficiency, reduce costs, and increase productivity through smart automation and digitization.',
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
            icon: Award,
            title: direction === 'rtl' ? 'خبرة صناعية عميقة' : 'Deep Industrial Expertise',
            description: direction === 'rtl'
              ? '8+ سنوات من الخبرة في تطوير حلول صناعية متقدمة لأكثر من 45 عميل في قطاعات متنوعة'
              : '8+ years of experience developing advanced industrial solutions for 45+ clients across diverse sectors'
          },
          {
            icon: Rocket,
            title: direction === 'rtl' ? 'تقنيات متطورة' : 'Cutting-Edge Technology',
            description: direction === 'rtl'
              ? 'نستخدم أحدث تقنيات IoT، AI/ML، وIndustry 4.0 لتحقيق أقصى كفاءة تشغيلية'
              : 'We use the latest IoT, AI/ML, and Industry 4.0 technologies to achieve maximum operational efficiency'
          },
          {
            icon: Shield,
            title: direction === 'rtl' ? 'أمان وموثوقية' : 'Security & Reliability',
            description: direction === 'rtl'
              ? 'أنظمة آمنة ومستقرة مع ضمانات SLA وصيانة دورية لضمان استمرارية العمل'
              : 'Secure and stable systems with SLA guarantees and regular maintenance to ensure business continuity'
          },
          {
            icon: Users,
            title: direction === 'rtl' ? 'دعم فني متواصل' : '24/7 Technical Support',
            description: direction === 'rtl'
              ? 'فريق دعم فني متخصص متاح على مدار الساعة لضمان سلاسة العمليات'
              : 'Specialized technical support team available 24/7 to ensure smooth operations'
          },
          {
            icon: BarChart3,
            title: direction === 'rtl' ? 'نتائج قابلة للقياس' : 'Measurable Results',
            description: direction === 'rtl'
              ? 'متوسط زيادة في الإنتاجية بنسبة 35% وتقليل التكاليف بنسبة 25% لعملائنا'
              : 'Average 35% increase in productivity and 25% cost reduction for our clients'
          },
          {
            icon: Sparkles,
            title: direction === 'rtl' ? 'حلول مخصصة' : 'Customized Solutions',
            description: direction === 'rtl'
              ? 'كل حل مصمم خصيصاً ليناسب احتياجات عملك وعملياتك الصناعية الفريدة'
              : 'Every solution is custom-designed to fit your unique business needs and industrial processes'
          }
        ]
      },

      process: [
        {
          step: 1,
          title: direction === 'rtl' ? 'التحليل والاستشارة' : 'Analysis & Consultation',
          description: direction === 'rtl'
            ? 'نبدأ بفهم عميق لعملياتك الصناعية وتحدياتك الحالية من خلال جلسات استشارية مكثفة'
            : 'We start with a deep understanding of your industrial processes and current challenges through intensive consultation sessions',
          icon: MessageCircle
        },
        {
          step: 2,
          title: direction === 'rtl' ? 'التخطيط والتصميم' : 'Planning & Design',
          description: direction === 'rtl'
            ? 'نصمم حلاً مخصصاً يتناسب مع احتياجاتك مع خطة تنفيذ واضحة ومراحل زمنية محددة'
            : 'We design a customized solution that fits your needs with a clear implementation plan and defined timelines',
          icon: Target
        },
        {
          step: 3,
          title: direction === 'rtl' ? 'التطوير والتكامل' : 'Development & Integration',
          description: direction === 'rtl'
            ? 'نطور الحل بأعلى معايير الجودة ونتكامل مع أنظمتك الحالية بسلاسة'
            : 'We develop the solution with the highest quality standards and integrate seamlessly with your existing systems',
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
          clientName: direction === 'rtl' ? 'مصنع الإلكترونيات المتقدمة' : 'Advanced Electronics Factory',
          industry: direction === 'rtl' ? 'تصنيع إلكترونيات' : 'Electronics Manufacturing',
          challenge: direction === 'rtl'
            ? 'كان المصنع يعاني من انخفاض الإنتاجية بنسبة 40% بسبب عمليات يدوية معقدة وأخطاء بشرية متكررة في خطوط الإنتاج'
            : 'The factory was suffering from 40% productivity loss due to complex manual processes and recurring human errors in production lines',
          solution: direction === 'rtl'
            ? 'قمنا بتطوير نظام أتمتة متكامل يشمل SCADA، تكامل PLC، ومراقبة في الوقت الفعلي مع لوحات تحكم ذكية'
            : 'We developed an integrated automation system including SCADA, PLC integration, and real-time monitoring with smart dashboards',
          results: [
            {
              metric: direction === 'rtl' ? 'زيادة الإنتاجية' : 'Productivity Increase',
              value: '45%',
              description: direction === 'rtl' ? 'في أول 6 أشهر' : 'In first 6 months'
            },
            {
              metric: direction === 'rtl' ? 'تقليل الأخطاء' : 'Error Reduction',
              value: '82%',
              description: direction === 'rtl' ? 'في عمليات الإنتاج' : 'In production processes'
            },
            {
              metric: direction === 'rtl' ? 'توفير التكاليف' : 'Cost Savings',
              value: '$280K',
              description: direction === 'rtl' ? 'سنوياً' : 'Annually'
            },
            {
              metric: direction === 'rtl' ? 'تقليل وقت التوقف' : 'Downtime Reduction',
              value: '65%',
              description: direction === 'rtl' ? 'في السنة الأولى' : 'In first year'
            }
          ],
          testimonial: {
            quote: direction === 'rtl'
              ? 'حل Pencil غيّر طريقة عملنا بالكامل. الآن لدينا رؤية واضحة لكل عملية وقدرة على اتخاذ قرارات سريعة ومبنية على البيانات.'
              : "Pencil's solution completely transformed the way we work. Now we have clear visibility into every process and the ability to make quick, data-driven decisions.",
            author: direction === 'rtl' ? 'أحمد السيد' : 'Ahmed Al-Sayed',
            position: direction === 'rtl' ? 'مدير العمليات' : 'Operations Manager'
          }
        },
        {
          clientName: direction === 'rtl' ? 'شركة التصنيع الوطنية' : 'National Manufacturing Corp',
          industry: direction === 'rtl' ? 'تصنيع ثقيل' : 'Heavy Manufacturing',
          challenge: direction === 'rtl'
            ? 'تكاليف صيانة مرتفعة وأعطال غير متوقعة تسببت في خسائر كبيرة وتأخيرات في التسليم'
            : 'High maintenance costs and unexpected failures causing significant losses and delivery delays',
          solution: direction === 'rtl'
            ? 'نظام صيانة تنبؤية متقدم باستخدام IoT وAI لمراقبة المعدات والتنبؤ بالأعطال قبل حدوثها'
            : 'Advanced predictive maintenance system using IoT and AI to monitor equipment and predict failures before they occur',
          results: [
            {
              metric: direction === 'rtl' ? 'تقليل تكاليف الصيانة' : 'Maintenance Cost Reduction',
              value: '38%',
              description: direction === 'rtl' ? 'في السنة الأولى' : 'In first year'
            },
            {
              metric: direction === 'rtl' ? 'زيادة وقت التشغيل' : 'Uptime Increase',
              value: '92%',
              description: direction === 'rtl' ? 'من 75% سابقاً' : 'From 75% previously'
            },
            {
              metric: direction === 'rtl' ? 'تحسين التسليم في الموعد' : 'On-Time Delivery Improvement',
              value: '88%',
              description: direction === 'rtl' ? 'من 62% سابقاً' : 'From 62% previously'
            }
          ]
        }
      ],

      industryInsights: {
        marketSize: direction === 'rtl' ? '$4.8 تريليون' : '$4.8 Trillion',
        growthRate: direction === 'rtl' ? '12.4% سنوياً' : '12.4% Annually',
        keyTrends: [
          direction === 'rtl' ? 'Industry 4.0 والمصانع الذكية' : 'Industry 4.0 and Smart Factories',
          direction === 'rtl' ? 'الذكاء الاصطناعي في التصنيع' : 'AI in Manufacturing',
          direction === 'rtl' ? 'إنترنت الأشياء الصناعي (IIoT)' : 'Industrial Internet of Things (IIoT)',
          direction === 'rtl' ? 'الصيانة التنبؤية' : 'Predictive Maintenance',
          direction === 'rtl' ? 'التوأم الرقمي (Digital Twin)' : 'Digital Twin Technology'
        ],
        whyDigital: direction === 'rtl'
          ? 'القطاع الصناعي يشهد تحولاً رقمياً هائلاً. الشركات التي تتبنى التقنيات الحديثة تحقق ميزة تنافسية كبيرة من خلال تحسين الكفاءة، تقليل التكاليف، وزيادة الجودة. الاستثمار في الحلول الرقمية الآن ليس خياراً بل ضرورة للبقاء في المنافسة.'
          : 'The industrial sector is undergoing a massive digital transformation. Companies adopting modern technologies gain a significant competitive advantage through improved efficiency, reduced costs, and increased quality. Investing in digital solutions now is not an option but a necessity to stay competitive.'
      },

      technologies: [
        { name: 'SCADA Systems', category: direction === 'rtl' ? 'أتمتة' : 'Automation', icon: Cpu },
        { name: 'PLC Integration', category: direction === 'rtl' ? 'أتمتة' : 'Automation', icon: Layers },
        { name: 'IoT Sensors', category: direction === 'rtl' ? 'إنترنت الأشياء' : 'IoT', icon: Zap },
        { name: 'AI/ML Analytics', category: direction === 'rtl' ? 'ذكاء اصطناعي' : 'AI', icon: BarChart3 },
        { name: 'Cloud Infrastructure', category: direction === 'rtl' ? 'سحابة' : 'Cloud', icon: Cloud },
        { name: 'MES Systems', category: direction === 'rtl' ? 'إدارة' : 'Management', icon: Database },
        { name: 'ERP Integration', category: direction === 'rtl' ? 'إدارة' : 'Management', icon: Building2 },
        { name: 'Cybersecurity', category: direction === 'rtl' ? 'أمان' : 'Security', icon: Lock }
      ],

      faq: [
        {
          question: direction === 'rtl' ? 'ما هي المدة الزمنية المتوقعة لتنفيذ حل صناعي متكامل؟' : 'What is the expected timeline for implementing a complete industrial solution?',
          answer: direction === 'rtl'
            ? 'تختلف المدة حسب حجم المشروع وتعقيده. عادةً، مشروع متوسط الحجم يستغرق 3-6 أشهر من التخطيط حتى التشغيل الكامل. نقدم خطة زمنية مفصلة بعد مرحلة التحليل الأولية.'
            : 'The timeline varies depending on project size and complexity. Typically, a medium-sized project takes 3-6 months from planning to full deployment. We provide a detailed timeline after the initial analysis phase.'
        },
        {
          question: direction === 'rtl' ? 'هل يمكن التكامل مع أنظمتنا الحالية؟' : 'Can you integrate with our existing systems?',
          answer: direction === 'rtl'
            ? 'نعم، نحن متخصصون في التكامل مع الأنظمة الحالية. نعمل مع معظم أنظمة ERP، MES، SCADA، وPLC الشائعة. نقوم بتحليل شامل لبنيتك التحتية الحالية لضمان تكامل سلس.'
            : 'Yes, we specialize in integrating with existing systems. We work with most common ERP, MES, SCADA, and PLC systems. We conduct a comprehensive analysis of your current infrastructure to ensure seamless integration.'
        },
        {
          question: direction === 'rtl' ? 'ما نوع الدعم الفني المقدم بعد التنفيذ؟' : 'What kind of technical support is provided after implementation?',
          answer: direction === 'rtl'
            ? 'نقدم دعماً فنياً شاملاً على مدار الساعة مع SLA محدد. يشمل ذلك الصيانة الدورية، التحديثات، حل المشاكل الفورية، والتدريب المستمر لفريقك.'
            : 'We provide comprehensive 24/7 technical support with defined SLA. This includes regular maintenance, updates, immediate problem resolution, and ongoing training for your team.'
        },
        {
          question: direction === 'rtl' ? 'كيف تضمنون أمان البيانات والأنظمة؟' : 'How do you ensure data and system security?',
          answer: direction === 'rtl'
            ? 'نطبق أعلى معايير الأمان الصناعي بما في ذلك التشفير، المصادقة متعددة العوامل، شبكات معزولة، ومراقبة أمنية مستمرة. جميع حلولنا تتوافق مع معايير ISO 27001 وIEC 62443.'
            : 'We apply the highest industrial security standards including encryption, multi-factor authentication, isolated networks, and continuous security monitoring. All our solutions comply with ISO 27001 and IEC 62443 standards.'
        },
        {
          question: direction === 'rtl' ? 'هل يمكن البدء بمشروع تجريبي صغير؟' : 'Can we start with a small pilot project?',
          answer: direction === 'rtl'
            ? 'بالتأكيد! نوصي دائماً بالبدء بمشروع تجريبي (Proof of Concept) لخط إنتاج واحد أو عملية محددة. هذا يتيح لك رؤية النتائج قبل التوسع الكامل.'
            : 'Absolutely! We always recommend starting with a pilot project (Proof of Concept) for one production line or specific process. This allows you to see results before full-scale expansion.'
        },
        {
          question: direction === 'rtl' ? 'ما هو العائد المتوقع على الاستثمار (ROI)؟' : 'What is the expected Return on Investment (ROI)?',
          answer: direction === 'rtl'
            ? 'بناءً على مشاريعنا السابقة، معظم العملاء يحققون ROI إيجابي خلال 12-18 شهر من خلال تحسين الكفاءة، تقليل التكاليف، وزيادة الإنتاجية. نقدم تحليل ROI مفصل لكل مشروع.'
            : 'Based on our previous projects, most clients achieve positive ROI within 12-18 months through improved efficiency, reduced costs, and increased productivity. We provide detailed ROI analysis for each project.'
        }
      ],

      contact: {
        title: direction === 'rtl' ? 'جاهز لتحويل عملياتك الصناعية؟' : 'Ready to Transform Your Industrial Operations?',
        description: direction === 'rtl'
          ? 'احجز استشارة مجانية مع خبرائنا لمناقشة احتياجاتك وكيف يمكننا مساعدتك في تحقيق أهدافك'
          : 'Book a free consultation with our experts to discuss your needs and how we can help you achieve your goals',
        primaryButton: direction === 'rtl' ? 'احجز استشارة مجانية' : 'Book Free Consultation',
        secondaryButton: direction === 'rtl' ? 'تحدث مع خبير' : 'Talk to an Expert',
        urgency: direction === 'rtl' ? '⚡ عرض محدود: استشارة مجانية لأول 10 عملاء هذا الشهر' : '⚡ Limited Offer: Free consultation for first 10 clients this month'
      }
    },


    // Remaining fields use simplified Industrial template structure for now
    // Full content expansion will be added systematically

    tourism: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'المجال السياحي' : 'Tourism Field',
      titleEn: 'Tourism Field',
      titleAr: 'المجال السياحي',
      icon: Globe,
      description: direction === 'rtl'
        ? 'حلول تقنية متكاملة للقطاع السياحي تساعد الفنادق والمنتجعات ووكالات السفر على تحسين تجربة العملاء وزيادة الحجوزات.'
        : 'Comprehensive tech solutions for tourism sector helping hotels, resorts, and travel agencies improve customer experience and increase bookings.',
      stats: { projects: '120+', clients: '35+', experience: '7+ Years', satisfaction: '96%' }
    },

    commercial: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'المجال التجاري' : 'Commercial Field',
      titleEn: 'Commercial Field',
      titleAr: 'المجال التجاري',
      icon: Building2,
      description: direction === 'rtl'
        ? 'حلول تجارية متطورة للشركات والمحلات التجارية تشمل أنظمة نقاط البيع، إدارة المخزون، والتجارة الإلكترونية.'
        : 'Advanced commercial solutions for businesses and retail stores including POS systems, inventory management, and e-commerce.',
      stats: { projects: '200+', clients: '60+', experience: '9+ Years', satisfaction: '97%' }
    },

    medical: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'المجال الطبي' : 'Medical Field',
      titleEn: 'Medical Field',
      titleAr: 'المجال الطبي',
      icon: Shield,
      description: direction === 'rtl'
        ? 'حلول طبية متخصصة للمستشفيات والعيادات تشمل أنظمة إدارة المرضى، السجلات الطبية الإلكترونية، والحجز الإلكتروني.'
        : 'Specialized medical solutions for hospitals and clinics including patient management systems, electronic medical records, and online booking.',
      stats: { projects: '80+', clients: '25+', experience: '6+ Years', satisfaction: '99%' }
    },

    educational: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'المجال التعليمي' : 'Educational Field',
      titleEn: 'Educational Field',
      titleAr: 'المجال التعليمي',
      icon: BookOpen,
      description: direction === 'rtl'
        ? 'حلول تعليمية شاملة للمدارس والجامعات تشمل منصات التعلم الإلكتروني، أنظمة إدارة الطلاب، والفصول الافتراضية.'
        : 'Comprehensive educational solutions for schools and universities including e-learning platforms, student management systems, and virtual classrooms.',
      stats: { projects: '95+', clients: '30+', experience: '7+ Years', satisfaction: '95%' }
    },

    'banks-insurance': {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'البنوك والتأمين' : 'Banks & Insurance',
      titleEn: 'Banks & Insurance',
      titleAr: 'البنوك والتأمين',
      icon: Lock,
      description: direction === 'rtl'
        ? 'حلول مالية آمنة للبنوك وشركات التأمين تشمل الخدمات المصرفية الرقمية، أنظمة الدفع، وإدارة المخاطر.'
        : 'Secure financial solutions for banks and insurance companies including digital banking services, payment systems, and risk management.',
      stats: { projects: '50+', clients: '15+', experience: '8+ Years', satisfaction: '98%' }
    },

    furniture: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'مجال الأثاث' : 'Furniture Field',
      titleEn: 'Furniture Field',
      titleAr: 'مجال الأثاث',
      icon: Home,
      description: direction === 'rtl'
        ? 'حلول رقمية لشركات الأثاث تشمل كتالوجات إلكترونية، تصميم ثلاثي الأبعاد، ومنصات التجارة الإلكترونية.'
        : 'Digital solutions for furniture companies including electronic catalogs, 3D design, and e-commerce platforms.',
      stats: { projects: '70+', clients: '22+', experience: '5+ Years', satisfaction: '94%' }
    },

    sports: {
      ...fieldsData.industrial,
      title: direction === 'rtl' ? 'المجال الرياضي' : 'Sports Field',
      titleEn: 'Sports Field',
      titleAr: 'المجال الرياضي',
      icon: Trophy,
      description: direction === 'rtl'
        ? 'حلول رياضية متكاملة للأندية والصالات الرياضية تشمل أنظمة الحجز، إدارة الأعضاء، وتطبيقات اللياقة البدنية.'
        : 'Integrated sports solutions for clubs and gyms including booking systems, membership management, and fitness apps.',
      stats: { projects: '65+', clients: '20+', experience: '6+ Years', satisfaction: '96%' }
    }
  };

  const field = fieldsData[fieldId || 'industrial'];

  if (!field || !fieldId) {
    return (
      <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {direction === 'rtl' ? 'المجال غير موجود' : 'Field Not Found'}
            </h1>
            <button
              onClick={() => window.location.href = '/structures'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {direction === 'rtl' ? 'العودة إلى المجالات' : 'Back to Fields'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* SECTION 1: Enhanced Hero Section with White Background */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
            {/* Breadcrumb */}
            <nav className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-12 ${direction === 'rtl' ? 'space-x-reverse' : ''}`}>
              <button
                onClick={() => window.location.href = '/structures'}
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                {direction === 'rtl' ? 'المجالات' : 'Fields'}
              </button>
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-white font-medium">{field.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className={`${direction === 'rtl' ? 'lg:order-2 text-right' : 'text-left'}`}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span className="text-blue-700 dark:text-cyan-400 text-xs font-semibold">
                    {direction === 'rtl' ? 'حلول احترافية' : 'Professional Solutions'}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {direction === 'rtl' ? (
                    <>
                      حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">متطورة</span> للمجال الصناعي
                    </>
                  ) : (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Advanced</span> Solutions for {field.title}
                    </>
                  )}
                </h1>

                {/* Description */}
                <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {field.description}
                </p>

                {/* CTA Buttons */}
                <div className={`flex flex-wrap gap-4 ${direction === 'rtl' ? 'justify-end' : 'justify-start'}`}>
                  <button className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                    <span>{field.contact.primaryButton}</span>
                    <ArrowLeft className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180' : ''}`} />
                  </button>
                  <button className="px-8 py-3 bg-white/80 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                    {field.contact.secondaryButton}
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{field.stats.satisfaction} {direction === 'rtl' ? 'رضا العملاء' : 'Satisfaction'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{field.stats.clients} {direction === 'rtl' ? 'عميل' : 'Clients'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm font-medium">{field.stats.projects} {direction === 'rtl' ? 'مشروع' : 'Projects'}</span>
                  </div>
                </div>
              </div>

              {/* Right: Stats Cards with Glassmorphism */}
              <div className={`${direction === 'rtl' ? 'lg:order-1' : ''}`}>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(field.stats).map(([key, value], index) => (
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


        {/* SECTION 2: Quick Stats Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>أرقام <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">تتحدث</span> عن نفسها</>
                ) : (
                  <>Numbers That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Speak</span> for Themselves</>
                )}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(field.stats).map(([key, value], index) => (
                <div
                  key={key}
                  className="text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative inline-block">
                    <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600 mb-2">
                      {value}
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    {direction === 'rtl' ?
                      key === 'projects' ? 'مشاريع منجزة' :
                        key === 'clients' ? 'عملاء راضون' :
                          key === 'experience' ? 'سنوات خبرة' : 'نسبة الرضا' :
                      key === 'projects' ? 'Completed Projects' :
                        key === 'clients' ? 'Happy Clients' :
                          key === 'experience' ? 'Years Experience' : 'Satisfaction Rate'
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Why Choose Us Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'لماذا نحن؟' : 'Why Us?'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {field.whyChooseUs.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {field.whyChooseUs.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {feature.description}
                  </p>

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Our Process Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'كيف نعمل' : 'How We Work'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>عملية <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">احترافية</span> مجربة</>
                ) : (
                  <>Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Professional</span> Process</>
                )}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {direction === 'rtl'
                  ? 'منهجية واضحة ومنظمة تضمن نجاح مشروعك من البداية حتى النهاية'
                  : 'A clear and organized methodology that ensures your project success from start to finish'
                }
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-600 hidden lg:block"></div>

              {/* Process Steps */}
              <div className="space-y-12">
                {field.process.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 lg:w-1/2">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-blue-600 dark:text-cyan-400 mb-2">
                              {direction === 'rtl' ? `الخطوة ${step.step}` : `Step ${step.step}`}
                            </div>
                            <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                              {step.title}
                            </h3>
                            <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Number (Center) */}
                    <div className="hidden lg:flex w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full items-center justify-center text-2xl font-bold text-white shadow-lg z-10">
                      {step.step}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 lg:w-1/2 hidden lg:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Services Offered Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'خدماتنا' : 'Our Services'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>حلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">متكاملة</span> لكل احتياج</>
                ) : (
                  <><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Comprehensive</span> Solutions for Every Need</>
                )}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {field.servicesDetailed.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <span className="text-sm font-bold text-blue-600 dark:text-cyan-400">{service.pricing}</span>
                    </div>
                  </div>

                  {/* Content */}
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

        {/* SECTION 6: Technologies & Tools Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'التقنيات' : 'Technologies'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>نستخدم <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">أحدث</span> التقنيات</>
                ) : (
                  <>We Use the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Latest</span> Technologies</>
                )}
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {field.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl text-center"
                >
                  <tech.icon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Case Studies Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'قصص نجاح' : 'Success Stories'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>نتائج <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">حقيقية</span> لعملاء حقيقيين</>
                ) : (
                  <><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Real</span> Results for Real Clients</>
                )}
              </h2>
            </div>

            <div className="space-y-12">
              {field.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 border border-purple-200 dark:border-purple-900/30"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Info */}
                    <div>
                      <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                        <span className="text-sm font-bold text-blue-600 dark:text-cyan-400">{study.industry}</span>
                      </div>
                      <h3 className={`text-3xl font-bold text-gray-900 dark:text-white mb-4 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                        {study.clientName}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className={`text-lg font-bold text-gray-900 dark:text-white mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {direction === 'rtl' ? '🎯 التحدي' : '🎯 Challenge'}
                          </h4>
                          <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h4 className={`text-lg font-bold text-gray-900 dark:text-white mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {direction === 'rtl' ? '💡 الحل' : '💡 Solution'}
                          </h4>
                          <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Testimonial */}
                      {study.testimonial && (
                        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                          <div className="flex items-start gap-4">
                            <div className="text-4xl text-blue-600 dark:text-cyan-400">"</div>
                            <div>
                              <p className={`text-gray-700 dark:text-gray-300 italic mb-4 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                {study.testimonial.quote}
                              </p>
                              <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                                <p className="font-bold text-gray-900 dark:text-white">{study.testimonial.author}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{study.testimonial.position}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right: Results */}
                    <div>
                      <h4 className={`text-lg font-bold text-gray-900 dark:text-white mb-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                        {direction === 'rtl' ? '📊 النتائج' : '📊 Results'}
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, rIndex) => (
                          <div
                            key={rIndex}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                          >
                            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-600 mb-2">
                              {result.value}
                            </div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Industry Insights Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')]"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-purple-300 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'رؤى السوق' : 'Market Insights'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                {direction === 'rtl' ? (
                  <>لماذا <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">التحول الرقمي</span> الآن؟</>
                ) : (
                  <>Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Transformation</span> Now?</>
                )}
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2">
                  {field.industryInsights.marketSize}
                </div>
                <div className="text-white/80">{direction === 'rtl' ? 'حجم السوق العالمي' : 'Global Market Size'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2">
                  {field.industryInsights.growthRate}
                </div>
                <div className="text-white/80">{direction === 'rtl' ? 'معدل النمو السنوي' : 'Annual Growth Rate'}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 mb-2">
                  {field.industryInsights.keyTrends.length}+
                </div>
                <div className="text-white/80">{direction === 'rtl' ? 'اتجاهات رئيسية' : 'Key Trends'}</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
              <h3 className={`text-2xl font-bold mb-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {direction === 'rtl' ? 'الاتجاهات الرئيسية' : 'Key Trends'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {field.industryInsights.keyTrends.map((trend, index) => (
                  <div key={index} className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/90">{trend}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <p className={`text-lg text-white/90 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {field.industryInsights.whyDigital}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-blue-600 dark:text-cyan-400 font-bold tracking-wider text-sm uppercase mb-2 block">
                {direction === 'rtl' ? 'أسئلة شائعة' : 'FAQ'}
              </span>
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {direction === 'rtl' ? (
                  <>أسئلة <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">متكررة</span></>
                ) : (
                  <>Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Questions</span></>
                )}
              </h2>
            </div>

            <div className="space-y-4">
              {field.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                  >
                    <span className="font-bold text-gray-900 dark:text-white pr-4">{item.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === index && (
                    <div className={`px-6 py-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 border-t border-gray-200 dark:border-gray-700 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Final CTA Section */}
        <section className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Urgency Banner */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-300 font-bold">{field.contact.urgency}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className={`${direction === 'rtl' ? 'lg:order-2 text-right' : 'text-left'}`}>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  {field.contact.title}
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {field.contact.description}
                </p>

                {/* Contact Options */}
                <div className="space-y-4">
                  <button className="w-full py-4 bg-white text-purple-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{field.contact.primaryButton}</span>
                  </button>
                  <button className="w-full py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{field.contact.secondaryButton}</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white/80 text-sm">{direction === 'rtl' ? 'استشارة مجانية' : 'Free Consultation'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-white/80 text-sm">{direction === 'rtl' ? 'رد خلال 24 ساعة' : '24h Response'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-white/80 text-sm">{direction === 'rtl' ? 'ضمان الجودة' : 'Quality Guaranteed'}</span>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className={`${direction === 'rtl' ? 'lg:order-1' : ''}`}>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <h3 className={`text-2xl font-bold mb-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {direction === 'rtl' ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder={direction === 'rtl' ? 'الاسم الكامل' : 'Full Name'}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder={direction === 'rtl' ? 'البريد الإلكتروني' : 'Email Address'}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="tel"
                      placeholder={direction === 'rtl' ? 'رقم الهاتف' : 'Phone Number'}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      rows={4}
                      placeholder={direction === 'rtl' ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-purple-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{direction === 'rtl' ? 'إرسال الطلب' : 'Submit Request'}</span>
                      <Rocket className="w-5 h-5" />
                    </button>
                  </form>
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


