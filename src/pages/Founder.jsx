import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Tv, Award, ArrowRight, Youtube, Instagram, Facebook } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { FOUNDER, SOCIAL_LINKS } from '../utils/data'
import founderPhoto from '../assets/founder.jpg'

const fadeUp = (delay=0) => ({initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:0.5,delay}})

export default function Founder() {
  return (
    <div className="bg-navy-DEFAULT pt-24">

      {/* ── HERO ── */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-navy-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-brand/5 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-sky-brand/15 shadow-[0_0_60px_rgba(56,189,248,0.08)]">
                <img src={founderPhoto} alt="Nanu Gurjar" className="w-full h-full object-cover object-top" />
              </div>
              {/* Badges — positioned carefully to not overlap photo */}
              <div className="absolute -bottom-4 -right-3 navy-card rounded-xl px-4 py-2.5 border border-sky-brand/20 shadow-xl">
                <p className="font-display font-bold text-sky-brand text-lg">3000+</p>
                <p className="text-white/45 text-xs font-body">Performances</p>
              </div>
              <div className="absolute -top-3 -left-3 navy-card rounded-xl px-3 py-2 border border-red-brand/25 shadow-xl">
                <p className="text-red-brand font-body font-bold text-xs">🏅 Gold Medalist</p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="order-1 md:order-2">
              <p className="section-label mb-2">Founder & Head Instructor</p>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-2 leading-tight">
                Nanu <span className="sky-text">Gurjar</span>
              </h1>
              <p className="text-white/40 font-accent italic text-base mb-5">Playback Singer · Music Composer · Music Director</p>
              <div className="h-[2px] w-12 bg-gradient-to-r from-red-brand to-transparent mb-6" />

              <div className="space-y-3 text-white/60 font-body text-sm leading-relaxed mb-6">
                <p>{FOUNDER.bio1}</p>
                <p>{FOUNDER.bio2}</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {FOUNDER.stats.map((s,i) => (
                  <div key={i} className="navy-card rounded-xl p-3 border border-sky-brand/10 text-center">
                    <p className="font-display font-bold text-xl sky-text">{s.value}</p>
                    <p className="text-white/40 text-xs font-body mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="flex flex-wrap gap-2 mb-6">
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-white text-xs font-body font-semibold transition-all hover:scale-105">
                  <Youtube size={13} /> YouTube
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pink-600 hover:bg-pink-500 px-4 py-2 rounded-full text-white text-xs font-body font-semibold transition-all hover:scale-105">
                  <Instagram size={13} /> Instagram
                </a>
                <a href={SOCIAL_LINKS.founderFacebook} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full text-white text-xs font-body font-semibold transition-all hover:scale-105">
                  <Facebook size={13} /> Facebook
                </a>
              </div>

              <Link to="/contact" className="btn-red px-7 py-3 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
                Book a Class <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#040d1f]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Recognition" title={<>Awards & <span className="sky-text">Achievements</span></>} />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {FOUNDER.awards.map((award,i) => (
              <motion.div key={i} {...fadeUp(i*0.08)}
                className="glass-card rounded-xl p-6 border border-sky-brand/10 hover:border-sky-brand/25 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-red-brand/12 flex items-center justify-center mb-4">
                  <Award size={18} className="text-red-brand" />
                </div>
                <p className="text-sky-brand font-body font-semibold text-xs mb-1">{award.year}</p>
                <h3 className="font-display font-semibold text-base text-white mb-1.5 leading-snug">{award.title}</h3>
                <p className="text-white/40 font-body text-xs leading-relaxed">{award.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TV APPEARANCES ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Screen Appearances" title={<>Television <span className="sky-text">Journey</span></>} />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOUNDER.tvAppearances.map((tv,i) => (
              <motion.div key={i} {...fadeUp(i*0.08)}
                className="glass-card rounded-xl p-5 flex items-center gap-4 border border-sky-brand/10 hover:border-sky-brand/25 transition-all">
                <div className="w-10 h-10 rounded-lg bg-sky-brand/10 flex items-center justify-center flex-shrink-0">
                  <Tv size={17} className="text-sky-brand" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-white font-body font-semibold text-sm">{tv.show}</p>
                    <span className="px-2 py-0.5 rounded-full bg-red-brand/15 text-red-brand text-[10px] font-body">{tv.role}</span>
                  </div>
                  <p className="text-white/40 text-xs font-body mt-0.5">{tv.channel} · {tv.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL TOURS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#040d1f]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="International" title={<>Global <span className="sky-text">Stages</span></>}
            subtitle="Touring with Udit Narayan Ji since 2015." />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FOUNDER.tours.map((city,i) => (
              <motion.div key={city} {...fadeUp(i*0.07)}
                className="navy-card rounded-xl p-4 border border-sky-brand/12 text-center hover:border-sky-brand/35 transition-colors group">
                <div className="text-2xl mb-2">
                  {['🇳🇱','🇳🇬','🇧🇭','🇦🇪','🇫🇷','🇴🇲','🇲🇺'][i] || '🌍'}
                </div>
                <p className="text-white/65 group-hover:text-white text-sm font-body font-medium transition-colors">{city}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATIONS ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-5xl mx-auto">
          <SectionHeader eyebrow="Studio & Stage" title={<>Collaborations & <span className="sky-text">Shared Stages</span></>} />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FOUNDER.collaborations.map((artist,i) => (
              <motion.div key={i} {...fadeUp(i*0.06)}
                className="glass-card rounded-xl p-4 text-center group hover:-translate-y-0.5 transition-all duration-300 border border-sky-brand/8 hover:border-sky-brand/25">
                <div className="text-3xl mb-2">{artist.emoji}</div>
                <p className="font-body font-semibold text-white text-sm mb-0.5 group-hover:text-sky-brand transition-colors leading-snug">{artist.name}</p>
                <p className="text-white/35 text-[10px] font-body leading-snug">{artist.role}</p>
              </motion.div>
            ))}
          </div>
          {/* Shared stage names pill list */}
          <motion.div {...fadeUp(0.1)} className="mt-8">
            <p className="text-center text-white/25 text-xs font-body tracking-widest uppercase mb-4">Also Shared Stage With</p>
            <div className="flex flex-wrap justify-center gap-2">
              {FOUNDER.sharedStageWith.map(name => (
                <span key={name} className="px-3 py-1 rounded-full border border-white/8 text-white/38 text-xs font-body hover:border-sky-brand/35 hover:text-sky-brand/70 transition-all cursor-default">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 sm:px-6 bg-navy-pattern">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Train With <span className="sky-text">Nanu Gurjar</span>
            </h2>
            <p className="text-white/45 font-body leading-relaxed mb-7">
              3000+ performances. 7 countries. Gold Medalist. Your first class is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/918451901296?text=Hello,%20I%20would%20like%20to%20train%20with%20Nanu%20Gurjar%20at%20NG%20School%20of%20Music."
                target="_blank" rel="noopener noreferrer"
                className="btn-red px-8 py-3.5 rounded-full font-body font-semibold text-sm inline-flex items-center justify-center gap-2">
                Book Free Demo <ArrowRight size={15} />
              </a>
              <Link to="/courses" className="btn-outline-sky px-8 py-3.5 rounded-full font-body font-semibold text-sm inline-flex items-center justify-center gap-2">
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
