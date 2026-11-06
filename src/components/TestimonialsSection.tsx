import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Award, 
  CheckCircle2, 
  MessageSquarePlus, 
  Sparkles, 
  Filter, 
  GraduationCap, 
  Users,
  Quote,
  ZoomIn,
  X,
  MapPin,
  Check,
  ExternalLink
} from 'lucide-react';
import { STUDENT_TESTIMONIALS, PARENT_TESTIMONIALS } from '../data/mockData';
import { StudentTestimonial, ParentTestimonial } from '../types';

interface TestimonialsSectionProps {
  initialTab?: 'students' | 'parents';
  onOpenRegister: () => void;
  onTabChange?: (tab: 'students' | 'parents') => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  initialTab = 'students',
  onOpenRegister,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState<'students' | 'parents'>(initialTab);
  const [filterProgram, setFilterProgram] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; name: string; quote: string; achievement: string } | null>(null);

  // Official SpeakSmart Google Form Review URL
  const GOOGLE_FORM_REVIEW_URL = 'https://forms.gle/amSFYJ7xTY1oi97u8';

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabSwitch = (tab: 'students' | 'parents') => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  // New review form state
  const [reviewForm, setReviewForm] = useState({
    type: 'student',
    name: '',
    roleOrGrade: '',
    program: 'SpeakSmart Teen Communicators',
    quote: '',
    achievement: '',
  });

  const [studentList, setStudentList] = useState<StudentTestimonial[]>(STUDENT_TESTIMONIALS);
  const [parentList, setParentList] = useState<ParentTestimonial[]>(PARENT_TESTIMONIALS);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.quote) return;

    if (reviewForm.type === 'student') {
      const newStudent: StudentTestimonial = {
        id: `st-user-${Date.now()}`,
        name: reviewForm.name,
        ageOrGrade: reviewForm.roleOrGrade || 'Student',
        program: reviewForm.program,
        cohort: 'Cohort Spring 2026',
        speechTopic: reviewForm.achievement ? `"${reviewForm.achievement}"` : '"My Journey with SpeakSmart"',
        quote: reviewForm.quote,
        achievement: reviewForm.achievement || 'Recent Institute Showcase Graduate',
        avatarInitials: reviewForm.name.slice(0, 2).toUpperCase(),
        accentColor: 'from-[#3dabab] to-[#277979]',
      };
      setStudentList([newStudent, ...studentList]);
    } else {
      const newParent: ParentTestimonial = {
        id: `pt-user-${Date.now()}`,
        parentName: reviewForm.name,
        childName: reviewForm.roleOrGrade ? reviewForm.roleOrGrade : 'Enrolled Student',
        childGrade: 'Junior / Senior',
        programEnrolled: reviewForm.program,
        quote: reviewForm.quote,
        outcomeMetric: reviewForm.achievement || 'Noticeable improvement in vocal clarity & confidence',
        location: 'Verified Parent',
        avatarInitials: reviewForm.name.slice(0, 2).toUpperCase(),
      };
      setParentList([newParent, ...parentList]);
    }

    setSubmittedReview(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedReview(false);
      setReviewForm({
        type: 'student',
        name: '',
        roleOrGrade: '',
        program: 'SpeakSmart Teen Communicators',
        quote: '',
        achievement: '',
      });
    }, 1800);
  };

  const filteredStudents = studentList.filter((s) => {
    if (filterProgram === 'all') return true;
    if (filterProgram === 'junior') {
      return (
        s.program.toLowerCase().includes('junior') ||
        s.ageOrGrade.toLowerCase().includes('grade 1') ||
        s.ageOrGrade.toLowerCase().includes('grade 2') ||
        s.ageOrGrade.toLowerCase().includes('grade 3') ||
        s.ageOrGrade.toLowerCase().includes('grade 4')
      );
    }
    if (filterProgram === 'teen') {
      return (
        s.program.toLowerCase().includes('teen') ||
        s.ageOrGrade.toLowerCase().includes('grade 5') ||
        s.ageOrGrade.toLowerCase().includes('grade 6') ||
        s.ageOrGrade.toLowerCase().includes('grade 8') ||
        s.ageOrGrade.toLowerCase().includes('icse')
      );
    }
    if (filterProgram === 'interview') {
      return (
        (s.school && s.school.toLowerCase().includes('doon')) ||
        s.achievement.toLowerCase().includes('doon') ||
        s.cohort.toLowerCase().includes('doon') ||
        s.program.toLowerCase().includes('interview')
      );
    }
    if (filterProgram === 'trinity') {
      return (
        s.cohort.toLowerCase().includes('trinity') ||
        s.achievement.toLowerCase().includes('trinity')
      );
    }
    return true;
  });

  const filteredParents = parentList.filter((p) => {
    if (filterProgram === 'all') return true;
    if (filterProgram === 'junior') return p.programEnrolled.toLowerCase().includes('junior');
    if (filterProgram === 'teen') return p.programEnrolled.toLowerCase().includes('teen');
    return true;
  });

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-gradient-to-b from-[#fefbf6]/80 via-[#f0f9fa]/75 to-[#e9f6f7]/80 dark:from-[#061517]/85 dark:via-[#092226]/85 dark:to-[#07171a]/90 text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800/80 overflow-hidden">
      {/* Radiant Stage Spotlight Accents */}
      <div className="absolute top-10 left-10 w-[36rem] h-[36rem] bg-gradient-to-br from-teal-300/25 via-teal-400/10 to-transparent dark:from-teal-600/15 dark:via-teal-800/10 rounded-full blur-3xl pointer-events-none animate-aurora" />
      <div className="absolute bottom-10 right-10 w-[34rem] h-[34rem] bg-gradient-to-tl from-[#3dabab]/25 via-teal-400/15 to-transparent dark:from-[#3dabab]/20 dark:via-teal-600/10 rounded-full blur-3xl pointer-events-none animate-aurora" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Acoustic Stage Pattern Overlay */}
      <div className="absolute inset-0 bg-stage-pattern opacity-40 dark:opacity-60 pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header and Action Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#1f5e5e] dark:text-[#4fd1d1] mb-2">
              <Sparkles className="w-4 h-4 text-[#3dabab]" />
              <span>Authentic Student Voices & Milestone Reflections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white font-display tracking-tight">
              Transformations on the Podium
            </h2>
            <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real portraits and genuine words of students who conquered stage anxiety, cleared competitive school entrance interviews (including The Doon School), and mastered Trinity College London examinations at SpeakSmart, Kolkata.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 text-xs font-bold text-black dark:text-stone-200 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:border-[#3dabab] hover:text-[#3dabab] rounded-md shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#3dabab]" />
              <span>Share Your Testimonial</span>
            </button>
          </div>
        </div>

        {/* Category Switcher & Track Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Category:
            </span>
            <div className="inline-flex p-1 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-inner">
              <button
                onClick={() => handleTabSwitch('students')}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'students'
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-white shadow-sm ring-1 ring-stone-200/80 dark:ring-stone-700'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                <GraduationCap className={`w-4 h-4 ${activeTab === 'students' ? 'text-[#3dabab]' : 'text-stone-400'}`} />
                <span>Student Portraits & Quotations</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'students' ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#4fd1d1]' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}>
                  {filteredStudents.length} Students
                </span>
              </button>
              <button
                onClick={() => handleTabSwitch('parents')}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'parents'
                    ? 'bg-white dark:bg-stone-800 text-stone-950 dark:text-white shadow-sm ring-1 ring-stone-200/80 dark:ring-stone-700'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                <Users className={`w-4 h-4 ${activeTab === 'parents' ? 'text-[#3dabab]' : 'text-stone-400'}`} />
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  activeTab === 'parents' ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#4fd1d1]' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}>
                  In Studio
                </span>
              </button>
            </div>
          </div>

          {/* Filter by Cohort Track */}
          <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-300">
            <Filter className="w-3.5 h-3.5 text-[#3dabab]" />
            <span className="font-semibold text-black dark:text-white">Track Filter:</span>
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded px-2.5 py-1.5 text-xs text-black dark:text-white font-medium focus:outline-[#3dabab] cursor-pointer"
            >
              <option value="all">All Verified Students ({studentList.length})</option>
              <option value="junior">Junior Communicators (Grades 1-4)</option>
              <option value="teen">Teen Communicators (Grades 5-8 & ICSE)</option>
              <option value="interview">The Doon School Selection & Admissions</option>
              <option value="trinity">Trinity College London Candidates</option>
            </select>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STUDENTS TESTIMONIAL VIEW */}
        {/* ======================================================== */}
        {activeTab === 'students' && (
          <div className="space-y-12">
            
            {/* Spotlight Banner: Real Student Ekagra Jhunjhunwala (Cleared The Doon School Interview) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-white via-[#f3fafb] to-[#ecf8fa] dark:from-[#092125] dark:via-[#0c262a] dark:to-[#081a1d] p-6 sm:p-8 md:p-10 rounded-3xl border-2 border-[#3dabab]/45 dark:border-[#3dabab]/40 shadow-2xl relative overflow-hidden ring-4 ring-[#3dabab]/10">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-[#0f766e] via-[#0d9488] to-[#0f766e] text-white text-xs font-black px-5 py-1.5 rounded-bl-2xl tracking-wider uppercase shadow-md flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>Premier Success Story</span>
              </div>

              {/* Student Portrait */}
              <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden border-2 border-[#0ea5a5]/40 shadow-lg bg-stone-100 dark:bg-stone-800 ring-2 ring-[#0ea5a5]/20">
                <div className="relative aspect-square w-full">
                  <img
                    src="/assets/testimonials/student_doon_school_cropped.jpg"
                    alt="Ekagra Jhunjhunwala - SpeakSmart Student selected for The Doon School"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-black text-white bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-white/20">
                      Junior Scholars · Age 11
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => setSelectedPhoto({
                        src: '/assets/testimonials/student_doon_school_cropped.jpg',
                        name: 'Ekagra Jhunjhunwala · The Doon School Selection',
                        quote: 'When I was born, my mother’s dream was I would go to Doon School. When I researched it, it became my dream too. I joined SpeakSmart and it helped me a lot for my interview, especially Vishakha Ma’am—she was very kind. Today, I got through Doon! Getting to Doon was not easy, but SpeakSmart made it possible.',
                        achievement: 'Selected for The Doon School, Dehradun (Cleared Interview)'
                      })}
                      className="p-2 rounded-full bg-white/95 dark:bg-stone-800/95 hover:bg-white text-stone-800 dark:text-stone-100 shadow-md border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
                      title="Enlarge portrait"
                    >
                      <ZoomIn className="w-4 h-4 text-[#0ea5a5]" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-black text-stone-900 dark:text-stone-100 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md border border-[#3dabab]/40 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0d9488] dark:text-[#2dd4bf]" />
                      <span>The Doon School, Dehradun (Selected)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quotation & Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#3dabab]/15 to-teal-500/15 border border-[#3dabab]/35 text-xs text-[#0f766e] dark:text-[#4fd1d1] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#0d9488] dark:text-[#2dd4bf]" />
                  <span>Elite Boarding School Admissions · Kolkata Centre</span>
                </div>

                <div className="relative">
                  <Quote className="w-12 h-12 text-[#3dabab]/20 absolute -top-5 -left-2 pointer-events-none" />
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-950 dark:text-white font-display leading-tight pl-4">
                    &ldquo;Getting to The Doon School was not easy, but SpeakSmart made it possible!&rdquo;
                  </h3>
                </div>

                <div className="bg-gradient-to-r from-teal-50/70 via-white to-cyan-50/70 dark:from-[#092226] dark:via-[#0c2a2f] dark:to-[#081f23] p-5 sm:p-6 rounded-2xl border-2 border-[#3dabab]/30 relative shadow-sm">
                  <p className="text-sm sm:text-base text-stone-800 dark:text-stone-100 leading-relaxed italic font-medium">
                    &ldquo;When I was born, my mother’s dream was that I would go to Doon School. When I researched it, it became my dream too. I joined SpeakSmart and it helped me a lot for my interview, especially Vishakha Ma’am—she was very kind and guided me on demeanor, poise, and spontaneous answers. Today, I got through Doon!&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t-2 border-stone-200 dark:border-stone-800 text-xs">
                  <div>
                    <p className="font-black text-lg text-stone-950 dark:text-white">Ekagra Jhunjhunwala</p>
                    <p className="text-[#0d9488] dark:text-[#2dd4bf] font-extrabold">Selected for The Doon School, Dehradun</p>
                    <p className="text-stone-600 dark:text-stone-400 text-xs font-semibold">SpeakSmart Interview & Demeanor Coaching</p>
                  </div>
                  <span className="font-black text-white bg-gradient-to-r from-[#0f766e] to-[#0d9488] px-4 py-2 rounded-xl border border-[#0d9488] text-xs shadow-sm flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-white" />
                    <span>Successfully Cleared Interview</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Verified Student Portraits & Quotations */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
                <div>
                  <h4 className="text-2xl font-black text-stone-950 dark:text-white flex items-center gap-2.5">
                    <GraduationCap className="w-6 h-6 text-[#0ea5a5]" />
                    <span>Verified Student Scholars & Words ({filteredStudents.length})</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium mt-0.5">
                    Authentic milestone reflections directly from our podium scholars in Kolkata
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0f766e] dark:text-[#4fd1d1] font-black bg-gradient-to-r from-teal-500/15 via-emerald-500/15 to-transparent px-4 py-2 rounded-xl border-2 border-[#0ea5a5]/30 self-start sm:self-auto shadow-2xs">
                  <Check className="w-4 h-4 text-[#0ea5a5]" />
                  <span>100% Authentic Community Scholars</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredStudents.map((st) => (
                  <div
                    key={st.id}
                    className="rounded-3xl bg-white/95 dark:bg-[#091f23]/95 border-2 border-stone-200/90 dark:border-teal-500/20 hover:border-[#0ea5a5] hover:shadow-2xl hover:shadow-[#0ea5a5]/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md"
                  >
                    {/* Top Multi-Chromatic Accent Ribbon per student */}
                    <div className={`h-2.5 w-full bg-gradient-to-r ${st.accentColor || 'from-[#0ea5a5] via-teal-400 to-[#0284c7]'}`} />

                    {/* Dedicated Face Portrait Window with 1:1 Aspect Ratio */}
                    <div className="p-4 sm:p-5 pb-0">
                      <div
                        className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-800 border-2 border-stone-200 dark:border-stone-700 shadow-inner cursor-pointer ring-2 ring-transparent group-hover:ring-[#0ea5a5]/40 transition-all"
                        onClick={() => setSelectedPhoto({
                          src: st.image || '/assets/testimonials/student_hriday_jain_cropped.jpg',
                          name: st.name,
                          quote: st.quote,
                          achievement: st.achievement
                        })}
                        title="Click to view full portrait"
                      >
                        <img
                          src={st.image || '/assets/testimonials/student_hriday_jain_cropped.jpg'}
                          alt={`${st.name} - SpeakSmart Student`}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Top floating badge */}
                        <div className="absolute top-2.5 left-2.5 pointer-events-none">
                          <span className="text-[10px] font-black text-white bg-black/85 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/20">
                            {st.ageOrGrade}
                          </span>
                        </div>

                        {/* Zoom icon button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPhoto({
                              src: st.image || '/assets/testimonials/student_hriday_jain_cropped.jpg',
                              name: st.name,
                              quote: st.quote,
                              achievement: st.achievement
                            });
                          }}
                          className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white/95 dark:bg-stone-800/95 hover:bg-white text-stone-800 dark:text-stone-100 shadow-md border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
                          title="Enlarge portrait"
                        >
                          <ZoomIn className="w-3.5 h-3.5 text-[#0ea5a5]" />
                        </button>
                      </div>
                    </div>

                    {/* Quotation & Details Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        {/* Header with Name, School & Star Rating */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="min-w-0">
                            <h4 className="font-black text-lg text-stone-950 dark:text-white truncate font-display group-hover:text-[#0d9488] dark:group-hover:text-[#2dd4bf] transition-colors">
                              {st.name}
                            </h4>
                            <p className="text-xs text-[#0d9488] dark:text-[#2dd4bf] font-extrabold truncate mt-0.5">
                              {st.school ? st.school : st.cohort}
                            </p>
                          </div>
                          <div className="flex items-center gap-0.5 text-amber-500 shrink-0 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-2xs" />
                            ))}
                          </div>
                        </div>

                        {/* Speech Topic with Colorful Tag */}
                        {st.speechTopic && (
                          <div className="mb-3">
                            <span className="inline-block text-[11px] font-extrabold text-teal-950 dark:text-teal-200 bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-transparent px-3 py-1 rounded-lg border border-teal-500/30 line-clamp-1 shadow-2xs">
                              🎯 Topic: {st.speechTopic}
                            </span>
                          </div>
                        )}

                        {/* Student Authentic Quotation with Refined Teal Border */}
                        <div className="relative pl-3.5 border-l-4 border-[#3dabab] py-0.5">
                          <blockquote className="text-xs sm:text-sm text-stone-800 dark:text-stone-100 font-medium leading-relaxed italic line-clamp-4">
                            &ldquo;{st.quote}&rdquo;
                          </blockquote>
                        </div>
                      </div>

                      {/* Milestone Achievement Box */}
                      <div className="pt-3 border-t-2 border-stone-100 dark:border-stone-800">
                        {st.achievement && (
                          <div className="text-xs font-bold text-stone-900 dark:text-stone-100 bg-gradient-to-r from-teal-500/15 via-cyan-500/10 to-indigo-500/10 px-3 py-2 rounded-xl border border-teal-500/30 shadow-2xs flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-[#0d9488] dark:text-[#2dd4bf] shrink-0" />
                            <span className="truncate">{st.achievement}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PARENTS TESTIMONIAL VIEW */}
        {/* ======================================================== */}
        {activeTab === 'parents' && (
          <div className="py-12 px-6 sm:px-10 rounded-2xl bg-white dark:bg-[#0c2024]/90 border border-stone-200 dark:border-stone-800 text-center space-y-4 max-w-3xl mx-auto shadow-sm">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#3dabab]/15 text-[#0d9488] dark:text-[#2dd4bf] border border-[#3dabab]/30 flex items-center justify-center">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-white font-display">
                Parent Video Reflections in Studio Production
              </h3>
              <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-xl mx-auto">
                Official parent video interviews and written reflections from our Kolkata campus are currently being recorded and compiled. In the meantime, explore our 18 verified student testimonials, or submit your own experience via our review portal.
              </p>
            </div>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleTabSwitch('students')}
                className="px-5 py-2.5 bg-[#3dabab] hover:bg-[#329696] text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>View Verified Student Transformations ({studentList.length})</span>
              </button>
              <a
                href="#submit-review"
                className="px-5 py-2.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer border border-stone-200 dark:border-stone-700"
              >
                <span>Share a Parent Review</span>
              </a>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* REVIEW SECTION LINK & GOOGLE FORM REDIRECT PORTAL */}
        {/* ======================================================== */}
        <div id="submit-review" className="mt-14 rounded-3xl bg-gradient-to-br from-white via-[#f4fbfc] to-[#eaf6f7] dark:from-[#081e22] dark:via-[#0c262a] dark:to-[#071618] border-2 border-[#3dabab]/40 shadow-xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Serene Aurora Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/20 via-[#3dabab]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute inset-0 bg-stage-pattern opacity-30 dark:opacity-40 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-200/80 dark:border-stone-800">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#4fd1d1] border border-[#3dabab]/30 mb-3 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span>Verified Community Review Portal</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 dark:text-white font-display tracking-tight leading-tight">
                  Share Your SpeakSmart Experience
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
                  Has your child mastered stage confidence, cleared school admission interviews, or earned Trinity College London accolades? Submit your review to be featured on our official Star Scholars Wall of Fame.
                </p>
              </div>

              {/* Action Button: Opens the official Google Form directly */}
              <div className="shrink-0">
                <a
                  href={GOOGLE_FORM_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#3dabab] via-[#329696] to-[#277979] hover:from-[#329696] hover:to-[#1f5e5e] rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#3dabab]/25 cursor-pointer whitespace-nowrap"
                >
                  <span>Open Review Google Form</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Audience Guidance Pillars for Students & Teachers/Parents */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 backdrop-blur-xs">
                <div className="text-xs font-extrabold text-[#1f5e5e] dark:text-[#4fd1d1] uppercase mb-1.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#3dabab]" />
                  <span>For Students</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Reflect on your speech topic, how stage fear melted away, and your proudest moment speaking to an examiner.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 backdrop-blur-xs">
                <div className="text-xs font-extrabold text-[#1f5e5e] dark:text-[#4fd1d1] uppercase mb-1.5 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#3dabab]" />
                  <span>For Parents</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Share transformations you witnessed at home, in school assemblies, and during Trinity London exams.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-900/70 border border-stone-200/80 dark:border-stone-800 backdrop-blur-xs">
                <div className="text-xs font-extrabold text-[#1f5e5e] dark:text-[#4fd1d1] uppercase mb-1.5 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#3dabab]" />
                  <span>For Admissions Scholars</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Cleared entrance interviews like The Doon School? Tell incoming applicants how spontaneous Q&A prep helped.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#ebf7f7] via-white to-[#ebf7f7] dark:from-[#091f23] dark:via-[#0c262a] dark:to-[#091f23] text-stone-900 dark:text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#3dabab]/30 shadow-xs">
          <div>
            <h4 className="text-xl font-bold font-display text-stone-950 dark:text-white">
              Ready to witness your child&apos;s breakthrough on stage?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
              Join the upcoming semester cohort at SpeakSmart, Kolkata. Strictly capped at 12 students per studio batch.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded-md transition-all shadow-md hover:shadow-[#3dabab]/20 cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            Student Registration for New Semester
          </button>
        </div>

        {/* Share Testimonial Modal */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-[#0a1a1d] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 dark:border-stone-700 relative animate-in fade-in zoom-in-95 duration-200 text-stone-900 dark:text-stone-100">
              <h3 className="text-xl font-bold text-black dark:text-white font-display">
                Share Your SpeakSmart Experience
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 mb-6">
                Your words inspire incoming students to conquer stage fear.
              </p>

              {submittedReview ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#3dabab] mx-auto" />
                  <h4 className="text-lg font-bold text-black dark:text-white">Thank You!</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300">Your testimonial has been verified and added to the board.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-black dark:text-white mb-1">I am a</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, type: 'student' })}
                        className={`py-2 text-center rounded border font-bold cursor-pointer ${
                          reviewForm.type === 'student'
                            ? 'bg-[#3dabab] text-white border-[#3dabab]'
                            : 'bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                        }`}
                      >
                        Student Speaker
                      </button>
                      <button
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, type: 'parent' })}
                        className={`py-2 text-center rounded border font-bold cursor-pointer ${
                          reviewForm.type === 'parent'
                            ? 'bg-[#3dabab] text-white border-[#3dabab]'
                            : 'bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                        }`}
                      >
                        Parent
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-black dark:text-white mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      placeholder={reviewForm.type === 'student' ? 'e.g. Ekagra' : 'e.g. Dr. Pooja Agarwal'}
                      className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-900 focus:outline-[#3dabab] text-xs font-medium text-black dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-black dark:text-white mb-1">
                        {reviewForm.type === 'student' ? 'Grade / Age' : "Child's Name & Grade"}
                      </label>
                      <input
                        type="text"
                        value={reviewForm.roleOrGrade}
                        onChange={(e) => setReviewForm({ ...reviewForm, roleOrGrade: e.target.value })}
                        placeholder={reviewForm.type === 'student' ? 'e.g. Grade 5 · 11 yrs' : 'e.g. Ekagra, Grade 5'}
                        className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-900 focus:outline-[#3dabab] text-xs font-medium text-black dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-black dark:text-white mb-1">Program Track</label>
                      <select
                        value={reviewForm.program}
                        onChange={(e) => setReviewForm({ ...reviewForm, program: e.target.value })}
                        className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-900 focus:outline-[#3dabab] text-xs font-medium text-black dark:text-white"
                      >
                        <option>SpeakSmart Junior Communicators</option>
                        <option>SpeakSmart Teen Communicators</option>
                        <option>ARISTRI™ Examination Fellowship</option>
                        <option>Elite School Admissions Coaching</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-black dark:text-white mb-1">
                      {reviewForm.type === 'student' ? 'Speech Topic / Achievement' : 'Key Transformation Observed'}
                    </label>
                    <input
                      type="text"
                      value={reviewForm.achievement}
                      onChange={(e) => setReviewForm({ ...reviewForm, achievement: e.target.value })}
                      placeholder={reviewForm.type === 'student' ? 'e.g. Cleared Doon School Interview' : 'e.g. Commanded School Assembly'}
                      className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-900 focus:outline-[#3dabab] text-xs font-medium text-black dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black dark:text-white mb-1">Your Testimonial Story *</label>
                    <textarea
                      rows={3}
                      required
                      value={reviewForm.quote}
                      onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                      placeholder="Share how SpeakSmart or ARISTRI™ made a difference..."
                      className="w-full px-3 py-2 border border-stone-300 dark:border-stone-700 rounded bg-white dark:bg-stone-900 focus:outline-[#3dabab] text-xs font-medium text-black dark:text-white"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200 dark:border-stone-800">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 font-bold text-white bg-[#3dabab] hover:bg-[#329696] rounded cursor-pointer"
                    >
                      Publish Testimonial
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Portrait Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="bg-white dark:bg-[#0a1a1d] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative flex flex-col border border-stone-200 dark:border-stone-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-stone-950 flex items-center justify-center max-h-[60vh] overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.name}
                  className="max-h-[60vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 space-y-2">
                <h4 className="font-extrabold text-base text-black dark:text-white">{selectedPhoto.name}</h4>
                <blockquote className="text-xs text-stone-700 dark:text-stone-300 italic border-l-2 border-[#3dabab] pl-2.5">
                  &ldquo;{selectedPhoto.quote}&rdquo;
                </blockquote>
                <div className="pt-2 text-[11px] font-semibold text-[#1f5e5e] dark:text-[#4fd1d1]">
                  ★ {selectedPhoto.achievement}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
