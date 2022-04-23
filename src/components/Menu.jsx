import { NavLink } from "react-router-dom";

function Menu() {
  return(
    <div>
      <div>
        <NavLink to='/'>Logo</NavLink>
      </div>
      <div>
        <NavLink to='/como-fazer'>Como fazer / </NavLink>
        <NavLink to='/ofertas'>Ofertas / </NavLink>
        <NavLink to='/depoimentos'>Depoimentos / </NavLink>
        <NavLink to='/videos'>Videos / </NavLink>
        <NavLink to='/carrinho'>Carrinho</NavLink>
      </div>
    </div>
  );
}

export default Menu;