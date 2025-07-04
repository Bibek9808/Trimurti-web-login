# Components Structure

This directory contains all the organized components for the Trimurti Solutions website.

## 📁 Directory Structure

```
components/
├── hero/                     # Hero section components
│   └── HeroSection.jsx       # Main hero section with background effects
├── sections/                 # Main page sections
│   ├── ProductsSection.jsx   # Products showcase section
│   ├── ServicesSection.jsx   # Services grid section
│   └── SVGMaskSection.jsx    # Interactive technology reveal section
├── ui/                       # Reusable UI components
│   └── Footer.jsx            # Site footer with links and social media
├── navigation/               # Navigation components
│   └── aceternity-navbar.jsx # Main navigation bar with scroll effects
├── effects/                  # Visual effects and animations
│   ├── night-sky-background.jsx  # Animated night sky background
│   ├── meteors-hero.jsx          # Meteor shower effect wrapper
│   ├── meteors.jsx               # Individual meteor particles
│   └── svg-mask-effect.jsx       # Hover reveal mask effect
└── index.js                  # Central export file for clean imports
```

## 🎯 Component Categories

### **Hero Components** (`/hero`)
- **HeroSection.jsx**: Main landing section with animated background, meteors effect, and call-to-action buttons

### **Section Components** (`/sections`)
- **ProductsSection.jsx**: Showcases TrimurtiFX and TrimurtiSec products with feature lists
- **ServicesSection.jsx**: Displays web development, mobile development, desktop development, and digital marketing services
- **SVGMaskSection.jsx**: Interactive section with hover reveal effect for technology showcase

### **UI Components** (`/ui`)
- **Footer.jsx**: Complete footer with company info, social links, navigation links, and legal information

### **Navigation Components** (`/navigation`)
- **aceternity-navbar.jsx**: Responsive navigation bar with smooth scroll effects, width transitions, and mobile menu

### **Effect Components** (`/effects`)
- **night-sky-background.jsx**: Animated starfield background effect
- **meteors-hero.jsx**: Wrapper component for meteor shower effect
- **meteors.jsx**: Individual meteor particle animations
- **svg-mask-effect.jsx**: Interactive mask container for hover reveal effects

## 📦 Usage

### Import Individual Components
```javascript
import HeroSection from './components/hero/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import Footer from './components/ui/Footer';
import AceternityNavbar from './components/navigation/aceternity-navbar';
```

### Import Using Index File (Recommended)
```javascript
import { 
  AceternityNavbar, 
  HeroSection, 
  SVGMaskSection, 
  ProductsSection, 
  ServicesSection, 
  Footer 
} from './components';
```

## 🔧 Benefits of This Structure

1. **Modularity**: Each component is self-contained and reusable
2. **Maintainability**: Easy to find and update specific sections
3. **Scalability**: Easy to add new components in appropriate categories
4. **Clean Imports**: Central index file provides clean import statements
5. **Logical Organization**: Components are grouped by their purpose and function
6. **Effect Separation**: Visual effects are separated from content components
7. **Navigation Isolation**: Navigation components have their own category

## 🚀 Adding New Components

1. **Hero Components**: Add to `/hero` for landing page elements
2. **Section Components**: Add to `/sections` for main page content sections
3. **UI Components**: Add to `/ui` for reusable interface elements
4. **Navigation Components**: Add to `/navigation` for navigation-related components
5. **Effect Components**: Add to `/effects` for visual effects and animations
6. **Update index.js**: Export new components from the index file

## 📝 Component Guidelines

- Each component should be self-contained with its own imports
- Use descriptive component names that indicate their purpose
- Include proper TypeScript/PropTypes if needed
- Follow consistent naming conventions
- Add comments for complex logic or important features
- Keep effects separate from content for better maintainability 