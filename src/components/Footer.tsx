import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface FooterProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  t: typeof translations.en;
}

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer({ direction, theme, t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img 
                src="/images/logos/logodark.png" 
                alt="Pencil Studio Logo" 
                className="h-6 sm:h-8 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              {t.footer.description}
            </p>

            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <a href="mailto:hello@pencilstudio.com" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>hello@pencilstudio.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.services}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {t.footer.links.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.company}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {t.footer.links.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={direction === 'rtl' ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-bold mb-3 sm:mb-4 text-base sm:text-lg">{t.footer.resources}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {t.footer.links.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-gray-500 text-xs sm:text-sm text-center ${direction === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
              © {new Date().getFullYear()} Pencil Studio. {t.footer.rights}
            </p>
            <p className={`text-gray-500 text-xs sm:text-sm text-center ${direction === 'rtl' ? 'md:text-left' : 'md:text-right'}`}>
              {t.footer.madeWith} <span className="text-red-500">♥</span> {t.footer.by}
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-blue-600"></div>
    </footer>
  );
}
