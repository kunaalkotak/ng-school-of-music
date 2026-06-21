import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { COURSES } from '../utils/data'

const fadeUp = (delay=0) => ({initial:{opacity:0,y:25},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:0.45,delay}})

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45,delay:index*0.04}}
      className={`glass-card rounded-xl overflow-hidden border ${course.border} hover:border-sky-brand/35 transition-all duration-300 group hover:-translate-y-0.5 flex flex-col`}
    >
      {/* Header */}
      <div className={`bg-gradient-to-br ${course.gradient} p-5 flex items-start gap-4`}>
        <span className="text-4xl flex-shrink-0">{course.emoji}</span>
        <div>
          <h3 className="font-display font-bold text-base text-white group-hover:text-sky-brand transition-colors leading-snug">{course.title}</h3>
          <p className="text-white/45 text-xs font-body italic mt-0.5">{course.tagline}</p>
          <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-sky-brand/15 text-sky-brand text-[10px] font-body">{course.level}</span>
        </div>
      </div>
      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-white/50 font-body text-xs leading-relaxed mb-4 flex-1">{course.description}</p>
        <ul className="space-y-1.5 mb-5">
          {course.outcomes.map((o,i) => (
            <li key={i} className="flex items-start gap-2 text-white/45 text-xs font-body">
              <CheckCircle2 size={12} className="text-sky-brand flex-shrink-0 mt-0.5" />{o}
            </li>
          ))}
        </ul>
        <a href={`https://wa.me/918451901296?text=I%20am%20interested%20in%20${encodeURIComponent(course.title)}%20at%20NG%20School%20of%20Music.`}
          target="_blank" rel="noopener noreferrer"
          className="btn-red w-full py-2.5 rounded-lg text-xs font-body font-semibold inline-flex items-center justify-center gap-2">
          Enquire Now <ArrowRight size={12} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  return (
    <div className="bg-navy-DEFAULT pt-24">

      {/* Header */}
      <section className="relative py-14 md:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-brand/6 to-transparent" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p {...fadeUp(0)} className="section-label mb-3">12 Disciplines</motion.p>
          <motion.h1 {...fadeUp(0.1)} className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Our <span className="sky-text">Courses</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-white/50 font-body text-base leading-relaxed">
            Classical to contemporary, vocal to instrumental — every musical path taught by an internationally touring artist.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {COURSES.map((course,i) => <CourseCard key={course.id} course={course} index={i} />)}
          </div>

          {/* FAQ */}
          <motion.div {...fadeUp(0)} className="mt-14 glass-card rounded-2xl p-8 border border-sky-brand/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-6">Common Questions</h3>
                <div className="space-y-5">
                  {[
                    {q:'Do I need prior experience?', a:'Not at all. All courses welcome complete beginners, while also serving intermediate and advanced students.'},
                    {q:'Are online classes as good as offline?', a:'Yes. Our live online classes mirror the studio experience with personalised feedback.'},
                    {q:'What is the minimum age?', a:'We welcome students from age 5 onwards. There is no upper age limit.'},
                    {q:'How do I get started?', a:'Contact us on WhatsApp — we will arrange a free demo class right away.'},
                  ].map((faq,i) => (
                    <div key={i} className="border-b border-white/5 pb-4">
                      <p className="font-body font-semibold text-white text-sm mb-1 flex gap-2">
                        <span className="text-sky-brand">Q.</span>{faq.q}
                      </p>
                      <p className="text-white/40 text-sm font-body leading-relaxed pl-5">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎵</div>
                <h4 className="font-display font-bold text-xl text-white mb-2">Not sure which course?</h4>
                <p className="text-white/40 font-body text-sm leading-relaxed mb-5">
                  Nanu Sir will personally guide you to the right programme — completely free.
                </p>
                <a href="https://wa.me/918451901296?text=Hello,%20I%20need%20help%20choosing%20the%20right%20course%20at%20NG%20School%20of%20Music."
                  target="_blank" rel="noopener noreferrer"
                  className="btn-sky px-7 py-3 rounded-full font-body font-semibold text-sm inline-flex items-center gap-2">
                  Get Guidance <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
