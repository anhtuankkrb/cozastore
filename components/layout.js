import React, { useState, useEffect, createContext } from "react";
import Head from "next/head";
import Header from "./header";
import Cart from "./cart";
import Footer from "./footer";
import BackTop from "./backToTop";

import Like from "./like";

export const CartContext = createContext();

export const LikeContext = createContext();

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
    setLike();
  }, []);

  const [toggleLike, setLikeToggle] = useState(false);
  const changeLikeStatus = () => setLikeToggle(!toggleLike);

  const [productsLike, setProductsLike] = useState([]);
  const setLike = () => {
    let arrProducts = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      arrProducts.push({
        name: key,
        ...JSON.parse(sessionStorage.getItem(key)),
      });
    }
    setProductsLike(arrProducts);
  };

  return (
    <>
      <Head>
        <title>{title || "404"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
      </Head>

      <Header
        changeCartStatus={changeCartStatus}
        products={products}
        changeLikeStatus={changeLikeStatus}
        productsLike={productsLike}
      />
      <LikeContext.Provider
        value={{ productsLike: productsLike, setLike: setLike }}
      >
        <CartContext.Provider value={{ products: products, setCart: setCart }}>
          <Cart toggleCart={toggleCart} changeCartStatus={changeCartStatus} />
          {children}
          <Like toggleLike={toggleLike} changeLikeStatus={changeLikeStatus} />
        </CartContext.Provider>
      </LikeContext.Provider>

      <Footer />

      <BackTop />
    </>
  );
}
