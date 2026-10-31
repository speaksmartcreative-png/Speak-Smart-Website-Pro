import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mic2, 
  CalendarCheck, 
  FileText, 
  Award, 
  CreditCard, 
  ChevronDown, 
  ChevronUp, 
  Printer, 
  Info,
  ExternalLink,
  Download,
  Copy,
  Check,
  Search,
  Youtube,
  Instagram,
  Clock,
  Sparkles
} from 'lucide-react';
import { RULES_AND_REGULATIONS } from '../data/mockData';

interface RulesSectionProps {
  selectedCategoryId?: string;
  onOpenRegister: () => void;
}

export const RulesSection: React.FC<RulesSectionProps> = ({
  selectedCategoryId,
  onOpenRegister,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(
    selectedCategoryId || RULES_AND_REGULATIONS[0].id
  );
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedCategoryId) {
      setActiveCategoryId(selectedCategoryId);
      setExpandedIndex(0);
    }
  }, [selectedCategoryId]);

  const currentCategory =
    RULES_AND_REGULATIONS.find((c) => c.id === activeCategoryId) ||
    RULES_AND_REGULATIONS[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mic':
        return <Mic2 className="w-4 h-4" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-4 h-4" />;
      case 'FileText':
        return <FileText className="w-4 h-4" />;
      case 'Award':
        return <Award className="w-4 h-4" />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4" />;
      case 'Clock':
        return <Clock className="w-4 h-4" />;
      default:
        return <ShieldCheck className="w-4 h-4" />;
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePrintHandbook = () => {
    window.print();
  };

  // Filter rules if search is active
  const filteredRules = currentCategory.rules.filter(
    (rule) =>
      !searchQuery ||
      rule.ruleTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rule.enforcement.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="rules" className="py-14 sm:py-20 bg-stone-50 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1f5e5e] mb-2">
              <span className="p-1 rounded-md bg-[#3dabab]/10 text-[#3dabab]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span>Official SpeakSmart Handbook & Operational Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 font-display">
              Rules and Regulations
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Standard operating procedures for students, parents, and faculty at <strong className="text-stone-900">SpeakSmart Centre for Communication (SSC)</strong>. All enrolled families adhere to these guidelines for seamless learning and safety.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/assets/aistudio/Rules_and_Regulations_SpeakSmart_29fc56f3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>

            <button
              onClick={handlePrintHandbook}
              className="px-4 py-2 text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:border-[#3dabab] rounded-lg shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-[#3dabab]" />
              <span>Print Guide</span>
            </button>
          </div>
        </div>

        {/* Quick Official Links Banner (Forms & Videos) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#3dabab]/30 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h4 className="text-sm font-bold text-stone-950">
                  New Semester Admission Action Steps
                </h4>
                <p className="text-xs text-stone-600">
                  Fill the student enrolment form and submit the digital rulebook acknowledgment online.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://forms.gle/iNh9eT4JTG2xDNRAA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#3dabab] hover:bg-[#329696] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <span>Step 1: Enrolment Form</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href="https://forms.gle/hg9jQr2yYLbvHJhRA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-colors border border-stone-300"
              >
                <span>Step 2: Digital Agreement</span>
                <ExternalLink className="w-3 h-3 text-stone-600" />
              </a>

              <a
                href="https://www.youtube.com/watch?v=9PC5IG1qkVM"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold flex items-center gap-1.5 transition-colors border border-red-200"
              >
                <Youtube className="w-3.5 h-3.5 text-red-600" />
                <span>Overview Video</span>
              </a>

              <a
                href="https://instagram.com/speaksmartcommunication"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold flex items-center gap-1.5 transition-colors border border-pink-200"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>@speaksmartcommunication</span>
              </a>
            </div>
          </div>
        </div>

        {/* 7 Rule Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {RULES_AND_REGULATIONS.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setExpandedIndex(0);
                  setSearchQuery('');
                }}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#3dabab] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:text-stone-950 hover:border-[#3dabab] border border-stone-200'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#3dabab]'}>
                  {getCategoryIcon(cat.iconName)}
                </span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Search Bar for Quick Rule Lookup */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search within "${currentCategory.title}" (e.g. fees, makeup, WhatsApp, GST, holidays)...`}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#3dabab] shadow-xs"
          />
        </div>

        {/* Active Rule Details Card */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-4 mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3dabab]/10 text-[#3dabab] flex items-center justify-center shrink-0">
                {getCategoryIcon(currentCategory.iconName)}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-950 font-display">
                  {currentCategory.title}
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">{currentCategory.shortDesc}</p>
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-[#1f5e5e] bg-[#3dabab]/10 px-2.5 py-1 rounded-md w-fit">
              Section: {currentCategory.id.replace('rule-', '').toUpperCase()}
            </span>
          </div>

          {/* If Financial Rule is selected, show Bank & Payment Information Card */}
          {activeCategoryId === 'rule-financial' && (
            <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#ebf7f7]/60 border border-[#3dabab]/40 text-stone-900">
              <div className="flex items-center gap-2.5 mb-3 text-[#1f5e5e] font-bold text-xs uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-[#3dabab]" />
                <span>Official SpeakSmart Tuition & Banking Details</span>
              </div>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Fees are payable in advance by the <strong className="text-stone-900">15th of every month</strong>. Fixed monthly fee: <strong className="text-stone-900">Rs. 4,000/-</strong> (Late fee of Rs. 500/- strictly applies after 15th). Note: From October 2026, +18% GST applies (Rs. 4,720/- per month, input claimable).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Bank Account Box */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-stone-500 font-mono text-[11px]">
                    <span>BANK TRANSFER (NEFT/IMPS/RTGS)</span>
                    <span className="text-[#3dabab] font-bold">ICICI BANK</span>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[11px]">Account Name</p>
                    <p className="font-bold text-stone-900">Sreela Mitra</p>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[11px]">Branch</p>
                    <p className="font-semibold text-stone-800">Salt Lake Wealth Branch</p>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                    <div>
                      <p className="text-stone-500 text-[11px]">Account Number (Savings)</p>
                      <p className="font-mono font-bold text-stone-950 text-sm">165801500737</p>
                    </div>
                    <button
                      onClick={() => handleCopy('165801500737', 'acc')}
                      className="px-2.5 py-1 text-[11px] font-bold rounded bg-stone-100 hover:bg-[#3dabab] hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-stone-700"
                    >
                      {copiedKey === 'acc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'acc' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-stone-100">
                    <div>
                      <p className="text-stone-500 text-[11px]">IFSC Code</p>
                      <p className="font-mono font-bold text-stone-950 text-sm">ICIC0001658</p>
                    </div>
                    <button
                      onClick={() => handleCopy('ICIC0001658', 'ifsc')}
                      className="px-2.5 py-1 text-[11px] font-bold rounded bg-stone-100 hover:bg-[#3dabab] hover:text-white transition-colors cursor-pointer flex items-center gap-1 text-stone-700"
                    >
                      {copiedKey === 'ifsc' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'ifsc' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* UPI & Verification Box */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-stone-500 font-mono text-[11px]">
                    <span>UPI / GPAY / PAYTM</span>
                    <span className="text-[#3dabab] font-bold">INSTANT VERIFIED</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-stone-500 text-[11px]">UPI / Mobile Pay Number</p>
                      <p className="font-mono font-bold text-stone-950 text-base">9830064596</p>
                      <p className="text-[11px] text-stone-500">Payee: Sreela Mitra</p>
                    </div>
                    <button
                      onClick={() => handleCopy('9830064596', 'upi')}
                      className="px-3 py-1.5 text-xs font-bold rounded bg-[#3dabab] hover:bg-[#329696] text-white transition-colors cursor-pointer flex items-center gap-1"
                    >
                      {copiedKey === 'upi' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'upi' ? 'Copied!' : 'Copy UPI'}</span>
                    </button>
                  </div>

                  <div className="pt-2 border-t border-stone-100 text-[11px] space-y-1">
                    <p className="font-bold text-stone-900">SpeakSmart FEES WhatsApp Group Protocol:</p>
                    <p className="text-stone-600">
                      Share payment screenshot on the designated <strong className="text-stone-900">SpeakSmart FEES</strong> group with:
                    </p>
                    <div className="p-2 rounded bg-stone-50 border border-stone-200 font-mono text-[11px] text-stone-800">
                      &quot;[Student Name], [Batch Day &amp; Time], [Month]&quot; (e.g. &quot;Sam Smith, Sat 10:30, May&quot;)
                    </div>
                    <p className="text-stone-500 text-[10px] italic">
                      Official fee receipt will be issued on the group within 1 week. Cash payments accepted only in sealed envelopes with full student details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* List of Rules with Expandable Enforcement */}
          <div className="space-y-3.5">
            {filteredRules.length === 0 ? (
              <div className="p-8 text-center bg-stone-50 rounded-xl border border-dashed border-stone-300">
                <p className="text-sm font-bold text-stone-700">No rules matched your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs font-bold text-[#3dabab] hover:underline cursor-pointer"
                >
                  Clear search query
                </button>
              </div>
            ) : (
              filteredRules.map((rule, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-stone-200 overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 bg-stone-50/80 hover:bg-stone-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#3dabab] text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-stone-950">
                          {rule.ruleTitle}
                        </h4>
                      </div>
                      <div className="text-stone-500 shrink-0">
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-stone-900" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="p-4 sm:p-5 bg-white border-t border-stone-200 space-y-4 text-xs sm:text-sm">
                        <p className="text-stone-700 leading-relaxed font-normal">
                          {rule.description}
                        </p>

                        <div className="p-3.5 rounded-lg bg-[#ebf7f7] border border-[#3dabab]/30 text-xs text-stone-900 flex items-start gap-2.5">
                          <Info className="w-4 h-4 text-[#3dabab] shrink-0 mt-0.5" />
                          <div>
                            <strong className="block font-bold text-[#1f5e5e]">Institute Policy &amp; Enforcement:</strong>
                            <p className="text-stone-700 mt-0.5 leading-relaxed">{rule.enforcement}</p>
                          </div>
                        </div>

                        {/* Interactive quick links if rule mentions forms/links */}
                        {rule.description.includes('forms.gle') && (
                          <div className="flex flex-wrap items-center gap-3 pt-1">
                            {rule.description.includes('iNh9eT4JTG2xDNRAA') && (
                              <a
                                href="https://forms.gle/iNh9eT4JTG2xDNRAA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3dabab] text-white text-xs font-bold hover:bg-[#329696] transition-colors"
                              >
                                <span>Open Online Enrolment Form</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {rule.description.includes('hg9jQr2yYLbvHJhRA') && (
                              <a
                                href="https://forms.gle/hg9jQr2yYLbvHJhRA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors"
                              >
                                <span>Open Digital Rules Acknowledgment</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Note Regarding Physical Page 5 from PDF */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-stone-700 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-stone-900">
                Note on Document Signing &amp; Physical Sheet:
              </p>
              <p className="text-stone-600 mt-0.5 leading-relaxed">
                As per official institute protocol, page 5 of the PDF handbook is the physical acknowledgment sheet. Enrolled families complete the equivalent agreement digitally via the{' '}
                <a
                  href="https://forms.gle/hg9jQr2yYLbvHJhRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1f5e5e] hover:underline inline-flex items-center gap-0.5"
                >
                  Online Rules &amp; Fee Acknowledgment Form <ExternalLink className="w-2.5 h-2.5 inline" />
                </a>.
              </p>
            </div>
          </div>

          {/* Quick Notice on Leadership Escalation & Registration */}
          <div className="mt-6 pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-600">
            <div>
              <p className="font-semibold text-stone-900">Direct Leadership Contacts for Confidential Matters:</p>
              <p className="text-stone-500">
                Mrs. Sreela Mitra (Founder, Director) · Ms. Vishakha Agarwal (Partner) · <a href="mailto:speaksmart.communication@gmail.com" className="text-[#3dabab] underline">speaksmart.communication@gmail.com</a> · <a href="tel:+919830064596" className="text-stone-700 font-bold">+91 98300 64596</a>
              </p>
            </div>
            <button
              onClick={onOpenRegister}
              className="px-4 py-2.5 rounded-lg bg-[#3dabab] hover:bg-[#329696] text-white font-bold text-xs shadow-xs cursor-pointer shrink-0 transition-colors"
            >
              Student Registration for New Semester →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
