import { Activity, Phone, Mail } from "lucide-react"
import type { TranslationSet } from "@/lib/translations"

interface FooterProps {
  t: TranslationSet
  isRtl: boolean
}

export default function Footer({ t, isRtl }: FooterProps) {
  return (
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
                <a href="#stats" className="transition-colors hover:text-white">
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
              {isRtl ? "النطاق الجغرافي للخدمة" : "Geographic Operations Scope"}
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
  )
}
