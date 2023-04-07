import React from 'react'
import Form from '../Components/Form'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
      <h1>Contacto</h1>
      <p>Envianos tu pregunta y nos contactaremos con vos</p>
      <Form/>
    </div>
  )
}

export default Contact