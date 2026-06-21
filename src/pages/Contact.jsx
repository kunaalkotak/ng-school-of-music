import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react'
import { SOCIAL_LINKS, ADDRESS, COURSES } from '../utils/data'

const fadeUp = (delay=0) => ({initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:0.45,delay}})

const socialLinks = [
  { Icon:Youtube,   label:'YouTube',           handle:'@nanugurjarmusic',   href:SOCIAL_LINKS.youtube,        bg:'bg-red-600' },
  { Icon:Instagram, label:'Instagram',          handle:'@nanugurjar',        href:SOCIAL_LINKS.instagram,      bg:'bg-pink-600' },
  { Icon:Facebook,  label:'Facebook – Academy', handle:'NG School of Music', href:SOCIAL_LINKS.facebook,       bg:'bg-blue-700' },
  { Icon:Facebook,  label:'Facebook – Founder', handle:'Nanu Gurjar',        href:SOCIAL_LINKS.founderFacebook,bg:'bg-blue-500' },
]

export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', course:'', message:'' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) { setError('Please fill in your name and phone number.'); return }
    setError('')
    const text = `Hello, I am interested in joining NG School of Music.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ACourse: ${encodeURIComponent(form.course || 'Not specified')}%0AMessage: ${encodeURIComponent(form.message || 'N/A')}`
    window.open(`https://wa.me/918451901296?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name:'', phone:'', course:'', message:'' })
  }

  return (
    <div className="bg-navy-DEFAULT pt-24">

      {/* Header */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-brand/6 to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp(0)} className="section-label mb-3">Get In Touch</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Contact <span className="sky-text">Us</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/50 font-body text-base leading-relaxed">
            Book a free demo class or ask us anything — we respond quickly on WhatsApp.
          </motion.p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* CTA Banner */}
          <motion.div {...fadeUp(0)} className="mb-8 rounded-xl overflow-hidden relative border border-sky-brand/15">
            <div className="absolute inset-0 bg-gradient-to-r from-red-brand/20 via-navy-light to-sky-brand/15" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 p-6 md:p-7">
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white">Book Your Free Demo Class Today</h3>
                <p className="text-white/45 font-body text-sm mt-1">First class is completely free · No commitment required</p>
              </div>
              <a href="https://wa.me/918451901296?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20at%20NG%20School%20of%20Music."
                target="_blank" rel="noopener noreferrer"
                className="btn-red px-6 py-3 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0">
                Book on WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Left column */}
            <div className="lg:col-span-2 space-y-4">

              {/* Address */}
              <motion.div {...fadeUp(0)} className="glass-card rounded-xl p-5 border border-sky-brand/12">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-brand/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={16} className="text-sky-brand" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-1.5">Our Studio</h3>
                    <p className="text-white/50 font-body text-xs leading-relaxed">
                      {ADDRESS.line1}<br />{ADDRESS.line2}<br />{ADDRESS.line3}<br />
                      <span className="text-sky-brand/80 font-medium">{ADDRESS.city}</span>
                    </p>
                    <a href={SOCIAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-brand text-[10px] font-body mt-2.5 border border-sky-brand/30 hover:bg-sky-brand hover:text-navy-DEFAULT px-2.5 py-1 rounded-full transition-all">
                      <ExternalLink size={9} /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div {...fadeUp(0.05)} className="glass-card rounded-xl p-5 border border-sky-brand/12">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-brand/12 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-sky-brand" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-0.5">Call or WhatsApp</h3>
                    <a href="tel:+918451901296" className="text-sky-brand font-body text-base font-semibold hover:underline">+91 84519 01296</a>
                    <p className="text-white/30 text-[10px] font-body mt-0.5">Mon – Sat · 9 AM – 8 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div {...fadeUp(0.08)} className="glass-card rounded-xl p-5 border border-sky-brand/12">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-brand/12 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-sky-brand" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-sm mb-0.5">Email</h3>
                    <a href="mailto:nanugurjar@gmail.com" className="text-sky-brand font-body text-xs hover:underline">nanugurjar@gmail.com</a>
                  </div>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div {...fadeUp(0.1)} className="rounded-xl overflow-hidden border border-sky-brand/15">
                <div className="bg-navy-light/50 px-4 py-3 border-b border-sky-brand/10">
                  <h3 className="font-display font-semibold text-white text-sm">Follow Us</h3>
                </div>
                <div className="divide-y divide-white/5">
                  {socialLinks.map((s,i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3.5 hover:bg-white/4 transition-all group">
                      <div className={`w-9 h-9 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <s.Icon size={16} className="text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-body text-xs font-semibold text-white group-hover:text-sky-brand transition-colors">{s.label}</p>
                        <p className="font-body text-[10px] text-white/40 truncate">{s.handle}</p>
                      </div>
                      <ExternalLink size={12} className="text-white/20 group-hover:text-sky-brand transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-3 space-y-5">

              {/* Form */}
              <motion.div {...fadeUp(0)} className="rounded-xl border border-sky-brand/15 overflow-hidden">
                <div className="bg-navy-light/50 px-6 py-4 border-b border-sky-brand/12">
                  <h3 className="font-display font-semibold text-lg text-white">Send Us a Message</h3>
                  <p className="text-white/35 text-xs font-body mt-0.5">We'll respond via WhatsApp within a few hours</p>
                </div>

                <div className="p-6" style={{background:'rgb(13,31,74)'}}>
                  {submitted && (
                    <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}
                      className="flex items-center gap-2.5 bg-green-900/35 border border-green-500/35 rounded-lg px-4 py-3 mb-5">
                      <CheckCircle2 size={15} className="text-green-400 flex-shrink-0" />
                      <p className="text-green-300 text-xs font-body">WhatsApp opened — message is pre-filled, just tap Send!</p>
                    </motion.div>
                  )}
                  {error && (
                    <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}}
                      className="bg-red-900/35 border border-red-500/35 rounded-lg px-4 py-3 mb-5">
                      <p className="text-red-300 text-xs font-body">{error}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-sky-brand text-[10px] font-body font-semibold uppercase tracking-widest mb-1.5">Your Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Rahul Sharma"
                        style={{background:'rgba(255,255,255,0.12)', color:'#fff', caretColor:'#38BDF8'}}
                        className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all border border-white/20 placeholder-white/35 focus:border-sky-brand focus:ring-1 focus:ring-sky-brand/25" />
                    </div>
                    <div>
                      <label className="block text-sky-brand text-[10px] font-body font-semibold uppercase tracking-widest mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        style={{background:'rgba(255,255,255,0.12)', color:'#fff', caretColor:'#38BDF8'}}
                        className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all border border-white/20 placeholder-white/35 focus:border-sky-brand focus:ring-1 focus:ring-sky-brand/25" />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-sky-brand text-[10px] font-body font-semibold uppercase tracking-widest mb-1.5">Course Interested In</label>
                    <select name="course" value={form.course} onChange={handleChange}
                      style={{background:'rgb(13,31,74)', color:'#fff'}}
                      className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all border border-white/20 appearance-none cursor-pointer focus:border-sky-brand focus:ring-1 focus:ring-sky-brand/25">
                      <option value="" style={{background:'#0d1f4a'}}>Select a Course</option>
                      {COURSES.map(c => <option key={c.id} value={c.title} style={{background:'#0d1f4a'}}>{c.title}</option>)}
                      <option value="Not sure yet" style={{background:'#0d1f4a'}}>Not sure yet — guide me</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sky-brand text-[10px] font-body font-semibold uppercase tracking-widest mb-1.5">Message (Optional)</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Tell us about your goals or any questions..."
                      style={{background:'rgba(255,255,255,0.12)', color:'#fff', caretColor:'#38BDF8'}}
                      className="w-full rounded-lg px-4 py-3 font-body text-sm outline-none transition-all resize-none border border-white/20 placeholder-white/35 focus:border-sky-brand focus:ring-1 focus:ring-sky-brand/25" />
                  </div>

                  <button onClick={handleSubmit}
                    className="w-full btn-red py-3.5 rounded-lg font-body font-semibold text-sm flex items-center justify-center gap-2">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                  <p className="text-white/20 text-[10px] font-body text-center mt-2">Opens WhatsApp with your message pre-filled</p>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div {...fadeUp(0.1)} className="rounded-xl overflow-hidden border border-sky-brand/15" style={{height:280}}>
                <iframe
                  title="NG School of Music Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7539.992337853422!2d72.863883!3d19.107824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92d32f46515%3A0x8eef9b03864e0c84!2sNG%20SCHOOL%20OF%20MUSIC%20Class%7CSinging%20Class%7CKeybords%20Classes%20%7CGuitar%20Class%7CIndain%20Classical%20Andheri%20East!5e0!3m2!1sen!2sin!4v1782026348043!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{border:0, filter:'invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)'}}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <motion.div {...fadeUp(0.12)} className="text-center -mt-1">
                <a href={SOCIAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-brand/60 hover:text-sky-brand text-xs font-body transition-colors">
                  <ExternalLink size={11} /> Open in Google Maps
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
