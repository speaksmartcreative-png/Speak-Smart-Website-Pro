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
  MapPin
} from 'lucide-react';
import { PageView } from '../types';

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
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-stone-900 border-b border-stone-200 shadow-sm">
        
        {/* Signature Teal Letterhead Accent Strip */}
        <div className="h-1 bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#1f5e5e]" />

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Crest & Wordmark - Responsive sizing so it never forces overflow */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 sm:gap-3 hover:opacity-95 transition-all min-w-0 text-left cursor-pointer group py-1"
            title="SpeakSmart Centre for Communication - Home"
          >
            <img
              src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
              alt="SpeakSmart Logo"
              className="h-9 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xs shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-baseline leading-none font-display">
                <span 
                  className="font-script text-xl sm:text-2xl lg:text-[30px] font-bold text-stone-950"
                  style={{ fontFamily: "'Hand of Sean', 'Hand Of Sean', cursive" }}
                >
                  Speak
                </span>
                <span 
                  className="font-script text-xl sm:text-2xl lg:text-[30px] font-bold text-[#3dabab]"
                  style={{ fontFamily: "'Hand of Sean', 'Hand Of Sean', cursive" }}
                >
                  Smart
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-wider font-extrabold text-stone-600 mt-0.5 font-sans truncate">
                Centre for Communication
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-xs xl:text-sm font-semibold text-stone-700">
            <button
              onClick={() => handleLinkClick('speaksmart')}
              className={`px-3 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'speaksmart'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 hover:bg-stone-100/90'
              }`}
            >
              What is SpeakSmart
            </button>

            <button
              onClick={() => handleLinkClick('aristri')}
              className={`px-3 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'aristri'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 hover:bg-stone-100/90'
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
                className={`flex items-center gap-1 px-3 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isTestimonialActive
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                    : 'hover:text-stone-950 hover:bg-stone-100/90'
                }`}
              >
                <span>Testimonials</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${testimonialsDropdown ? 'rotate-180 text-[#3dabab]' : 'text-stone-400'}`} />
              </button>

              {testimonialsDropdown && (
                <div className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-xl shadow-2xl border border-stone-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <button
                    onClick={() => handleLinkClick('student-testimonials')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                      currentView === 'student-testimonials' ? 'text-[#3dabab] bg-[#3dabab]/10 font-bold' : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-[#3dabab]" />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-900">Student Testimonials</span>
                      <span className="text-[10px] text-stone-500 font-normal">Orator stories &amp; victories</span>
                    </div>
                  </button>

                  <div className="border-t border-stone-100 my-1"></div>

                  <button
                    onClick={() => handleLinkClick('parent-testimonials')}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-3 transition-colors cursor-pointer ${
                      currentView === 'parent-testimonials' ? 'text-[#3dabab] bg-[#3dabab]/10 font-bold' : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#3dabab]/15 text-[#1f5e5e] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[#3dabab]" />
                    </div>
                    <div>
                      <span className="block font-bold text-stone-900">Parent Testimonials</span>
                      <span className="text-[10px] text-stone-500 font-normal">Feedback from families</span>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('updates')}
              className={`px-3 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'updates'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 hover:bg-stone-100/90'
              }`}
            >
              Updates &amp; Exams
            </button>

            <button
              onClick={() => handleLinkClick('rules')}
              className={`px-3 py-2 rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                currentView === 'rules'
                  ? 'bg-[#3dabab]/15 text-[#1f5e5e] font-bold border border-[#3dabab]/35 shadow-2xs'
                  : 'hover:text-stone-950 hover:bg-stone-100/90'
              }`}
            >
              Rules &amp; Code
            </button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] hover:from-[#359b9b] hover:to-[#1c5c5c] active:scale-[0.98] rounded-lg transition-all shadow-md shadow-[#3dabab]/20 hover:shadow-lg hover:shadow-[#3dabab]/30 cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <span>Register for New Semester</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls - Perfectly sized so hamburger button is ALWAYS visible on screen */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={onOpenRegister}
              className="px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] active:scale-95 rounded-md shadow-xs cursor-pointer whitespace-nowrap"
            >
              Register
            </button>

            {/* Hamburger Button with clear touch target and prominent styling */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors cursor-pointer border ${
                mobileMenuOpen 
                  ? 'bg-[#3dabab] text-white border-[#3dabab]' 
                  : 'bg-stone-100 text-stone-900 hover:bg-stone-200 border-stone-300'
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
          <div className="relative bg-white border-b border-stone-200 shadow-2xl max-h-[85vh] overflow-y-auto flex flex-col z-10 animate-in slide-in-from-top-3 duration-200">
            
            {/* Mobile Drawer Top Bar with Brand & Close Button */}
            <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2.5">
                <img
                  src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
                  alt="SpeakSmart"
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <span className="font-bold text-sm text-stone-900 block leading-tight">SpeakSmart Menu</span>
                  <span className="text-[10px] text-stone-500 font-medium">Think • Speak • Lead</span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-200 text-stone-700 flex items-center justify-center hover:bg-stone-300 transition-colors"
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
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] border border-[#3dabab]/30' 
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>Home</span>
                <span className="text-xs text-stone-400">Overview</span>
              </button>

              <button
                onClick={() => handleLinkClick('speaksmart')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'speaksmart' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] border border-[#3dabab]/30' 
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>What is SpeakSmart</span>
                <span className="text-[10px] font-bold text-[#3dabab] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#3dabab]/25">
                  Founder&apos;s Vision
                </span>
              </button>
              
              <button
                onClick={() => handleLinkClick('aristri')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'aristri' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] border border-[#3dabab]/30' 
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>What is ARISTRI™</span>
                <span className="text-[10px] font-bold text-[#1f5e5e] uppercase tracking-wider bg-[#3dabab]/10 px-2 py-0.5 rounded">
                  Examination
                </span>
              </button>

              {/* Testimonials Group */}
              <div className="bg-stone-50 rounded-xl p-2.5 border border-stone-200 space-y-1">
                <button
                  onClick={() => handleLinkClick('testimonials')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-between ${
                    isTestimonialActive ? 'text-[#1f5e5e]' : 'text-stone-800 hover:bg-white'
                  }`}
                >
                  <span>Testimonials &amp; Reviews</span>
                  <span className="text-xs text-stone-400">All</span>
                </button>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <button
                    onClick={() => handleLinkClick('student-testimonials')}
                    className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                      currentView === 'student-testimonials' 
                        ? 'bg-[#3dabab] text-white' 
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
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
                        : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
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
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] border border-[#3dabab]/30' 
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>Updates &amp; Exam Dates</span>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                  Notices
                </span>
              </button>
              
              <button
                onClick={() => handleLinkClick('rules')}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                  currentView === 'rules' 
                    ? 'bg-[#3dabab]/15 text-[#1f5e5e] border border-[#3dabab]/30' 
                    : 'text-stone-800 hover:bg-stone-100'
                }`}
              >
                <span>Rules &amp; Code of Conduct</span>
                <span className="text-xs text-stone-400">Policy</span>
              </button>
            </div>

            {/* Quick Contact & Admissions Section */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#3dabab] to-[#247575] active:scale-[0.99] rounded-xl cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Student Registration for New Semester</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="https://wa.me/919830064596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+919830064596"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg bg-white text-stone-800 border border-stone-300 font-bold hover:bg-stone-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3dabab] shrink-0" />
                  <span>Call Us</span>
                </a>
              </div>

              <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
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
