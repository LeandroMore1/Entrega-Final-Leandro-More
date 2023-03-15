
import "./ItemListContainer.css"

import NavBar from "../Header/Header";

import Cards from "../cards/Cards"

const ItemListContainer = ({greeting}) => {



    return(
        <>
        <NavBar subtitulo1="¡La tienda oficial de Dragon Ball Z!" subtitulo2="Estas a un click de tener lo mas deseado de la mejor saga de anime 😉"/>
        <div className="d-flex nuestrosProductos justify-content-center">
        <h2>{greeting}</h2>
        </div>
        
        <Cards/>
       

        </>
    )
}
export default ItemListContainer;