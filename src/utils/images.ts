/**
 * Image path utilities
 * Helper functions to easily reference images from public/images directory
 */

// Projects images
export const getProjectImage = (filename: string): string => {
  return `/images/projects/${filename}`;
};

// Services images
export const getServiceImage = (filename: string): string => {
  return `/images/services/${filename}`;
};

// Logos
export const getLogoImage = (filename: string): string => {
  return `/images/logos/${filename}`;
};

// Icons
export const getIconImage = (filename: string): string => {
  return `/images/icons/${filename}`;
};

// Example usage:
// import { getProjectImage, getServiceImage, getLogoImage, getIconImage } from '@/utils/images';
// 
// const projectImg = getProjectImage('project-1.jpg');
// const serviceImg = getServiceImage('service-icon.svg');
// const logoImg = getLogoImage('company-logo.png');
// const iconImg = getIconImage('external-icon.svg');

