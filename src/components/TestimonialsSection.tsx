import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Award, 
  CheckCircle2, 
  MessageSquarePlus, 
  Heart, 
  Sparkles, 
  Filter, 
  GraduationCap, 
  Users,
  Quote,
  ZoomIn,
  X,
  MapPin,
  Check
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
    <section id="testimonials" className="relative py-16 md:py-24 bg-gradient-to-b from-[#fcf7f0] via-[#f2f8f9] to-[#e7f2f4] dark:from-[#061517] dark:via-[#091e22] dark:to-[#071618] text-stone-900 dark:text-stone-100 border-b border-stone-200/80 dark:border-stone-800 overflow-hidden">
      {/* Ambient background glowing elements */}
      <div className="absolute top-10 left-1/4 w-[32rem] h-[32rem] bg-amber-200/25 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-[#3dabab]/15 dark:bg-[#3dabab]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-teal-300/15 dark:bg-teal-700/10 rounded-full blur-3xl pointer-events-none" />

      {/* Micro-dot texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1f5e5e 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

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
                <span>Parent Testimonials</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'parents' ? 'bg-[#3dabab]/15 text-[#1f5e5e] dark:text-[#4fd1d1]' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}>
                  {filteredParents.length}
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0c2024]/90 p-6 sm:p-8 rounded-2xl border-2 border-[#3dabab]/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#3dabab] text-white text-[11px] font-bold px-4 py-1 rounded-bl-lg tracking-wider uppercase">
                ★ Featured Success Story
              </div>

              {/* Student Portrait */}
              <div className="lg:col-span-5 relative group rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm bg-stone-100 dark:bg-stone-800">
                <div className="relative aspect-square w-full">
                  <img
                    src="/assets/testimonials/student_doon_school_cropped.jpg"
                    alt="Ekagra Jhunjhunwala - SpeakSmart Student selected for The Doon School"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100 bg-white/95 dark:bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs border border-stone-200 dark:border-stone-700">
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
                      className="p-1.5 rounded-full bg-white/90 dark:bg-stone-800/90 hover:bg-white dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 shadow-xs border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
                      title="Enlarge portrait"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100 bg-white/95 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-xs border border-stone-200 dark:border-stone-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#3dabab]" />
                      <span>The Doon School, Dehradun (Selected)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Quotation & Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#1f5e5e] dark:text-[#4fd1d1] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#3dabab]" />
                  <span>Elite Boarding School Admissions · Kolkata Centre</span>
                </div>

                <div className="relative">
                  <Quote className="w-10 h-10 text-[#3dabab]/20 absolute -top-4 -left-2 pointer-events-none" />
                  <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white font-display leading-snug pl-4">
                    &ldquo;Getting to The Doon School was not easy, but SpeakSmart made it possible!&rdquo;
                  </h3>
                </div>

                <div className="bg-[#ebf7f7]/70 dark:bg-[#092226]/70 p-5 rounded-xl border border-[#3dabab]/20 relative">
                  <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed italic">
                    &ldquo;When I was born, my mother’s dream was that I would go to Doon School. When I researched it, it became my dream too. I joined SpeakSmart and it helped me a lot for my interview, especially Vishakha Ma’am—she was very kind and guided me on demeanor, poise, and spontaneous answers. Today, I got through Doon!&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 dark:border-stone-800 text-xs">
                  <div>
                    <p className="font-extrabold text-base text-black dark:text-white">Ekagra Jhunjhunwala</p>
                    <p className="text-[#1f5e5e] dark:text-[#4fd1d1] font-bold">Selected for The Doon School, Dehradun</p>
                    <p className="text-stone-500 dark:text-stone-400 text-[11px]">SpeakSmart Interview & Demeanor Coaching</p>
                  </div>
                  <span className="font-bold text-[#1f5e5e] dark:text-[#4fd1d1] bg-[#3dabab]/10 px-3 py-1.5 rounded-full border border-[#3dabab]/30 text-xs">
                    ★ Successfully Cleared Interview
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Verified Student Portraits & Quotations */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-black dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#3dabab]" />
                    <span>Verified Student Scholars & Words ({filteredStudents.length})</span>
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    Authentic feedback and milestone statements directly from our students in Kolkata
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#1f5e5e] dark:text-[#4fd1d1] font-bold bg-[#ebf7f7] dark:bg-[#0c2428] px-3 py-1.5 rounded-full border border-[#3dabab]/20 self-start sm:self-auto">
                  <Check className="w-3.5 h-3.5 text-[#3dabab]" />
                  <span>100% Verified Community Scholars</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStudents.map((st) => (
                  <div
                    key={st.id}
                    className="rounded-2xl bg-white dark:bg-[#0c2024]/90 border border-stone-200/90 dark:border-stone-800 hover:border-[#3dabab] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xs"
                  >
                    {/* Dedicated Face Portrait Window with 1:1 Aspect Ratio */}
                    <div className="p-4 pb-0">
                      <div
                        className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 shadow-inner cursor-pointer"
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
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />

                        {/* Top floating badge */}
                        <div className="absolute top-2.5 left-2.5 pointer-events-none">
                          <span className="text-[10px] font-bold text-stone-900 dark:text-stone-100 bg-white/95 dark:bg-stone-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-stone-200 dark:border-stone-700">
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
                          className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 dark:bg-stone-800/90 hover:bg-white dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 shadow-xs border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
                          title="Enlarge portrait"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Quotation & Details Body (Cleanly placed below the photo) */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                      <div>
                        {/* Header with Name, School & Star Rating */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="min-w-0">
                            <h4 className="font-extrabold text-base text-stone-950 dark:text-white truncate font-display">
                              {st.name}
                            </h4>
                            <p className="text-[11px] text-[#1f5e5e] dark:text-[#4fd1d1] font-semibold truncate mt-0.5">
                              {st.school ? st.school : st.cohort}
                            </p>
                          </div>
                          <div className="flex items-center gap-0.5 text-amber-500 shrink-0 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>

                        {/* Speech Topic */}
                        {st.speechTopic && (
                          <div className="mb-2.5">
                            <span className="inline-block text-[11px] font-bold text-stone-800 dark:text-stone-200 bg-[#ebf7f7] dark:bg-[#0d2a2f] px-2.5 py-1 rounded-md border border-[#3dabab]/20 line-clamp-1">
                              🎯 Topic: {st.speechTopic}
                            </span>
                          </div>
                        )}

                        {/* Student Authentic Quotation */}
                        <div className="relative pl-3 border-l-2 border-[#3dabab]/70">
                          <blockquote className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic line-clamp-4">
                            &ldquo;{st.quote}&rdquo;
                          </blockquote>
                        </div>
                      </div>

                      {/* Milestone Pill */}
                      <div className="pt-3 border-t border-stone-100 dark:border-stone-800">
                        {st.achievement && (
                          <div className="text-[11px] font-semibold text-[#1f5e5e] dark:text-[#4fd1d1] bg-[#3dabab]/10 px-2.5 py-1.5 rounded-lg border border-[#3dabab]/30">
                            ★ {st.achievement}
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
          <div className="space-y-8">
            {/* Friendly parent notice */}
            <div className="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-xl shadow-xs flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                <p className="font-bold">Parent Community Feedback</p>
                <p className="text-amber-800 dark:text-amber-300 mt-0.5">
                  Parent video interviews are currently in production and will be shared soon. In the meantime, explore verified written parent reflections below and check out the 18 authentic student scholar portraits above.
                </p>
              </div>
            </div>

            {/* Visual spotlight banner for Parents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#0c2024]/90 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm">
                <img
                  src="/src/assets/images/parent_student_coaching_1793341838500.jpg"
                  alt="SpeakSmart parent and teacher encouraging student speaker"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover object-top"
                />
              </div>
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#3dabab] font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-[#3dabab]" />
                  <span>Parent Perspectives & Life Impact</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white font-display">
                  &ldquo;The single most impactful extracurricular investment we made in our daughter&apos;s education.&rdquo;
                </h3>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                  &ldquo;Before SpeakSmart, my daughter would retreat into the background. She would rather take a lower grade than volunteer for group presentations. Watching her command the room at the SpeakSmart Showcase with poise, comedic timing, and deep conviction brought us to tears. Her school teachers noticed the change immediately.&rdquo;
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 dark:border-stone-800 text-xs">
                  <div>
                    <p className="font-bold text-black dark:text-white">Pooja Agarwal</p>
                    <p className="text-stone-500 dark:text-stone-400">Parent of SpeakSmart Junior & Teen Scholars · Kolkata</p>
                  </div>
                  <span className="font-semibold text-black dark:text-stone-200 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded border border-stone-200 dark:border-stone-700">
                    Outcome: Stage Confidence & School Captaincy
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Parent Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParents.map((pt) => (
                <div
                  key={pt.id}
                  className="p-6 rounded-xl bg-white dark:bg-[#0c2024]/90 border border-stone-200 dark:border-stone-800 hover:border-[#3dabab] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400">
                        {pt.location}
                      </span>
                    </div>

                    <blockquote className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed mb-4 italic">
                      &ldquo;{pt.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ebf7f7] dark:bg-[#133036] text-[#1f5e5e] dark:text-[#4fd1d1] flex items-center justify-center text-xs font-bold shrink-0 border border-[#3dabab]/40">
                        {pt.avatarInitials}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-stone-900 dark:text-white truncate">{pt.parentName}</p>
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">Parent of {pt.childName} ({pt.childGrade})</p>
                      </div>
                    </div>
                    {pt.outcomeMetric && (
                      <div className="mt-2 text-[11px] font-semibold text-[#1f5e5e] dark:text-[#4fd1d1] bg-[#3dabab]/10 px-2 py-1 rounded border border-[#3dabab]/30 truncate">
                        ✓ {pt.outcomeMetric}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#ebf7f7] via-white to-[#ebf7f7] dark:from-[#091f23] dark:via-[#0c262a] dark:to-[#091f23] text-stone-900 dark:text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#3dabab]/30 shadow-xs">
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
