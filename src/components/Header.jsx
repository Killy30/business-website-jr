
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark position-fixed top-0 w-100 ">
            <div className="container-fluid d-flex justify-content-between container">
                <a className="fs-3 navbar-brand text-light" href="#">
                    <div className="img_logo">
                        <img src={'../../imgs/logo_white1.png'} alt="" />
                    </div>
                </a>
                
                <div className="" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#about">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#service">Servicio</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link text-light" href="#galery" >Galeria</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link text-light" href="#contact" >Contactos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header