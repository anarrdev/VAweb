import "../main.css"
import VerMas from "./vermas"

function CardImg({title, subtitle, image, text, button}) {
  return (
    <div className="card text-bg-dark">
      <div className="card-body">
        <div className="row">

          <div className="col-md-4">
            <img src={image} className="card-img"/>
          </div>

          <div className="col-md-8">
            <h3 className="card-title">{title}</h3>
            <h6>{subtitle}</h6>
            <p className="card-text normal-text mt-3">{text}</p>
            <VerMas />
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardImg