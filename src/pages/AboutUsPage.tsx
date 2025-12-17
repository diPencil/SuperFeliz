import { ArrowRight, Users, Clock, Target, Globe, Trophy, Heart, Lightbulb, Shield } from 'lucide-react';
import { translations } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutUsPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

export default function AboutUsPage({ direction, theme, toggleTheme, toggleDirection, t }: AboutUsPageProps) {
  const stats = [
    { number: '500+', label: direction === 'rtl' ? 'علامة تجارية عالمية' : 'Global Brands', icon: Globe },
    { number: '8+', label: direction === 'rtl' ? 'سنوات خبرة' : 'Years Experience', icon: Clock },
    { number: '150+', label: direction === 'rtl' ? 'مشروع مكتمل' : 'Projects Completed', icon: Trophy },
    { number: '98%', label: direction === 'rtl' ? 'رضا العملاء' : 'Client Satisfaction', icon: Heart }
  ];

  const values = [
    {
      icon: Target,
      title: direction === 'rtl' ? 'التميز في العمل' : 'Excellence in Work',
      description: direction === 'rtl'
        ? 'نسعى دائماً لتحقيق أعلى مستويات الجودة في جميع مشاريعنا وخدماتنا.'
        : 'We always strive to achieve the highest levels of quality in all our projects and services.'
    },
    {
      icon: Lightbulb,
      title: direction === 'rtl' ? 'الابتكار المستمر' : 'Continuous Innovation',
      description: direction === 'rtl'
        ? 'نتبنى أحدث التقنيات والحلول المبتكرة لنبقى في المقدمة دائماً.'
        : 'We adopt the latest technologies and innovative solutions to always stay at the forefront.'
    },
    {
      icon: Shield,
      title: direction === 'rtl' ? 'الثقة والأمان' : 'Trust & Security',
      description: direction === 'rtl'
        ? 'نضمن خصوصية وأمان بيانات عملائنا في جميع المشاريع والخدمات.'
        : 'We ensure the privacy and security of our clients\' data in all projects and services.'
    },
    {
      icon: Users,
      title: direction === 'rtl' ? 'الشراكة الاستراتيجية' : 'Strategic Partnership',
      description: direction === 'rtl'
        ? 'نبني علاقات طويلة الأمد مع عملائنا بناءً على الثقة والتعاون المستمر.'
        : 'We build long-term relationships with our clients based on trust and continuous cooperation.'
    }
  ];

  const team = [
    {
      name: direction === 'rtl' ? 'أحمد محمد' : 'Ahmed Mohamed',
      role: direction === 'rtl' ? 'المدير التنفيذي' : 'CEO',
      image: '/images/team/ceo.jpg',
      bio: direction === 'rtl'
        ? 'ريادي أعمال مع أكثر من 10 سنوات في مجال التكنولوجيا والتحول الرقمي.'
        : 'Business leader with over 10 years in technology and digital transformation.'
    },
    {
      name: direction === 'rtl' ? 'فاطمة علي' : 'Fatima Ali',
      role: direction === 'rtl' ? 'مدير التطوير' : 'Development Manager',
      image: '/images/team/dev-manager.jpg',
      bio: direction === 'rtl'
        ? 'خبيرة في تطوير الحلول الرقمية والتطبيقات الحديثة.'
        : 'Expert in developing digital solutions and modern applications.'
    },
    {
      name: direction === 'rtl' ? 'محمد حسن' : 'Mohamed Hassan',
      role: direction === 'rtl' ? 'مدير التصميم' : 'Design Manager',
      image: '/images/team/design-manager.jpg',
      bio: direction === 'rtl'
        ? 'مصمم إبداعي متخصص في تجربة المستخدم وواجهات المستخدم.'
        : 'Creative designer specializing in user experience and user interfaces.'
    }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6 hover:scale-105 transition-transform duration-300">
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                {direction === 'rtl' ? 'من نحن' : 'About Us'}
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {direction === 'rtl' ? 'قصتنا ومهمتنا' : 'Our Story & Mission'}
            </h1>

            <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {direction === 'rtl'
                ? 'نحن شركة رائدة في مجال الحلول الرقمية نساعد الشركات على النمو والازدهار في العصر الرقمي من خلال خدماتنا المبتكرة والحلول المتكاملة.'
                : 'We are a leading company in the field of digital solutions, helping businesses grow and thrive in the digital age through our innovative services and integrated solutions.'
              }
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center text-white">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              {/* Image */}
              <div className={`${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'} order-2 lg:order-1`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/images/about/story.jpg"
                    alt="Our Story"
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/Comprehensive Digital Solutions En.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'} order-1 lg:order-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {direction === 'rtl' ? 'قصتنا' : 'Our Story'}
                </h2>

                <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    {direction === 'rtl'
                      ? 'بدأت رحلتنا في عام 2016 مع فكرة بسيطة: مساعدة الشركات الصغيرة والمتوسطة على الدخول في العالم الرقمي بكل سهولة وفعالية.'
                      : 'Our journey began in 2016 with a simple idea: to help small and medium-sized businesses enter the digital world with ease and efficiency.'
                    }
                  </p>

                  <p>
                    {direction === 'rtl'
                      ? 'منذ ذلك الحين، تطورت Pencil لتصبح واحدة من أبرز الشركات في مجال الحلول الرقمية في المنطقة، مع فريق من الخبراء والمطورين المحترفين.'
                      : 'Since then, Pencil has evolved to become one of the leading companies in the field of digital solutions in the region, with a team of experts and professional developers.'
                    }
                  </p>

                  <p>
                    {direction === 'rtl'
                      ? 'نؤمن بأن التكنولوجيا يجب أن تكون أداة تمكن الأعمال من النمو والتوسع، وليس عقبة أمام التقدم.'
                      : 'We believe that technology should be a tool that enables businesses to grow and expand, not an obstacle to progress.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'قيمنا' : 'Our Values'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {direction === 'rtl'
                  ? 'القيم التي توجه عملنا وتحدد هويتنا كشركة موثوقة ومبتكرة.'
                  : 'The values that guide our work and define our identity as a trusted and innovative company.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {direction === 'rtl' ? 'فريقنا' : 'Our Team'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {direction === 'rtl'
                  ? 'تعرف على الفريق الذي يقف وراء نجاح مشاريعنا وتميز خدماتنا.'
                  : 'Meet the team behind our project successes and outstanding services.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {direction === 'rtl' ? 'هل أنت جاهز للبدء؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {direction === 'rtl'
                ? 'دعنا نساعدك في تحقيق أهدافك الرقمية ونقل أعمالك إلى المستوى التالي.'
                : 'Let us help you achieve your digital goals and take your business to the next level.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <span>{direction === 'rtl' ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
                <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>{direction === 'rtl' ? 'اتصل بنا' : 'Contact Us'}</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/services'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
              >
                <span>{direction === 'rtl' ? 'استكشف خدماتنا' : 'Explore Our Services'}</span>
                <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <span>{direction === 'rtl' ? 'اتصل بنا' : 'Contact Us'}</span>
              </button>
            </div>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
