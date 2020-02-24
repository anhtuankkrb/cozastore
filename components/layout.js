import { useState } from "react";

import Header from "./header";
import Cart from "./cart";
import Footer from "./footer";
import BackTop from "./backToTop";

import Head from "next/head";

export default function Layout({ children, title }) {
  const [toggleCart, setCartToggle] = useState(false);
  const changeCartStatus = () => setCartToggle(!toggleCart);

  return (
    <>
      <Head>
        <title>{title || "404"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
      </Head>

      <Header changeCartStatus={changeCartStatus} />
      <Cart toggleCart={toggleCart} changeCartStatus={changeCartStatus} />
      {children}
      <Footer />

      <BackTop />
    </>
  );
}
