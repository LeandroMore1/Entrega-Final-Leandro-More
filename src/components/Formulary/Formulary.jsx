import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Formulary.css"
import Swal from "sweetalert2"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig/firebase';
import {getFirestore, addDoc, collection } from 'firebase/firestore';


export const Formulary = () => {

  const {vaciarListaProductos , productCartList} = useContext(CartContext)

  const db = getFirestore()
  const refColeccion = collection(db, "payments")

  const procesamiento = () => {
    const names = productCartList.map((el)=> el.name)
    addDoc(refColeccion, {
      productos: names.toString(),
      fechaCompra: Date(),
      numOrden: Math.round(Math.random()*10000)
    })
  }

  

  const navigate = useNavigate();

  const redirigirInicio = () =>{
      navigate('/')
  }


  const confirmacion = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias!',
      text: '¡Tu compra ha sido registrada con exito!'
    })
      redirigirInicio();
      vaciarListaProductos();
      procesamiento();
    
  }


    return (
      <div className='formContainer'>
      <h1 className='titleFrom'>Ingrese los siguientes datos para para realizar su compra:</h1>
      <form className='formulario'>
  <div className='d-flex align-items-center flex-column'>
      <div>
  <input type="text" id="fname" name="name" value="Nombre"></input>
  <input type="text" id="lname" name="surname"  value="Apellido"></input>
  <input type="text" id="lname" name="mail" value="Mail"></input>
  <input type="text" id="lname" name="tel" value="Telefono"></input>
  </div>
          <div>
  <Button onClick={confirmacion} className='botonComprar' type="submit" >Comprar</Button>
          </div>
      
  </div>
</form> 
</div>

      );
}