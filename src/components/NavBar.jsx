import React from "react";
import "./styles/NavBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";


const NavBar = ({subtitulo1,subtitulo2}) => {
return (
    <>
    <header>

        

        <div className="d-flex fila justify-content-between  align-items-center">

            <div className="col-md-5 col-lg-4 col-9 d-flex justify-content-around">

                <a href=""><button className="botonNav">Inicio</button></a>
                    <NavDropdown title="Comprar">
                    <NavDropdown.Item href="">Manga</NavDropdown.Item>
                    <NavDropdown.Item href="">Indumentaria</NavDropdown.Item>
                    <NavDropdown.Item href="">Figuras</NavDropdown.Item>
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
                <img src="https://www.clipartmax.com/png/small/67-678820_esfera-del-dragon-de-7-estrella-render-hd-png-by-todoanimeoficial-esfera.png"/>
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
