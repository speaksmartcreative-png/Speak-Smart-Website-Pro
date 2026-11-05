import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ChevronRight,
  AlertCircle,
  Printer,
  ClipboardCheck,
  ExternalLink
} from 'lucide-react';
import { NOTICES } from '../data/mockData';
import { NoticeItem } from '../types';

interface NoticeBoardProps {
  selectedNoticeModal?: NoticeItem | null;
  onCloseNoticeModal?: () => void;
  onOpenRegister: () => void;
}

export const NoticeBoard: React.FC<NoticeBoardProps> = ({
  selectedNoticeModal,
  onCloseNoticeModal,
  onOpenRegister,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(selectedNoticeModal || null);
  const [copiedNoticeId, setCopiedNoticeId] = useState<string | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedNoticeModal) {
      setActiveNotice(selectedNoticeModal);
    }
  }, [selectedNoticeModal]);

  const categories = ['All', 'Exam', 'Holiday', 'Competition', 'Workshop', 'General'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesCat = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesSearch =
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handlePrintOrShare = (notice: NoticeItem) => {
    setCopiedNoticeId(notice.id);
    setTimeout(() => setCopiedNoticeId(null), 2000);
    if (activeNotice) {
      window.print();
    }
  };

  return (
    <section id="updates" className="relative py-16 md:py-24 bg-gradient-to-b from-[#edf5f8]/85 via-[#f6fbfc]/80 to-[#eaf3f7]/85 dark:from-[#051417]/90 dark:via-[#092025]/85 dark:to-[#061619]/90 text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-10 right-10 w-[32rem] h-[32rem] bg-gradient-to-bl from-sky-400/20 via-[#3dabab]/15 to-transparent dark:from-sky-500/15 dark:via-teal-800/10 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute bottom-10 left-10 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#3dabab]/20 via-teal-300/10 to-transparent dark:from-[#1f5e5e]/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-200/15 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Stage Pattern Texture */}
      <div className="absolute inset-0 bg-stage-pattern opacity-40 dark:opacity-60 pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1f5e5e] dark:text-[#4fd1d1] mb-2">
              <Bell className="w-4 h-4 text-[#3dabab]" />
              <span>Official Academic Bulletin & Announcements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white font-display">
              Updates & Notice Board
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
              Stay informed on upcoming semester jury examination dates, public holiday closures, tournament schedules, and ARISTRI™ live evaluation sessions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 dark:text-stone-400 font-bold font-mono">Academic Term 2026 – 2027</span>
          </div>
        </div>

        {/* If no notices are posted yet: Executive Academic Status Bulletin */}
        {NOTICES.length === 0 ? (
          <div className="bg-white/95 dark:bg-[#0c2024]/90 backdrop-blur-md rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-lg p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Top Teal Gradient Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#1f5e5e]" />

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#ebf7f7] dark:bg-[#133036] border border-[#3dabab]/30 text-[#1f5e5e] dark:text-[#4fd1d1] flex items-center justify-center mx-auto mb-6 shadow-xs">
              <ClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#3dabab]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Status: All Scheduled Batches Running on Regular Timetable</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white font-display tracking-tight mb-3">
              No Active Notices or Exam Schedules at Present
            </h3>

            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Official circulars regarding Trinity College London examination dates, holiday recesses, masterclasses, and ARISTRI™ live evaluation schedules will be published here upon formal announcement by SpeakSmart leadership.
            </p>

            {/* Operational Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left mb-8">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] dark:text-[#4fd1d1] mb-1.5">
                  <Calendar className="w-4 h-4 text-[#3dabab]" />
                  <span>Studio Sessions</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Regular weekday and weekend studio batches are proceeding strictly according to the published batch roster.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] dark:text-[#4fd1d1] mb-1.5">
                  <Clock className="w-4 h-4 text-[#3dabab]" />
                  <span>Class Group Updates</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Weekly progress reports, video homework, and make-up class slots are shared directly on your designated class WhatsApp group.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1f5e5e] dark:text-[#4fd1d1] mb-1.5">
                  <AlertCircle className="w-4 h-4 text-[#3dabab]" />
                  <span>Direct Inquiries</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  For enrollment inquiries or private administrative matters, parents may connect directly with our admissions office.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800">
              <a
                href="https://forms.gle/amSFYJ7xTY1oi97u8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Register for New Semester</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenRegister}
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#1f5e5e] dark:text-[#4fd1d1] bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition-all cursor-pointer"
              >
                Book Diagnostic Speech Evaluation
              </button>
              <a
                href="https://wa.me/919830064596"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800 border border-stone-300 dark:border-stone-700 transition-all cursor-pointer"
              >
                Contact Administration (+91 98300 64596)
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Search & Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-white/90 dark:bg-[#0c2024]/90 backdrop-blur-md border border-stone-200/90 dark:border-stone-800 shadow-md mb-8">
              {/* Category Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-[#3dabab] text-white shadow-xs'
                        : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700'
                    }`}
                  >
                    {cat === 'All' ? 'All Updates' : cat === 'Exam' ? 'Exam Dates' : cat === 'Holiday' ? 'Holidays & Breaks' : cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search exam, holiday, date..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-md focus:outline-[#3dabab] font-medium text-black dark:text-white"
                />
              </div>
            </div>

            {/* Notices Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => {
                const isExam = notice.category === 'Exam';

                return (
                  <div
                    key={notice.id}
                    className={`rounded-xl border p-6 flex flex-col justify-between transition-all shadow-md hover:shadow-xl backdrop-blur-md ${
                      isExam
                        ? 'bg-white/95 dark:bg-[#0c2024]/95 border-[#3dabab]/60 hover:border-[#3dabab] ring-1 ring-[#3dabab]/20'
                        : 'bg-white/95 dark:bg-[#0c2024]/95 border-stone-200/90 dark:border-stone-800 hover:border-[#3dabab]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isExam
                              ? 'bg-[#3dabab] text-white'
                              : 'bg-stone-100 dark:bg-stone-800 text-black dark:text-stone-200 border border-stone-300 dark:border-stone-700'
                          }`}
                        >
                          {notice.category}
                        </span>

                        {notice.isUrgent && (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-[#1f5e5e] dark:text-[#4fd1d1]">
                            <AlertCircle className="w-3.5 h-3.5 text-[#3dabab]" />
                            <span>Action Required</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-black dark:text-white leading-snug mb-2 font-display">
                        {notice.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 dark:text-stone-400 mb-3">
                        <Calendar className="w-3.5 h-3.5 text-[#3dabab]" />
                        <span>{notice.date}</span>
                      </div>

                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                        {notice.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-stone-500 dark:text-stone-400 truncate max-w-[170px]">
                        {notice.venue || 'SpeakSmart Campus'}
                      </span>

                      <button
                        onClick={() => setActiveNotice(notice)}
                        className="text-xs font-bold text-black dark:text-stone-200 hover:text-[#3dabab] dark:hover:text-[#4fd1d1] flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        <span>Read Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#3dabab]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredNotices.length === 0 && (
              <div className="py-12 text-center bg-stone-50 dark:bg-stone-900/80 rounded-xl border border-stone-200 dark:border-stone-800">
                <p className="text-sm text-stone-500 dark:text-stone-400">No notices found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-bold text-[#3dabab] hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </>
        )}

        {/* Detailed Notice View Modal */}
        {activeNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-[#0a1a1d] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-300 dark:border-stone-700 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 text-black dark:text-white">
              
              <div className="flex items-center justify-between gap-4 mb-4 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#3dabab] text-white px-2.5 py-0.5 rounded">
                    {activeNotice.category} Notice
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600 dark:text-stone-400">{activeNotice.date}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveNotice(null);
                    if (onCloseNoticeModal) onCloseNoticeModal();
                  }}
                  className="text-stone-400 hover:text-black dark:hover:text-white text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white font-display leading-tight mb-3">
                {activeNotice.title}
              </h3>

              <div className="p-3 bg-stone-50 dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-1 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span><strong>Location / Venue:</strong> {activeNotice.venue || 'Grand Auditorium, SpeakSmart'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span><strong>Effective Period:</strong> {activeNotice.date}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed mb-6">
                <p className="font-semibold text-black dark:text-white">{activeNotice.summary}</p>
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Official Directive & Schedule:</h4>
                  <ul className="space-y-2 text-xs">
                    {activeNotice.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-stone-50 dark:bg-stone-900 p-2.5 rounded border border-stone-200 dark:border-stone-800">
                        <span className="text-[#3dabab] font-bold shrink-0">{idx + 1}.</span>
                        <span className="text-stone-800 dark:text-stone-200">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons inside notice */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handlePrintOrShare(activeNotice)}
                  className="px-4 py-2 text-xs font-bold text-black dark:text-stone-200 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span>{copiedNoticeId ? 'Opening Print Dialog...' : 'Print Official Notice Slip'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="https://forms.gle/amSFYJ7xTY1oi97u8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Register for New Semester</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setActiveNotice(null);
                      if (onCloseNoticeModal) onCloseNoticeModal();
                    }}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    Close
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
