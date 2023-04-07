import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [details, setDetails] = useState([])
  let params = useParams();
  let id = params.id;

  const getDetails = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(json => setDetails(json))
  };
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    getDetails();
  }, []);

  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
      <h1>Detalle dentista N°: {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <table>
  <thead>
    <tr>
      <th>Apellido</th>
      <th>Nombre</th>
      <th>Email</th>
      <th>Teléfono</th>
      <th>Web</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{details.name}</td>
      <td>{details.username}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.website}</td>
    </tr>
    </tbody>


    </table>




    </div>
  )
}

export default Detail





