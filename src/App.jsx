import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Founder from './pages/Founder'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const pageVariants = {
  initial:    { opacity: 0, y: 16 },
  animate:    { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit:       { opacity: 0, y: -12, transition: { duration: 0.25, ease: 'easeIn' } },
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"        element={<motion.div {...pageVariants}><Home /></motion.div>} />
        <Route path="/about"   element={<motion.div {...pageVariants}><About /></motion.div>} />
        <Route path="/courses" element={<motion.div {...pageVariants}><Courses /></motion.div>} />
        <Route path="/founder" element={<motion.div {...pageVariants}><Founder /></motion.div>} />
        <Route path="/gallery" element={<motion.div {...pageVariants}><Gallery /></motion.div>} />
        <Route path="/contact" element={<motion.div {...pageVariants}><Contact /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-DEFAULT text-white">
        <Navbar />
        <main><AnimatedRoutes /></main>
        <Footer />
        <ScrollToTop />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}
