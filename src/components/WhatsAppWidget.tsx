import { buildWhatsAppLink } from "@/lib/whatsapp"

interface WhatsAppWidgetProps {
  isRtl: boolean
}

export default function WhatsAppWidget({ isRtl }: WhatsAppWidgetProps) {
  const generalWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? "أهلاً تيلي راد جلوبال، أود الاستفسار عن خدمات كتابة تقارير الأشعة عن بعد لمركزنا."
      : "Hello TeleRad Global, I would like to inquire about teleradiology reporting services for our center."
  )

  /* Highly visible, persistent interactive WhatsApp floating lead-generator widget */

  return (
    <div className="pointer-events-none fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3">
      {/* Dynamic speech bubble warning/reminder that reps are online */}
      <div className="pointer-events-auto flex max-w-[200px] animate-bounce items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3 py-2 text-[10px] font-bold text-slate-800 shadow-xl sm:text-xs">
        <span className="h-2 w-2 shrink-0 animate-ping rounded-full bg-emerald-500"></span>
        <span>
          {isRtl ? "تواصل فوراً واتساب 24/7" : "WhatsApp Reps Live Now"}
        </span>
      </div>

      <a
        href={generalWhatsAppLink}
        target="_blank"
        referrerPolicy="no-referrer"
        className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 hover:bg-emerald-500"
        title="Direct WhatsApp Support"
      >
        {/* Custom SVG logo of WhatsApp for precision design */}
        <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.588 2.036 14.113 1.01 11.488 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.47 3.393 1.357 4.869l-.993 3.627 3.73-.977z" />
        </svg>
      </a>
    </div>
  )
}
