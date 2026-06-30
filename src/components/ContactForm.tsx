import { useEffect, useState } from "react"
import { CheckCircle2, MessageSquare, Send, ShieldCheck } from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

type UserType = "hospital" | "patient" | "other"

interface ContactFormProps {
  t: TranslationSet
  isRtl: boolean
  // Hero/ServiceTabs CTAs preset this from outside; the radio buttons below
  // still let the visitor change it freely once they're on the form.
  requestedUserType: "hospital" | "patient"
}

export default function ContactForm({
  t,
  isRtl,
  requestedUserType,
}: ContactFormProps) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    userType: requestedUserType as UserType,
  })
  const [contactSubmitting, setContactSubmitting] = useState(false)
  const [contactSuccess, setContactSuccess] = useState(false)

  // Sync only when an outside CTA changes the requested type — doesn't
  // fight the visitor's own radio-button choice afterward.
  useEffect(() => {
    setContactForm((prev) => ({ ...prev, userType: requestedUserType }))
  }, [requestedUserType])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactForm.name || !contactForm.phone) {
      alert(
        isRtl
          ? "يرجى ملء الاسم ورقم الهاتف على الأقل."
          : "Please fill in at least the Name and Phone Number."
      )
      return
    }
    setContactSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setContactSubmitting(false)
      setContactSuccess(true)
    }, 1200)
  }

  const successWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? `مرحباً، اسمي ${contactForm.name || ""} وقد قمت بإرسال طلب تواصل عبر الموقع. هاتفي: ${contactForm.phone || ""}.`
      : `Hello, my name is ${contactForm.name || ""} and I just submitted an inquiry on your website. My phone: ${contactForm.phone || ""}.`
  )

  /* Left side: Interactive Lead Inquiry / Pricing Form */

  return (
    <div id="contact" className="scroll-mt-18 lg:col-span-6">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <div className="space-y-2">
          <h3 className="text-xl leading-none font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            {t.contactForm.sectionTitle}
          </h3>
          <p className="text-xs leading-normal text-slate-500 sm:text-sm">
            {t.contactForm.sectionSubtitle}
          </p>
        </div>

        {contactSuccess ? (
          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-slate-900">
                {t.contactForm.successTitle}
              </h4>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-600">
                {t.contactForm.successDesc}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row">
              <a
                href={successWhatsAppLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
              >
                <MessageSquare className="h-4 w-4" />
                <span>
                  {isRtl ? "افتح محادثة واتساب فورا" : "Open WhatsApp Chat Now"}
                </span>
              </a>
              <button
                onClick={() => {
                  setContactSuccess(false)
                  setContactForm({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    userType: "hospital",
                  })
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
              >
                <span>
                  {isRtl ? "إرسال طلب آخر" : "Submit Another Inquiry"}
                </span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4 text-start">
            {/* User classification for smart lead routing */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {t.contactForm.iAmA}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setContactForm((prev) => ({
                      ...prev,
                      userType: "hospital",
                    }))
                  }
                  className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                    contactForm.userType === "hospital"
                      ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {t.contactForm.hospitalOption.split(" / ")[0]}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContactForm((prev) => ({ ...prev, userType: "patient" }))
                  }
                  className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                    contactForm.userType === "patient"
                      ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {isRtl ? "مريض/فرد" : "Patient"}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContactForm((prev) => ({ ...prev, userType: "other" }))
                  }
                  className={`rounded-lg border px-2.5 py-2 text-center text-xs font-bold transition-all ${
                    contactForm.userType === "other"
                      ? "border-brand-500 bg-brand-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {t.contactForm.otherOption}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                {t.contactForm.name} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder={
                  isRtl
                    ? "مثال: مجمع الحياة الطبي / د. أحمد"
                    : "e.g., Al-Hayat Clinic / Dr. Ahmed"
                }
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500 sm:text-sm"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  {t.contactForm.phone} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={contactForm.phone}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="e.g., +966 50 123 4567"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  {t.contactForm.email}
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="e.g., info@hospital.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                {t.contactForm.message}
              </label>
              <textarea
                rows={3}
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder={
                  isRtl
                    ? "اكتب هنا أي تفاصيل إضافية بخصوص الفحوصات أو حجم الحالات..."
                    : "Describe your clinical volumes or query..."
                }
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
              />
            </div>

            <button
              type="submit"
              disabled={contactSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-xs font-black tracking-wider text-white uppercase shadow-md shadow-brand-500/10 transition-all hover:bg-brand-700 disabled:opacity-50"
            >
              {contactSubmitting ? (
                <span>
                  {isRtl ? "جاري الإرسال والتشغيل..." : "Submitting Inquiry..."}
                </span>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>{t.contactForm.submit}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Secure clinical guarantee */}
        <div className="flex items-center justify-center gap-2.5 border-t border-slate-100 pt-3 text-[10px] text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>
            {isRtl
              ? "نضمن الحفاظ المطلق على خصوصية المريض وبأعلى تشفير رقمي معتمد"
              : "100% Patient Confidentiality & Encryption HIPAA compliant"}
          </span>
        </div>
      </div>
    </div>
  )
}
