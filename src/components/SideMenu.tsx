import { type Language } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'
import { type SectionId } from '../App'
import './SideMenu.css'

interface Props {
  active: SectionId
  menuOpen: boolean
  onToggle: () => void
  onClose: () => void
  onNavigate: (id: SectionId) => void
}

const NAV_ITEMS: { id: SectionId; key: 'aboutUs' | 'timeline' | 'locations' | 'rsvp' | 'contact' }[] = [
  { id: 'about', key: 'aboutUs' },
  { id: 'timeline', key: 'timeline' },
  { id: 'locations', key: 'locations' },
  { id: 'rsvp', key: 'rsvp' },
  { id: 'contact', key: 'contact' },
]

const LANGUAGES: Language[] = ['en', 'hu', 'ro']

export default function SideMenu({ active, menuOpen, onToggle, onClose, onNavigate }: Props) {
  const { t, language, setLanguage } = useLanguage()

  return (
    <>
      {/* ── Mobile top bar ─────────────────────────────────── */}
      <header className="mobile-header">
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={onToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <span className="mobile-couple">{t.hero.coupleNames}</span>

        <div className="mobile-lang">
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              className={`lang-btn${language === lang ? ' active' : ''}`}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* ── Click-outside overlay (mobile) ─────────────────── */}
      {menuOpen && <div className="menu-overlay" onClick={onClose} aria-hidden="true" />}

      {/* ── Sidebar ────────────────────────────────────────── */}
      <nav className={`sidebar${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        <div className="sidebar-top">
          <div className="sidebar-ring" aria-hidden="true">💍</div>
          <h2 className="sidebar-couple">{t.hero.coupleNames}</h2>
          <p className="sidebar-date">{t.hero.date}</p>
        </div>

        <ul className="nav-list" role="list">
          {NAV_ITEMS.map(({ id, key }) => (
            <li key={id}>
              <button
                className={`nav-item${active === id ? ' active' : ''}`}
                onClick={() => onNavigate(id)}
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="lang-switcher" role="group" aria-label="Language">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                className={`lang-btn${language === lang ? ' active' : ''}`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
