import type { TranslationSet } from "@/lib/translations"

interface TestimonialsProps {
  t: TranslationSet
}

export default function Testimonials({ t }: TestimonialsProps) {
  return (
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
  )
}
