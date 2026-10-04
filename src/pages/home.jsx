import CardImg from "../Elements/cardImg"

function Home() {
  return (
    <div>
      {/* Imagen del Banner */}
      <img src="/MuralOriginalUCLA.webp" className="img-fluid" alt="Mural 'Ah mundo barquisimeto' UCLA"></img>

      <div className="d-flex flex-column align-items-center m-3 gap-2">
        <p className="m-0">Te invitamos a explorar su universo artístico, donde cada creacion cuenta una historia.</p>

        {/* Redes Sociales */}
        <p className="h4 m-0">¡Disfruta la Experiencia!</p>

        <div className="d-flex justify-content-center gap-3 fs-3">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-spotify"></i>
          <i className="bi bi-tiktok"></i>
          <i className="bi bi-youtube"></i>
        </div>

        <CardImg
          title="Virgilio Arrieta"
          subtitle="Patrimonio Cultural inmaterial de Venezuela"
          image="/VA taller.webp"
          text="Nació en El Limón Edo. Aragua en 1955. Desde sus primeros años mostró una sensibilidad especial que lo llevó a desarrollar, de forma autodidacta, una trayectoria artística que abarca la pintura, la música y la expresión cultural.

          A lo largo de su vida ha construido una obra amplia y diversa: como pintor ha explorado distintos lenguajes visuales, y como compositor ha creado más de 300 canciones interpretadas por reconocidos artistas nacionales e internacionales.

          Su trabajo ha trascendido fronteras, consolidándolo como un embajador de la identidad cultural venezolana. Conocer su historia es adentrarse en el recorrido de un artista que ha hecho del arte una forma de vida, uniendo emoción, creatividad y compromiso cultural en cada una de sus obras."/>

      </div>
    </div>
  )
}

export default Home