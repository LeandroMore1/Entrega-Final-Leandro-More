import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./ItemCount.css"

const ItemCount = ({stock}) => {

    const[cant,setCant] = useState(1)

    const aumentar = ()=>{
        if(cant>1){
            setCant(cant-1)
        }
    }

    const restar = ()=>{
        if(cant<stock){
            setCant(cant+1)
        }
    }

    return(
        <>
<div className="d-flex">
        <p>cantidad: {cant}</p>
        <Button disabled={stock===0} className="btnCounter boton" onClick={aumentar} size="md" variant="dark">-</Button>
        <Button disabled={stock===0} className="btnCounter boton" onClick={restar} size="md" variant="dark">+</Button>
        
        </div>
        <div className="d-flex justify-content-around">
        <Button disabled={stock===0} variant="primary" className="boton">Agregar</Button>
        <Link  to="/" variant="primary" className="btn btn-dark boton btnVolver">volver</Link>
        </div>

        </>
    )
}

export default ItemCount