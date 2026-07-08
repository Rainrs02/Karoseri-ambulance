'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useConsultationStore } from '@/store/consultationStore'
import { Phone, Mail, Clock, MapPin, CheckCircle, AlertCircle, ArrowLeft, ArrowRight, UploadCloud } from 'lucide-react'
import CustomIcon from '@/components/icons/CustomIcon'

export default function Kontak() {
  const {
    step,
    formData,
    isSubmitting,
    submitStatus,
    updateFormData,
    nextStep,
    prevStep,
    setStep,
    resetForm,
    submitForm,
  } = useConsultationStore()

  // Untuk validasi form lokal per step
  const [errors, setErrors] = useState<Record<string, string>>({})

  // File upload mockup state
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[e.target.name]
        return next
      })
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    const list = [...(formData.layananKustom || [])]
    if (checked) {
      list.push(name)
    } else {
      const idx = list.indexOf(name)
      if (idx > -1) list.splice(idx, 1)
    }
    updateFormData({ layananKustom: list })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData({ fotoKendaraanName: e.target.files[0].name })
    }
  }

  // Validasi manual tiap step sebelum lanjut
  const validateStep = () => {
    const nextErrors: Record<string, string> = {}
    if (step === 1) {
      if (!formData.nama.trim()) nextErrors.nama = 'Nama lengkap wajib diisi'
      if (!formData.email.trim()) nextErrors.email = 'Email wajib diisi'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Format email tidak valid'
      if (!formData.telepon.trim()) nextErrors.telepon = 'Nomor telepon wajib diisi'
    } else if (step === 2) {
      if (!formData.merkKendaraan.trim()) nextErrors.merkKendaraan = 'Merk kendaraan wajib diisi'
      if (!formData.tipeKendaraan.trim()) nextErrors.tipeKendaraan = 'Tipe kendaraan wajib diisi'
      if (!formData.tahunKendaraan.trim()) nextErrors.tahunKendaraan = 'Tahun kendaraan wajib diisi'
    } else if (step === 3) {
      if (!formData.tipeAmbulance) nextErrors.tipeAmbulance = 'Pilih salah satu tipe ambulance'
      if (!formData.budgetRange) nextErrors.budgetRange = 'Pilih salah satu kisaran anggaran'
      if (!formData.deadlinePengerjaan) nextErrors.deadlinePengerjaan = 'Isi deadline pengerjaan'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      nextStep()
    }
  }

  const handleSubmit = async () => {
    const success = await submitForm()
    if (success) {
      const msg = `*PENGAJUAN KONSULTASI KAROSERI AMBULANCE*
----------------------------------------
*Data Diri*
Nama: ${formData.nama}
Instansi: ${formData.institusi || '-'}
Telepon: ${formData.telepon}
Email: ${formData.email}

*Detail Kendaraan*
Sasis: ${formData.merkKendaraan} ${formData.tipeKendaraan} (${formData.tahunKendaraan})

*Kebutuhan Karoseri*
Tipe: ${formData.tipeAmbulance.toUpperCase()}
Layanan: ${(formData.layananKustom || []).join(', ') || '-'}
Budget: ${formData.budgetRange}
Deadline: ${formData.deadlinePengerjaan}
----------------------------------------
Mohon info lebih lanjut. Terima kasih.`

      const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`
      window.open(waLink, '_blank')
    }
  }

  const budgetOptions = [
    'Di bawah Rp 30.000.000',
    'Rp 30.000.000 - Rp 60.000.000',
    'Rp 60.000.000 - Rp 100.000.000',
    'Di atas Rp 100.000.000',
  ]

  const customServicesList = [
    { id: 'oxygen', label: 'Central Oxygen System' },
    { id: 'lighting', label: 'Rotary Lightbar & Siren' },
    { id: 'cabin', label: 'Lemari & Rak Medis' },
    { id: 'electric', label: 'Electrical Inverter AC/DC' },
    { id: 'floor', label: 'Lantai Plywood + Vinyl Medis' },
    { id: 'stretcher', label: 'Stretcher Gurney & Rel Stopper' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            CONTACT CENTER // HUBUNGI TIM SALES
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Konsultasi Proyek & Kontak
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Minta estimasi biaya karoseri secara presisi dengan mengisi 4 langkah form rancangan di bawah.
          </p>
        </div>
      </section>

      {/* Main Grid: Kontak & Form */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Mock Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
                WORKSHOP LOCATION // ALAMAT
              </span>
              <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
                Kunjungi Workshop Wasilah
              </h2>
              <div className="w-12 h-1 bg-accent-teal" />
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-inter text-navy/80">
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                <div>
                  <strong>Wasilah Karoseri Utama:</strong><br />
                  Kawasan Industri Sentul, Jl. Otomotif Raya No. 45, Babakan Madang, Bogor, Jawa Barat 16810
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent-teal shrink-0" />
                <span>Office: (021) 879-1234 // WA: +62 812-3456-7890</span>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent-teal shrink-0" />
                <span>sales@wasilahambulance.co.id</span>
              </div>

              <div className="flex gap-3 items-center">
                <Clock className="w-5 h-5 text-accent-teal shrink-0" />
                <span>Senin - Sabtu: 08:00 - 17:00 WIB (Minggu Libur)</span>
              </div>
            </div>

            {/* Mock Technical Blueprint Map */}
            <div className="border-2 border-navy bg-blueprint text-white rounded-[4px] p-5 shadow-solid aspect-video w-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-20 border border-dashed border-accent-teal/15 m-2" />
              
              <div className="flex justify-between items-center text-[9px] font-fira text-accent-teal/70 pb-2 border-b border-accent-teal/20 relative z-10">
                <span>MAPS_LAYOUT // BABAKAN_MADANG_BOGOR</span>
                <span>GRID 09.A</span>
              </div>

              {/* Graphical Blueprint Map drawing */}
              <div className="relative flex-grow flex items-center justify-center py-4 relative z-10">
                {/* Visual road outlines */}
                <div className="absolute w-[80%] h-[2px] bg-accent-teal/40 transform rotate-12" />
                <div className="absolute w-[2px] h-[80%] bg-accent-teal/40 transform translate-x-12" />
                
                {/* Pin Point */}
                <div className="absolute transform translate-x-12 translate-y-4 flex flex-col items-center">
                  <div className="w-4 h-4 bg-cta-orange border-2 border-white rounded-full animate-bounce flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="bg-navy text-white border border-accent-teal font-oswald text-[9px] uppercase px-1.5 py-0.5 rounded mt-1 whitespace-nowrap shadow">
                    WASILAH WORKSHOP
                  </span>
                </div>

                <div className="absolute top-2 left-6 text-[10px] font-fira text-white/50">
                  Tol Jagorawi - Exit Sentul Selatan
                </div>
              </div>

              <div className="text-[9px] font-fira text-abu-light/50 border-t border-accent-teal/20 pt-2 relative z-10 flex justify-between">
                <span>ESTIMATED TIME FROM TOLL: 10 MIN</span>
                <span>COORD: 6.5512° S, 106.8624° E</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Consultation Form */}
          <div className="lg:col-span-7 bg-abu-light/40 border-2 border-navy rounded-[4px] p-6 sm:p-8 shadow-solid">
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-[10px] font-fira text-navy/40 mb-2">
                <span>WLS_CONSULT_FORM_V1.EXE</span>
                <span>LANGKAH {step} DARI 4</span>
              </div>
              <div className="h-2 w-full bg-navy/10 rounded-full overflow-hidden border border-navy/20 flex">
                <div
                  className="bg-accent-teal h-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
              <div className="grid grid-cols-4 text-center text-[9px] font-fira text-navy/55 pt-2">
                <span className={step >= 1 ? 'text-accent-teal font-bold' : ''}>1. DATA DIRI</span>
                <span className={step >= 2 ? 'text-accent-teal font-bold' : ''}>2. KENDARAAN</span>
                <span className={step >= 3 ? 'text-accent-teal font-bold' : ''}>3. KEBUTUHAN</span>
                <span className={step >= 4 ? 'text-accent-teal font-bold' : ''}>4. KONFIRMASI</span>
              </div>
            </div>

            {/* Form Fields */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="mx-auto w-12 h-12 bg-accent-teal/15 text-accent-teal rounded-full flex items-center justify-center border border-accent-teal">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-oswald text-lg font-bold uppercase text-navy">
                        Pengajuan Sukses Terkirim
                      </h3>
                      <p className="text-xs text-navy/70 leading-relaxed font-inter max-w-md mx-auto">
                        Terima kasih, data rancangan modifikasi Anda telah masuk ke database Wasilah. Tim Sales Engineering kami akan segera mereview dan menyusun estimasi penawaran harga resmi.
                      </p>
                    </div>
                    <button
                      onClick={resetForm}
                      className="btn-mech-primary text-xs py-2 px-4 inline-block mt-4"
                    >
                      Ajukan Konsultasi Baru
                    </button>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    key="error-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="mx-auto w-12 h-12 bg-cta-orange/15 text-cta-orange rounded-full flex items-center justify-center border border-cta-orange">
                      <AlertCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-oswald text-lg font-bold uppercase text-navy">
                        Gagal Mengirim Pengajuan
                      </h3>
                      <p className="text-xs text-navy/70 leading-relaxed font-inter max-w-md mx-auto">
                        Terjadi kegagalan jaringan atau server saat memproses data. Anda juga dapat langsung mengirimkan kebutuhan via WhatsApp.
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center pt-2">
                      <button
                        onClick={prevStep}
                        className="px-4 py-2 border border-navy/20 text-navy font-oswald text-xs uppercase tracking-wider rounded-[4px] bg-white"
                      >
                        Kembali Ke Form
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="btn-mech-primary text-xs py-2 px-4"
                      >
                        Coba Lagi
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-xs text-navy"
                  >
                    {/* STEP 1: DATA DIRI */}
                    {step === 1 && (
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Nama Lengkap *
                          </label>
                          <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={handleTextChange}
                            placeholder="Contoh: dr. Setiawan Pratama"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.nama ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.nama && <span className="text-[10px] text-cta-orange font-inter">{errors.nama}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Nama Instansi / Perusahaan / Yayasan
                          </label>
                          <input
                            type="text"
                            name="institusi"
                            value={formData.institusi}
                            onChange={handleTextChange}
                            placeholder="Contoh: RSUD Pratama Sehat / Yayasan Amal Abadi"
                            className="w-full border border-navy/20 p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Alamat Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleTextChange}
                            placeholder="Contoh: setiawan@rsudpratama.go.id"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.email ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.email && <span className="text-[10px] text-cta-orange font-inter">{errors.email}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Nomor Telepon / WhatsApp *
                          </label>
                          <input
                            type="text"
                            name="telepon"
                            value={formData.telepon}
                            onChange={handleTextChange}
                            placeholder="Contoh: 081234567890"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.telepon ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.telepon && <span className="text-[10px] text-cta-orange font-inter">{errors.telepon}</span>}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: DETAIL KENDARAAN CLIENT */}
                    {step === 2 && (
                      <div className="space-y-3">
                        <div className="bg-navy/5 p-3 rounded border border-navy/10 mb-4">
                          <p className="text-[11px] text-navy/70 leading-relaxed font-inter">
                            * Klien wajib menyediakan armada mobilnya sendiri. Kami memodifikasi interior dan eksterior dari unit yang Anda serahkan ke workshop.
                          </p>
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Merk Kendaraan *
                          </label>
                          <input
                            type="text"
                            name="merkKendaraan"
                            value={formData.merkKendaraan}
                            onChange={handleTextChange}
                            placeholder="Contoh: Toyota / Suzuki / Mitsubishi"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.merkKendaraan ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.merkKendaraan && <span className="text-[10px] text-cta-orange font-inter">{errors.merkKendaraan}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Tipe Kendaraan (Model) *
                          </label>
                          <input
                            type="text"
                            name="tipeKendaraan"
                            value={formData.tipeKendaraan}
                            onChange={handleTextChange}
                            placeholder="Contoh: Hiace Premio / APV Arena GL / Triton Exceed"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.tipeKendaraan ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.tipeKendaraan && <span className="text-[10px] text-cta-orange font-inter">{errors.tipeKendaraan}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Tahun Kendaraan *
                          </label>
                          <input
                            type="text"
                            name="tahunKendaraan"
                            value={formData.tahunKendaraan}
                            onChange={handleTextChange}
                            placeholder="Contoh: 2024 / 2025"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.tahunKendaraan ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.tahunKendaraan && <span className="text-[10px] text-cta-orange font-inter">{errors.tahunKendaraan}</span>}
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="border-2 border-dashed border-accent-teal/50 rounded-[4px] p-4 text-center bg-accent-teal/5 flex flex-col items-center justify-center gap-1.5">
                            <span className="font-oswald text-[11px] uppercase tracking-wider font-bold text-navy">
                              Informasi Foto & Video Kendaraan
                            </span>
                            <span className="text-xs text-navy/70 font-inter max-w-sm mx-auto">
                              Harap siapkan Foto & Video mobil Anda untuk nantinya dikirimkan langsung ke Admin via WhatsApp saat konsultasi.
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: KEBUTUHAN MODIFIKASI */}
                    {step === 3 && (
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Tipe Karoseri Ambulance *
                          </label>
                          <select
                            name="tipeAmbulance"
                            value={formData.tipeAmbulance}
                            onChange={handleTextChange}
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.tipeAmbulance ? 'border-cta-orange' : 'border-navy/20'}`}
                          >
                            <option value="">-- Pilih Tipe --</option>
                            <option value="transport">Ambulance Transport</option>
                            <option value="agd">Ambulance AGD (Advanced Life Support)</option>
                            <option value="jenazah">Ambulance Jenazah</option>
                            <option value="custom">Ambulance Custom (Kustom Lab/Mobil Klinik)</option>
                          </select>
                          {errors.tipeAmbulance && <span className="text-[10px] text-cta-orange font-inter">{errors.tipeAmbulance}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold mb-1.5">
                            Spesifikasi Tambahan / Jasa Modifikasi yang Dibutuhkan:
                          </label>
                          <div className="grid grid-cols-2 gap-2 text-xs font-inter text-navy/85 bg-white p-3 rounded border border-navy/10">
                            {customServicesList.map((svc) => (
                              <label key={svc.id} className="flex gap-2 items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={(formData.layananKustom || []).includes(svc.label)}
                                  onChange={(e) => handleCheckboxChange(svc.label, e.target.checked)}
                                  className="w-3.5 h-3.5 border-navy/20 accent-accent-teal cursor-pointer"
                                />
                                <span>{svc.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Kisaran Anggaran Modifikasi (Budget) *
                          </label>
                          <select
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleTextChange}
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.budgetRange ? 'border-cta-orange' : 'border-navy/20'}`}
                          >
                            <option value="">-- Pilih Anggaran --</option>
                            {budgetOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          {errors.budgetRange && <span className="text-[10px] text-cta-orange font-inter">{errors.budgetRange}</span>}
                        </div>

                        <div className="space-y-1">
                          <label className="block font-oswald text-[10px] uppercase tracking-wider font-bold">
                            Estimasi Deadline Pengerjaan *
                          </label>
                          <input
                            type="text"
                            name="deadlinePengerjaan"
                            value={formData.deadlinePengerjaan}
                            onChange={handleTextChange}
                            placeholder="Contoh: 14 Hari / Bulan Depan"
                            className={`w-full border p-2.5 rounded-[4px] bg-white focus:outline-none focus:border-accent-teal ${errors.deadlinePengerjaan ? 'border-cta-orange' : 'border-navy/20'}`}
                          />
                          {errors.deadlinePengerjaan && <span className="text-[10px] text-cta-orange font-inter">{errors.deadlinePengerjaan}</span>}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: KONFIRMASI DATA & SUBMIT */}
                    {step === 4 && (
                      <div className="space-y-4">
                        <div className="bg-navy/5 p-4 rounded border border-navy/10 space-y-3">
                          <h4 className="font-oswald text-xs font-bold uppercase tracking-wider text-navy border-b border-navy/10 pb-1.5">
                            Rangkuman Pengajuan Konsultasi:
                          </h4>
                          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-inter text-navy/85">
                            <div><strong>Nama Klien:</strong> {formData.nama}</div>
                            <div><strong>Instansi:</strong> {formData.institusi || '-'}</div>
                            <div><strong>Telepon:</strong> {formData.telepon}</div>
                            <div><strong>Email:</strong> {formData.email}</div>
                            <div><strong>Mobil/Sasis:</strong> {formData.merkKendaraan} {formData.tipeKendaraan} ({formData.tahunKendaraan})</div>

                            <div><strong>Tipe Ambulance:</strong> {formData.tipeAmbulance.toUpperCase()}</div>
                            <div><strong>Deadline:</strong> {formData.deadlinePengerjaan}</div>
                            <div className="col-span-2">
                              <strong>Layanan Kustom:</strong> {(formData.layananKustom || []).join(', ') || 'Nihil (Hanya Paket Standard)'}
                            </div>
                            <div className="col-span-2">
                              <strong>Budget Estimasi:</strong> {formData.budgetRange}
                            </div>
                          </div>
                        </div>

                        <p className="text-[11px] text-navy/60 leading-relaxed font-inter">
                          * Dengan menekan tombol Kirim, data spesifikasi Anda akan dikirim ke sales engineer Wasilah. Dokumen estimasi resmi akan diterbitkan dalam waktu 1x24 jam kerja.
                        </p>
                      </div>
                    )}

                    {/* Navigation Buttons inside Steps */}
                    <div className="flex gap-2 pt-6 justify-end border-t border-navy/10 mt-6">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={prevStep}
                          disabled={isSubmitting}
                          className="px-4 py-2 border border-navy/20 text-navy font-oswald text-xs uppercase tracking-wider rounded-[4px] hover:bg-white transition-colors flex items-center gap-1.5 disabled:opacity-50"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Kembali</span>
                        </button>
                      )}

                      {step < 4 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="btn-mech-primary text-xs py-2 px-4 flex items-center gap-1.5"
                        >
                          <span>Lanjut</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="btn-mech-primary text-xs py-2 px-5 flex items-center gap-1.5 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Mengirim...</span>
                          ) : (
                            <>
                              <span>Kirim Pengajuan</span>
                              <CheckCircle className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
