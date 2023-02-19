import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <>
        <div  className="carrito d-flex justify-content-start">
        <FontAwesomeIcon className="carrito" icon={faCartShopping} size="xl"/>
        <div className="cantidad">0</div>
        </div>
        </>
    )
}

export default CartWidget;
