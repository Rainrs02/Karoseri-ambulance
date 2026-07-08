import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { blogs } from '@/data/blogs'

export default async function DetailArtikel({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const blog = blogs.find(b => b.slug === resolvedParams.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Banner / Header Artikel */}
      <section className="bg-blueprint text-white pt-24 pb-16 relative border-b border-accent-teal/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,19,38,0.9))] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          
          <Link href="/artikel-blog" className="inline-flex items-center gap-2 text-accent-teal hover:text-white transition-colors text-sm font-fira uppercase tracking-wider mb-4">
            <ArrowLeft size={16} />
            <span>Kembali ke Daftar Artikel</span>
          </Link>

          <div className="flex flex-wrap gap-3 items-center text-[11px] font-fira text-accent-teal uppercase tracking-widest">
            <span className="bg-accent-teal/20 text-accent-teal px-3 py-1 rounded border border-accent-teal/30 font-semibold">
              {blog.category}
            </span>
            <span>//</span>
            <span className="text-white/60">Wasilah Technical Hub</span>
          </div>

          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-wide leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 font-inter pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <User size={16} className="text-accent-teal" />
              <span>Oleh: <strong className="text-white">{blog.author}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent-teal" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-accent-teal" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Konten Artikel */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg prose-slate max-w-none 
                       prose-headings:font-oswald prose-headings:uppercase prose-headings:tracking-wide prose-headings:text-navy
                       prose-a:text-accent-teal hover:prose-a:text-navy
                       prose-strong:text-navy prose-strong:font-bold
                       prose-li:text-navy/80 prose-p:text-navy/80"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Share & Footer Section */}
          <div className="mt-16 pt-8 border-t border-navy/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="font-fira text-sm font-semibold uppercase text-navy">Bagikan Artikel:</span>
              <button className="w-10 h-10 rounded-full bg-navy/5 text-navy hover:bg-accent-teal hover:text-white flex items-center justify-center transition-colors">
                <Share2 size={18} />
              </button>
            </div>
            <Link href="/kontak" className="btn-mech-primary">
              KONSULTASIKAN KEBUTUHAN ANDA
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
