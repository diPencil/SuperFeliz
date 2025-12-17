import { ArrowRight, Sparkles } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface CTASectionProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function CTASection({ direction, t }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600"></div>

      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-0 ${direction === 'rtl' ? 'right-1/4' : 'left-1/4'} w-96 h-96 bg-white rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-0 ${direction === 'rtl' ? 'left-1/4' : 'right-1/4'} w-96 h-96 bg-white rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300 cursor-default border border-white/30">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-white font-bold text-xs uppercase tracking-wider">{t.cta.badge}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          {t.cta.title1}
          <br />
          <span className="text-white">
            {t.cta.title2}
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`group px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3`}>
            {direction === 'rtl' ? (
              <>
                <span>{t.cta.letsTalk}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-2 transition-transform rotate-180" />
              </>
            ) : (
              <>
                <span>{t.cta.letsTalk}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </button>
          <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300">
            {t.cta.viewPricing}
          </button>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-white/80 mb-4 text-sm sm:text-base">{t.cta.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-70">
            {[
              { name: 'Microsoft', logo: '/images/worldwide/microsoft-logo.png' },
              { name: 'Adobe', logo: '/images/worldwide/Adobe-Logo.png' },
              { name: 'IBM', logo: '/images/worldwide/IBM-Logo-1956.png' },
              { name: 'Google', logo: '/images/worldwide/Googlecloud-logo.png' },
              { name: 'Amazon', logo: '/images/worldwide/AWS.png' },
              { name: 'Meta', logo: '/images/worldwide/meta-logo.webp' },
              { name: 'Hostinger', logo: '/images/worldwide/Hostinger_logo.png' },
              { name: 'Salesforce', logo: '/images/worldwide/Sf-marketingcloud-logo.png' }
            ].map((brand) => (
              <div key={brand.name} className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-8 sm:w-16 sm:h-10 object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
