import { Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'



const Card = ({ name, username, id }) => {
  
 
const localValue = JSON.parse(localStorage.getItem('favs'));

const [favs, setFavs] = useState(localValue ?? []);

const addFav = () => {
  const newFav = { name, username, id };
  if (!favs.find((item) => item.id === newFav.id)) {
    const updatedFavs = [...favs, newFav];
    setFavs(updatedFavs);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  }
}

const context = useContext(ThemeContext);
const theme = context.theme;

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(favs));
}, [favs]);

  return (
    <div className="card" >
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Link key={id} to={`details/${id}`} style={{background: theme.background, color: theme.font}} >

      <img src="./images/doctor.jpg" alt='DR-logo' />
        
      <p class="bold-text">{name}</p>
        <p>{username}</p>

      </Link>

      <button onClick={addFav} >Add fav </button>
    </div>
  );
};

export default Card;
