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
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#3dabab] selection:text-white font-sans overflow-x-hidden">
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar
        urgentNotice={urgentNotice}
        onOpenNotice={handleOpenNotice}
        onViewAllUpdates={() => handleNavigate('updates')}
      />

      {/* 2. Primary Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Breadcrumb banner when viewing a dedicated sub-page */}
      {currentView !== 'home' && (
        <nav aria-label="Breadcrumb" className="bg-stone-50 border-b border-stone-200 px-4 py-3 text-xs text-stone-600">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigate('home')}
                className="text-stone-700 hover:text-black hover:underline cursor-pointer font-bold font-display"
                title="Return to main page"
              >
                SpeakSmart
              </button>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="font-bold text-black capitalize">
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
              className="text-[#3dabab] hover:text-[#277979] font-bold cursor-pointer"
            >
              ← Back to Main Institute Overview
            </button>
          </div>
        </nav>
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
