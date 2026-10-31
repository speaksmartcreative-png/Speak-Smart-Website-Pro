import { NoticeItem, StudentTestimonial, ParentTestimonial, RuleCategory } from '../types';

export const NOTICES: NoticeItem[] = [
  {
    id: 'notice-01',
    title: 'Semester Final Oratory Jury Examination & Podium Assessments',
    category: 'Exam',
    date: 'Nov 14 – Nov 16, 2026',
    effectiveDate: '2026-11-14',
    isUrgent: true,
    summary: 'Official schedule for the end-of-semester formal jury evaluations across all junior and senior cohorts.',
    details: [
      'Junior Orators (Level 1 & 2): Saturday, Nov 14, 09:30 AM – 01:00 PM (Auditorium A)',
      'Teen Communicators & Rhetoric: Sunday, Nov 15, 10:00 AM – 02:30 PM (Main Chamber)',
      'ARISTRI™ Live Examination & Assessments: Monday, Nov 16, 04:00 PM – 07:30 PM (Individual examiners assess live on the spot with Double Certification from GOI and SpeakSmart).',
      'Evaluation criteria: Presentation of ideas & arguments (30%), Live questions & handling on feet (25%), Vocal resonance & modulation (25%), Objective-focussed communication (20%).',
      'All candidates receive meaningful written feedback for every task along with their score card.'
    ],
    venue: 'Grand Oratory Hall & ARISTRI Examination Chamber, SpeakSmart Campus',
    attachmentName: 'ARISTRI_Exam_Jury_Schedule_Nov2026.pdf'
  },
  {
    id: 'notice-02',
    title: 'Autumn Mid-Term Break & Public Holiday Institute Closure',
    category: 'Holiday',
    date: 'Nov 01 – Nov 03, 2026',
    effectiveDate: '2026-11-01',
    isUrgent: false,
    summary: 'All weekend workshops, practice studio booths, and administrative desks will be closed for the Fall Break.',
    details: [
      'Campus offices closed from Friday 6:00 PM, Oct 31 through Tuesday morning, Nov 04.',
      'Regular weekday and weekend batches resume promptly on Wednesday, Nov 04, 2026.',
      'Students are encouraged to practice their 3-minute jury speeches via the asynchronous audio portal.',
      'For emergency academic scheduling requests, email registrar@speaksmart.org.'
    ],
    venue: 'All Physical Studios & Video Labs',
    attachmentName: 'Holiday_Calendar_Fall_2026.pdf'
  },
  {
    id: 'notice-03',
    title: 'Aristri National Youth Parliamentary Debate Invitational 2026',
    category: 'Competition',
    date: 'Dec 05 – Dec 07, 2026',
    effectiveDate: '2026-12-05',
    isUrgent: true,
    summary: 'SpeakSmart will host 32 delegate schools for the Aristri Invitational Cup. Team registration is open.',
    details: [
      'Format: Asian Parliamentary 3v3 format with 7-minute substantive speeches.',
      'Themes: Global AI Governance, Ethics of Bioengineering, and Constitutional Rights.',
      'SpeakSmart internal tryouts to select the 4 institutional squads take place on Nov 21.',
      'Trophies, scholarships, and citations awarded by guest international adjudicators.'
    ],
    venue: 'Aristri Debating Chamber, SpeakSmart Building',
    attachmentName: 'Aristri_Cup_Debate_Prospectus_2026.pdf'
  },
  {
    id: 'notice-04',
    title: 'Spring 2027 Semester Early Admissions & Diagnostic Open House',
    category: 'General',
    date: 'Admissions Open: Oct 25 – Nov 30, 2026',
    effectiveDate: '2026-10-25',
    isUrgent: true,
    summary: 'Early seat reservation for the upcoming 16-week spring term with complimentary stage diagnostic.',
    details: [
      'Batches available for Junior Orators (7-10 yrs), Teen Rhetoric (11-14 yrs), and Aristri Fellows (15-19 yrs).',
      'Batch size strictly capped at 12 students per studio to ensure weekly individual podium time.',
      'Complimentary 15-minute voice & confidence diagnostic evaluation included with early registration.'
    ],
    venue: 'Online Registration Portal & Admissions Office',
    attachmentName: 'Spring_2027_Syllabus_Overview.pdf'
  },
  {
    id: 'notice-05',
    title: 'Masterclass: "The Architecture of a 3-Minute TED-Style Keynote"',
    category: 'Workshop',
    date: 'Nov 22, 2026 · 03:00 PM – 06:00 PM',
    effectiveDate: '2026-11-22',
    isUrgent: false,
    summary: 'Exclusive weekend intensive masterclass conducted by international keynote speaker Marcus Cole.',
    details: [
      'Open to all enrolled SpeakSmart and Aristri students and parents.',
      'Focus: Crafting unforgettable opening hooks, rhetorical cadences, and overcoming spontaneous blank-outs.',
      'Live onstage coaching for 6 selected student volunteers.'
    ],
    venue: 'Studio Amphitheater & Virtual Broadcast',
    attachmentName: 'Keynote_Masterclass_Handout.pdf'
  },
  {
    id: 'notice-06',
    title: 'Winter Vacation & Year-End Recess Dates Announced',
    category: 'Holiday',
    date: 'Dec 23, 2026 – Jan 03, 2027',
    effectiveDate: '2026-12-23',
    isUrgent: false,
    summary: 'Year-end recess announcement for faculty, administrative staff, and student bodies.',
    details: [
      'Studio sessions suspend from Wednesday, Dec 23, 2026.',
      'Campus resumes on Monday, Jan 04, 2027 with orientation for the Winter Intensive Bootcamps.'
    ],
    venue: 'Main Campus',
    attachmentName: 'Academic_Recess_Notice_2026.pdf'
  }
];

