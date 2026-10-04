function RedesSociales({ size }) {
  return (
    <div className="d-flex justify-content-center gap-3">

      <a href="https://www.instagram.com/virgilioarrieta/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-reset">
        <i className={`bi bi-instagram fs-${size}`}></i>
      </a>

      <a href="https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn?si=uneWYGmTTQKLZOWVe55klQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-reset">
        <i className={`bi bi-spotify fs-${size}`}></i>
      </a>

      <a href="https://www.tiktok.com/@virgilio.arrieta?lang=es"
        target="_blank"
        rel="noopener noreferrer"
        className="text-reset">
        <i className={`bi bi-tiktok fs-${size}`}></i>
      </a>

      <a href="https://www.youtube.com/@virgilioarrieta5238"
        target="_blank"
        rel="noopener noreferrer"
        className="text-reset">
        <i className={`bi bi-youtube fs-${size}`}></i>
      </a>
    </div>
  )
}

export default RedesSociales