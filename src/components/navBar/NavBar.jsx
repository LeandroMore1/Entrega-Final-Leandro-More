import React from "react";
import "./NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../cartWidget/CartWidget";
import esferaDragon from "../img/esferaDragon.png"
import { Link } from "react-router-dom";


const NavBar = ({subtitulo1,subtitulo2}) => {
return (
    <>
    <header>

        

        <div className="d-flex fila justify-content-between  align-items-center">

            <div className="col-md-5 col-lg-4 col-9 d-flex justify-content-around linea">

            <Link to="/" className="botonNav">Inicio</Link>
                    <NavDropdown title="Comprar">
                    <NavDropdown.Item href=""><Link to="/Category/manga" className="navDropBtn">Manga</Link></NavDropdown.Item>             
                     <NavDropdown.Item href=""><Link to="/Category/indumentaria" className="navDropBtn">Indumentaria</Link></NavDropdown.Item>
                   <NavDropdown.Item href=""> <Link to="/Category/figuras" className="navDropBtn"> Figuras</Link> </NavDropdown.Item>              
                    </NavDropdown>
                <a href=""> <button className="botonNav">Contacto</button></a>
                <a href=""><button className="botonNav">Nosotros</button></a>
                
            </div>
            <div className="carrito d-flex justify-content-between">
                <CartWidget />
            </div>
        </div>

        <section className="seccionTitulo">
                <div className="titulo d-flex align-items-center justify-content-center">
                <img src={esferaDragon}/>
                    <h1>Z-Store</h1>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <h2>{subtitulo1}</h2>
                    <p className="textoSeccionTitulo">{subtitulo2}</p>
                    <button className="btnComprar">Comprar</button>
                </div>
            </section>

    </header>


    </>
);
};

export default NavBar;
