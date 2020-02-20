import Layout from "../components/layout";
import Slide from "../components/index/slide";
import Banner from "../components/index/banner";
import Products from "../components/shop/products";
import getData from "../getData"

export default function Index() {
  console.log(getData)
  return (
    <Layout title="Home">
      <Slide />
      <Banner />
      <Products title="Product Overview" />
    </Layout>
  );
}
