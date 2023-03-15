import "./CartProduct.css"

export const CartProduct = ({prod}) => {
    return(
        <div className="d-flex">
    <div className=" d-flex">
        <img className="imgProduct" src={prod.imgProduct} alt="" />
    </div>
    <div>
        <p>{prod.name}</p>
        <p>precio: {prod.price}$</p>
        <p>cantidad: {prod.cantTotal}</p>
        <p>total: {prod.precioTotal}</p>
    </div>
    </div>
    )
    
}
