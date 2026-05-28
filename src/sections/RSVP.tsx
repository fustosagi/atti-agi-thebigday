import { useState, useRef, useCallback, type FormEvent, type ChangeEvent } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './RSVP.css'

// See the setup instructions in google-apps-script/Code.gs
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwCBXK4tAs7cyLPfW8xQmqs2uJUvx1me_bV5Uu5czDkic3aKVR93ttpDmk9qb3FhnZV/exec'

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
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const hiddenFormRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // When the hidden iframe loads after form submission, treat it as success.
  const onIframeLoad = useCallback(() => {
    if (!submitting) return
    setSubmitting(false)
    setSubmitted(true)
  }, [submitting])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const hiddenForm = hiddenFormRef.current
    if (!hiddenForm) return

    // Populate hidden form fields
    const setField = (name: string, value: string) => {
      const input = hiddenForm.querySelector<HTMLInputElement>(`[name="${name}"]`)
      if (input) input.value = value
    }
    setField('name', form.name)
    setField('attending', form.attending)
    setField('guests', form.attending === 'yes' ? form.guests : '0')
    setField('dietary', form.dietary)
    setField('note', form.note)
    setField('timestamp', new Date().toISOString())

    hiddenForm.submit()
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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
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

        {error && <p className="rsvp-error">{rsvp.errorMessage}</p>}

        <button
          type="submit"
          className="rsvp-submit-btn"
          disabled={!form.name.trim() || !form.attending || submitting}
        >
          {submitting ? rsvp.submitting : rsvp.submit}
        </button>
      </form>

      {/* Hidden iframe + form to bypass CORS (HTML form submissions are not subject to CORS) */}
      <iframe
        ref={iframeRef}
        name="rsvp-iframe"
        onLoad={onIframeLoad}
        style={{ display: 'none' }}
        title="rsvp-submit"
      />
      <form
        ref={hiddenFormRef}
        method="POST"
        action={APPS_SCRIPT_URL}
        target="rsvp-iframe"
        style={{ display: 'none' }}
      >
        <input type="hidden" name="name" />
        <input type="hidden" name="attending" />
        <input type="hidden" name="guests" />
        <input type="hidden" name="dietary" />
        <input type="hidden" name="note" />
        <input type="hidden" name="timestamp" />
      </form>
    </div>
  )
}
