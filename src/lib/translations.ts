export interface TranslationSet {
  seo: {
    title: string
    description: string
  }
  nav: {
    logo: string
    services: string
    stats: string
    testimonials: string
    calculator: string
    career: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trustInfo: string
  }
  stats: {
    sectionTitle: string
    sectionSubtitle: string
    reports: string
    reportsLabel: string
    patients: string
    patientsLabel: string
    turnaround: string
    turnaroundLabel: string
    accuracy: string
    accuracyLabel: string
  }
  services: {
    sectionTitle: string
    sectionSubtitle: string
    hospitalTitle: string
    hospitalSubtitle: string
    hospitalDesc: string
    hospitalBullet1: string
    hospitalBullet2: string
    hospitalBullet3: string
    hospitalBullet4: string
    hospitalCta: string
    patientTitle: string
    patientSubtitle: string
    patientDesc: string
    patientBullet1: string
    patientBullet2: string
    patientBullet3: string
    patientBullet4: string
    patientCta: string
    careerTitle: string
    careerSubtitle: string
    careerDesc: string
    careerBullet1: string
    careerBullet2: string
    careerBullet3: string
    careerBullet4: string
    careerCta: string
  }
  calculator: {
    sectionTitle: string
    sectionSubtitle: string
    scanType: string
    mri: string
    ct: string
    xray: string
    monthlyVolume: string
    scansMonth: string
    timeSaved: string
    timeSavedDesc: string
    capacityBoost: string
    capacityBoostDesc: string
    cta: string
  }
  testimonials: {
    sectionTitle: string
    sectionSubtitle: string
    list: Array<{
      name: string
      role: string
      organization: string
      country: string
      text: string
    }>
  }
  careerForm: {
    sectionTitle: string
    sectionSubtitle: string
    name: string
    email: string
    phone: string
    country: string
    subspecialties: string
    subspecialtiesList: string[]
    cvUpload: string
    cvDragDrop: string
    cvUploaded: string
    submit: string
    submitting: string
    successTitle: string
    successDesc: string
    anotherSubmission: string
  }
  contactForm: {
    sectionTitle: string
    sectionSubtitle: string
    name: string
    email: string
    phone: string
    message: string
    submit: string
    successTitle: string
    successDesc: string
    hospitalOption: string
    patientOption: string
    otherOption: string
    iAmA: string
  }
  contactInfo: {
    title: string
    subtitle: string
    egyptOffice: string
    egyptOfficeVal: string
    gulfRegion: string
    gulfRegionVal: string
    emailLabel: string
    emailVal: string
    whatsappLabel: string
    whatsappVal: string
    telegramLabel: string
    telegramVal: string
    facebookLabel: string
    facebookVal: string
  }
  faqs: {
    sectionTitle: string
    sectionSubtitle: string
    list: Array<{
      q: string
      a: string
    }>
  }
  footer: {
    tagline: string
    coverage: string
    rights: string
  }
}