export const STUDENT_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'st-01',
    name: 'Sarah Jenkins',
    ageOrGrade: 'Grade 11 · 16 years',
    program: 'Aristri Honors Fellowship',
    cohort: 'Cohort Fall 2025',
    speechTopic: '"The Ethics of Gene Editing: Voice for the Unspoken"',
    quote: 'Before SpeakSmart, standing in front of a class felt paralyzing. My hands would tremor and I would rush through my slides. At Aristri, they taught me that pause is power. Last month, I took 1st place at the National Youth Forensics Invitational with a 7-minute speech.',
    achievement: '1st Place Orator · National Youth Forensics 2026',
    avatarInitials: 'SJ',
    accentColor: 'from-amber-600 to-amber-700'
  },
  {
    id: 'st-02',
    name: 'Aarav Sharma',
    ageOrGrade: 'Grade 8 · 13 years',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Cohort Spring 2026',
    speechTopic: '"Why Clean Oceans Need Youth Action"',
    quote: 'The weekly podium camera playback changed everything for me. You see yourself clearly—where you look, how you stand, and how you breathe. SpeakSmart made public speaking fun instead of scary. Now I am the captain of my school debate club.',
    achievement: 'Captain of School Debate Club & Best Speaker Award',
    avatarInitials: 'AS',
    accentColor: 'from-blue-600 to-blue-700'
  },
  {
    id: 'st-03',
    name: 'Chloe Vance',
    ageOrGrade: 'Grade 12 · 17 years',
    program: 'Aristri Parliamentary Debate Wing',
    cohort: 'Cohort Fall 2025',
    speechTopic: '"Economic Sovereignty in the Age of Digital Currencies"',
    quote: 'The Aristri curriculum goes way beyond typical speech classes. We learned classical Aristotelian rhetoric, syllogisms, and rapid impromptu refutations. When I interviewed for university scholarships, the panel specifically noted my composure and articulate argumentation.',
    achievement: 'Presidential Scholarship Recipient · Model UN Best Delegate',
    avatarInitials: 'CV',
    accentColor: 'from-emerald-600 to-emerald-700'
  },
  {
    id: 'st-04',
    name: 'David Adebayo',
    ageOrGrade: 'Grade 5 · 10 years',
    program: 'SpeakSmart Junior Orators',
    cohort: 'Cohort Summer 2026',
    speechTopic: '"If Animals Could Talk: My Campaign for Wildlife"',
    quote: 'I used to whisper when talking to adults because I thought my voice sounded squeaky. Coach Maya taught me how to breathe like a lion and use facial expressions. Doing my speech in front of 200 parents at the graduation gala was the best day ever!',
    achievement: 'Junior Orator of the Year · SpeakSmart Gala 2026',
    avatarInitials: 'DA',
    accentColor: 'from-indigo-600 to-indigo-700'
  },
  {
    id: 'st-05',
    name: 'Rhea Merchant',
    ageOrGrade: 'Grade 10 · 15 years',
    program: 'Aristri Model UN & Leadership Cohort',
    cohort: 'Cohort Spring 2026',
    speechTopic: '"Bridging the Urban-Rural Digital Divide"',
    quote: 'Aristri gave me the toolkit to turn messy thoughts into structured, compelling narratives. You learn to listen just as keenly as you speak. It gave me the self-belief to run for student council president, and I won!',
    achievement: 'Elected Student Council President 2026-2027',
    avatarInitials: 'RM',
    accentColor: 'from-rose-600 to-rose-700'
  },
  {
    id: 'st-06',
    name: 'Zackary Chen',
    ageOrGrade: 'Grade 7 · 12 years',
    program: 'SpeakSmart Impromptu & Extempore Lab',
    cohort: 'Cohort Fall 2025',
    speechTopic: '"The Science of Space Colonization"',
    quote: 'My favorite part is Table Topics where you get a random topic and have to speak for 2 minutes without hesitation. It eliminated all my "umms" and "likes". Now giving presentations at school is effortless.',
    achievement: 'Zero Filler-Word Certification · Impromptu Gold Medal',
    avatarInitials: 'ZC',
    accentColor: 'from-teal-600 to-teal-700'
  }
];

