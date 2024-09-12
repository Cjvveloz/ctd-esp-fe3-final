import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContextGlobal();
  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME"});
  };

  return (
    <div className= "navbar">
      <Link to= '/'><h4>Home</h4></Link>
      <Link to= '/contact/'><h4>Contacto</h4></Link>
      <Link to= '/favs'><h4>Favoritos</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleToggleTheme}>
        {state.theme ? "Dark" : "Light"}</button>
    </div>
  )
}

export default Navbar