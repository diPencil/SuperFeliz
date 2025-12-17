import { Layers } from 'lucide-react';
import { translations } from '../translations';

interface StartBusinessProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function StartBusiness({ direction, t }: StartBusinessProps) {
  const items = [
    {
      icon: '/images/icons/Graphic Design.gif',
      title: t.startBusiness.items.graphic,
    },
    {
      icon: '/images/icons/Web Design.gif',
      title: t.startBusiness.items.web,
    },
    {
      icon: '/images/icons/App Design.gif',
      title: t.startBusiness.items.app,
    },
    {
      icon: '/images/icons/E-Commerce solution.gif',
      title: t.startBusiness.items.ecommerce,
    },
    {
      icon: '/images/icons/Marketing Plan.gif',
      title: t.startBusiness.items.marketing,
    },
    {
      icon: '/images/icons/Email Plan.gif',
      title: t.startBusiness.items.email,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
             <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
               {t.startBusiness.badge}
             </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] dark:text-white mb-6 leading-tight text-center">
          {t.startBusiness.title}
        </h2>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {t.startBusiness.description}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start md:justify-center gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-full hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Link - Bottom */}
        <div className="flex justify-center mt-12">
          <a
            href="#expertise"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-md ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
          >
            <Layers className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{t.startBusiness.link}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

