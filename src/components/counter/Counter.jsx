import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Counter = () => {

    const[cant,setCant] = useState(0)

    return(
        <>

        <p>cantidad: {cant}</p>
        <div className="d-flex">
        <Button className="btnMenos" onClick={()=> setCant(cant-1)} size="md" variant="dark">-</Button>
        <Button onClick={()=> setCant(cant+1)} size="md" variant="dark">+</Button>
        </div>
        </>
    )
}

export default Counter