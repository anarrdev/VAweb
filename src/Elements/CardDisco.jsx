function CardDisco({ img, title, songs = [] }) {
    return (
        <div className="container">
            <div className="card" style={{ width: '20rem' }}>
                <div className="card-body">
                    <img src={img} className="card-img" alt={title} />
                    <h5 className="mt-2 mb-0">{title}</h5>

                    <div className="list-group mt-2">
                        {songs.map((song, index) => (
                            <a
                                key={index}
                                href="#"
                                className="list-group-item list-group-item-action"
                            >
                                {song}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDisco