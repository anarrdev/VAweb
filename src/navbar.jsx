import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-chevron-contract fs-1"></i>
          <h1 className="fs-2 mb-0">Virgilio Arrieta</h1>
        </Link>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Pintura</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Música</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/biografia">Biografía</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="">Blog</Link>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar