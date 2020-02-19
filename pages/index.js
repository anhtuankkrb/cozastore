import Layout from "../components/layout";
import Slide from "../components/index/slide";
import Banner from "../components/index/banner";
import Products from "../components/shop/products";
import db from "../firebase/fire";

export default function Index({ data }) {
  return (
    <Layout title="Home">
      <Slide />
      <Banner />
      <Products title="Product Overview" data={data} />
    </Layout>
  );
}

Index.getInitialProps = async function() {
  let result = await db
    .once("value")
    .then(function(snapshot) {
      return snapshot.val();
    })
    .catch(() => {
      return [];
    });

  return { data: result };
};
