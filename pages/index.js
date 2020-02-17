import Layout from "../components/layout";
import Slide from "../components/index/slide";
import Banner from "../components/index/banner";
import Products from "../components/shop/products";

export default function Index() {
  return (
    <Layout title="Home">
      <Slide />
      <Banner />
      <Products title="Product Overview" />
    </Layout>
  );
}
