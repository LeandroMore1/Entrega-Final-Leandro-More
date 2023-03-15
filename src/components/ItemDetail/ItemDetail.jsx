import ItemCount from "../ItemCount/ItemCount.jsx";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";

const ItemDetail = ({product}) => {

    const {agregarProducto} = useContext(CartContext);

    const onAdd = (cant)=>{
        agregarProducto(product,cant);
    }


    return(

        <>

        <div className="description">
        <h1 className="d-flex justify-content-center tituloDetail">Detalles del producto:</h1>

        <div className=" d-flex justify-content-center">
        <Card className="card" key={product.id} style={{ width: "18rem" }}>
        <Card.Img variant="top" className="cardImg" src={product.imgProduct} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <p className="stock">stock: {product.stock}</p>
            <ItemCount stock={product.stock} onAdd={onAdd}/>
     
        </Card.Body>
        </Card>
        </div>
        </div>
        </>
    )
}

export default ItemDetail