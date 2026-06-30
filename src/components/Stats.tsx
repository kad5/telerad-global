import type { TranslationSet } from "@/lib/translations"
import { AnimatedMap } from "./AnimatedMap"

interface StatsProps {
  t: TranslationSet
  isRtl: boolean
}

export default function Stats({ t, isRtl }: StatsProps) {
  return (
    <section
      id="stats"
      className="scroll-mt-18 border-b border-slate-100 bg-white py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-0">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
            {t.stats.sectionTitle}
          </h2>
          <p className="text-lg font-bold text-slate-800 sm:text-xl">
            {t.stats.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:relative lg:block">
          <div className="hidden lg:block">
            <AnimatedMap />
          </div>
          <div className="border-b pb-2 text-center shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)] lg:absolute lg:top-15 lg:left-40">
            <span className="mb-2 block text-3xl font-bold">
              {t.stats.reports}
            </span>
            <span className="block text-sm font-bold whitespace-pre-line">
              {t.stats.reportsLabel}
            </span>
            <span className="block text-xs whitespace-pre-line">
              {isRtl
                ? "تمت مراجعتها طبياً \nوتوقيعها بواسطة استشارينا"
                : "All reports medically \n audited & legally signed"}
            </span>
          </div>
          <div className="border-b pb-2 text-center shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)] lg:absolute lg:bottom-30 lg:left-40">
            <span className="mb-2 block text-3xl font-bold">
              {t.stats.accuracy}
            </span>
            <span className="block text-sm font-bold whitespace-pre-line">
              {t.stats.accuracyLabel}
            </span>
            <span className="block text-xs whitespace-pre-line">
              {isRtl
                ? "معدل خطأ طبي يقارب الصفر مطلقاً"
                : "Near-zero discrepency rate"}
            </span>
          </div>
          <div className="border-b pb-2 text-center shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)] lg:absolute lg:top-15 lg:right-40">
            <span className="mb-2 block text-3xl font-bold">
              {t.stats.turnaround}
            </span>
            <span className="block text-sm font-bold whitespace-pre-line">
              {t.stats.turnaroundLabel}
            </span>
            <span className="block text-xs whitespace-pre-line">
              {isRtl
                ? "سرعة فائقة للحالات الروتينية أيضا"
                : "Swift routine reporting also"}
            </span>
          </div>
          <div className="border-b pb-2 text-center shadow-[0_8px_4px_-4px_rgba(0,0,0,0.1)] lg:absolute lg:right-40 lg:bottom-30">
            <span className="mb-2 block text-3xl font-bold">
              {t.stats.patients}
            </span>
            <span className="block text-sm font-bold whitespace-pre-line">
              {t.stats.patientsLabel}
            </span>
            <span className="block text-xs whitespace-pre-line">
              {isRtl
                ? "تشمل أيام الأجازات و الفترة الليلة"
                : "Including holidays and nights"}
            </span>
          </div>
        </div>
        {/*
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
        </div>*/}
      </div>
    </section>
  )
}
