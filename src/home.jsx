function Home() {
  return (
    <div>
      {/* Imagen del Banner */}
      <img src="/MuralOriginalUCLA.webp" className="img-fluid" alt="Mural 'Ah mundo barquisimeto' UCLA"></img>

      <div className="container-fluid text-center">
        <p className="m-0">Te invitamos a explorar su universo artístico, donde cada creacion cuenta una historia y despierta emociones.</p>

        {/* Redes Sociales */}
        <div className="d-flex justify-content-center gap-3">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-spotify"></i>
          <i className="bi bi-tiktok"></i>
          <i className="bi bi-youtube"></i>
        </div>

        <p className="h4">¡Disfruta la Experiencia!</p>

      </div>
    </div>
  )
}

export default Home