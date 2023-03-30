import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./Formulary.css"
import Swal from "sweetalert2"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

import {getFirestore, addDoc, collection } from 'firebase/firestore';


export const Formulary = () => {

  const {vaciarListaProductos , productCartList} = useContext(CartContext)

  const [email, setEmail] = useState("")
  const [emailConf, setEmailConf] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [tel, setTel] = useState("")

  const db = getFirestore()
  const refColeccion = collection(db, "payments")
 
  const validar = () =>{
    return nombre.length > 0 && apellido.length > 0 && tel.length > 0
  }
  

  const navigate = useNavigate();

  const redirigirInicio = () =>{
      navigate('/')
  }


  const confirmacion = () => {
    const numOrden = Math.round(Math.random()*10000)
    const prods = productCartList.map(item => ` ${item.name} x ${item.cantTotal}`).toString()
    const date = new Date().toLocaleDateString('es-AR');
   
    addDoc(refColeccion, {
      productos: prods,
      fechaCompra: date,
      numOrden: numOrden,
      estado: "generada"
    })
    Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: `Tu número de orden de compra es: #${numOrden}`
    })
      redirigirInicio();
      vaciarListaProductos();
      
    
  }


    return (
      <div className='formContainer'>
      <h1 className='titleFrom'>Ingrese los siguientes datos para para realizar su compra:</h1>
      <form className='formulario'>
  <div className='d-flex align-items-center flex-column'>
      <div>
      
      <input type="text" onChange={(e)=>setNombre(e.target.value)} placeholder="Nombre" />
      <input type="text" onChange={(e)=>setApellido(e.target.value)} placeholder="Apellido" />
      <input type="text" onChange={(e)=>setTel(e.target.value)} placeholder="Telefono" />
      <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="E-mail"></input>
      <input type="email" onChange={(e)=>setEmailConf(e.target.value)} placeholder="Reingrese su E-mail"></input>
  </div>
          <div>
  <Button onClick={confirmacion} disabled={email !== emailConf || !validar()} className='botonComprar' type="submit" >Comprar</Button>
          </div>
      
  </div>
</form> 
</div>

      );
}