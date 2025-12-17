import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import { translations } from '../translations';

interface PricingProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function Pricing({ direction, t }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    t.pricing.items.amazon,
    t.pricing.items.social,
    t.pricing.items.corporate,
    t.pricing.items.website
  ];

  const calculatePrice = (price: string, original: boolean = false) => {
    const numPrice = parseFloat(price);
    if (billingCycle === 'annual') {
      // 20% discount for annual billing (displayed as monthly cost)
      // Or total annual cost? Usually "billed annually" shows the discounted monthly price.
      // Let's show discounted monthly price.
      const discounted = numPrice * 0.8;
      return Math.floor(discounted);
    }
    return price;
  };

  const calculateCents = (cents: string) => {
     if (billingCycle === 'annual') {
         return '99'; // Keep it simple for now
     }
     return cents;
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden" id="pricing">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
             <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
               {t.pricing.badge}
             </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.pricing.description}
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 p-1.5 rounded-full border border-gray-200 dark:border-gray-700 inline-flex items-center relative cursor-pointer">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t.pricing.monthly || 'Monthly'}
            </button>
            <button 
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                billingCycle === 'annual' 
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t.pricing.annual || 'Annual'}
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                billingCycle === 'annual'
                  ? 'bg-white/20 text-white dark:bg-black/10 dark:text-gray-900'
                  : 'bg-green-100 text-green-700'
              }`}>
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            // Highlight logic
            const isHighlighted = index === 2; 
            
            const currentPrice = calculatePrice(plan.price);
            const currentOriginalPrice = calculatePrice(plan.originalPrice);
            const currentCents = calculateCents(plan.cents);

            return (
            <div 
              key={index} 
                className={`relative group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 border ${
                  isHighlighted 
                    ? 'border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]' 
                    : 'border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800'
                }`}
            >
              {/* Badge */}
                {(plan.badge) && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                    plan.badge === 'MOST USED' || plan.badge === 'الأكثر استخداماً'
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  }`}>
                    {plan.badge}
                </div>
              )}

              {/* Card Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 min-h-[40px]">
                  {plan.subtitle}
                </p>
              </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm text-gray-400 line-through font-medium">
                      ${currentOriginalPrice}
                    </span>
                    </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                      ${currentPrice}
                    </span>
                    {currentCents && (
                      <span className="text-xl font-bold text-gray-900 dark:text-white -mt-4">
                        {currentCents}
                      </span>
                    )}
                       </div>
                  <div className="text-sm text-gray-500 mt-2 font-medium">
                    {plan.period || '/month'}
                    
                    {/* Annual Billing Note */}
                    {billingCycle === 'annual' && (
                      <>
                        <span className="block text-xs text-green-600 font-normal mt-1">
                          {direction === 'rtl' ? 'يتم الدفع سنوياً' : 'Billed annually'}
                        </span>
                        {/* Corporate Identity (index 1) Annual Note */}
                        {index === 1 && plan.noteAnnual && (
                          <span className="block text-xs text-blue-600 font-normal mt-1">
                            {plan.noteAnnual}
                          </span>
                        )}
                      </>
                    )}

                    {/* Monthly Billing Note for Corporate Identity (index 1) */}
                    {index === 1 && billingCycle === 'monthly' && plan.noteMonthly && (
                       <span className="block text-xs text-red-500 font-normal mt-1">
                         {plan.noteMonthly}
                       </span>
                    )}

                    {/* Monthly Billing Note for Social Media (index 0) */}
                    {index === 0 && billingCycle === 'monthly' && plan.noteMonthly && (
                       <span className="block text-xs text-gray-500 font-normal mt-1">
                         {plan.noteMonthly}
                       </span>
                    )}

                    {/* Show installments info for SaaS (index 2) and Website Plans (index 3) only in Monthly mode */}
                    {(index === 2 || index === 3) && billingCycle === 'monthly' && plan.installments && (
                       <span className="block text-xs text-blue-600 font-normal mt-1">
                         {plan.installments}
                       </span>
                    )}
                    </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-300 mb-8 ${
                  isHighlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                }`}>
                  {t.pricing.viewPlans || 'Get Started'}
                </button>

                {/* Features / Description */}
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    {direction === 'rtl' ? 'ما يشمله:' : "What's included:"}
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {plan.description}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {plan.save}
                      </span>
                    </li>
                  </ul>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                 <Info className="w-4 h-4 flex-shrink-0" />
                 <p className="text-xs font-medium">
                     {direction === 'rtl' 
                        ? 'يتغير السعر الترويجي المتاح وفقًا للفترات المتاحة' 
                        : 'The available promotional price changes according to the available periods'}
          </p>
            </div>
        </div>
      </div>
    </section>
  );
}
