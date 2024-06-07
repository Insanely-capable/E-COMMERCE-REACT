
import { useContext } from "react";
import { EcomContext } from "./Home";
function Header() {

  const {cart}=useContext(EcomContext);  

  return (
    <>
      <header>
        <h2>Ecommerce</h2>

        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
          <a href="/Login">Login</a>
          </li>
          <li>
          <a href="/Register">Register</a>
          </li>
          <li>
            Cart({cart.length})
          </li>
        </ul>
      </header>
    </>
  );
}
export default Header;
