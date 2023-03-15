import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/CartWidget';
import "./NavBar.css"

function NavBar(){
    return(
        
        <div className="d-flex fila justify-content-between  align-items-center">

            <div className="col-md-5 col-lg-4 col-9 d-flex justify-content-around linea">

            <Link to="/" className="botonNav">Inicio</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href=""><Link to="/Category/manga" className="navDropBtn">Manga</Link>  </NavDropdown.Item>
              <NavDropdown.Item href="">
              <Link to="/Category/clothes" className="navDropBtn">Indumentaria</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href=""> <Link to="/Category/figures" className="navDropBtn"> Figuras</Link> </NavDropdown.Item>
            </NavDropdown>
                        
                   
                <a href=""> <button className="botonNav">Contacto</button></a>
                <a href=""><button className="botonNav">Nosotros</button></a>
                
            </div>
            <div className="carrito d-flex justify-content-start">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;