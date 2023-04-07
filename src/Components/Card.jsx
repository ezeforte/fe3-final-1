import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'



const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link key={id} to={`details/${id}`} >

      <img src="./images/doctor.jpg" alt='DR-logo' />
        
      <p class="bold-text">{name}</p>
        <p>{username}</p>

      </Link>

      <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
