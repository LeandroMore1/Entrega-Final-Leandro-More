import { doc, getDoc } from "firebase/firestore"
import { useNavigate, useParams } from "react-router-dom"
import { db } from "../firebaseConfig/firebase"
import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Counter from "../counter/Counter.jsx";
import "./ItemDetailContainer.css"
import { Link } from "react-router-dom";




const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const productId = useParams().id

    const docRef = doc(db,"zproducts",productId)


    const getProduct = async () => {
        const singleDoc = await getDoc(docRef);
        setProduct(singleDoc.data())
      };

    useEffect(() => {
        getProduct()
      }, []);

    console.log(productId)
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
      
            <Counter/>
            <div className="d-flex justify-content-around align-items-center">
            <Button variant="primary" className="boton btnDetalles">Agregar al Carrito</Button>
            <Link  to="/" variant="primary" className="btn btn-dark boton btnVolver">volver</Link>
        </div>
        </Card.Body>
        </Card>
        </div>
        </div>
        </>
    )
}

export default ItemDetailContainer