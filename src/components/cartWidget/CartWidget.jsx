import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <>
        <div  className="carrito d-flex justify-content-start">
        <Link to="/Checkout"> <FontAwesomeIcon className="carro" icon={faCartShopping} size="xl"/>  </Link>
        <div className="cantidad">0</div>
     
        </div>
        </>
    )
}

export default CartWidget;
