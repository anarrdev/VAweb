function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">

        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-chevron-contract fs-1"></i>
          <h1 className="fs-2 mb-0">Virgilio Arrieta</h1>
        </a>

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
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pintura</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Música</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Biografía</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  )
}

export default Navbar