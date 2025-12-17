import { translations } from '../translations';

interface BrandsProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function Brands({ direction, t }: BrandsProps) {
  const logos = [
    '/images/brands/logo1.jpg',
    '/images/brands/logo2.jpg',
    '/images/brands/logo3.jpg',
    '/images/brands/logo4.jpg',
    '/images/brands/logo5.jpg',
    '/images/brands/logo10.png',
    '/images/brands/logo11.png',
    '/images/brands/logo12.png',
    '/images/brands/logo13.png',
    '/images/brands/logo14.png',
    '/images/brands/logo15.png',
    '/images/brands/logo16.png',
    '/images/brands/logo17.png',
    '/images/brands/logo18.png',
    '/images/brands/logo19.png',
    '/images/brands/logo22.png',
  ];

  // Split logos into three rows for animation
  // To make 3 rows from 16 items, we can roughly split them 5-6 items per row
  // Or repeat some if needed. Let's do 5, 5, 6
  const row1 = logos.slice(0, 5);
  const row2 = logos.slice(5, 10);
  const row3 = logos.slice(10, 16);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
             <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
               {t.brands.badge}
             </span>
          </div>
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            {t.brands.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.brands.description}
          </p>
        </div>

        {/* Animated Logos Section */}
        <div className="relative space-y-8 overflow-hidden">
           {/* First Row - Moves Left */}
           <div className="relative w-full overflow-hidden">
             <div className="flex gap-8 animate-scroll-left whitespace-nowrap hover:[animation-play-state:paused]">
                {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((logo, index) => (
                  <div 
                    key={`row1-${index}`}
                    className="inline-flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-1 flex-shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt="Brand logo" 
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply dark:mix-blend-normal"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
             </div>
           </div>

           {/* Second Row - Moves Right (Reverse) */}
           <div className="relative w-full overflow-hidden">
             <div className="flex gap-8 animate-scroll-right whitespace-nowrap hover:[animation-play-state:paused]">
                {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((logo, index) => (
                  <div 
                    key={`row2-${index}`}
                    className="inline-flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-1 flex-shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt="Brand logo" 
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply dark:mix-blend-normal"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
             </div>
           </div>

           {/* Third Row - Moves Left */}
           <div className="relative w-full overflow-hidden">
             <div className="flex gap-8 animate-scroll-left whitespace-nowrap hover:[animation-play-state:paused]">
                {[...row3, ...row3, ...row3, ...row3, ...row3, ...row3].map((logo, index) => (
                  <div 
                    key={`row3-${index}`}
                    className="inline-flex items-center justify-center w-32 h-16 sm:w-40 sm:h-20 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-1 flex-shrink-0"
                  >
                    <img 
                      src={logo} 
                      alt="Brand logo" 
                      className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply dark:mix-blend-normal"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
