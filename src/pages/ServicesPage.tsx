import { useState } from 'react';
import { Palette, TrendingUp, Code, Smartphone, Cloud, Settings, CheckCircle, ArrowRight, ChevronDown, ChevronUp, Users, Clock, Award, Star } from 'lucide-react';
import { translations, Language } from '../translations';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ServicesPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: typeof translations.en;
}

const serviceIcons = [Palette, TrendingUp, Code, Smartphone, 'cloud', 'network'];

export default function ServicesPage({ direction, theme, toggleTheme, toggleDirection, t }: ServicesPageProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleServiceExpansion = (serviceKey: string) => {
    setExpandedService(expandedService === serviceKey ? null : serviceKey);
  };

  const services = t.services?.items ? [
    { ...t.services.items.branding, icon: serviceIcons[0], key: 'branding' },
    { ...t.services.items.marketing, icon: serviceIcons[1], key: 'marketing' },
    { ...t.services.items.web, icon: serviceIcons[2], key: 'web' },
    { ...t.services.items.mobile, icon: serviceIcons[3], key: 'mobile' },
    { ...t.services.items.cloud, icon: serviceIcons[4], key: 'cloud' },
    { ...t.services.items.consulting, icon: serviceIcons[5], key: 'consulting' },
  ] : [];

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
                {t.services.badge}
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {t.services.page.hero.title}
            </h1>

            <p className={`text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              {t.services.page.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {t.services.features.map((feature, index) => (
                <div key={index} className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.title}
              </h2>
              <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services && services.length > 0 ? (
                services.map((service, index) => {
                  const isExpanded = expandedService === service.key;

                  return (
                  <div
                    key={service.key}
                    className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 ${
                      index === 0 ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                    }`}
                  >
                    {/* Featured Badge */}
                    {index === 0 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                          {direction === 'rtl' ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`mb-6 flex justify-start w-full`}>
                      <div className={`rounded-xl p-3 ${
                        index === 0
                          ? 'bg-blue-100 dark:bg-blue-900/30'
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {typeof service.icon === 'string' ? (
                          service.icon === 'cloud' ? (
                            <img
                              src="/images/icons/cloud-svgrepo-com.svg"
                              alt="Cloud Services"
                              className={`w-8 h-8 ${
                                index === 0
                                  ? 'filter brightness-0 invert opacity-70'
                                  : 'filter grayscale brightness-0 opacity-60'
                              }`}
                            />
                          ) : service.icon === 'network' ? (
                            <img
                              src="/images/icons/network-svgrepo-com.svg"
                              alt="IT Consulting"
                              className={`w-8 h-8 ${
                                index === 0
                                  ? 'filter brightness-0 invert opacity-70'
                                  : 'filter grayscale brightness-0 opacity-60'
                              }`}
                            />
                          ) : (
                            <service.icon className={`w-8 h-8 stroke-2 ${
                              index === 0
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-700 dark:text-gray-300'
                            }`} />
                          )
                        ) : (
                          <service.icon className={`w-8 h-8 stroke-2 ${
                            index === 0
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-300'
                          }`} />
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold mb-4 text-gray-900 dark:text-white ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className={`text-gray-600 dark:text-gray-400 mb-6 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                      {service.description}
                    </p>

                    {/* Expandable Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className={`text-gray-700 dark:text-gray-300 mb-4 leading-relaxed ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                          {service.detailedDescription}
                        </p>

                        {/* Features */}
                        <div className="mb-4">
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {direction === 'rtl' ? 'المميزات:' : 'Features:'}
                          </h4>
                          <ul className={`space-y-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h4 className={`font-semibold text-gray-900 dark:text-white mb-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {direction === 'rtl' ? 'الفوائد:' : 'Benefits:'}
                          </h4>
                          <ul className={`space-y-2 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className={`flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 mt-6">
                      {/* Learn More Button */}
                      <button
                        onClick={() => toggleServiceExpansion(service.key)}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          isExpanded
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        } ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                      >
                        <span>
                          {isExpanded
                            ? (direction === 'rtl' ? 'إخفاء التفاصيل' : 'Show Less')
                            : (direction === 'rtl' ? 'عرض التفاصيل' : 'Learn More')
                          }
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      {/* Check Service Button */}
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
                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}
                      >
                        <span>{direction === 'rtl' ? 'عرض الخدمة' : 'Check Service'}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                      </button>
                    </div>
                  </div>
                );
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    {direction === 'rtl' ? 'لا توجد خدمات متاحة حالياً' : 'No services available at the moment'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.page.howWeWork.title}
              </h2>
              <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.page.howWeWork.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.services.page.howWeWork.features.map((feature, index) => (
                <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
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

        {/* Our Approach Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${direction === 'rtl' ? 'lg:order-2' : 'lg:order-1'} ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t.services.page.ourApproach.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {t.services.page.ourApproach.description}
                </p>

                <div className="space-y-6">
                  {t.services.page.ourApproach.points.map((point, index) => (
                    <div key={index} className={`flex gap-4 ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-3"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${direction === 'rtl' ? 'lg:order-1' : 'lg:order-2'} order-1 lg:order-2`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/images/Comprehensive Digital Solutions En.jpg"
                    alt="Our Approach"
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Benefits Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.page.clientBenefits.title}
              </h2>
              <p className={`text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                {t.services.page.clientBenefits.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.page.clientBenefits.benefits.map((benefit, index) => (
                <div key={index} className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
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
              {t.services.page.cta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t.services.page.cta.description}
            </p>
            <button className={`inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 group ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              <span>{t.services.page.cta.button}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </button>
          </div>
        </section>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
