import React from 'react';
import { ArrowRight, ShieldCheck, Award, Mic2, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onOpenRegister: () => void;
  onNavigate: (view: PageView) => void;
  onSelectRuleCategory?: (ruleId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegister,
  onNavigate,
  onSelectRuleCategory,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f9] via-white to-stone-50 text-stone-900 py-12 md:py-20 lg:py-24 border-b border-stone-200">
      {/* Background glow accents in brand colour #3dabab */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3dabab]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#3dabab]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Registration CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1f5e5e]">
              <span className="flex items-center gap-1.5 bg-[#3dabab]/15 border border-[#3dabab]/30 px-3 py-1 rounded-full text-[#1f5e5e]">
                <Sparkles className="w-3.5 h-3.5 text-[#3dabab]" />
                <span>Spring 2027 Admissions Open</span>
              </span>
              <span className="text-stone-400 hidden sm:inline">·</span>
              <span className="text-stone-700 hidden sm:inline font-bold">Think • Speak • Lead</span>
              <span className="text-stone-400 hidden sm:inline">·</span>
              <a
                href="https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1f5e5e] hover:text-[#3dabab] font-bold lowercase sm:normal-case hover:underline inline-flex items-center gap-1"
                title="View campus location in Google Maps"
              >
                <span>📍 Shivam Chambers, Kolkata</span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 font-display leading-[1.1] text-balance">
              We don&apos;t teach only public speaking. We teach communication as an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#277979]">essential life skill</span>.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              <strong className="text-stone-900">SpeakSmart Centre for Communication</strong> (LLPIN: ACO-6485) — conceived by Founder <strong className="text-stone-900">Mrs. Sreela Mitra</strong> at Shivam Chambers, Kolkata. We prepare students for every human communication format: debates, interviews, business negotiations, storytelling, media soundbites, and the <strong className="text-stone-900">ARISTRI™ Examination System</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenRegister}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#3dabab] hover:bg-[#329696] active:scale-[0.98] rounded-md transition-all shadow-md hover:shadow-[#3dabab]/20 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <span>Student Registration for New Semester</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('speaksmart')}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-stone-800 bg-white hover:bg-stone-50 hover:text-[#3dabab] hover:border-[#3dabab] border border-stone-300 rounded-md transition-colors cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-xs"
              >
                <BookOpen className="w-4 h-4 text-[#3dabab]" />
                <span>Founder&apos;s Vision (What is SpeakSmart)</span>
              </button>

              <button
                onClick={() => onNavigate('aristri')}
                className="px-5 py-3.5 text-sm sm:text-base font-bold text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
              >
                <Award className="w-4 h-4 text-[#3dabab]" />
                <span>What is ARISTRI™?</span>
              </button>
            </div>

            {/* Authentic Founder Pedagogy Metrics (Directly from Sreela Mitra's Address) */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-stone-200">
              <div>
                <p className="text-2xl font-extrabold font-mono text-stone-950 tabular-nums">10 : 1</p>
                <p className="text-xs text-stone-600 font-medium">Students to Teacher</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold font-mono text-stone-950 tabular-nums">100%</p>
                <p className="text-xs text-stone-600 font-medium">Every Student Speaks</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold font-mono text-stone-950 tabular-nums">Zero</p>
                <p className="text-xs text-stone-600 font-medium">No Traditional Homework</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold font-mono text-stone-950 tabular-nums">Weekly</p>
                <p className="text-xs text-stone-600 font-medium">Videos Sent to Parents</p>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Showcase (Founder & Co-Founder Cutouts) */}
          <div className="lg:col-span-5 relative">
            {/* Subtle background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#3dabab]/20 to-teal-100 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            <div className="relative rounded-3xl overflow-hidden border border-stone-200/90 shadow-2xl bg-white p-5 sm:p-6 space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3dabab] animate-pulse" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#1f5e5e]">
                    SpeakSmart Leadership
                  </span>
                </div>
                <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                  LLPIN: ACO-6485
                </span>
              </div>

              {/* Dual Cutout Portraits Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                
                {/* 1. FOUNDER (Green Dress) */}
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#e6f4f4] via-stone-50 to-white border border-[#3dabab]/30 p-2 sm:p-3 flex flex-col transition-all hover:shadow-md hover:border-[#3dabab]">
                  {/* Cutout Image Container */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src="/assets/aistudio/founder_sreela_mitra.jpeg"
                      alt="Founder Mrs. Sreela Mitra in green dress"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Founder Badge Overlay */}
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#3dabab] text-white shadow-md">
                        ★ Founder
                      </span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="pt-3 text-center sm:text-left space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-950 font-display leading-tight">
                      Mrs. Sreela Mitra
                    </h4>
                    <p className="text-[11px] font-bold text-[#1f5e5e]">
                      Founder &amp; Director
                    </p>
                    <p className="text-[10px] text-stone-500 leading-snug pt-1 line-clamp-2">
                      Conceiver of ARISTRI™ framework &amp; pedagogy
                    </p>
                  </div>
                </div>

                {/* 2. CO-FOUNDER (Printed Dress) */}
                <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-b from-stone-50 via-stone-50 to-white border border-stone-200 p-2 sm:p-3 flex flex-col transition-all hover:shadow-md hover:border-[#3dabab]">
                  {/* Cutout Image Container */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                    <img
                      src="/assets/aistudio/co_founder_speaksmart.jpeg"
                      alt="Co-Founder SpeakSmart Centre for Communication"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Co-Founder Badge Overlay */}
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-stone-900 text-white shadow-md">
                        Co-Founder
                      </span>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="pt-3 text-center sm:text-left space-y-0.5">
                    <h4 className="text-xs sm:text-sm font-extrabold text-stone-950 font-display leading-tight">
                      Co-Founder
                    </h4>
                    <p className="text-[11px] font-bold text-[#1f5e5e]">
                      Executive Director
                    </p>
                    <p className="text-[10px] text-stone-500 leading-snug pt-1 line-clamp-2">
                      Operations, mentorship &amp; student growth
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quote / Institutional Note */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                <p className="text-stone-600 italic truncate mr-2">
                  &ldquo;Nurturing authentic voices from Kolkata to the world.&rdquo;
                </p>
                <a
                  href="#what-is-speaksmart"
                  className="font-bold text-[#1f5e5e] hover:text-[#3dabab] whitespace-nowrap hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Meet Founders</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* Rules and Regulations (Buttons in home page) */}
        {/* ======================================================== */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3dabab]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1f5e5e] font-sans">
                  Institute Policies & Code of Conduct
                </h3>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Rules & Regulations (Quick access buttons for enrolled students and parents)
              </p>
            </div>
            <button
              onClick={() => onNavigate('rules')}
              className="text-xs font-bold text-[#1f5e5e] hover:text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer w-fit"
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
              className="group p-3 rounded-xl bg-white hover:bg-[#ebf7f7]/50 border border-stone-200 hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <BookOpen className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 group-hover:text-[#1f5e5e]">Registration Checklist</p>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">Enrolment & digital agreement forms</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-feedback');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white hover:bg-[#ebf7f7]/50 border border-stone-200 hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Mic2 className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 group-hover:text-[#1f5e5e]">Weekly Video Reports</p>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">Class WhatsApp feedback protocol</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-attendance');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white hover:bg-[#ebf7f7]/50 border border-stone-200 hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Clock className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 group-hover:text-[#1f5e5e]">1 Make-Up / Week</p>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">Attendance & seat retention rules</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-exams');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white hover:bg-[#ebf7f7]/50 border border-stone-200 hover:border-[#3dabab] text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <Award className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 group-hover:text-[#1f5e5e]">Exams & GOI Cert</p>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">July–Nov global testing window</p>
            </button>

            <button
              onClick={() => {
                if (onSelectRuleCategory) onSelectRuleCategory('rule-financial');
                onNavigate('rules');
              }}
              className="group p-3 rounded-xl bg-white hover:bg-[#ebf7f7]/50 border border-stone-200 hover:border-[#3dabab] text-left transition-all cursor-pointer col-span-2 sm:col-span-1 shadow-xs"
            >
              <div className="flex items-center justify-between text-[#3dabab] mb-1">
                <ShieldCheck className="w-4 h-4" />
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-stone-900 group-hover:text-[#1f5e5e]">Fees & Bank Details</p>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">Rs. 4,000/mo by 15th · UPI/ICICI</p>
            </button>
          </div>
        </div>

        {/* Quick Announcement Preview Strip */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-[#3dabab]/10 text-[#3dabab]">
              <Calendar className="w-4 h-4" />
            </span>
            <div>
              <span className="font-bold text-stone-950">Upcoming Academic Milestone: </span>
              <span className="text-stone-600">Semester Jury Exam & Speech Gala (Nov 14 – 16, 2026) · Autumn Break (Nov 1–3)</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('updates')}
            className="text-[#1f5e5e] hover:text-[#3dabab] font-bold flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>View All Exam & Holiday Notices</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
};
