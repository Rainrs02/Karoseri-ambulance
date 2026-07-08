'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export default function AlurPemesanan() {
  const stepDetails = [
    {
      step: '01',
      title: 'Konsultasi Kebutuhan',
      desc: 'Tahap awal diskusi bersama Tim Sales & Technical Engineer kami. Menentukan fungsi utama armada (misal: transport desa, gawat darurat kota, dsb.) dan spesifikasi awal.',
      deliverables: ['Identifikasi regulasi Kemenkes', 'Rekomendasi jenis karoseri', 'Formulir kuesioner kebutuhan']
    },
    {
      step: '02',
      title: 'Survey Kendaraan Klien',
      desc: 'Inspeksi fisik sasis kendaraan kosong yang dibawa oleh klien ke workshop kami. Pengecekan dimensi kabin asli, tonase suspensi, dan posisi kelistrikan dasar mobil.',
      deliverables: ['Dokumen cek fisik kendaraan', 'Foto sasis kosong multi-angle', 'Konfirmasi kesiapan sasis']
    },
    {
      step: '03',
      title: 'Penentuan Spesifikasi',
      desc: 'Penyusunan dokumen Technical Specification (Lembar Data Teknis) yang mendata semua material yang akan dipakai (jenis vinyl, ketebalan lemari obat, dsb).',
      deliverables: ['Spesifikasi teknis resmi', 'Daftar alat kesehatan (alkes) terpilih', 'Draf rancangan awal']
    },
    {
      step: '04',
      title: 'Penawaran Harga (SPH)',
      desc: 'Penerbitan Surat Penawaran Harga (SPH) resmi berdasarkan spesifikasi final. Negosiasi kontrak kerja, jangka waktu pengerjaan, dan skema pembayaran.',
      deliverables: ['SPH Resmi bermaterai', 'Kontrak Kerja Karoseri', 'Jadwal antrean workshop']
    },
    {
      step: '05',
      title: 'Desain & Layout Visual',
      desc: 'Tim Designer kami membuat rancangan visual kabin interior. Desain ini dikirimkan kepada klien sebagai acuan pengerjaan fisik agar tidak terjadi kesalahan tata letak.',
      deliverables: ['Rancangan Visual layout interior', 'Simulasi posisi stretcher & tabung oksigen', 'Persetujuan layout tertulis']
    },
    {
      step: '06',
      title: 'Karoseri & Produksi Fisik',
      desc: 'Tahap pengerjaan fisik utama di workshop: pembongkaran kabin, pengelasan plat penguat, instalasi kelistrikan berpelindung conduit, penataan fiberglass, dan instalasi furnitur.',
      deliverables: ['Laporan mingguan progress (foto/video)', 'Pemasangan central oxygen system', 'Branding cutting sticker eksterior']
    },
    {
      step: '07',
      title: 'Quality Control (QC) & Uji Coba',
      desc: 'Pengujian ketat terhadap kebocoran gas oksigen (uji tekanan), kestabilan voltase inverter, uji kebocoran air kabin (water leak test), serta kelancaran gurney stretcher.',
      deliverables: ['Lembar Checklist Lulus QC', 'Uji fungsi kelistrikan AC/DC', 'Kalibrasi regulator gas medis']
    },
    {
      step: '08',
      title: 'Serah Terima Kendaraan',
      desc: 'Penyerahan unit ambulance yang telah rampung kepada perwakilan instansi klien. Kami mengadakan sesi uji fungsi dan pelatihan singkat cara penggunaan alat medis kabin.',
      deliverables: ['Berita Acara Serah Terima (BAST)', 'Buku panduan penggunaan instrumen', 'Berkas KIR dan SKRB terlampir']
    },
    {
      step: '09',
      title: 'Garansi & After Sales Support',
      desc: 'Garansi 1 tahun untuk seluruh pengerjaan konstruksi karoseri, kelistrikan, dan sistem oksigen. Dukungan teknisi fast-response jika terdapat keluhan atau butuh penggantian part.',
      deliverables: ['Kartu Garansi Resmi Wasilah', 'Layanan call-center darurat 24/7', 'Prioritas slot service & retrofit']
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            PRODUCTION PIPELINE // ALUR PEMESANAN KAROSERI
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Prosedur Standar Pengerjaan
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Dari diskusi awal hingga unit penyelamat medis mengaspal di jalan raya, berikut alur pengerjaan presisi kami.
          </p>
        </div>
      </section>

      {/* Steps breakdown list */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {stepDetails.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-navy/10 pb-12 last:border-b-0 items-start group"
          >
            {/* Number Code */}
            <div className="md:col-span-2 flex items-center md:flex-col gap-4">
              <span className="font-fira text-4xl font-extrabold text-accent-teal/30 group-hover:text-accent-teal transition-colors">
                {item.step}
              </span>
              <span className="font-fira text-[9px] text-navy/40 uppercase bg-abu-light border border-navy/10 px-2 py-0.5 rounded">
                STAGE-0{idx + 1}
              </span>
            </div>

            {/* Description */}
            <div className="md:col-span-6 space-y-3">
              <h2 className="font-oswald text-xl font-bold uppercase text-navy tracking-wide">
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-navy/80 leading-relaxed font-inter">
                {item.desc}
              </p>
            </div>

            {/* Deliverables / Output */}
            <div className="md:col-span-4 bg-abu-light/50 border border-navy/20 p-5 rounded-[4px]">
              <span className="font-oswald text-[10px] uppercase tracking-wider text-navy font-bold block mb-3">
                Dokumen / Output Tahap Ini:
              </span>
              <ul className="space-y-2 text-xs font-inter text-navy/85">
                {item.deliverables.map((del) => (
                  <li key={del} className="flex gap-2 items-start">
                    <CheckCircle2 size={13} className="text-accent-teal shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
