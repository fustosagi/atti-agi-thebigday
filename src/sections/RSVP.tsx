import { useState, type FormEvent, type ChangeEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './RSVP.css'

// TODO: Replace with your own email address to receive RSVPs.
const RSVP_EMAIL = 'your@email.com'

interface FormState {
  name: string
  attending: 'yes' | 'no' | ''
  guests: string
  dietary: string
  note: string
}

const INITIAL_FORM: FormState = {
  name: '',
  attending: '',
  guests: '1',
  dietary: '',
  note: '',
}

export default function RSVP() {
  const { t } = useLanguage()
  const { rsvp } = t

  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Build a mailto link so the RSVP lands in your inbox without a backend.
    // For a more robust solution, replace this with a Formspree or similar fetch call.
    const attending = form.attending === 'yes' ? rsvp.attendingYes : rsvp.attendingNo
    const lines = [
      `${rsvp.nameLabel}: ${form.name}`,
      `${rsvp.attendingLabel}: ${attending}`,
      ...(form.attending === 'yes' ? [`${rsvp.guestsLabel}: ${form.guests}`] : []),
      ...(form.dietary.trim() ? [`${rsvp.dietaryLabel}: ${form.dietary}`] : []),
      ...(form.note.trim() ? [`${rsvp.noteLabel}: ${form.note}`] : []),
    ]
    const subject = encodeURIComponent(`RSVP – ${form.name}`)
    const body = encodeURIComponent(lines.join('\n'))
    window.open(`mailto:${RSVP_EMAIL}?subject=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    const accepted = form.attending === 'yes'
    return (
      <div className="section-inner rsvp-success">
        <div className="success-icon" aria-hidden="true">{accepted ? '🎉' : '💌'}</div>
        <h2 className="section-title">{rsvp.successTitle}</h2>
        <div className="divider" style={{ margin: '0.8rem auto 1.5rem' }} />
        <p className="success-message">
          {accepted ? rsvp.successMessage : rsvp.declineMessage}
        </p>
        <button className="rsvp-back-btn" onClick={() => { setSubmitted(false); setForm(INITIAL_FORM) }}>
          ←
        </button>
      </div>
    )
  }

  return (
    <div className="section-inner">
      <h2 className="section-title">{rsvp.title}</h2>
      <p className="section-subtitle">
        {rsvp.deadlineNote} <strong>{rsvp.deadline}</strong>
      </p>

      <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-name">{rsvp.nameLabel}</label>
          <input
            id="rsvp-name"
            className="form-input"
            type="text"
            name="name"
            placeholder={rsvp.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>

        {/* Attending */}
        <div className="form-group">
          <p className="form-label">{rsvp.attendingLabel}</p>
          <div className="radio-group">
            <label className={`radio-card${form.attending === 'yes' ? ' selected' : ''}`}>
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={form.attending === 'yes'}
                onChange={handleChange}
              />
              <span>{rsvp.attendingYes}</span>
            </label>
            <label className={`radio-card${form.attending === 'no' ? ' selected' : ''}`}>
              <input
                type="radio"
                name="attending"
                value="no"
                checked={form.attending === 'no'}
                onChange={handleChange}
              />
              <span>{rsvp.attendingNo}</span>
            </label>
          </div>
        </div>

        {/* Guests — only shown when attending */}
        {form.attending === 'yes' && (
          <div className="form-group">
            <label className="form-label" htmlFor="rsvp-guests">{rsvp.guestsLabel}</label>
            <select
              id="rsvp-guests"
              className="form-input"
              name="guests"
              value={form.guests}
              onChange={handleChange}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
        )}

        {/* Dietary */}
        {form.attending === 'yes' && (
          <div className="form-group">
            <label className="form-label" htmlFor="rsvp-dietary">{rsvp.dietaryLabel}</label>
            <input
              id="rsvp-dietary"
              className="form-input"
              type="text"
              name="dietary"
              placeholder={rsvp.dietaryPlaceholder}
              value={form.dietary}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Note */}
        <div className="form-group">
          <label className="form-label" htmlFor="rsvp-note">{rsvp.noteLabel}</label>
          <textarea
            id="rsvp-note"
            className="form-input form-textarea"
            name="note"
            placeholder={rsvp.notePlaceholder}
            value={form.note}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <p className="children-note">{rsvp.childrenNote}</p>

        <button
          type="submit"
          className="rsvp-submit-btn"
          disabled={!form.name.trim() || !form.attending}
        >
          {rsvp.submit}
        </button>
      </form>
    </div>
  )
}
