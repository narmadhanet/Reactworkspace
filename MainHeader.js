import { Link, NavLink } from "react-router-dom";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <NavLink to="/Welcome">Welcome</NavLink> |||
          <NavLink to="/Product">Product </NavLink>
          {/*    <Link to="/Welcome">Welcome</Link> |||
          <Link to="/Product">Product</Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
