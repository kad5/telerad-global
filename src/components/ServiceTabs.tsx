import { useState } from "react"
import {
  Building2,
  UserCheck,
  Briefcase,
  Check,
  MessageSquare,
  FileText,
} from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

interface ServiceTabsProps {
  t: TranslationSet
  isRtl: boolean
  onSelectUserType: (userType: "hospital" | "patient") => void
}

export default function ServiceTabs({
  t,
  isRtl,
  onSelectUserType,
}: ServiceTabsProps) {
  const [activeTab, setActiveTab] = useState<"hospital" | "patient" | "career">(
    "hospital"
  )

  const hospitalWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? "أهلاً، أنا صاحب مستشفى/مركز أشعة وأود مناقشة عقد شراكة لكتابة تقارير الأشعة وتغطية النوبتجيات."
      : "Hello, I am a hospital/radiology center director and would like to discuss a reporting partnership."
  )

  const patientWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? "مرحباً، أود الحصول على قراءة لتقرير الأشعة الخاص بي (رأي طبي ثانٍ)."
      : "Hello, I would like to get a second opinion diagnostic read on my radiological scan."
  )

  return (
    <section id="services" className="scroll-mt-18 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-2 text-xs font-bold tracking-widest text-brand-600 uppercase">
            {t.services.sectionTitle}
          </h2>
          <p className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Navigation Tabs to cater to 3 distinct customer groups */}
        <div className="mx-auto mb-12 flex max-w-4xl flex-col items-stretch justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-200/50 p-1.5 sm:flex-row">
          <button
            onClick={() => setActiveTab("hospital")}
            className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              activeTab === "hospital"
                ? "bg-white text-brand-700 shadow-sm"
                : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
            }`}
          >
            <Building2
              className={`h-4.5 w-4.5 ${activeTab === "hospital" ? "text-brand-600" : "text-slate-400"}`}
            />
            <span>{isRtl ? "المستشفيات والمراكز" : "Hospitals & Centers"}</span>
          </button>

          <button
            onClick={() => setActiveTab("patient")}
            className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              activeTab === "patient"
                ? "bg-white text-brand-700 shadow-sm"
                : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
            }`}
          >
            <UserCheck
              className={`h-4.5 w-4.5 ${activeTab === "patient" ? "text-brand-600" : "text-slate-400"}`}
            />
            <span>{isRtl ? "المرضى والأفراد" : "Patients & Individuals"}</span>
          </button>

          <button
            onClick={() => setActiveTab("career")}
            className={`flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
              activeTab === "career"
                ? "bg-white text-brand-700 shadow-sm"
                : "text-slate-600 hover:bg-white/40 hover:text-slate-900"
            }`}
          >
            <Briefcase
              className={`h-4.5 w-4.5 ${activeTab === "career" ? "text-brand-600" : "text-slate-400"}`}
            />
            <span>
              {isRtl ? "أطباء الأشعة (توظيف)" : "Radiologists Careers"}
            </span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mx-auto max-w-5xl">
          {activeTab === "hospital" && (
            <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
              <div className="space-y-5 md:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                  <Building2 className="h-3.5 w-3.5" />
                  <span>{t.services.hospitalSubtitle}</span>
                </div>
                <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {t.services.hospitalTitle}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {t.services.hospitalDesc}
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    t.services.hospitalBullet1,
                    t.services.hospitalBullet2,
                    t.services.hospitalBullet3,
                    t.services.hospitalBullet4,
                  ].map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <a
                    href={hospitalWhatsAppLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{t.services.hospitalCta}</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => onSelectUserType("hospital")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-slate-200"
                  >
                    <span>
                      {isRtl
                        ? "طلب تواصل واقتراح أسعار"
                        : "Inquire and Request Quote"}
                    </span>
                  </a>
                </div>
              </div>
              <div className="relative md:col-span-5">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
                    alt="Modern hospital diagnostics laboratory"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                    <span className="block text-xs font-bold tracking-widest text-emerald-400 uppercase">
                      {isRtl ? "خدمات مخصصة لـ" : "Dedicated Support for"}
                    </span>
                    <span className="mt-1 block text-base font-bold text-white">
                      {isRtl
                        ? "المستشفيات، المراكز والعيادات الصغيرة"
                        : "Small Hospitals, Diagnostics & Clinics"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "patient" && (
            <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
              <div className="space-y-5 md:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>{t.services.patientSubtitle}</span>
                </div>
                <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {t.services.patientTitle}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {t.services.patientDesc}
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    t.services.patientBullet1,
                    t.services.patientBullet2,
                    t.services.patientBullet3,
                    t.services.patientBullet4,
                  ].map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <a
                    href={patientWhatsAppLink}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{t.services.patientCta}</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => onSelectUserType("patient")}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-800 transition-all hover:bg-slate-200"
                  >
                    <span>
                      {isRtl ? "تفاصيل إرسال الأشعة" : "How to Upload & Pay"}
                    </span>
                  </a>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                    alt="Radiology diagnostics consultant on screen"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                    <span className="text-brand-400 block text-xs font-bold tracking-widest uppercase">
                      {isRtl
                        ? "رأي طبي استشاري موثوق"
                        : "Clinical Second Opinions"}
                    </span>
                    <span className="mt-1 block text-base font-bold text-white">
                      {isRtl
                        ? "دقة تشخيصية تحمي حياتك وعائلتك"
                        : "Diagnostic precision for family reassurance"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "career" && (
            <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 md:grid-cols-12">
              <div className="space-y-5 md:col-span-7">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>{t.services.careerSubtitle}</span>
                </div>
                <h3 className="text-xl leading-snug font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  {t.services.careerTitle}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {t.services.careerDesc}
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    t.services.careerBullet1,
                    t.services.careerBullet2,
                    t.services.careerBullet3,
                    t.services.careerBullet4,
                  ].map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                  <a
                    href="#career-portal"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-700"
                  >
                    <FileText className="h-4 w-4" />
                    <span>{t.services.careerCta}</span>
                  </a>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
                    alt="Expert radiologist analyzing scans"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6">
                    <span className="block text-xs font-bold tracking-widest text-amber-400 uppercase">
                      {isRtl
                        ? "انضم لنخبة من المستشارين"
                        : "Work From Anywhere"}
                    </span>
                    <span className="mt-1 block text-base font-bold text-white">
                      {isRtl
                        ? "مرونة كاملة وعوائد بالدولار والريال"
                        : "Work on your terms with premium payouts"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
