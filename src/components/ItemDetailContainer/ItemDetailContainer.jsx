import { doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../firebaseConfig/firebase"
import { useState, useEffect } from "react"
import "./ItemDetailContainer.css"
import NavBar from "../NavBar/NavBar";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);

    const productId = useParams().id

    const docRef = doc(db,"zproducts",productId)


    const getProduct = async () => {
        const singleDoc = await getDoc(docRef);
        if(singleDoc.exists()){
          setProduct(singleDoc.data())
      }};


    useEffect(() => {
        getProduct()
      }, []);

      const [mostrar,setMostrar] = useState(false)
      useEffect(()=>{
      setTimeout(function() {
      setMostrar(true)
         }, 1000);
       },
      [])
      

    return(
        <>
        {
         
          product.name?
          <>
          <NavBar/>
          <div className="description">
          <ItemDetail product={product}/>
          </div> 
          </>:
          mostrar?
          <>
          
          <NavBar/>
          <h1 className="msgError">Error:</h1>
          <h2 className="txtError d-flex justify-content-center">¡Parece que el producto que buscabas no existe!</h2>
          </>:<></>
        }
        </>
    )
}

export default ItemDetailContainer