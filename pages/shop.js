import Layout from "../components/layout";
import Products from "../components/shop/products";
import { db } from "../firebase/fire";

export default function Shop({ data, category }) {
  return (
    <Layout title="Shop">
      <Products data={data} category={category} />
    </Layout>
  );
}
Shop.getInitialProps = async function (context) {
  if (context.query.category) {
    let result = await db
      .where("category", "==", context.query.category.toLowerCase())
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        return arrData;
      })

      .catch(() => {
        return [];
      });

    return { data: result, category: context.query.category };
  }

  let result = await db
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });

  return { data: result };
};
