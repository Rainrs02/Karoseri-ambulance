import React from 'react'

export type IconName = 
  | 'oxygen' 
  | 'wrench' 
  | 'stretcher' 
  | 'ekg' 
  | 'gear' 
  | 'ambulance' 
  | 'blueprint' 
  | 'shield' 
  | 'chassis'
  | 'whatsapp'

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export default function CustomIcon({ name, size = 24, className = '', ...props }: CustomIconProps) {
  const defaultStyles = {
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
    width: size,
    height: size,
  }

  const mergedProps = { ...defaultStyles, className, ...props }

  switch (name) {
    case 'oxygen':
      // Tabung Oksigen medis dengan katup silinder dan simbol plus medis
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          {/* Katup atas */}
          <path d="M10 6h4M12 3v3M10 3h4" />
          {/* Leher tabung */}
          <path d="M9 9c0-1.5 1-3 3-3s3 1.5 3 3" />
          {/* Badan tabung */}
          <rect x="7" y="9" width="10" height="12" rx="2" />
          {/* Simbol Medis */}
          <path d="M12 12v4M10 14h4" />
          {/* Indikator Level Tekanan */}
          <circle cx="12" cy="18" r="1.5" />
        </svg>
      )

    case 'wrench':
      // Kunci inggris mekanik presisi
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
        </svg>
      )

    case 'stretcher':
      // Tandu / Stretcher ambulance beroda
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          {/* Alas tidur */}
          <path d="M2 8h18a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8z" />
          {/* Sandaran kepala terangkat */}
          <path d="M5 8l-3-4h4" />
          {/* Kaki gunting mekanis */}
          <path d="M6 13l4 6M18 13l-4 6" />
          <path d="M10 19h4" />
          {/* Roda gurney */}
          <circle cx="6" cy="20" r="1.5" />
          <circle cx="18" cy="20" r="1.5" />
          {/* Sabuk pengaman tandu */}
          <path d="M10 8v5M14 8v5" />
        </svg>
      )

    case 'ekg':
      // Detak EKG yang presisi, di dalam layar monitoring bersudut teknik
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          {/* Layar Monitor */}
          <rect x="2" y="3" width="20" height="14" rx="2" />
          {/* Gelombang EKG */}
          <path d="M5 10h3l1.5-4 2 10 1.5-7 1.5 3.5 1.5-2.5 1 2h3" />
          {/* Penyangga bawah */}
          <path d="M6 17l-2 4h16l-2-4" />
        </svg>
      )

    case 'gear':
      // Roda gigi teknik dengan lambang medis/bantuan di tengah
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.15a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          {/* Palang di dalam gear */}
          <path d="M12 9v6M9 12h6" />
        </svg>
      )

    case 'ambulance':
      // Siluet mobil ambulance dengan sirene & striping
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          {/* Bodi mobil */}
          <path d="M2 17V8a2 2 0 0 1 2-2h10l6 3v8H2z" />
          {/* Jendela depan */}
          <path d="M14 9h4.5l-2.5-2.5H14V9z" />
          {/* Jendela samping */}
          <rect x="5" y="8" width="5" height="3" rx="0.5" />
          {/* Roda */}
          <circle cx="6" cy="18" r="2" />
          <circle cx="16" cy="18" r="2" />
          {/* Lampu sirene di atap */}
          <path d="M8 5.5a1.5 1.5 0 0 1 3 0" fill="currentColor" />
          {/* Palang merah medis di bodi */}
          <path d="M7 12h2M8 11v2" />
        </svg>
      )

    case 'blueprint':
      // Kertas rancangan teknik / blueprint
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          <path d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
          {/* Grid lines di dalam kertas */}
          <path d="M6 3v18M12 3v18M18 3v18M2 8h20M2 14h20" />
          {/* Segitiga ukur */}
          <path d="M8 6v6h6L8 6z" />
        </svg>
      )

    case 'shield':
      // Perisai garansi kualitas industri
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          {/* Centang di dalam perisai */}
          <path d="M9 11l2 2 4-4" />
        </svg>
      )

    case 'chassis':
      // Rangka bodi sasis mobil karoseri
      return (
        <svg viewBox="0 0 24 24" {...mergedProps}>
          {/* Garis tengah sasis */}
          <path d="M4 12h16" />
          {/* Axle depan dan belakang */}
          <path d="M6 6v12M18 6v12" />
          {/* Struktur penguat */}
          <path d="M6 8l12 8M6 16l12-8" />
          {/* Roda/Velg sasis */}
          <rect x="4" y="3" width="4" height="3" rx="0.5" />
          <rect x="4" y="18" width="4" height="3" rx="0.5" />
          <rect x="16" y="3" width="4" height="3" rx="0.5" />
          <rect x="16" y="18" width="4" height="3" rx="0.5" />
        </svg>
      )

    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" {...mergedProps} fill="currentColor" stroke="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      )

    default:
      return null
  }
}
