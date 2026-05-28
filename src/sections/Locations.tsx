import { useLanguage } from '../i18n/LanguageContext'
import './Locations.css'

export default function Locations() {
  const { t } = useLanguage()
  const { locations: loc } = t

  return (
    <div className="section-inner">
      <h2 className="section-title">{loc.title}</h2>

      <div className="locations-grid">
        <LocationCard
          label={loc.ceremonyTitle}
          name={loc.ceremonyName}
          address={loc.ceremonyAddress}
          mapUrl={loc.ceremonyMapUrl}
          directionsLabel={loc.getDirections}
          icon="🏛️"
        />
        <LocationCard
          label={loc.churchTitle}
          name={loc.churchName}
          address={loc.churchAddress}
          mapUrl={loc.churchMapUrl}
          directionsLabel={loc.getDirections}
          icon="⛪"
        />
        <LocationCard
          label={loc.receptionTitle}
          name={loc.receptionName}
          address={loc.receptionAddress}
          mapUrl={loc.receptionMapUrl}
          directionsLabel={loc.getDirections}
          icon="🥂"
        />
      </div>
    </div>
  )
}

interface CardProps {
  label: string
  name: string
  address: string
  mapUrl: string
  directionsLabel: string
  icon: string
}

function LocationCard({ label, name, address, mapUrl, directionsLabel, icon }: CardProps) {
  return (
    <div className="location-card">
      <div className="location-icon" aria-hidden="true">{icon}</div>
      <p className="location-label">{label}</p>
      <h3 className="location-name">{name}</h3>
      <address className="location-address">{address}</address>
      <a
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="location-btn"
      >
        {directionsLabel}
        <svg
          className="btn-icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 7a2.5 2.5 0 010 4.5z" />
        </svg>
      </a>
    </div>
  )
}
