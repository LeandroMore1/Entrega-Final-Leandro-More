import React from "react";
import "./styles/ItemListContainer.css"
const ItemListContainer = ({greeting}) => {
    return(
        <div className="d-flex nuestrosProductos justify-content-center">
        <h2>{greeting}</h2>
        </div>
    )
}
export default ItemListContainer;