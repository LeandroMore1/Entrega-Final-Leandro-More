import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Checkout from "./components/Checkout/Checkout"

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          
          <Route path="/" element={<ItemListContainer greeting="Nuestros Productos" />}/>
          <Route path="/Item/:id" element={<ItemDetailContainer />}/>
          <Route path="/Category/:category" element={<ItemListContainer />}/>
          <Route path="/Checkout" element={<Checkout/>}/>

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
