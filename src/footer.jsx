import RedesSociales from "./Elements/iconorrss"

function Footer() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="d-flex justify-content-between align-items-center p-2">

        <p className="m-0">© 2025 Virgilio Arrieta</p>
        
        <RedesSociales size={6}/>
        
      </div>
    </div>
  )
}

export default Footer