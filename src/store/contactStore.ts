import { create } from 'zustand'

interface ContactState {
  isOpen: boolean
  customMessage: string
  openModal: (initialMessage?: string) => void
  closeModal: () => void
  setCustomMessage: (message: string) => void
  getWhatsAppLink: () => string
}

export const useContactStore = create<ContactState>((set, get) => ({
  isOpen: false,
  customMessage: '',
  
  openModal: (initialMessage = '') => set({
    isOpen: true,
    customMessage: initialMessage
  }),
  
  closeModal: () => set({
    isOpen: false,
    customMessage: ''
  }),
  
  setCustomMessage: (customMessage) => set({ customMessage }),
  
  getWhatsAppLink: () => {
    const phone = '6281234567890' // Nomor WhatsApp perusahaan
    const message = get().customMessage || 'Halo Wasilah Karoseri, saya ingin berkonsultasi mengenai modifikasi unit ambulance.'
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }
}))
