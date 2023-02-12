import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    return(
        <>

        <FontAwesomeIcon icon={faCartShopping} size="xl"/>
        <div className="cantidad">0</div>

        </>
    )
}

export default CartWidget;
