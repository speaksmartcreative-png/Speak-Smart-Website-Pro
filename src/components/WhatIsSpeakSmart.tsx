import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Quote,
  Users,
  Play,
  Edit3,
  Tv,
  HeartHandshake,
  Target,
  FileText,
  Clock,
  ArrowRight,
  Video as VideoIcon,
  Scale,
  Award,
  BookOpen,
  MessageSquare,
  X,
  Maximize2,
  ExternalLink
} from 'lucide-react';

interface WhatIsSpeakSmartProps {
  onOpenRegister: () => void;
  onNavigateAristri: () => void;
}

interface Chapter {
  title: string;
  timestamp: number; // in seconds
  timeLabel: string;
  badge: string;
  description: string;
}

const VIDEO_CHAPTERS: Chapter[] = [
  {
    title: 'What Does SpeakSmart Teach?',
    timestamp: 0,
    timeLabel: '00:00',
    badge: 'Overview',
    description: 'Communication as a lifelong skill across all real-world formats.',
  },
  {
    title: 'Effective Communication vs Public Speaking',
    timestamp: 66,
    timeLabel: '01:06',
    badge: 'The 4 C\'s',
    description: 'Why Connectivity is paramount & objective-focused communication.',
  },
  {
    title: 'How Do You Teach This in 90 Mins?',
    timestamp: 358,
    timeLabel: '05:58',
    badge: 'Pedagogy',
    description: 'Topic structures, debate, skits, campaigns & true vocabulary.',
  },
  {
    title: 'Classroom Dynamics & Methodology',
    timestamp: 439,
    timeLabel: '07:19',
    badge: 'In Practice',
    description: '10:1 ratio, every child speaks, no homework & football analogy.',
  },
];

const SREELA_STAGE_GALLERY = [
  {
    src: '/assets/aistudio/Sreela_8_4be0e9b9.png',
    title: 'Live Keynote on Stage',
    badge: '★ Founder & Director',
    caption: 'Sreela Mitra addressing attendees on the main stage with SpeakSmart banner.'
  },
  {
    src: '/assets/aistudio/Sreela_12_d2d2977d.jpeg',
    title: 'Masterclass Public Speaking',
    badge: 'Masterclass',
    caption: 'Directing debate, voice modulation, and rhetorical delivery with conviction.'
  },
  {
    src: '/assets/aistudio/Sreela_7_6aaece40.jpeg',
    title: 'Academic & Trinity Direction',
    badge: 'Trinity Certified',
    caption: 'Trinity College London certified pedagogy and speech curriculum design.'
  },
  {
    src: '/assets/aistudio/Sreela_and_Vishakha_14084757.jpeg',
    title: 'Founders Together',
    badge: 'Institutional Growth',
    caption: 'Founders Sreela Mitra & Vishakha Agarwal at SpeakSmart Academy \'In the Spotlight\'.'
  }
];

const VISHAKHA_STAGE_GALLERY = [
  {
    src: '/assets/aistudio/Vishakha_1_eafab282.jpeg',
    title: 'Executive Partner',
    badge: 'Partner · Co-Founder',
    caption: 'Vishakha Agarwal, Partner & Co-Founder, EDHEC Business School France Alum.'
  },
  {
    src: '/assets/aistudio/Sreela_and_Vishakha_14084757.jpeg',
    title: 'Founders at \'In the Spotlight\'',
    badge: 'In the Spotlight',
    caption: 'Leading strategic expansion and institutional youth communication showcases.'
  },
  {
    src: '/assets/aistudio/Sreela_4_b4ca305e.jpeg',
    title: 'Studio Event Direction',
    badge: 'Studio Direction',
    caption: 'Managing interactive tech, audio diagnostics, and student performance reviews.'
  }
];

