import Link from "next/link";

import { useContext } from "react";

import { LikeContext } from "./layout";

export default function Like({ toggleLike, changeLikeStatus }) {
  let { productsLike } = useContext(LikeContext);

  return (
    <div
      className={`wrap-header-cart js-panel-cart ${
        toggleLike ? "show-header-cart" : ""
      }`}
    >
      <div className="s-full" onClick={changeLikeStatus} />
      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Products liked</span>
          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04"
            onClick={changeLikeStatus}
          >
            <i className="zmdi zmdi-close" />
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {productsLike.map((product) => (
              <li
                className="header-cart-item flex-w flex-t m-b-12"
                key={product.name}
              >
                <div className="header-cart-item-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <Link href="/shop/[id]" as={"/shop/" + product.slug}>
                    <a className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                      {product.name}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
