import Header from "./header";
import Cart from "./cart";
import Footer from "./footer";
import BackToTop from "./backToTop";
import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="images/icons/favicon.png" />
      </Head>
      <Header />
      <Cart />
      {props.children}
      <Footer />
      <BackToTop />
    </>
  );
}
