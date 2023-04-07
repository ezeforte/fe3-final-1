import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const context = useContext(ThemeContext);
  const theme = context.theme

  return (
    <div style={{background: theme.background, color: theme.font}}>
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
   
      <Link to="/" style={{ color: theme.font}}>     Home     </Link>
      <Link to="/contacto"style={{ color: theme.font}}>     Contact     </Link>
      <Link to="/favs"style={{ color: theme.font}}>     Favs    </Link>
      

      <button
       onClick={context.handleChangeTheme}
       > Change theme
       </button>
    </nav>
    </div>
  )
}

export default Navbar