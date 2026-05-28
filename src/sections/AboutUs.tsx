import { useLanguage } from '../i18n/LanguageContext'
import './AboutUs.css'

export default function AboutUs() {
  const { t } = useLanguage()
  const { aboutUs: a } = t

  return (
    <div className="section-inner">
      <h2 className="section-title">{a.title}</h2>
      <div className="divider" />

      <div className="about-profiles">
        <div className="profile">
          {/* TODO: Replace the placeholder with an <img> tag pointing to a real photo */}
<img
            src="/assets/images/bride.jpeg"
            alt={`Photo of ${a.bride}`}
            className="profile-photo-placeholder"
          />          <h3 className="profile-name">{a.bride}</h3>
          <p className="profile-text">{a.brideText}</p>
        </div>

        <div className="about-ornament" aria-hidden="true">♥</div>

        <div className="profile">
          {/* TODO: Replace the placeholder with an <img> tag pointing to a real photo */}
          <img
            src="/assets/images/groom.jpeg"
            alt={`Photo of ${a.groom}`}
            className="profile-photo-placeholder"
          />
          <h3 className="profile-name">{a.groom}</h3>
          <p className="profile-text">{a.groomText}</p>
        </div>
      </div>

      <div className="about-story">
        <h3 className="story-title">{a.storyTitle}</h3>
        <p className="story-text">{a.storyText}</p>
      </div>
    </div>
  )
}
