import { createContext, useState } from "react";

export const cartContext = createContext()

export const CartProvider = ({children}) =>{
const [productCartList, setProductCartList] = useState([])

const isInCart = (id)=>{
    const elementExists = productCartList.some((elemento)=>elemento.id === id);
    return elementExists;
}

    const totalProductos = () =>{
        totalProductos = productCartList.reduce((acc,item)=>acc + item.quantity,0);
        return totalProductos
    }


}