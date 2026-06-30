import { useRef, useState } from "react"
import {
  FileCheck,
  MessageSquare,
  Check,
  UploadCloud,
  Briefcase,
} from "lucide-react"
import type { TranslationSet } from "@/lib/translations"
import { buildWhatsAppLink } from "@/lib/whatsapp"

interface CareerFormProps {
  t: TranslationSet
  isRtl: boolean
}

export default function CareerForm({ t, isRtl }: CareerFormProps) {
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    selectedSubspecialties: [] as string[],
  })
  const [cvFile, setCvFile] = useState<{ name: string; size: string } | null>(
    null
  )
  const [cvUploading, setCvUploading] = useState(false)
  const [careerSubmitting, setCareerSubmitting] = useState(false)
  const [careerSuccess, setCareerSuccess] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!careerForm.name || !careerForm.phone || !cvFile) {
      alert(
        isRtl
          ? "يرجى ملء الاسم ورقم الهاتف ورفع السيرة الذاتية."
          : "Please fill in Name, Phone and Upload your CV."
      )
      return
    }
    setCareerSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setCareerSubmitting(false)
      setCareerSuccess(true)
    }, 1500)
  }

  const handleSubspecialtyToggle = (sub: string) => {
    setCareerForm((prev) => {
      const current = prev.selectedSubspecialties
      if (current.includes(sub)) {
        return {
          ...prev,
          selectedSubspecialties: current.filter((s) => s !== sub),
        }
      } else {
        return { ...prev, selectedSubspecialties: [...current, sub] }
      }
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setCvUploading(true)
      setTimeout(() => {
        setCvFile({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        })
        setCvUploading(false)
      }, 1000)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      setCvUploading(true)
      setTimeout(() => {
        setCvFile({
          name: file.name,
          size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        })
        setCvUploading(false)
      }, 1000)
    }
  }

  const careerWhatsAppLink = buildWhatsAppLink(
    isRtl
      ? `مرحباً، أنا طبيب أشعة وأود الانضمام لشبكة كتابة التقارير الخاصة بكم. اسمي: ${careerForm.name || "طبيب أشعة"} - هاتف: ${careerForm.phone || ""}.`
      : `Hello, I am a radiologist interested in joining your network. My name: ${careerForm.name || "Radiologist"} - Phone: ${careerForm.phone || ""}.`
  )
  /* Right side: Radiologist Job CV Upload and Subspecialty Picker */
  return (
    <div id="career-portal" className="scroll-mt-18 lg:col-span-6">
      <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <div className="space-y-2">
          <span className="inline-block rounded-md border border-amber-100 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-800 uppercase">
            {isRtl ? "توظيف أطباء أشعة" : "Now Recruiting"}
          </span>
          <h3 className="text-xl leading-none font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            {t.careerForm.sectionTitle}
          </h3>
          <p className="text-xs leading-normal text-slate-500 sm:text-sm">
            {t.careerForm.sectionSubtitle}
          </p>
        </div>

        {careerSuccess ? (
          <div className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <FileCheck className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-lg font-bold text-slate-900">
                {t.careerForm.successTitle}
              </h4>
              <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-600">
                {t.careerForm.successDesc}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row">
              <a
                href={careerWhatsAppLink}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700"
              >
                <MessageSquare className="h-4 w-4" />
                <span>
                  {isRtl
                    ? "إشعار مباشر عبر واتساب"
                    : "Direct WhatsApp Notification"}
                </span>
              </a>
              <button
                onClick={() => {
                  setCareerSuccess(false)
                  setCvFile(null)
                  setCareerForm({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    selectedSubspecialties: [],
                  })
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-200"
              >
                <span>{t.careerForm.anotherSubmission}</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleCareerSubmit} className="space-y-4 text-start">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                {t.careerForm.name} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={careerForm.name}
                onChange={(e) =>
                  setCareerForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder={
                  isRtl
                    ? "مثال: د. مازن عبد العزيز"
                    : "e.g., Dr. Mazen Abdelaziz"
                }
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  {t.careerForm.phone} <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={careerForm.phone}
                  onChange={(e) =>
                    setCareerForm((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  placeholder="e.g., +20 100 123 4567"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-bold text-slate-700">
                  {t.careerForm.country}
                </label>
                <input
                  type="text"
                  value={careerForm.country}
                  onChange={(e) =>
                    setCareerForm((prev) => ({
                      ...prev,
                      country: e.target.value,
                    }))
                  }
                  placeholder={
                    isRtl ? "مصر، السعودية، العراق..." : "Egypt, KSA, Iraq..."
                  }
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 transition-all outline-none focus:border-brand-500"
                />
              </div>
            </div>

            {/* Subspecialties Checkboxes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {t.careerForm.subspecialties}
              </label>
              <div className="grid max-h-[140px] grid-cols-1 gap-1.5 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-2.5 sm:grid-cols-2">
                {t.careerForm.subspecialtiesList.map((sub, idx) => {
                  const isChecked =
                    careerForm.selectedSubspecialties.includes(sub)
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => handleSubspecialtyToggle(sub)}
                      className={`flex items-center gap-2 rounded p-1.5 text-start transition-all ${
                        isChecked
                          ? "border-brand-200/50 border bg-brand-50 font-bold text-brand-800"
                          : "border border-transparent text-slate-600 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          isChecked
                            ? "border-brand-500 bg-brand-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3" />}
                      </div>
                      <span className="truncate text-[11px]">{sub}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Drag and Drop File Upload Container with active states */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700">
                {t.careerForm.cvUpload} <span className="text-rose-500">*</span>
              </label>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                className={`flex cursor-pointer flex-col items-center justify-center space-y-2 rounded-xl border-2 border-dashed p-4 text-center transition-all ${
                  isDragOver
                    ? "border-brand-500 bg-brand-50"
                    : cvFile
                      ? "border-emerald-400 bg-emerald-50/40"
                      : "hover:border-brand-400 border-slate-300 hover:bg-slate-50"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc"
                  className="hidden"
                />

                {cvUploading ? (
                  <>
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent"></div>
                    <span className="text-xs font-bold text-brand-600">
                      {isRtl
                        ? "جاري فحص وتأمين الملف..."
                        : "Scanning file security..."}
                    </span>
                  </>
                ) : cvFile ? (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <span className="block max-w-[240px] truncate text-xs font-bold text-slate-800">
                        {cvFile.name}
                      </span>
                      <span className="block text-[10px] text-slate-500">
                        {cvFile.size} | {t.careerForm.cvUploaded}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <UploadCloud className="h-8 w-8 text-slate-400" />
                    <p className="px-2 text-xs leading-relaxed text-slate-600">
                      {t.careerForm.cvDragDrop}
                    </p>
                  </>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={careerSubmitting || cvUploading}
              className="hover:bg-slate-850 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-3 text-xs font-black tracking-wider text-white uppercase shadow-sm transition-all disabled:opacity-50"
            >
              {careerSubmitting ? (
                <span>{t.careerForm.submitting}</span>
              ) : (
                <>
                  <Briefcase className="h-4 w-4 text-slate-300" />
                  <span>{t.careerForm.submit}</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
