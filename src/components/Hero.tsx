import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Mic2, Sparkles, BookOpen, Clock, Calendar, Star, ChevronLeft, ChevronRight, Trophy, Maximize2, X, ExternalLink } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onOpenRegister: () => void;
  onNavigate: (view: PageView) => void;
  onSelectRuleCategory?: (ruleId: string) => void;
}

import { STUDENT_TESTIMONIALS } from '../data/mockData';

// Map verified student testimonials for the Star Students Hall of Fame
const STAR_STUDENTS = STUDENT_TESTIMONIALS.map((st) => ({
  id: st.id,
  name: st.name,
  grade: st.ageOrGrade,
  achievement: st.achievement,
  tag: st.school ? st.school : st.cohort,
  image: st.image || '/assets/testimonials/student_hriday_jain_cropped.jpg',
  speechHighlight: st.quote,
  badge: st.id === 'st-doon-ekagra' ? '🏆 Doon School Selection' : '⭐ Verified Scholar'
}));

export const Hero: React.FC<HeroProps> = ({
  onOpenRegister,
  onNavigate,
  onSelectRuleCategory,
}) => {
  const [activeStarIdx, setActiveStarIdx] = useState(0);
  const [previewImage, setPreviewImage] = useState<{ src: string; caption: string } | null>(null);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#edf8f9]/90 via-[#f6fbfc]/80 to-[#e6f4f6]/90 dark:from-[#061517]/90 dark:via-[#092226]/85 dark:to-[#07171a]/95 text-stone-900 dark:text-stone-100 py-12 md:py-20 lg:py-24 border-b border-stone-200/80 dark:border-stone-800 transition-colors duration-200">
      {/* Dynamic Stage Light Auroras */}
      <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-gradient-to-br from-[#3dabab]/25 via-teal-300/15 to-transparent rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-gradient-to-tr from-amber-400/20 via-amber-300/10 to-transparent dark:from-amber-500/15 dark:via-amber-600/5 rounded-full blur-3xl pointer-events-none animate-aurora" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-gradient-to-tr from-[#3dabab]/12 via-cyan-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Stage Pattern Texture */}
      <div className="absolute inset-0 bg-stage-pattern opacity-40 dark:opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Registration CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1f5e5e] dark:text-[#52c5c5]">
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-amber-400/20 via-[#0ea5a5]/25 to-indigo-500/20 border-2 border-[#0ea5a5]/40 px-3.5 py-1 rounded-full text-stone-900 dark:text-stone-100 font-black shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span className="text-black dark:text-white">Spring Admissions Open</span>
              </span>
              <span className="text-stone-400 dark:text-stone-600 hidden sm:inline">·</span>
              <span className="text-stone-900 dark:text-stone-100 hidden sm:inline font-extrabold tracking-wide">Think • Speak • Lead</span>
              <span className="text-stone-400 dark:text-stone-600 hidden sm:inline">·</span>
              <a
                href="https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0d9488] dark:text-[#2dd4bf] hover:text-[#0284c7] font-black hover:underline inline-flex items-center gap-1"
                title="View campus location in Google Maps"
              >
                <span>📍 SpeakSmart, Kolkata</span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 dark:text-white font-display leading-[1.1] text-balance">
              We don&apos;t teach only public speaking. We teach communication as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] via-[#0284c7] to-[#6366f1] dark:from-[#2dd4bf] dark:via-[#38bdf8] dark:to-[#818cf8]">essential life skill</span>.
            </h1>

            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-200 leading-relaxed max-w-2xl font-medium">
              <strong className="text-stone-950 dark:text-white font-extrabold">SpeakSmart Centre for Communication</strong> (LLPIN: ACO-6485) — founded by <strong className="text-stone-950 dark:text-white font-extrabold">Mrs. Sreela Mitra</strong> at SpeakSmart, Kolkata. We prepare students for every real-world stage: debates, competitive boarding school interviews, storytelling, boardroom leadership, and the <strong className="text-stone-950 dark:text-white font-extrabold">ARISTRI™ Examination System</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://forms.gle/amSFYJ7xTY1oi97u8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#0d9488] via-[#0284c7] to-[#2563eb] hover:from-[#0f766e] hover:to-[#1d4ed8] active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-cyan-500/30 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Student Registration for New Semester</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => onNavigate('speaksmart')}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 bg-white/90 dark:bg-[#0c2428] hover:bg-white dark:hover:bg-[#123035] hover:border-[#0ea5a5] border-2 border-stone-300 dark:border-stone-700 rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-[#0d9488] dark:text-[#2dd4bf]" />
                <span>Founder&apos;s Vision</span>
              </button>

              <button
                onClick={() => onNavigate('aristri')}
                className="px-4 py-3.5 text-sm sm:text-base font-extrabold text-stone-800 dark:text-stone-200 hover:text-black dark:hover:text-white hover:bg-amber-100/60 dark:hover:bg-amber-950/40 rounded-xl border border-amber-300/60 dark:border-amber-700/50 transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <Award className="w-4 h-4 text-amber-500" />
                <span>What is ARISTRI™?</span>
              </button>
            </div>

            {/* Vibrant Pedagogy Metric Strip (Directly from Founder Sreela Mitra's Address) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border-2 border-teal-500/30 dark:border-teal-400/30 shadow-xs backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-black font-mono text-teal-700 dark:text-teal-300 tabular-nums">10 : 1</p>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-bold mt-0.5">Students to Mentor</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border-2 border-emerald-500/30 dark:border-emerald-400/30 shadow-xs backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-700 dark:text-emerald-300 tabular-nums">100%</p>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-bold mt-0.5">Every Student Speaks</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border-2 border-amber-500/30 dark:border-amber-400/30 shadow-xs backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-black font-mono text-amber-700 dark:text-amber-300 tabular-nums">Zero HW</p>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-bold mt-0.5">100% Studio Immersion</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent border-2 border-indigo-500/30 dark:border-indigo-400/30 shadow-xs backdrop-blur-xs">
                <p className="text-2xl sm:text-3xl font-black font-mono text-indigo-700 dark:text-indigo-300 tabular-nums">Weekly</p>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-bold mt-0.5">Videos to Parents</p>
              </div>
            </div>
          </div>

          {/* Right Column: Star Students Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Vibrant Multi-Chromatic Card Glow Halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400/40 via-teal-400/35 to-indigo-500/40 rounded-3xl blur-xl opacity-80 pointer-events-none animate-aurora" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-[#0ea5a5]/30 dark:border-teal-500/30 shadow-2xl bg-white/95 dark:bg-[#07191d]/95 backdrop-blur-md p-5 sm:p-6 space-y-4">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b-2 border-stone-100 dark:border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-stone-950 flex items-center justify-center shadow-md">
                    <Star className="w-4 h-4 fill-white text-white drop-shadow-xs" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-stone-950 dark:text-white font-display leading-tight flex items-center gap-2">
                      <span>Star Students</span>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black uppercase tracking-wider shadow-xs">
                        ★ Hall of Fame
                      </span>
                    </h3>
                    <p className="text-[11px] text-[#0d9488] dark:text-[#2dd4bf] font-extrabold">
                      Verified Podium Scholars &amp; Stage Triumphs
                    </p>
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveStarIdx((prev) => (prev === 0 ? STAR_STUDENTS.length - 1 : prev - 1))}
                    className="p-1.5 rounded-lg border-2 border-stone-200 dark:border-stone-700 hover:border-[#0ea5a5] hover:bg-teal-50 dark:hover:bg-teal-950 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer shadow-2xs"
                    aria-label="Previous star student"
                    title="Previous student"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-stone-700 dark:text-stone-300 px-1 font-black">
                    {activeStarIdx + 1}/{STAR_STUDENTS.length}
                  </span>
                  <button
                    onClick={() => setActiveStarIdx((prev) => (prev === STAR_STUDENTS.length - 1 ? 0 : prev + 1))}
                    className="p-1.5 rounded-lg border-2 border-stone-200 dark:border-stone-700 hover:border-[#0ea5a5] hover:bg-teal-50 dark:hover:bg-teal-950 text-stone-700 dark:text-stone-200 transition-colors cursor-pointer shadow-2xs"
                    aria-label="Next star student"
                    title="Next student"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Active Star Student Feature Card */}
              {(() => {
                const student = STAR_STUDENTS[activeStarIdx];
                return (
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-4">
                      {/* Student Portrait / Photo */}
                      <div 
                        className="relative w-22 h-26 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#0ea5a5]/40 shadow-md bg-stone-100 dark:bg-stone-800 group/img cursor-pointer ring-2 ring-amber-400/30"
                        onClick={() => setPreviewImage({ src: student.image, caption: `${student.name} · ${student.achievement}` })}
                        title="Click to view full photo"
                      >
                        <img
                          src={student.image}
                          alt={student.name}
                          className="w-full h-full object-cover object-center group-hover/img:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-1 left-1">
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-black/80 text-white backdrop-blur-xs">
                            {student.tag}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Maximize2 className="w-4 h-4 drop-shadow" />
                        </div>
                      </div>

                      {/* Info & Achievements */}
                      <div className="space-y-1.5 flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-base sm:text-lg font-black text-stone-950 dark:text-white font-display truncate">
                            {student.name}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-[#0f766e] dark:text-[#2dd4bf] border border-[#0ea5a5]/40 font-black">
                            {student.badge}
                          </span>
                        </div>
                        <p className="text-xs font-black text-[#0d9488] dark:text-[#2dd4bf]">
                          {student.grade}
                        </p>
                        <p className="text-xs font-bold text-stone-900 dark:text-stone-100 leading-snug">
                          {student.achievement}
                        </p>
                      </div>
                    </div>

                    {/* Speech Highlight / Testimonial Quote */}
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-50/70 via-white to-amber-50/70 dark:from-[#051618] dark:via-[#092226] dark:to-[#091a1d] border-2 border-[#0ea5a5]/25 text-xs text-stone-800 dark:text-stone-200 leading-relaxed shadow-2xs">
                      <p className="italic font-medium">
                        &ldquo;{student.speechHighlight}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })()}


              {/* Student Quick Pill Selectors */}
              <div className="flex items-center gap-1.5 pt-1 overflow-x-auto pb-1 scrollbar-thin">
                {STAR_STUDENTS.map((st, idx) => (
                  <button
                    key={st.id}
                    onClick={() => setActiveStarIdx(idx)}
                    className={`py-1 px-2.5 rounded-lg text-center transition-all cursor-pointer border text-[11px] font-bold whitespace-nowrap shrink-0 ${
                      activeStarIdx === idx
                        ? 'bg-[#3dabab]/15 dark:bg-[#3dabab]/25 border-[#3dabab] text-[#1f5e5e] dark:text-[#52c5c5] shadow-xs ring-1 ring-[#3dabab]/30'
                        : 'bg-stone-50 dark:bg-stone-850 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    {st.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-stone-500 dark:text-stone-400">
                  More student honorees being added
                </span>
                <button
                  onClick={() => onNavigate('student-testimonials')}
                  className="font-bold text-[#1f5e5e] dark:text-[#52c5c5] hover:text-[#3dabab] hover:underline flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  <span>All Student Stories</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* Rules and Regulations (Buttons in home page) */}
        {/* ======================================================== */}
        <div className="mt-14 pt-8 border-t border-stone-200 dark:border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3dabab]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1f5e5e] dark:text-[#52c5c5] font-sans">
                  Institute Policies & Code of Conduct
                </h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Rules & Regulations (Quick access buttons for enrolled students and parents)
              </p>
            </div>
            <button
              onClick={() => onNavigate('rules')}
              className="text-xs font-bold text-[#1f5e5e] dark:text-[#52c5c5] hover:text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer w-fit"
            >
              <span>Explore Complete Rulebook & Handbook</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Quick Action Rule Buttons on Home Page */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-onboarding');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white dark:bg-[#091a1d] hover:bg-[#ebf7f7]/50 dark:hover:bg-[#112a2f] border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] dark:hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <BookOpen className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#1f5e5e] dark:group-hover:text-[#52c5c5]">Registration Checklist</p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">Enrolment & digital agreement forms</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-feedback');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white dark:bg-[#091a1d] hover:bg-[#ebf7f7]/50 dark:hover:bg-[#112a2f] border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] dark:hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Mic2 className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#1f5e5e] dark:group-hover:text-[#52c5c5]">Weekly Video Reports</p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">Class WhatsApp feedback protocol</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-attendance');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white dark:bg-[#091a1d] hover:bg-[#ebf7f7]/50 dark:hover:bg-[#112a2f] border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] dark:hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Clock className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#1f5e5e] dark:group-hover:text-[#52c5c5]">1 Make-Up / Week</p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">Attendance & seat retention rules</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-exams');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white dark:bg-[#091a1d] hover:bg-[#ebf7f7]/50 dark:hover:bg-[#112a2f] border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] dark:hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Award className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#1f5e5e] dark:group-hover:text-[#52c5c5]">Exams & GOI Cert</p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">July–Nov global testing window</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-financial');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white dark:bg-[#091a1d] hover:bg-[#ebf7f7]/50 dark:hover:bg-[#112a2f] border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] dark:hover:border-[#3dabab] text-left transition-all cursor-pointer col-span-2 sm:col-span-1 shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 dark:text-stone-100 group-hover:text-[#1f5e5e] dark:group-hover:text-[#52c5c5]">Fees & Bank Details</p>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-tight mt-0.5">Rs. 4,000/mo by 15th · UPI/ICICI</p>
            </button>
          </div>
        </div>

        {/* Quick Announcement Preview Strip */}
        <div className="mt-8 p-4 rounded-xl bg-white dark:bg-[#091a1d] border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-[#3dabab]/10 text-[#3dabab]">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-stone-950 dark:text-white">Academic Bulletin &amp; Notice Board: </span>
              <span className="text-stone-600 dark:text-stone-400">All batches running on regular timetable. Official term notices &amp; exam dates will be published here upon announcement.</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('updates')}
            className="text-[#1f5e5e] dark:text-[#52c5c5] hover:text-[#3dabab] font-bold flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Visit Notice Board</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Star Student Photo Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl p-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-950/70 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close zoom preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={previewImage.src}
                alt={previewImage.caption}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>
            <div className="pt-3 px-2 flex items-center justify-between text-xs text-stone-300">
              <span className="font-semibold text-white">{previewImage.caption}</span>
              <span className="text-[11px] text-stone-400">SpeakSmart Centre for Communication</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
