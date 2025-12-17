import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { translations } from '../translations';

interface TestimonialsProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function Testimonials({ direction, t }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const reviews = t.testimonials.reviews || [];
  
  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  // Infinite Scroll Logic
  useEffect(() => {
    if (isPaused || reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        // Infinite loop: if we reach end, go back to start
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3500); // Slides every 3.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxIndex, reviews.length]);

  const next = () => {
    // Manual navigation wraps around too for infinite feel
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true); // Pause on touch
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false); // Resume on touch end
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
       if (direction === 'rtl') prev(); else next();
    }
    if (isRightSwipe) {
       if (direction === 'rtl') next(); else prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (reviews.length === 0) return null;

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.testimonials.badge}
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                transform: `translateX(${direction === 'rtl' ? currentIndex * (100 / itemsPerPage) : -currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
               {reviews.map((review, index) => {
                 const isBlueBg = index % 2 !== 0;
                 
                 return (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / itemsPerPage}%` }}
                  >
                    <div className={`h-full p-8 rounded-3xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between min-h-[320px]
                      ${isBlueBg ? 'bg-blue-50/50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800'}
                    `}>
                      
                      {/* Review Text */}
                      <p className={`text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                        "{review.content}"
                      </p>

                      {/* Bottom Row: User Info & Stars */}
                      <div className={`flex items-center justify-between ${direction === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
                        
                        {/* User */}
                        <div className={`flex items-center gap-3 ${direction === 'rtl' ? 'flex-row-reverse text-right' : 'text-left'}`}>
                          <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-700 flex items-center justify-center border border-gray-100 dark:border-gray-600 flex-shrink-0">
                <img
                               src="/images/logos/favcion.png"
                               alt="Pencil"
                               className="w-8 h-8 object-contain opacity-80"
                               onError={(e) => {
                                   e.currentTarget.style.display = 'none';
                                   const icon = document.createElement('div');
                                   icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>';
                                   e.currentTarget.parentElement?.appendChild(icon);
                               }}
                             />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-white text-sm line-clamp-1">
                              {review.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                              {review.role}
                            </div>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-0.5 flex-shrink-0">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                      </div>

                    </div>
                  </div>
                 );
               })}
                  </div>
                </div>
              </div>

        {/* Navigation & Stats Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
          
          {/* Navigation Buttons */}
          <div className="flex gap-4 order-2 md:order-1">
                <button
              onClick={direction === 'rtl' ? next : prev}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 text-gray-600 dark:text-gray-300 cursor-pointer bg-gray-50 dark:bg-gray-800"
              aria-label="Previous"
            >
              {direction === 'rtl' ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
                </button>

                    <button
              onClick={direction === 'rtl' ? prev : next}
              className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 text-gray-600 dark:text-gray-300 cursor-pointer bg-gray-50 dark:bg-gray-800"
              aria-label="Next"
            >
              {direction === 'rtl' ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </div>

          {/* Stats Container */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 order-1 md:order-2">
            
            {/* Reviewed On Section */}
            <div className="flex flex-col items-end sm:items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-xs tracking-wider uppercase text-gray-500 dark:text-gray-400">{t.testimonials.reviewedOn}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <img src="/images/logos/favcion.png" alt="Pencil" className="w-5 h-5 object-contain" />
                 <span className="font-bold text-gray-800 dark:text-white tracking-wide text-sm">PENCIL</span>
                 <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">{t.testimonials.reviewsCount}</span>
              </div>
            </div>

            {/* Divider (Mobile Hidden) */}
            <div className="hidden sm:block w-px h-10 bg-gray-200 dark:bg-gray-700"></div>

            {/* Customer Reviews Section */}
            <div className="flex items-center gap-4">
               <div className="w-10 h-10">
                 <img src="/images/logos/favcion.png" alt="Logo" className="w-full h-full object-contain" />
               </div>
               <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                     <span className="font-bold text-lg text-gray-900 dark:text-white">4.9</span>
                     <div className="flex gap-0.5">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <div className="relative w-4 h-4 overflow-hidden">
                           <Star className="w-4 h-4 text-amber-400 absolute top-0 left-0" />
                           <Star className="w-4 h-4 fill-amber-400 text-amber-400 absolute top-0 left-0 overflow-hidden" style={{ clipPath: 'inset(0 10% 0 0)' }} />
                        </div>
                     </div>
                  </div>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t.testimonials.customerReviews}</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
