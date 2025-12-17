import Header from '../components/Header';
import Footer from '../components/Footer';

interface SimpleAmazonPageProps {
  direction: 'rtl' | 'ltr';
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  toggleDirection: () => void;
  t: any;
}

export default function SimpleAmazonPage({ direction, theme, toggleTheme, toggleDirection, t }: SimpleAmazonPageProps) {
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} ${direction === 'rtl' ? 'font-cairo' : 'font-sans'}`} dir={direction}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} direction={direction} toggleDirection={toggleDirection} t={t} />

        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Amazon Services - خدمات أمازون
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
            {direction === 'rtl' ? 'استضافة سحابية على AWS' : 'Cloud hosting on AWS'}
          </p>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              {direction === 'rtl' ? 'اطلب الخدمة' : 'Get Service'}
            </button>
          </div>
        </div>

        <Footer direction={direction} theme={theme} t={t} />
      </div>
    </div>
  );
}
