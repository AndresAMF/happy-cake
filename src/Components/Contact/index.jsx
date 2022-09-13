import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles.css'

function Contact() {

    let navigate = useNavigate();

  return (
    <form action="mailto:happycake@fakemail.com"className='main-container-contact'>
      <h1>Cuentanos, ¿En qué te podemos ayudar?</h1>
      <label className='form-element'>Correo</label>
      <input className='form-element' type="text" />
      <label className='form-element'>Mensaje</label>
      <textarea className='form-element mesage' type="text" />
      <Button  className='form-element button' type='submit'>Enviar</Button>
      <Button  className='form-element button' onClick={() => {navigate("/")}}>Volver al Home</Button> 
    </form>
  )
}

export default Contact