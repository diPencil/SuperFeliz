import { useState, useEffect } from 'react';
import { Palette, TrendingUp, Code, Smartphone, Cloud, Settings, Printer, Server, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

const serviceIcons = [Palette, TrendingUp, Code, Smartphone, 'cloud', 'network', Printer, Server];

// Service features list will be taken from translations

export default function Services({ direction, t }: ServicesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use 8 services for the cards (6 existing + 2 additional)
const services = [
    { ...t.services.items.branding, key: 'branding', icon: serviceIcons[0] },
    { ...t.services.items.marketing, key: 'marketing', icon: serviceIcons[1] },
    { ...t.services.items.web, key: 'web', icon: serviceIcons[2] },
    { ...t.services.items.mobile, key: 'mobile', icon: serviceIcons[3] },
    { ...t.services.items.cloud, key: 'cloud', icon: serviceIcons[4] },
    { ...t.services.items.consulting, key: 'consulting', icon: serviceIcons[5] },
  {
      key: 'printing',
      title: direction === 'rtl' ? 'خدمات الطباعة' : 'Printing Services',
      description: direction === 'rtl' ? 'خدمات طباعة عالية الجودة لجميع احتياجاتك التجارية والشخصية' : 'High-quality printing services for all your business and personal needs.',
      icon: serviceIcons[6]
  },
  {
      key: 'server',
      title: direction === 'rtl' ? 'إدارة الخوادم' : 'Server Management',
      description: direction === 'rtl' ? 'إدارة وصيانة الخوادم باحترافية عالية لضمان الأداء الأمثل' : 'Professional server management and maintenance to ensure optimal performance.',
      icon: serviceIcons[7]
    },
  ];

  // Cards per view: 1 on mobile, 2 on tablet, 4 on desktop
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens and above - always 4
      if (window.innerWidth >= 640) return 2;  // sm screens - 2 cards
      return 1; // mobile - 1 card
    }
    return 4; // default
  };

  const [cardsPerView, setCardsPerView] = useState(4);
  const [isInfinite, setIsInfinite] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      setIsInfinite(newCardsPerView === 1); // Enable infinite only on mobile
      // Reset currentIndex if it exceeds maxIndex (only for non-infinite)
      if (newCardsPerView > 1) {
        const newMaxIndex = Math.max(0, Math.ceil((services.length - newCardsPerView) / newCardsPerView));
        if (currentIndex > newMaxIndex) {
          setCurrentIndex(newMaxIndex);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, services.length]);

  const maxIndex = cardsPerView === 1 
    ? services.length - 1 // For mobile: 0 to (services.length - 1)
    : Math.max(0, Math.ceil((services.length - cardsPerView) / cardsPerView)); // For desktop: groups

  const nextSlide = () => {
    if (isInfinite) {
      // Infinite scroll: wrap around
      setCurrentIndex((prev) => (prev + 1) % services.length);
    } else {
      // Normal scroll: stop at end
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (isInfinite) {
      // Infinite scroll: wrap around backwards
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    } else {
      // Normal scroll: stop at start
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const goToSlide = (index: number) => {
    if (isInfinite) {
      setCurrentIndex(index);
    } else {
      setCurrentIndex(Math.min(index, maxIndex));
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:pt-8 lg:pb-24 px-4 sm:px-6">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -mt-48 sm:-mt-56 lg:-mt-64"></div>
      <div className="relative max-w-7xl mx-auto">
        {/* Top Section: Image + Text */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center`}>
          {/* Image Section - Right in RTL, Left in LTR */}
          <div className={`${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'} order-2 lg:order-1`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={direction === 'rtl' ? "/images/Comprehensive Digital Solutions Ar.jpg" : "/images/Comprehensive Digital Solutions En.jpg"}
                alt="Digital Services" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text Section - Left in RTL, Right in LTR */}
          <div className={`${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'} order-1 lg:order-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                {t.services.badge}
            </span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {t.services.title}
          </h2>
            
            <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {t.services.description}
            </p>

            {/* Features List - Right aligned in RTL */}
            <ul className={`space-y-3 sm:space-y-4 mb-6 sm:mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {t.services.features.map((feature, index) => (
                <li key={index} className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                  <CheckCircle className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ${direction === 'rtl' ? 'order-2' : ''}`} />
                  <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Read More Button - Same alignment as text */}
            <button
              onClick={() => window.location.href = '/services'}
              className={`group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <span>{t.services.learnMore.replace(' →', '').replace('← ', '')}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Section: 6 Service Cards Carousel */}
        <div className="relative" dir={direction}>
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: direction === 'rtl' 
                  ? `translateX(${cardsPerView === 1 ? currentIndex * 100 : currentIndex * 100}%)`
                  : `translateX(-${cardsPerView === 1 ? currentIndex * 100 : currentIndex * 100}%)`,
              }}
            >
              {/* Mobile: Show one card at a time, Desktop: Show groups of 4 */}
              {cardsPerView === 1 ? (
                // Mobile: One card per slide - Reverse order in RTL
                (direction === 'rtl' ? [...services].reverse() : services).map((service, index) => {
                  const actualIndex = direction === 'rtl' ? services.length - 1 - index : index;
                  return (
            <div
                      key={actualIndex}
                      className="flex-shrink-0 w-full px-2"
                    >
                      <div
                        className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col transition-all duration-300 min-h-[320px] sm:min-h-[360px] ${
                          actualIndex === 0 
                            ? 'bg-blue-700 dark:bg-blue-800 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]' 
                            : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                        }`}
                      >
                        <div className={`flex flex-col h-full justify-between ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                          <div className={`w-full flex flex-col ${direction === 'rtl' ? 'items-end' : 'items-start'}`}>
                            {/* Icon - Left side in both RTL and LTR */}
                            <div className={`mb-5 flex justify-start w-full`}>
                              <div className={`rounded-xl p-2 ${
                                actualIndex === 0
                                  ? 'bg-white/10'
                                  : 'bg-gray-100 dark:bg-gray-700'
                              }`}>
                                {typeof service.icon === 'string' ? (
                                  service.icon === 'cloud' ? (
                                    <img
                                      src="/images/icons/cloud-svgrepo-com.svg"
                                      alt="Cloud Services"
                                      className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                        actualIndex === 0
                                          ? 'filter brightness-0 invert'
                                          : 'filter grayscale brightness-0 opacity-60'
                                      }`}
                                    />
                                  ) : service.icon === 'network' ? (
                                    <img
                                      src="/images/icons/network-svgrepo-com.svg"
                                      alt="IT Consulting"
                                      className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                        actualIndex === 0
                                          ? 'filter brightness-0 invert'
                                          : 'filter grayscale brightness-0 opacity-60'
                                      }`}
                                    />
                                  ) : (
                                    <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 stroke-2 ${
                                      actualIndex === 0
                                        ? 'text-white'
                                        : 'text-gray-700 dark:text-gray-300'
                                    }`} strokeWidth={2} fill="none" />
                                  )
                                ) : (
                                  <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 stroke-2 ${
                                    actualIndex === 0
                                      ? 'text-white'
                                      : 'text-gray-700 dark:text-gray-300'
                                  }`} strokeWidth={2} fill="none" />
                                )}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className={`text-lg sm:text-xl font-bold mb-3 leading-tight w-full ${direction === 'rtl' ? 'text-right' : 'text-left'} ${
                              actualIndex === 0 
                                ? 'text-white' 
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-6 min-h-[60px] w-full ${direction === 'rtl' ? 'text-right' : 'text-left'} ${
                              actualIndex === 0 
                                ? 'text-white' 
                                : 'text-gray-600 dark:text-gray-400'
                            }`}>
                              {service.description}
                            </p>
                          </div>

                          {/* Learn More Button - Links to individual service pages */}
                          <button
                            onClick={() => {
                              const serviceRoutes: { [key: string]: string } = {
                                'branding': '/services/graphic-design',
                                'marketing': '/services/marketing-social-media',
                                'web': '/services/web-development',
                                'mobile': '/services/mobile-apps',
                                'cloud': '/services/hosting-cloud',
                                'consulting': '/services/it-consulting',
                                'printing': '/services/printing-services',
                                'server': '/services/server-management'
                              };
                              window.location.href = serviceRoutes[service.key] || `/services/${service.key}`;
                            }}
                            className={`group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium w-full transition-all duration-300 ${
                              actualIndex === 0
                                ? 'bg-white text-blue-700 hover:bg-gray-50'
                                : 'bg-blue-700 text-white hover:bg-blue-800'
                            } ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                          >
                            <span>{direction === 'rtl' ? 'عرض الخدمة' : 'Learn More'}</span>
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${actualIndex === 0 ? 'text-blue-700' : 'text-white'} ${direction === 'rtl' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                // Desktop: Group services into sets of 4 - Reverse groups and cards in RTL
                Array.from({ length: Math.ceil(services.length / 4) }).map((_, groupIndex) => {
                  const actualGroupIndex = direction === 'rtl' 
                    ? Math.ceil(services.length / 4) - 1 - groupIndex 
                    : groupIndex;
                  const groupServices = services.slice(actualGroupIndex * 4, actualGroupIndex * 4 + 4);
                  // Reverse both groups and cards within each group in RTL
                  const reversedGroupServices = direction === 'rtl' ? [...groupServices].reverse() : groupServices;
                  
                  return (
                    <div
                      key={actualGroupIndex}
                      className={`flex-shrink-0 w-full flex gap-5 sm:gap-6 px-1 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                    >
                      {reversedGroupServices.map((service, cardIndex) => {
                        const absoluteIndex = actualGroupIndex * 4 + (direction === 'rtl' ? 3 - cardIndex : cardIndex);
                        return (
                          <div
                            key={absoluteIndex}
                            className="flex-1 min-w-0"
                          >
                        <div
                          className={`group relative p-6 sm:p-8 rounded-2xl h-full flex flex-col transition-all duration-300 min-h-[320px] sm:min-h-[360px] ${
                            absoluteIndex === 0 
                              ? 'bg-blue-700 dark:bg-blue-800 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]' 
                              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                          }`}
                        >
                          <div className={`flex flex-col h-full justify-between ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            <div className={`w-full flex flex-col ${direction === 'rtl' ? 'items-end' : 'items-start'}`}>
                              {/* Icon - Left side in both RTL and LTR */}
                              <div className={`mb-5 flex justify-start w-full`}>
                                <div className={`rounded-xl p-2 ${
                                  absoluteIndex === 0
                                    ? 'bg-white/10'
                                    : 'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                  {typeof service.icon === 'string' ? (
                                    service.icon === 'cloud' ? (
                                      <img
                                        src="/images/icons/cloud-svgrepo-com.svg"
                                        alt="Cloud Services"
                                        className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                          absoluteIndex === 0
                                            ? 'filter brightness-0 invert'
                                            : 'filter grayscale brightness-0 opacity-60'
                                        }`}
                                      />
                                    ) : service.icon === 'network' ? (
                                      <img
                                        src="/images/icons/network-svgrepo-com.svg"
                                        alt="IT Consulting"
                                        className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                          absoluteIndex === 0
                                            ? 'filter brightness-0 invert'
                                            : 'filter grayscale brightness-0 opacity-60'
                                        }`}
                                      />
                                    ) : (
                                      <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 stroke-2 ${
                                        absoluteIndex === 0
                                          ? 'text-white'
                                          : 'text-gray-700 dark:text-gray-300'
                                      }`} strokeWidth={2} fill="none" />
                                    )
                                  ) : (
                                    <service.icon className={`w-8 h-8 sm:w-10 sm:h-10 stroke-2 ${
                                      absoluteIndex === 0
                                        ? 'text-white'
                                        : 'text-gray-700 dark:text-gray-300'
                                    }`} strokeWidth={2} fill="none" />
                                  )}
                                </div>
                </div>

                              {/* Title */}
                              <h3 className={`text-lg sm:text-xl font-bold mb-3 leading-tight w-full ${direction === 'rtl' ? 'text-right' : 'text-left'} ${
                                absoluteIndex === 0 
                                  ? 'text-white' 
                                  : 'text-gray-900 dark:text-white'
                              }`}>
                  {service.title}
                </h3>

                              {/* Description - Fixed height to ensure same card size */}
                              <p className={`text-sm leading-relaxed mb-6 min-h-[60px] w-full ${direction === 'rtl' ? 'text-right' : 'text-left'} ${
                                absoluteIndex === 0 
                                  ? 'text-white' 
                                  : 'text-gray-600 dark:text-gray-400'
                              }`}>
                  {service.description}
                </p>
                            </div>

                            {/* Learn More Button - Links to individual service pages */}
                            <button
                              onClick={() => {
                                const serviceRoutes: { [key: string]: string } = {
                                  'branding': '/services/graphic-design',
                                  'marketing': '/services/marketing-social-media',
                                  'web': '/services/web-development',
                                  'mobile': '/services/mobile-apps',
                                  'cloud': '/services/hosting-cloud',
                                  'consulting': '/services/it-consulting',
                                  'printing': '/services/printing-services',
                                  'server': '/services/server-management'
                                };
                                window.location.href = serviceRoutes[service.key] || `/services/${service.key}`;
                              }}
                              className={`group/btn flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium w-full transition-all duration-300 ${
                                absoluteIndex === 0
                                  ? 'bg-white text-blue-700 hover:bg-gray-50'
                                  : 'bg-blue-700 text-white hover:bg-blue-800'
                              } ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                            >
                              <span>{direction === 'rtl' ? 'عرض الخدمة' : 'Learn More'}</span>
                              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${absoluteIndex === 0 ? 'text-blue-700' : 'text-white'} ${direction === 'rtl' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={direction === 'rtl' ? nextSlide : prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg"
              aria-label="Previous"
            >
              {direction === 'rtl' ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>

            {/* Dots Indicator - Only show on mobile (infinite) */}
            {isInfinite ? (
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
                </div>
            ) : (
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 dark:bg-gray-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            <button
              onClick={direction === 'rtl' ? prevSlide : nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-lg"
              aria-label="Next"
            >
              {direction === 'rtl' ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
            </div>
        </div>
      </div>
    </section>
  );
}
