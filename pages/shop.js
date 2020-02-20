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
    .get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });

  return { data: result };
};
