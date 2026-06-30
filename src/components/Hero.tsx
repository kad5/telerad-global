import {
  Sparkles,
  Building2,
  UserCheck,
  MessageSquare,
  Phone,
  Clock,
  FileCheck,
  Award,
} from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

interface HeroProps {
  t: TranslationSet
  isRtl: boolean
  onSelectUserType: (userType: "hospital" | "patient") => void
}

export default function Hero({ t, isRtl, onSelectUserType }: HeroProps) {
  const generalWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? "أهلاً تيلي راد جلوبال، أود الاستفسار عن خدمات كتابة تقارير الأشعة عن بعد لمركزنا."
      : "Hello TeleRad Global, I would like to inquire about teleradiology reporting services for our center."
  )

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-b from-brand-50/70 via-white to-slate-50 py-16">
      {/* Subtle decorative background circles */}
      <div className="pointer-events-none absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand-100/30 blur-3xl"></div>
      <div className="pointer-events-none absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-emerald-100/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero text and quick action */}
          <div className="space-y-6 text-center lg:col-span-7 lg:text-start">
            <div className="border-brand-200/50 inline-flex items-center gap-2 rounded-full border bg-brand-100/70 px-3 py-1.5 text-xs font-bold tracking-wide text-brand-800 uppercase">
              <Sparkles className="hidden h-3.5 w-3.5 text-brand-600 sm:block" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3.5xl sm:text-4.5xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-5xl">
              <span className="block text-slate-900">{t.hero.title}</span>
              <span className="mt-1 block bg-linear-to-r from-brand-600 to-brand-700 bg-clip-text font-black text-transparent">
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
                onClick={() => onSelectUserType("hospital")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-center text-sm font-bold text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-700 hover:shadow-lg sm:w-auto sm:text-base"
              >
                <Building2 className="h-5 w-5 text-brand-100" />
                <span>{t.hero.ctaPrimary}</span>
              </a>

              <a
                href="#contact"
                onClick={() => onSelectUserType("patient")}
                className="hover:border-brand-300 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-4 text-center text-sm font-bold text-slate-800 shadow-xs transition-all hover:bg-slate-50 hover:text-brand-600 sm:w-auto sm:text-base"
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
                  href={generalWhatsAppLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700 sm:flex-none"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{isRtl ? "واتساب" : "WhatsApp"}</span>
                </a>
                <a
                  href="tel:+201008125634"
                  className="hover:bg-slate-850 inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-slate-900 px-3 py-2 text-xs font-bold text-white transition-all sm:flex-none"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>{isRtl ? "اتصال" : "Phone"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Premium, interactive graphic illustrating medical dashboard/scan reporting */}
          <div className="relative mt-6 lg:col-span-5 lg:mt-0">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              {/* Visual shadow effect */}
              <div className="pointer-events-none absolute inset-0 rotate-3 transform rounded-2xl bg-linear-to-tr from-brand-600 to-emerald-500 opacity-10 blur-2xl"></div>

              {/* Main Visual Card - make it a carasoule for  specialties */}
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
                      &lt; 120 Seconds
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
                          ? "رأي استشاري أشعة المخ و الأعصاب"
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
              <div className="pointer-events-none absolute top-[190px] right-[-15px] hidden max-w-[170px] space-y-1 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-xl sm:block">
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <Clock className="h-4 w-4 animate-pulse" />
                  <span className="text-[10px] font-extrabold tracking-wider uppercase">
                    {isRtl ? "حالات الطوارئ" : "Emergency STAT"}
                  </span>
                </div>
                <span className="block font-mono text-xl font-black tracking-tight text-slate-900">
                  &lt; 90 MINS
                </span>
                <span className="block text-[10px] text-slate-500">
                  {isRtl ? "تسليم تقارير الطارئة فورا" : "For urgent cases"}
                </span>
              </div>

              {/* Floating trust badge representing Egypt consultants */}
              <div className="pointer-events-none absolute top-[80px] right-[-15px] hidden max-w-[180px] space-y-1 rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 to-brand-950 p-3 text-white shadow-xl sm:block">
                <div className="flex items-center gap-1 text-amber-400">
                  <Award className="h-4 w-4" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">
                    {isRtl ? "نخبة الأطباء" : "Elite Consultants"}
                  </span>
                </div>
                <span className="block text-xs font-bold text-slate-100">
                  {isRtl
                    ? "استشاريين ذوي خبرة في الأشعة أكثر من 10 سنوات"
                    : "10+ years of radiology experience"}
                </span>
                <span className="block text-[9px] leading-normal text-slate-400">
                  {isRtl
                    ? "ممن لهم خبرات تشخيصية بالخليج"
                    : "Experience with Gulf standards"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
