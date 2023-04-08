import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContext } from 'react'
import ThemeContext from '../Components/utils/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  
    
  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
    <main className="" >
      
     
      <h1>Home</h1>
      
      
        <div className='card-grid' style={{background: theme.background, color: theme.font}}>
          {/* Aqui deberias renderizar las cards */
            context.users.map((user) => (
              <Card name={user.name} username={user.username} id={user.id}/>
              
            ))}
        </div>
      
    </main>
    </div>
  )
}

export default Home