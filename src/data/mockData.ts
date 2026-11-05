import { NoticeItem, StudentTestimonial, ParentTestimonial, RuleCategory } from '../types';

export const NOTICES: NoticeItem[] = [];

export const STUDENT_TESTIMONIALS: StudentTestimonial[] = [
  {
    id: 'st-ekagra',
    name: 'Ekagra Jhunjhunwala',
    ageOrGrade: 'Junior Scholars · Ages 10-11',
    school: 'The Doon School (Selected)',
    program: 'SpeakSmart Interview & Elite Admissions',
    cohort: 'Doon School Selection Batch',
    speechTopic: 'Boarding School Interview Demeanor & Spontaneous Q&A',
    quote: 'When I was born, my mother’s dream was I would go to Doon School. When I researched it, it became my dream too. I joined SpeakSmart and it helped me a lot for my interview, especially Vishakha Ma’am—she was very kind. Today, I got through Doon! Getting to Doon was not easy, but SpeakSmart made it possible.',
    achievement: 'Selected for The Doon School, Dehradun (Cleared Interview)',
    avatarInitials: 'EJ',
    accentColor: 'from-[#1f5e5e] to-[#3dabab]',
    image: '/assets/testimonials/student_doon_school_cropped.jpg',
    featured: true
  },
  {
    id: 'st-dhriti',
    name: 'Dhriti Agrawal',
    ageOrGrade: 'Grade 2 · Junior Communicator',
    school: 'Kolkata Campus',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 2 Exam Batch',
    speechTopic: 'Personal Storytelling & Conversational Fluency',
    quote: 'At first I was so nervous... But today when I spoke with the examiner, he was extremely sweet and kind and I did not even hesitate a bit! SpeakSmart is something which will encourage you. The examination was a big thumbs up!',
    achievement: 'Completed Trinity College London Grade 2 with Thumbs Up',
    avatarInitials: 'DA',
    accentColor: 'from-amber-600 to-amber-700',
    image: '/assets/testimonials/student_vidya_garodia_cropped.jpg'
  },
  {
    id: 'st-hriday',
    name: 'Hriday Jain',
    ageOrGrade: 'Grade 3 · 3 Years at SpeakSmart',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 3 Exam Batch',
    speechTopic: 'Speech Structure, Vocabulary & Eliminating Unnecessary Fillers',
    quote: 'When I wrote my speech, it didn’t have the right content. SpeakSmart cut the unnecessary things, gave me more advanced language, and gave me feedbacks that helped me a lot. That is why I am standing here with a smile on my face!',
    achievement: '3-Year SpeakSmart Scholar · Grade 3 Trinity Distinction Track',
    avatarInitials: 'HJ',
    accentColor: 'from-blue-600 to-blue-700',
    image: '/assets/testimonials/student_hriday_jain_cropped.jpg'
  },
  {
    id: 'st-samika',
    name: 'Samika Singhal',
    ageOrGrade: 'Grade 5 · ICSE Board Candidate',
    school: 'Kolkata',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Trinity Grade 5 Advanced Cohort',
    speechTopic: 'Balancing Board Examination Pressures with Public Discourse',
    quote: 'Learning from Vishakha Ma’am and Sreela Ma’am means truly the world to me. With my ICSE boards knocking at the door, prep was demanding, but with help from Vishakha Ma’am, I did it! Speaking to an examiner was a wonderful new experience.',
    achievement: 'Trinity Grade 5 Examination Completed amidst Board Exams',
    avatarInitials: 'SS',
    accentColor: 'from-emerald-600 to-emerald-700',
    image: '/assets/testimonials/student_rajveer_chakraborty_cropped.jpg'
  },
  {
    id: 'st-hridan',
    name: 'Hridan Mehta Dalmia',
    ageOrGrade: 'Grade 2 · Junior Communicator',
    school: 'Kolkata',
    program: 'SpeakSmart Foundation & Stage Mastery',
    cohort: 'Exam Batch 2026',
    speechTopic: 'Hand Gestures, Voice Modulation & Pacing on Stage',
    quote: 'When I first went in I was pretty nervous, but today after completing the exam, I feel confident and proud to be in SpeakSmart! They taught me what to add, what to cut out, keep to time limit, and use voice modulation.',
    achievement: 'Progressed from Level 1 to Confident Level 2 Podium Presenter',
    avatarInitials: 'HD',
    accentColor: 'from-indigo-600 to-indigo-700',
    image: '/assets/testimonials/student_vedant_kejariwal_cropped.jpg'
  },
  {
    id: 'st-meenakshi',
    name: 'Meenakshi Banerjee',
    ageOrGrade: 'Grade 3 · Trinity Aspirant',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 3 Cohort',
    speechTopic: 'Global Concerns & Describing Memorable Places of Interest',
    quote: 'My first task was presenting something we want to see less of in the world, and second was describing a memorable place of interest. The examiner was very friendly. SpeakSmart truly helps hone your public speaking skills!',
    achievement: 'Grade 3 Trinity Speech & Communication Assessment Completed',
    avatarInitials: 'MB',
    accentColor: 'from-rose-600 to-rose-700',
    image: '/assets/testimonials/student_minakshi_banerjee_cropped.jpg'
  },
  {
    id: 'st-sheehan',
    name: 'Sheehan Nag',
    ageOrGrade: 'Grade 8 · Teen Rhetoric',
    school: 'St. Xavier’s Collegiate School',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Trinity Grade 5 Examination Wing',
    speechTopic: 'PowerPoint Argumentation & Flashcard-Assisted Live Delivery',
    quote: 'I prepared for one month with flashcards and PowerPoint presentations. The exam went pretty well. The examiner asked about the points where I focused and how I learned to structure my speeches.',
    achievement: 'Grade 5 Trinity Examination Completed · St. Xavier’s Collegiate School',
    avatarInitials: 'SN',
    accentColor: 'from-cyan-600 to-cyan-700',
    image: '/assets/testimonials/student_aaryan_chakraborty_cropped.jpg'
  },
  {
    id: 'st-raiyan',
    name: 'Raiyan Nawaz',
    ageOrGrade: 'Grade 5 · Trinity Advanced Track',
    school: 'Kolkata',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Trinity Grade 5 Cohort',
    speechTopic: 'Environmental Causes: Marine Pollution & Hard vs Soft News',
    quote: 'My first task was about preventing marine pollution, and my second was presenting hard news versus soft news broadcasts. The examiner was very supportive and helped draw out my best arguments.',
    achievement: 'Grade 5 Trinity Live Presentation & Media Analysis Completed',
    avatarInitials: 'RN',
    accentColor: 'from-teal-600 to-teal-700',
    image: '/assets/testimonials/student_rayan_nawaz_cropped.jpg'
  },
  {
    id: 'st-advik-9',
    name: 'Advik',
    ageOrGrade: 'Grade 5 · Public Speaking Track',
    school: 'Kolkata',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Trinity Grade 5 Cohort',
    speechTopic: 'Iterative Speech Refinement & Audience Feedback Integration',
    quote: 'The teachers helped me practice a lot and gave feedback which I developed upon. SpeakSmart helped me prepare the speech so much better from the first draft.',
    achievement: 'Grade 5 Speech & Communication Practical Examination Completed',
    avatarInitials: 'AD',
    accentColor: 'from-blue-600 to-blue-700',
    image: '/assets/testimonials/student_neel_jethwani_cropped.jpg'
  },
  {
    id: 'st-vivaan',
    name: 'Vivaan Srisrimal',
    ageOrGrade: 'Grade 4 · 3 Years at SpeakSmart',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 4 Examination Track',
    speechTopic: 'Mastery of Vocal Dynamics, Timing, and Stage Presence',
    quote: 'I have been practicing here for 3 years. The teachers helped me prepare and explained how vocal tools and physical actions should be used at the correct time. I confidently completed it!',
    achievement: 'Grade 4 Trinity Examination Completed with Confident Poise',
    avatarInitials: 'VS',
    accentColor: 'from-violet-600 to-violet-700',
    image: '/assets/testimonials/student_aahil_shivkumar_cropped.jpg'
  },
  {
    id: 'st-neel-12',
    name: 'Neel Jethwani',
    ageOrGrade: 'Grade 3 · Trinity Aspirant',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 3 Cohort',
    speechTopic: 'Overcoming Last-Minute Stage Fright & Pacing Delivery',
    quote: 'Before the exam I was quite nervous, but SpeakSmart provided extra classes during exam time which was really helpful! My advice: do not get too nervous because then you forget; speak with calm and joy.',
    achievement: 'Grade 3 Trinity Examination Completed with Natural Composure',
    avatarInitials: 'NJ',
    accentColor: 'from-amber-600 to-amber-700',
    image: '/assets/testimonials/student_sarthak_agarwal_cropped.jpg'
  },
  {
    id: 'st-kiyaan',
    name: 'Kiyaan Ahmed',
    ageOrGrade: 'Grade 3 · St. Xavier’s Collegiate School',
    school: 'St. Xavier’s Collegiate School',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Grade 3 Speech Cohort',
    speechTopic: 'Stage Breakthrough: From Fearful Beginner to Bold Speaker',
    quote: 'The exam was so awesome and absolutely delightful! First when I came in, I thought that I would not be able to do it and was so nervous. But now I am a confident speaker who can speak in public!',
    achievement: 'Transformed into an Outspoken Public Speaker · Friday Batch',
    avatarInitials: 'KA',
    accentColor: 'from-green-600 to-green-700',
    image: '/assets/testimonials/student_adhiraj_cropped.jpg'
  },
  {
    id: 'st-naira-2',
    name: 'Naira Khanna',
    ageOrGrade: 'Grade 1 · Budding Speaker',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Foundation',
    cohort: 'Grade 1 Early Communicators',
    speechTopic: 'Favorite Storybooks & Early Childhood Expression',
    quote: 'SpeakSmart is so nice—it teaches us everything to do, it never leaves anything! Practicing our speeches together was so much fun and my examiner was very sweet.',
    achievement: 'Grade 1 Speech Presentation Completed with Radiant Confidence',
    avatarInitials: 'NK',
    accentColor: 'from-rose-600 to-rose-700',
    image: '/assets/testimonials/student_anaya_cropped.jpg'
  },
  {
    id: 'st-kanvika',
    name: 'Kanvika Gupta',
    ageOrGrade: 'Teen Rhetoric Cohort',
    school: 'Kolkata',
    program: 'SpeakSmart Teen Communicators',
    cohort: 'Trinity Speech & Presentation Batch',
    speechTopic: 'Vocal Modulation: Pace, Emphasis, Phrasing & Strategic Pauses',
    quote: 'I reworked my speech multiple times until it clicked. Then Sreela Ma’am and Vishakha Ma’am helped me master vocal tools—pace, emphasis, phrasing, and pauses—giving me total command during my examination!',
    achievement: 'Mastered 4 Key Vocal Tools · Distinction Examination Delivery',
    avatarInitials: 'KG',
    accentColor: 'from-orange-600 to-orange-700',
    image: '/assets/testimonials/student_shreyan_cropped.jpg'
  },
  {
    id: 'st-pavika',
    name: 'Pavika Jaitha',
    ageOrGrade: 'Intermediate Speech Cohort',
    school: 'Kolkata',
    program: 'SpeakSmart Communication Wing',
    cohort: 'Trinity Live Presentation Cohort',
    speechTopic: 'Face-to-Face Evaluation & Conversational Presence',
    quote: 'Today was a great experience, I had so much fun! Communicating face-to-face with an examiner boosted my confidence so much. I enjoyed every bit of our preparation with our mentors.',
    achievement: 'Trinity College London Face-to-Face Live Evaluation Completed',
    avatarInitials: 'PJ',
    accentColor: 'from-purple-600 to-purple-700',
    image: '/assets/testimonials/student_shanaya_cropped.jpg'
  },
  {
    id: 'st-yuvaan',
    name: 'Yuvaan Nahata',
    ageOrGrade: 'Junior Reader & Speaker',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Speech Examination Batch',
    speechTopic: 'Geronimo Stilton, Book Reviews & Passion for 100+ Stories',
    quote: 'The examiner told me I did good! We talked about the books I read—Geronimo and Thea Stilton—and I told him I have read more than 100 books! It was so cool, I just felt like I’m on top of the world!',
    achievement: 'Awarded Star Sticker & Commendation for Literary Presentation',
    avatarInitials: 'YN',
    accentColor: 'from-yellow-600 to-yellow-700',
    image: '/assets/testimonials/student_advik_books_cropped.jpg'
  },
  {
    id: 'st-sampriti',
    name: 'Sampriti',
    ageOrGrade: 'Grade 4 · Speech & Drama',
    school: 'Kolkata',
    program: 'SpeakSmart Junior Communicators',
    cohort: 'Trinity Grade 4 Cohort',
    speechTopic: 'Balancing Busy School Calendars with Presentation Focus',
    quote: 'My exam was hectic and I was quite nervous because of school exams and annual day, but our mentors showed me that if I just focused with clarity, I could deliver seamlessly.',
    achievement: 'Grade 4 Trinity Presentation Completed with Poise',
    avatarInitials: 'SM',
    accentColor: 'from-teal-600 to-teal-700',
    image: '/assets/testimonials/student_kanika_cropped.jpg'
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
    programEnrolled: 'Junior Communicators Foundation',
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
        enforcement: 'Mandatory before batch allocation. Official link: https://forms.gle/amSFYJ7xTY1oi97u8'
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
    name: 'SpeakSmart Junior Communicators',
    ageRange: 'Ages 7 – 10 (Grades 2 – 5)',
    duration: '16-Week Semester · 2 hrs / week',
    focus: 'Overcoming Shyness, Vocal Projection, Creative Storytelling & Stage Body Language',
    batches: ['Saturday 09:30 AM – 11:30 AM', 'Sunday 10:00 AM – 12:00 PM', 'Tuesday 04:30 PM – 06:30 PM'],
    fee: '$480 / semester (Includes workbook, studio recordings & showcase entry)',
    badge: 'Foundation Speaking'
  },
  {
    id: 'prog-teen',
    name: 'SpeakSmart Teen Communicators',
    ageRange: 'Ages 11 – 14 (Grades 6 – 8)',
    duration: '16-Week Semester · 2.5 hrs / week',
    focus: 'Thought Architecture, Extempore Speaking, Class Presentations, Debate Basics & Interview Composure',
    batches: ['Saturday 01:00 PM – 03:30 PM', 'Sunday 02:00 PM – 04:30 PM', 'Thursday 05:00 PM – 07:30 PM'],
    fee: '$560 / semester (Includes studio diagnostics & mid-term jury)',
    badge: 'Core Speaking'
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
