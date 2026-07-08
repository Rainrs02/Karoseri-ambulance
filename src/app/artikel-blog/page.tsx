'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { blogs } from '@/data/blogs'

export default function ArtikelBlog() {
  const categories = ['Semua Artikel', ...Array.from(new Set(blogs.map(b => b.category)))]
  const [activeCat, setActiveCat] = useState('Semua Artikel')

  const filteredBlogs = activeCat === 'Semua Artikel' 
    ? blogs 
    : blogs.filter(b => b.category === activeCat)

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="bg-blueprint text-white py-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="font-fira text-xs text-accent-teal uppercase tracking-widest font-semibold block">
            KNOWLEDGE BASE // ARTIKEL & TIPS PERAWATAN
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            Edukasi Otomotif Medis
          </h1>
          <div className="w-16 h-1 bg-accent-teal mx-auto" />
          <p className="font-inter text-xs sm:text-sm text-abu-light/80 max-w-xl mx-auto leading-relaxed">
            Temukan panduan praktis merawat instrumen kelistrikan, memilih tandu medis, regulasi resmi perizinan, dan berita terbaru workshop kami.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-wrap gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 text-sm font-oswald uppercase tracking-wider font-bold rounded border transition-colors ${
              activeCat === cat 
              ? 'bg-navy text-white border-navy shadow-solid' 
              : 'bg-white text-navy border-navy hover:bg-abu-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Blog List */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredBlogs.map((blog, idx) => (
          <motion.article
            key={blog.id}
            id={`art-${blog.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="border-2 border-navy p-8 rounded-[4px] bg-abu-light/20 shadow-solid relative space-y-4 group"
          >
            {/* Category badge */}
            <div className="flex justify-between items-center text-[10px] font-fira text-navy/50 border-b border-navy/10 pb-3">
              <span className="bg-accent-teal text-white px-2.5 py-0.5 rounded border border-accent-teal font-semibold uppercase tracking-wider">
                {blog.category}
              </span>
              <div className="flex gap-4 items-center">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{blog.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{blog.readTime}</span>
                </span>
              </div>
            </div>

            <Link href={`/artikel-blog/${blog.slug}`}>
              <h2 className="font-oswald text-xl sm:text-2xl font-bold uppercase text-navy group-hover:text-accent-teal transition-colors tracking-wide leading-tight pt-2 cursor-pointer">
                {blog.title}
              </h2>
            </Link>

            <div className="flex gap-1.5 items-center text-[10px] font-fira text-accent-teal">
              <User size={12} />
              <span>Oleh: {blog.author}</span>
            </div>

            <p className="text-xs sm:text-sm text-navy/80 leading-relaxed font-inter pt-2">
              {blog.desc}
            </p>

            <div className="pt-4 border-t border-navy/5 mt-6 flex justify-between items-center">
              <span className="text-[9px] font-fira text-navy/40 uppercase">Wasilah Technical Hub // ARTICLE_ID_0{blog.id}</span>
              <Link
                href={`/artikel-blog/${blog.slug}`}
                className="font-oswald text-xs uppercase tracking-wider text-navy hover:text-accent-teal font-bold flex items-center gap-1 transition-colors"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}
