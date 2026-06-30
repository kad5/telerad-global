import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { TranslationSet } from "@/lib/translations"

interface FaqAccordionProps {
  t: TranslationSet
}

export default function FaqAccordion({ t }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
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
  )
}
