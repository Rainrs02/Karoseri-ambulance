'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const videos = [
  { id: 1, title: 'Demo Karoseri 1', src: '/assets/videos/Vidio%20Demo%20(1).MOV', type: 'Showcase' },
  { id: 2, title: 'Demo Karoseri 2', src: '/assets/videos/Vidio%20Demo%20(1).mp4', type: 'Showcase' },
  { id: 3, title: 'Demo Karoseri 3', src: '/assets/videos/Vidio%20Demo%20(2).MOV', type: 'Showcase' },
  { id: 4, title: 'Demo Karoseri 4', src: '/assets/videos/Vidio%20Demo%20(2).mp4', type: 'Showcase' },
  { id: 5, title: 'Demo Karoseri 5', src: '/assets/videos/Vidio%20Demo%20(3).MOV', type: 'Showcase' },
  { id: 6, title: 'Demo Karoseri 6', src: '/assets/videos/Vidio%20Demo%20(3).mp4', type: 'Showcase' },
  { id: 7, title: 'Demo Karoseri 7', src: '/assets/videos/Vidio%20Demo%20(4).MOV', type: 'Showcase' },
  { id: 8, title: 'Demo Karoseri 8', src: '/assets/videos/Vidio%20Demo%20(5).MOV', type: 'Showcase' },
  { id: 9, title: 'Demo Karoseri 9', src: '/assets/videos/Vidio%20Demo%20(6).MOV', type: 'Showcase' },
]

export default function VideoGallery() {
  return (
    <section id="video-gallery" className="py-20 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal/30 to-transparent"></div>
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-accent-teal/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal mb-6"
          >
            <Play size={14} className="fill-accent-teal/50" />
            <span className="text-xs font-fira font-medium tracking-wider uppercase">Video Demo</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-2 text-white mb-6"
          >
            Saksikan Kualitas <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-blue-400">Pengerjaan Kami</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-abu-light text-sm md:text-base font-inter"
          >
            Lihat secara langsung detail presisi dan standar tinggi yang kami terapkan pada setiap modifikasi interior dan eksterior ambulans.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-navy-light rounded-xl overflow-hidden border border-white/5 hover:border-accent-teal/30 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                <video 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  onClick={(e) => {
                    const video = e.currentTarget;
                    
                    const handleFullscreenChange = () => {
                      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
                        video.pause();
                        video.muted = true;
                        video.controls = false;
                      }
                    };
                    
                    document.addEventListener('fullscreenchange', handleFullscreenChange, { once: true });
                    document.addEventListener('webkitfullscreenchange', handleFullscreenChange, { once: true });
                    
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    } else if ((video as any).webkitRequestFullscreen) {
                      (video as any).webkitRequestFullscreen();
                    }
                    video.muted = false;
                    video.controls = true;
                    video.play();
                  }}
                />
                
                {/* Play overlay button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white group-hover:bg-accent-teal/80 group-hover:scale-110 transition-all duration-300">
                    <Play size={20} className="fill-white/80 translate-x-0.5" />
                  </div>
                </div>

                {/* Badge Type */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[10px] font-fira font-medium uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    {video.type}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-oswald text-lg text-white font-medium tracking-wide group-hover:text-accent-teal transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
