import {
  Phone,
  MessageSquare,
  ExternalLink,
  Mail,
  Activity,
} from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

interface ContactInfoCardsProps {
  t: TranslationSet
  isRtl: boolean
}

export default function ContactInfoCards({ t, isRtl }: ContactInfoCardsProps) {
  const generalWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? "أهلاً تيلي راد جلوبال، أود الاستفسار عن خدمات كتابة تقارير الأشعة عن بعد لمركزنا."
      : "Hello TeleRad Global, I would like to inquire about teleradiology reporting services for our center."
  )

  return (
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
                  href={generalWhatsAppLink}
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
  )
}
