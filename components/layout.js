import Header from "./header";
import Cart from "./cart";
import Footer from "./footer";
import BackToTop from "./backToTop";

export default function Layout(props) {
  return (
    <>
      <Header />
      <Cart />
      {props.children}
      <Footer />
      <BackToTop />
    </>
  );
}
