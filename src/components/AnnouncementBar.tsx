import React from 'react';
import { Bell, ArrowRight, X } from 'lucide-react';
import { NoticeItem } from '../types';

interface AnnouncementBarProps {
  urgentNotice?: NoticeItem;
  onOpenNotice: (notice: NoticeItem) => void;
  onViewAllUpdates: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  urgentNotice,
  onOpenNotice,
  onViewAllUpdates,
}) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed || !urgentNotice) return null;

  return (
    <aside aria-label="Institute Announcements" className="bg-gradient-to-r from-[#072024] via-[#0d343a] to-[#072024] text-white border-b border-[#3dabab]/30 px-4 py-2.5 text-xs sm:text-sm shadow-xs relative overflow-hidden">
      {/* Subtle clean teal accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3dabab] to-transparent opacity-90" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#3dabab] text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-wider shrink-0 shadow-xs">
            <Bell className="w-3 h-3 text-white fill-white" />
            <span>Academic Bulletin</span>
          </span>
          <button
            onClick={() => onOpenNotice(urgentNotice)}
            className="truncate text-left hover:text-[#4fd1d1] text-stone-100 cursor-pointer text-xs sm:text-sm font-semibold transition-colors"
            title={urgentNotice.title}
          >
            <span className="font-extrabold text-[#4fd1d1] mr-1.5">[{urgentNotice.category}]</span>
            <span className="font-bold">{urgentNotice.title}</span> · <span className="text-stone-300 font-mono text-xs">{urgentNotice.date}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onViewAllUpdates}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-teal-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
          >
            <span>All Updates & Exam Dates</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-stone-300 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer transition-colors"
            aria-label="Dismiss notice bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>


  );
};
