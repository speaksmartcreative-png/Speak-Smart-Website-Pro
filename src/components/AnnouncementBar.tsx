import React from 'react';
import { Bell, ArrowRight, X } from 'lucide-react';
import { NoticeItem } from '../types';

interface AnnouncementBarProps {
  urgentNotice: NoticeItem;
  onOpenNotice: (notice: NoticeItem) => void;
  onViewAllUpdates: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  urgentNotice,
  onOpenNotice,
  onViewAllUpdates,
}) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Institute Announcements" className="bg-[#ebf7f7] text-stone-900 border-b border-[#3dabab]/30 px-4 py-2.5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="flex items-center gap-1.5 font-bold text-[#1f5e5e] shrink-0">
            <Bell className="w-3.5 h-3.5 text-[#3dabab]" />
            <span>Latest Notice:</span>
          </span>
          <button
            onClick={() => onOpenNotice(urgentNotice)}
            className="truncate text-left hover:underline text-stone-800 cursor-pointer text-xs sm:text-sm font-medium"
            title={urgentNotice.title}
          >
            <span className="font-bold text-[#1f5e5e] mr-1.5">[{urgentNotice.category}]</span>
            {urgentNotice.title} · <span className="text-stone-600 font-mono text-xs font-semibold">{urgentNotice.date}</span>
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onViewAllUpdates}
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#1f5e5e] hover:text-[#3dabab] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>All Updates & Exam Dates</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-stone-500 hover:text-stone-900 p-0.5 rounded cursor-pointer"
            aria-label="Dismiss notice bar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
