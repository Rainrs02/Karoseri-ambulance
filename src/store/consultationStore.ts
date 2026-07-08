import { create } from 'zustand'

export interface ConsultationFormData {
  // Step 1: Data Diri
  nama: string
  institusi: string
  email: string
  telepon: string

  // Step 2: Detail Kendaraan
  merkKendaraan: string
  tipeKendaraan: string
  tahunKendaraan: string
  fotoKendaraanName: string

  // Step 3: Kebutuhan Karoseri
  tipeAmbulance: 'transport' | 'agd' | 'jenazah' | 'custom' | ''
  layananKustom: string[] // interior, eksterior, kelistrikan, lighting, dll.
  budgetRange: string
  deadlinePengerjaan: string
}

interface ConsultationState {
  step: number
  formData: ConsultationFormData
  isSubmitting: boolean
  submitStatus: 'idle' | 'success' | 'error'
  updateFormData: (data: Partial<ConsultationFormData>) => void
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
  resetForm: () => void
  submitForm: () => Promise<boolean>
}

const initialFormData: ConsultationFormData = {
  nama: '',
  institusi: '',
  email: '',
  telepon: '',
  merkKendaraan: '',
  tipeKendaraan: '',
  tahunKendaraan: '',
  fotoKendaraanName: '',
  tipeAmbulance: '',
  layananKustom: [],
  budgetRange: '',
  deadlinePengerjaan: '',
}

export const useConsultationStore = create<ConsultationState>((set, get) => ({
  step: 1,
  formData: initialFormData,
  isSubmitting: false,
  submitStatus: 'idle',
  
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),

  nextStep: () => set((state) => ({
    step: Math.min(state.step + 1, 4)
  })),

  prevStep: () => set((state) => ({
    step: Math.max(state.step - 1, 1)
  })),

  setStep: (step) => set({ step }),

  resetForm: () => set({
    step: 1,
    formData: initialFormData,
    submitStatus: 'idle',
    isSubmitting: false
  }),

  submitForm: async () => {
    set({ isSubmitting: true, submitStatus: 'idle' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(get().formData),
      })

      if (response.ok) {
        set({ isSubmitting: false, submitStatus: 'success' })
        return true
      } else {
        set({ isSubmitting: false, submitStatus: 'error' })
        return false
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      set({ isSubmitting: false, submitStatus: 'error' })
      return false
    }
  }
}))
