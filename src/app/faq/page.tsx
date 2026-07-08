'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Search, MessageCircle } from 'lucide-react'
import { useContactStore } from '@/store/contactStore'

export default function FAQPage() {
  const openWhatsApp = useContactStore((state) => state.openModal)
  const [searchTerm, setSearchTerm] = useState('')
  const [openIdx, setOpenIdx] = useState<string | null>(null)

  const faqData = [
    {
      category: 'Harga & Pembayaran',
      q: 'Bagaimana sistem pembayaran modifikasi karoseri?',
      a: 'Sistem pembayaran menggunakan skema termin bertahap: Down Payment (DP) sebesar 30-40% saat penandatanganan kontrak dan sasis masuk workshop, Termin ke-2 sebesar 40% setelah progres konstruksi interior selesai, dan Pelunasan akhir sebesar 20-30% sebelum unit diserahterimakan dan dilakukan QC akhir.'
    },
    {
      category: 'Harga & Pembayaran',
      q: 'Apakah harga modifikasi sudah termasuk dengan alat kesehatan?',
      a: 'Kami menawarkan paket modifikasi kosong (interior kabin saja) dan paket modifikasi lengkap alkes (stretcher, tabung oksigen, regulator, gantungan infus). Harga alkes pendukung gawat darurat tambahan seperti defibrillator, monitor pasien, dan ventilator dihitung secara terpisah sesuai merk dan tipe alkes yang disetujui klien.'
    },
    {
      category: 'Jasa Karoseri & Modifikasi',
      q: 'Apakah Wasilah Karoseri menyediakan unit mobil untuk ambulance?',
      a: 'Tidak. Kami murni merupakan jasa karoseri modifikasi. Klien mendatangkan unit kendaraannya sendiri (sasis kosong / mobil standar), baik itu kendaraan dinas instansi, kendaraan yayasan, maupun dari dealer pilihan klien, lalu kami memodifikasi interior dan eksteriornya.'
    },
    {
      category: 'Proses Produksi',
      q: 'Berapa lama proses pembuatan ambulance?',
      a: 'Untuk tipe Ambulance Transport dan Jenazah standar berkisar 10 - 14 hari kerja. Untuk tipe Ambulance Emergency Gawat Darurat (AGD) berkisar 14 - 20 hari kerja. Sementara untuk unit kustom khusus (seperti laboratorium berjalan / PCR caravan) berkisar 20 - 30 hari kerja setelah sasis kendaraan diterima di workshop.'
    },
    {
      category: 'Legalitas & Sertifikasi',
      q: 'Bagaimana status surat-surat kendaraan setelah dimodifikasi?',
      a: 'Kami memegang izin resmi Surat Keputusan Rancang Bangun (SKRB) Dirjen Perhubungan Darat. Setiap unit yang selesai kami kerjakan akan mendapatkan Sertifikat Registrasi Uji Tipe (SRUT) / berkas pendukung rubah bentuk karoseri resmi, sehingga kendaraan Anda sah secara hukum untuk diurus STNK (plat merah/hitam/kuning) dan lulus uji KIR dinas perhubungan.'
    },
    {
      category: 'Pengiriman & Serah Terima',
      q: 'Apakah Wasilah melayani pengiriman unit ke luar kota?',
      a: 'Ya. Kami melayani jasa penyerahan unit ke seluruh wilayah Indonesia. Pengiriman luar pulau Jawa umumnya menggunakan jasa towing darat, car carrier, atau kapal laut Roll-on/Roll-off (Ro-Ro) terpercaya dengan asuransi pengiriman penuh yang ditanggung oleh klien.'
    },
    {
      category: 'Garansi & After Sales',
      q: 'Bagaimana garansi setelah ambulance selesai dimodifikasi?',
      a: 'Wasilah Karoseri memberikan jaminan garansi konstruksi karoseri (bodi, lemari, sekat partisi, lantai vinyl) dan instalasi kelistrikan & oksigen selama 1 tahun (12 bulan) terhitung dari tanggal Berita Acara Serah Terima (BAST). Garansi alkes khusus mengikuti masa garansi pabrikan alkes masing-masing.'
    },
    {
      category: 'Pemesanan',
      q: 'Apakah boleh melakukan survey ke workshop selama proses perakitan?',
      a: 'Sangat dipersilakan. Klien dapat menjadwalkan kunjungan inspeksi langsung ke workshop kami di Babakan Madang, Bogor untuk meninjau proses perakitan rangka besi, kelistrikan, maupun fiberglass kabin. Kami juga mengirimkan dokumentasi foto/video progress mingguan secara online.'
    }
  ]

  // Filter FAQ berdasarkan pencarian
  const filteredFaqs = faqData.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleAccordion = (id: string) => {
    setOpenIdx(openIdx === id ? null : id)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            CENTRAL SUPPORT // FAQ
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Pusat Bantuan & Tanya Jawab
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Temukan jawaban lengkap seputar legalitas SRUT Dinas Perhubungan, masa pengerjaan karoseri, garansi kelistrikan, dan skema pembayaran.
          </p>
        </div>
      </section>

      {/* Search and FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search Input */}
        <div className="relative border-2 border-navy rounded-[4px] shadow-solid">
          <input
            type="text"
            placeholder="Cari FAQ (misal: garansi, SKRB, Toyota Hiace...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-abu-light/30 text-navy text-xs sm:text-sm p-4 pl-12 focus:outline-none focus:bg-white transition-colors placeholder:text-navy/40 font-inter"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const uniqueId = `${faq.category}-${idx}`
              const isOpen = openIdx === uniqueId

              return (
                <div
                  key={uniqueId}
                  className="bg-white border-2 border-navy rounded-[4px] overflow-hidden shadow-solid hover:shadow-solid-teal transition-all duration-150"
                >
                  <button
                    onClick={() => toggleAccordion(uniqueId)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 bg-white text-navy font-oswald text-sm font-bold uppercase tracking-wider transition-colors hover:text-accent-teal"
                  >
                    <div className="space-y-1 text-left">
                      <span className="block font-fira text-[8px] text-accent-teal font-semibold tracking-widest uppercase">
                        {faq.category}
                      </span>
                      <span>{faq.q}</span>
                    </div>
                    <div className="shrink-0 p-1 bg-abu-light border border-navy/20 rounded">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 border-t border-navy/10 font-inter text-xs sm:text-sm text-navy/75 leading-relaxed bg-abu-light/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 border border-dashed border-navy/20 rounded-[4px]">
              <p className="text-xs text-navy/50 font-fira">
                TIDAK MENEMUKAN HASIL COCOK UNTUK: &ldquo;{searchTerm}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Call support */}
        <div className="bg-navy text-white border-2 border-navy p-6 rounded-[4px] shadow-solid-teal flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />
          <div className="space-y-1.5 relative z-10 text-center sm:text-left">
            <h3 className="font-oswald text-base font-bold uppercase tracking-wider text-white">
              Belum menemukan jawaban teknis?
            </h3>
            <p className="text-xs text-abu-light/85 font-inter">
              Hubungi sales engineer kami langsung via pesan kustom WhatsApp.
            </p>
          </div>
          
          <button
            onClick={() => openWhatsApp('Halo Wasilah Karoseri, saya ingin bertanya lebih lanjut mengenai prosedur pemesanan karoseri ambulance.')}
            className="btn-mech-primary relative z-10 flex items-center gap-2 py-2.5 px-4 text-xs font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Teknis Sekarang</span>
          </button>
        </div>

      </section>
    </div>
  )
}
