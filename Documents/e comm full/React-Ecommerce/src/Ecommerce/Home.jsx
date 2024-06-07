
import React, { createContext, useState, useEffect } from "react";
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

export const EcomContext = createContext();

function Home() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [temp, setTemp] = useState([]);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  function addToCart(product) {
    setTemp([...temp, product]);
    console.log(product);
  }

  function handleLogin(user) {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <EcomContext.Provider
      value={{ cart, user, setUser, setCart, addToCart, handleLogout }}
    >
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route
              index
              element={user ? <Main /> : <Login onLogin={handleLogin} />}
            />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </EcomContext.Provider>
  );
}

export default Home;