export const PARENT_TESTIMONIALS: ParentTestimonial[] = [
  {
    id: 'pt-01',
    parentName: 'Eleanor Vance',
    childName: 'Chloe Vance',
    childGrade: 'High School Senior · 17 yrs',
    programEnrolled: 'Aristri Honors Rhetoric & Debate',
    quote: 'As a parent, you worry when your daughter shrinks into the background despite having brilliant ideas. Enrolling Chloe at SpeakSmart was the single most impactful investment we made in her schooling. Within a single semester, she found her voice, commanded the room, and carried herself with remarkable grace.',
    outcomeMetric: 'Secured full merit scholarship & 1st place in state debate',
    location: 'Metropolitan District',
    avatarInitials: 'EV'
  },
  {
    id: 'pt-02',
    parentName: 'Rajesh & Sunita Sharma',
    childName: 'Aarav Sharma',
    childGrade: 'Middle School · 13 yrs',
    programEnrolled: 'SpeakSmart Teen Communicators',
    quote: 'Aarav was excruciatingly shy. He would avoid family gatherings and dreaded oral presentations at school. The coaches at SpeakSmart showed endless patience, positive reinforcement, and structured step-by-step techniques. Watching him host the school assembly last week brought happy tears to our eyes.',
    outcomeMetric: 'Overcame social stage fright; selected as school assembly host',
    location: 'North Suburbs',
    avatarInitials: 'RS'
  },
  {
    id: 'pt-03',
    parentName: 'Dr. Marcus Adebayo',
    childName: 'David Adebayo',
    childGrade: 'Elementary School · 10 yrs',
    programEnrolled: 'Junior Orators Foundation',
    quote: 'Children today spend so much time on digital screens that verbal eloquence is becoming a lost art. SpeakSmart bridges that gap with incredible energy and warmth. David now speaks with clarity, looks people in the eye, and articulates his points with mature logic.',
    outcomeMetric: 'Exceptional verbal expression & leadership growth',
    location: 'West Campus Area',
    avatarInitials: 'MA'
  },
  {
    id: 'pt-04',
    parentName: 'Priya & Vikram Merchant',
    childName: 'Rhea Merchant',
    childGrade: 'Grade 10 · 15 yrs',
    programEnrolled: 'Aristri Leadership & Public Forum',
    quote: 'What sets SpeakSmart apart from standard speech coaches is their scientific approach: audio diagnostics, posture alignment, and ethos/pathos/logos debate frameworks. Rhea did not just learn to speak well—she learned to think critically under pressure.',
    outcomeMetric: 'Elected Student President; commended for diplomatic negotiation',
    location: 'Central District',
    avatarInitials: 'PM'
  },
  {
    id: 'pt-05',
    parentName: 'Catherine Miller',
    childName: 'Lucas Miller',
    childGrade: 'Grade 6 · 11 yrs',
    programEnrolled: 'SpeakSmart Voice & Impromptu Track',
    quote: 'Lucas had a subtle lisp and was teased in 4th grade, which made him retreat into silence. SpeakSmart vocal therapists and public speaking mentors built up his confidence brick by brick. His diction is now crisp, resonant, and confident.',
    outcomeMetric: 'Diction correction and total self-confidence restored',
    location: 'South Hills',
    avatarInitials: 'CM'
  }
];

