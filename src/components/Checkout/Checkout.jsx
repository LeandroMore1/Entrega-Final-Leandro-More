
import "./Checkout.css"
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {CartProduct} from "../CartProduct/CartProduct";
import Button from 'react-bootstrap/Button';

const Checkout = () => {

    const {productCartList, vaciarListaProductos} = useContext(CartContext)
    console.log(productCartList)

    return(
        <>
        <div className="cuerpoCheckout">
        <NavBar/>

        <h1 className="tituloCheckout">Carrito</h1>
        
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(prod=>(
                <CartProduct key={prod.ide} prod={prod}/>
              ))
            }
            <div className="d-flex containerBtn justify-content-evenly">
            <Button variant="dark" onClick={()=>vaciarListaProductos()} className="btnCheckout btnLimpiar">Vaciar carrito</Button>
            <Button variant="dark"  className="btnCheckout">Comprar</Button>
            </div>
          </>
          :

          <h1 className="textCarritoVacio">¡Todavia no tienes productos en tu carrito!</h1>
        }
        

        </div>
        </>
    )
}

export default Checkout