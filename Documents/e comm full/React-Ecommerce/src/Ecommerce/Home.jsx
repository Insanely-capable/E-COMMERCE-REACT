import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Main from "./Main.jsx";
import About from "./About.jsx";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ProductDetails from "./ProductDetails";
import Parent from "./Parent.jsx";
import "../index.css";
import { useEffect } from "react";

export const EcomContext = createContext();

function Home() {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  function addToCart(e, product) {
    setTemp([...temp, product]);
    console.log(product);
  }

  function handleLogin(user) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  function handleLogout() {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <>
     <EcomContext.Provider value={{ cart, user, setUser, setCart, addToCart ,handleLogout}}>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Parent />}>
            <Route index element={user ? <Main /> : <Login onLogin={handleLogin} />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />}>
            </Route>
            </Route>
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </EcomContext.Provider>
    </>
  );
}

export default Home;








