import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Log data secara teknis di sisi server
    console.log('=== KONSULTASI BARU DITERIMA (KAROSERI AMBULANCE) ===')
    console.log('Data Diri:', {
      nama: body.nama,
      institusi: body.institusi,
      email: body.email,
      telepon: body.telepon,
    })
    console.log('Detail Kendaraan:', {
      merk: body.merkKendaraan,
      tipe: body.tipeKendaraan,
      tahun: body.tahunKendaraan,
      fotoName: body.fotoKendaraanName,
    })
    console.log('Spesifikasi Karoseri:', {
      tipeAmbulance: body.tipeAmbulance,
      layananKustom: body.layananKustom,
      budgetRange: body.budgetRange,
      deadline: body.deadlinePengerjaan,
    })
    console.log('====================================================')

    // Lakukan simulasi penyimpanan ke database jika perlu

    return NextResponse.json(
      { 
        success: true, 
        message: 'Pengajuan konsultasi karoseri berhasil diterima. Tim teknis kami akan menghubungi Anda segera.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact request:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Terjadi kesalahan sistem. Silakan coba beberapa saat lagi.' 
      },
      { status: 500 }
    )
  }
}
