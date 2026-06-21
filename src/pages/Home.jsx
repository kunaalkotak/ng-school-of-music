import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { WHY_CHOOSE_US, COURSES, TESTIMONIALS } from '../utils/data'
import logo from '../assets/logo.png'
import founderPhoto from '../assets/founder.jpg'
import gp1 from '../assets/gallery/g1-class-guitars.jpg'
import gp2 from '../assets/gallery/g2-live-concert.jpg'
import gp3 from '../assets/gallery/g3-bhajan-session.jpg'
import gp4 from '../assets/gallery/g4-students-class.jpg'
import gp5 from '../assets/gallery/g5-studio-nanu.jpg'
import gp6 from '../assets/gallery/g6-photo.jpg'

/* ── Animated counter ── */
function Counter({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const num = parseInt(target.replace(/\D/g, ''))
    let start = 0
    const step = num / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Testimonial Carousel ── */
function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const len = TESTIMONIALS.length
  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % len), 5000)
    return () => clearInterval(t)
  }, [len])
  return (
    <div className="relative max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div key={current}
          initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-40 }}
          transition={{ duration:0.35 }}
          className="glass-card p-8 rounded-2xl text-center border border-sky-brand/12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_,i) => <Star key={i} size={14} className="fill-sky-brand text-sky-brand" />)}
          </div>
          <blockquote className="text-white/75 font-body text-base leading-relaxed italic mb-5">
            "{TESTIMONIALS[current].text}"
          </blockquote>
          <p className="font-display font-semibold text-white">{TESTIMONIALS[current].name}</p>
          <p className="text-sky-brand/60 text-sm font-body">{TESTIMONIALS[current].course}</p>
          {TESTIMONIALS[current].source && (
            <span className="inline-flex items-center gap-1.5 text-white/30 text-xs font-body border border-white/8 px-3 py-1 rounded-full mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              {TESTIMONIALS[current].source}
            </span>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center items-center gap-4 mt-5">
        <button onClick={() => setCurrent(c => (c-1+len)%len)}
          className="w-9 h-9 rounded-full border border-sky-brand/25 flex items-center justify-center text-sky-brand hover:bg-sky-brand hover:text-navy-DEFAULT transition-all">
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {TESTIMONIALS.map((_,i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i===current ? 'bg-sky-brand w-5' : 'bg-sky-brand/25 w-1.5'}`} />
          ))}
        </div>
        <button onClick={() => setCurrent(c => (c+1)%len)}
          className="w-9 h-9 rounded-full border border-sky-brand/25 flex items-center justify-center text-sky-brand hover:bg-sky-brand hover:text-navy-DEFAULT transition-all">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-navy-DEFAULT">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-DEFAULT/50 to-navy-DEFAULT" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-sky-brand/6 blur-3xl animate-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-red-brand/4 blur-3xl animate-glow" style={{animationDelay:'2s'}} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-16">
          <motion.div initial={{opacity:0,scale:0.85}} animate={{opacity:1,scale:1}} transition={{duration:0.6}}
            className="flex justify-center mb-7">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-sky-brand/50 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              <img src={logo} alt="NG School of Music" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
            className="section-label mb-4">
            NG School of Music · Est. 2016 · Andheri East, Mumbai
          </motion.p>

          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.3}}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-5">
            Learn Music From An<br />
            <span className="sky-text">Award-Winning</span><br />
            Playback Singer
          </motion.h1>

          <motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.5}}
            className="text-white/55 font-body text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Train under <span className="text-white font-medium">Nanu Gurjar</span> — Gold Medalist, Sa Re Ga Ma Pa Finalist, and international touring artist with 3000+ stage performances.
          </motion.p>

          <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.65}}
            className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/918451901296?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20at%20NG%20School%20of%20Music."
              target="_blank" rel="noopener noreferrer"
              className="btn-red px-8 py-3.5 rounded-full font-body font-semibold text-base inline-flex items-center justify-center gap-2">
              Book Free Demo Class <ArrowRight size={17} />
            </a>
            <Link to="/courses"
              className="btn-outline-sky px-8 py-3.5 rounded-full font-body font-semibold text-base inline-flex items-center justify-center gap-2">
              Explore 12 Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-sky-brand/10 bg-[#040d1f] py-10">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value:'100',  suffix:'+', label:'Active Students' },
            { value:'3000', suffix:'+', label:'Stage Performances' },
            { value:'2016', suffix:'',  label:'Established' },
            { value:'12',   suffix:'',  label:'Courses Offered' },
          ].map((s,i) => (
            <motion.div key={i} initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="text-center">
              <p className="font-display font-bold text-3xl md:text-4xl sky-text">
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-white/40 text-xs font-body mt-1 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="What We Teach"
            title={<>12 Courses to <span className="sky-text">Choose From</span></>}
            subtitle="Classical to contemporary, vocal to instrumental — find your perfect musical path."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {COURSES.map((course, i) => (
              <motion.div key={course.id}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.04}}
                className={`glass-card rounded-xl p-5 border ${course.border} hover:-translate-y-0.5 transition-all duration-300 group flex flex-col`}>
                <div className="text-3xl mb-3">{course.emoji}</div>
                <h3 className="font-display font-bold text-sm md:text-base text-white mb-1 group-hover:text-sky-brand transition-colors leading-snug">{course.title}</h3>
                <p className="text-white/40 text-xs font-body leading-relaxed flex-1 line-clamp-2">{course.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sky-brand/60 text-[10px] font-body">{course.level}</span>
                  <a href={`https://wa.me/918451901296?text=I%20am%20interested%20in%20${encodeURIComponent(course.title)}%20at%20NG%20School%20of%20Music.`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-sky-brand hover:text-white text-xs font-body font-semibold transition-colors flex items-center gap-1">
                    Enquire <ArrowRight size={11} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses" className="btn-sky px-8 py-3 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
              View Full Course Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#040d1f]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>Why Students <span className="sky-text">Choose NG School</span></>}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div key={i}
                initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.07}}
                className="glass-card rounded-xl p-6 group hover:-translate-y-0.5 transition-all duration-300 border border-sky-brand/8 hover:border-sky-brand/22">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-base text-white mb-1.5 group-hover:text-sky-brand transition-colors">{item.title}</h3>
                <p className="text-white/45 text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER STRIP ── */}
      <section className="py-12 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="glass-card rounded-2xl border border-sky-brand/15 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center gap-0">
              {/* Photo */}
              <div className="w-full sm:w-48 h-48 flex-shrink-0 relative">
                <div className="absolute inset-0 rounded-tl-2xl rounded-bl-2xl sm:rounded-bl-2xl border-l-2 border-t-2 border-b-2 border-sky-brand/50 pointer-events-none z-10" />
                <div className="absolute top-2 left-2 right-0 bottom-2 border-l border-t border-b border-sky-brand/20 rounded-tl-xl rounded-bl-xl pointer-events-none z-10" />
                <img src={founderPhoto} alt="Nanu Gurjar" className="w-full h-full object-cover object-top" />
              </div>
              {/* Info */}
              <div className="flex-1 p-6 sm:p-8">
                <p className="section-label mb-1">Founder & Head Instructor</p>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Nanu <span className="sky-text">Gurjar</span></h3>
                <p className="text-white/50 font-body text-sm leading-relaxed mb-4">
                  Gold Medalist · Sa Re Ga Ma Pa Finalist · Touring with Udit Narayan Ji across 7 countries · 3000+ performances
                </p>
                <Link to="/founder" className="btn-outline-sky px-5 py-2 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
                  Full Artist Profile <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#040d1f]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Student Stories"
            title={<>What Our <span className="sky-text">Students Say</span></>}
          />
          <div className="mt-10"><TestimonialCarousel /></div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title={<>Life at <span className="sky-text">NG School</span></>}
          />
          <div className="mt-10 grid grid-cols-3 gap-2 md:gap-3">
            {[gp1,gp2,gp3,gp4,gp5,gp6].map((src,i) => (
              <motion.div key={i}
                initial={{opacity:0,scale:0.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.06}}
                className={`relative overflow-hidden rounded-xl border border-white/5 group cursor-pointer hover:border-sky-brand/30 transition-all ${i===0 ? 'row-span-2 col-span-1' : ''}`}
                style={{aspectRatio: i===0 ? 'auto' : '1'}}>
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/gallery" className="btn-outline-sky px-7 py-2.5 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-4 sm:px-6 bg-[#040d1f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-brand/6 via-transparent to-red-brand/5" />
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <p className="section-label mb-3">Start Today</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Book Your <span className="sky-text">Free Demo</span> Class
            </h2>
            <p className="text-white/45 font-body leading-relaxed mb-8">
              100+ students · 12 courses · First class completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/918451901296?text=Hello,%20I%20am%20interested%20in%20joining%20NG%20School%20of%20Music."
                target="_blank" rel="noopener noreferrer"
                className="btn-red px-8 py-3.5 rounded-full font-body font-semibold text-base inline-flex items-center justify-center gap-2">
                WhatsApp Us <ArrowRight size={17} />
              </a>
              <Link to="/contact"
                className="btn-outline-white px-8 py-3.5 rounded-full font-body font-semibold text-base inline-flex items-center justify-center gap-2">
                Contact Info
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
