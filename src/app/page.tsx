import React from 'react'
import HeroSection from '@/components/sections/HeroSection'
import Keunggulan from '@/components/sections/Keunggulan'
import JasaKaroseri from '@/components/sections/JasaKaroseri'
import Layanan from '@/components/sections/Layanan'
import AlurPengerjaan from '@/components/sections/AlurPengerjaan'
import MengapaKami from '@/components/sections/MengapaKami'
import PortofolioTerbaru from '@/components/sections/PortofolioTerbaru'
import KlienPartner from '@/components/sections/KlienPartner'
import TestimoniHome from '@/components/sections/TestimoniHome'
import ArtikelTerbaru from '@/components/sections/ArtikelTerbaru'
import FAQSingkat from '@/components/sections/FAQSingkat'
import CTAHubungi from '@/components/sections/CTAHubungi'
import VideoGallery from '@/components/sections/VideoGallery'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Keunggulan />
      <JasaKaroseri />
      <Layanan />
      <AlurPengerjaan />
      <MengapaKami />
      <PortofolioTerbaru />
      <VideoGallery />
      <KlienPartner />
      <TestimoniHome />
      <ArtikelTerbaru />
      <FAQSingkat />
      <CTAHubungi />
    </>
  )
}
