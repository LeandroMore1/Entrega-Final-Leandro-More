import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Formulary.css"
import Swal from "sweetalert2"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom';

export const Formulary = () => {

  const {vaciarListaProductos} = useContext(CartContext)

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
  }

    return (
       
        <div className='formContainer'>
        <h1 className='titleFrom'>Ingrese los siguientes datos para para realizar su compra:</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="email" placeholder="Ingresar mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="text" placeholder="Ingresar nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="text" placeholder="Ingresar apellido" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">

            <Form.Control type="text" placeholder="Ingrese telefono" />
          </Form.Group>
          <div className="d-flex justify-content-center">
          <Button onClick={confirmacion} variant="primary" className="botonComprar" type="submit">
            Comprar
          </Button>
          </div>
        </Form>
        </div>
       
      );
}