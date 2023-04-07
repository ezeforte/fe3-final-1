import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>¿Quieres sabes más?</h2>
      <p>Envianos tu pregunta y nos contactaremos con vos</p>
      <Form/>
    </div>
  )
}

export default Contact