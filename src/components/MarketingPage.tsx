import { useEffect, useState } from "react"
import { translations } from "@/lib/translations"

import Header from "./Header"
import Hero from "./Hero"
import Stats from "./Stats"
import ServiceTabs from "./ServiceTabs"
import Calculator from "./Calculator"
import Testimonials from "./Testimonials"
import ContactForm from "./ContactForm"
import CareerForm from "./CareerForm"
import ContactInfoCards from "./ContactInfoCards"
import FaqAccordion from "./FaqAccordion"
import Footer from "./Footer"
import WhatsAppWidget from "./WhatsAppWidget"

interface MarketingPageProps {
  lang: "ar" | "en"
}

export default function MarketingPage({ lang }: MarketingPageProps) {
  const t = translations[lang]
  const isRtl = lang === "ar"
  const fontClass = isRtl ? "font-cairo" : "font-sans"

  const [requestedUserType, setRequestedUserType] = useState<
    "hospital" | "patient"
  >("hospital")

  useEffect(() => {
    // __root.tsx already sets dir/lang server-side from the route; this is
    // a client-side safety net for client-side navigations between /ar and
    // /en before the next head update lands.
    document.documentElement.dir = isRtl ? "rtl" : "ltr"
    document.documentElement.lang = lang
  }, [lang, isRtl])

  return (
    <div
      className={`min-h-screen ${fontClass} bg-slate-50 text-slate-800 transition-colors duration-300`}
    >
      <div className="flex items-center justify-center gap-2 border-b border-brand-800 bg-brand-900 px-4 py-2 text-center text-xs font-medium text-white md:text-sm">
        <span className="inline-block h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400"></span>
        <span>
          {isRtl
            ? "تغطية تيلي راديولوجي متميزة تخدم دول الشرق الأوسط و إفريقيا على مدار الساعة 24/7"
            : "Premium 24/7 Teleradiology coverage serving the Middle East and Africa"}
        </span>
      </div>

      <Header lang={lang} t={t} />
      <Hero t={t} isRtl={isRtl} onSelectUserType={setRequestedUserType} />
      <Stats t={t} isRtl={isRtl} />
      <ServiceTabs
        t={t}
        isRtl={isRtl}
        onSelectUserType={setRequestedUserType}
      />
      <Calculator t={t} isRtl={isRtl} />
      <Testimonials t={t} />

      {/* Contact + Career forms sit side by side in one section/grid */}
      <section className="border-b border-slate-100 bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <ContactForm
              t={t}
              isRtl={isRtl}
              requestedUserType={requestedUserType}
            />
            <CareerForm t={t} isRtl={isRtl} />
          </div>
        </div>
      </section>

      <ContactInfoCards t={t} isRtl={isRtl} />
      <FaqAccordion t={t} />
      <Footer t={t} isRtl={isRtl} />
      <WhatsAppWidget isRtl={isRtl} />
    </div>
  )
}
