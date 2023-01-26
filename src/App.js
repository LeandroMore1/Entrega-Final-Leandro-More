import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <NavBar subtitulo1="¡La tienda oficial de Dragon Ball Z!" subtitulo2="Estas a un click de tener lo mas deseado de la mejor saga de anime 😉"/>
    <ItemListContainer  greeting="Nuestros Productos"/>
    </>
  );
}

export default App;