export const RULES_AND_REGULATIONS: RuleCategory[] = [
  {
    id: 'rule-onboarding',
    title: 'Registration & Onboarding Checklist',
    shortDesc: 'Official onboarding steps, introductory video, enrolment forms, and social media channels.',
    iconName: 'FileText',
    rules: [
      {
        ruleTitle: 'Step 1: Online Student Enrolment Form',
        description: 'Complete our official online enrolment form with the student\'s complete demographic, school, and guardian details prior to the first studio session.',
        enforcement: 'Mandatory before batch allocation. Official link: https://forms.gle/iNh9eT4JTG2xDNRAA'
      },
      {
        ruleTitle: 'Step 2: Digital Rules & Fee Acknowledgment',
        description: 'Submit the digital version of this document to confirm formal agreement with SpeakSmart fees and operational rules.',
        enforcement: 'Required for active admission confirmation. Official link: https://forms.gle/hg9jQr2yYLbvHJhRA'
      },
      {
        ruleTitle: 'Program Overview Video & Instagram Community',
        description: 'Watch our short introductory video on YouTube (https://www.youtube.com/watch?v=9PC5IG1qkVM) to understand the SpeakSmart pedagogical approach, and follow our Instagram (@speaksmartcommunication) for showcases.',
        enforcement: 'Helps students and parents understand classroom methodology before orientation.'
      }
    ]
  },
  {
    id: 'rule-feedback',
    title: 'Class Feedback, Progress Reports & Correspondence',
    shortDesc: 'Weekly progress reports, class group chats, and direct leadership escalation protocols.',
    iconName: 'Mic',
    rules: [
      {
        ruleTitle: 'Weekly Video & Progress Reports on Class Group',
        description: 'Assessment reports, speech videos, and actionable feedback on student progress are shared by SSC every single week on the designated class WhatsApp groups.',
        enforcement: 'Enables continuous weekly parental visibility into stage improvements.'
      },
      {
        ruleTitle: 'Class Group Chat Protocol (No Personal DM to Teachers)',
        description: 'Correspondence is strictly encouraged on the official class group chat and not via private messages to individual teachers. SSC tracks class groups centrally and responds most effectively there.',
        enforcement: 'Protects teachers\' instructional hours and ensures all queries are logged.'
      },
      {
        ruleTitle: 'Sensitive or Private Leadership Escalation',
        description: 'Parents may reach out directly to Mrs. Sreela Mitra (Founder, Director) or Ms. Vishakha Agarwal (Partner) if an issue is private, sensitive, or requires administrative intervention.',
        enforcement: 'Direct access to leadership for confidential matters.'
      }
    ]
  },
  {
    id: 'rule-attendance',
    title: 'Attendance, Absenteeism & Make-Up Classes',
    shortDesc: 'One make-up class policy, asynchronous video evaluations, and long leave conditions.',
    iconName: 'CalendarCheck',
    rules: [
      {
        ruleTitle: '1 Make-Up Class Option Per Week',
        description: 'If a student misses a regular class, SpeakSmart offers 1 make-up option that week. If the student cannot attend that slot, we share the class summary and main activity instructions. The student sends a video recording to the class group, and mentors provide feedback and guidance accordingly.',
        enforcement: 'Ensures student does not fall behind the cohort syllabus.'
      },
      {
        ruleTitle: 'Leaving for a Month or More — Option 1 (Spot Retention)',
        description: 'The parent continues to pay regular monthly fees, and SpeakSmart guarantees the retention of the student\'s confirmed seat in that specific batch.',
        enforcement: 'Protects seat reservation in capped 12-student batches.'
      },
      {
        ruleTitle: 'Leaving for a Month or More — Option 2 (De-registration & Re-admission)',
        description: 'If the monthly fee is not paid by the last day of the month, SSC removes the student from the administrative system and WhatsApp groups. On re-joining, batches are offered strictly based on available vacancies at that time, and a re-admission fee of Rs. 2000/- must be paid.',
        enforcement: 'Strict seat forfeit after month-end non-payment.'
      }
    ]
  },
  {
    id: 'rule-holidays',
    title: 'Holidays & Academic Calendar',
    shortDesc: '45 classes per year, 7 holiday weeks across Summer, Winter & Durga Puja breaks.',
    iconName: 'CalendarCheck',
    rules: [
      {
        ruleTitle: '45 Structured Classes Per Year',
        description: 'Each enrolled batch receives exactly 45 comprehensive classes in an academic year across the annual curriculum.',
        enforcement: 'Guaranteed instructional hours across all student cohorts.'
      },
      {
        ruleTitle: '7 Weeks Designated Annual Holidays',
        description: 'Out of the 52 weeks in a calendar year, 7 weeks are scheduled as official holidays during the Summer, Winter, and Durga Puja breaks.',
        enforcement: 'No studio sessions conducted during notified recess periods.'
      },
      {
        ruleTitle: '5-Week Month Holiday Adjustment Mechanism',
        description: 'Any incidental public holidays are systematically adjusted through the extra class days that naturally occur in months with 5 weeks, ensuring no loss of total classes.',
        enforcement: 'Ensures curriculum pace remains seamless without extra fees.'
      }
    ]
  },
  {
    id: 'rule-exams',
    title: 'Examinations & Global Certification',
    shortDesc: 'Annual communication exams held July to November for global certification.',
    iconName: 'Award',
    rules: [
      {
        ruleTitle: 'Annual Exam Window (July to November)',
        description: 'SSC thoroughly prepares all students for global communication skills examinations conducted annually between July and November.',
        enforcement: 'Rigorous preparation aligned with international speech benchmarks.'
      },
      {
        ruleTitle: 'Mandatory Class Prep, Optional Exam Sitting',
        description: 'Appearing for the final examination is not mandatory, but all students prepare for it mandatorily as regular studio classes follow the formal exam syllabus.',
        enforcement: 'Every student benefits from the high-standard syllabus even if not sitting for the formal exam.'
      },
      {
        ruleTitle: 'Individual Topic Selection & Speech Crafting',
        description: 'Each student selects their own individual presentation or debate topic and perfects their speeches under dedicated SpeakSmart faculty guidance.',
        enforcement: 'Tailored coaching for maximum authenticity and voice modulation.'
      }
    ]
  },
  {
    id: 'rule-punctuality',
    title: 'Punctuality, Campus Conduct & Safety',
    shortDesc: 'Punctual arrival, property respect, mandatory SSC ID collection for juniors, and social media.',
    iconName: 'ShieldCheck',
    rules: [
      {
        ruleTitle: 'Punctuality & Early Departure Protocol',
        description: 'Students must reach punctually. In the event of early departure or late arrival, prior permission must be requested via group chat to avoid disturbing ongoing sessions. Please do not call teachers during class hours unless urgent.',
        enforcement: 'Maintains classroom focus and decorum.'
      },
      {
        ruleTitle: 'Respect & Hygienic Use of SSC Property',
        description: 'All SpeakSmart equipment, microphones, podiums, and studio facilities must be treated with utmost respect and used hygienically by students at all times.',
        enforcement: 'Ensures safe, pristine learning environments.'
      },
      {
        ruleTitle: 'Junior Student Escort Protocol (SSC ID Card Required)',
        description: 'Junior students must be collected directly from the classroom door by a parent or authorized guardian showing the official SSC ID card. Children will strictly not be allowed to leave unescorted.',
        enforcement: 'Zero-compromise child safety policy.'
      },
      {
        ruleTitle: 'Social Media & Showcase Documentation',
        description: 'SpeakSmart Centre for Communication reserves the right to document and publish class videos, speech presentations, and testimonials across official SSC social media handles.',
        enforcement: 'Celebrates student progress on public platforms.'
      }
    ]
  },
  {
    id: 'rule-financial',
    title: 'Fees, Late Charges & Payment Modes',
    shortDesc: 'Rs. 4000/- monthly fee by 15th, Rs. 500/- late fee, Bank transfer, UPI & Cash instructions.',
    iconName: 'CreditCard',
    rules: [
      {
        ruleTitle: 'Fixed Monthly Fee: Rs. 4000/- (Due by 15th)',
        description: 'SSC charges a fixed monthly fee of Rs. 4000/-, which must be paid in advance by the 15th of each month. Post the 15th, a late fee of Rs. 500/- strictly applies. From October 2026, +18% GST applies (Rs. 4720/- per month, claimable for GST input).',
        enforcement: 'Late fee of Rs. 500/- automatically added after the 15th.'
      },
      {
        ruleTitle: 'Rs. 2000/- Non-Refundable Admission Fee & Mid-Month Pro-Rata',
        description: 'A one-time admission fee of Rs. 2000/- is non-refundable. If a student joins mid-month, fees for the first month only are adjusted on a pro-rata basis according to the number of classes attended.',
        enforcement: 'Guarantees enrollment slot and studio kit allocation.'
      },
      {
        ruleTitle: 'SpeakSmart FEES WhatsApp Group & Receipt Proof',
        description: 'Parents must join the dedicated "SpeakSmart FEES" WhatsApp group. Proof of payment must be shared there mentioning: Student Name, Batch Time, and Applicable Month (e.g., "Sam Smith, Sat 10:30, May"). Official receipts are issued within 1 week.',
        enforcement: 'All fee questions must be directed exclusively to the Fees WhatsApp group.'
      },
      {
        ruleTitle: 'Payment Methods: Bank Transfer, UPI & Cash',
        description: 'Bank: ICICI Bank (Salt Lake Wealth Branch), Account Holder: Sreela Mitra, A/C: 165801500737, IFSC: ICIC0001658 (Savings). UPI / Paytm / GPay to 9830064596 (Payee: Sreela Mitra). Cash in sealed envelope with Student Name, Batch, Month, Amount & Date.',
        enforcement: 'Always include student name, batch, and month in transaction remarks.'
      }
    ]
  }
];

