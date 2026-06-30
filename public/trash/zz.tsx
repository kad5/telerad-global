import React, { useState, useEffect, useRef } from "react"
import {
  Languages,
  Activity,
  Award,
  FileText,
  Users,
  Clock,
  ShieldCheck,
  Building2,
  UserCheck,
  Briefcase,
  Calculator,
  Check,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  UploadCloud,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  MessageSquare,
  Sparkles,
  User,
  FileCheck,
  ExternalLink,
  //Facebook,
  Send,
} from "lucide-react"
import { Link } from "@tanstack/react-router"
import { translations } from "@/lib/translations"

interface MarketingPageProps {
  // lang is now driven by the route (/ar or /en), not client state.
  // This is what makes each language a real, crawlable, indexable URL.
  lang: "ar" | "en"
}

export default function MarketingPage({ lang }: MarketingPageProps) {
  const [activeTab, setActiveTab] = useState<"hospital" | "patient" | "career">(
    "hospital"
  )

  // FAQs Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Interactive Calculator State
  const [scanType, setScanType] = useState<"mri" | "ct" | "xray">("mri")
  const [scanVolume, setScanVolume] = useState<number>(350)

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    userType: "hospital",
  })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

  // Career Form State
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    selectedSubspecialties: [] as string[],
  })
  const [cvFile, setCvFile] = useState<{ name: string; size: string } | null>(
    null
  )
  const [cvUploading, setCvUploading] = useState(false)
  const [careerSubmitting, setCareerSubmitting] = useState(false)
  const [careerSuccess, setCareerSuccess] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragOver, setIsDragOver] = useState(false)

  useEffect(() => {
    // dir/lang are also set server-side in the route's `head()`, so this is
    // really just a client-side safety net for client-side route transitions
    // before the next full head update lands.
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]
  const isRtl = lang === "ar"
  const fontClass = isRtl ? "font-cairo" : "font-sans"

  // Calculator Multipliers (Hours saved per scan)
  const timePerScan = {
    mri: 0.65, // MRI reporting is complex (takes ~40 mins of manual work, dictating, editing)
    ct: 0.45, // CT reporting takes ~27 mins
    xray: 0.15, // Xray / Ultrasound takes ~9 mins
  }

  const calculatedTimeSaved = Math.round(scanVolume * timePerScan[scanType])
  // Capacity boost: equivalent to doing 40% more caseload securely due to optimized workflows
  const calculatedCapacityBoost = Math.round(scanVolume * 0.45)

  // Language switching is now a real route navigation (see the <Link> in the
  // header below) rather than client state, so there's no toggle handler here.

  // Form handlers
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.phone) {
      alert(
        isRtl
          ? "يرجى ملء الاسم ورقم الهاتف على الأقل."
          : "Please fill in at least the Name and Phone Number."
      )
      return
    }
    setContactSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setContactSubmitting(false)
      setContactSuccess(true)
    }, 1200)
  }

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!careerForm.name || !careerForm.phone || !cvFile) {
      alert(
        isRtl
          ? "يرجى ملء الاسم ورقم الهاتف ورفع السيرة الذاتية."
          : "Please fill in Name, Phone and Upload your CV."
      )
      return
    }
    setCareerSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setCareerSubmitting(false)
      setCareerSuccess(true)
    }, 1500)
  }

  const handleSubspecialtyToggle = (sub: string) => {
    setCareerForm((prev) => {
      const current = prev.selectedSubspecialties
      if (current.includes(sub)) {
        return {
          ...prev,
          selectedSubspecialties: current.filter((s) => s !== sub),
        }
      } else {
        return { ...prev, selectedSubspecialties: [...current, sub] }
      }
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCvUploading(true)
      setTimeout(() => {
        setCvFile({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        })
        setCvUploading(false)
      }, 1000)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setCvUploading(true)
      setTimeout(() => {
        setCvFile({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        })
        setCvUploading(false)
      }, 1000)
    }
  }

  // Helper to generate direct WhatsApp message links for leads
  const getWhatsAppLink = (
    type: "general" | "calculator" | "hospital" | "patient" | "career"
  ) => {
    const phone = "201008125634" // Egypt Operations Desk
    let text = ""

    if (type === "general") {
      text = isRtl
        ? "أهلاً تيلي راد جلوبال، أود الاستفسار عن خدمات كتابة تقارير الأشعة عن بعد لمركزنا."
        : "Hello TeleRad Global, I would like to inquire about teleradiology reporting services for our center."
    } else if (type === "calculator") {
      text = isRtl
        ? `مرحباً، قمت باستخدام حاسبة التوفير لمركزنا بحجم فحص شهري يبلغ ${scanVolume} فحص لـ ${scanType === "mri" ? "الرنين المغناطيسي" : scanType === "ct" ? "الأشعة المقطعية" : "الأشعة العادية"}. أود الحصول على باقة أسعار مخصصة لمركزنا.`
        : `Hello, I used the savings calculator for our center with a monthly volume of ${scanVolume} ${scanType.toUpperCase()} scans. I would like to get a custom pricing package.`
    } else if (type === "hospital") {
      text = isRtl
        ? "أهلاً، أنا صاحب مستشفى/مركز أشعة وأود مناقشة عقد شراكة لكتابة تقارير الأشعة وتغطية النوبتجيات."
        : "Hello, I am a hospital/radiology center director and would like to discuss a reporting partnership."
    } else if (type === "patient") {
      text = isRtl
        ? "مرحباً، أود الحصول على قراءة لتقرير الأشعة الخاص بي (رأي طبي ثانٍ)."
        : "Hello, I would like to get a second opinion diagnostic read on my radiological scan."
    } else if (type === "career") {
      text = isRtl
        ? `مرحباً، أنا طبيب أشعة وأود الانضمام لشبكة كتابة التقارير الخاصة بكم. اسمي: ${careerForm.name || "طبيب أشعة"} - هاتف: ${careerForm.phone || ""}.`
        : `Hello, I am a radiologist interested in joining your network. My name: ${careerForm.name || "Radiologist"} - Phone: ${careerForm.phone || ""}.`
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  }

  return (
    <div
      className={`min-h-screen ${fontClass} bg-slate-50 text-slate-800 transition-colors duration-300`}
    >
      {/* Top Banner announcing global coverage */}
      <div className="flex items-center justify-center gap-2 border-b border-brand-800 bg-brand-900 px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
        <span>
          {isRtl
            ? "تغطية تيليراديولوجي متميزة تخدم الخليج العربي ومصر والعراق وليبيا والصومال وشرق إفريقيا على مدار الساعة 24/7"
            : "Premium 24/7 Teleradiology coverage serving the Gulf, Egypt, Iraq, Libya, Somalia, and East Africa"}
        </span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md transition-all">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-colors group-hover:bg-brand-700">
              <Activity className="h-5.5 w-5.5 text-white" />
            </div>
            <div>
              <span className="block text-lg leading-none font-bold tracking-tight text-slate-900">
                {t.nav.logo}
              </span>
              <span className="mt-1 block text-[10px] font-medium tracking-wide text-brand-600 uppercase">
                {isRtl ? "تشخيص الأشعة عن بعد" : "Premium Radiology Reporting"}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex xl:gap-8">
            <a
              href="#services"
              className="py-2 transition-colors hover:text-brand-600"
            >
              {t.nav.services}
            </a>
            <a
              href="#stats"
              className="py-2 transition-colors hover:text-brand-600"
            >
              {t.nav.stats}
            </a>
            <a
              href="#calculator"
              className="rounded-lg border border-brand-100/50 bg-brand-50 px-3 py-1 py-2 text-brand-700 transition-colors hover:text-brand-600"
            >
              {t.nav.calculator}
            </a>
            <a
              href="#testimonials"
              className="py-2 transition-colors hover:text-brand-600"
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#career"
              className="py-2 transition-colors hover:text-brand-600"
            >
              {t.nav.career}
            </a>
            <a
              href="#contact"
              className="py-2 transition-colors hover:text-brand-600"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Language Switcher and Primary Action */}
          <div className="flex items-center gap-3">
            <Link
              to={lang === "ar" ? "/en" : "/ar"}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600"
              title="Switch Language"
            >
              <Languages className="h-4 w-4 text-brand-600" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </Link>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-brand-500/10 transition-all hover:translate-y-[-1px] hover:bg-brand-700 sm:inline-flex md:text-sm"
            >
              <span>{isRtl ? "احصل على عرض مخصص" : "Get Free Quote"}</span>
              {isRtl ? (
                <ArrowLeft className="rtl-flip h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-brand-50/70 via-white to-slate-50 py-16 lg:py-24">
        {/* Subtle decorative background circles */}
        <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-100/30 blur-3xl"></div>
        <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-emerald-100/20 blur-3xl"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Hero text and quick action */}
            <div className="space-y-6 text-center lg:col-span-7 lg:text-start">
              <div className="border-brand-200/50 inline-flex items-center gap-2 rounded-full border bg-brand-100/70 px-3 py-1.5 text-xs font-bold tracking-wide text-brand-800 uppercase">
                <Sparkles className="h-3.5 w-3.5 text-brand-600" />
                <span>{t.hero.badge}</span>
              </div>

              <h1 className="text-3.5xl sm:text-4.5xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                <span className="block text-slate-900">{t.hero.title}</span>
                <span className="mt-1 block bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text font-black text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-base leading-relaxed font-normal text-slate-600 sm:text-lg lg:mx-0">
                {t.hero.subtitle}
              </p>

              {/* Instant CTAs geared for conversion */}
              <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                <a
                  href="#contact"
                  onClick={() =>
                    setContactForm((prev) => ({
                      ...prev,
                      userType: "hospital",
                    }))
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-center text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all hover:translate-y-[-2px] hover:bg-brand-700 hover:shadow-lg sm:w-auto sm:text-base"
                >
                  <Building2 className="h-5 w-5 text-brand-100" />
                  <span>{t.hero.ctaPrimary}</span>
                </a>

                <a
                  href="#contact"
                  onClick={() =>
                    setContactForm((prev) => ({ ...prev, userType: "patient" }))
                  }
                  className="hover:border-brand-300 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-slate-800 shadow-xs transition-all hover:translate-y-[-1px] hover:bg-slate-50 hover:text-brand-600 sm:w-auto sm:text-base"
                >
                  <UserCheck className="h-5 w-5 text-slate-500 group-hover:text-brand-600" />
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Legitimacy and Trust Anchors */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-4 text-xs font-semibold tracking-wide text-slate-500 lg:justify-start">
                {t.hero.trustInfo.split(" | ").map((item, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-slate-200/50 bg-slate-100/80 px-2.5 py-1 text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Quick direct call banner */}
              <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-center sm:flex-row sm:text-start lg:mx-0">
                <div>
                  <span className="block text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                    {isRtl
                      ? "تواصل فوري ومباشر مع ممثل المبيعات والعمليات"
                      : "Immediate Sales & Operations Direct Contact"}
                  </span>
                  <span className="mt-0.5 block text-sm text-slate-600">
                    {isRtl
                      ? "متاحون لمكالمتكم واستفساراتكم على مدار الساعة"
                      : "We are ready to take your call anytime 24/7"}
                  </span>
                </div>
                <div className="flex w-full gap-2 sm:w-auto">
                  <a
                    href={getWhatsAppLink("general")}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700 sm:flex-none"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+201008125634"
                    className="hover:bg-slate-850 inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white transition-all sm:flex-none"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Premium, interactive graphic illustrating medical dashboard/scan reporting */}
            <div className="relative mt-6 lg:col-span-5 lg:mt-0">
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                {/* Visual shadow effect */}
                <div className="pointer-events-none absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 opacity-10 blur-2xl"></div>

                {/* Main Visual Card */}
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 text-white shadow-2xl">
                  {/* Visual Header representing a Radiology PACS system */}
                  <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                      <span className="ml-2 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                        PACS_VIEWER_V4.2
                      </span>
                    </div>
                    <div className="text-brand-400 rounded border border-brand-500/20 bg-brand-500/10 px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider uppercase">
                      Live Gateway Online
                    </div>
                  </div>

                  {/* Radiology Visual */}
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-black">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                      alt="MRI brain scan diagnostic work station"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Reticle / scan markings representing active reporting */}
                    <div className="pointer-events-none absolute inset-0 m-4 flex items-center justify-center rounded border border-emerald-500/30">
                      <div className="border-brand-400/50 h-12 w-12 animate-spin rounded-full border border-dashed"></div>
                      <div className="absolute top-2 left-2 rounded bg-black/70 px-1 py-0.5 font-mono text-[9px] text-emerald-400">
                        SECURE DICOM LINK
                      </div>
                      <div className="text-brand-400 absolute right-2 bottom-2 rounded bg-black/70 px-1 py-0.5 font-mono text-[9px]">
                        QA_PASS_CONFIRMED
                      </div>
                    </div>
                  </div>

                  {/* Operational stats banner inside visual */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="bg-slate-850 rounded-lg border border-slate-800 p-2.5">
                      <span className="block text-[10px] tracking-wider text-slate-400 uppercase">
                        {isRtl ? "متوسط سرعة الإرسال" : "Avg Transmission Time"}
                      </span>
                      <span className="mt-0.5 block font-mono text-sm font-bold text-emerald-400">
                        &lt; 90 Seconds
                      </span>
                    </div>
                    <div className="bg-slate-850 rounded-lg border border-slate-800 p-2.5">
                      <span className="block text-[10px] tracking-wider text-slate-400 uppercase">
                        {isRtl ? "درجة أمان البيانات" : "Data Encryption"}
                      </span>
                      <span className="text-brand-400 mt-0.5 block font-mono text-sm font-bold">
                        AES_256 SSL
                      </span>
                    </div>
                  </div>

                  {/* Visual mockup of signed radiology report */}
                  <div className="bg-slate-850/60 mt-3 space-y-1.5 rounded-xl border border-slate-800/80 p-3 text-start">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <FileCheck className="h-4 w-4 text-emerald-400" />
                        <span className="text-xs font-bold text-slate-200">
                          {isRtl
                            ? "رأي استشاري أشعة عصبية"
                            : "Neuroradiologist Consultant Opinion"}
                        </span>
                      </div>
                      <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-400 uppercase">
                        Signed
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-full rounded-full bg-slate-700"></div>
                      <div className="h-1.5 w-5/6 rounded-full bg-slate-700"></div>
                      <div className="h-1.5 w-4/5 rounded-full bg-slate-700"></div>
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-800/60 pt-1.5 text-[9px] text-slate-400">
                      <span>
                        {isRtl ? "مراجعة جودة مزدوجة" : "Double-Read Protocol"}
                      </span>
                      <span className="font-mono font-semibold text-emerald-400">
                        100% Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating active stats card */}
                <div className="pointer-events-none absolute bottom-[-15px] left-[-15px] hidden max-w-[170px] space-y-1 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xl sm:block">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <Clock className="h-4 w-4 animate-pulse" />
                    <span className="text-[10px] font-extrabold tracking-wider uppercase">
                      {isRtl ? "حالات الطوارئ" : "Emergency STAT"}
                    </span>
                  </div>
                  <span className="block font-mono text-xl font-black tracking-tight text-slate-900">
                    &lt; 30 MINS
                  </span>
                  <span className="block text-[10px] text-slate-500">
                    {isRtl
                      ? "تسليم تقارير الحوادث فورا"
                      : "Rapid reporting of urgent trauma cases"}
                  </span>
                </div>

                {/* Floating trust badge representing Egypt consultants */}
                <div className="pointer-events-none absolute top-[-15px] right-[-15px] hidden max-w-[180px] space-y-1 rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 to-brand-950 p-3 text-white shadow-xl sm:block">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Award className="h-4 w-4" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">
                      {isRtl ? "نخبة الأطباء" : "Elite Faculty"}
                    </span>
                  </div>
                  <span className="block text-xs font-bold text-slate-100">
                    {isRtl
                      ? "استشاريين مصريين فقط"
                      : "Egyptian Board Consultants Only"}
                  </span>
                  <span className="block text-[9px] leading-normal text-slate-400">
                    {isRtl
                      ? "ممن لهم خبرات تشخيصية بالخليج"
                      : "Extensive experience with Gulf health standards"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        id="stats"
        className="scroll-mt-18 border-b border-slate-100 bg-white py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
              {t.stats.sectionTitle}
            </h2>
            <p className="text-lg font-bold text-slate-800 sm:text-xl">
              {t.stats.sectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            <div className="border-slate-150 rounded-xl border bg-slate-50 p-6 text-center transition-shadow hover:shadow-md">
              <span className="text-2.5xl sm:text-3.5xl block font-mono font-black tracking-tight text-brand-600">
                {t.stats.reports}
              </span>
              <span className="mt-2 block text-xs font-bold text-slate-900 sm:text-sm">
                {t.stats.reportsLabel}
              </span>
              <span className="mt-1 block text-[11px] leading-normal text-slate-500">
                {isRtl
                  ? "تمت مراجعتها طبياً وتوقيعها قانونياً"
                  : "All reports medically audited & legally signed"}
              </span>
            </div>

            <div className="border-slate-150 rounded-xl border bg-slate-50 p-6 text-center transition-shadow hover:shadow-md">
              <span className="text-2.5xl sm:text-3.5xl block font-mono font-black tracking-tight text-brand-600">
                {t.stats.patients}
              </span>
              <span className="mt-2 block text-xs font-bold text-slate-900 sm:text-sm">
                {t.stats.patientsLabel}
              </span>
              <span className="mt-1 block text-[11px] leading-normal text-slate-500">
                {isRtl
                  ? "في مستشفيات الخليج، مصر وإفريقيا"
                  : "Across Gulf, Egypt, and East Africa hospitals"}
              </span>
            </div>

            <div className="border-slate-150 rounded-xl border bg-slate-50 p-6 text-center transition-shadow hover:shadow-md">
              <span className="text-2.5xl sm:text-3.5xl block font-mono font-black tracking-tight text-emerald-600">
                {t.stats.turnaround}
              </span>
              <span className="mt-2 block text-xs font-bold text-slate-900 sm:text-sm">
                {t.stats.turnaroundLabel}
              </span>
              <span className="mt-1 block text-[11px] leading-normal text-slate-500">
                {isRtl
                  ? "للحالات الروتينية، وأقل للطارئة"
                  : "For routine cases, even faster for STAT emergency"}
              </span>
            </div>

            <div className="border-slate-150 rounded-xl border bg-slate-50 p-6 text-center transition-shadow hover:shadow-md">
              <span className="text-2.5xl sm:text-3.5xl block font-mono font-black tracking-tight text-slate-900">
                {t.stats.accuracy}
              </span>
              <span className="mt-2 block text-xs font-bold text-slate-900 sm:text-sm">
                {t.stats.accuracyLabel}
              </span>
              <span className="mt-1 block text-[11px] leading-normal text-slate-500">
                {isRtl
                  ? "معدل خطأ طبي يقارب الصفر مطلقاً"
                  : "Near-zero discrepency rate under QA system"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Target Audience Section */}
      <section
        id="services"
        className="scroll-mt-18 bg-slate-50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
              {t.services.sectionTitle}
            </h2>
            <p className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t.services.sectionSubtitle}
            </p>
          </div>

          {/* Interactive Navigation Tabs to cater to 3 distinct customer groups */}
          <div className="mx-auto mb-12 flex max-w-4xl flex-col items-stretch justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-200/50 p-1.5 sm:flex-row">
            <button
              onClick={() => setActiveTab("hospital")}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                activeTab === "hospital"
                  ? "border border-slate-200 bg-white text-brand-700 shadow-sm"
                  : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
              }`}
            >
              <Building2
                className={`h-4.5 w-4.5 ${activeTab === "hospital" ? "text-brand-600" : "text-slate-400"}`}
              />
              <span>
                {isRtl ? "المستشفيات والمراكز" : "Hospitals & Centers"}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("patient")}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                activeTab === "patient"
                  ? "border border-slate-200 bg-white text-brand-700 shadow-sm"
                  : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
              }`}
            >
              <UserCheck
                className={`h-4.5 w-4.5 ${activeTab === "patient" ? "text-brand-600" : "text-slate-400"}`}
              />
              <span>
                {isRtl ? "المرضى والأفراد" : "Patients & Individuals"}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("career")}
              className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                activeTab === "career"
                  ? "border border-slate-200 bg-white text-brand-700 shadow-sm"
                  : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
              }`}
            >
              <Briefcase
                className={`h-4.5 w-4.5 ${activeTab === "career" ? "text-brand-600" : "text-slate-400"}`}
              />
              <span>
                {isRtl ? "أطباء الأشعة (توظيف)" : "Radiologists Careers"}
              </span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="mx-auto max-w-5xl">
            {activeTab === "hospital" && (
              <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
                <div className="space-y-5 md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{t.services.hospitalSubtitle}</span>
                  </div>
                  <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {t.services.hospitalTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t.services.hospitalDesc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      t.services.hospitalBullet1,
                      t.services.hospitalBullet2,
                      t.services.hospitalBullet3,
                      t.services.hospitalBullet4,
                    ].map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <a
                      href={getWhatsAppLink("hospital")}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{t.services.hospitalCta}</span>
                    </a>
                    <a
                      href="#contact"
                      onClick={() =>
                        setContactForm((prev) => ({
                          ...prev,
                          userType: "hospital",
                        }))
                      }
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-slate-200"
                    >
                      <span>
                        {isRtl
                          ? "طلب تواصل واقتراح أسعار"
                          : "Inquire and Request Quote"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="relative md:col-span-5">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
                      alt="Modern hospital diagnostics laboratory"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                      <span className="block text-xs font-bold tracking-widest text-emerald-400 uppercase">
                        {isRtl ? "خدمات مخصصة لـ" : "Dedicated Support for"}
                      </span>
                      <span className="mt-1 block text-base font-bold text-white">
                        {isRtl
                          ? "المستشفيات، المراكز والعيادات الصغيرة"
                          : "Small Hospitals, Diagnostics & Clinics"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "patient" && (
              <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
                <div className="space-y-5 md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>{t.services.patientSubtitle}</span>
                  </div>
                  <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {t.services.patientTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t.services.patientDesc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      t.services.patientBullet1,
                      t.services.patientBullet2,
                      t.services.patientBullet3,
                      t.services.patientBullet4,
                    ].map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <a
                      href={getWhatsAppLink("patient")}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>{t.services.patientCta}</span>
                    </a>
                    <a
                      href="#contact"
                      onClick={() =>
                        setContactForm((prev) => ({
                          ...prev,
                          userType: "patient",
                        }))
                      }
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-slate-200"
                    >
                      <span>
                        {isRtl ? "تفاصيل إرسال الأشعة" : "How to Upload & Pay"}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                      alt="Radiology diagnostics consultant on screen"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                      <span className="text-brand-400 block text-xs font-bold tracking-widest uppercase">
                        {isRtl
                          ? "رأي طبي استشاري موثوق"
                          : "Clinical Second Opinions"}
                      </span>
                      <span className="mt-1 block text-base font-bold text-white">
                        {isRtl
                          ? "دقة تشخيصية تحمي حياتك وعائلتك"
                          : "Diagnostic precision for family reassurance"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "career" && (
              <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
                <div className="space-y-5 md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    <Briefcase className="h-3.5 w-3.5" />
                    <span>{t.services.careerSubtitle}</span>
                  </div>
                  <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {t.services.careerTitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                    {t.services.careerDesc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {[
                      t.services.careerBullet1,
                      t.services.careerBullet2,
                      t.services.careerBullet3,
                      t.services.careerBullet4,
                    ].map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <a
                      href="#career-portal"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-700"
                    >
                      <FileText className="h-4 w-4" />
                      <span>{t.services.careerCta}</span>
                    </a>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                      alt="Expert radiologist analyzing scans"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                      <span className="block text-xs font-bold tracking-widest text-amber-400 uppercase">
                        {isRtl
                          ? "انضم لنخبة من المستشارين"
                          : "Work From Anywhere"}
                      </span>
                      <span className="mt-1 block text-base font-bold text-white">
                        {isRtl
                          ? "مرونة كاملة وعوائد بالدولار والريال"
                          : "Work on your terms with premium payouts"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Interactive Savings & Capacity Calculator (Highly Engaging Marketing Tool) */}
      <section
        id="calculator"
        className="relative scroll-mt-18 overflow-hidden border-b border-brand-950 bg-slate-900 py-16 text-white sm:py-20"
      >
        {/* Abstract grids for tech feeling */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="text-brand-400 mb-2 inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase">
              <Calculator className="h-3.5 w-3.5" />
              <span>{t.nav.calculator}</span>
            </div>
            <h2 className="text-2.5xl sm:text-3.5xl font-extrabold tracking-tight">
              {t.calculator.sectionTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              {t.calculator.sectionSubtitle}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-12">
            {/* Input Controls */}
            <div className="bg-slate-850 border-slate-850 space-y-6 rounded-2xl border p-6 sm:p-8 lg:col-span-6">
              {/* Scan Type selector */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-300 sm:text-sm">
                  {t.calculator.scanType}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setScanType("mri")}
                    className={`rounded-lg border px-3 py-2 text-center text-xs font-bold transition-all ${
                      scanType === "mri"
                        ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                        : "border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {t.calculator.mri}
                  </button>
                  <button
                    onClick={() => setScanType("ct")}
                    className={`rounded-lg border px-3 py-2 text-center text-xs font-bold transition-all ${
                      scanType === "ct"
                        ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                        : "border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {t.calculator.ct}
                  </button>
                  <button
                    onClick={() => setScanType("xray")}
                    className={`rounded-lg border px-3 py-2 text-center text-xs font-bold transition-all ${
                      scanType === "xray"
                        ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                        : "border-slate-800 bg-slate-900 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {t.calculator.xray}
                  </button>
                </div>
              </div>

              {/* Slider Input for volume */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-300 sm:text-sm">
                    {t.calculator.monthlyVolume}
                  </label>
                  <span className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1 font-mono text-base font-black text-emerald-400 sm:text-lg">
                    {scanVolume} {t.calculator.scansMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="50"
                  value={scanVolume}
                  onChange={(e) => setScanVolume(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-900 accent-brand-500"
                />
                <div className="flex justify-between font-mono text-[10px] text-slate-500">
                  <span>50</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>1500</span>
                </div>
              </div>

              <div className="space-y-1.5 rounded-xl border border-slate-800 bg-slate-900 p-4 text-xs text-slate-400">
                <span className="block font-bold text-slate-300">
                  {isRtl ? "💡 كيف تم الحساب؟" : "💡 Methodology"}
                </span>
                <p className="leading-relaxed">
                  {isRtl
                    ? `يعتمد الحساب على تقييم زمني واقعي يتضمن: ${timePerScan[scanType] * 60} دقيقة لكل حالة تشمل ربط الصور الطبية، قراءتها الاستقصائية، الإملاء الصوتي، تحرير وطباعة التقارير، والتدقيق الطبي المزدوج.`
                    : `Calculation maps typical workflow overhead: ${timePerScan[scanType] * 60} mins per scan which covers PACS syncing, consultant dictation, transcription, formatting, and second-read QA auditing.`}
                </p>
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="space-y-6 lg:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-slate-850 group relative overflow-hidden rounded-2xl border border-slate-800 p-6">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-brand-500/5 blur-xl"></div>
                  <span className="block text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {t.calculator.timeSaved}
                  </span>
                  <span className="text-brand-400 my-2 block font-mono text-4xl font-black tracking-tight sm:text-5xl">
                    {calculatedTimeSaved} hrs
                  </span>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {t.calculator.timeSavedDesc}
                  </p>
                </div>

                <div className="bg-slate-850 group relative overflow-hidden rounded-2xl border border-slate-800 p-6">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-emerald-500/5 blur-xl"></div>
                  <span className="block text-xs font-bold tracking-widest text-slate-400 uppercase">
                    {t.calculator.capacityBoost}
                  </span>
                  <span className="my-2 block font-mono text-4xl font-black tracking-tight text-emerald-400 sm:text-5xl">
                    +{calculatedCapacityBoost}
                  </span>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {t.calculator.capacityBoostDesc}
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp conversion hook based on calculation */}
              <div className="bg-slate-850 space-y-4 rounded-2xl border border-brand-500/30 p-6 text-center sm:text-start">
                <div>
                  <span className="text-brand-400 mb-2 inline-block rounded-md border border-brand-500/20 bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase">
                    {isRtl
                      ? "خصومات الخليج وشمال إفريقيا"
                      : "Special Regional Package Available"}
                  </span>
                  <h4 className="text-lg font-bold tracking-tight text-white">
                    {isRtl
                      ? "احصل على تسعير مخصص بناءً على حجم حالاتك!"
                      : "We offer discounted rates for volumes exceeding 300 scans!"}
                  </h4>
                  <p className="mt-1 text-xs leading-normal text-slate-400">
                    {isRtl
                      ? "نوفر خطط أسعار تشجيعية وعقوداً مريحة للغاية للمستشفيات الناشئة لرفع الأعباء المادية والتشغيلية."
                      : "No setup fees, pay-per-case structure. Easily adapt to seasonal or weekly load variations."}
                  </p>
                </div>
                <div>
                  <a
                    href={getWhatsAppLink("calculator")}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-black text-white shadow-md shadow-emerald-950/30 transition-all hover:translate-y-[-1.5px] hover:bg-emerald-700 sm:w-auto"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-100" />
                    <span>{t.calculator.cta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Credibility Testimonials section */}
      <section
        id="testimonials"
        className="scroll-mt-18 border-b border-slate-100 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
              {t.testimonials.sectionTitle}
            </h2>
            <p className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t.testimonials.sectionSubtitle}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {t.testimonials.list.map((item, idx) => (
              <div
                key={idx}
                className="border-slate-150 relative flex flex-col justify-between space-y-6 rounded-2xl border bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                {/* Visual quote accent */}
                <div className="pointer-events-none absolute top-2 right-4 font-serif text-6xl text-slate-200 select-none">
                  “
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm text-amber-500">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="relative z-10 text-xs leading-relaxed text-slate-600 italic sm:text-sm">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-200/60 pt-4">
                  <div className="border-brand-200 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-brand-100 text-xs font-bold text-brand-700 uppercase">
                    {item.name
                      .split(" ")
                      .filter((n) => n !== "د." && n !== "Dr.")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <span className="block text-xs leading-none font-extrabold text-slate-900 sm:text-sm">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-[11px] leading-none font-medium text-slate-500">
                      {item.role}, {item.organization}
                    </span>
                    <span className="mt-1.5 block text-[10px] font-bold tracking-wider text-brand-600 uppercase">
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Conversion & Engagement Hub (Contact Form & Career Form) */}
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left side: Interactive Lead Inquiry / Pricing Form */}
            <div id="contact" className="scroll-mt-18 lg:col-span-6">
              <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                <div className="space-y-2">
                  <h3 className="text-xl leading-none font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {t.contactForm.sectionTitle}
                  </h3>
                  <p className="text-xs leading-normal text-slate-500 sm:text-sm">
                    {t.contactForm.sectionSubtitle}
                  </p>
                </div>

                {contactSuccess ? (
                  <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-slate-900">
                        {t.contactForm.successTitle}
                      </h4>
                      <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-600">
                        {t.contactForm.successDesc}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row">
                      <a
                        href={getWhatsAppLink(contactForm.userType as any)}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>
                          {isRtl
                            ? "افتح محادثة واتساب فورا"
                            : "Open WhatsApp Chat Now"}
                        </span>
                      </a>
                      <button
                        onClick={() => {
                          setContactSuccess(false)
                          setContactForm({
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                            userType: "hospital",
                          })
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
                      >
                        <span>
                          {isRtl ? "إرسال طلب آخر" : "Submit Another Inquiry"}
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleContactSubmit}
                    className="space-y-4 text-start"
                  >
                    {/* User classification for smart lead routing */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.contactForm.iAmA}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setContactForm((prev) => ({
                              ...prev,
                              userType: "hospital",
                            }))
                          }
                          className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                            contactForm.userType === "hospital"
                              ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                              : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {t.contactForm.hospitalOption.split(" / ")[0]}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setContactForm((prev) => ({
                              ...prev,
                              userType: "patient",
                            }))
                          }
                          className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                            contactForm.userType === "patient"
                              ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                              : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {isRtl ? "مريض/فرد" : "Patient"}
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setContactForm((prev) => ({
                              ...prev,
                              userType: "other",
                            }))
                          }
                          className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                            contactForm.userType === "other"
                              ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                              : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {t.contactForm.otherOption}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.contactForm.name}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder={
                          isRtl
                            ? "مثال: مجمع الحياة الطبي / د. أحمد"
                            : "e.g., Al-Hayat Clinic / Dr. Ahmed"
                        }
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500 sm:text-sm"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">
                          {t.contactForm.phone}{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) =>
                            setContactForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="e.g., +966 50 123 4567"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">
                          {t.contactForm.email}
                        </label>
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="e.g., info@hospital.com"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.contactForm.message}
                      </label>
                      <textarea
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        placeholder={
                          isRtl
                            ? "اكتب هنا أي تفاصيل إضافية بخصوص الفحوصات أو حجم الحالات..."
                            : "Describe your clinical volumes or query..."
                        }
                        className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={contactSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-xs font-black tracking-wider text-white uppercase shadow-md shadow-brand-500/10 transition-all hover:bg-brand-700 disabled:opacity-50"
                    >
                      {contactSubmitting ? (
                        <span>
                          {isRtl
                            ? "جاري الإرسال والتشغيل..."
                            : "Submitting Inquiry..."}
                        </span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>{t.contactForm.submit}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Secure clinical guarantee */}
                <div className="flex items-center justify-center gap-2.5 border-t border-slate-100 pt-3 text-[10px] text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>
                    {isRtl
                      ? "نضمن الحفاظ المطلق على خصوصية المريض وبأعلى تشفير رقمي معتمد"
                      : "100% Patient Confidentiality & Encryption HIPAA compliant"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right side: Radiologist Job CV Upload and Subspecialty Picker */}
            <div id="career-portal" className="scroll-mt-18 lg:col-span-6">
              <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
                <div className="space-y-2">
                  <span className="inline-block rounded-md border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-800 uppercase">
                    {isRtl ? "توظيف أطباء أشعة" : "Now Recruiting"}
                  </span>
                  <h3 className="text-xl leading-none font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                    {t.careerForm.sectionTitle}
                  </h3>
                  <p className="text-xs leading-normal text-slate-500 sm:text-sm">
                    {t.careerForm.sectionSubtitle}
                  </p>
                </div>

                {careerSuccess ? (
                  <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                      <FileCheck className="h-8 w-8" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-slate-900">
                        {t.careerForm.successTitle}
                      </h4>
                      <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-600">
                        {t.careerForm.successDesc}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row">
                      <a
                        href={getWhatsAppLink("career")}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>
                          {isRtl
                            ? "إشعار مباشر عبر واتساب"
                            : "Direct WhatsApp Notification"}
                        </span>
                      </a>
                      <button
                        onClick={() => {
                          setCareerSuccess(false)
                          setCvFile(null)
                          setCareerForm({
                            name: "",
                            email: "",
                            phone: "",
                            country: "",
                            selectedSubspecialties: [],
                          })
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
                      >
                        <span>{t.careerForm.anotherSubmission}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleCareerSubmit}
                    className="space-y-4 text-start"
                  >
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.careerForm.name}{" "}
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={careerForm.name}
                        onChange={(e) =>
                          setCareerForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder={
                          isRtl
                            ? "مثال: د. مازن عبد العزيز"
                            : "e.g., Dr. Mazen Abdelaziz"
                        }
                        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">
                          {t.careerForm.phone}{" "}
                          <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={careerForm.phone}
                          onChange={(e) =>
                            setCareerForm((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="e.g., +20 100 123 4567"
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-slate-700">
                          {t.careerForm.country}
                        </label>
                        <input
                          type="text"
                          value={careerForm.country}
                          onChange={(e) =>
                            setCareerForm((prev) => ({
                              ...prev,
                              country: e.target.value,
                            }))
                          }
                          placeholder={
                            isRtl
                              ? "مصر، السعودية، العراق..."
                              : "Egypt, KSA, Iraq..."
                          }
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    {/* Subspecialties Checkboxes */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.careerForm.subspecialties}
                      </label>
                      <div className="grid max-h-[140px] grid-cols-1 gap-1.5 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-2.5 sm:grid-cols-2">
                        {t.careerForm.subspecialtiesList.map((sub, idx) => {
                          const isChecked =
                            careerForm.selectedSubspecialties.includes(sub)
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => handleSubspecialtyToggle(sub)}
                              className={`flex items-center gap-2 rounded p-1.5 text-start transition-all ${
                                isChecked
                                  ? "border-brand-200/50 border bg-brand-50 font-bold text-brand-800"
                                  : "border border-transparent text-slate-600 hover:bg-white"
                              }`}
                            >
                              <div
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                  isChecked
                                    ? "border-brand-500 bg-brand-600 text-white"
                                    : "border-slate-300 bg-white"
                                }`}
                              >
                                {isChecked && <Check className="h-3 w-3" />}
                              </div>
                              <span className="truncate text-[11px]">
                                {sub}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Drag and Drop File Upload Container with active states */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        {t.careerForm.cvUpload}{" "}
                        <span className="text-rose-500">*</span>
                      </label>

                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={triggerFileInput}
                        className={`flex cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl border-2 border-dashed p-4 text-center transition-all ${
                          isDragOver
                            ? "border-brand-500 bg-brand-50"
                            : cvFile
                              ? "border-emerald-400 bg-emerald-50/40"
                              : "hover:border-brand-400 border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.docx,.doc"
                          className="hidden"
                        />

                        {cvUploading ? (
                          <>
                            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent"></div>
                            <span className="text-xs font-bold text-brand-600">
                              {isRtl
                                ? "جاري فحص وتأمين الملف..."
                                : "Scanning file security..."}
                            </span>
                          </>
                        ) : cvFile ? (
                          <>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                              <FileCheck className="h-6 w-6" />
                            </div>
                            <div className="text-center">
                              <span className="block max-w-[240px] truncate text-xs font-bold text-slate-800">
                                {cvFile.name}
                              </span>
                              <span className="block text-[10px] text-slate-500">
                                {cvFile.size} | {t.careerForm.cvUploaded}
                              </span>
                            </div>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="h-8 w-8 text-slate-400" />
                            <p className="px-2 text-xs leading-relaxed text-slate-600">
                              {t.careerForm.cvDragDrop}
                            </p>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={careerSubmitting || cvUploading}
                      className="hover:bg-slate-850 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-black tracking-wider text-white uppercase shadow-sm transition-all disabled:opacity-50"
                    >
                      {careerSubmitting ? (
                        <span>{t.careerForm.submitting}</span>
                      ) : (
                        <>
                          <Briefcase className="h-4 w-4 text-slate-300" />
                          <span>{t.careerForm.submit}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Direct Contacts & Channels (WhatsApp, Email, Telegram, Facebook, Phone numbers) */}
      <section className="scroll-mt-18 border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
              {t.contactInfo.title}
            </h2>
            <p className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t.contactInfo.subtitle}
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Direct Telephone Operations Desk */}
            <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-2 text-start">
                <h4 className="text-sm font-black tracking-wider text-slate-900 uppercase">
                  {isRtl ? "الهواتف المباشرة" : "Emergency Direct Calls"}
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">
                      {t.contactInfo.egyptOffice}
                    </span>
                    <a
                      href="tel:+201008125634"
                      className="mt-0.5 block font-bold text-slate-900 transition-colors hover:text-brand-600"
                    >
                      {t.contactInfo.egyptOfficeVal}
                    </a>
                  </div>
                  <div className="border-t border-slate-200/40 pt-1">
                    <span className="block text-[10px] text-slate-500 uppercase">
                      {t.contactInfo.gulfRegion}
                    </span>
                    <a
                      href="tel:+966501234567"
                      className="mt-0.5 block font-bold text-slate-900 transition-colors hover:text-brand-600"
                    >
                      {t.contactInfo.gulfRegionVal.split(" (")[0]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social / Messaging channels (WhatsApp, Telegram) */}
            <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-3 text-start">
                <h4 className="text-sm font-black tracking-wider text-slate-900 uppercase">
                  {isRtl ? "قنوات المحادثة السريعة" : "Instant Messaging Desk"}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <a
                    href={getWhatsAppLink("general")}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-between rounded-lg border border-emerald-100/50 bg-emerald-50 p-2 font-bold text-emerald-800 transition-all hover:bg-emerald-100"
                  >
                    <span>{t.contactInfo.whatsappLabel}</span>
                    <span className="flex items-center gap-1 text-[11px] font-medium underline">
                      {t.contactInfo.whatsappVal}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>

                  <a
                    href="https://t.me/TeleRadGlobalSupport"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center justify-between rounded-lg border border-sky-100/50 bg-sky-50 p-2 font-bold text-sky-800 transition-all hover:bg-sky-100"
                  >
                    <span>{t.contactInfo.telegramLabel}</span>
                    <span className="flex items-center gap-1 text-[11px] font-medium underline">
                      {t.contactInfo.telegramVal}
                      <ExternalLink className="h-3 w-3" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Business Email & Facebook */}
            <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all hover:shadow-md md:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-3 text-start">
                <h4 className="text-sm font-black tracking-wider text-slate-900 uppercase">
                  {isRtl
                    ? "البريد والتواصل الاجتماعي"
                    : "Clinical Administration"}
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div>
                    <span className="block text-[10px] text-slate-500 uppercase">
                      {t.contactInfo.emailLabel}
                    </span>
                    <a
                      href={`mailto:${t.contactInfo.emailVal}`}
                      className="mt-0.5 block font-bold text-slate-900 transition-colors hover:text-brand-600"
                    >
                      {t.contactInfo.emailVal}
                    </a>
                  </div>

                  <div className="border-t border-slate-200/40 pt-2">
                    <span className="block text-[10px] text-slate-500 uppercase">
                      {t.contactInfo.facebookLabel}
                    </span>
                    <a
                      href="https://facebook.com/TeleRadGlobal"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="mt-0.5 inline-flex items-center gap-1 font-bold text-slate-900 hover:text-brand-600"
                    >
                      <span>TeleRad Global Official</span>
                      <Activity className="h-3.5 w-3.5 text-brand-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQs Accordion Section (Critical for SEO on Google Featured Snippets) */}
      <section className="scroll-mt-18 border-b border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
              {t.faqs.sectionTitle}
            </h2>
            <p className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {t.faqs.sectionSubtitle}
            </p>
          </div>

          <div className="space-y-3.5">
            {t.faqs.list.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-start text-xs font-bold text-slate-900 transition-colors hover:text-brand-600 sm:text-sm"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-1.5 text-slate-500">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/30 px-5 pt-1 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-start text-slate-400 md:py-16">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5">
              <a href="#" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md">
                  <Activity className="h-5.5 w-5.5 text-white" />
                </div>
                <div>
                  <span className="block text-lg leading-none font-bold tracking-tight text-white">
                    {t.nav.logo}
                  </span>
                  <span className="text-brand-400 mt-1 block text-[10px] font-medium tracking-wide uppercase">
                    {isRtl
                      ? "تشخيص الأشعة عن بعد"
                      : "Premium Radiology Reporting"}
                  </span>
                </div>
              </a>
              <p className="max-w-sm text-xs leading-relaxed text-slate-400 sm:text-sm">
                {t.footer.tagline}
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="tel:+201008125634"
                  className="transition-colors hover:text-white"
                  title="Call Operations"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${t.contactInfo.emailVal}`}
                  className="transition-colors hover:text-white"
                  title="Email Operations"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-3 md:col-span-3">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">
                {isRtl ? "روابط سريعة" : "Platform Navigation"}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="#services"
                    className="transition-colors hover:text-white"
                  >
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a
                    href="#stats"
                    className="transition-colors hover:text-white"
                  >
                    {t.nav.stats}
                  </a>
                </li>
                <li>
                  <a
                    href="#calculator"
                    className="transition-colors hover:text-white"
                  >
                    {t.nav.calculator}
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="transition-colors hover:text-white"
                  >
                    {t.nav.testimonials}
                  </a>
                </li>
                <li>
                  <a
                    href="#career-portal"
                    className="transition-colors hover:text-white"
                  >
                    {t.nav.career}
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4 md:col-span-4">
              <h4 className="text-xs font-black tracking-widest text-white uppercase">
                {isRtl
                  ? "النطاق الجغرافي للخدمة"
                  : "Geographic Operations Scope"}
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                {t.footer.coverage}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  "🇪🇬 Egypt",
                  "🇸🇦 Saudi Arabia",
                  "🇦🇪 UAE",
                  "🇮🇶 Iraq",
                  "🇱🇾 Libya",
                  "🇸🇴 Somalia",
                ].map((country, i) => (
                  <span
                    key={i}
                    className="border-slate-750 rounded border bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-300"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center text-xs font-medium text-slate-500 md:flex-row md:text-start">
            <p>{t.footer.rights}</p>
            <p className="flex items-center gap-1">
              <span>
                {isRtl ? "موقع معتمد تشخيصياً" : "Diagnostic Authority Portal"}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>2026</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Highly visible, persistent interactive WhatsApp floating lead-generator widget */}
      <div className="pointer-events-none fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
        {/* Dynamic speech bubble warning/reminder that reps are online */}
        <div className="pointer-events-auto flex max-w-[200px] animate-bounce items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-[10px] font-bold text-slate-800 shadow-xl sm:text-xs">
          <span className="h-2 w-2 shrink-0 animate-ping rounded-full bg-emerald-500"></span>
          <span>
            {isRtl ? "تواصل فوراً واتساب 24/7" : "WhatsApp Reps Live Now"}
          </span>
        </div>

        <a
          href={getWhatsAppLink("general")}
          target="_blank"
          referrerPolicy="no-referrer"
          className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:bg-emerald-500"
          title="Direct WhatsApp Support"
        >
          {/* Custom SVG logo of WhatsApp for precision design */}
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.588 2.036 14.113 1.01 11.488 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.393 1.357 4.869l-.993 3.627 3.73-.977z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
