import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import React, { useState, useEffect } from "react";
import Counter from "../counter/Counter.jsx";
import { Link } from "react-router-dom";
import "./Cards.css"

const Cards = () => {
  const [products, setProducts] = useState([]);
  const productsCollection = collection(db, "zproducts");

  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    
      <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <Card className="card" key={product.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" className="cardImg" src={product.imgProduct} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            {/* <Card.Text>{product.description}</Card.Text> */}
            
        
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