export const PROGRAMS_LIST = [
  {
    id: 'prog-junior',
    name: 'SpeakSmart Junior Orators',
    ageRange: 'Ages 7 – 10 (Grades 2 – 5)',
    duration: '16-Week Semester · 2 hrs / week',
    focus: 'Overcoming Shyness, Vocal Projection, Creative Storytelling & Stage Body Language',
    batches: ['Saturday 09:30 AM – 11:30 AM', 'Sunday 10:00 AM – 12:00 PM', 'Tuesday 04:30 PM – 06:30 PM'],
    fee: '$480 / semester (Includes workbook, studio recordings & showcase entry)',
    badge: 'Foundation Oratory'
  },
  {
    id: 'prog-teen',
    name: 'SpeakSmart Teen Communicators',
    ageRange: 'Ages 11 – 14 (Grades 6 – 8)',
    duration: '16-Week Semester · 2.5 hrs / week',
    focus: 'Thought Architecture, Extempore Speaking, Class Presentations, Debate Basics & Interview Composure',
    batches: ['Saturday 01:00 PM – 03:30 PM', 'Sunday 02:00 PM – 04:30 PM', 'Thursday 05:00 PM – 07:30 PM'],
    fee: '$560 / semester (Includes studio diagnostics & mid-term jury)',
    badge: 'Core Oratory'
  },
  {
    id: 'prog-aristri',
    name: 'ARISTRI™ Public Speaking & Communication Skills Examination',
    ageRange: 'Ages 12 – 19 & Emerging Leaders',
    duration: '16-Week Multilevel Skill System · Live Practical Testing',
    focus: 'Presenting Ideas, Arguments, Negotiations & Pitching, Live On-the-Spot Individual Examiner Assessments',
    batches: ['Saturday 04:00 PM – 07:00 PM', 'Sunday 04:30 PM – 07:30 PM', 'Wednesday 05:30 PM – 08:30 PM'],
    fee: '$680 / semester (Includes Double Certification from GOI & SpeakSmart, Written Task Feedback & Exam Slot)',
    badge: 'ARISTRI™ GOI Certified'
  },
  {
    id: 'prog-weekend-bootcamp',
    name: 'SpeakSmart Impromptu & Extempore Intensive',
    ageRange: 'All Ages (Split Cohorts)',
    duration: '6-Week Rapid Bootcamp · 2 hrs / week',
    focus: 'Zero-Hesitation Thinking, Table Topics, Eliminating Filler Words & Quick Rebuttals',
    batches: ['Friday 05:00 PM – 07:00 PM', 'Sunday 11:30 AM – 01:30 PM'],
    fee: '$290 / bootcamp',
    badge: 'Specialized Skill'
  }
];

export const INSTITUTE_DETAILS = {
  name: 'SpeakSmart Centre for Communication',
  motto: 'Think • Speak • Lead',
  llpin: 'ACO-6485',
  address: '2E, Shivam Chambers, 53 Syed Amir Ali Avenue, 2nd Floor, Kolkata - 700019',
  mapsUrl: 'https://maps.app.goo.gl/Uxyx9HLjUbGjjZCSA?g_st=ac',
  email: 'speaksmart.communication@gmail.com',
  secondaryEmail: 'speaksmartcreative@gmail.com',
  phone: '+919830064596',
  phoneDisplay: '+91 98300 64596',
  logoUrl: '/assets/aistudio/SpeakSmart_Logo_-_2_-_Edited_93b5e3a3.png',
  letterheadUrl: '/assets/aistudio/updated_letter_head_79a772bb.jpeg',
  leadership: {
    founderDirector: 'Mrs. Sreela Mitra',
    partner: 'Ms. Vishakha Agarwal'
  }
};
