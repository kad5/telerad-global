import { Button } from "@/components/ui/button"
import { createFileRoute, useSearch, useNavigate } from "@tanstack/react-router"
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
  Send,
} from "lucide-react"
import { translations } from "@/lib/translations"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { lang } = useSearch({ from: "__root__" })
  const isRtl = lang === "ar"
  const fontClass = isRtl ? "font-cairo" : "font-sans"
  const t = translations[lang]

  const navigate = useNavigate()
  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "ar" : "en"
    navigate({
      search: (prev) => ({ ...prev, lang: nextLang }),
    })
  }

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
      {/* banner */}
      <div className="flex items-center justify-center gap-2 border-b border-brand-800 bg-brand-900 px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
        <span>
          {isRtl
            ? "تغطية تيليراديولوجي متميزة تخدم دول الشرق الأوسط و إفريقيا على مدار الساعة 24/7"
            : "Premium 24/7 Teleradiology coverage serving the Middle East and Africa"}
        </span>
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md transition-all">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
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
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
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
              className="rounded-lg border border-brand-100/50 bg-brand-50 px-3 py-2 text-brand-700 transition-colors hover:text-brand-600"
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
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600"
              title="Switch Language"
            >
              <Languages className="h-4 w-4 text-brand-600" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-brand-500/10 transition-all hover:bg-brand-700 sm:inline-flex md:text-sm"
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
    </div>
  )
}
