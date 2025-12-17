import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface ProjectsProps {
  direction: 'rtl' | 'ltr';
  t: typeof translations.en;
}

// Import image helper (optional - you can also use direct paths)
// import { getProjectImage } from '../utils/images';

const projects = [
  {
    title: 'TechCorp Rebranding',
    categoryKey: 'branding',
    // Use local image: place your image in public/images/projects/techcorp-rebranding.jpg
    image: '/images/projects/techcorp-rebranding.jpg', // or use: getProjectImage('techcorp-rebranding.jpg')
    // Fallback to Unsplash if local image doesn't exist
    fallbackImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',
    description: 'Complete brand identity redesign for a leading tech company',
  },
  {
    title: 'E-Commerce Platform',
    categoryKey: 'web',
    image: '/images/projects/ecommerce-platform.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Modern, scalable e-commerce solution with advanced features',
  },
  {
    title: 'FinTech Mobile App',
    categoryKey: 'mobile',
    image: '/images/projects/fintech-app.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    description: 'Secure and intuitive mobile banking application',
  },
  {
    title: 'Social Media Campaign',
    categoryKey: 'marketing',
    image: '/images/projects/social-media-campaign.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80',
    description: 'Multi-channel campaign driving 300% engagement increase',
  },
  {
    title: 'SaaS Dashboard',
    categoryKey: 'web',
    image: '/images/projects/saas-dashboard.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Analytics dashboard with real-time data visualization',
  },
  {
    title: 'Healthcare App',
    categoryKey: 'mobile',
    image: '/images/projects/healthcare-app.jpg',
    fallbackImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Patient management system with telemedicine features',
  },
];

export default function Projects({ direction, t }: ProjectsProps) {
  const categories = [
    { key: 'all', label: t.projects.categories.all },
    { key: 'branding', label: t.projects.categories.branding },
    { key: 'web', label: t.projects.categories.web },
    { key: 'mobile', label: t.projects.categories.mobile },
    { key: 'marketing', label: t.projects.categories.marketing },
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categoryKey === activeCategory);

  return (
    <section id="case-studies" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className={`inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 hover:scale-105 transition-transform duration-300 cursor-default border border-blue-200 dark:border-blue-800`}>
             <span className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
               {t.projects.badge}
             </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t.projects.title}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.key
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to Unsplash if local image doesn't exist
                    if (project.fallbackImage) {
                      (e.target as HTMLImageElement).src = project.fallbackImage;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="px-4 sm:px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-sm sm:text-base">
                    <span>{t.projects.viewProject}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`p-4 sm:p-6 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-full mb-3">
                  <span className="text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium">
                    {t.projects.categories[project.categoryKey as keyof typeof t.projects.categories]}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
