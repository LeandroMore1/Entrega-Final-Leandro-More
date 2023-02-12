import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {collection, getDocs, doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase"
import React, { useState, useEffect } from "react";

const Cards = () =>{

    const [products, setProducts] = useState([])
    const productsCollection = collection (db,"zproducts")
    const getProducts = async ()=>
    {
    const data = await getDocs (productsCollection)

    setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

    }

    console.log(products)

    useEffect(() => {
        getProducts();
      }, []);

    return(
        <>
        {products.map((product)=> {
            <div key={product.id}>
            <p>{product.name}</p>
            </div>
        })}
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</>
        )
    }
export default Cards

