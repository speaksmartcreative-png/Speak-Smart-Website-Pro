import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUp, ExternalLink, ShieldCheck, MessageCircle } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
  onOpenRegister?: () => void;
  onSelectRuleCategory?: (ruleId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-50 text-stone-700 border-t border-stone-200">
      {/* Brand Teal Accent Bar echoing the official letterhead */}
      <div className="h-1 bg-gradient-to-r from-[#1f5e5e] via-[#3dabab] to-[#1f5e5e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        
        {/* Header Block: Brand Crest & Official Identification */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-stone-200 gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
              alt="SpeakSmart Logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-script text-3xl text-stone-950 font-bold">Speak</span>
                <span className="font-script text-3xl text-[#3dabab] font-bold">Smart</span>
              </div>
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-stone-800 -mt-1 font-sans">
                Centre for Communication
              </p>
              <p className="text-xs font-semibold text-[#1f5e5e] tracking-wider mt-0.5">
                Think • Speak • Lead
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold bg-white text-stone-800 border border-stone-200 shadow-2xs">
              LLPIN: ACO-6485
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-[#3dabab]/10 text-[#1f5e5e] border border-[#3dabab]/25">
              <ShieldCheck className="w-3.5 h-3.5 text-[#3dabab]" />
              Double Certified: GOI &amp; SpeakSmart
            </span>
          </div>
        </div>

        {/* 3 Organized Columns: Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-10">
          
          {/* Column 1: About the Centre */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f5e5e]">
              About the Centre
            </h4>
            <p className="text-sm text-stone-600 leading-relaxed">
              Kolkata's premier communication studio for youth oratory, intellectual poise, and leadership communication. Official home to the ARISTRI™ Examination Board (Express • Evolve • Excel).
            </p>
            <p className="text-xs text-stone-500 italic pt-1">
              Academic direction conceived by Founder Sreela Mitra.
            </p>
            <div className="pt-1">
              <a
                href="/assets/aistudio/What_is_SpeakSmart_b1e4544e.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1f5e5e] hover:text-[#3dabab] hover:underline"
              >
                <span>Read Founder's Vision (PDF)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Studio Campus */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f5e5e] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#3dabab]" />
              SpeakSmart Centre For Communication
            </h4>
            <address className="not-italic text-sm text-stone-800 leading-relaxed font-medium">
              2E, Shivam Chambers,<br />
              53 Syed Amir Ali Avenue, 2nd Floor,<br />
              Kolkata - 700019, West Bengal
            </address>
            <div className="pt-1">
              <a
                href="https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3dabab] hover:text-[#1f5e5e] hover:underline"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>Tue – Sun: 9:00 AM – 8:00 PM (Mon Closed)</span>
            </div>
          </div>

          {/* Column 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f5e5e]">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#3dabab] shrink-0" />
                <a
                  href="tel:+919830064596"
                  className="font-bold text-stone-900 hover:text-[#3dabab] transition-colors"
                >
                  +91 98300 64596
                </a>
                <a
                  href="https://wa.me/919830064596"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 hover:bg-emerald-100 transition-colors ml-1"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-600" />
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#3dabab] shrink-0" />
                <a
                  href="mailto:speaksmart.communication@gmail.com"
                  className="text-stone-700 hover:text-[#3dabab] transition-colors font-medium break-all text-xs sm:text-sm"
                >
                  speaksmart.communication@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left">
            <span className="font-medium text-stone-700">
              © {new Date().getFullYear()} SpeakSmart Centre for Communication LLP
            </span>
            <span className="hidden sm:inline text-stone-300">·</span>
            <span>LLPIN: ACO-6485</span>
            <span className="hidden sm:inline text-stone-300">·</span>
            <span>All Rights Reserved</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#3dabab] transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
