import React from 'react'

export default function KlienPartner() {
  const clients = [
    { name: 'KEMENTERIAN KESEHATAN RI', code: 'DEPKES-ID' },
    { name: 'RSUD KOTA BOGOR', code: 'RSUD-BGR' },
    { name: 'PALANG MERAH INDONESIA', code: 'PMI-ORG' },
    { name: 'PT ANTAM (PERSERO) TBK', code: 'ANTM-IDX' },
    { name: 'DOMPET DHUAFA REPUBLIKA', code: 'DMPH-YYS' },
    { name: 'YAYASAN HUSNUL KHATIMAH', code: 'HSNL-KTM' },
  ]

  return (
    <section className="py-12 bg-abu-light border-y border-navy/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-1">
            <span className="font-fira text-[9px] text-accent-teal uppercase tracking-widest font-semibold block">
              TRUSTED BY INSTITUTIONS // MITRA & KLIEN WASILAH
            </span>
            <p className="font-oswald text-xs uppercase tracking-wider text-navy/60">
              Telah Memodifikasi Kendaraan untuk Berbagai Lembaga Medis & Sosial
            </p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="bg-white border border-navy/10 hover:border-accent-teal/40 py-5 px-4 rounded-[4px] flex flex-col items-center justify-center text-center gap-1 group transition-colors duration-200"
              >
                <span className="font-oswald text-[11px] font-bold text-navy/70 group-hover:text-navy transition-colors tracking-wider">
                  {client.name}
                </span>
                <span className="font-fira text-[8px] text-navy/30 group-hover:text-accent-teal/50 transition-colors">
                  [{client.code}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
