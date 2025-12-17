# Images Directory

This directory contains all image assets for the project.

## Structure

- **projects/** - Project images and screenshots
- **services/** - Service images and icons
- **logos/** - Company logos and brand images
- **icons/** - External icon images

## Usage

### Projects Images
Place project images in `public/images/projects/` and reference them like:
```tsx
<img src="/images/projects/project-name.jpg" alt="Project Name" />
// Or use helper:
import { getProjectImage } from '@/utils/images';
<img src={getProjectImage('project-name.jpg')} alt="Project Name" />
```

### Services Images
Place service images/icons in `public/images/services/` and reference them like:
```tsx
<img src="/images/services/service-icon.svg" alt="Service Icon" />
// Or use helper:
import { getServiceImage } from '@/utils/images';
<img src={getServiceImage('service-icon.svg')} alt="Service Icon" />
```

### Logos
Place logo images in `public/images/logos/` and reference them like:
```tsx
<img src="/images/logos/company-logo.png" alt="Company Logo" />
// Or use helper:
import { getLogoImage } from '@/utils/images';
<img src={getLogoImage('company-logo.png')} alt="Company Logo" />
```

### Icons
Place external icon images in `public/images/icons/` and reference them like:
```tsx
<img src="/images/icons/icon-name.svg" alt="Icon Name" />
// Or use helper:
import { getIconImage } from '@/utils/images';
<img src={getIconImage('icon-name.svg')} alt="Icon Name" />
```

## Supported Formats
- JPG/JPEG
- PNG
- SVG
- WebP
- GIF

