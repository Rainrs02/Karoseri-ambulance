import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react'
import CustomIcon from './icons/CustomIcon'

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white border-t border-accent-teal/20 relative">
      {/* Decorative technical line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-teal to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-accent-teal text-navy rounded-[4px] border border-white">
                <CustomIcon name="chassis" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-oswald text-xl font-bold tracking-wider leading-none">
                  WASILAH
                </span>
                <span className="font-fira text-[9px] text-accent-teal tracking-widest leading-none mt-1">
                  AMBULANCE KAROSERI
                </span>
              </div>
            </Link>
            <p className="text-abu-light/60 text-xs leading-relaxed font-inter">
              Spesialis modifikasi karoseri interior & eksterior kendaraan ambulance. Kami merombak kendaraan klien menjadi armada medis handal berstandar Kemenkes RI dengan presisi otomotif tinggi.
            </p>
            <div className="pt-2">
              <span className="text-[10px] font-fira text-accent-teal bg-accent-teal/10 border border-accent-teal/20 px-2.5 py-1 rounded-[4px] uppercase tracking-wider">
                ISO 9001:2015 certified
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap Links */}
          <div className="space-y-4">
            <h3 className="font-oswald text-sm font-semibold uppercase tracking-wider border-l-2 border-accent-teal pl-2 text-white">
              Sitemap
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs font-inter text-abu-light/75">
              <li>
                <Link href="/" className="hover:text-accent-teal transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-accent-teal transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link href="/produk-layanan" className="hover:text-accent-teal transition-colors">Produk & Layanan</Link>
              </li>
              <li>
                <Link href="/alur-pemesanan" className="hover:text-accent-teal transition-colors">Alur Pemesanan</Link>
              </li>
              <li>
                <Link href="/galeri-portofolio" className="hover:text-accent-teal transition-colors">Galeri</Link>
              </li>
              <li>
                <Link href="/artikel-blog" className="hover:text-accent-teal transition-colors">Artikel & Tips</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent-teal transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-accent-teal transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Workshop & Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-oswald text-sm font-semibold uppercase tracking-wider border-l-2 border-accent-teal pl-2 text-white">
              Workshop Utama
            </h3>
            <ul className="space-y-3 text-xs font-inter text-abu-light/75">
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-accent-teal shrink-0 mt-0.5" />
                <span>
                  Kawasan Industri Sentul, Jl. Otomotif Raya No. 45, Babakan Madang, Bogor, Jawa Barat 16810
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <Clock size={16} className="text-accent-teal shrink-0" />
                <span>
                  Senin - Sabtu: 08:00 - 17:00 WIB
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <ShieldCheck size={16} className="text-accent-teal shrink-0" />
                <span className="text-accent-teal font-semibold">
                  Izin Resmi Karoseri Dirjen Darat
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak & Informasi */}
          <div className="space-y-4">
            <h3 className="font-oswald text-sm font-semibold uppercase tracking-wider border-l-2 border-accent-teal pl-2 text-white">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-xs font-inter text-abu-light/75">
              <li className="flex gap-2 items-center">
                <Phone size={16} className="text-accent-teal shrink-0" />
                <span>Office: (021) 879-1234</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="text-accent-teal shrink-0" />
                <span>sales@wasilahambulance.co.id</span>
              </li>
              <li className="flex gap-2 items-start">
                <div className="mt-0.5 p-0.5 bg-accent-teal/15 text-accent-teal rounded border border-accent-teal/30">
                  <CustomIcon name="wrench" size={12} />
                </div>
                <span>
                  Technical Support 24/7 untuk Layanan Kelistrikan & Oxygen.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-fira text-abu-light/45">
          <div>
            &copy; {new Date().getFullYear()} Wasilah Karoseri. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>Standar Kemenkes RI</span>
            <span>•</span>
            <span>Uji Layak Dirjen Perhubungan Darat</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
