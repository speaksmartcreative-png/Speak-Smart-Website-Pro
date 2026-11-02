import React, { useState } from 'react';
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
  BookOpen,
  MessageSquare
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
    <section id="what-is-speaksmart" className="py-16 md:py-24 bg-white text-black border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Brand Credentials */}
        <div className="mb-10 pb-8 border-b border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
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
        {/* FOUNDING LEADERSHIP SHOWCASE (FOUNDER & CO-FOUNDER) */}
        {/* ======================================================== */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f5e5e] mb-1">
                <Sparkles className="w-4 h-4 text-[#3dabab]" />
                <span>Founding Leadership &amp; Direction</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
                Meet the Founders of <span className="font-script text-3xl sm:text-4xl text-[#3dabab]">SpeakSmart</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                The visionary leadership pioneering communication as an essential, transformative life skill for youth and emerging leaders.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f2f9f9] border border-[#3dabab]/30 text-[#1f5e5e] text-xs font-bold">
              <span>Kolkata Centre</span>
              <span className="text-stone-300">·</span>
              <span className="font-mono text-stone-600">LLPIN: ACO-6485</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* 1. FOUNDER: Sreela Mitra (Green Dress) */}
            <div className="group rounded-3xl bg-gradient-to-br from-[#f2f9f9] via-white to-stone-50 border border-[#3dabab]/30 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3dabab]/10 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#3dabab] text-white shadow-sm">
                    ★ Founder
                  </span>
                  <span className="text-xs font-semibold text-[#1f5e5e]">
                    Trinity College London Certified
                  </span>
                </div>

                {/* Cutout Portrait Showcase */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl shrink-0 bg-stone-100 ring-2 ring-[#3dabab]/30">
                    <img
                      src="/assets/aistudio/founder_sreela_mitra.jpeg"
                      alt="Sreela Mitra, Founder and Director, SpeakSmart School of Communication"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-extrabold text-white uppercase tracking-wider bg-black/60 backdrop-blur-xs py-0.5 rounded">
                      Founder &amp; Director
                    </span>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-stone-950 font-display">
                      Sreela Mitra
                    </h4>
                    <p className="text-xs font-bold text-[#1f5e5e] uppercase tracking-wide">
                      Founder and Director, SpeakSmart School of Communication
                    </p>
                    <p className="text-xs text-stone-700 leading-relaxed pt-1">
                      A pioneer in communication education, Sreela Mitra has spent over two decades shaping the way India learns to think, speak, and lead. As a communication coach, moderator, and Trinity College London certified educator, she has mentored thousands of students and professionals to express with confidence, clarity, and conviction.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        20+ Years Mentorship
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        ARISTRI™ Author
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        Trinity Certified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Founder Vision & Quote */}
                <blockquote className="p-4 rounded-xl bg-white border border-[#3dabab]/20 text-xs text-stone-700 italic leading-relaxed relative">
                  <Quote className="w-4 h-4 text-[#3dabab]/40 absolute top-2 right-2" />
                  &ldquo;Her vision for SpeakSmart goes beyond public speaking — it&apos;s about empowering individuals to communicate with empathy, authenticity, and purpose.&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Conceived ARISTRI™ Framework</span>
                <span className="font-bold text-[#1f5e5e] flex items-center gap-1">
                  <span>Founder &amp; Director</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3dabab]" />
                </span>
              </div>
            </div>

            {/* 2. CO-FOUNDER / PARTNER: Vishakha Agarwal (Printed Dress) */}
            <div className="group rounded-3xl bg-gradient-to-br from-stone-50 via-white to-[#f2f9f9] border border-stone-300 p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200/40 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-900 text-white shadow-sm">
                    Co-Founder &amp; Partner
                  </span>
                  <span className="text-xs font-semibold text-stone-600">
                    EDHEC Business School, France
                  </span>
                </div>

                {/* Cutout Portrait Showcase */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-white shadow-xl shrink-0 bg-stone-100 ring-2 ring-stone-300">
                    <img
                      src="/assets/aistudio/co_founder_speaksmart.jpeg"
                      alt="Vishakha Agarwal, Partner, SpeakSmart School of Communication"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-extrabold text-white uppercase tracking-wider bg-black/60 backdrop-blur-xs py-0.5 rounded">
                      Co-Founder &amp; Partner
                    </span>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-stone-950 font-display">
                      Vishakha Agarwal
                    </h4>
                    <p className="text-xs font-bold text-[#1f5e5e] uppercase tracking-wide">
                      Partner, SpeakSmart School of Communication
                    </p>
                    <p className="text-xs text-stone-700 leading-relaxed pt-1">
                      An educator, strategist, and creative force, Vishakha brings a global perspective to SpeakSmart’s mission. A graduate of EDHEC Business School, France, she began her career as an asset manager in Paris before returning to India to pursue her true calling — transforming communication education. At SpeakSmart, she leads innovation and brand development, ensuring every learner discovers the power of thoughtful, effective expression.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        EDHEC Paris Alum
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        Brand &amp; Innovation
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-stone-700 border border-stone-200">
                        Strategy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Co-Founder Quote */}
                <blockquote className="p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 italic leading-relaxed relative">
                  <Quote className="w-4 h-4 text-stone-400 absolute top-2 right-2" />
                  &ldquo;She loves teaching and watching her students grow — not just as speakers, but as individuals who learn to think deeply and communicate meaningfully.&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Global Strategy &amp; Brand Innovation</span>
                <span className="font-bold text-stone-900 flex items-center gap-1">
                  <span>Co-Founder &amp; Partner</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3dabab]" />
                </span>
              </div>
            </div>

          </div>
        </div>

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
            <button
              onClick={onOpenRegister}
              className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-md transition-all shadow-md cursor-pointer"
            >
              Register for New Semester
            </button>
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
