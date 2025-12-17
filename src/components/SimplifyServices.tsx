import { FileText, Sparkles, Lightbulb, MessageCircle } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface SimplifyServicesProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

const featureIcons = [FileText, Sparkles, Lightbulb, MessageCircle];

export default function SimplifyServices({ direction, t }: SimplifyServicesProps) {
  const features = [
    { ...t.simplifyServices.items.artFromScratch, icon: featureIcons[0] },
    { ...t.simplifyServices.items.innovativeIdeas, icon: featureIcons[1] },
    { ...t.simplifyServices.items.teamExpertise, icon: featureIcons[2] },
    { ...t.simplifyServices.items.liveChatSupport, icon: featureIcons[3] },
  ];

  return (
    <section id="simplify-services" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background with dotted pattern at top */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
        {/* Dotted pattern overlay */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/3 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Features Grid - 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700"
              >
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

