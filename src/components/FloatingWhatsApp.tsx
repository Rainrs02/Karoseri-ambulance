'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'
import { useContactStore } from '@/store/contactStore'
import CustomIcon from './icons/CustomIcon'

export default function FloatingWhatsApp() {
  const { isOpen, customMessage, openModal, closeModal, setCustomMessage, getWhatsAppLink } = useContactStore()

  const handleSend = () => {
    // Membuka tautan whatsapp di tab baru
    window.open(getWhatsAppLink(), '_blank')
    closeModal()
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full border border-navy-dark shadow-solid transition-all duration-150 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#0B1D3A]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CustomIcon name="whatsapp" size={20} className="animate-pulse" />
          <span className="hidden sm:inline font-oswald text-xs uppercase tracking-wider font-semibold">
            Konsultasi Sekarang
          </span>
        </motion.button>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white border-2 border-navy w-full max-w-md rounded-[4px] shadow-solid overflow-hidden"
            >
              {/* Header */}
              <div className="bg-navy text-white px-5 py-4 border-b border-accent-teal/30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-accent-teal text-navy rounded border border-white">
                    <CustomIcon name="wrench" size={16} />
                  </div>
                  <div>
                    <h3 className="font-oswald text-sm font-semibold uppercase tracking-wider leading-none">
                      Konsultasi Cepat WA
                    </h3>
                    <p className="font-fira text-[9px] text-accent-teal tracking-widest mt-1">
                      DIRECT TECHNICAL LINE
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-abu-light/60 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <div className="bg-abu-light border border-abu-border p-3.5 rounded-[4px]">
                  <p className="text-xs text-navy/70 leading-relaxed">
                    Ajukan pertanyaan seputar modifikasi interior/eksterior, kelistrikan, layout, budget, atau estimasi pengerjaan. Pesan Anda akan langsung terkirim ke WhatsApp Sales Engineering kami.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="custom-msg" className="block font-oswald text-xs uppercase tracking-wider text-navy font-semibold">
                    Pesan Kustom Anda:
                  </label>
                  <textarea
                    id="custom-msg"
                    rows={4}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Halo Wasilah Karoseri, saya ingin menanyakan estimasi biaya modifikasi kabin interior ambulance jenazah untuk unit Toyota Hiace Premio..."
                    className="w-full border border-navy/30 bg-abu-light/30 rounded-[4px] p-3 text-xs focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-all font-inter text-navy placeholder:text-navy/40"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="bg-abu-light px-5 py-3 border-t border-abu-border flex justify-end gap-2">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-navy/20 text-navy font-oswald text-xs uppercase tracking-wider rounded-[4px] hover:bg-white transition-colors"
                >
                  Batal
                </button>
                <button
                  onClick={handleSend}
                  className="btn-mech-primary py-2 px-4 text-xs flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim WhatsApp</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
