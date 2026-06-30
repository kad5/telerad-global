import { useState } from "react"
import { Calculator as CalculatorIcon, MessageSquare } from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

interface CalculatorProps {
  t: TranslationSet
  isRtl: boolean
}

// Time saved per scan, in hours (manual reporting workload this replaces)
const TIME_PER_SCAN = {
  mri: 0.65, // MRI reporting is complex (~40 mins of manual work, dictating, editing)
  ct: 0.45, // CT reporting takes ~27 mins
  xray: 0.15, // X-ray / ultrasound takes ~9 mins
} as const

export default function Calculator({ t, isRtl }: CalculatorProps) {
  const [scanType, setScanType] = useState<"mri" | "ct" | "xray">("mri")
  const [scanVolume, setScanVolume] = useState<number>(350)

  const calculatedTimeSaved = Math.round(scanVolume * TIME_PER_SCAN[scanType])
  // Capacity boost: equivalent to ~40% more caseload securely via optimized workflows
  const calculatedCapacityBoost = Math.round(scanVolume * 0.45)
  const timePerScan = TIME_PER_SCAN

  const calculatorWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? `مرحباً، قمت باستخدام حاسبة التوفير لمركزنا بحجم فحص شهري يبلغ ${scanVolume} فحص لـ ${
          scanType === "mri"
            ? "الرنين المغناطيسي"
            : scanType === "ct"
              ? "الأشعة المقطعية"
              : "الأشعة العادية"
        }. أود الحصول على باقة أسعار مخصصة لمركزنا.`
      : `Hello, I used the savings calculator for our center with a monthly volume of ${scanVolume} ${scanType.toUpperCase()} scans. I would like to get a custom pricing package.`
  )

  return (
    <section
      id="calculator"
      className="relative scroll-mt-18 overflow-hidden border-b border-brand-950 bg-slate-900 py-16 text-white sm:py-20"
    >
      {/* Abstract grids for tech feeling */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] opacity-5"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="text-brand-400 mb-2 inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-bold uppercase">
            <CalculatorIcon className="h-3.5 w-3.5" />
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
                  href={calculatorWhatsAppLink}
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
  )
}
