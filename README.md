# 💅 Glammed Beauty Hub - Professional Salon Website

A modern, responsive website for **Glammed Beauty Hub**, a premier beauty salon located in Nairobi, Kenya. The website showcases professional hair styling and nail artistry services with transparent pricing and easy booking functionality.

![Glammed Beauty Hub](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Live Demo

**Website:** [https://glammedbeautyhub.vercel.app/](https://glammedbeautyhub.vercel.app/)

## 📋 About

Glammed Beauty Hub is a professional beauty salon offering exceptional hair and nail services in the heart of Nairobi. Located at:

📍 **Magomano Complex, Tom Mboya Street**  
3rd Floor, Room 3.1  
Nairobi, Kenya

📞 **Contact:**  
- +254 742 355 191
- +254 781 680 789

## ✨ Features

### 🎨 Design & UX
- **Elegant Color Palette**: Soft rose-gold and amber gradient theme for a luxurious, feminine aesthetic
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle hover effects and transitions throughout
- **Wave Transitions**: Organic section dividers for seamless scrolling experience
- **Modern Typography**: Clear hierarchy with improved readability

### 🛠️ Functionality
- **Service Catalog**: Complete pricing for hair styling and nail services in KES
- **Tabbed Navigation**: Easy switching between Hair and Nail service categories
- **Image Gallery**: Showcase of salon work and transformations
- **Client Testimonials**: Real reviews from satisfied customers
- **Contact Form**: Integrated booking form with Google Maps location
- **WhatsApp Integration**: Floating button for instant communication
- **Smooth Scrolling**: One-page navigation with anchor links

### 💼 Business Features
- **Transparent Pricing**: All services listed with exact prices in Kenyan Shillings
- **Social Proof**: 4.9 star rating with 500+ client reviews
- **Multiple Contact Methods**: Phone, email, WhatsApp, and contact form
- **Business Hours Display**: Clear operating hours information
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🚀 Technologies Used

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
  - `@radix-ui/react-tabs` - Tab navigation
  - `@radix-ui/react-slot` - Component composition
- **Lucide React** - Beautiful icon library
- **CVA** (Class Variance Authority) - Component variants
- **clsx & tailwind-merge** - Conditional styling utilities

### Deployment
- **Vercel** - Hosting and deployment platform

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git

### Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/glammed-beauty-hub.git
cd glammed-beauty-hub
```

2. **Install dependencies**
```bash
npm install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
# or
pnpm dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
pnpm build
```

Preview production build:
```bash
npm run preview
# or
pnpm preview
```

## 📁 Project Structure

```
glammed-beauty-hub/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/              # Reusable UI components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   └── textarea.tsx
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── Header.tsx       # Navigation header
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── Services.tsx     # Service pricing
│   │   │   ├── Gallery.tsx      # Image gallery
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Testimonials.tsx # Client reviews
│   │   │   ├── Contact.tsx      # Contact form
│   │   │   ├── Footer.tsx       # Footer
│   │   │   └── WhatsAppButton.tsx # WhatsApp float button
│   │   └── App.tsx              # Main app component
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── fonts.css            # Font imports
│   │   ├── tailwind.css         # Tailwind directives
│   │   └── theme.css            # Theme tokens
│   └── main.tsx                 # App entry point
├── public/                      # Static assets
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
├── NEXTJS_FIX_GUIDE.md         # Next.js migration guide
└── README.md                    # This file
```

## 💅 Services Offered

### Hair Services
- **Basic Care**: Wash & Blow Dry, Treatment, Undoing
- **Braiding Styles**: Cornrows, Box Braids, Twist Braids, Goddess Braids, Boho, Ombre
- **Locs**: Butterfly Locs, Artificial Locs, Sasha Locs
- **Twists**: Island Twist, Spring Twist, Passion Twist, Mega Twist
- **Special Styles**: French Curls, Havana Curls, Crochet

### Nail Services
- **Gel Manicures**: Plain, Tips, Nail Art
- **Pedicures**: Plain, Gel, Tips
- **Premium**: Acrylics, Builder Gel, French Tips, Sculpting, Gum Gel
- **Add-ons**: Charms, Soak Off, Henna, Nail Art

## 🎨 Design System

### Color Palette
```css
Primary: Rose (rose-400 to rose-600)
Secondary: Amber (amber-200 to amber-500)
Accent: Warm gradients (rose + amber)
Backgrounds: Soft rose-50, white
Text: Gray-900, Gray-700, Gray-600
```

### Typography
- **Headings**: Bold, tracking-tight
- **Body**: Regular weight, leading-relaxed
- **Scale**: Text-base to text-7xl

### Spacing
- **Sections**: py-24 (6rem vertical padding)
- **Cards**: p-6 to p-8
- **Gaps**: gap-4 to gap-16

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables
No environment variables required for basic operation. Contact forms can be integrated with services like:
- Formspree
- EmailJS
- Custom backend API

### Customization

To customize branding:

1. **Update colors** in Tailwind classes (change `rose-*` and `amber-*` values)
2. **Replace logo** in Header.tsx
3. **Update content** in each component file
4. **Modify hero image** in Hero.tsx (`heroImage` import)
5. **Update contact info** in Contact.tsx and WhatsAppButton.tsx

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Other Platforms
Compatible with:
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Optimized Images**: WebP format with fallbacks
- **Minified Assets**: Production builds are fully optimized

## 🤝 Contributing

This is a proprietary project for Glammed Beauty Hub. For inquiries about updates or modifications, please contact the business owners.

## 📄 License

Copyright © 2026 Glammed Beauty Hub. All rights reserved.

This project is proprietary software created for Glammed Beauty Hub salon.

## 🙏 Acknowledgments

- Built with ❤️ using React and Tailwind CSS
- Icons by [Lucide](https://lucide.dev/)
- Images from Unsplash (for demo purposes)
- Deployed on Vercel

## 📞 Contact

For website inquiries or technical support:

**Glammed Beauty Hub**
- 📧 Email: info@glammedbeautyhub.com
- 📞 Phone: +254 742 355 191 | +254 781 680 789
- 💬 WhatsApp: Available via website button
- 📍 Location: Magomano Complex, Tom Mboya St, 3rd Floor Room 3.1, Nairobi

---

**Built for beauty professionals, by development professionals.** 
