import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Counter.css"

const Counter = () => {

    const[cant,setCant] = useState(0)

    return(
        <>
<div className="d-flex">
        <p>cantidad: {cant}</p>
        
        <Button className="btnCounter boton" onClick={()=> setCant(cant-1)} size="md" variant="dark">-</Button>
        <Button className="btnCounter boton" onClick={()=> setCant(cant+1)} size="md" variant="dark">+</Button>
        </div>
        </>
    )
}

export default Counter