import Card from "react-bootstrap/Card";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards.css"
import { useParams } from "react-router-dom";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "zproducts");

  const categoria = useParams()

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  
  };

  //NOTE - aca intento hacer que si la categoria guardada  en use
  //params() es igual a un string vacio, que ejecute get products, sino
  //convierte a products en un array cuya categoria sea igual a la variable
  // pero no se bien como hacerlo funcionar

  // // useEffect(() => {
  // //   if (categoria == ""){
  // //     getProducts() 
  // //   } else {
  // //     setProducts(products.filter(item=>item.categoria === categoria))
  // //   }

  // // }, [categoria]);

  useEffect(()=>{
    getProducts()
  },[])



  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Card className="card" key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" className="cardImg" src={product.imgProduct} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
        
            <div className="d-flex justify-content-around">
            <Link  variant="primary" className="btn btn-dark boton btnDetalles" to={`/Item/${product.id}`}>Ver Detalles</Link>
            </div>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
  );
};
export default Cards;
