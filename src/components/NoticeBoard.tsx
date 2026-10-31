import React, { useState } from 'react';
import { 
  Bell, 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  ChevronRight,
  AlertCircle,
  Printer
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
    <section id="updates" className="py-16 md:py-24 bg-white text-black border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#3dabab] mb-2">
              <Bell className="w-4 h-4 text-[#3dabab]" />
              <span>Official Academic Bulletin & Announcements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-display">
              Updates & Notice Board
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Stay informed on upcoming semester jury examination dates, public holiday closures, tournament schedules, and ARISTRI™ live evaluation sessions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-500 font-bold font-mono">Academic Term 2026 – 2027</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#3dabab] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-200'
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
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded-md focus:outline-[#3dabab] font-medium text-black"
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
                className={`rounded-xl border p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                  isExam
                    ? 'bg-[#3dabab]/5 border-[#3dabab]/40 hover:border-[#3dabab]'
                    : 'bg-white border-stone-200 hover:border-black'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isExam
                          ? 'bg-[#3dabab] text-white'
                          : 'bg-stone-100 text-black border border-stone-300'
                      }`}
                    >
                      {notice.category}
                    </span>

                    {notice.isUrgent && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#1f5e5e]">
                        <AlertCircle className="w-3.5 h-3.5 text-[#3dabab]" />
                        <span>Action Required</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-black leading-snug mb-2 font-display">
                    {notice.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-stone-600 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-[#3dabab]" />
                    <span>{notice.date}</span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {notice.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-stone-500 truncate max-w-[170px]">
                    {notice.venue || 'SpeakSmart Campus'}
                  </span>

                  <button
                    onClick={() => setActiveNotice(notice)}
                    className="text-xs font-bold text-black hover:text-[#3dabab] flex items-center gap-1 cursor-pointer shrink-0"
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
          <div className="py-12 text-center bg-stone-50 rounded-xl border border-stone-200">
            <p className="text-sm text-stone-500">No notices found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.</p>
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

        {/* Detailed Notice View Modal */}
        {activeNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-300 relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 text-black">
              
              <div className="flex items-center justify-between gap-4 mb-4 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#3dabab] text-white px-2.5 py-0.5 rounded">
                    {activeNotice.category} Notice
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-600">{activeNotice.date}</span>
                </div>
                <button
                  onClick={() => {
                    setActiveNotice(null);
                    if (onCloseNoticeModal) onCloseNoticeModal();
                  }}
                  className="text-stone-400 hover:text-black text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black font-display leading-tight mb-3">
                {activeNotice.title}
              </h3>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 space-y-1 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span><strong>Location / Venue:</strong> {activeNotice.venue || 'Grand Oratory Hall, SpeakSmart'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span><strong>Effective Period:</strong> {activeNotice.date}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                <p className="font-semibold text-black">{activeNotice.summary}</p>
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-black">Official Directive & Schedule:</h4>
                  <ul className="space-y-2 text-xs">
                    {activeNotice.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded border border-stone-200">
                        <span className="text-[#3dabab] font-bold shrink-0">{idx + 1}.</span>
                        <span className="text-stone-800">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons inside notice */}
              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => handlePrintOrShare(activeNotice)}
                  className="px-4 py-2 text-xs font-bold text-black bg-stone-100 hover:bg-stone-200 rounded flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span>{copiedNoticeId ? 'Opening Print Dialog...' : 'Print Official Notice Slip'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setActiveNotice(null);
                      if (onCloseNoticeModal) onCloseNoticeModal();
                      onOpenRegister();
                    }}
                    className="px-5 py-2 text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded cursor-pointer"
                  >
                    Register for New Semester
                  </button>
                  <button
                    onClick={() => {
                      setActiveNotice(null);
                      if (onCloseNoticeModal) onCloseNoticeModal();
                    }}
                    className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-black cursor-pointer"
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
