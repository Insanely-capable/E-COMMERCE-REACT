import {useState, useEffect, createContext, useContext } from "react";
import { EcomContext } from "./Home";

function Main() {
  //const { cart, addToCart } = useContext(ecomContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
      });
  }, []);

  return (
    <div id="main" key={999}>
    {products.map((product) => (
      <div key={product.id}>
        <a href={`/ProductDetails/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
        </a>
        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    ))}
  </div>
  );
}

export default Main;















// import { useState, useEffect, useContext } from "react";
// import { EcomContext } from "./Home";

// function Main() {
//   const { cart, addToCart } = useContext(EcomContext);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((result) => setProducts(result));
//   }, []);

//   return (
//     <div id="main" key={999}>
//       {products.map((product) => (
//         <div key={product.id}>
//           <a href={`/ProductDetails/${product.id}`}>
//             <img src={product.image} alt={product.title} />
//             <h4>{product.title}</h4>
//           </a>
//           <button onClick={() => addToCart(product)}>
//             Add To Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Main;