import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {

  
  return (
    <>
    
    {/* <ItemListContainer  greeting="Nuestros Productos"/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting="Nuestros Productos"/>}/>
    </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;
