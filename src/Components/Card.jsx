import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
//import { useGlobaStates } from '../Context/Context'


const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link key={id} to={`dentist/${id}`} >

      <img src="/public/images/doctor.jpg" alt='' />
        <p>{name}</p>
        <p>{username} ID: {id} </p>

      </Link>

      <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
