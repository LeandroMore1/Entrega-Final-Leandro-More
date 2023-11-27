import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Checkout } from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
    <CartProvider>
        <BrowserRouter basename="/entregable-final-react">

          <Routes>
          
            <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />}/>
            <Route path="/Item/:id" element={<ItemDetailContainer />}/>
            <Route path="/Category/:category" element={<ItemListContainer />}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>

          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
