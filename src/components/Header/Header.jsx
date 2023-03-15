import React from "react";
import "./Header.css";
import esferaDragon from "../img/esferaDragon.png"
import NavBar from "../NavBar/NavBar";



const Header = ({subtitulo1,subtitulo2}) => {
return (
    <>
    <header>

        <NavBar/>


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

export default Header;
