import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Main from './Main.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ProductDetails from './ProductDetails';
import Parent from './Parent.jsx';
import '../index.css';

// import { EcomContext } from './Home';
export const EcomContext=createContext();

function Home() {
  // const { user, setUser } = useContext(EcomContext);

  const [cart, setCart] = useState([]);
  const[user,setUser]=useState({});

  const [temp, setTemp] = useState([]);

  function addToCart(e, product) {
    setTemp([...temp, product]);
    console.log(product);
  }

  return (
    <>
      <div>
        <h1>User Authentication</h1>
        {user ? (
          <div>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={() => setUser(null)}>Logout</button>
            <Main />
          </div>
        ) : (
          <div>
            <Login />
            <Register />
          </div>
        )}
      </div>
      <EcomContext.Provider
        value={{
          cart,
          setUser,
          setCart,
          addToCart,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Parent />}>
              <Route index element={<Main />} />
              <Route
                path="/ProductDetails/:id"
                element={<ProductDetails />}
              ></Route>
            </Route>
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </EcomContext.Provider>
    </>
  );
}

export default Home;
