import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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


  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <div>
        <img src="./images/doctor.jpg" alt='DR-logo' />

        <p class="bold-text">{details.name}</p>
        <p>{details.username}</p>
        <p>{details.email}</p>
        <p>{details.phone}</p>
        <p>{details.website}</p>

      </div>




    </>
  )
}

export default Detail





