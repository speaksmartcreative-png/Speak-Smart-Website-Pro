import React, { useState, useEffect } from 'react';
import { PageView, NoticeItem } from './types';
import { NOTICES } from './data/mockData';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsSpeakSmart } from './components/WhatIsSpeakSmart';
import { WhatIsAristri } from './components/WhatIsAristri';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NoticeBoard } from './components/NoticeBoard';
import { RulesSection } from './components/RulesSection';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';
import { StageAtmosphere } from './components/StageAtmosphere';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedNoticeModal, setSelectedNoticeModal] = useState<NoticeItem | null>(null);
  const [selectedRuleCategory, setSelectedRuleCategory] = useState<string>('rule-onboarding');

  // Handle URL hash changes if user uses anchors or browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'speaksmart' || hash === 'what-is-speaksmart') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById('what-is-speaksmart');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (hash === 'aristri') setCurrentView('aristri');
      else if (hash === 'testimonials') setCurrentView('testimonials');
      else if (hash === 'student-testimonials') setCurrentView('student-testimonials');
      else if (hash === 'parent-testimonials') setCurrentView('parent-testimonials');
      else if (hash === 'updates' || hash === 'exams') setCurrentView('updates');
      else if (hash === 'rules') setCurrentView('rules');
      else if (hash === 'register') setIsRegisterOpen(true);
      else if (!hash) setCurrentView('home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: PageView) => {
    if (view === 'speaksmart') {
      setCurrentView('home');
      window.location.hash = 'what-is-speaksmart';
      setTimeout(() => {
        const el = document.getElementById('what-is-speaksmart');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }

    if (view === 'home') {
      setCurrentView('home');
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenNotice = (notice: NoticeItem) => {
    setSelectedNoticeModal(notice);
    setCurrentView('updates');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRuleCategory = (ruleId: string) => {
    setSelectedRuleCategory(ruleId);
    setCurrentView('rules');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find urgent notice for top announcement bar (e.g. Exam dates notice)
  const urgentNotice = NOTICES.find((n) => n.isUrgent) || NOTICES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafc] dark:bg-[#061517] text-stone-900 dark:text-stone-100 selection:bg-[#3dabab] selection:text-white font-sans overflow-x-hidden transition-colors duration-200 relative">
      {/* Vibrant Podium Atmosphere & Ambient Stage Background */}
      <StageAtmosphere />

      {/* 1. Top Announcement Bar */}
      <div className="relative z-10">
        <AnnouncementBar
          urgentNotice={urgentNotice}
          onOpenNotice={handleOpenNotice}
          onViewAllUpdates={() => handleNavigate('updates')}
        />
      </div>

      {/* 2. Primary Navigation Bar */}
      <div className="relative z-20">
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenRegister={() => setIsRegisterOpen(true)}
        />
      </div>

      {/* Dedicated Page Hero Header Banner with Distinct Atmospheric Gradient per Page */}
      {currentView !== 'home' && (
        <div className={`relative overflow-hidden border-b transition-colors duration-500 ${
          currentView === 'speaksmart'
            ? 'bg-gradient-to-r from-[#06181b] via-[#0b292e] to-[#061416] text-white border-[#3dabab]/40 shadow-xl'
            : currentView === 'aristri'
            ? 'bg-gradient-to-r from-[#051c1a] via-[#082d27] to-[#041614] text-white border-teal-500/40 shadow-xl'
            : currentView.includes('testimonial')
            ? 'bg-gradient-to-r from-[#142226] via-[#1a2e33] to-[#121c1f] text-white border-amber-500/40 shadow-xl'
            : currentView === 'updates'
            ? 'bg-gradient-to-r from-[#0b1c24] via-[#102732] to-[#09171e] text-white border-sky-500/40 shadow-xl'
            : 'bg-gradient-to-r from-[#0c1c19] via-[#122823] to-[#0a1714] text-white border-emerald-500/40 shadow-xl'
        }`}>
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-1/4 w-96 h-40 bg-gradient-to-b from-[#3dabab]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-32 bg-teal-400/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
            {/* Breadcrumb line */}
            <div className="flex items-center justify-between text-xs mb-3 text-stone-300">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavigate('home')}
                  className="text-stone-300 hover:text-white hover:underline cursor-pointer font-bold font-display flex items-center gap-1"
                >
                  <span>SpeakSmart</span>
                </button>
                <ChevronRight className="w-3 h-3 text-stone-500" />
                <span className="font-bold text-[#4fd1d1] capitalize">
                  {currentView === 'speaksmart'
                    ? 'What is SpeakSmart'
                    : currentView === 'aristri'
                    ? 'What is ARISTRI™'
                    : currentView === 'testimonials'
                    ? 'Testimonials'
                    : currentView === 'student-testimonials'
                    ? 'Testimonials · Student Stories'
                    : currentView === 'parent-testimonials'
                    ? 'Testimonials · Parent Feedback'
                    : currentView === 'updates'
                    ? 'Updates & Exam Dates'
                    : currentView === 'rules'
                    ? 'Rules and Regulations'
                    : currentView}
                </span>
              </div>

              <button
                onClick={() => handleNavigate('home')}
                className="text-xs font-bold text-teal-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-1 rounded-full transition-colors cursor-pointer flex items-center gap-1"
              >
                <span>← Back to Overview</span>
              </button>
            </div>

            {/* Title & Tagline in Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4fd1d1] animate-pulse" />
                  {currentView === 'speaksmart' && 'Institute Identity & Pedagogy'}
                  {currentView === 'aristri' && 'Official Trademarked Certification'}
                  {currentView.includes('testimonial') && 'Hall of Fame & Real Reviews'}
                  {currentView === 'updates' && 'Official Academic Bulletin'}
                  {currentView === 'rules' && 'Official Handbook & Operational Code'}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
                  {currentView === 'speaksmart' && 'What is SpeakSmart Centre for Communication?'}
                  {currentView === 'aristri' && 'ARISTRI™ Practical Examination System'}
                  {currentView === 'testimonials' && 'Testimonials & Student Breakthroughs'}
                  {currentView === 'student-testimonials' && 'Student Showcases & Speech Achievements'}
                  {currentView === 'parent-testimonials' && 'Parent Reviews & Family Perspectives'}
                  {currentView === 'updates' && 'Academic Calendar, Holiday Notices & Exam Schedules'}
                  {currentView === 'rules' && 'SpeakSmart Operational Rules & Student Guidelines'}
                </h1>
              </div>

              <div className="text-xs text-stone-300 font-mono hidden lg:block shrink-0">
                LLPIN: ACO-6485 · Kolkata Centre
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Hero Section with Quick Home Page Rules Buttons */}
            <Hero
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigate={handleNavigate}
              onSelectRuleCategory={handleSelectRuleCategory}
            />

            {/* What is SpeakSmart Section */}
            <WhatIsSpeakSmart
              onOpenRegister={() => setIsRegisterOpen(true)}
              onNavigateAristri={() => handleNavigate('aristri')}
            />

            {/* What is Aristri Section */}
            <WhatIsAristri
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* Unified Testimonials Section (Sub-buttons for Student & Parent) */}
            <TestimonialsSection
              initialTab="students"
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* Updates / Notice Board (Exam dates, holidays) */}
            <NoticeBoard
              selectedNoticeModal={selectedNoticeModal}
              onCloseNoticeModal={() => setSelectedNoticeModal(null)}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />

            {/* Rules and Regulations Section */}
            <RulesSection
              selectedCategoryId={selectedRuleCategory}
              onOpenRegister={() => setIsRegisterOpen(true)}
            />
          </>
        )}

        {currentView === 'aristri' && (
          <WhatIsAristri
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {(currentView === 'testimonials' || currentView === 'student-testimonials') && (
          <TestimonialsSection
            initialTab="students"
            onOpenRegister={() => setIsRegisterOpen(true)}
            onTabChange={(tab) => {
              setCurrentView(tab === 'students' ? 'student-testimonials' : 'parent-testimonials');
              window.location.hash = tab === 'students' ? 'student-testimonials' : 'parent-testimonials';
            }}
          />
        )}

        {currentView === 'parent-testimonials' && (
          <TestimonialsSection
            initialTab="parents"
            onOpenRegister={() => setIsRegisterOpen(true)}
            onTabChange={(tab) => {
              setCurrentView(tab === 'students' ? 'student-testimonials' : 'parent-testimonials');
              window.location.hash = tab === 'students' ? 'student-testimonials' : 'parent-testimonials';
            }}
          />
        )}

        {currentView === 'updates' && (
          <NoticeBoard
            selectedNoticeModal={selectedNoticeModal}
            onCloseNoticeModal={() => setSelectedNoticeModal(null)}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {currentView === 'rules' && (
          <RulesSection
            selectedCategoryId={selectedRuleCategory}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}
      </main>

      {/* 3. Student Registration Modal (Interactive Multi-Step Form) */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* 4. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onSelectRuleCategory={handleSelectRuleCategory}
      />
    </div>
  );
}
