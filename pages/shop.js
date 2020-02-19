import Layout from "../components/layout";
import Products from "../components/shop/products";
import db from "../firebase/fire";

export default function Shop({ data }) {
  return (
    <Layout title="Shop">
      <Products data={data} />
    </Layout>
  );
}
Shop.getInitialProps = async function() {
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
