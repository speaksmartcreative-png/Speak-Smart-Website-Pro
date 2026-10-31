export type PageView = 
  | 'home' 
  | 'speaksmart' 
  | 'aristri' 
  | 'testimonials'
  | 'student-testimonials' 
  | 'parent-testimonials' 
  | 'updates' 
  | 'rules' 
  | 'register';

export interface NoticeItem {
  id: string;
  title: string;
  category: 'Exam' | 'Holiday' | 'Competition' | 'Workshop' | 'General';
  date: string;
  effectiveDate?: string;
  isUrgent?: boolean;
  summary: string;
  details: string[];
  venue?: string;
  attachmentName?: string;
}

export interface StudentTestimonial {
  id: string;
  name: string;
  ageOrGrade: string;
  program: string;
  cohort: string;
  speechTopic: string;
  quote: string;
  achievement: string;
  avatarInitials: string;
  accentColor: string;
}

export interface ParentTestimonial {
  id: string;
  parentName: string;
  childName: string;
  childGrade: string;
  programEnrolled: string;
  quote: string;
  outcomeMetric: string;
  location: string;
  avatarInitials: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  rules: {
    ruleTitle: string;
    description: string;
    enforcement: string;
  }[];
}

export interface RegistrationFormData {
  studentName: string;
  studentDob: string;
  gradeLevel: string;
  schoolName: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  city: string;
  programSelected: string;
  batchTiming: string;
  experienceLevel: string;
  primaryGoals: string[];
  additionalNotes: string;
  agreedToRules: boolean;
}

export interface SubmittedRegistration extends RegistrationFormData {
  id: string;
  submittedAt: string;
  status: 'Confirmed' | 'Under Review';
  assignedCohort: string;
  orientationDate: string;
}
