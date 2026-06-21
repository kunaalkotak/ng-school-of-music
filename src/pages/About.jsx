import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, BookOpen } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { FOUNDER, ACADEMY } from '../utils/data'
import founderPhoto from '../assets/founder.jpg'
import studioPhoto from '../assets/studio.jpg'

const fadeUp = (delay=0) => ({ initial:{opacity:0,y:25}, whileInView:{opacity:1,y:0}, viewport:{once:true}, transition:{duration:0.5,delay} })

const pillars = [
  { icon:Target,   title:'Our Mission',            text:'To make world-class music education accessible to every aspiring musician, guided directly by a professional artist with 20+ years of performance experience.' },
  { icon:Eye,      title:'Our Vision',              text:'To build a thriving community of confident, skilled musicians who carry the joy of music into every corner of their lives.' },
  { icon:Heart,    title:'Teaching Philosophy',     text:'Music is learned with the heart first, then the hands. We fuse structured classical technique with personal expression — building artists, not just students.' },
  { icon:BookOpen, title:'Guru-Shishya Tradition',  text:'Inspired by the classical tradition, we build lasting bonds with every student. Every lesson is a conversation; every session a shared journey.' },
]

export default function About() {
  return (
    <div className="bg-navy-DEFAULT pt-24">

      {/* Header */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-brand/6 to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp(0)} className="section-label mb-3">Our Story</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            About <span className="sky-text">NG School of Music</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/50 font-body text-base leading-relaxed">
            Established 2016 · Andheri East, Mumbai · {ACADEMY.students} Active Students
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Who we are */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="section-label mb-2">Who We Are</p>
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                A Place Where <span className="sky-text">Music Lives</span>
              </h2>
              <div className="space-y-3 text-white/55 font-body text-sm leading-relaxed">
                <p>NG School of Music is Mumbai's dedicated music academy, founded in 2016 by vocalist and music director <strong className="text-white">Nanu Gurjar</strong>. Located in Silver Point, Andheri East, the school was built on one belief: every person has music in them, waiting to be discovered.</p>
                <p>We offer training in 12 disciplines — from Hindustani classical vocal to Sufi singing, guitar to Kathak dance — both online and in our studio. Our students range from 5-year-olds to working professionals following a long-held dream.</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-sky-brand/12">
                <img src={studioPhoto} alt="NG School of Music Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {[{v:'2016',l:'Est.'},{v:'100+',l:'Students'},{v:'12',l:'Courses'}].map((s,i) => (
                  <div key={i} className="navy-card rounded-xl px-4 py-2 border border-sky-brand/15 text-center shadow-lg backdrop-blur-sm">
                    <p className="font-display font-bold text-sky-brand text-base">{s.v}</p>
                    <p className="text-white/40 text-[10px] font-body">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mission / Vision */}
          <div className="pt-4">
            <SectionHeader eyebrow="Values" title={<>What <span className="sky-text">Drives Us</span></>} />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p,i) => (
                <motion.div key={i} {...fadeUp(i*0.07)}
                  className="glass-card rounded-xl p-6 group hover:border-sky-brand/22 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-sky-brand/10 flex items-center justify-center mb-4 group-hover:bg-sky-brand/18 transition-all">
                    <p.icon size={18} className="text-sky-brand" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white mb-2">{p.title}</h3>
                  <p className="text-white/45 font-body text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Founder */}
          <div>
            <div className="glass-card rounded-2xl border border-sky-brand/12 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:col-span-1 aspect-[4/3] md:aspect-auto">
                  <img src={founderPhoto} alt="Nanu Gurjar" className="w-full h-full object-cover object-top" />
                </div>
                <motion.div {...fadeUp(0.1)} className="md:col-span-2 p-8">
                  <p className="section-label mb-2">Founder & Head Instructor</p>
                  <h3 className="font-display font-bold text-3xl text-white mb-1">
                    Nanu <span className="sky-text">Gurjar</span>
                  </h3>
                  <p className="text-white/40 font-accent italic text-sm mb-4">Playback Singer · Music Director · Music Composer</p>
                  <p className="text-white/55 font-body text-sm leading-relaxed mb-5">
                    A Gold Medalist classical vocalist and Sa Re Ga Ma Pa finalist, Nanu Gurjar has 3000+ stage performances across India and 7 countries. Since 2015, he tours internationally with legendary singer Udit Narayan Ji. In founding NG School of Music, he channels this professional experience into shaping Mumbai's next generation of musicians.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {['🏅 Gold Medalist','📺 Sa Re Ga Ma Pa','🌍 7 Countries','🎤 3000+ Shows'].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full border border-sky-brand/20 text-sky-brand/70 text-xs font-body">{tag}</span>
                    ))}
                  </div>
                  <Link to="/founder" className="btn-sky px-6 py-2.5 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
                    Full Artist Profile <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div {...fadeUp(0)} className="text-center pt-4 border-t border-sky-brand/10">
            <h3 className="font-display font-bold text-2xl text-white mb-3">Ready to join us?</h3>
            <p className="text-white/45 font-body text-sm mb-6">Your first class is completely free.</p>
            <Link to="/contact" className="btn-red px-8 py-3.5 rounded-full font-body font-semibold inline-flex items-center gap-2">
              Book Free Demo Class <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
