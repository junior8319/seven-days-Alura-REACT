import { NavLink } from "react-router-dom";
import Home from "./Home";

function Menu() {
  return(
    <div>
      <div>
        <NavLink to={ Home }>
          <p>Logo</p>
        </NavLink>
      </div>
      <div>
        <p>Seções ficarão aqui</p>
      </div>
    </div>
  );
}

export default Menu;