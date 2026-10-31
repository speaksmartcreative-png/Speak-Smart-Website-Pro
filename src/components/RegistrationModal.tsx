import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  ChevronLeft 
} from 'lucide-react';
import { RegistrationFormData, SubmittedRegistration } from '../types';
import { PROGRAMS_LIST } from '../data/mockData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    studentName: '',
    studentDob: '',
    gradeLevel: 'Grade 7 (Ages 12-13)',
    schoolName: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    city: '',
    programSelected: 'SpeakSmart Teen Communicators',
    batchTiming: 'Saturday 01:00 PM – 03:30 PM',
    experienceLevel: 'Beginner (Experiences Stage Fright)',
    primaryGoals: ['Overcome Stage Anxiety', 'Voice Modulation & Clarity'],
    additionalNotes: '',
    agreedToRules: false,
  });

  const [submittedData, setSubmittedData] = useState<SubmittedRegistration | null>(null);
  const [validationError, setValidationError] = useState<string>('');

  if (!isOpen) return null;

  const goalOptions = [
    'Overcome Stage Anxiety',
    'Voice Modulation & Clarity',
    'Thought Architecture & Storytelling',
    'Parliamentary Debate & Rebuttals',
    'ARISTRI™ Live Examination Prep',
    'School Presentation Confidence',
    'Eliminating Filler Words ("umm", "like")',
    'TED-Style Keynote Delivery'
  ];

  const handleGoalToggle = (goal: string) => {
    if (formData.primaryGoals.includes(goal)) {
      setFormData({
        ...formData,
        primaryGoals: formData.primaryGoals.filter((g) => g !== goal),
      });
    } else {
      setFormData({
        ...formData,
        primaryGoals: [...formData.primaryGoals, goal],
      });
    }
  };

  const selectedProgramObj = PROGRAMS_LIST.find((p) => p.name === formData.programSelected) || PROGRAMS_LIST[1];

  const validateStep = (currentStep: number): boolean => {
    setValidationError('');
    if (currentStep === 1) {
      if (!formData.studentName.trim()) {
        setValidationError('Please enter the student\'s full name.');
        return false;
      }
      if (!formData.gradeLevel) {
        setValidationError('Please specify current grade or age.');
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.parentName.trim()) {
        setValidationError('Please enter parent/guardian name.');
        return false;
      }
      if (!formData.parentEmail.trim() || !formData.parentEmail.includes('@')) {
        setValidationError('Please enter a valid email address.');
        return false;
      }
      if (!formData.parentPhone.trim() || formData.parentPhone.length < 7) {
        setValidationError('Please enter a valid telephone contact number.');
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.programSelected) {
        setValidationError('Please select a program track.');
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.agreedToRules) {
        setValidationError('You must agree to the SpeakSmart Rules and Attendance Regulations to complete registration.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setValidationError('');
    setStep(Math.max(1, step - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    const randomId = `SS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const submission: SubmittedRegistration = {
      ...formData,
      id: randomId,
      submittedAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'Confirmed',
      assignedCohort: formData.programSelected.includes('ARISTRI')
        ? 'ARISTRI™ Spring Honors Cohort Alpha'
        : 'SpeakSmart Spring Batch B-1',
      orientationDate: 'Saturday, November 28, 2026 · 10:00 AM (Auditorium A)',
    };

    setSubmittedData(submission);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative my-8 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 text-black">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-black p-1 rounded-full cursor-pointer transition-colors"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Official Logo */}
        {!submittedData ? (
          <div className="mb-6 border-b border-stone-200 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
                alt="SpeakSmart Centre for Communication"
                className="h-11 w-auto object-contain"
              />
              <div>
                <div className="flex items-baseline leading-none font-display">
                  <span className="font-script text-2xl font-bold text-stone-950">Speak</span>
                  <span className="font-script text-2xl font-bold text-[#3dabab]">Smart</span>
                  <span className="text-[10px] uppercase font-bold text-stone-500 ml-1.5 font-sans">
                    Centre for Communication
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-0.5">
                  <span className="text-[#1f5e5e] font-bold">Think • Speak • Lead</span>
                  <span>·</span>
                  <span className="font-mono">LLPIN: ACO-6485</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-black font-display">
              Student Registration for New Semester
            </h2>
            <p className="text-xs text-stone-600 mt-1">
              Step {step} of 4: {step === 1 ? 'Student Profile' : step === 2 ? 'Guardian Contact' : step === 3 ? 'Program & Batch Schedule' : 'Goals & Agreement'}
            </p>

            {/* Stepper Dots */}
            <div className="flex items-center gap-2 mt-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    s === step
                      ? 'w-10 bg-[#3dabab]'
                      : s < step
                      ? 'w-6 bg-black'
                      : 'w-4 bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-6 border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3dabab] mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#3dabab]" />
              <span>Registration Confirmed</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black font-display">
              Admission Slip & Diagnostic Pass
            </h2>
          </div>
        )}

        {/* Validation Alert */}
        {validationError && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
            {validationError}
          </div>
        )}

        {/* FORM CONTENT */}
        {!submittedData ? (
          <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
            
            {/* STEP 1: Student Profile */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Leo Alexander Vance"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={formData.studentDob}
                      onChange={(e) => setFormData({ ...formData, studentDob: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Current Grade / Age Bracket *
                    </label>
                    <select
                      value={formData.gradeLevel}
                      onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                    >
                      <option>Grade 2 – 3 (Ages 7–8)</option>
                      <option>Grade 4 – 5 (Ages 9–10)</option>
                      <option>Grade 6 – 8 (Ages 11–13)</option>
                      <option>Grade 9 – 10 (Ages 14–15)</option>
                      <option>Grade 11 – 12 (Ages 16–18)</option>
                      <option>University / Pre-College</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Current School or College (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. St. Jude High School / Horizon Academy"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Prior Public Speaking Experience
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  >
                    <option>Beginner (Experiences Stage Fright & Nervous Tremors)</option>
                    <option>Intermediate (Comfortable in small groups, wants structure)</option>
                    <option>Advanced (Active debater, aims for competition wins & ARISTRI™ honors)</option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: Guardian Contact */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Email Address (For Schedule & Diagnostic Updates) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.parentEmail}
                      onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.parentPhone}
                      onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    City / Neighborhood (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Metro Area, West Suburbs"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  />
                </div>
              </div>
            )}

            {/* STEP 3: Program & Batch Selection */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black mb-2">
                    Select Program Cohort *
                  </label>
                  <div className="space-y-2.5">
                    {PROGRAMS_LIST.map((prog) => (
                      <label
                        key={prog.id}
                        className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                          formData.programSelected === prog.name
                            ? 'bg-[#3dabab]/10 border-[#3dabab] ring-1 ring-[#3dabab]'
                            : 'bg-white border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="programSelected"
                          value={prog.name}
                          checked={formData.programSelected === prog.name}
                          onChange={() => {
                            setFormData({
                              ...formData,
                              programSelected: prog.name,
                              batchTiming: prog.batches[0],
                            });
                          }}
                          className="mt-1 accent-[#3dabab]"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-black text-xs sm:text-sm">
                              {prog.name}
                            </span>
                            <span className="text-[11px] font-mono font-bold text-[#3dabab]">
                              {prog.badge}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 mt-0.5">{prog.ageRange} · {prog.duration}</p>
                          <p className="text-[11px] text-stone-500 italic mt-1">{prog.fee}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Preferred Batch Timing for {formData.programSelected} *
                  </label>
                  <select
                    value={formData.batchTiming}
                    onChange={(e) => setFormData({ ...formData, batchTiming: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] font-medium text-black"
                  >
                    {selectedProgramObj.batches.map((batch, i) => (
                      <option key={i} value={batch}>
                        {batch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* STEP 4: Goals & Rules Acceptance */}
            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-black mb-2">
                    Primary Oratory Goals (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {goalOptions.map((goal) => {
                      const checked = formData.primaryGoals.includes(goal);
                      return (
                        <button
                          type="button"
                          key={goal}
                          onClick={() => handleGoalToggle(goal)}
                          className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex items-center gap-2 ${
                            checked
                              ? 'bg-[#3dabab]/10 border-[#3dabab] text-black font-bold'
                              : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${checked ? 'bg-[#3dabab] border-[#3dabab] text-white' : 'border-stone-300'}`}>
                            {checked && '✓'}
                          </div>
                          <span className="truncate">{goal}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-black mb-1">
                    Special Notes / Specific Stage Anxieties (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Tell us about the student's communication tendencies or specific goals..."
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-[#3dabab] text-black"
                  />
                </div>

                {/* Rules & Regulations Agreement Checkbox */}
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-black">
                    <ShieldCheck className="w-4 h-4 text-[#3dabab]" />
                    <span>Institute Rules & Attendance Acknowledgment</span>
                  </div>
                  <p className="text-[11px] text-stone-600 leading-snug">
                    I acknowledge that oratory proficiency requires consistent practice. I agree to the SpeakSmart <strong>85% attendance policy</strong> for showcase qualification, weekly 2-minute speech practice recordings, and the podium etiquette code.
                  </p>
                  <label className="flex items-center gap-2 pt-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreedToRules}
                      onChange={(e) => setFormData({ ...formData, agreedToRules: e.target.checked })}
                      className="rounded border-stone-300 text-[#3dabab] focus:ring-[#3dabab] w-4 h-4 cursor-pointer accent-[#3dabab]"
                    />
                    <span className="text-xs font-bold text-black">
                      I have read and agree to the Institute Rules & Regulations *
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2.5 text-xs font-bold text-stone-700 hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-lg transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Confirm Semester Registration</span>
                </button>
              )}
            </div>

          </form>
        ) : (
          /* ======================================================== */
          /* REGISTRATION SUCCESS / CONFIRMATION SLIP */
          /* ======================================================== */
          <div className="space-y-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-stone-50 border border-[#3dabab]/40 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png"
                    alt="SpeakSmart Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">
                      SpeakSmart Centre for Communication
                    </h3>
                    <p className="text-[10px] text-stone-500">
                      Think • Speak • Lead · LLPIN: ACO-6485
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-[#3dabab] text-white text-xs font-bold rounded-full">
                  Seat Reserved
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono text-stone-500 uppercase font-bold">Registration Reference ID</p>
                  <p className="text-xl font-bold font-mono text-black">{submittedData.id}</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#1f5e5e] hover:text-[#3dabab] hover:underline"
                >
                  📍 2E, Shivam Chambers, Kolkata
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-stone-200">
                <div>
                  <span className="text-stone-500 block">Student:</span>
                  <strong className="text-black">{submittedData.studentName}</strong> ({submittedData.gradeLevel})
                </div>
                <div>
                  <span className="text-stone-500 block">Program:</span>
                  <strong className="text-black">{submittedData.programSelected}</strong>
                </div>
                <div>
                  <span className="text-stone-500 block">Batch Timing:</span>
                  <span className="text-black font-semibold">{submittedData.batchTiming}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Parent / Guardian:</span>
                  <span className="text-black">{submittedData.parentName} ({submittedData.parentPhone})</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-600 flex items-center justify-between">
                <span>Campus: 2E, Shivam Chambers, 53 Syed Amir Ali Avenue, 2nd Fl, Kolkata - 700019</span>
                <a
                  href="https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3dabab] font-bold hover:underline shrink-0 ml-2"
                >
                  Map →
                </a>
              </div>
            </div>

            {/* Diagnostic Orientation Callout */}
            <div className="p-4 rounded-xl bg-[#ebf7f7] border border-[#3dabab]/40 text-stone-900 space-y-2">
              <div className="flex items-center gap-2 text-[#1f5e5e] font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-[#3dabab]" />
                <span>Next Step: Orientation &amp; Stage Diagnostic</span>
              </div>
              <p className="text-xs text-stone-700">
                Date &amp; Time: <strong className="text-stone-950">{submittedData.orientationDate}</strong>
              </p>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                The orientation includes a friendly 15-minute diagnostic voice evaluation, assigning the student&apos;s personal speech locker, and distributing the semester workbook.
              </p>
            </div>

            <div className="text-xs text-stone-600 space-y-1">
              <p>✓ A confirmation email has been sent to <strong className="text-black">{submittedData.parentEmail}</strong>.</p>
              <p>✓ Admissions counselor: <strong className="text-black">speaksmart.communication@gmail.com</strong> · <strong className="text-black">+91 98300 64596</strong></p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePrintSlip}
                className="px-4 py-2.5 text-xs font-bold text-black bg-stone-100 hover:bg-stone-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#3dabab]" />
                <span>Print Registration Slip</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setStep(1);
                  }}
                  className="px-4 py-2 text-xs font-bold text-stone-600 hover:text-black cursor-pointer"
                >
                  Register Another Student
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-lg cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
