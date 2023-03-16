import "./CartProduct.css"
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartProduct = ({prod}) => {

    const {eliminarProducto} = useContext(CartContext)

    return(
    <div className="d-flex align-items-center justify-content-between containerProduct row">
        <div className="d-flex col-8">
            <div className="d-flex align-items-center">
                <img className="imgProduct" src={prod.imgProduct} alt="" />
            </div>
            <div className="d-flex align-items-center">
                <p>{prod.name}</p>
                <p>precio: {prod.price}$</p>
                <p>cantidad: {prod.cantTotal}</p>
                <p>total: {prod.precioTotal}$</p>
            </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
        <Button variant="dark" onClick={()=>eliminarProducto(prod.ide)} className="boton">Eliminar</Button>
        </div>
    </div>
    )
    
}
