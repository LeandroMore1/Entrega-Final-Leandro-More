
import "./Checkout.css"
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {CartProduct} from "../CartProduct/CartProduct";

const Checkout = () => {

    const {productCartList} = useContext(CartContext)
    console.log(productCartList)
    return(
        <>
        <div className="cuerpoCheckout">
        <NavBar/>

        <h1>Carrito</h1>
        <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(prod=>(
                <CartProduct key={prod.ide} prod={prod}/>
              ))
            }
           
          </>
          :
          <p>¡El carrito esta vacio!</p>
        }
        </div>

        </div>
        </>
    )
}

export default Checkout