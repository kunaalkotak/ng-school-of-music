import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

// ── Real photos ────────────────────────────────────────────────
import p1  from '../assets/gallery/g1-class-guitars.jpg'
import p2  from '../assets/gallery/g2-live-concert.jpg'
import p3  from '../assets/gallery/g3-bhajan-session.jpg'
import p4  from '../assets/gallery/g4-students-class.jpg'
import p5  from '../assets/gallery/g5-studio-nanu.jpg'
import p6  from '../assets/gallery/g6-photo.jpg'
import p7  from '../assets/gallery/g7-photo.jpg'
import p8  from '../assets/gallery/g8-photo.jpg'
import p9  from '../assets/gallery/g9-photo.jpg'
import p10 from '../assets/gallery/g10-photo.jpg'
import p11 from '../assets/gallery/g11-photo.jpg'
import p12 from '../assets/gallery/g12-photo.jpg'
import p13 from '../assets/gallery/g13-photo.jpg'
import p14 from '../assets/gallery/g14-photo.jpg'
import p15 from '../assets/gallery/g15-photo.jpg'
import p16 from '../assets/gallery/g16-photo.jpg'
import p17 from '../assets/gallery/g17-photo.jpg'
import p18 from '../assets/gallery/g18-photo.jpg'
import p19 from '../assets/gallery/g19-photo.jpg'
import p20 from '../assets/gallery/g20-photo.jpg'
import p21 from '../assets/gallery/g21-photo.jpg'
import p22 from '../assets/gallery/g22-photo.jpg'
import p23 from '../assets/gallery/g23-photo.jpg'
import p24 from '../assets/gallery/g24-photo.jpg'
import p25 from '../assets/gallery/g25-photo.jpg'
import p26 from '../assets/gallery/g26-photo.jpg'
import p27 from '../assets/gallery/g27-photo.jpg'
import p28 from '../assets/gallery/g28-photo.jpg'
import p30 from '../assets/gallery/g30-photo.jpg'
import p31 from '../assets/gallery/g31-photo.jpg'
import p32 from '../assets/gallery/g32-photo.jpg'
import p33 from '../assets/gallery/g33-photo.jpg'
import p34 from '../assets/gallery/g34-photo.jpg'
import p35 from '../assets/gallery/g35-photo.jpg'

// ── To add more photos later:
// 1. Drop the file into src/assets/gallery/
// 2. Add: import p36 from '../assets/gallery/your-photo.jpg'
// 3. Add: { id:36, src: p36 } to PHOTOS below ──────────────────

const PHOTOS = [
  { id:1,  src:p1  },
  { id:2,  src:p2  },
  { id:3,  src:p3  },
  { id:4,  src:p4  },
  { id:5,  src:p5  },
  { id:6,  src:p6  },
  { id:7,  src:p7  },
  { id:8,  src:p8  },
  { id:9,  src:p9  },
  { id:10, src:p10 },
  { id:11, src:p11 },
  { id:12, src:p12 },
  { id:13, src:p13 },
  { id:14, src:p14 },
  { id:15, src:p15 },
  { id:16, src:p16 },
  { id:17, src:p17 },
  { id:18, src:p18 },
  { id:19, src:p19 },
  { id:20, src:p20 },
  { id:21, src:p21 },
  { id:22, src:p22 },
  { id:23, src:p23 },
  { id:24, src:p24 },
  { id:25, src:p25 },
  { id:26, src:p26 },
  { id:27, src:p27 },
  { id:28, src:p28 },
  { id:30, src:p30 },
  { id:31, src:p31 },
  { id:32, src:p32 },
  { id:33, src:p33 },
  { id:34, src:p34 },
  { id:35, src:p35 },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const currentIndex = lightbox ? PHOTOS.findIndex(p => p.id === lightbox.id) : -1
  const goPrev = () => setLightbox(PHOTOS[(currentIndex - 1 + PHOTOS.length) % PHOTOS.length])
  const goNext = () => setLightbox(PHOTOS[(currentIndex + 1) % PHOTOS.length])

  return (
    <div className="bg-navy-DEFAULT pt-24">

      {/* Header */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-brand/6 to-transparent" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-red-brand/4 blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="section-label mb-3">Captured Moments</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-5">
            Our <span className="sky-text">Gallery</span>
          </motion.h1>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}
            className="h-[2px] w-20 bg-gradient-to-r from-sky-brand to-transparent mx-auto mb-6" />
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.25}}
            className="text-white/50 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Concerts across continents, award ceremonies, student milestones, and everyday magic inside our studio.
          </motion.p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-3 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
            {PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity:0, scale:0.92 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ duration:0.4, delay:(i % 8) * 0.04 }}
                onClick={() => setLightbox(photo)}
                className="relative overflow-hidden rounded-xl cursor-pointer group mb-3 border border-white/5 hover:border-sky-brand/40 transition-all duration-300 break-inside-avoid"
              >
                <img
                  src={photo.src}
                  alt={`NG School of Music - Photo ${photo.id}`}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            {/* Prev */}
            <button
              onClick={e => { e.stopPropagation(); goPrev() }}
              className="absolute left-3 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-sky-brand border border-white/15 flex items-center justify-center text-white transition-all">
              <ChevronLeft size={22} />
            </button>

            <motion.div
              initial={{ scale:0.85, opacity:0 }} animate={{ scale:1, opacity:1 }}
              exit={{ scale:0.85, opacity:0 }}
              transition={{ type:'spring', stiffness:220, damping:22 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-sky-brand/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={`NG School of Music - Photo ${lightbox.id}`}
                className="w-full max-h-[82vh] object-contain bg-black"
              />
              {/* Counter */}
              <div className="absolute bottom-3 right-4 bg-black/60 backdrop-blur-sm text-white/60 text-xs font-body px-3 py-1 rounded-full">
                {currentIndex + 1} / {PHOTOS.length}
              </div>
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-red-brand/80 transition-all">
                <X size={17} />
              </button>
            </motion.div>

            {/* Next */}
            <button
              onClick={e => { e.stopPropagation(); goNext() }}
              className="absolute right-3 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-sky-brand border border-white/15 flex items-center justify-center text-white transition-all">
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
