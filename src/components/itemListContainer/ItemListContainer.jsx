
import "./ItemListContainer.css"
// import Cards from "../cards/Cards";
import NavBar from "../navBar/NavBar";

import Cards from "../cards/Cards"

const ItemListContainer = ({greeting}) => {



    return(
        <>
        <NavBar subtitulo1="¡La tienda oficial de Dragon Ball Z!" subtitulo2="Estas a un click de tener lo mas deseado de la mejor saga de anime 😉"/>
        <div className="d-flex nuestrosProductos justify-content-center">
        <h2>{greeting}</h2>
        </div>

        <Cards/>
        {/* <div className="container">

       <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center" > <Cards titulo="Remera Goku" descripcion="Remera 100% algodon inspirada en Goku" img="https://d2r9epyceweg5n.cloudfront.net/stores/001/007/057/products/dragon-ball-51-da879b8eebdf126ed415675263431029-1024-1024.jpg"/></div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center" >   <Cards titulo="Remera Vegeta" descripcion="Remera Vegeta Blue 100% algodon" img="https://http2.mlstatic.com/D_NQ_NP_787673-MLA41953914370_052020-O.jpg"/></div>
                <div className="col-lg-4 col-md-6 col-sm-6  d-flex justify-content-center"> <Cards titulo="Buzo Dragon Ball" descripcion="Buzo canguro negro algodon" img="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/023/208/products/goku-buzo1-8516c38b4de82b3bca16198797584018-1024-1024.jpg"/></div>
                </div>
        </div> */}
        </>
    )
}
export default ItemListContainer;