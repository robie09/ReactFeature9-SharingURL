// Styling
import { ThemeButton } from "../styles";
import { Link } from "react-router-dom";
import logo from "./darklogo.png";
import { Logo, NavProduct } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" exact to="/">
        <img src={logo} alt="logo" width="250" height="100" />
      </Logo>
      <div className="navbar-nav ml-auto">
        <Link to="/">Home</Link>

        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
