
import "./Cart.css"
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {CartProduct} from "../CartProduct/CartProduct";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {

    const {productCartList, vaciarListaProductos, totalPrecio} = useContext(CartContext)
  

    const alertaLimpiar = () => {
      Swal.fire({
        title: 'Estas seguro?',
        text: "Se borraran todos los productos de tu carrito!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listo!',
            'se han borrado los productos',
            'success'
          )
          vaciarListaProductos()
        }
      })
    }


    return(
        <>
        <div className="cuerpoCheckout">
        <NavBar/>

        <h1 className="tituloCheckout">Carrito:</h1>
        
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(prod=>(
                <CartProduct key={prod.ide} prod={prod}/>
              ))
            }
            <div className="d-flex containerBtn justify-content-evenly">
            <p className="precioTotal">Total compra: {totalPrecio()}$</p>
            <Button variant="dark" onClick={alertaLimpiar} className="btnCheckout btnLimpiar">Vaciar carrito</Button>
            <Link to="/Checkout"><Button variant="dark" className="btnCheckout">Siguiente</Button></Link>
            </div>
          </>
          :

          <h1 className="textCarritoVacio">¡Todavia no tienes productos en tu carrito!</h1>
        }
        

        </div>
        </>
    )
}

export default Cart