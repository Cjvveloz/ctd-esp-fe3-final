import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='title'>
      <h2>Quieres mas informacion?</h2>
      <p>Completa el formulario </p>
      <Form/>
    </div>
  )
}

export default Contact