export const WhatIsSpeakSmart: React.FC<WhatIsSpeakSmartProps> = ({
  onOpenRegister,
  onNavigateAristri,
}) => {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'fourCs' | 'formats' | 'classroom'>('philosophy');
  const [youtubeUrl, setYoutubeUrl] = useState(() => {
    return localStorage.getItem('speaksmart_youtube_url') || '';
  });
  const [inputUrl, setInputUrl] = useState('');
  const [isSettingUrl, setIsSettingUrl] = useState(false);
  const [startSeconds, setStartSeconds] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [selectedLeaderModal, setSelectedLeaderModal] = useState<'sreela' | 'vishakha' | null>(null);
  const [modalPhotoIdx, setModalPhotoIdx] = useState(0);
  const [previewMomentsPhoto, setPreviewMomentsPhoto] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedLeaderModal(null);
        setPreviewMomentsPhoto(null);
      }
    };
    if (selectedLeaderModal || previewMomentsPhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedLeaderModal, previewMomentsPhoto]);

  const transcriptPdfUrl = '/assets/aistudio/What_is_SpeakSmart_b1e4544e.pdf';

  // Helper to extract YouTube video ID from standard or short links
  const extractYouTubeId = (url: string) => {
    if (!url) return '';
    const clean = url.trim();
    const match = clean.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) return match[1];
    if (clean.length === 11 && !clean.includes('/') && !clean.includes('.')) return clean;
    return '';
  };

  const currentYoutubeId = extractYouTubeId(youtubeUrl);

  const handleSaveYoutubeUrl = (urlToSave?: string) => {
    const target = urlToSave !== undefined ? urlToSave : inputUrl;
    setYoutubeUrl(target);
    localStorage.setItem('speaksmart_youtube_url', target);
    setIsSettingUrl(false);
    setIsAutoPlay(true);
  };

  const jumpToChapter = (seconds: number, tabSync?: 'philosophy' | 'fourCs' | 'formats' | 'classroom', chapterIdx?: number) => {
    setStartSeconds(seconds);
    setIsAutoPlay(true);
    if (chapterIdx !== undefined) setActiveChapterIndex(chapterIdx);
    if (tabSync) setActiveTab(tabSync);
  };

  return (
    <section id="what-is-speaksmart" className="relative py-16 md:py-24 bg-gradient-to-b from-[#f3fafb]/85 via-[#e8f6f7]/80 to-[#edf7f9]/85 dark:from-[#061517]/90 dark:via-[#092226]/85 dark:to-[#071618]/90 text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800 overflow-hidden">
      {/* Decorative Aurora Ambient Orbs & Subtle Matrix Grid */}
      <div className="absolute top-0 right-10 w-[34rem] h-[30rem] bg-gradient-to-br from-[#3dabab]/25 via-teal-200/20 to-transparent dark:from-[#3dabab]/20 dark:via-teal-800/10 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-tr from-amber-300/20 via-[#3dabab]/15 to-transparent dark:from-amber-500/15 dark:via-[#3dabab]/10 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-stage-pattern opacity-40 dark:opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Official Brand Credentials */}
        <div className="mb-10 pb-8 border-b border-stone-200 dark:border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/aistudio/SpeakSmart_Logo_transparent.png"
                alt="SpeakSmart Centre for Communication"
                className="h-16 sm:h-20 w-auto object-contain shrink-0"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1f5e5e] mb-1">
                  <span className="w-2.5 h-0.5 bg-[#3dabab]"></span>
                  <span>Founder&apos;s Video Address &amp; Pedagogy</span>
                  <span className="text-stone-300">·</span>
                  <span className="font-mono text-stone-500">LLPIN: ACO-6485</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 font-display tracking-tight leading-tight">
                  What is <span className="font-script text-4xl sm:text-5xl text-stone-950">Speak</span><span className="font-script text-4xl sm:text-5xl text-[#3dabab]">Smart</span>?
                </h2>
                <p className="text-sm font-bold text-[#1f5e5e] tracking-wide mt-1">
                  Think • Speak • Lead · Watch Founder Mrs. Sreela Mitra Explain the Pedagogy
                </p>
              </div>
            </div>

            {/* Quick Badge Indicating Founder Video Address */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#f2f9f9] text-[#1f5e5e] border border-[#3dabab]/30">
                <VideoIcon className="w-3.5 h-3.5 text-[#3dabab]" />
                <span>Founder Recorded Address</span>
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CINEMATIC STAGE LEADERSHIP SHOWCASE (VINH GIANG STYLE) */}
        {/* ======================================================== */}
        <div className="mb-20 rounded-3xl overflow-hidden bg-gradient-to-b from-[#060c0e] via-[#0b171a] to-[#070e10] text-white border border-[#3dabab]/40 shadow-2xl relative">
          {/* Ambient Spotlight & Stage Glow Effects */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-gradient-to-b from-[#3dabab]/25 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-[450px] h-[300px] bg-[#1f5e5e]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#3dabab_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          <div className="p-6 sm:p-10 lg:p-12 relative z-10">
            {/* Stage Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-stone-800/80">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40 backdrop-blur-md shadow-[0_0_20px_rgba(61,171,171,0.25)]">
                  <span className="w-2 h-2 rounded-full bg-[#3dabab] animate-pulse" />
                  <span>Founding Leadership &amp; Direction</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
                  The Architects of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-[#3dabab]">SpeakSmart Centre for Communication</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                  Treating communication not as routine stage theatricals, but as a calibrated, lifelong instrument of influence, empathy, and intellectual leadership.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-700/80 text-stone-300 text-xs font-mono font-bold flex items-center gap-2 shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-[#3dabab]" />
                  <span>LLPIN: ACO-6485 · Kolkata Centre</span>
                </div>
              </div>
            </div>

            {/* Asymmetric 12-Column Grid: Sreela Mitra (lg:col-span-8) & Vishakha Agarwal (lg:col-span-4) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* 1. PRIMARY FLAGSHIP KEYNOTE CARD: Sreela Mitra (Takes ~67% Dominant Space) */}
              <div className="lg:col-span-7 xl:col-span-8 group rounded-3xl bg-gradient-to-br from-stone-900/95 via-stone-950 to-stone-900/90 border-2 border-[#3dabab]/50 p-6 sm:p-9 lg:p-10 shadow-2xl hover:border-[#3dabab] transition-all duration-500 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                {/* Luminous Keynote Backlight */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#3dabab]/20 to-transparent rounded-bl-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-tr-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10">
                  {/* Top Badge Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#3dabab] to-[#277979] text-white shadow-[0_0_15px_rgba(61,171,171,0.4)]">
                        ★ Founder &amp; Chief Pedagogical Director
                      </span>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-teal-200 bg-stone-900/90 px-2.5 py-0.5 rounded-full border border-[#3dabab]/30">
                        Pedagogical Architect
                      </span>
                    </div>
                    <span className="text-xs font-bold text-teal-200 flex items-center gap-1.5 bg-stone-900/90 px-3 py-1 rounded-full border border-stone-700/80">
                      <Award className="w-3.5 h-3.5 text-[#3dabab]" />
                      Trinity College London Certified
                    </span>
                  </div>

                  {/* Cutout Portrait Showcase & Bio */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
                    {/* 3D Elevated Cutout Aperture */}
                    <div className="relative group/photo shrink-0 cursor-pointer" onClick={() => { setSelectedLeaderModal('sreela'); setModalPhotoIdx(0); }}>
                      {/* Backlight Halo */}
                      <div className="absolute -inset-2 bg-gradient-to-t from-[#3dabab]/50 via-teal-400/20 to-transparent rounded-3xl blur-md opacity-80 group-hover/photo:opacity-100 transition-opacity" />
                      
                      <div className="relative w-48 h-64 sm:w-56 sm:h-76 rounded-2xl overflow-hidden border-2 border-[#3dabab]/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-stone-950 ring-4 ring-[#3dabab]/20 transform group-hover/photo:-translate-y-2 transition-transform duration-500">
                        <img
                          src="/assets/aistudio/Sreela_8_4be0e9b9.png"
                          alt="Sreela Mitra, Founder and Director, SpeakSmart Centre for Communication"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Overlay Tag */}
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-stone-800">
                          <span className="text-[10px] font-extrabold text-white uppercase tracking-wider">
                            Founder &amp; Director
                          </span>
                          <span className="text-[9px] font-bold text-[#4fd1d1] flex items-center gap-0.5">
                            <Maximize2 className="w-3 h-3" />
                            <span>Zoom</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Profile Description */}
                    <div className="space-y-3 text-center sm:text-left flex-1">
                      <div>
                        <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display leading-tight">
                          Sreela Mitra
                        </h4>
                        <p className="text-xs sm:text-sm font-bold text-[#4fd1d1] uppercase tracking-wider mt-1">
                          Founder and Director, SpeakSmart Centre for Communication
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        A pioneer in communication education, Sreela Mitra has spent over two decades shaping the way India learns to think, speak, and lead. As a communication coach, moderator, and Trinity College London certified educator, she has mentored thousands of students and professionals to express with confidence, clarity, and conviction.
                      </p>

                      {/* Credential Tags */}
                      <div className="pt-1 flex flex-wrap gap-2 justify-center sm:justify-start">
                        <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-stone-900/90 text-stone-200 border border-stone-700/80 shadow-inner">
                          20+ Years Mentorship
                        </span>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40 shadow-inner">
                          Conceiver of ARISTRI™
                        </span>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-stone-900/90 text-stone-200 border border-stone-700/80 shadow-inner">
                          Trinity Certified Educator
                        </span>
                        <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-stone-900/90 text-stone-200 border border-stone-700/80 shadow-inner">
                          Executive Moderator
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cinematic Stage Pull-Quote */}
                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-stone-900/80 border border-[#3dabab]/30 text-xs sm:text-sm text-teal-100 italic leading-relaxed relative shadow-lg">
                    <Quote className="w-5 h-5 text-[#3dabab] absolute top-3 right-3 opacity-60" />
                    &ldquo;Her vision for SpeakSmart goes beyond public speaking — it&apos;s about empowering individuals to communicate with empathy, authenticity, and purpose.&rdquo;
                  </blockquote>
                </div>

                {/* Founder Card Footer & Interactive Action */}
                <div className="mt-8 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs relative z-10">
                  <div className="text-stone-400 font-medium">
                    Author of Copyrighted <strong className="text-white">ARISTRI™ Examination System</strong>
                  </div>
                  <button
                    onClick={() => { setSelectedLeaderModal('sreela'); setModalPhotoIdx(0); }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] transition-all shadow-[0_0_15px_rgba(61,171,171,0.4)] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>View Keynote Profile (Pop-up)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 2. EXECUTIVE PARTNER CARD: Vishakha Agarwal (Takes ~33% Compact Space) */}
              <div className="lg:col-span-5 xl:col-span-4 group rounded-3xl bg-gradient-to-br from-stone-900/95 via-stone-950 to-stone-900/90 border border-stone-800 hover:border-[#3dabab]/50 p-6 sm:p-7 shadow-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-stone-800/40 rounded-bl-full pointer-events-none" />
                
                <div className="space-y-5 relative z-10">
                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-800 text-stone-200 border border-stone-700 shadow-sm">
                      Partner &amp; Co-Founder
                    </span>
                    <span className="text-[11px] font-bold text-teal-300 bg-stone-900/90 px-2.5 py-0.5 rounded-full border border-stone-700">
                      EDHEC France
                    </span>
                  </div>

                  {/* Cutout Portrait with Stage Lighting */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center gap-4 text-center lg:text-center sm:text-left">
                    <div className="relative group/vphoto cursor-pointer shrink-0" onClick={() => { setSelectedLeaderModal('vishakha'); setModalPhotoIdx(0); }}>
                      <div className="absolute -inset-1.5 bg-gradient-to-t from-teal-500/30 to-transparent rounded-2xl blur-xs opacity-75 group-hover/vphoto:opacity-100" />
                      <div className="relative w-32 h-40 sm:w-36 sm:h-46 rounded-xl overflow-hidden border-2 border-stone-700 group-hover/vphoto:border-[#3dabab] shadow-xl bg-stone-950 ring-2 ring-stone-800 transform group-hover/vphoto:-translate-y-1.5 transition-all duration-500">
                        <img
                          src="/assets/aistudio/Vishakha_1_eafab282.jpeg"
                          alt="Vishakha Agarwal, Partner, SpeakSmart Centre for Communication"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/vphoto:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1.5 left-1.5 right-1.5 text-center text-[9px] font-extrabold text-white uppercase tracking-wider bg-stone-900/80 backdrop-blur-xs py-0.5 rounded border border-stone-700">
                          Partner · Co-Founder
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-2xl font-extrabold text-white font-display">
                        Vishakha Agarwal
                      </h4>
                      <p className="text-xs font-bold text-[#4fd1d1] uppercase tracking-wide">
                        Partner, SpeakSmart Centre for Communication
                      </p>
                    </div>
                  </div>

                  {/* Biography */}
                  <p className="text-xs text-stone-300 leading-relaxed">
                    An educator, strategist, and creative force, Vishakha brings a global perspective to SpeakSmart’s mission. A graduate of EDHEC Business School, France, she began her career as an asset manager in Paris before returning to India to pursue her true calling — transforming communication education. At SpeakSmart, she leads innovation and brand development, ensuring every learner discovers the power of thoughtful, effective expression.
                  </p>

                  {/* Focus Badges */}
                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start lg:justify-center">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700">
                      EDHEC Paris Alum
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-stone-800 text-teal-300 border border-stone-700">
                      Brand &amp; Innovation
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700">
                      Strategy
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 text-xs text-stone-300 italic leading-relaxed relative">
                    <Quote className="w-3.5 h-3.5 text-stone-500 absolute top-2 right-2" />
                    &ldquo;She loves teaching and watching her students grow — not just as speakers, but as individuals who learn to think deeply and communicate meaningfully.&rdquo;
                  </blockquote>
                </div>

                {/* Partner Card Footer */}
                <div className="mt-6 pt-3.5 border-t border-stone-800 text-xs flex items-center justify-between text-stone-400 relative z-10">
                  <span className="font-medium">Global Strategy &amp; Innovation</span>
                  <button
                    onClick={() => { setSelectedLeaderModal('vishakha'); setModalPhotoIdx(0); }}
                    className="font-bold text-[#4fd1d1] hover:text-white flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>View Profile</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Live Studio Sessions & Workshop Gallery (Real Authentic Photos) */}
            <div className="mt-12 pt-8 border-t border-stone-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#3dabab]" />
                    <span>Live Mentorship in Action</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    Inside the SpeakSmart Classroom &amp; Debate Arena
                  </h4>
                </div>
                <p className="text-xs text-stone-400 max-w-sm">
                  Real students, certificates, and podium breakthroughs captured live at the Kolkata Centre.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Moment 1 */}
                <div 
                  className="group/m rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#3dabab]/60 transition-all cursor-pointer flex flex-col"
                  onClick={() => setPreviewMomentsPhoto({
                    src: '/assets/aistudio/Students_3_ff311d71.jpeg',
                    title: 'Live Certificate Conferment',
                    subtitle: 'Founder Sreela Mitra & Partner Vishakha Agarwal awarding the SpeakSmart Debate Workshop Certificate of Participation to star student Manis Dave.'
                  })}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                    <img
                      src="/assets/aistudio/Students_3_ff311d71.jpeg"
                      alt="Sreela Mitra and Vishakha Agarwal awarding debate workshop certificate to student"
                      className="w-full h-full object-cover group-hover/m:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#3dabab] text-white">
                      Certificate Award
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/80 group-hover/m:text-white p-1 rounded-lg bg-black/60">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <h5 className="text-xs font-bold text-white group-hover/m:text-[#4fd1d1] transition-colors leading-snug">
                      Debate Certificate Ceremony
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      Sreela Mitra &amp; Vishakha Agarwal presenting debate honors to star debater Manis Dave.
                    </p>
                  </div>
                </div>

                {/* Moment 2 */}
                <div 
                  className="group/m rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#3dabab]/60 transition-all cursor-pointer flex flex-col"
                  onClick={() => setPreviewMomentsPhoto({
                    src: '/assets/aistudio/Students_2_843b39b5.jpeg',
                    title: 'Debate Workshop Certificate Cohort',
                    subtitle: 'Students proudly displaying their official SpeakSmart Debate Workshop participation certificates.'
                  })}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                    <img
                      src="/assets/aistudio/Students_2_843b39b5.jpeg"
                      alt="Debate workshop students holding certificates with founders"
                      className="w-full h-full object-cover group-hover/m:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-teal-600 text-white">
                      Debate Cohort
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/80 group-hover/m:text-white p-1 rounded-lg bg-black/60">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <h5 className="text-xs font-bold text-white group-hover/m:text-[#4fd1d1] transition-colors leading-snug">
                      Debate Workshop Cohort
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      Learners mastering structured rebuttal, cross-questioning, and poise.
                    </p>
                  </div>
                </div>

                {/* Moment 3 */}
                <div 
                  className="group/m rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#3dabab]/60 transition-all cursor-pointer flex flex-col"
                  onClick={() => setPreviewMomentsPhoto({
                    src: '/assets/aistudio/Sreela_and_Vishakha_14084757.jpeg',
                    title: 'SpeakSmart Academy "In the Spotlight"',
                    subtitle: 'Founders Sreela Mitra & Vishakha Agarwal inaugurating institutional youth communication showcases.'
                  })}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                    <img
                      src="/assets/aistudio/Sreela_and_Vishakha_14084757.jpeg"
                      alt="Founders Sreela Mitra and Vishakha Agarwal at SpeakSmart Academy In the Spotlight"
                      className="w-full h-full object-cover group-hover/m:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600 text-white">
                      Spotlight Gala
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/80 group-hover/m:text-white p-1 rounded-lg bg-black/60">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <h5 className="text-xs font-bold text-white group-hover/m:text-[#4fd1d1] transition-colors leading-snug">
                      Founders at &quot;In the Spotlight&quot;
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      Sreela Mitra &amp; Vishakha Agarwal leading the Think.Speak.Lead mission.
                    </p>
                  </div>
                </div>

                {/* Moment 4 */}
                <div 
                  className="group/m rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#3dabab]/60 transition-all cursor-pointer flex flex-col"
                  onClick={() => setPreviewMomentsPhoto({
                    src: '/assets/aistudio/Students_1_7f69b5c8.jpeg',
                    title: 'Junior Communication Workshop',
                    subtitle: 'Young communicators holding certificates after completing intensive podium training.'
                  })}
                >
                  <div className="relative aspect-4/3 overflow-hidden bg-stone-950">
                    <img
                      src="/assets/aistudio/Students_1_7f69b5c8.jpeg"
                      alt="Junior students with certificates at SpeakSmart Centre"
                      className="w-full h-full object-cover group-hover/m:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#3dabab] text-white">
                      Junior Communicators
                    </span>
                    <span className="absolute bottom-2 right-2 text-white/80 group-hover/m:text-white p-1 rounded-lg bg-black/60">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <h5 className="text-xs font-bold text-white group-hover/m:text-[#4fd1d1] transition-colors leading-snug">
                      Junior Communication Honorees
                    </h5>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2">
                      Empowering children to articulate their thoughts without hesitation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE LEADERSHIP DETAIL POP-UP MODAL (VINH GIANG STYLE) */}
        {/* ======================================================== */}
        {selectedLeaderModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn cursor-pointer"
            onClick={() => setSelectedLeaderModal(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-gradient-to-b from-[#0a1518] to-[#070e10] border border-[#3dabab]/60 rounded-3xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden max-h-[90vh] overflow-y-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background ambient stage glow */}
              <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#3dabab]/20 rounded-full blur-3xl pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeaderModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700 transition-colors cursor-pointer z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedLeaderModal === 'sreela' ? (
                <div className="space-y-6 relative z-10">
                  {(() => {
                    const activePhoto = SREELA_STAGE_GALLERY[modalPhotoIdx] || SREELA_STAGE_GALLERY[0];
                    return (
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Cutout Portrait & Gallery Switcher */}
                        <div className="shrink-0 flex flex-col items-center sm:items-start">
                          <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#3dabab] shadow-2xl bg-stone-950 ring-4 ring-[#3dabab]/30">
                            <img
                              src={activePhoto.src}
                              alt={activePhoto.title}
                              className="w-full h-full object-cover object-top transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-extrabold text-white uppercase tracking-wider bg-[#3dabab] py-1 rounded">
                              {activePhoto.badge}
                            </span>
                          </div>

                          {/* Thumbnail Selectors */}
                          <div className="flex items-center gap-1.5 mt-3 max-w-[208px]">
                            {SREELA_STAGE_GALLERY.map((item, idx) => (
                              <button
                                key={item.title}
                                onClick={() => setModalPhotoIdx(idx)}
                                className={`relative w-11 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                                  modalPhotoIdx === idx
                                    ? 'border-[#3dabab] ring-2 ring-[#3dabab]/50 scale-105'
                                    : 'border-stone-700 opacity-60 hover:opacity-100'
                                }`}
                                title={item.title}
                              >
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>
                          <p className="text-[10px] text-teal-300 mt-1.5 max-w-[208px] text-center sm:text-left leading-tight">
                            {activePhoto.caption}
                          </p>
                        </div>

                        <div className="space-y-3 text-center sm:text-left flex-1">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40">
                            <Award className="w-3.5 h-3.5 text-[#3dabab]" />
                            <span>Trinity College London Certified Educator</span>
                          </div>
                          
                          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                            Sreela Mitra
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-[#4fd1d1] uppercase tracking-wide">
                            Founder and Director, SpeakSmart Centre for Communication
                          </p>

                          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                            A pioneer in communication education, Sreela Mitra has spent over two decades shaping the way India learns to think, speak, and lead. As a communication coach, moderator, and Trinity College London certified educator, she has mentored thousands of students and professionals to express with confidence, clarity, and conviction.
                          </p>

                          <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700">
                              20+ Years Mentorship
                            </span>
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#3dabab]/20 text-[#4fd1d1] border border-[#3dabab]/40">
                              Author of ARISTRI™
                            </span>
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700">
                              Master Pedagogist
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-[#3dabab]/40 text-xs sm:text-sm text-teal-100 italic leading-relaxed relative">
                    <Quote className="w-5 h-5 text-[#3dabab] absolute top-3 right-3 opacity-60" />
                    &ldquo;Her vision for SpeakSmart goes beyond public speaking — it&apos;s about empowering individuals to communicate with empathy, authenticity, and purpose.&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-800">
                    <span className="text-xs text-stone-400">
                      Conceived the 4 C&apos;s (Confidence, Competence, Clarity, Connectivity) &amp; ARISTRI™
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedLeaderModal(null);
                          document.getElementById('broadcast-player')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Watch Video Address</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 relative z-10">
                  {(() => {
                    const activeVPhoto = VISHAKHA_STAGE_GALLERY[modalPhotoIdx] || VISHAKHA_STAGE_GALLERY[0];
                    return (
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        {/* Cutout Portrait & Gallery Switcher */}
                        <div className="shrink-0 flex flex-col items-center sm:items-start">
                          <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl overflow-hidden border-2 border-stone-600 shadow-2xl bg-stone-950 ring-4 ring-stone-800">
                            <img
                              src={activeVPhoto.src}
                              alt={activeVPhoto.title}
                              className="w-full h-full object-cover object-top transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                            <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-extrabold text-white uppercase tracking-wider bg-stone-800 py-1 rounded">
                              {activeVPhoto.badge}
                            </span>
                          </div>

                          {/* Thumbnail Selectors */}
                          <div className="flex items-center gap-1.5 mt-3 max-w-[208px]">
                            {VISHAKHA_STAGE_GALLERY.map((item, idx) => (
                              <button
                                key={item.title}
                                onClick={() => setModalPhotoIdx(idx)}
                                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                                  modalPhotoIdx === idx
                                    ? 'border-[#3dabab] ring-2 ring-[#3dabab]/50 scale-105'
                                    : 'border-stone-700 opacity-60 hover:opacity-100'
                                }`}
                                title={item.title}
                              >
                                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>
                          <p className="text-[10px] text-stone-300 mt-1.5 max-w-[208px] text-center sm:text-left leading-tight">
                            {activeVPhoto.caption}
                          </p>
                        </div>

                        <div className="space-y-3 text-center sm:text-left flex-1">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-800 text-teal-300 border border-stone-700">
                            <span>EDHEC Business School, France</span>
                          </div>
                          
                          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                            Vishakha Agarwal
                          </h3>
                          <p className="text-xs sm:text-sm font-bold text-[#4fd1d1] uppercase tracking-wide">
                            Partner, SpeakSmart Centre for Communication
                          </p>

                          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                            An educator, strategist, and creative force, Vishakha brings a global perspective to SpeakSmart’s mission. A graduate of EDHEC Business School, France, she began her career as an asset manager in Paris before returning to India to pursue her true calling — transforming communication education. At SpeakSmart, she leads innovation and brand development, ensuring every learner discovers the power of thoughtful, effective expression.
                          </p>

                          <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700">
                              EDHEC Paris Alum
                            </span>
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-stone-900 text-teal-300 border border-stone-700">
                              Brand &amp; Innovation
                            </span>
                            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700">
                              Strategic Expansion
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-stone-900/90 border border-stone-800 text-xs sm:text-sm text-stone-300 italic leading-relaxed relative">
                    <Quote className="w-5 h-5 text-stone-500 absolute top-2 right-2" />
                    &ldquo;She loves teaching and watching her students grow — not just as speakers, but as individuals who learn to think deeply and communicate meaningfully.&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-800">
                    <span className="text-xs text-stone-400">
                      Directing Institutional Growth &amp; Real-World Student Showcases
                    </span>
                    <a
                      href="https://forms.gle/amSFYJ7xTY1oi97u8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>Register for New Semester</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Live Studio Moments Lightbox Modal */}
        {previewMomentsPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn cursor-pointer"
            onClick={() => setPreviewMomentsPhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6 text-white cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewMomentsPhoto(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-stone-950/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="rounded-2xl overflow-hidden bg-black max-h-[72vh] flex items-center justify-center">
                <img
                  src={previewMomentsPhoto.src}
                  alt={previewMomentsPhoto.title}
                  className="max-h-[72vh] w-auto object-contain mx-auto"
                />
              </div>
              <div className="pt-4 px-2 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-display">{previewMomentsPhoto.title}</h4>
                  <span className="text-[11px] font-mono font-bold text-[#4fd1d1] bg-[#3dabab]/20 px-2.5 py-0.5 rounded-full border border-[#3dabab]/40">
                    SpeakSmart Kolkata Centre
                  </span>
                </div>
                <p className="text-xs text-stone-300">{previewMomentsPhoto.subtitle}</p>
              </div>
            </div>
          </div>
        )}

        {/* FEATURED FOUNDER VIDEO BROADCAST PLAYER (YOUTUBE READY) */}
        <div className="mb-16 rounded-2xl bg-stone-950 text-white border border-stone-800 shadow-2xl overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-stone-800 bg-stone-900/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#3dabab]/20 text-[#3dabab] border border-[#3dabab]/30 flex items-center justify-center">
                <VideoIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-display">
                  Founder&apos;s Address: Mrs. Sreela Mitra
                </h3>
                <p className="text-xs text-stone-400">
                  Conversation on Communication as an Essential Life Skill
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSettingUrl(!isSettingUrl)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Update YouTube link"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#3dabab]" />
                <span>{currentYoutubeId ? 'Change YouTube Link' : 'Add YouTube Video Link'}</span>
              </button>
            </div>
          </div>

          {/* Optional inline input for pasting YouTube URL */}
          {isSettingUrl && (
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                placeholder="Paste YouTube Link (e.g. https://www.youtube.com/watch?v=... or https://youtu.be/...)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="flex-1 w-full px-3 py-2 bg-stone-950 border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-[#3dabab]"
              />
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => handleSaveYoutubeUrl()}
                  className="px-4 py-2 bg-[#3dabab] hover:bg-[#329696] text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  Save &amp; Embed
                </button>
                <button
                  onClick={() => setIsSettingUrl(false)}
                  className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-400 text-xs rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Video Container (YouTube Embed or Setup Placeholder) */}
          <div className="relative aspect-video w-full bg-stone-950 flex items-center justify-center">
            {currentYoutubeId ? (
              <iframe
                key={`${currentYoutubeId}-${startSeconds}`}
                src={`https://www.youtube-nocookie.com/embed/${currentYoutubeId}?start=${startSeconds}&autoplay=${isAutoPlay ? 1 : 0}&rel=0`}
                title="Founder Mrs. Sreela Mitra Address"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 overflow-hidden">
                <div className="relative z-10 max-w-lg space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-[#3dabab]/20 text-[#3dabab] border border-[#3dabab]/30 flex items-center justify-center shadow-lg">
                    <VideoIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white font-display">
                      Founder&apos;s Video Address Player
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      Ready to play: Add your YouTube video link anytime to make it playable directly on this website.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setIsSettingUrl(true)}
                      className="px-5 py-2.5 bg-[#3dabab] hover:bg-[#329696] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>Add YouTube Video Link</span>
                    </button>
                    <a
                      href={transcriptPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white text-xs sm:text-sm font-semibold rounded-xl border border-stone-700 transition-colors flex items-center gap-2"
                    >
                      <FileText className="w-4 h-4 text-[#3dabab]" />
                      <span>Read Original Transcript (PDF)</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Chapter Quick-Jump Buttons */}
          <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                Video Chapters &amp; Timestamps:
              </p>
              <a
                href={transcriptPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#3dabab] hover:underline flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Transcript (PDF)</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {VIDEO_CHAPTERS.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const tab =
                      idx === 0
                        ? 'philosophy'
                        : idx === 1
                        ? 'fourCs'
                        : idx === 2
                        ? 'formats'
                        : 'classroom';
                    jumpToChapter(ch.timestamp, tab, idx);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                    activeChapterIndex === idx
                      ? 'bg-[#3dabab]/20 border-[#3dabab] text-white shadow-sm'
                      : 'bg-stone-800/50 border-stone-800 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                  }`}
                >
                  <span className="px-1.5 py-0.5 rounded bg-black/40 text-[10px] font-mono font-bold text-[#3dabab] shrink-0 mt-0.5">
                    {ch.timeLabel}
                  </span>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold truncate text-white">{ch.title}</p>
                    <p className="text-[11px] text-stone-400 truncate mt-0.5">{ch.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Quote from Founder Sreela Mitra */}
        <div className="mb-16 bg-gradient-to-br from-[#f2f9f9] to-stone-50 rounded-2xl p-6 sm:p-10 border border-[#3dabab]/30 relative overflow-hidden shadow-sm">
          <div className="absolute -right-6 -bottom-6 text-[#3dabab]/10 pointer-events-none">
            <Quote className="w-48 h-48" />
          </div>

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3dabab]">
              <Sparkles className="w-4 h-4 text-[#3dabab]" />
              <span>Key Insight from the Video — Mrs. Sreela Mitra</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-stone-900 font-display leading-snug">
              &ldquo;We don&apos;t teach only public speaking and debating. They are very important ingredients of communication. At SpeakSmart, we try to teach communication more as a <span className="text-[#3dabab] underline decoration-[#3dabab]/40 underline-offset-4">life skill</span>.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans pt-2">
              &ldquo;When a child comes to SpeakSmart and a few years later you meet them, they should be able to handle not only a debate or a stage speech — they should be able to navigate a business negotiation, ace an interview, persuade their mother for time with friends, or tell a story in a way that people stop and genuinely listen. Effective communication helps you not only focus on your goals, but ultimately optimize life no matter what qualifications you hold.&rdquo;
            </p>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-stone-200/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1f5e5e] text-white flex items-center justify-center font-bold font-display text-base shadow-sm">
                  SM
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Mrs. Sreela Mitra</h4>
                  <p className="text-xs text-stone-500 font-medium">Founder &amp; Director, SpeakSmart Centre for Communication</p>
                </div>
              </div>

              <button
                onClick={() => jumpToChapter(0)}
                className="text-xs font-bold text-[#1f5e5e] hover:text-[#3dabab] hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Video from Beginning</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section Navigation Tabs Linked to Key Concepts */}
        <div className="flex flex-wrap border-b border-stone-200 mb-12 gap-2">
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'philosophy'
                ? 'border-[#3dabab] text-[#1f5e5e]'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>1. Objective-Focused Life Skill</span>
          </button>

          <button
            onClick={() => setActiveTab('fourCs')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'fourCs'
                ? 'border-[#3dabab] text-[#1f5e5e]'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <HeartHandshake className="w-4 h-4" />
            <span>2. The 4 C&apos;s &amp; Connectivity</span>
          </button>

          <button
            onClick={() => setActiveTab('formats')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'formats'
                ? 'border-[#3dabab] text-[#1f5e5e]'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>3. Every Format of Communication</span>
          </button>

          <button
            onClick={() => setActiveTab('classroom')}
            className={`pb-3 px-4 text-sm font-bold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
              activeTab === 'classroom'
                ? 'border-[#3dabab] text-[#1f5e5e]'
                : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>4. Classroom Pedagogy &amp; No Homework</span>
          </button>
        </div>

        {/* TAB 1: CORE PHILOSOPHY & LIFE SKILL */}
        {activeTab === 'philosophy' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3dabab] bg-[#f2f9f9] px-3 py-1 rounded-full border border-[#3dabab]/20">
                  Beyond The Traditional Podium
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display leading-tight">
                  Why Public Speaking Alone is Not Enough
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Traditional institutes treat public speaking as a theatrical performance — memorizing a script, standing behind a wooden rostrum, and projecting for applause. But Sreela Mitra explains that real life demands something far more versatile:
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3dabab]" />
                      Communication Across Diverse Formats
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Whether facing a television reporter who gives you 15 seconds, a boardroom negotiation, an activist campaign, or an everyday family discussion — our students learn how to read the context and calibrate their delivery instantly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3dabab]" />
                      Goal-Focused Outcomes
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      It is not about proving you are right; it is about achieving your desired objective while preserving human trust and mutual respect.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3dabab]" />
                      Lifelong Career &amp; Personal Optimization
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      Two doctors or two business executives can have the exact same academic pedigree. Ten years later, their trajectories diverge entirely based on how they converse with patients, inspire employees, and communicate with stakeholders.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <button
                    onClick={onOpenRegister}
                    className="px-6 py-3 text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-md shadow-sm transition-all cursor-pointer"
                  >
                    Enroll in SpeakSmart Cohort
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('fourCs');
                      jumpToChapter(66);
                    }}
                    className="px-5 py-3 text-sm font-bold text-[#1f5e5e] hover:text-[#3dabab] border border-stone-300 rounded-md transition-colors cursor-pointer bg-white flex items-center gap-1.5"
                  >
                    <span>Play Chapter 2: The 4 C&apos;s</span>
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                </div>
              </div>

              {/* Real World Case Illustration: The Doctor & Business Case */}
              <div className="lg:col-span-5 bg-gradient-to-br from-stone-900 to-stone-950 text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3dabab]">Case Study from Video</span>
                  <button
                    onClick={() => jumpToChapter(296)}
                    className="text-[11px] text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch at 04:56</span>
                  </button>
                </div>

                <h4 className="text-xl font-bold font-display text-white">
                  The Tale of Two Professionals
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed">
                  &ldquo;Take two doctors or two businessmen, equally qualified and owning equally big enterprises. These two individuals may possess identical technical skill sets. But if one is unable to communicate with empathy to patients, manage hospital leadership, or articulate a shared vision to their staff — where will their careers stand in 10 years?&rdquo;
                </p>

                <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60 space-y-2">
                  <div className="text-xs font-bold text-[#3dabab] uppercase tracking-wider">
                    The SpeakSmart Takeaway
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    Technical knowledge gets your foot in the door; <strong>objective-focused communication</strong> decides how far you travel in life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: THE 4 C's & WHY CONNECTIVITY MATTERS MOST */}
        {activeTab === 'fourCs' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3dabab] bg-[#f2f9f9] px-3 py-1 rounded-full border border-[#3dabab]/20">
                Foundational Architecture · Discussed at 01:06
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
                The 4 C&apos;s of Communication — And Why Connectivity is Crown
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                In communication theory, experts cite the Four C&apos;s: <strong>Confidence</strong>, <strong>Clarity</strong>, <strong>Content</strong>, and <strong>Connectivity</strong>. When asked which is the most critical, most say &quot;all of them.&quot; But at SpeakSmart, Founder Sreela Mitra explains that <strong>Connectivity</strong> is paramount:
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-base font-display">
                  1
                </div>
                <h4 className="text-base font-bold text-stone-900">Confidence</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Stepping up without fear, projecting your voice, and holding your ground when entering any room.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-base font-display">
                  2
                </div>
                <h4 className="text-base font-bold text-stone-900">Clarity</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Structuring thoughts cleanly so the listener grasps your meaning without confusion or ambiguity.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-base font-display">
                  3
                </div>
                <h4 className="text-base font-bold text-stone-900">Content</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Having substantive logic, real examples, research, and purposeful talking points ready to share.
                </p>
              </div>

              {/* 4th C Highlight: CONNECTIVITY */}
              <div className="p-6 rounded-2xl bg-[#f2f9f9] border-2 border-[#3dabab] space-y-3 shadow-md relative">
                <div className="absolute -top-3 right-4 bg-[#3dabab] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  The Core Differentiator
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#3dabab] text-white flex items-center justify-center font-bold text-base font-display">
                  4
                </div>
                <h4 className="text-base font-bold text-[#1f5e5e]">Connectivity</h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Sensing the listener&apos;s emotional state, understanding their bandwidth, and focusing on the human connection to fulfill your real end objective.
                </p>
              </div>
            </div>

            {/* Sreela Mitra's Two Practical Examples from the Video */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] uppercase tracking-wider">
                    <span>Example 1</span>
                    <span>·</span>
                    <span>The Parent-Child Conversation</span>
                  </div>
                  <button
                    onClick={() => jumpToChapter(112)}
                    className="text-xs font-bold text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch at 01:52</span>
                  </button>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  When Confidence &amp; Clarity Fail Without Connectivity
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  &ldquo;Your daughter comes home from school. You are confident. You are clear. Your content is in place because you know exactly what tasks you require her to do. But if you have not factored in that she had a terrible day, messed up a test, or didn&apos;t get picked for a school team — and you try to instruct her with great clarity at that exact moment — she won&apos;t listen. Connectivity means recognizing the human on the other side before speaking.&rdquo;
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-300 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] uppercase tracking-wider">
                    <span>Example 2</span>
                    <span>·</span>
                    <span>The Undermarked Test</span>
                  </div>
                  <button
                    onClick={() => jumpToChapter(230)}
                    className="text-xs font-bold text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Watch at 03:50</span>
                  </button>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Objective-Focused vs. Ego-Driven Speech
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  &ldquo;A student gets 4 out of 10 while classmates get 8 or 10 for similar work. You could barge up to the teacher and say: &apos;Look, this is not correct, you marked me wrongly.&apos; But is your ultimate objective to prove she is wrong, or to actually have your marks re-evaluated? If your goal is the marks, you observe her mood first, approach with respect, ask her to guide you through your answers, and achieve the true result.&rdquo;
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EVERY FORMAT OF COMMUNICATION */}
        {activeTab === 'formats' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3dabab] bg-[#f2f9f9] px-3 py-1 rounded-full border border-[#3dabab]/20">
                Complete Spectrum Training · Discussed at 05:58
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
                Preparing for Every Real-World Format
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                At SpeakSmart, we don&apos;t practice only one rigid style. Each format has its own distinct end objective, psychological rulebook, and audience dynamic:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">Formal Debating</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Persuade the audience with rigorous logic, construct substantive arguments, and respectfully rebut opponent fallacies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <Tv className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">TV &amp; Media Soundbites</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Speak in short, crisp, attractive soundbites. People on TV have short bandwidth — if you ramble, viewers switch the channel.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">Panel Discussions</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Radiate authenticity. Weave grounded life experiences, listen actively to co-panelists, and enrich the conversation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">Engaging Storytelling</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Build narrative tension and graphic imagery so that every listener leans in, hangs on your words, and stays excited.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">Interpersonal Conversation</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Give the other person the genuine feeling: &quot;I understand your point of view, even if I don&apos;t entirely agree with you.&quot;
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 hover:border-[#3dabab] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-stone-900 font-display">Negotiations &amp; Interviews</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  <strong>End Objective:</strong> Articulate your worth, persuade decision-makers, and negotiate terms with emotional maturity and clarity.
                </p>
              </div>
            </div>

            {/* Sreela Mitra's Definition of Vocabulary */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f2f9f9] border border-[#3dabab]/40 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-stone-900 font-display flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#3dabab]" />
                  <span>What &quot;Vocabulary&quot; Truly Means at SpeakSmart</span>
                </h4>
                <button
                  onClick={() => jumpToChapter(395)}
                  className="text-xs font-bold text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Hear at 06:35</span>
                </button>
              </div>
              <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                &ldquo;Vocabulary for us means something completely different from how it is commonly understood. Vocabulary doesn&apos;t mean just memorizing very big, pretentious words that people don&apos;t understand. Vocabulary simply means to speak in a way that your communication is effective — having a keen sense of your audience, speaking to their understanding, modifying your speech, being graphic, and grabbing attention.&rdquo;
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: CLASSROOM REALITY, 10:1 RATIO & NO HOMEWORK */}
        {activeTab === 'classroom' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3dabab] bg-[#f2f9f9] px-3 py-1 rounded-full border border-[#3dabab]/20">
                Action-Oriented Pedagogy · Discussed at 07:19
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
                How SpeakSmart Classes Actually Work
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                In the video, Sreela Mitra answers the two most common questions parents ask: <em>&quot;What is your student-teacher ratio?&quot;</em> and <em>&quot;Do you give homework?&quot;</em>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: 10:1 Ratio & The Football Analogy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#3dabab] text-white flex items-center justify-center font-bold text-lg font-display">
                      10:1
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-stone-900 font-display">
                        10 Students to 1 Teacher Ratio
                      </h4>
                      <p className="text-xs text-[#1f5e5e] font-semibold">Often with multiple instructors in the room</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Our class strength is kept around 10 students per teacher. Our primary objective is to make sure that <strong>every single class, every student is given the opportunity to speak</strong>.
                  </p>

                  {/* Sreela Mitra's Football Metaphor */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-stone-900 font-display">
                        <span>⚽ The Football Metaphor</span>
                      </div>
                      <button
                        onClick={() => jumpToChapter(474)}
                        className="text-xs font-bold text-[#3dabab] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch at 07:54</span>
                      </button>
                    </div>
                    <p className="text-xs text-stone-700 italic leading-relaxed">
                      &ldquo;Imagine if I was trying to teach you football. I took a ball, showed it to you, did 10 demonstrations, and explained the entire rulebook. Would you actually learn football till you kicked the ball yourself? Similarly, even if we encapsulated all the rules, no student is going to learn until they participate in the process.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] uppercase tracking-wider">
                    <VideoIcon className="w-4 h-4 text-[#3dabab]" />
                    <span>Weekly Video Sent to Parents</span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    Full Parental Visibility After Every Class
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    After every single class, SpeakSmart records and shares a video of the student&apos;s presentation on the class WhatsApp group. Parents have complete context into how their child is participating, growing, and mastering stage skills week over week.
                  </p>
                </div>
              </div>

              {/* Right Column: No Homework & Creativity in Action */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#1f5e5e] text-white flex items-center justify-center font-bold text-sm font-display uppercase tracking-wider">
                      Zero
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-stone-900 font-display">
                        We Don&apos;t Believe in Giving Homework
                      </h4>
                      <p className="text-xs text-[#1f5e5e] font-semibold">Every class is a complete live performance workshop</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    &ldquo;Creativity isn&apos;t born out of a vacuum. Every single class is like a live performance around a chosen topic. Students receive their structure, brainstorm, finish their speech or skit, and present right there in class.&rdquo;
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                      <strong className="block text-stone-900 mb-1">Debate &amp; Skits</strong>
                      <span className="text-stone-600 text-[11px]">Creating activist campaigns &amp; advertisements.</span>
                    </div>
                    <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                      <strong className="block text-stone-900 mb-1">Peer Feedback</strong>
                      <span className="text-stone-600 text-[11px]">Students assess and critique each other respectfully.</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#3dabab]" />
                    <span>Team Dynamics &amp; Diverse Peer Groups</span>
                  </div>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    Cross-School Leadership Training
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    &ldquo;Sometimes they speak as individuals; often they speak as teams. Students from different classes, schools, and skill sets learn to manage each other, look out for teammates, and present collectively to beat other cohorts.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Experience the SpeakSmart Method Live
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Spring 2027 Admissions are now open across all student age groups (Grades 1 through 12). Capped at 10 students per batch.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://forms.gle/amSFYJ7xTY1oi97u8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-md transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Register for New Semester</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onNavigateAristri}
              className="px-5 py-3 text-xs sm:text-sm font-bold text-stone-200 hover:text-white border border-stone-700 hover:border-stone-500 rounded-md transition-colors cursor-pointer bg-stone-800"
            >
              What is ARISTRI™?
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
