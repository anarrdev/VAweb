import { useNavigate } from "react-router-dom"

function VerMas() {
  const navigate = useNavigate();

  return (
    <button className="btn btn-outline-light"
    onClick={() => navigate("/biografia")}>
      Ver más
    </button>
  )
}

export default VerMas