export const translations: Record<"en" | "ar", TranslationSet> = {
  en: {
    seo: {
      title: "TeleRad Global | 24/7 Teleradiology Reporting Services",
      description:
        "Premium 24/7 teleradiology coverage for hospitals and radiology centers across Egypt, the Gulf, Iraq, Yemen, Libya,  Somalia, and Africa. Subspecialized reads in under 90 minutes from experienced consultants.",
    },
    nav: {
      logo: "TeleRad Global",
      services: "Our Services",
      stats: "Platform Stats",
      testimonials: "Testimonials",
      calculator: "Savings Calculator",
      career: "Radiologists Career",
      contact: "Contact Us",
    },
    hero: {
      badge: "⚡ 24/7 Premium Teleradiology & Telereporting Services",
      title: "Fast, Subspecialized",
      titleHighlight: "Radiology Reporting",
      subtitle:
        "Empowering small hospitals and radiology centers in Egypt, the Gulf, Iraq, and Africa with secure, ultra-fast, expert radiological interpretation within 2 hours. Driven by world-class Egyptian consultants.",
      ctaPrimary: "Request Center Partner Package",
      ctaSecondary: "Get a Scan Read (Second Opinion)",
      trustInfo:
        "✓ PACS/DICOM Integrated | ✓ Joint Commission Compliant Protocol | ✓ No Setup Fee or minimums",
    },
    stats: {
      sectionTitle: "Teleradiology in Numbers",
      sectionSubtitle:
        "Empirical proof of our rigorous operational scale and medical reporting speed",
      reports: "10,000+",
      reportsLabel: "Verified Reports Written",
      patients: "24/7",
      patientsLabel: "Reporting Service Uptime",
      turnaround: "90 Minutes",
      turnaroundLabel: "Turnaround Time (TAT) \n for urgent cases",
      accuracy: "99.8%",
      accuracyLabel: "Medical Quality Accuracy",
    },
    services: {
      sectionTitle: "Tailored Teleradiology Services",
      sectionSubtitle:
        "Expert solutions designed for clinics, hospitals, individuals, and diagnostic centers",
      hospitalTitle: "Hospitals & Radiology Centers",
      hospitalSubtitle: "Flexible Teleradiology Solutions",
      hospitalDesc:
        "Comprehensive reporting support for clinical workflows. We act as your extended diagnostic department, ensuring no scan lies unread.",
      hospitalBullet1:
        "Full or partial reporting of your daily imaging workload (MRI, CT, X-Ray, Mammogram, Ultrasound).",
      hospitalBullet2:
        "On-demand night shifts, weekend reporting, and overflow support to eliminate bottlenecks.",
      hospitalBullet3:
        "Subspecialized consultants (Neuroradiology, MSK, Pediatrics, Cardiopulmonary).",
      hospitalBullet4:
        "Zero-footprint HTML5 DICOM viewer and rapid cloud PACS synchronization.",
      hospitalCta: "Connect Your Center via WhatsApp",

      patientTitle: "Individual Patients",
      patientSubtitle: "Expert Radiology Second Opinion",
      patientDesc:
        "Gain clinical clarity on your medical scans. Have your MRI, CT, or X-Ray re-read by Egypt's top subspecialized radiology consultants.",
      patientBullet1:
        "Clear, understandable reports translated into easy-to-read English or Arabic.",
      patientBullet2:
        "Meticulous correlation of clinical history with imaging findings.",
      patientBullet3:
        "Confidential, double-blinded expert consultation without long waiting lists.",
      patientBullet4:
        "Secure file link upload (GDrive, Dropbox, WeTransfer) with 24-hour turnaround.",
      patientCta: "Upload Scan & Consult Rep",

      careerTitle: "Radiologists Wanted",
      careerSubtitle: "Join Egypt's Elite Diagnostic Team",
      careerDesc:
        "Are you a certified radiologist with a clear subspeciality? Work remotely with a premier network servicing patients across the Gulf and Africa.",
      careerBullet1:
        "State-of-the-art WebPACS workstation accessible securely from anywhere.",
      careerBullet2:
        "Flexible reporting workloads that easily fit your active schedule.",
      careerBullet3:
        "Competitive, reliable pay-per-case structure directly in USD/SAR.",
      careerBullet4:
        "Continuous peer-review learning from top teleradiology leaders.",
      careerCta: "Fill Out Joining Form Below",
    },
    calculator: {
      sectionTitle: "Diagnostic Efficiency Calculator",
      sectionSubtitle:
        "Estimate how much reporting time and clinical capacity your facility can gain using TeleRad Global",
      scanType: "Primary Scan Type",
      mri: "MRI (Resonance)",
      ct: "CT (Tomography)",
      xray: "X-Ray / Ultrasound",
      monthlyVolume: "Estimated Monthly Scan Volume",
      scansMonth: "scans/month",
      timeSaved: "Hours Saved per Month",
      timeSavedDesc:
        "Reallocated from typing and manual dictation back to primary clinical patient care.",
      capacityBoost: "Reporting Capacity Boost",
      capacityBoostDesc:
        "Estimated increase in active scan intake without hiring additional full-time on-site staff.",
      cta: "Instantly Claim Your Partner Rate via WhatsApp",
    },
    testimonials: {
      sectionTitle: "Trusted by Clinical Leaders",
      sectionSubtitle:
        "Read how medical centers, clinics, and hospitals across the region achieve fast diagnostic turnarounds",
      list: [
        {
          name: "Dr. Ahmed Al-Shammari",
          role: "Director of Radiology",
          organization: "Al-Hayat Medical Center",
          country: "Riyadh, Saudi Arabia 🇸🇦",
          text: "TeleRad Global transformed our night-shift reporting. Their subspecialized Neuroradiology reports are delivered in less than 90 minutes. Our clinicians are incredibly satisfied with the depth and clarity of the findings, which has directly elevated our hospital's reputation.",
        },
        {
          name: "Dr. Mayada El-Fayoumi",
          role: "Chief Operating Officer",
          organization: "Nile Diagnostic Group",
          country: "Cairo, Egypt 🇪🇬",
          text: "We faced a severe backup in our MRI workload after our primary radiologist went on leave. TeleRad Global stepped in seamlessly. They set up PACS integration within 2 hours, and reported over 450 backlogged cases in 3 days with exceptional diagnostic precision.",
        },
        {
          name: "Dr. Tareq Al-Barzani",
          role: "Clinical Administrator",
          organization: "Kurdistan General Hospital",
          country: "Erbil, Iraq 🇮🇶",
          text: "For a medical center in Erbil, finding subspecialized pediatric radiologists is a massive challenge. TeleRad Global gives us instant access to elite consultants in Egypt. Highly recommended for any hospital looking to enhance reporting legitimacy.",
        },
      ],
    },
    careerForm: {
      sectionTitle: "Radiologist Recruitment Portal",
      sectionSubtitle:
        "Submit your subspecialties and CV to join our expanding clinical reporting team",
      name: "Full Name (English / Arabic)",
      email: "Email Address",
      phone: "WhatsApp Number (with Country Code)",
      country: "Country of Residence",
      subspecialties: "Radiology Subspecialties (Select all that apply)",
      subspecialtiesList: [
        "Neuroradiology (Brain & Spine)",
        "Musculoskeletal (MSK)",
        "Cardiopulmonary (Thoracic)",
        "Abdominal & Pelvic Imaging",
        "Pediatric Radiology",
        "Women's Imaging & Breast",
        "Emergency / General Reporting",
        "Nuclear Medicine & PET-CT",
      ],
      cvUpload: "Upload Professional CV / Resume (PDF, DOCX)",
      cvDragDrop: "Drag and drop your CV file here, or click to browse",
      cvUploaded: "CV File Prepared",
      submit: "Submit Application",
      submitting: "Processing Submission...",
      successTitle: "Application Successfully Received!",
      successDesc:
        "Our medical director will review your clinical subspecialties. To expedite your onboarding, you can instantly message our recruitment coordinator on WhatsApp with your CV reference.",
      anotherSubmission: "Submit another application",
    },
    contactForm: {
      sectionTitle: "Get a Custom Quote Instantly",
      sectionSubtitle:
        "Send a request and our regional representatives will contact you within 15 minutes",
      name: "Contact Name / Hospital Name",
      email: "Business Email",
      phone: "Phone Number (with WhatsApp)",
      message:
        "How can we support your radiology workflow? (e.g., daily volume, modalities)",
      submit: "Submit Request",
      successTitle: "Inquiry Sent Successfully!",
      successDesc:
        "Thank you for reaching out. We have logged your request. For immediate response, please click the WhatsApp button to initiate a direct chat with our regional sales lead.",
      hospitalOption: "Hospital / Radiology Center Owner",
      patientOption: "Individual Patient (Scan Read)",
      otherOption: "Other Inquiry",
      iAmA: "I am a...",
    },
    contactInfo: {
      title: "Direct Channels",
      subtitle:
        "Skip the forms and get in touch with our operations desk directly, available 24/7/365",
      egyptOffice: "Egypt & North Africa Desk",
      egyptOfficeVal: "+20 100 812 5634",
      gulfRegion: "Gulf, Iraq & Middle East Coordinator",
      gulfRegionVal: "+966 50 123 4567 (WhatsApp)",
      emailLabel: "Clinical Email Desk",
      emailVal: "operations@teleradglobal.com",
      whatsappLabel: "Official WhatsApp",
      whatsappVal: "Start Direct Chat",
      telegramLabel: "Official Telegram",
      telegramVal: "@TeleRadGlobalSupport",
      facebookLabel: "Official Facebook Page",
      facebookVal: "facebook.com/TeleRadGlobal",
    },
    faqs: {
      sectionTitle: "Frequently Asked Questions (SEO FAQs)",
      sectionSubtitle:
        "Answers to common operational inquiries from regional hospital directors and clinics",
      list: [
        {
          q: "What is your typical turnaround time (TAT) for reports?",
          a: "Our standard turnaround time is under 2 hours. For emergency (STAT) cases, we deliver high-priority reports in less than 30 minutes. We operate 24 hours a day, 365 days a year, including all national holidays in Egypt and the Gulf.",
        },
        {
          q: "How does the cloud DICOM / PACS integration work?",
          a: "Integration is extremely straightforward and secure. We support direct PACS routing, auto-upload routers, or secure web-based uploads. Your IT team can connect your scanner or PACS to our secure gateway in under 20 minutes with zero downtime.",
        },
        {
          q: "Are the reports written by certified specialists?",
          a: "Yes. Every report is compiled and signed by an elite, board-certified Egyptian consultant radiologist who specializes in the specific modality or body area (e.g. Neuroradiology, MSK). Additionally, we implement a double-read Quality Assurance protocol on all cases.",
        },
        {
          q: "Do you offer teleradiology services to individual patients?",
          a: "Absolutely. Patients who have undergone a scan (MRI, CT, Ultrasound) and need a reliable second opinion can upload their files securely. We provide a comprehensive report within 24 hours written in professional clinical terms with a simple, clear explanation.",
        },
        {
          q: "Is there an upfront setup fee or minimum contract volume?",
          a: "No. There are no setup fees or hidden costs. We provide a flexible pay-per-case structure that is ideal for small hospitals and radiology centers that have variable daily workloads or need backup coverage.",
        },
      ],
    },
    footer: {
      tagline:
        "Sleek, trusted, and highly accurate medical imaging reporting at your fingertips.",
      coverage:
        "Proudly serving Egypt, Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain, Iraq, Libya, Somalia, and East Africa.",
      rights:
        "© 2026 TeleRad Global. All rights reserved. Professional Teleradiology Solutions.",
    },
  },
  ar: {
    seo: {
      title: "تيلي راد جلوبال | خدمات كتابة تقارير الأشعة عن بعد 24/7",
      description:
        "تغطية تيليراديولوجي متميزة على مدار الساعة للمستشفيات ومراكز الأشعة في مصر والخليج والعراق وليبيا والصومال. تقارير متكاملة خلال أقل من تسعين دقيقة من استشاريين خبراء معتمدين.",
    },
    nav: {
      logo: "تيلي راد جلوبال",
      services: "خدماتنا المتميزة",
      stats: "إحصائيات المنصة",
      testimonials: "آراء عملائنا",
      calculator: "حاسبة التوفير",
      career: "وظائف الأطباء",
      contact: "اتصل بنا",
    },
    hero: {
      badge:
        "⚡ خدمات تيلي راديولوجي وكتابة تقارير الأشعة عن بعد على مدار الساعة",
      title: "تقارير أشعة تخصصية فائقة",
      titleHighlight: "السرعة والدقة",
      subtitle:
        "نمكن المستشفيات الصغيرة ومراكز الأشعة في مصر، الخليج، اليمن, العراق، وإفريقيا من الحصول على تقارير تشخيصية معتمدة من نخبة من الاستشاريين في أقل من تسعين وبأعلى معايير الأمان.",
      ctaPrimary: "طلب باقة الشراكة للمراكز والمستشفيات",
      ctaSecondary: "طلب قراءة أشعة (رأي طبي ثانٍ)",
      trustInfo:
        "✓ حلول مختلفة لبنية PACS/DICOM | ✓ نظام جودة مزدوج متكامل | ✓ بدون رسوم تأسيس أو حد أدنى",
    },
    stats: {
      sectionTitle: "التيلي راديولوجي في أرقام",
      sectionSubtitle:
        "أدلة واقعية على حجم أعمالنا التشغيلية وسرعة كتابة التقارير الطبية",
      reports: "10,000+",
      reportsLabel: "تقرير أشعة تشخيصي",
      patients: "24/7",
      patientsLabel: "تقارير على مدار اليوم",
      turnaround: "90 دقيقة",
      turnaroundLabel: "وقت كتابة و تسليم\n التقارير العاجلة  (TAT)",
      accuracy: "99.8%",
      accuracyLabel: "ضمان دقة التشخيص الطبي",
    },
    services: {
      sectionTitle: "خدمات أشعة عن بعد متكاملة",
      sectionSubtitle:
        "حلول احترافية مصممة خصيصاً للمراكز الطبية، المستشفيات، الأفراد، وأطباء الأشعة",
      hospitalTitle: "المستشفيات ومراكز الأشعة",
      hospitalSubtitle: "حلول تيلي راديولوجي متكاملة و مرنة",
      hospitalDesc:
        "دعم شامل ومتكامل لكافة أعمال كتابة تقارير الأشعة بمؤسستكم. نعتبر امتداداً لقسم الأشعة الخاص بكم لضمان عدم تأخر أي حالة.",
      hospitalBullet1:
        "كتابة تقارير كاملة أو جزئية لحالاتكم اليومية (رنين مغناطيسي، أشعة مقطعية، أشعة عادية، ماموجرام، سونار).",
      hospitalBullet2:
        "تغطية كاملة للنوبتجيات الليلية، الإجازات الرسمية، وفترات ضغط العمل الزائد.",
      hospitalBullet3:
        "تقارير بواسطة استشاريين مصريين متخصصين (أشعة عصبية، عظام، أطفال، قلب وصدر).",
      hospitalBullet4:
        "ربط سحابي مجاني وسريع مع أنظمة الـ PACS لتبادل الصور والبيانات الطبية بأمان تام.",
      hospitalCta: "تواصل لربط مركزك عبر واتساب",

      patientTitle: "الأفراد والمرضى",
      patientSubtitle: "رأي طبي ثانٍ من كبار الاستشاريين",
      patientDesc:
        "احصل على الطمأنينة والوضوح الكامل بخصوص فحوصاتك الطبية. أرسل أشعتك ليتم مراجعتها وكتابة تقريرها بواسطة نخبة من استشاريي مصر.",
      patientBullet1:
        "تقارير مفصلة ودقيقة باللغة العربية أو الإنجليزية بأسلوب طبي مفهوم للمريض وعائلته.",
      patientBullet2:
        "ربط دقيق بين التاريخ المرضي والأعراض وبين نتائج الأشعة المصورة.",
      patientBullet3:
        "استشارات طبية عالية السرية دون الحاجة للانتظار في قوائم مراجعة طويلة.",
      patientBullet4:
        "طريقة رفع سهلة للغاية للملفات (جوجل درايف، دروب بوكس، وي ترانسفير) وتوصيل خلال 24 ساعة.",
      patientCta: "ارفع أشعتك واستشر ممثلنا الآن",

      careerTitle: "فرص لأطباء الأشعة",
      careerSubtitle: "انضم لأكبر شبكة تشخيص رقمي بمصر",
      careerDesc:
        "هل أنت طبيب أشعة استشاري أو أخصائي متميز ولديك تخصص دقيق؟ اعمل بمرونة كاملة من منزلك مع منصة تخدم دول الخليج وإفريقيا.",
      careerBullet1:
        "محطة عمل متطورة تعتمد على الويب (WebPACS) تمكنك من العمل بأمان وسهولة.",
      careerBullet2:
        "مرونة مطلقة في تحديد عدد الحالات ومواعيد كتابة التقارير التي تناسب جدولك.",
      careerBullet3:
        "عوائد مادية ممتازة ومجزية تحسب بدقة لكل حالة وتدفع مباشرة بالدولار أو الريال السعودي.",
      careerBullet4:
        "تطوير مهني مستمر من خلال نظام المراجعة والتدقيق والتعاون مع كبار الأطباء.",
      careerCta: "ملء استمارة انضمام الأطباء بالأسفل",
    },
    calculator: {
      sectionTitle: "حاسبة الكفاءة والإنتاجية الطبية",
      sectionSubtitle:
        "احسب الوقت والقدرة الاستيعابية التي يمكن لمركزك أو مستشفاك توفيرها عند التعاون معنا",
      scanType: "نوع الفحص الرئيسي",
      mri: "رنين مغناطيسي (MRI)",
      ct: "أشعة مقطعية (CT Scan)",
      xray: "أشعة عادية / موجات فوق صوتية",
      monthlyVolume: "عدد الفحوصات الشهري التقريبي",
      scansMonth: "فحص / شهرياً",
      timeSaved: "ساعة عمل نوفرها شهرياً",
      timeSavedDesc:
        "ساعات عمل يتم توفيرها لإعادة توجيه فريقك الطبي لرعاية المرضى بدلاً من إملاء وكتابة التقارير يدوياً.",
      capacityBoost: "زيادة الاستيعاب التشغيلي",
      capacityBoostDesc:
        "زيادة متوقعة في استقبال حالات أشعة جديدة دون الحاجة لتوظيف أطباء أشعة إضافيين بدوام كامل.",
      cta: "احصل على تسعيرة مركزك فوراً عبر واتساب",
    },
    testimonials: {
      sectionTitle: "ثقة المؤسسات الطبية بالمنطقة",
      sectionSubtitle:
        "اقرأ تجارب حقيقية لمستشفيات ومراكز أشعة في الخليج ومصر طورت من دقتها بفضل خدماتنا",
      list: [
        {
          name: "د. أحمد الشمري",
          role: "مدير قسم الأشعة",
          organization: "مركز الحياة الطبي",
          country: "الرياض، المملكة العربية السعودية 🇸🇦",
          text: "غيرت خدمات تيلي راد جلوبال مسار العمل لدينا في النوبتجيات الليلية بشكل كامل. تقارير الأشعة العصبية تصلنا بدقة مذهلة في أقل من 90 دقيقة. الأطباء المعالجون لدينا في غاية الرضا والامتنان لسرعة وجودة التقارير التشخيصية.",
        },
        {
          name: "د. ميادة الفيومي",
          role: "المدير التنفيذي للعمليات",
          organization: "مجموعة النيل التشخيصية",
          country: "القاهرة، جمهورية مصر العربية 🇪🇬",
          text: "واجهنا تراكماً كبيراً في حالات الرنين المغناطيسي بعد سفر طبيبنا الأساسي. تدخلت تيلي راد جلوبال بسرعة فائقة، وتم الربط مع نظام الـ PACS الخاص بنا في غضون ساعتين فقط، وقاموا بكتابة تقارير لأكثر من 450 حالة متراكمة خلال 3 أيام بدقة تامة.",
        },
        {
          name: "د. طارق البرزاني",
          role: "المدير الإداري والطبي",
          organization: "مستشفى كردستان العام",
          country: "أربيل، العراق 🇮🇶",
          text: "في مدينة أربيل، يمثل العثور على أطباء أشعة متخصصين في أشعة الأطفال تحدياً كبيراً جداً. تيلي راد جلوبال منحتنا وصولاً فورياً لنخبة من الاستشاريين المرموقين في مصر. نوصي بشدة بالتعامل معهم لكل مستشفى يبحث عن الاحترافية.",
        },
      ],
    },
    careerForm: {
      sectionTitle: "بوابة انضمام أطباء الأشعة",
      sectionSubtitle:
        "قدم تخصصاتك الطبية وسيرتك الذاتية للانضمام إلى فريق كتابة التقارير المتخصص لدينا",
      name: "الاسم الكامل (ثنائي أو ثلاثي)",
      email: "البريد الإلكتروني",
      phone: "رقم الواتساب (مع رمز الدولة)",
      country: "بلد الإقامة الحالي",
      subspecialties: "التخصصات الدقيقة في الأشعة (يمكنك اختيار أكثر من تخصص)",
      subspecialtiesList: [
        "أشعة الجهاز العصبي والعمود الفقري",
        "أشعة الجهاز الحركي والعظام (MSK)",
        "أشعة الصدر والقلب والأوعية الدموية",
        "أشعة البطن والحوض والجهاز الهضمي",
        "أشعة الأطفال والرضع",
        "أشعة المرأة وتصوير الثدي (ماموجرام)",
        "أشعة الطوارئ والتقارير العامة السريعة",
        "الطب النووي والتصوير البوزيتروني (PET-CT)",
      ],
      cvUpload: "ارفع سيرتك الذاتية / ملف الخبرات (PDF, DOCX)",
      cvDragDrop: "اسحب وأسقط ملف السيرة الذاتية هنا، أو انقر للتصفح من جهازك",
      cvUploaded: "تم تجهيز ملف السيرة الذاتية",
      submit: "إرسال طلب الانضمام",
      submitting: "جاري معالجة طلبك...",
      successTitle: "تم استلام طلب الانضمام بنجاح!",
      successDesc:
        "سيقوم المدير الطبي بمراجعة تخصصاتك وسيرتك الذاتية بعناية فائقة. لتسريع عملية التفعيل، يمكنك إرسال سيرتك الذاتية مباشرة إلى منسق التوظيف لدينا عبر واتساب.",
      anotherSubmission: "تقديم طلب آخر",
    },
    contactForm: {
      sectionTitle: "احصل على عرض أسعار مخصص لمركزك",
      sectionSubtitle:
        "أرسل تفاصيل فحصك أو متطلبات مركزك وسيتواصل معك ممثلنا الإقليمي في غضون 15 دقيقة",
      name: "اسم جهة الاتصال / اسم المستشفى والمستوصف",
      email: "البريد الإلكتروني للعمل",
      phone: "رقم الهاتف والواتساب",
      message:
        "كيف يمكننا دعم قسم الأشعة لديكم؟ (مثال: الحجم اليومي، أنواع الأجهزة، أوقات التغطية المطلوبة)",
      submit: "إرسال الطلب",
      successTitle: "تم إرسال طلبك بنجاح!",
      successDesc:
        "شكرًا لتواصلك معنا. لقد قمنا بتسجيل طلبك في نظام الدعم الطبي. للحصول على رد فوري ومباشر، يرجى النقر على زر الواتساب لبدء محادثة مباشرة مع مسؤول المبيعات الإقليمي.",
      hospitalOption: "صاحب مستشفى / مركز أشعة",
      patientOption: "مريض يرغب في قراءة أشعة (رأي ثانٍ)",
      otherOption: "استفسار آخر عام",
      iAmA: "أنا...",
    },
    contactInfo: {
      title: "قنوات الاتصال المباشرة",
      subtitle:
        "تواصل مباشرة مع مكتب العمليات والمتابعة الطبية لدينا، متواجدون على مدار الساعة 24/7/365",
      egyptOffice: "مكتب مصر وشمال إفريقيا",
      egyptOfficeVal: "+20 100 812 5634",
      gulfRegion: "منسق منطقة الخليج، العراق والشرق الأوسط",
      gulfRegionVal: "+966 50 123 4567 (واتساب المبيعات)",
      emailLabel: "البريد الإلكتروني للعمليات الطبية",
      emailVal: "operations@teleradglobal.com",
      whatsappLabel: "محادثة واتساب الرسمية",
      whatsappVal: "ابدأ محادثة فورية الآن",
      telegramLabel: "حساب تليجرام الرسمي",
      telegramVal: "@TeleRadGlobalSupport",
      facebookLabel: "صفحتنا الرسمية على فيسبوك",
      facebookVal: "facebook.com/TeleRadGlobal",
    },
    faqs: {
      sectionTitle: "الأسئلة الشائعة ومحركات البحث (SEO)",
      sectionSubtitle:
        "إجابات وافية على كافة التساؤلات التشغيلية من مدراء المستشفيات وأصحاب المراكز",
      list: [
        {
          q: "ما هو الوقت المستغرق لكتابة وتسليم تقارير الأشعة؟",
          a: "الوقت القياسي المعتاد لدينا هو أقل من ساعتين لجميع الحالات العادية. أما بالنسبة لحالات الطوارئ والإنقاذ (STAT)، فإننا نقوم بتسليم التقارير التخصصية فائقة السرية في أقل من 30 دقيقة. نعمل على مدار 24 ساعة يومياً، طوال أيام السنة بما في ذلك العطلات الرسمية والأعياد.",
        },
        {
          q: "كيف تتم عملية الربط الإلكتروني السحابي مع أجهزتنا الطبية؟",
          a: "عملية الربط سهلة للغاية وآمنة تماماً. ندعم الربط المباشر لشبكات الـ PACS، أو برامج الإرسال التلقائي، أو الرفع المباشر البسيط عبر الويب. يستطيع فريق تكنولوجيا المعلومات لديكم ربط جهاز الأشعة بالسيرفر الآمن الخاص بنا في أقل من 20 دقيقة وبدون أي توقف للعمل.",
        },
        {
          q: "هل التقارير يكتبها أطباء أشعة استشاريون معتمدون؟",
          a: "نعم وبلا شك. كل تقرير طبي يتم كتابته وتوقيعه بواسطة استشاري أشعة مصري حاصل على الزمالة أو الدكتوراه ومتخصص بدقة في فحص الحالة (مثل استشاري أشعة عصبية لفحص الرأس). بالإضافة إلى خضوع كافة التقارير لنظام الجودة والتدقيق المزدوج قبل الإرسال.",
        },
        {
          q: "هل تقدمون خدمات قراءة الأشعة للأفراد والمرضى؟",
          a: "نعم، نقدم خدمة مخصصة للمرضى الراغبين في الحصول على رأي طبي ثانٍ وموثوق لأشعتهم (الرنين، المقطعية، السونار وغيرها). يمكن للمريض رفع الأشعة والحصول على تقرير طبي استشاري تفصيلي ومبسط في غضون 24 ساعة بخصوص حالته.",
        },
        {
          q: "هل توجد أي رسوم تأسيس أو حد أدنى لعدد الحالات شهرياً؟",
          a: "لا، لا توجد أي رسوم خفية أو مصاريف تأسيس أولية للربط الإلكتروني. نوفر لعملائنا الكرام نظام محاسبة مرن ومريح للغاية يدفع بالحالة (Pay-per-case)، وهو مثالي جداً للمستشفيات والمراكز الصغيرة والمتوسطة التي تتغير لديها أحجام العمل اليومية.",
        },
      ],
    },
    footer: {
      tagline:
        "تقارير طبية احترافية، فائقة السرعة، وبأعلى درجات الدقة التشخيصية بين يديك.",
      coverage:
        "نخدم بكل فخر عملائنا في مصر، المملكة العربية السعودية، الإمارات العربية المتحدة، قطر، الكويت، سلطنة عمان، البحرين، العراق، ليبيا، الصومال، وشرق إفريقيا.",
      rights:
        "© 2026 تيلي راد جلوبال. جميع الحقوق محفوظة لشركة تيلي راد لتشخيص الأشعة وكتابة التقارير الطبية عن بعد.",
    },
  },
}
