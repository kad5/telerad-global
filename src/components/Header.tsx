import { Link } from "@tanstack/react-router"
import {
  Activity,
  BrainCircuit,
  Languages,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import type { TranslationSet } from "@/lib/translations"

interface HeaderProps {
  lang: "ar" | "en"
  t: TranslationSet
}

export default function Header({ lang, t }: HeaderProps) {
  const isRtl = lang === "ar"

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-500/20 transition-colors group-hover:bg-brand-700">
            <BrainCircuit className="h-5.5 w-5.5 text-white" />
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
        <nav className="hidden flex-1 items-center justify-around gap-2 px-4 text-sm font-medium text-slate-600 lg:flex">
          <a
            href="#services"
            className="py-2 text-center transition-colors hover:text-brand-600"
          >
            {t.nav.services}
          </a>
          <a
            href="#stats"
            className="py-2 text-center transition-colors hover:text-brand-600"
          >
            {t.nav.stats}
          </a>
          <a
            href="#calculator"
            className="py-2 text-center transition-colors hover:text-brand-600"
          >
            {t.nav.calculator}
          </a>
          <a
            href="#testimonials"
            className="py-2 text-center break-all transition-colors hover:text-brand-600"
          >
            {t.nav.testimonials}
          </a>
          <a
            href="#career"
            className="py-2 text-center transition-colors hover:text-brand-600"
          >
            {t.nav.career}
          </a>
          <a
            href="#contact"
            className="py-2 text-center transition-colors hover:text-brand-600"
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
            className="group hidden items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm shadow-brand-500/10 transition-all hover:bg-brand-700 sm:inline-flex md:text-sm"
          >
            <span>{isRtl ? "احصل على عرض مخصص" : "Get Free Quote"}</span>
            {isRtl ? (
              <ArrowLeft className="rtl-flip h-4 w-4 transition group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
