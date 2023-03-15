import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"


const CartWidget = () => {

    const {productosTotales} = useContext(CartContext);

        return(
        <>
        <div  className="carrito d-flex justify-content-start">
        <Link to="/Checkout"> <FontAwesomeIcon className="carro" icon={faCartShopping} size="xl"/>  </Link>
        <div className="cantidad">{productosTotales()}</div>
     
        </div>
        </>
    )
}

export default CartWidget;
