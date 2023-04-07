import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useNavigate } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const navigate = useNavigate();

  function openDetail(id) {
    navigate(`/details/${id}`);
  }

  const getProducts = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=>res.json())
            .then(json=>setProducts(json))

  };

  const getCategories = async () => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);


  return (
    <main className="" >
      <h2>Categorias</h2>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => navigate(`/products/category/${category}`)}
        >
          {category}
        </button>
      ))}
      <h1>Home</h1>
      <h2>todos los productos</h2>
      
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */
            products.map((product) => (
              <Card name={product.name} username={product.username} id={product.id}/>
              
            ))}
        </div>
      
    </main>
  )
}

export default Home