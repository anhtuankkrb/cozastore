import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "../../firebase/fire";

export default function SideMenu({ category }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    db.limit(3)
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        setProducts(arrData);
      })

      .catch(() => {});
  }, []);
  const categories = [
    "Fashion",
    "Beauty",
    "Street Style",
    "Life Style",
    "DIY &amp; Crafts",
  ];
  const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];
  return (
    <div className="side-menu">
      <div className="bor17 of-hidden pos-relative">
        <input
          className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
          type="text"
          name="search"
          placeholder="Search"
        />
        <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
          <i className="zmdi zmdi-search" />
        </button>
      </div>
      <div className="p-t-55">
        <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
        <ul>
          {categories.map((cate) => (
            <li className="bor18" key={cate}>
              <Link href={`/blog?category=${cate.replace(/&/g, "@")}`}>
                <a
                  href="#"
                  className={
                    "dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4" +
                    (category == cate ? " active-category" : "")
                  }
                >
                  {cate}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-t-65">
        <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
        <ul>
          {products &&
            products.map((product) => (
              <li className="flex-w flex-t p-b-30" key={product.id}>
                <Link href="/shop/[id]" as={"/shop/" + product.slug}>
                  <a
                    href="#"
                    className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                  >
                    <img
                      src={product.images.coverImage}
                      alt={product.name}
                      style={{ width: "100%" }}
                    />
                  </a>
                </Link>
                <div className="size-215 flex-col-t p-t-8">
                  <Link href="/shop/[id]" as={"/shop/" + product.slug}>
                    <a href="#" className="stext-116 cl8 hov-cl1 trans-04">
                      {product.name}
                    </a>
                  </Link>
                  <span className="stext-116 cl6 p-t-20">
                    {"$ " + product.price}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="p-t-50">
        <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
        <div className="flex-w m-r--5">
          {tags.map((tag) => (
            <Link href={`/blog?tag=${tag}`}>
              <a
                href="#"
                className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
              >
                {tag}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
