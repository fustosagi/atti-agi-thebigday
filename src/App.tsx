import { useState, useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import SideMenu from './components/SideMenu'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import Timeline from './sections/Timeline'
import Locations from './sections/Locations'
import RSVP from './sections/RSVP'
import Contact from './sections/Contact'
import './App.css'

export type SectionId = 'about' | 'timeline' | 'locations' | 'rsvp' | 'contact'

const SECTIONS: SectionId[] = ['about', 'timeline', 'locations', 'rsvp', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <LanguageProvider>
      <div className="app-layout">
        <SideMenu
          active={activeSection}
          menuOpen={menuOpen}
          onToggle={() => setMenuOpen((v) => !v)}
          onClose={() => setMenuOpen(false)}
          onNavigate={scrollTo}
        />
        <main className="main-content">
          <Hero onRsvpClick={() => scrollTo('rsvp')} />
          <section id="about">
            <AboutUs />
          </section>
          <section id="timeline">
            <Timeline />
          </section>
          <section id="locations">
            <Locations />
          </section>
          <section id="rsvp">
            <RSVP />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </LanguageProvider>
  )
}
