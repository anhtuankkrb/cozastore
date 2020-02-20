import Layout from "../components/layout";
import Slide from "../components/index/slide";
import Banner from "../components/index/banner";
import Products from "../components/shop/products";
<<<<<<< HEAD
import getData from "../getData"

export default function Index() {
  console.log(getData)
=======
import db from "../firebase/fire";

export default function Index({ data }) {
>>>>>>> cd052c23d173fa7acc171ca08b133654cf28c00c
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
