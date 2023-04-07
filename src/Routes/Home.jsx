import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [users, setUsers] = useState([]);
  


  const getUsers = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>res.json())
            .then(json=>setUsers(json))

  };

  

  useEffect(() => {
    getUsers();
    
  }, []);


  return (
    <main className="" >
      
     
      <h1>Home</h1>
      
      
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */
            users.map((user) => (
              <Card name={user.name} username={user.username} id={user.id}/>
              
            ))}
        </div>
      
    </main>
  )
}

export default Home