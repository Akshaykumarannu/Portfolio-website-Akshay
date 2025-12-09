# Akshay Kumar - Portfolio Website

A modern, stunning portfolio website built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## ✨ Features

- **Ultra-Modern Design**: Glassmorphism effects, gradient accents, and smooth animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Smooth Animations**: Framer Motion powered animations throughout
- **Interactive Components**: Hover effects, scroll animations, and parallax effects
- **Floating WhatsApp Button**: Easy contact via WhatsApp
- **Downloadable Resume**: One-click CV download

## 🎨 Sections

1. **Hero Section**: Animated profile image, dynamic text rotation, and CTA buttons
2. **About Section**: Professional summary with animated statistics
3. **Skills Section**: Interactive skill cards with progress bars
4. **Experience Section**: Timeline layout showcasing work history
5. **Projects Section**: Featured projects with hover effects
6. **Services Section**: Services offered with icon cards
7. **Contact Section**: Working contact form with information
8. **Footer**: Social links and copyright

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 Customization

### Update Personal Information

1. **Profile Image**: Replace `/public/profile.webp`
2. **Resume**: Replace `/public/resume.pdf`
3. **Contact Info**: Update in `src/components/Contact.tsx`
4. **Social Links**: Update in `src/components/Hero.tsx` and `src/components/Footer.tsx`
5. **WhatsApp Number**: Update in `src/components/FloatingWhatsApp.tsx` and `src/components/Contact.tsx`

### Update Content

- **About**: Edit `src/components/About.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Services**: Edit `src/components/Services.tsx`

### Theme Colors

Colors are defined in `src/app/globals.css`:
- `--primary`: Main accent color (Blue)
- `--secondary`: Secondary accent color (Pink)
- `--accent`: Tertiary accent color (Violet)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**Akshay Kumar**
- Location: Kasaragod, Kerala, India
- LinkedIn: [akshay-kumar-78168a29b](https://linkedin.com/in/akshay-kumar-78168a29b)
- Current Role: Software Developer at ViewMyRecords Private Limited

---

Built with ❤️ using Next.js and Tailwind CSS
