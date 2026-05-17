import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

interface Props {
  onRsvpClick: () => void
}

export default function Hero({ onRsvpClick }: Props) {
  const { t } = useLanguage()

  return (
    <div className="hero">
      <div className="hero-inner">
        <p className="hero-together">{t.hero.togetherWith}</p>

        <h1 className="hero-names">{t.hero.coupleNames}</h1>

        <p className="hero-invite">{t.hero.inviteLine}</p>

        <div className="hero-divider">
          <span className="hero-divider-line" />
          <span className="hero-diamond">◆</span>
          <span className="hero-divider-line" />
        </div>

        <p className="hero-date">{t.hero.date}</p>

        <button className="hero-rsvp-btn" onClick={onRsvpClick}>
          {t.nav.rsvp}
        </button>
      </div>

      <button className="hero-scroll" onClick={onRsvpClick} aria-label="Scroll down">
        ↓
      </button>
    </div>
  )
}
