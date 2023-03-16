import ItemCount from "../ItemCount/ItemCount.jsx";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.js";
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({product}) => {

    const {agregarProducto} = useContext(CartContext);
    const tostada = () => {
        toast.success('Producto agregado al carrito!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const onAdd = (cant)=>{
        agregarProducto(product,cant);
        tostada();
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
            <div className="d-flex justify-evenly">
            <p className="stock">stock: {product.stock}</p>
            <p className="stock">${product.price}</p>
            </div>
            <ItemCount stock={product.stock} onAdd={onAdd}/>
            
     
        </Card.Body>
        </Card>
        </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default ItemDetail