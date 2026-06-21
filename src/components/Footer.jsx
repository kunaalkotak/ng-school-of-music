import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react'
import { SOCIAL_LINKS, ADDRESS } from '../utils/data'
import logo from '../assets/logo.png'

const navLinks = [
  { label:'Home',    path:'/' },
  { label:'About',   path:'/about' },
  { label:'Courses', path:'/courses' },
  { label:'Founder', path:'/founder' },
  { label:'Gallery', path:'/gallery' },
  { label:'Contact', path:'/contact' },
]

const socials = [
  { Icon:Youtube,   href:SOCIAL_LINKS.youtube,         label:'YouTube',            handle:'@nanugurjarmusic', bg:'bg-red-600 hover:bg-red-500',   shadow:'hover:shadow-[0_0_16px_rgba(220,38,38,0.5)]' },
  { Icon:Instagram, href:SOCIAL_LINKS.instagram,        label:'Instagram',           handle:'@nanugurjar',       bg:'bg-pink-600 hover:bg-pink-500',  shadow:'hover:shadow-[0_0_16px_rgba(236,72,153,0.5)]' },
  { Icon:Facebook,  href:SOCIAL_LINKS.facebook,         label:'Facebook – Academy',  handle:'NG School of Music',bg:'bg-blue-700 hover:bg-blue-600',  shadow:'hover:shadow-[0_0_16px_rgba(37,99,235,0.5)]' },
  { Icon:Facebook,  href:SOCIAL_LINKS.founderFacebook,  label:'Facebook – Founder',  handle:'Nanu Gurjar',       bg:'bg-blue-500 hover:bg-blue-400',  shadow:'hover:shadow-[0_0_16px_rgba(59,130,246,0.5)]' },
]

export default function Footer() {
  return (
    <footer className="bg-[#040d1f] border-t border-sky-brand/10 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Social band */}
        <div className="mb-10 rounded-xl bg-navy-light/40 border border-sky-brand/12 p-5 md:p-6">
          <p className="text-center text-white/30 text-[10px] font-body tracking-widest uppercase mb-5">Follow Nanu Gurjar & NG School of Music</p>
          <div className="flex flex-wrap justify-center gap-3">
            {socials.map(({ Icon, href, label, handle, bg, shadow }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2.5 ${bg} ${shadow} px-4 py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105`}>
                <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-body font-semibold text-xs leading-none">{label}</p>
                  <p className="text-white/60 text-[10px] mt-0.5">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-sky-brand/35 flex-shrink-0">
                <img src={logo} alt="NG School of Music" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-display font-bold text-sm leading-tight">NG <span className="sky-text">School of Music</span></p>
                <p className="text-white/30 text-[9px] tracking-widest uppercase mt-0.5">Est. 2016 · Mumbai</p>
              </div>
            </Link>
            <p className="text-white/35 text-xs font-body leading-relaxed">
              Professional music training under an award-winning international artist.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sky-brand font-body font-semibold text-xs mb-4 tracking-widest uppercase">Pages</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/35 hover:text-sky-brand text-xs font-body transition-colors flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-sky-brand/25 group-hover:bg-sky-brand transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-sky-brand font-body font-semibold text-xs mb-4 tracking-widest uppercase">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex gap-2.5">
                <MapPin size={13} className="text-sky-brand mt-0.5 flex-shrink-0" />
                <p className="text-white/35 text-xs font-body leading-relaxed">
                  {ADDRESS.line1}, {ADDRESS.line2}, {ADDRESS.line3},&nbsp;
                  <span className="text-sky-brand/70">{ADDRESS.city}</span>
                </p>
              </div>
              <a href="tel:+918451901296" className="flex gap-2.5 items-center text-white/35 hover:text-sky-brand text-xs transition-colors">
                <Phone size={13} className="text-sky-brand flex-shrink-0" />
                +91 84519 01296
              </a>
              <a href="mailto:nanugurjar@gmail.com" className="flex gap-2.5 items-center text-white/35 hover:text-sky-brand text-xs transition-colors">
                <Mail size={13} className="text-sky-brand flex-shrink-0" />
                nanugurjar@gmail.com
              </a>
              <div className="flex gap-2 pt-1">
                <a href={SOCIAL_LINKS.googleMaps} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-brand/60 hover:text-sky-brand text-[10px] font-body transition-colors border border-sky-brand/20 hover:border-sky-brand/40 px-2.5 py-1 rounded-full">
                  <ExternalLink size={9} /> Google Maps
                </a>
                <a href={SOCIAL_LINKS.googleBusiness} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400/60 hover:text-yellow-300 text-[10px] font-body transition-colors border border-yellow-500/15 hover:border-yellow-400/40 px-2.5 py-1 rounded-full">
                  ⭐ Google Business
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sky-divider mb-5" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs font-body">© {new Date().getFullYear()} NG School of Music · Founded by Nanu Gurjar</p>
          <p className="text-white/15 text-xs font-body">Andheri East, Mumbai · Est. 2016</p>
        </div>
      </div>
    </footer>
  )
}
