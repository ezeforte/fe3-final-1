import React from "react";
import Card from "../Components/Card";
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const context = useContext(ThemeContext);
  const theme = context.theme


  const localValue = JSON.parse(localStorage.getItem('favs'));



  return (
    <div style={{background: theme.background, color: theme.font}}>
    <main className="" >
      
     
      <h1>Favoritos</h1>
      
      
        <div className='card-grid' style={{background: theme.background, color: theme.font}}>
          {/* Aqui deberias renderizar las cards */
            localValue.map((user) => (
              <Card name={user.name} username={user.username} id={user.id}/>
              
            ))}
        </div>
      
    </main>
    </div>
  )
};

export default Favs;
