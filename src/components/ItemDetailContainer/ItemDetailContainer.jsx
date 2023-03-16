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
        setProduct(singleDoc.data())
      };

    useEffect(() => {
        getProduct()
      }, []);

      
      //NOTE - dentro del return quise poner un condicional para que la pag tire error si el id del producto no existiera, pero 
      // por alguna razon me tiraba error,  este es el codigo que quise usar dentro del return:
      // //     {
      //   product.ide === undefined? 
      //   <p>error</p>   :<div className="description">
      //  <ItemDetail product={product}/>
      //  </div>
        
      // }


    return(
        <>
        <NavBar/>
        <div className="description">
        <ItemDetail product={product}/>
        </div>
        </>
    )
}

export default ItemDetailContainer