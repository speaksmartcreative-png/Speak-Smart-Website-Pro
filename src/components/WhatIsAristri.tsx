import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Users,
  Lightbulb,
  ZoomIn,
  Download,
  Eye,
  FileText,
  Sparkles
} from 'lucide-react';

interface WhatIsAristriProps {
  onOpenRegister: () => void;
}

export const WhatIsAristri: React.FC<WhatIsAristriProps> = ({ onOpenRegister }) => {
  const [showFullResolutionModal, setShowFullResolutionModal] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<'both' | 'document' | 'interactive'>('both');

  const highResImagePath = '/assets/aistudio/ISHITA__c535712c.jpg';

  return (
    <section id="what-is-aristri" className="py-16 md:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Official Trademark Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#1f5e5e] mb-3">
              <span className="bg-[#3dabab]/15 border border-[#3dabab]/30 px-3 py-1 rounded-full text-[#1f5e5e] font-mono font-bold">
                Official Certification System
              </span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600 font-mono font-bold">EXPRESS • EVOLVE • EXCEL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-950 font-display tracking-tight leading-tight">
              ARISTRI<span className="text-[#3dabab] text-2xl sm:text-3xl font-sans align-top">™</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#1f5e5e] tracking-wide mt-1 uppercase">
              Public Speaking & Communication Skills Examination
            </p>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              A live spoken, fully practical test of presentations and interactions. Conceived as a multilevel customised and progressive skill building system, ARISTRI™ is your gateway to think sharper, speak clearer, and lead with confidence in diverse settings.
            </p>
          </div>

          {/* Quick View Mode Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-stone-100 border border-stone-200 rounded-xl shrink-0 self-start lg:self-auto max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveViewMode('both')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeViewMode === 'both' ? 'bg-[#3dabab] text-white shadow-xs' : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActiveViewMode('document')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeViewMode === 'document' ? 'bg-[#3dabab] text-white shadow-xs' : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Official Document Only
            </button>
            <button
              onClick={() => setActiveViewMode('interactive')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeViewMode === 'interactive' ? 'bg-[#3dabab] text-white shadow-xs' : 'text-stone-600 hover:text-stone-950'
              }`}
            >
              Interactive Guide
            </button>
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className={`grid grid-cols-1 ${activeViewMode === 'both' ? 'lg:grid-cols-12 gap-8 items-start' : 'gap-8'} mb-16`}>
          
          {/* HIGH RESOLUTION OFFICIAL DOCUMENT CARRIER */}
          {(activeViewMode === 'both' || activeViewMode === 'document') && (
            <div className={`${activeViewMode === 'both' ? 'lg:col-span-5' : 'max-w-3xl mx-auto w-full'} bg-stone-50 rounded-2xl border border-stone-200 p-5 shadow-sm relative`}>
              <div className="flex items-center justify-between text-xs text-stone-600 border-b border-stone-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#3dabab]" />
                  <span className="font-mono text-[#1f5e5e] font-bold">HIGH-RES OFFICIAL DOCUMENT</span>
                </div>
                <button
                  onClick={() => setShowFullResolutionModal(true)}
                  className="text-xs font-bold text-stone-800 bg-white hover:bg-[#3dabab] hover:text-white px-2.5 py-1 rounded border border-stone-300 hover:border-[#3dabab] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span>Inspect Full Resolution</span>
                </button>
              </div>

              {/* The high-res image embedded directly */}
              <div 
                onClick={() => setShowFullResolutionModal(true)}
                className="relative rounded-xl overflow-hidden border border-stone-200 bg-white cursor-pointer group shadow-sm"
              >
                <img
                  src={highResImagePath}
                  alt="Official ARISTRI Public Speaking & Communication Skills Examination Document"
                  className="w-full h-auto object-contain mx-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-stone-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2.5 rounded-lg bg-white text-stone-900 text-xs font-bold border border-[#3dabab] shadow-xl backdrop-blur-sm flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#3dabab]" />
                    <span>Click to Zoom & View High-Res Poster</span>
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-stone-900">Double Certification Authenticated</span>
                  <span className="text-[11px] font-mono text-[#1f5e5e] font-bold">GOI & SpeakSmart</span>
                </div>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Conceived and Copyrighted by <strong className="text-stone-900">Sreela Mitra</strong> (Educator · Entrepreneur · Visionary).
                </p>
              </div>
            </div>
          )}

          {/* DYNAMIC INTERACTIVE INFORMATION BREAKDOWN */}
          {(activeViewMode === 'both' || activeViewMode === 'interactive') && (
            <div className={`${activeViewMode === 'both' ? 'lg:col-span-7' : 'max-w-4xl mx-auto w-full'} space-y-6`}>
              
              {/* Section 1: What is ARISTRI™ */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#3dabab] transition-colors shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f5e5e] mb-3">
                  <Sparkles className="w-4 h-4 text-[#3dabab]" />
                  <span>What is ARISTRI™?</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>A live spoken fully practical test of presentations & interactions</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>Multilevel customised and progressive skill building system</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>A gateway to think sharper, speak clearer, and lead with confidence in diverse settings</span>
                  </li>
                </ul>
              </div>

              {/* Section 2: Why ARISTRI™ */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#3dabab] transition-colors shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f5e5e] mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#3dabab]" />
                  <span>Why ARISTRI™?</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Individual examiners</strong> assess each examinee live, on the spot</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Double certification</strong> from GOI (Government of India) and SpeakSmart</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Meaningful written feedback</strong> for every task</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900">Gain stronger skills</strong>, mindsets, and identities</span>
                  </li>
                </ul>
              </div>

              {/* Section 3: What Candidates Learn */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#3dabab] transition-colors shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f5e5e] mb-3">
                  <Lightbulb className="w-4 h-4 text-[#3dabab]" />
                  <span>What Candidates Learn</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>Present ideas, stories, arguments, negotiations & pitching</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>Handle questions and think on their feet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                    <span>Objective focussed communication, analysing audiences and impact ...and much more</span>
                  </li>
                </ul>
              </div>

              {/* Section 4: Who Is It For? */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#3dabab] transition-colors shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f5e5e] mb-3">
                  <Users className="w-4 h-4 text-[#3dabab]" />
                  <span>Who Is It For?</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <p className="font-semibold text-stone-900">• Anyone who wants to speak with confidence</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <p className="font-semibold text-stone-900">• Thinkers who want to organise their ideas</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <p className="font-semibold text-stone-900">• Leaders-in-the-making who want to influence and inspire</p>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                    <p className="font-semibold text-stone-900">• Emerging communicators ready to be heard</p>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Section 5: Join the ARISTRI Journey (Express • Evolve • Excel) */}
        <div className="pt-8 border-t border-stone-200 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
              Join the ARISTRI Journey
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              The three progressive pillars of communication excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Express */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] hover:bg-white transition-all shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3dabab]/10 text-[#1f5e5e] flex items-center justify-center font-display text-xl font-bold border border-[#3dabab]/30">
                01
              </div>
              <h4 className="text-xl font-extrabold text-stone-950 font-display">
                Express
              </h4>
              <p className="text-sm font-bold text-[#1f5e5e]">
                Share your ideas with clarity and intelligence
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Break the barriers of hesitance. Learn to frame concepts logically, articulate thoughts crisply, and engage listeners from the first sentence.
              </p>
            </div>

            {/* Evolve */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] hover:bg-white transition-all shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3dabab]/10 text-[#1f5e5e] flex items-center justify-center font-display text-xl font-bold border border-[#3dabab]/30">
                02
              </div>
              <h4 className="text-xl font-extrabold text-stone-950 font-display">
                Evolve
              </h4>
              <p className="text-sm font-bold text-[#1f5e5e]">
                Grow with real-world speaking tasks, feedback & reflection
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Step into live spontaneous simulations, mock negotiations, and structured presentations under live examiner critique and iterative refinement.
              </p>
            </div>

            {/* Excel */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-[#3dabab] hover:bg-white transition-all shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3dabab]/10 text-[#1f5e5e] flex items-center justify-center font-display text-xl font-bold border border-[#3dabab]/30">
                03
              </div>
              <h4 className="text-xl font-extrabold text-stone-950 font-display">
                Excel
              </h4>
              <p className="text-sm font-bold text-[#1f5e5e]">
                Master persuasion, presence, leadership, and listening
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                Attain authoritative executive presence. Command rooms, influence peer perspectives, synthesize complex rebuttals, and lead dialogues.
              </p>
            </div>
          </div>
        </div>

        {/* Central Quote & Founder Recognition */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#ebf7f7] via-white to-[#ebf7f7] border border-[#3dabab]/40 text-center space-y-6 shadow-sm relative">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1f5e5e]">
              Official Philosophy
            </span>
            <blockquote className="text-lg sm:text-2xl font-extrabold text-stone-950 font-display leading-snug">
              &ldquo;Effective communication is a skill that powers every part of your life. ARISTRI is designed to test and build intelligent communication in action&rdquo;
            </blockquote>
          </div>

          <div className="pt-4 border-t border-[#3dabab]/20 max-w-md mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Conceived and Copyrighted by
            </p>
            <p className="text-base font-bold text-[#1f5e5e] mt-0.5">
              Sreela Mitra
            </p>
            <p className="text-xs text-stone-600">
              Educator · Entrepreneur · Visionary
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              className="px-8 py-3.5 text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] active:scale-[0.98] rounded-md transition-all shadow-md hover:shadow-[#3dabab]/20 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Register for ARISTRI™ Examination</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowFullResolutionModal(true)}
              className="px-6 py-3.5 text-sm font-bold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-[#3dabab] rounded-md transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <ZoomIn className="w-4 h-4 text-[#3dabab]" />
              <span>Open High-Resolution Poster</span>
            </button>
          </div>
        </div>

        {/* Full-Screen High Resolution Lightbox Modal */}
        {showFullResolutionModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-md p-2 sm:p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-4xl w-full border border-stone-200 shadow-2xl relative max-h-[96vh] flex flex-col overflow-hidden text-stone-900">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-stone-50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1f5e5e] uppercase tracking-wider font-mono">
                    ARISTRI™ High Resolution Document Viewer
                  </span>
                  <span className="text-stone-300 hidden sm:inline">·</span>
                  <span className="text-xs text-stone-500 hidden sm:inline">Copyrighted by Sreela Mitra</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={highResImagePath}
                    download="ARISTRI_Public_Speaking_Examination.jpg"
                    className="px-3 py-1.5 text-xs font-bold text-stone-800 bg-white hover:bg-[#3dabab] hover:text-white border border-stone-300 rounded transition-colors flex items-center gap-1.5 shadow-xs"
                    title="Download high-resolution image"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setShowFullResolutionModal(false)}
                    className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-200 text-lg font-bold cursor-pointer"
                    aria-label="Close high-res viewer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Full resolution image viewer container */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-stone-100 flex items-center justify-center">
                <img
                  src={highResImagePath}
                  alt="Full High-Resolution ARISTRI Examination Document"
                  className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-xl border border-stone-300"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-600">
                <span>Double Certification from Government of India (GOI) and SpeakSmart</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setShowFullResolutionModal(false);
                      onOpenRegister();
                    }}
                    className="font-bold text-[#1f5e5e] hover:text-[#3dabab] hover:underline cursor-pointer"
                  >
                    Proceed to Registration →
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
