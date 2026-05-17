import { useLanguage } from '../i18n/LanguageContext'
import './Timeline.css'

export default function Timeline() {
  const { t } = useLanguage()
  const { timeline } = t

  return (
    <div className="section-inner">
      <h2 className="section-title">{timeline.title}</h2>
      <p className="section-subtitle">{timeline.subtitle}</p>

      <ol className="timeline-list">
        {timeline.items.map((item, i) => (
          <li key={i} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-body">
              <h3 className="timeline-event-title">{item.title}</h3>
              <p className="timeline-event-desc">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
