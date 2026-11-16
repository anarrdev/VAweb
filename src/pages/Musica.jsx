import CardDisco from "../Elements/CardDisco"

function Musica() {
    return (
        <div className="container">
            <h2>Música - Discografía</h2>
            <p>Te invitamos a sumergirte en su mundo sonoro y a descubrir el significado detrás de cada verso.</p>
            <p>Cada canción cuenta una historia, un reflejo de sus experiencias, emociones y el estilo único que lo caracteriza.</p>

            <div className="d-flex">
                {/* UN CAMINO Y UNA ESTRELLA */}
                <CardDisco
                    img=""
                    title="Un Camino y Una Estrella"
                    songs={[
                        "A quién no le ha pasado",
                        "Un camino y una estrella",
                        "Como luz en agua clara",
                        "Todo lo prohibido",
                        "Cuando uno anda apurao'",
                        "Quién como yo",
                        "Yo que no he nacido aquí",
                        "La luna parece un mango",
                        "Mi padre mi amigo",
                        "Con el mismo amor de siempre"
                    ]}
                />


                {/* ARCILLA CAMINO Y SOL */}
                <CardDisco
                    img=""
                    title="Arcilla, Camino y Sol"
                    songs={[
                        "Con alma de cantor",
                        "Lara es una sola",
                        "Yo que no he nacido aquí",
                        "El carretero",
                        "Sanare",
                        "Las cosas bellas de Lara",
                        "Arcilla camino y sol",
                        "Bajo la neblina",
                        "Gracias papá",
                        "Un larense canta",
                        "Como luna de abril",
                        "Tierra bendita"
                    ]}
                />

            </div>
        </div>
    )
}

export default Musica