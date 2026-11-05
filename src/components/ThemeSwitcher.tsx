import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'compact' | 'segmented';
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  variant = 'compact',
  className = '' 
}) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const options: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'light', label: 'Light', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { mode: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4 text-teal-400" /> },
    { mode: 'system', label: 'System', icon: <Monitor className="w-4 h-4 text-stone-400" /> },
  ];

  if (variant === 'segmented') {
    return (
      <div className={`flex items-center p-1 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 ${className}`}>
        {options.map((opt) => {
          const isActive = theme === opt.mode;
          return (
            <button
              key={opt.mode}
              onClick={() => setTheme(opt.mode)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-white shadow-xs border border-stone-200/80 dark:border-stone-700'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-200'
              }`}
              title={`Switch to ${opt.label} Mode`}
            >
              {opt.icon}
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Compact variant for Navbar header
  const currentIcon = resolvedTheme === 'dark' 
    ? <Moon className="w-4 h-4 text-teal-300" /> 
    : <Sun className="w-4 h-4 text-amber-500" />;

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 w-9 rounded-lg flex items-center justify-center bg-stone-100 dark:bg-stone-800/90 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition-all cursor-pointer shadow-2xs"
        aria-label={`Appearance: ${theme} mode. Click to change theme`}
        title={`Theme: ${theme === 'system' ? `System (${resolvedTheme})` : theme.charAt(0).toUpperCase() + theme.slice(1)}`}
      >
        {currentIcon}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 border-b border-stone-100 dark:border-stone-800/80 mb-1">
            Appearance
          </div>
          {options.map((opt) => {
            const isSelected = theme === opt.mode;
            return (
              <button
                key={opt.mode}
                onClick={() => {
                  setTheme(opt.mode);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#3dabab]/10 dark:bg-[#3dabab]/20 text-[#1f5e5e] dark:text-[#52c5c5] font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  {opt.icon}
                  <span>{opt.label}</span>
                  {opt.mode === 'system' && (
                    <span className="text-[10px] text-stone-400 dark:text-stone-500 font-normal">
                      ({resolvedTheme})
                    </span>
                  )}
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#3dabab]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
