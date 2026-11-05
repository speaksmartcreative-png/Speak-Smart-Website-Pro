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
    <aside aria-label="Institute Announcements" className="bg-gradient-to-r from-[#09262b] via-[#0f444c] to-[#09262b] text-white border-b border-amber-400/35 px-4 py-2.5 text-xs sm:text-sm shadow-xs relative overflow-hidden">
      {/* Subtle colorful shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 opacity-80" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-stone-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shrink-0 shadow-xs">
            <Bell className="w-3 h-3 text-stone-950 fill-stone-950" />
            <span>Academic Bulletin</span>
          </span>
          <button
            onClick={() => onOpenNotice(urgentNotice)}
            className="truncate text-left hover:text-amber-200 text-stone-100 cursor-pointer text-xs sm:text-sm font-semibold transition-colors"
            title={urgentNotice.title}
          >
            <span className="font-extrabold text-[#4fd1d1] mr-1.5">[{urgentNotice.category}]</span>
            <span className="font-bold">{urgentNotice.title}</span> · <span className="text-amber-300/90 font-mono text-xs font-bold">{urgentNotice.date}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onViewAllUpdates}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-300 hover:text-white bg-white/10 hover:bg-white/20 border border-amber-400/30 px-3 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap shadow-2xs"
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
