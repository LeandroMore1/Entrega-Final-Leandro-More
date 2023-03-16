import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {
const [productCartList, setProductCartList] = useState([])

const existeEnCart = (id)=>{
    const existe = productCartList.some((el)=>el.ide === id);
    return existe;
}

const agregarProducto = (producto, cantidad)=> {
    const listaActualizada = [...productCartList];

    if(existeEnCart(producto.ide)){
        const indiceProducto = productCartList.findIndex(el=>el.ide===producto.ide);
        listaActualizada[indiceProducto].cantTotal = listaActualizada[indiceProducto].cantTotal + cantidad;
        listaActualizada[indiceProducto].precioTotal = listaActualizada[indiceProducto].cantTotal * listaActualizada[indiceProducto].price;
        setProductCartList(listaActualizada)
    } else {

        const productoAgregado={...producto, cantTotal: cantidad, precioTotal: cantidad*producto.price}
        const listaActualizada = [...productCartList];
        listaActualizada.push(productoAgregado);
        setProductCartList(listaActualizada);
    }
}   

    const vaciarListaProductos = () =>{
        setProductCartList([])
    }

    const productosTotales = () => {
        const totalProductos = productCartList.reduce((acum,prod)=>acum + prod.cantTotal,0);
        return totalProductos
    }

    const eliminarProducto = (producto) => {
        const lista = [...productCartList]
        const nuevaLista = lista.filter(el=>el.ide !== producto )
        setProductCartList(nuevaLista)
    }

    const totalPrecio = () =>{
        const totalCompra = productCartList.reduce((acc, el)=> acc + el.precioTotal,0)
        return totalCompra
    }

    return(
        <CartContext.Provider value={{productCartList, productosTotales, agregarProducto, existeEnCart, eliminarProducto, vaciarListaProductos, totalPrecio}}>
            {children}
        </CartContext.Provider>
    )

}