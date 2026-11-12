function CardLeft({ img, title, text }) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="row g-0 align-items-center">

                    <div className="col-3">
                        <img
                            src={img}
                            className="img-fluid rounded-start"
                            alt={title}
                        />
                    </div>

                    <div className="col-9">
                        <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-text normal-text">{text}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardLeft;