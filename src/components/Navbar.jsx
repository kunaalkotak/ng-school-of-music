import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label:'Home',    path:'/' },
  { label:'About',   path:'/about' },
  { label:'Courses', path:'/courses' },
  { label:'Founder', path:'/founder' },
  { label:'Gallery', path:'/gallery' },
  { label:'Contact', path:'/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <motion.nav
      initial={{ y:-60, opacity:0 }}
      animate={{ y:0, opacity:1 }}
      transition={{ duration:0.5, ease:'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#040d1f]/96 backdrop-blur-xl border-b border-sky-brand/12 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-brand/35 group-hover:border-sky-brand group-hover:shadow-[0_0_16px_rgba(56,189,248,0.35)] transition-all duration-300">
            <img src={logo} alt="NG School of Music" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block leading-none">
            <p className="text-white font-display font-bold text-sm tracking-wide">
              NG <span className="sky-text">School of Music</span>
            </p>
            <p className="text-white/35 text-[9px] tracking-[0.18em] uppercase mt-0.5">Est. 2016 · Mumbai</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}
              className={`relative font-body text-sm font-medium tracking-wide transition-colors duration-300 group ${
                location.pathname === link.path ? 'text-sky-brand' : 'text-white/60 hover:text-white'
              }`}>
              {link.label}
              <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-sky-brand rounded-full transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a href="https://wa.me/918451901296?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20at%20NG%20School%20of%20Music."
          target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex btn-red px-5 py-2 rounded-full text-sm font-body font-semibold items-center gap-1.5">
          Free Demo
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-sky-brand p-2 rounded-lg border border-sky-brand/20 hover:bg-sky-brand/10 transition-colors"
          aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}
            transition={{ duration:0.25 }}
            className="md:hidden overflow-hidden bg-[#040d1f]/98 backdrop-blur-xl border-b border-sky-brand/10">
            <div className="px-5 py-5 flex flex-col gap-0.5">
              {navLinks.map((link,i) => (
                <motion.div key={link.path}
                  initial={{ x:-15, opacity:0 }}
                  animate={{ x:0, opacity:1 }}
                  transition={{ delay:i*0.05 }}>
                  <Link to={link.path}
                    className={`block text-sm font-body font-medium py-3 border-b border-white/5 transition-colors ${
                      location.pathname === link.path ? 'text-sky-brand' : 'text-white/65 hover:text-sky-brand'
                    }`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a href="https://wa.me/918451901296?text=Hello,%20I%20would%20like%20to%20book%20a%20free%20demo%20class%20at%20NG%20School%20of%20Music."
                target="_blank" rel="noopener noreferrer"
                className="btn-red text-center px-6 py-3 rounded-full text-sm font-body font-semibold mt-4">
                Book Free Demo Class
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
