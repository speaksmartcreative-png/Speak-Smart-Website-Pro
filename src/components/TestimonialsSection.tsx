import React, { useState, useEffect } from 'react';
import { Star, Award, CheckCircle2, MessageSquarePlus, Heart, Sparkles, Filter, GraduationCap, Users } from 'lucide-react';
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

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleTabSwitch = (tab: 'students' | 'parents') => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };
  const [filterProgram, setFilterProgram] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);

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
    if (filterProgram === 'aristri') return s.program.toLowerCase().includes('aristri');
    if (filterProgram === 'junior') return s.program.toLowerCase().includes('junior');
    if (filterProgram === 'teen') return s.program.toLowerCase().includes('teen');
    return true;
  });

  const filteredParents = parentList.filter((p) => {
    if (filterProgram === 'all') return true;
    if (filterProgram === 'aristri') return p.programEnrolled.toLowerCase().includes('aristri');
    if (filterProgram === 'junior') return p.programEnrolled.toLowerCase().includes('junior');
    if (filterProgram === 'teen') return p.programEnrolled.toLowerCase().includes('teen');
    return true;
  });

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-stone-50 text-black border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Toggle Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#3dabab] mb-2">
              <Sparkles className="w-4 h-4 text-[#3dabab]" />
              <span>Authentic Community Voices & Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black font-display">
              Transformations on the Podium
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Hear directly from our student orators who conquered stage anxiety and the parents who witnessed their profound personal and academic evolution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-4 py-2 text-xs font-bold text-black bg-white border border-stone-300 hover:border-[#3dabab] hover:text-[#3dabab] rounded-md shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#3dabab]" />
              <span>Share Your Testimonial</span>
            </button>
          </div>
        </div>

        {/* Sub Button / Sub Page Selector for Student and Parent */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Category:
            </span>
            <div className="inline-flex p-1 bg-stone-100 border border-stone-200 rounded-xl shadow-inner">
              <button
                onClick={() => handleTabSwitch('students')}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'students'
                    ? 'bg-white text-stone-950 shadow-sm ring-1 ring-stone-200/80'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <GraduationCap className={`w-4 h-4 ${activeTab === 'students' ? 'text-[#3dabab]' : 'text-stone-400'}`} />
                <span>Student Testimonials</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'students' ? 'bg-[#3dabab]/15 text-[#1f5e5e]' : 'bg-stone-200 text-stone-600'
                }`}>
                  {filteredStudents.length}
                </span>
              </button>
              <button
                onClick={() => handleTabSwitch('parents')}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'parents'
                    ? 'bg-white text-stone-950 shadow-sm ring-1 ring-stone-200/80'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                }`}
              >
                <Users className={`w-4 h-4 ${activeTab === 'parents' ? 'text-[#3dabab]' : 'text-stone-400'}`} />
                <span>Parent Testimonials</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono font-bold ${
                  activeTab === 'parents' ? 'bg-[#3dabab]/15 text-[#1f5e5e]' : 'bg-stone-200 text-stone-600'
                }`}>
                  {filteredParents.length}
                </span>
              </button>
            </div>
          </div>

          {/* Filter by Cohort Track */}
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Filter className="w-3.5 h-3.5 text-[#3dabab]" />
            <span className="font-semibold text-black">Track:</span>
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              className="bg-white border border-stone-300 rounded px-2.5 py-1.5 text-xs text-black font-medium focus:outline-[#3dabab] cursor-pointer"
            >
              <option value="all">All Cohorts & Programs</option>
              <option value="junior">Junior Orators (7-10 yrs)</option>
              <option value="teen">Teen Communicators (11-14 yrs)</option>
              <option value="aristri">ARISTRI™ Examination Track</option>
            </select>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STUDENTS TESTIMONIAL VIEW */}
        {/* ======================================================== */}
        {activeTab === 'students' && (
          <div className="space-y-12">
            {/* Visual spotlight banner for Students */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
                <img
                  src="/src/assets/images/student_showcase_trophy_1793341838129.jpg"
                  alt="SpeakSmart student holding public speaking trophy and certificate"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 sm:h-72 object-cover object-top"
                />
              </div>
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#3dabab] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#3dabab]" />
                  <span>Spotlight Orator · Class of 2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black font-display">
                  &ldquo;SpeakSmart taught me that nervous energy is just fuel waiting for direction.&rdquo;
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;I entered SpeakSmart unable to introduce myself without blushing furiously. Sarah (our speech mentor) didn&apos;t just correct my posture; she broke down speech rhythm using musical beats. Taking first place at the National Youth Forensics Invitational was a milestone I never thought possible.&rdquo;
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 text-xs">
                  <div>
                    <p className="font-bold text-black">Sarah Jenkins</p>
                    <p className="text-stone-500">Grade 11 · ARISTRI™ Double Certified</p>
                  </div>
                  <span className="font-bold text-[#3dabab] bg-[#3dabab]/10 px-3 py-1 rounded-full border border-[#3dabab]/30">
                    Speech: &ldquo;The Ethics of Gene Editing&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Student Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((st) => (
                <div
                  key={st.id}
                  className="p-6 rounded-xl bg-white border border-stone-200 hover:border-[#3dabab] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1 text-[#3dabab]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#3dabab] text-[#3dabab]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-mono font-bold text-stone-500">
                        {st.cohort}
                      </span>
                    </div>

                    <p className="text-xs text-[#3dabab] font-bold mb-2">
                      Topic: {st.speechTopic}
                    </p>

                    <blockquote className="text-xs sm:text-sm text-stone-800 leading-relaxed mb-4">
                      &ldquo;{st.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ebf7f7] text-[#1f5e5e] flex items-center justify-center text-xs font-bold shrink-0 border border-[#3dabab]/40">
                        {st.avatarInitials}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-black truncate">{st.name}</p>
                        <p className="text-[11px] text-stone-500 truncate">{st.ageOrGrade} · {st.program}</p>
                      </div>
                    </div>
                    {st.achievement && (
                      <div className="mt-2 text-[11px] font-semibold text-[#1f5e5e] bg-[#3dabab]/10 px-2 py-1 rounded border border-[#3dabab]/30 truncate">
                        ★ {st.achievement}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PARENTS TESTIMONIAL VIEW */}
        {/* ======================================================== */}
        {activeTab === 'parents' && (
          <div className="space-y-12">
            {/* Visual spotlight banner for Parents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <div className="lg:col-span-4 rounded-xl overflow-hidden border border-stone-200 shadow-sm">
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
                <h3 className="text-xl sm:text-2xl font-bold text-black font-display">
                  &ldquo;The single most impactful extracurricular investment we made in our daughter&apos;s education.&rdquo;
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed italic">
                  &ldquo;Before SpeakSmart, Chloe would retreat into the background. She would rather take a lower grade than volunteer for group presentations. Watching her command a 200-person auditorium at the SpeakSmart Showcase with poise, comedic timing, and deep conviction brought us to tears. Her school teachers noticed the change immediately.&rdquo;
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 text-xs">
                  <div>
                    <p className="font-bold text-black">Eleanor Vance</p>
                    <p className="text-stone-500">Mother of Chloe Vance (17 yrs) · ARISTRI™ Track</p>
                  </div>
                  <span className="font-semibold text-black bg-stone-100 px-3 py-1 rounded border border-stone-200">
                    Outcome: Presidential Scholarship & Debate Captain
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Parent Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredParents.map((pt) => (
                <div
                  key={pt.id}
                  className="p-6 rounded-xl bg-white border border-stone-200 hover:border-[#3dabab] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1 text-[#3dabab]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#3dabab] text-[#3dabab]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-stone-500">
                        {pt.location}
                      </span>
                    </div>

                    <blockquote className="text-xs sm:text-sm text-stone-800 leading-relaxed mb-4">
                      &ldquo;{pt.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-stone-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#ebf7f7] text-[#1f5e5e] flex items-center justify-center text-xs font-bold shrink-0 border border-[#3dabab]/40">
                        {pt.avatarInitials}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-stone-900 truncate">{pt.parentName}</p>
                        <p className="text-[11px] text-stone-500 truncate">Parent of {pt.childName} ({pt.childGrade})</p>
                      </div>
                    </div>
                    {pt.outcomeMetric && (
                      <div className="mt-2 text-[11px] font-semibold text-[#1f5e5e] bg-[#3dabab]/10 px-2 py-1 rounded border border-[#3dabab]/30 truncate">
                        ✓ {pt.outcomeMetric}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA bar: Light theme with #3dabab button */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#ebf7f7] via-white to-[#ebf7f7] text-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[#3dabab]/30 shadow-xs">
          <div>
            <h4 className="text-xl font-bold font-display text-stone-950">
              Ready to witness your child&apos;s breakthrough on stage?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Join the upcoming semester cohort. Strictly capped at 12 orators per studio batch.
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
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200">
              <h3 className="text-xl font-bold text-black font-display">
                Share Your SpeakSmart Experience
              </h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Your words inspire incoming students to conquer stage fear.
              </p>

              {submittedReview ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-[#3dabab] mx-auto" />
                  <h4 className="text-lg font-bold text-black">Thank You!</h4>
                  <p className="text-xs text-stone-600">Your testimonial has been verified and added to the board.</p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-black mb-1">I am submitting as:</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="student"
                          checked={reviewForm.type === 'student'}
                          onChange={() => setReviewForm({ ...reviewForm, type: 'student' })}
                          className="accent-[#3dabab]"
                        />
                        <span className="text-black font-medium">Enrolled Student</span>
                      </label>
                      <label className="flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value="parent"
                          checked={reviewForm.type === 'parent'}
                          onChange={() => setReviewForm({ ...reviewForm, type: 'parent' })}
                          className="accent-[#3dabab]"
                        />
                        <span className="text-black font-medium">Parent / Guardian</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      placeholder="e.g. Maya Lin"
                      className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-[#3dabab] text-xs font-medium text-black"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-black mb-1">
                        {reviewForm.type === 'student' ? 'Grade / Age' : 'Child&apos;s Name & Grade'}
                      </label>
                      <input
                        type="text"
                        value={reviewForm.roleOrGrade}
                        onChange={(e) => setReviewForm({ ...reviewForm, roleOrGrade: e.target.value })}
                        placeholder={reviewForm.type === 'student' ? 'e.g. Grade 10 · 15 yrs' : 'e.g. Leo, Grade 6'}
                        className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-[#3dabab] text-xs font-medium text-black"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-black mb-1">Program Track</label>
                      <select
                        value={reviewForm.program}
                        onChange={(e) => setReviewForm({ ...reviewForm, program: e.target.value })}
                        className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-[#3dabab] text-xs font-medium text-black"
                      >
                        <option>SpeakSmart Junior Orators</option>
                        <option>SpeakSmart Teen Communicators</option>
                        <option>ARISTRI™ Examination Fellowship</option>
                        <option>Impromptu Bootcamp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1">
                      {reviewForm.type === 'student' ? 'Speech Topic / Achievement' : 'Key Transformation Observed'}
                    </label>
                    <input
                      type="text"
                      value={reviewForm.achievement}
                      onChange={(e) => setReviewForm({ ...reviewForm, achievement: e.target.value })}
                      placeholder={reviewForm.type === 'student' ? 'e.g. "The Power of Introverts"' : 'e.g. Won School Assembly Best Speaker'}
                      className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-[#3dabab] text-xs font-medium text-black"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1">Your Testimonial Story *</label>
                    <textarea
                      rows={3}
                      required
                      value={reviewForm.quote}
                      onChange={(e) => setReviewForm({ ...reviewForm, quote: e.target.value })}
                      placeholder="Share how SpeakSmart or ARISTRI™ made a difference..."
                      className="w-full px-3 py-2 border border-stone-300 rounded focus:outline-[#3dabab] text-xs font-medium text-black"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 text-stone-600 hover:text-black font-semibold cursor-pointer"
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

      </div>
    </section>
  );
};
