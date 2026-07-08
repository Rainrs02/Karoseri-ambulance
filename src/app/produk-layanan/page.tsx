'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Settings, Activity, ShieldAlert, Cpu } from 'lucide-react'
import CustomIcon from '@/components/icons/CustomIcon'
import { useContactStore } from '@/store/contactStore'

export default function ProdukLayanan() {
  const openWhatsApp = useContactStore((state) => state.openModal)
  const [activeTab, setActiveTab] = useState<'tipe' | 'interior' | 'eksterior' | 'retrofit'>('tipe')

  const itemsAmbulance = [
    {
      title: 'Ambulance Transport',
      desc: 'Dirancang untuk pemindahan pasien umum yang stabil. Dilengkapi perlengkapan standar pertolongan dasar.',
      priceEst: 'Mulai Rp 35.000.000 (Hanya biaya modifikasi)',
      specs: [
        'Lantai plywood tebal dilapisi vinyl kelas medis anti-bakteri.',
        'Keranda kurung (stretcher) stainless steel standar.',
        '1 Tabung oksigen kapasitas 1m³ lengkap dengan kran pengatur.',
        'Bangku paramedis/perawat lipat di bagian samping.',
        'Lampu rotari sirine standar warna merah di atap depan.'
      ]
    },
    {
      title: 'Ambulance Gawat Darurat (AGD)',
      desc: 'Unit evakuasi khusus bersenjata alat bantu hidup canggih (Advanced Life Support). Didesain untuk resusitasi kritis.',
      priceEst: 'Mulai Rp 85.000.000 (Hanya biaya modifikasi)',
      specs: [
        'Central Oxygen System dengan pemipaan tembaga tersembunyi & 2 tabung besar.',
        'Inverter AC/DC 1000W - 2000W Pure Sine Wave & aki cadangan (dual battery).',
        'Lemari kabinet fiberglass full-molding untuk menyimpan ventilator & defibrillator.',
        'Automatic Roll-in Stretcher dengan kuncian rel kokoh di lantai.',
        'Gantungan infus ganda stainless steel yang terpasang kuat di atap kabin.'
      ]
    },
    {
      title: 'Ambulance Jenazah',
      desc: 'Karoseri kabin khusus transportasi jenazah yang higienis, bersih, dan praktis.',
      priceEst: 'Mulai Rp 25.000.000 (Hanya biaya modifikasi)',
      specs: [
        'Rel tandu stainless steel dengan stopper penahan benturan otomatis.',
        'Kabin dilapisi fiberglass penuh agar mudah dibilas air desinfektan.',
        'Bangku pengiring samping dengan kompartemen penyimpanan.',
        'Lampu sorot penerangan luar dipasang di pintu belakang.',
        'Stiker branding eksterior khusus unit kedukaan.'
      ]
    },
    {
      title: 'Ambulance Custom (Mobile Lab & Clinic)',
      desc: 'Modifikasi kendaraan khusus untuk fungsi laboratorium berjalan, klinik gigi keliling, unit vaksinasi, dsb.',
      priceEst: 'Kustom sesuai rancangan spesifikasi visual',
      specs: [
        'Rancangan Desain & Layout Visual yang bisa disesuaikan sepenuhnya.',
        'Instalasi wastafel mini dengan tangki air bersih dan air kotor terpisah.',
        'Genset portable bensin / solar terintegrasi box luar kedap suara.',
        'Meja kerja laboratorium berlapis HPL tahan zat asam kimia.',
        'Pendingin ruangan (AC) kabin ganda independen.'
      ]
    }
  ]

  const interiorCategories = [
    { title: 'Furniture Medis', items: ['Lemari Alat Kesehatan', 'Cabinet Obat', 'Rak Peralatan Medis', 'Meja Medis', 'Dudukan Tabung Oxygen', 'Laci Penyimpanan', 'Tempat Limbah Medis', 'Custom Cabinet'] },
    { title: 'Perlengkapan Pasien', items: ['Stretcher', 'Scoop Stretcher', 'Spine Board', 'Kursi Paramedis', 'Bench Seat', 'Sabuk Pengaman Pasien'] },
    { title: 'Sistem Oxygen', items: ['Tabung Oxygen', 'Central Oxygen System', 'Flowmeter', 'Humidifier', 'Regulator Oxygen', 'Outlet Oxygen'] },
    { title: 'Sistem Pencahayaan Interior', items: ['Lampu LED Kabin', 'Lampu Pemeriksaan Pasien', 'Ambient Lighting', 'Lampu Emergency Interior'] },
    { title: 'Sistem Kelistrikan', items: ['Panel Kontrol', 'Saklar', 'Stop Kontak 220V', 'USB Charger', 'Inverter', 'Battery Backup', 'Wiring Harness'] },
    { title: 'Interior Finishing', items: ['Vinyl Flooring', 'Dinding FRP', 'Ceiling Interior', 'Insulasi Suara', 'Insulasi Panas', 'Pegangan (Grab Handle)'] },
    { title: 'Sistem Ventilasi', items: ['AC Tambahan', 'Exhaust Fan', 'Blower', 'Ventilasi Udara'] },
  ]

  const exteriorCategories = [
    { title: 'Emergency Warning System', items: ['Rotator', 'Lightbar LED', 'Strobo', 'Lampu Grill', 'Lampu Belakang Emergency'] },
    { title: 'Sirine & Audio', items: ['Electronic Siren', 'Public Address (PA)', 'Speaker Sirine', 'Mic Pengumuman'] },
    { title: 'Branding Kendaraan', items: ['Cutting Sticker Ambulance', 'Livery Ambulance', 'Logo Rumah Sakit', 'Nomor Unit', 'Reflective Sticker'] },
    { title: 'Lampu Eksterior', items: ['Lampu Kerja', 'Flood Light', 'Scene Light', 'Lampu Belakang', 'Lampu Samping'] },
    { title: 'Akses Kendaraan', items: ['Foot Step', 'Handle Tambahan', 'Pintu Geser', 'Tangga Belakang'] },
    { title: 'Aksesoris Kendaraan', items: ['Roof Rack (Opsional)', 'Kamera Mundur', 'Sensor Parkir', 'Dashcam', 'CCTV'] },
  ]

  const retrofitItems = [
    { name: 'Perbaikan Interior & Eksterior', desc: 'Memperbaiki bodi kabin yang keropos, mengganti panel kayu lapis yang lapuk, serta perbaikan engsel pintu kabinet.' },
    { name: 'Upgrade Sistem Oksigen Lama', desc: 'Mengubah instalasi tabung oksigen manual lama menjadi sistem central dengan pipa tembaga modern dan wall-outlet medis.' },
    { name: 'Penggantian Komponen Rusak', desc: 'Penggantian lantai vinyl medis yang robek, penggantian regulator oksigen, dinamo sirine, hingga gantungan infus.' },
    { name: 'Maintenance Kelistrikan Berkala', desc: 'Pemeriksaan performa aki cadangan, pengujian beban inverter, penggantian sekering pengaman ganda, dan kalibrasi sekring otomatis.' }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            CONVERSION SERVICES // PRODUK & LAYANAN MODIFIKASI
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Jasa Modifikasi Karoseri
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Spesifikasi detail interior & eksterior ambulance berdasarkan standar teknis kementerian kesehatan dan rancang bangun Dinas Perhubungan.
          </p>
        </div>
      </section>

      {/* Tabs Selector */}
      <section className="py-8 bg-abu-light border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab('tipe')}
            className={`px-5 py-2.5 font-oswald text-xs uppercase tracking-wider border-2 rounded-[4px] font-bold transition-all ${
              activeTab === 'tipe'
                ? 'bg-navy text-white border-accent-teal shadow-solid-teal'
                : 'bg-white text-navy border-navy hover:bg-navy/5'
            }`}
          >
            Tipe Ambulance
          </button>
          <button
            onClick={() => setActiveTab('interior')}
            className={`px-5 py-2.5 font-oswald text-xs uppercase tracking-wider border-2 rounded-[4px] font-bold transition-all ${
              activeTab === 'interior'
                ? 'bg-navy text-white border-accent-teal shadow-solid-teal'
                : 'bg-white text-navy border-navy hover:bg-navy/5'
            }`}
          >
            Modifikasi Interior
          </button>
          <button
            onClick={() => setActiveTab('eksterior')}
            className={`px-5 py-2.5 font-oswald text-xs uppercase tracking-wider border-2 rounded-[4px] font-bold transition-all ${
              activeTab === 'eksterior'
                ? 'bg-navy text-white border-accent-teal shadow-solid-teal'
                : 'bg-white text-navy border-navy hover:bg-navy/5'
            }`}
          >
            Modifikasi Eksterior
          </button>
          <button
            onClick={() => setActiveTab('retrofit')}
            className={`px-5 py-2.5 font-oswald text-xs uppercase tracking-wider border-2 rounded-[4px] font-bold transition-all ${
              activeTab === 'retrofit'
                ? 'bg-navy text-white border-accent-teal shadow-solid-teal'
                : 'bg-white text-navy border-navy hover:bg-navy/5'
            }`}
          >
            Service & Retrofit
          </button>
        </div>
      </section>

      {/* Dynamic Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TAB 1: TIPE AMBULANCE */}
        {activeTab === 'tipe' && (
          <div id="tipe" className="space-y-12">
            <div className="border-l-4 border-accent-teal pl-4 space-y-2">
              <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
                Rancangan Tipe Kabin Ambulance
              </h2>
              <p className="text-xs text-navy/70 font-inter">
                Berikut rincian spesifikasi komponen standar untuk 4 jenis karoseri ambulance:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {itemsAmbulance.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-abu-light/40 border-2 border-navy p-6 rounded-[4px] flex flex-col justify-between shadow-solid"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-oswald text-lg font-bold text-navy uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <span className="font-fira text-[9px] text-accent-teal bg-navy px-2 py-0.5 rounded border border-white">
                        AMB-T{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-navy/70 font-inter leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="space-y-2 pt-2">
                      <span className="font-oswald text-[10px] uppercase tracking-widest text-navy font-bold block">
                        KOMPONEN STRUKTUR KABIN:
                      </span>
                      <ul className="space-y-1.5 text-xs text-navy/85 font-inter">
                        {item.specs.map((spec) => (
                          <li key={spec} className="flex gap-2 items-start">
                            <Check className="w-3.5 h-3.5 text-accent-teal shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-navy/10 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-[10px] font-fira text-navy/60">
                      EST. HARGA KAROSERI:<br />
                      <span className="text-navy font-bold text-xs">{item.priceEst}</span>
                    </div>
                    <button
                      onClick={() => openWhatsApp(`Halo Wasilah Karoseri, saya tertarik berkonsultasi mengenai estimasi pengerjaan karoseri ${item.title}.`)}
                      className="btn-mech-primary text-[10px] py-1.5 px-3 uppercase"
                    >
                      Hubungi Sales
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: INTERIOR */}
        {activeTab === 'interior' && (
          <div id="interior" className="space-y-12 animate-fade-in">
            <div className="border-l-4 border-accent-teal pl-4 space-y-2">
              <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
                Komponen Modifikasi Interior
              </h2>
              <p className="text-xs text-navy/70 font-inter">
                Detail rekayasa kabin belakang pasien yang aman, ergonomis, dan higienis:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interiorCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white border border-navy/20 p-5 rounded-[4px] hover:border-accent-teal transition-all duration-200 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-navy/10 pb-3">
                    <div className="p-1.5 bg-navy text-white rounded">
                      <Settings className="w-4 h-4 text-accent-teal" />
                    </div>
                    <h3 className="font-oswald text-sm font-bold uppercase tracking-wider text-navy">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start text-xs text-navy/75 font-inter">
                        <Check className="w-3.5 h-3.5 text-accent-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EKSTERIOR */}
        {activeTab === 'eksterior' && (
          <div id="eksterior" className="space-y-12 animate-fade-in">
            <div className="border-l-4 border-accent-teal pl-4 space-y-2">
              <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
                Komponen Modifikasi Eksterior
              </h2>
              <p className="text-xs text-navy/70 font-inter">
                Kelengkapan aksesoris, tanda lalu lintas darurat, dan branding luar badan kendaraan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exteriorCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white border border-navy/20 p-5 rounded-[4px] hover:border-accent-teal transition-all duration-200 space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-navy/10 pb-3">
                    <div className="p-1.5 bg-navy text-white rounded">
                      <Activity className="w-4 h-4 text-accent-teal" />
                    </div>
                    <h3 className="font-oswald text-sm font-bold uppercase tracking-wider text-navy">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start text-xs text-navy/75 font-inter">
                        <Check className="w-3.5 h-3.5 text-accent-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: RETROFIT */}
        {activeTab === 'retrofit' && (
          <div id="retrofit" className="space-y-12 animate-fade-in">
            <div className="border-l-4 border-accent-teal pl-4 space-y-2">
              <h2 className="font-oswald text-2xl font-bold uppercase text-navy">
                Layanan Service & Retrofit Ambulance Lama
              </h2>
              <p className="text-xs text-navy/70 font-inter">
                Kami juga melayani penyegaran dan upgrade ambulance lama milik klien agar kembali prima dan layak guna:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {retrofitItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-abu-light/30 border border-navy p-6 rounded-[4px] flex gap-4 items-start"
                >
                  <div className="p-2 bg-navy text-white rounded">
                    <Cpu className="w-5 h-5 text-accent-teal" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-oswald text-sm font-bold uppercase tracking-wider text-navy">
                      {item.name}
                    </h3>
                    <p className="text-xs text-navy/75 leading-relaxed font-inter">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  )
}
