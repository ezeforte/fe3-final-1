import React, { useState } from 'react';
import Cuadro from './Cuadro';


const Form = () => {

    // Definir estados para cada campo del formulario
    const [nombre, setNombre] = useState('');
    const [Email, setEmail] = useState('');
    const [nombreTemporal, setNombreTemporal] = useState('');
    const [EmailTemporal, setEmailTemporal] = useState('');
    const [mostrarInfo, setMostrarInfo] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Definir estado para el mensaje de error
    const [error, setError] = useState('');
  
    // Función para manejar el envío del formulario
    function handleSubmit(e) {
      e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
      // Validar la información ingresada
  
  
      if (nombre.length < 5) {
        setError('Por favor verifique su información nuevamente');
        return;
      }
      if (!emailRegex.test(Email)) {
        setError('Por favor verifique su información nuevamente');
        return;
  
      }
  
      if (nombre.trim() === '' || Email.trim() === '' ) {
        setError('Por favor ingrese todos los campos');
        return;
      }
  
  
      // Si todo está bien, mostrar la información ingresada
      
      setNombreTemporal(nombre);
      setEmailTemporal(Email);
      setMostrarInfo(true);
      // Limpiar los campos del formulario
      {setNombre('')}
      {setEmail('')}
      {setError('')}
      
    }
  
    return (
      <div>
        
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            
            <label htmlFor="Email">Email:</label>
            <input type="Email" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          </div>
         
          <button type="submit">Enviar</button>
        </form>
        {mostrarInfo && <Cuadro nombreTemporal={nombreTemporal} EmailTemporal={EmailTemporal} />}
       
      </div>
    );
  }
  
 








export default Form;
