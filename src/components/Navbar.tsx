import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Users, 
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  BookOpen,
  Scale,
  Award,
  Sparkles,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { PageView } from '../types';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenRegister,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialsDropdown, setTestimonialsDropdown] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    setTestimonialsDropdown(false);
  };

  const isTestimonialActive = 
    currentView === 'testimonials' || 
    currentView === 'student-testimonials' || 
    currentView === 'parent-testimonials';

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#071618]/95 backdrop-blur-md text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 shadow-xs transition-colors duration-200">
        
        {/* Signature Teal Letterhead Accent Strip */}
        <div className="h-1 bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#1f5e5e]" />

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 lg:h-20 flex items-center justify-between">
          
          {/* Brand Crest & Wordmark */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 sm:gap-3.5 hover:opacity-95 transition-all text-left cursor-pointer group py-1"
              title="SpeakSmart Centre for Communication - Home"
            >
              <img
                src="/assets/aistudio/SpeakSmart_Logo_transparent.png"
                alt="SpeakSmart Logo Crest"
                className="h-10 sm:h-12 lg:h-13 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-2xs shrink-0"
              />
              <img
                src="/assets/aistudio/SpeakSmart_wordmark_clean_light.png"
                alt="SpeakSmart Centre for Communication"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-opacity group-hover:opacity-90 shrink-0 block dark:hidden"
              />
              <img
                src="/assets/aistudio/SpeakSmart_wordmark_clean_dark.png"
                alt="SpeakSmart Centre for Communication"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-opacity group-hover:opacity-90 shrink-0 hidden dark:block"
              />
            </button>

            {/* Elegant Vertical Divider for desktop */}
            <div className="hidden lg:block h-8 w-px bg-stone-200/90 dark:bg-stone-800 mx-3 xl:mx-6 shrink-0" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-semibold text-stone-700 dark:text-stone-300">
            <button
              onClick={() => handleLinkClick('speaksmart')}
              className={`px-2.5 xl:px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'speaksmart'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 dark:hover:text-white hover:bg-stone-100/90 dark:hover:bg-stone-850'
              }`}
            >
              What is SpeakSmart
            </button>

            <button
              onClick={() => handleLinkClick('aristri')}
              className={`px-2.5 xl:px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'aristri'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 dark:hover:text-white hover:bg-stone-100/90 dark:hover:bg-stone-850'
              }`}
            >
              What is ARISTRI™
            </button>

            {/* Testimonials Dropdown Button */}
            <div 
              className="relative"
              onMouseEnter={() => setTestimonialsDropdown(true)}
              onMouseLeave={() => setTestimonialsDropdown(false)}
            >
              <button
                onClick={() => handleLinkClick('testimonials')}
                className={`flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isTestimonialActive
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] font-bold border border-[#3dabab]/35 shadow-2xs'
                    : 'hover:text-stone-950 dark:hover:text-white hover:bg-stone-100/90 dark:hover:bg-stone-850'
                }`}
              >
                <span>Testimonials</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${testimonialsDropdown ? 'rotate-180 text-[#3dabab]' : 'text-stone-400'}`} />
              </button>

              {testimonialsDropdown && (
                <div className="absolute top-full left-0 mt-1.5 w-60 bg-white dark:bg-stone-900 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-800 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleLinkClick('student-testimonials')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                      currentView === 'student-testimonials' 
                        ? 'text-[#3dabab] bg-[#3dabab]/10 dark:bg-[#3dabab]/20 font-bold' 
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-950 dark:hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-[#3dabab]" />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-900 dark:text-white">Student Testimonials</span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 font-normal">Student speaker journeys &amp; victories</span>
                    </div>
                  </button>

                  <div className="border-t border-stone-100 dark:border-stone-800 my-1"></div>

                  <button
                    onClick={() => handleLinkClick('parent-testimonials')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                      currentView === 'parent-testimonials' 
                        ? 'text-[#3dabab] bg-[#3dabab]/10 dark:bg-[#3dabab]/20 font-bold' 
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 hover:text-stone-950 dark:hover:text-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#3dabab]" />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-900 dark:text-white">Parent Testimonials</span>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 font-normal">Feedback from families</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('updates')}
              className={`px-2.5 xl:px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'updates'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 dark:hover:text-white hover:bg-stone-100/90 dark:hover:bg-stone-850'
              }`}
            >
              Updates &amp; Exams
            </button>

            <button
              onClick={() => handleLinkClick('rules')}
              className={`px-2.5 xl:px-3.5 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'rules'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 dark:hover:text-white hover:bg-stone-100/90 dark:hover:bg-stone-850'
              }`}
            >
              Rules &amp; Code
            </button>
          </nav>

          {/* Desktop Right CTA - Flexible on lg/xl with Theme Switcher */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 ml-3 xl:ml-6">
            <ThemeSwitcher variant="compact" />
            <a
              href="https://forms.gle/amSFYJ7xTY1oi97u8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] hover:from-[#359b9b] hover:to-[#1c5c5c] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#3dabab]/20 hover:shadow-lg hover:shadow-[#3dabab]/30 cursor-pointer flex items-center gap-1.5 xl:gap-2 whitespace-nowrap"
            >
              <span className="hidden xl:inline">Register for New Semester</span>
              <span className="xl:hidden">Register</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls with Theme Switcher */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <ThemeSwitcher variant="compact" />
            <a
              href="https://forms.gle/amSFYJ7xTY1oi97u8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] active:scale-95 rounded-md shadow-xs cursor-pointer whitespace-nowrap inline-flex items-center gap-1"
            >
              <span>Register</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Hamburger Button with clear touch target and prominent styling */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer border ${
                mobileMenuOpen 
                  ? 'bg-[#3dabab] text-white border-[#3dabab]' 
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-700 border-stone-300 dark:border-stone-700'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay with Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Dark Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-Down Mobile Navigation Container */}
          <div className="relative bg-white dark:bg-[#081719] border-b border-stone-200 dark:border-stone-800 shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col z-10 animate-in slide-in-from-top-3 duration-200 text-stone-900 dark:text-stone-100">
            
            {/* Mobile Drawer Top Bar with Brand & Close Button */}
            <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-[#061416]">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/aistudio/SpeakSmart_Logo_transparent.png"
                  alt="SpeakSmart"
                  className="h-8 w-auto object-contain shrink-0"
                />
                <img
                  src="/assets/aistudio/SpeakSmart_wordmark_clean_light.png"
                  alt="SpeakSmart Centre for Communication"
                  className="h-6 w-auto object-contain shrink-0 block dark:hidden"
                />
                <img
                  src="/assets/aistudio/SpeakSmart_wordmark_clean_dark.png"
                  alt="SpeakSmart Centre for Communication"
                  className="h-6 w-auto object-contain shrink-0 hidden dark:block"
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Links list with touch-friendly 48px min height */}
            <div className="p-4 space-y-1.5 flex-1">
              <button
                onClick={() => handleLinkClick('home')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'home' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] border border-[#3dabab]/30' 
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span>Home</span>
                <span className="text-xs text-stone-400 dark:text-stone-500">Overview</span>
              </button>

              <button
                onClick={() => handleLinkClick('speaksmart')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'speaksmart' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] border border-[#3dabab]/30' 
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span>What is SpeakSmart</span>
                <span className="text-[10px] font-bold text-[#3dabab] uppercase tracking-wider bg-white dark:bg-stone-850 px-2 py-0.5 rounded border border-[#3dabab]/25">
                  Founder&apos;s Vision
                </span>
              </button>
              
              <button
                onClick={() => handleLinkClick('aristri')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'aristri' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] border border-[#3dabab]/30' 
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span>What is ARISTRI™</span>
                <span className="text-[10px] font-bold text-[#1f5e5e] dark:text-[#52c5c5] uppercase tracking-wider bg-[#3dabab]/10 dark:bg-[#3dabab]/20 px-2 py-0.5 rounded">
                  Examination
                </span>
              </button>

              {/* Testimonials Group */}
              <div className="bg-stone-50 dark:bg-stone-900/60 rounded-xl p-2.5 border border-stone-200 dark:border-stone-800 space-y-1">
                <button
                  onClick={() => handleLinkClick('testimonials')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-between ${
                    isTestimonialActive ? 'text-[#1f5e5e] dark:text-[#52c5c5]' : 'text-stone-800 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-800'
                  }`}
                >
                  <span>Testimonials &amp; Reviews</span>
                  <span className="text-xs text-stone-400 dark:text-stone-500">All</span>
                </button>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    onClick={() => handleLinkClick('student-testimonials')}
                    className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                      currentView === 'student-testimonials' 
                        ? 'bg-[#3dabab] text-white' 
                        : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-750'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Student Stories</span>
                  </button>

                  <button
                    onClick={() => handleLinkClick('parent-testimonials')}
                    className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                      currentView === 'parent-testimonials' 
                        ? 'bg-[#3dabab] text-white' 
                        : 'bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-750'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Parent Reviews</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleLinkClick('updates')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'updates' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] border border-[#3dabab]/30' 
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span>Updates &amp; Exam Dates</span>
                <span className="text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-[#0f766e] dark:text-[#4fd1d1] border border-teal-200 dark:border-teal-800/80 px-2 py-0.5 rounded">
                  Notices
                </span>
              </button>
              
              <button
                onClick={() => handleLinkClick('rules')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'rules' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#52c5c5] border border-[#3dabab]/30' 
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span>Rules &amp; Code of Conduct</span>
                <span className="text-xs text-stone-400 dark:text-stone-500">Policy</span>
              </button>
            </div>

            {/* Appearance / Theme Selector */}
            <div className="px-4 py-3 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/40">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Appearance / Theme
              </p>
              <ThemeSwitcher variant="segmented" />
            </div>

            {/* Quick Contact & Admissions Section */}
            <div className="p-4 bg-stone-50 dark:bg-[#061416] border-t border-stone-200 dark:border-stone-800 space-y-3">
              <a
                href="https://forms.gle/amSFYJ7xTY1oi97u8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] active:scale-[0.99] rounded-xl cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Student Registration for New Semester</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://wa.me/919830064596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+919830064596"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 font-bold hover:bg-stone-100 dark:hover:bg-stone-750 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3dabab] shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>

              <div className="text-[11px] text-stone-500 dark:text-stone-400 text-center flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3 text-stone-400" />
                <span>2E, Shivam Chambers, Kolkata - 700019</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
