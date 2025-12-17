import { Award, Users, Briefcase, Clock, UserCheck, Zap, Cpu, MessageSquare, Layers, ShieldCheck } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface WhyChooseUsProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

const statIcons = [Award, Users, Briefcase, Clock];

export default function WhyChooseUs({ direction, t }: WhyChooseUsProps) {
const stats = [
    { ...t.whyChooseUs.stats.years, icon: statIcons[0] },
    { ...t.whyChooseUs.stats.clients, icon: statIcons[1] },
    { ...t.whyChooseUs.stats.projects, icon: statIcons[2] },
    { ...t.whyChooseUs.stats.support, icon: statIcons[3] },
];

const features = [
    { ...t.whyChooseUs.features.expert, icon: UserCheck },
    { ...t.whyChooseUs.features.agile, icon: Zap },
    { ...t.whyChooseUs.features.tech, icon: Cpu },
    { ...t.whyChooseUs.features.communication, icon: MessageSquare },
    { ...t.whyChooseUs.features.scalable, icon: Layers },
    { ...t.whyChooseUs.features.quality, icon: ShieldCheck },
];
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/5"></div>

      <div className={`absolute top-0 ${direction === 'rtl' ? 'left-0' : 'right-0'} w-96 h-96 bg-blue-500/10 rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-0 ${direction === 'rtl' ? 'right-0' : 'left-0'} w-96 h-96 bg-blue-500/10 rounded-full blur-3xl`}></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
             <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
               {t.whyChooseUs.badge}
             </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t.whyChooseUs.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.whyChooseUs.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>

              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <div className="text-4xl sm:text-5xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>

                <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>

                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  // FORCE LTR LAYOUT VISUALLY:
                  // Even (0): Title Left, Card Right.
                  // Odd (1): Card Left, Title Right.
                  
                  index % 2 === 0 
                    ? (direction === 'rtl' ? 'md:flex-row-reverse' : 'md:flex-row') 
                    : (direction === 'rtl' ? 'md:flex-row' : 'md:flex-row-reverse')
                }`}
              >
                {/* Timeline Content Side (Title & Icon) */}
                <div className={`w-full md:w-1/2 flex ${
                  // Padding Logic:
                  // Even (Left Column): Always needs padding-right (pr) to space from center.
                  // Odd (Right Column): Always needs padding-left (pl) to space from center.
                  // Alignment Logic:
                  // Even: Needs to align Right (towards center). LTR: justify-end, RTL: justify-start.
                  // Odd: Needs to align Left (towards center). LTR: justify-start, RTL: justify-end.
                  
                  index % 2 === 0 
                    ? (direction === 'rtl' ? 'justify-start md:pr-16' : 'justify-end md:pr-16') 
                    : (direction === 'rtl' ? 'justify-end md:pl-16' : 'justify-start md:pl-16')
                }`}>
                  <div className={`text-center ${
                    // Even: Title on Left -> Align Right (towards center)
                    // Odd: Title on Right -> Align Left (towards center)
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className={`hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mb-2 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <feature.icon className="w-5 h-5" />
                      <span>0{index + 1}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-600 rounded-full z-10 hidden md:block shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"></div>

                {/* Description Content Side (Card) */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                }`}>
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 relative group ${
                      // Text inside card: Arabic Right, English Left
                      direction === 'rtl' ? 'text-right' : 'text-left'
                  }`}>
                    {/* Mobile Icon (Visible only on mobile) */}
                    <div className="md:hidden mb-4 flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                            <feature.icon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">0{index + 1}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                    
                    {/* Arrow Decoration - Points towards center */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 transform rotate-45 ${
                        index % 2 === 0 
                            ? '-left-1.5 border-b border-l border-t-0 border-r-0' // Card on Right -> Arrow on Left
                            : '-right-1.5 border-t border-r border-b-0 border-l-0' // Card on Left -> Arrow on Right
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
