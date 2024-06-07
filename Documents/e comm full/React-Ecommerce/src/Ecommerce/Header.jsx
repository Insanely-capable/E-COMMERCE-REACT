// // Header.jsx
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { EcomContext } from "./Home";

// function Header() {
//   const { user, cart, handleLogout } = useContext(EcomContext);
//   console.log(user);

//   return (
//     <header>
//       <h2>Ecommerce</h2>
//       <ul>
//         <div>
//           {Object.keys(user).length > 0 ? (
//             <div>
//               <h2>Welcome, {user.name}!</h2>
//               <button onClick={handleLogout}>Logout</button>
//             </div>
//           ) : (
//             <h4>Welcome, Guest!</h4>
//           )}
//         </div>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/About">About</Link>
//         </li>
//         <li>
//           <Link to="/Blog">Blog</Link>
//         </li>
//         <li>
//           <Link to="/Contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/Login">Login</Link>
//         </li>
//         <li>
//           <Link to="/Register">Register</Link>
//         </li>
//         <li>
//           Cart ({cart.length})
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;





import { Link } from "react-router-dom";
import { useContext } from "react";
import { EcomContext } from "./Home";

function Header() {
  const { user, cart, handleLogout } = useContext(EcomContext);
  console.log(user);

  return (
    <header>
      <h2>Ecommerce</h2>
      <ul>
        <div>
          {Object.keys(user).length > 0 ? (
            <div>
              <h2>Welcome, {user.name}!</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <h4>Welcome, Guest!</h4>
          )}
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
        <li>
          Cart ({cart.length})
        </li>
      </ul>
    </header>
  );
}

export default Header;









