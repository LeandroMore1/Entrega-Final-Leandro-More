import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Formulary } from "../Formulary/Formulary"
import "./Brief.css"

export const Brief = () => {
    const {productCartList,totalPrecio} = useContext(CartContext)



    return(
      
            <div className="d-flex justify-content-evenly">
            
        {
           productCartList.length>0 ? <>
           <div className="briefContainer">
            <div className="cont">
           <h1 className="tituloDetalles">detalles de compra:</h1>
           <p className="compra">Tu compra:</p>
           {productCartList.map((product)=>(
                <div className="productDetails" key={product.ide}>
                <ul>
                    <li> <p>{product.name} x {product.cantTotal} </p></li>
                </ul>
               
                </div>
            )
           )}  <p className="total">total: {totalPrecio()}$</p> 

            
           </div>
           </div>
           <div>
            <Formulary/>
           </div>
            </>
           
           :
           <>
           <div className="d-flex flex-column align-items-center containerErr">
       
            <h1>¡Lo sentimos! 😬 </h1>
           <h1 className="errorTxt">¡parece ser que no tienes nada pendiente que comprar!</h1>
      
            </div>
            </> 
        }

       
        </div>
        
    )

}