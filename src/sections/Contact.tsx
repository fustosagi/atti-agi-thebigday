import { useLanguage } from '../i18n/LanguageContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <div className="section-inner">
      <h2 className="section-title">{contact.title}</h2>
      <div className="divider" />

      <div className="contact-grid">
        <ContactCard
          label={contact.brideLabel}
          email={contact.brideEmail}
          phone={contact.bridePhone}
        />
        <ContactCard
          label={contact.groomLabel}
          email={contact.groomEmail}
          phone={contact.groomPhone}
        />
      </div>

      <p className="contact-footer">
        ♥
      </p>
    </div>
  )
}

interface CardProps {
  label: string
  email: string
  phone: string
}

function ContactCard({ label, email, phone }: CardProps) {
  return (
    <div className="contact-card">
      <p className="contact-label">{label}</p>
      <a href={`mailto:${email}`} className="contact-link">
        <span className="contact-icon" aria-hidden="true">✉</span>
        {email}
      </a>
      <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-link">
        <span className="contact-icon" aria-hidden="true">✆</span>
        {phone}
      </a>
    </div>
  )
}
