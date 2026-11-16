function CardDisco({img, title, song1, song2, song3, song4, song5, song6, song7, song8, song9, song10, song11, song12}) {
    return (
        <div className="container">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <img src={img} className="card-img" alt={img} />
                    <h5 className="mt-2 mb-0">{title}</h5>

                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                            The current link item
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                        <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                        <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                        <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDisco