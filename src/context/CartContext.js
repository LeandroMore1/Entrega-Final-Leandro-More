import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) =>{
const [productCartList, setProductCartList] = useState([])

const existeEnCart = (id)=>{
    const existe = productCartList.some((el)=>el.ide === id);
    return existe;
}

const agregarProducto = (product, cantidad)=>{
    const listaActualizada = [...productCartList];

    if(existeEnCart(product.ide)){
        const indiceProducto = productCartList.findIndex(el=>el.ide===product.ide);
        listaActualizada[indiceProducto].cantTotal = listaActualizada[indiceProducto].cantTotal + cantidad;
        listaActualizada[indiceProducto].precioTotal = listaActualizada[indiceProducto].cantTotal * listaActualizada[indiceProducto].price;
        setProductCartList(listaActualizada)
    } else {

        const productoAgregado={...product, cantTotal: cantidad, precioTotal: cantidad*product.price}
        const listaActualizada = [...productCartList];
        listaActualizada.push(productoAgregado);
        setProductCartList(listaActualizada);
    }
}

    const productosTotales = () =>{
        const totalProductos = productCartList.reduce((acum,prod)=>acum + prod.cantTotal,0);
        return totalProductos
    }

    return(
        <CartContext.Provider value={{productCartList, productosTotales, agregarProducto, existeEnCart}}>
            {children}
        </CartContext.Provider>
    )

}