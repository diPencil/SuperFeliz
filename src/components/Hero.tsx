import { ArrowRight, Play, FileText, Sparkles, Lightbulb, MessageCircle } from 'lucide-react';
import { useEffect, useRef, Suspense, lazy } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline/next'));

interface HeroProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

export default function Hero({ direction, t }: HeroProps) {
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const splineAppRef = useRef<any>(null);
  
  const featureIcons = [FileText, Sparkles, Lightbulb, MessageCircle];
  const features = [
    { ...t.simplifyServices.items.artFromScratch, icon: featureIcons[0] },
    { ...t.simplifyServices.items.innovativeIdeas, icon: featureIcons[1] },
    { ...t.simplifyServices.items.teamExpertise, icon: featureIcons[2] },
    { ...t.simplifyServices.items.liveChatSupport, icon: featureIcons[3] },
  ];

  const onLoad = (spline: any) => {
    splineAppRef.current = spline;
  };

  useEffect(() => {
    // Hide "Built with Spline" badge - more aggressive approach
    const hideBadge = () => {
      if (splineContainerRef.current) {
        // Method 1: Hide ALL links first, then selectively show scene URLs
        const allLinks = splineContainerRef.current.querySelectorAll('a');
        allLinks.forEach((link) => {
          const href = link.getAttribute('href') || '';
          const text = (link.textContent || '').toLowerCase();
          const computedStyle = window.getComputedStyle(link);
          const position = computedStyle.position;
          
          // Hide if it's positioned absolutely/fixed (badge is usually positioned)
          if (position === 'absolute' || position === 'fixed') {
            link.style.display = 'none';
            link.style.visibility = 'hidden';
            link.style.opacity = '0';
            link.style.pointerEvents = 'none';
            link.style.width = '0';
            link.style.height = '0';
            link.style.overflow = 'hidden';
          }
          
          // Hide if it's a badge link (not the scene URL)
          if (href.includes('spline.design') && !href.includes('prod.spline.design/scene.splinecode')) {
            link.style.display = 'none';
            link.style.visibility = 'hidden';
            link.style.opacity = '0';
            link.style.pointerEvents = 'none';
            link.style.width = '0';
            link.style.height = '0';
          }
          
          // Hide if text contains badge-related text
          if (text.includes('built with') || text.includes('spline') || text.includes('made with')) {
            link.style.display = 'none';
            link.style.visibility = 'hidden';
            link.style.opacity = '0';
            link.style.width = '0';
            link.style.height = '0';
            const parent = link.parentElement;
            if (parent) {
              parent.style.display = 'none';
              parent.style.visibility = 'hidden';
            }
          }
        });

        // Method 2: Hide any div/span containing badge text or positioned in bottom-right
        const allElements = splineContainerRef.current.querySelectorAll('div, span, p');
        allElements.forEach((el) => {
          const text = (el.textContent || '').toLowerCase();
          const computedStyle = window.getComputedStyle(el);
          const position = computedStyle.position;
          const bottom = computedStyle.bottom;
          const right = computedStyle.right;
          
          // Hide if positioned in bottom-right corner (where badge usually is)
          if ((position === 'absolute' || position === 'fixed') && 
              (bottom !== 'auto' || right !== 'auto')) {
            const bottomValue = parseInt(bottom) || 0;
            const rightValue = parseInt(right) || 0;
            if (bottomValue < 100 && rightValue < 200) {
              (el as HTMLElement).style.display = 'none';
              (el as HTMLElement).style.visibility = 'hidden';
            }
          }
          
          // Hide if contains badge text
          if (text.includes('built with') && !text.includes('scene.splinecode')) {
            (el as HTMLElement).style.display = 'none';
            (el as HTMLElement).style.visibility = 'hidden';
          }
        });

        // Method 3: Hide elements with specific attributes
        const badgeSelectors = [
          '[class*="badge"]',
          '[id*="badge"]',
          '[class*="spline-badge"]',
          '[id*="spline-badge"]',
          '[class*="attribution"]',
          '[id*="attribution"]',
        ];
        badgeSelectors.forEach((selector) => {
          try {
            const elements = splineContainerRef.current.querySelectorAll(selector);
            elements.forEach((el) => {
              (el as HTMLElement).style.display = 'none';
              (el as HTMLElement).style.visibility = 'hidden';
            });
          } catch (e) {
            // Ignore selector errors
          }
        });
      }
    };

    // Try to hide badge immediately
    hideBadge();

    // Use MutationObserver to watch for DOM changes
    const observer = new MutationObserver(() => {
      hideBadge();
    });

    if (splineContainerRef.current) {
      observer.observe(splineContainerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class', 'href'],
      });
    }

    // Also try periodically (as backup)
    const timer = setInterval(hideBadge, 300);
    
    // Try after delays to catch late-loading badges
    setTimeout(hideBadge, 1000);
    setTimeout(hideBadge, 2000);
    setTimeout(hideBadge, 3000);
    
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  // Add mouse move interaction for 3D scene
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (splineAppRef.current && splineContainerRef.current) {
        const rect = splineContainerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        
        // Rotate camera based on mouse position
        if (splineAppRef.current.camera) {
          splineAppRef.current.camera.rotation.y += x * 0.01;
          splineAppRef.current.camera.rotation.x += y * 0.01;
        }
      }
    };

    if (splineContainerRef.current) {
      splineContainerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (splineContainerRef.current) {
        splineContainerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-blue-50 dark:bg-gray-900 min-h-screen flex items-center">
      {/* Animated Background - Blue only - Desktop */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {/* Animated Blob 1 - Top Left */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-400/40 dark:bg-blue-500/20 rounded-full blur-3xl animate-[gradient-move-fast_12s_ease-in-out_infinite]"></div>
        
        {/* Animated Blob 2 - Middle Right */}
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-blue-400/35 dark:bg-blue-500/18 rounded-full blur-3xl animate-[gradient-move_10s_ease-in-out_infinite_reverse]"></div>
        
        {/* Animated Blob 3 - Bottom Center */}
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-blue-400/30 dark:bg-blue-500/15 rounded-full blur-3xl animate-[gradient-pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Animated Gradient Background - Mobile only */}
      <div className="absolute inset-0 overflow-hidden sm:hidden">
        {/* Animated Gradient Background */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 197, 94, 0.15) 50%, rgba(239, 68, 68, 0.15) 100%)',
            animation: 'gradient-shift-mobile 15s ease-in-out infinite',
            backgroundSize: '200% 200%',
          }}
        ></div>
        
        {/* Animated Blob 1 - Top Left - Mobile */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-[gradient-move-fast_10s_ease-in-out_infinite]"></div>
        
        {/* Animated Blob 2 - Middle Right - Mobile */}
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-green-500/15 dark:bg-green-500/8 rounded-full blur-3xl animate-[gradient-move_8s_ease-in-out_infinite_reverse]"></div>
        
        {/* Animated Blob 3 - Bottom Center - Mobile */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-red-500/15 dark:bg-red-500/6 rounded-full blur-3xl animate-[gradient-pulse_6s_ease-in-out_infinite]"></div>
      </div>

      {/* Spline 3D Scene - Background - Hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden flex items-start justify-center -mt-24 sm:-mt-32 lg:-mt-40 hidden sm:flex">
        <div 
          ref={splineContainerRef} 
          className="relative w-full h-full max-w-3xl max-h-3xl sm:max-w-5xl sm:max-h-5xl lg:max-w-6xl lg:max-h-6xl spline-container scale-75 sm:scale-75 lg:scale-80"
          style={{
            pointerEvents: 'auto',
          }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/W1mxMVddtpPqZAc5/scene.splinecode"
              className="w-full h-full"
              onLoad={onLoad}
            />
          </Suspense>
          {/* Overlay to completely hide badge */}
          <div 
            className="absolute bottom-0 right-0 w-56 h-24 pointer-events-none z-[10000] dark:hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 246, 255, 0.98) 0%, rgba(240, 253, 244, 0.98) 50%, rgba(254, 242, 242, 0.95) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-56 h-24 pointer-events-none z-[10000] hidden dark:block"
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.95) 50%, rgba(17, 24, 39, 0.95) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          ></div>
        </div>
        {/* Overlay to ensure text readability - Hidden on mobile */}
        <div className="absolute inset-0 bg-blue-50/70 dark:bg-gray-900/80 z-0 hidden sm:block"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        {/* Top Content - Centered */}
        <div className={`text-center space-y-4 sm:space-y-6 lg:space-y-8 mb-6 sm:mb-8 lg:mb-12`}>
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full backdrop-blur-sm mt-12 sm:mt-0">
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
              {t.hero.badge}
              </span>
            </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent drop-shadow-sm text-2xl sm:text-4xl lg:text-5xl">
              {t.hero.title1}
              </span>
              <br />
            <span className="text-blue-600 dark:text-blue-400 drop-shadow-sm">
              {t.hero.title2}
              </span>
            </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t.hero.description}
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`group px-6 sm:px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center backdrop-blur-sm ${direction === 'rtl' ? 'gap-2' : 'gap-2'}`}>
              {direction === 'rtl' ? (
                <>
                  <span>{t.hero.startProject}</span>
                  <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                </>
              ) : (
                <>
                  <span>{t.hero.startProject}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
              </button>
            <button className={`group px-6 sm:px-8 py-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm`}>
                <Play className="w-5 h-5" />
              <span>{t.hero.viewWork}</span>
              </button>
            </div>

          <div className="flex items-center justify-center gap-4 sm:gap-8 pt-4 mt-8 sm:mt-0">
              <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-sm">10+</div>
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">{t.hero.yearsExperience}</div>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700"></div>
              <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-sm">500+</div>
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">{t.hero.projectsDelivered}</div>
              </div>
              <div className="h-12 w-px bg-gray-300 dark:bg-gray-700"></div>
              <div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-sm">98%</div>
              <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">{t.hero.clientSatisfaction}</div>
              </div>
            </div>
          </div>

        {/* Features Cards - 4 cards with reference style - Full width row below Hero content */}
        <div className="mt-8 sm:mt-12 lg:mt-16 relative z-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="relative p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl border border-gray-300 dark:border-gray-700 z-20"
                >
                  <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                    {/* Icon */}
                    <div className="mb-4 sm:mb-6 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 dark:text-gray-400" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white text-center">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                      {feature.description}
                    </p>
                  </div>
            </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
