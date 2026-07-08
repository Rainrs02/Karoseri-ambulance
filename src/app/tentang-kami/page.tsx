'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, HardHat, FileText, Factory } from 'lucide-react'
import CustomIcon from '@/components/icons/CustomIcon'

export default function TentangKami() {
  const team = [
    { name: 'Ir. Hendra Wijaya', role: 'Direktur Teknik & Karoseri', spec: '20+ Tahun Pengalaman Otomotif' },
    { name: 'Fahmi Ramadhan, S.T.', role: 'Lead Visual Designer', spec: 'Spesialis Ergonomi Kabin Medis' },
    { name: 'Suryo Utomo', role: 'Kepala Instalasi Gas Medis', spec: 'Sertifikasi Pipa Oksigen Tekanan Tinggi' },
    { name: 'Eko Prasetyo', role: 'Master Wiring & Kelistrikan', spec: 'Spesialis Electrical Safety & Inverter' },
  ]

  const certifications = [
    { title: 'SKRB Dirjen Perhubungan Darat', no: 'No. SK-Rancang/1043/IX/2024', desc: 'Izin rancang bangun tipe kendaraan karoseri resmi untuk penerbitan STNK.' },
    { title: 'Sertifikat ISO 9001:2015', no: 'No. Cert-QMS/8892/2023', desc: 'Standar Manajemen Mutu Internasional dalam rekayasa karoseri kendaraan.' },
    { title: 'Rekomendasi Mutu Kemenkes RI', no: 'No. KK.02.01/V/3421/2025', desc: 'Kesesuaian tata ruang medis kabin ambulance transport dan emergency.' },
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner Header */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            COMPANY PROFILE // WASILAH KAROSERI
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Tentang Wasilah Karoseri
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Menyatukan keahlian mekanik otomotif dengan ketelitian standar kesehatan nasional. Kami merancang ruang penyelamat jiwa di jalan raya.
          </p>
        </div>
      </section>

      {/* Profil & Sejarah */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
              HISTORY // SEJARAH PERUSAHAAN
            </span>
            <h2 className="font-oswald text-3xl font-bold uppercase text-navy">
              Menjadi Rekan Terpercaya Rumah Sakit Sejak 2018
            </h2>
            <div className="w-12 h-1 bg-accent-teal" />
            <p className="text-xs sm:text-sm text-navy/85 leading-relaxed font-inter">
              Wasilah Karoseri berdiri di Bogor pada tahun 2018, berawal dari sebuah workshop kustom bodi kendaraan roda empat. Menyadari tingginya kebutuhan akan ambulance yang dirancang secara ergonomis dan aman, kami memfokuskan seluruh kapasitas produksi kami untuk spesialisasi modifikasi kendaraan medis.
            </p>
            <p className="text-xs sm:text-sm text-navy/85 leading-relaxed font-inter">
              Kami tidak menjual mobil utuh. Klien mendatangkan armada kosong milik mereka (Toyota, Suzuki, Isuzu, Mitsubishi, dll.), dan tim engineering kami menyulapnya menjadi kabin berfasilitas lengkap dengan instalasi gas oksigen tembaga, kelistrikan terisolasi, lemari obat kokoh, serta kursi paramedis berbusa ergonomis tahan bakteri.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="border-2 border-navy p-3 rounded-[4px] bg-abu-light shadow-solid relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/assets/Ambulance (2).jpg"
                alt="Wasilah Workshop"
                fill
                className="object-cover rounded-[2px]"
                sizes="(max-w-lg) 100vw, 400px"
              />
              <div className="absolute bottom-2 left-2 bg-navy text-white text-[9px] font-fira px-2 py-0.5 border border-accent-teal/30 rounded">
                DOKUMENTASI WORKSHOP WASILAH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-navy text-white relative">
        <div className="absolute inset-0 bg-blueprint opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Visi */}
            <div className="bg-navy-card border border-white/10 p-8 rounded-[4px] space-y-4">
              <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
                VISION // VISI KAMI
              </span>
              <h3 className="font-oswald text-2xl font-bold uppercase tracking-wider text-white">
                Menjadi Karoseri Spesialis Otomotif-Medis Terdepan di Indonesia
              </h3>
              <p className="text-xs text-abu-light/80 leading-relaxed font-inter">
                Menghasilkan unit modifikasi ambulance dengan tingkat presisi rekayasa tinggi, mengutamakan keselamatan jiwa paramedis dan pasien melalui kepatuhan ketat standar medis internasional dan regulasi darat nasional.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-navy-card border border-white/10 p-8 rounded-[4px] space-y-4">
              <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
                MISSION // MISI KAMI
              </span>
              <h3 className="font-oswald text-2xl font-bold uppercase tracking-wider text-white">
                Rencana Kerja Presisi & Higienis
              </h3>
              <ul className="space-y-3 text-xs text-abu-light/80 font-inter">
                <li className="flex gap-2">
                  <span className="text-accent-teal font-bold font-fira">[1]</span>
                  <span>Menggunakan material interior tahan api, anti-bakteri, dan mudah didekontaminasi.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-teal font-bold font-fira">[2]</span>
                  <span>Menerapkan standar keselamatan instalasi kelistrikan berproteksi ganda.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-teal font-bold font-fira">[3]</span>
                  <span>Membantu kepengurusan berkas KIR dan legalitas rancang bangun secara transparan.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Workshop & Fasilitas Produksi */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="border-2 border-navy p-3 rounded-[4px] bg-abu-light shadow-solid relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/assets/Ambulance (4).jpg"
                alt="Fasilitas Karoseri"
                fill
                className="object-cover rounded-[2px]"
                sizes="(max-w-lg) 100vw, 400px"
              />
              <div className="absolute bottom-2 left-2 bg-navy text-white text-[9px] font-fira px-2 py-0.5 border border-accent-teal/30 rounded">
                PROSES PENGELASAN INTERNAL KABIN
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
              PRODUCTION FACILITY // WORKSHOP
            </span>
            <h2 className="font-oswald text-3xl font-bold uppercase text-navy">
              Fasilitas Produksi Terstandardisasi
            </h2>
            <div className="w-12 h-1 bg-accent-teal" />
            <p className="text-xs sm:text-sm text-navy/85 leading-relaxed font-inter">
              Workshop utama kami seluas 1.200 m² dilengkapi dengan mesin pemotong plat presisi, ruang laminasi fiberglass terpisah (untuk meminimalisir polusi debu), perakitan komponen kayu solid berlapis PVC sheet, serta area kalibrasi tekanan oksigen dan kelistrikan.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs font-inter text-navy/80">
              <div className="flex gap-2 items-center">
                <Factory className="w-5 h-5 text-accent-teal shrink-0" />
                <span>Mesin CNC Bending Plat</span>
              </div>
              <div className="flex gap-2 items-center">
                <HardHat className="w-5 h-5 text-accent-teal shrink-0" />
                <span>Standard K3 Konstruksi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas & Sertifikasi */}
      <section className="py-20 bg-abu-light relative border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
              REGULATORY CREDENTIALS // LEGALITAS & SERTIFIKASI
            </span>
            <h2 className="font-oswald text-3xl font-bold uppercase text-navy">
              Izin Operasional & Sertifikat Legal
            </h2>
            <div className="w-12 h-1 bg-accent-teal mx-auto" />
            <p className="text-xs text-navy/70 leading-relaxed font-inter">
              Penting bagi pemilik kendaraan untuk memastikan karoseri memiliki sertifikat resmi agar unit dapat mengurus STNK plat merah/kuning dan lulus uji kelaikan jalan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white border-2 border-navy p-6 rounded-[4px] shadow-solid flex flex-col gap-4"
              >
                <div className="w-10 h-10 bg-navy text-white rounded-[4px] border border-accent-teal flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-oswald text-sm font-bold uppercase text-navy tracking-wider">
                    {cert.title}
                  </h3>
                  <span className="block font-fira text-[9px] text-accent-teal font-semibold">
                    {cert.no}
                  </span>
                  <p className="text-xs text-navy/70 leading-relaxed font-inter pt-2">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tim Profesional */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            HUMAN RESOURCES // TIM TEKNIS
          </span>
          <h2 className="font-oswald text-3xl font-bold uppercase text-navy">
            Didukung Oleh Ahli Otomotif-Medis
          </h2>
          <div className="w-12 h-1 bg-accent-teal mx-auto" />
          <p className="text-xs text-navy/70 leading-relaxed font-inter">
            Rancangan dikawal langsung dari meja gambar visual hingga penyambungan soket kelistrikan oleh teknisi bersertifikasi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-navy/20 bg-abu-light/50 p-6 rounded-[4px] hover:border-accent-teal transition-colors text-center space-y-3"
            >
              <div className="w-16 h-16 bg-navy text-white border border-accent-teal mx-auto flex items-center justify-center rounded-full">
                <CustomIcon name="wrench" size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-oswald text-sm font-bold uppercase text-navy">
                  {member.name}
                </h4>
                <p className="text-[10px] text-accent-teal font-fira uppercase">
                  {member.role}
                </p>
                <p className="text-xs text-navy/60 font-inter pt-1">
                  {member.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
