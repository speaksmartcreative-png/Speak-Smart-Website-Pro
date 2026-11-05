# SpeakSmart Centre for Communication

Official web application for **SpeakSmart Centre for Communication** (LLPIN: ACO-6485), Kolkata.

> **Think • Speak • Lead**  
> 2E, Shivam Chambers, 53 Syed Amir Ali Avenue, 2nd Floor, Kolkata - 700019

---

## 🌟 Key Features

- **Pedagogy & Leadership**: Keynote address and pedagogy of Founder & Director **Mrs. Sreela Mitra** (Trinity College London certified) and Partner **Ms. Vishakha Agarwal** (EDHEC France Alum).
- **ARISTRI™ Certification System**: Complete interactive breakdown of the Government of India and SpeakSmart authenticated Public Speaking & Communication Skills Examination.
- **Authentic Student Testimonials**: Real student scholar transformations, including entrance selection at The Doon School, Dehradun, Trinity College London examinations, and debate achievements.
- **Star Students Hall of Fame**: Dynamic podium showcase featuring verified student speakers.
- **Academic Updates & Notice Board**: Real-time batch timetables, circulars, Trinity exam schedules, and holiday announcements.
- **Digital Rules & Regulations**: 7-part operational handbook covering fees, attendance, makeup classes, and digital acknowledgment links.
- **New Semester Admissions**: Integrated registration linking directly to the official Google Enrolment Form: `https://forms.gle/amSFYJ7xTY1oi97u8`.
- **Tri-Theme Engine**: Light Mode, Dark Mode (Executive Obsidian-Teal), and System Default toggle with `localStorage` persistence.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY

# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev
```

### Production Build

```bash
# Compile TypeScript and build production assets into /dist
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Validate TypeScript with zero errors
npm run lint
```

---

## 📁 Repository Structure

```
├── public/                  # Static assets (transparent logos, PDFs, images)
│   ├── assets/aistudio/     # Official logo crest and wordmark assets
│   └── assets/testimonials/ # Verified student scholar portraits
├── src/
│   ├── components/          # Modular React components
│   │   ├── Navbar.tsx       # Desktop & mobile navigation with theme switcher
│   │   ├── Hero.tsx         # Hero banner & Star Students Hall of Fame
│   │   ├── WhatIsSpeakSmart.tsx # Founder's address & leadership showcase
│   │   ├── WhatIsAristri.tsx# ARISTRI™ examination breakdown
│   │   ├── TestimonialsSection.tsx # Student & parent testimonial grids
│   │   ├── NoticeBoard.tsx  # Academic announcements & circulars
│   │   ├── RulesSection.tsx # Official rules handbook & bank details
│   │   ├── RegistrationModal.tsx # Interactive admission flow
│   │   ├── ThemeSwitcher.tsx# 3-way theme toggle
│   │   └── Footer.tsx       # Official footer & copyright
│   ├── context/
│   │   └── ThemeContext.tsx # React context for Light/Dark/System themes
│   ├── data/
│   │   └── mockData.ts      # Canonical data models & student testimonials
│   ├── types.ts             # TypeScript definitions
│   ├── App.tsx              # Root app component with smooth view router
│   ├── index.css            # Tailwind CSS v4 styling & dark mode custom variant
│   └── main.tsx             # Application entry point
├── .gitignore               # Ignored files (node_modules, dist, large media)
├── vite.config.ts           # Vite + Tailwind v4 + React configuration
└── package.json             # Project scripts and dependencies
```

---

## 📄 License & Identification

- **Institution**: SpeakSmart Centre for Communication
- **LLPIN**: ACO-6485
- **Location**: Kolkata, West Bengal, India
