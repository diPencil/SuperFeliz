import { Bot, Phone, Share2, Clock } from 'lucide-react';
import { translations } from '../translations';

interface ContactSectionProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
  theme: 'dark' | 'light';
}

export default function ContactSection({ direction, t, theme }: ContactSectionProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column (Contact Info) */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-6">
               <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                 {t.contactSection.badge}
               </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t.contactSection.title}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              {t.contactSection.description}
            </p>

            {/* Contact Grid - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Chat Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                     <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                       {t.contactSection.chat.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{t.contactSection.chat.desc}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2">
                    <Bot className="w-3 h-3" />
                    {t.contactSection.chat.button}
                  </button>
                </div>
              </div>

              {/* Call Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                     <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                       {t.contactSection.call.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-1">{t.contactSection.call.desc}</p>
                    {/* Note Removed */}
                  </div>
                </div>
                <div className="mt-auto">
                  <a 
                    href={`tel:${t.contactSection.call.phone}`} 
                    className="w-full py-2 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3 h-3" />
                    {t.contactSection.call.button}
                  </a>
                </div>
              </div>

              {/* Follow Us Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                     <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                       {t.contactSection.follow.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">{t.contactSection.follow.desc}</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a href="#" className="flex items-center justify-center w-full py-2 border border-blue-200 dark:border-blue-800 rounded-full text-blue-600 dark:text-blue-400 font-bold text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                    {t.contactSection.follow.link}
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                     <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                       {t.contactSection.hours.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed mb-2">{t.contactSection.hours.desc}</p>
                  </div>
                </div>
                <div className="mt-auto">
                   <div className="w-full py-2 bg-gray-100 dark:bg-gray-700/50 rounded-full text-xs font-bold text-center text-gray-700 dark:text-gray-300">
                      {t.contactSection.hours.note}
                   </div>
                </div>
              </div>
            </div>

            {/* What Happens Next Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contactSection.stepsTitle}
              </h3>
              <div className="space-y-5 relative">
                {/* Connecting Line */}
                <div className={`absolute top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-800 ${direction === 'rtl' ? 'right-4' : 'left-4'}`}></div>

                {t.contactSection.steps.map((step, index) => (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Number Circle */}
                    <div className={`relative z-10 w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-600 flex items-center justify-center flex-shrink-0 font-bold text-blue-600 shadow-sm ${direction === 'rtl' ? 'order-1' : ''}`}>
                      {step.number}
                    </div>
                    {/* Text */}
                    <div className={`pt-1 ${direction === 'rtl' ? 'order-2 text-right' : ''}`}>
                      <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-[#E6F0F9] dark:bg-[#1E293B] rounded-[2.5rem] p-8 sm:p-12 sticky top-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    {t.contactSection.form.firstName} <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400/70" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    {t.contactSection.form.lastName} <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400/70" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  {t.contactSection.form.company}
                </label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400/70" 
                />
              </div>

              {/* Email and Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    {t.contactSection.form.email} <span className="text-blue-600">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400/70" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                    {t.contactSection.form.phone}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder-gray-400/70" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  {t.contactSection.form.help} <span className="text-blue-600">*</span>
                </label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-full border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                    <option value="">{t.contactSection.form.helpPlaceholder}</option>
                    <option value="branding">{t.services.items.branding.title}</option>
                    <option value="web">{t.services.items.web.title}</option>
                    <option value="app">{t.services.items.mobile.title}</option>
                    <option value="marketing">{t.services.items.marketing.title}</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ${direction === 'rtl' ? 'left-6' : 'right-6'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-5 h-5"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
                  {t.contactSection.form.message}
                </label>
                <textarea 
                  rows={4} 
                  placeholder={t.contactSection.form.messagePlaceholder}
                  className="w-full px-6 py-4 rounded-3xl border-0 bg-[#DCE8F3] dark:bg-[#0F172A] text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none placeholder-gray-400/70"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-[#0B4F9B] hover:bg-[#093e7b] text-white font-bold rounded-full transition-all shadow-lg shadow-blue-900/20 mt-4"
              >
                {t.contactSection.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
