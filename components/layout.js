import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import Header from "./header";
import Cart from "./cart";
import Footer from "./footer";
import BackTop from "./backToTop";

export const CartContext = createContext();

export default function Layout({ children, title }) {
  const [toggleCart, setCartToggle] = useState(false);
  const changeCartStatus = () => setCartToggle(!toggleCart);

  const [products, setProducts] = useState([]);

  const setCart = () => {
    let arrProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      arrProducts.push({ name: key, ...JSON.parse(localStorage.getItem(key)) });
    }
    setProducts(arrProducts);
  };

  useEffect(() => {
    setCart();
  }, []);

  return (
    <>
      <Head>
        <title>{title || "404"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
      </Head>

      <Header changeCartStatus={changeCartStatus} />

      <CartContext.Provider value={{ products: products, setCart: setCart }}>
        <Cart toggleCart={toggleCart} changeCartStatus={changeCartStatus} />
        {children}
      </CartContext.Provider>
      <Footer />

      <BackTop />
    </>
  );
}
