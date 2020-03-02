import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";

import { CartContext } from "./layout";

export default function Cart({ toggleCart, changeCartStatus }) {
  let { products } = useContext(CartContext);
  const total = () => {
    let result = 0;
    products.forEach(product => {
      result += product.amount * product.price;
    });
    return result;
  };

  const path = useRouter().pathname;
  const level = path.split("").filter(item => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  return (
    <div
      className={`wrap-header-cart js-panel-cart ${
        toggleCart ? "show-header-cart" : ""
      }`}
    >
      <div className="s-full" onClick={changeCartStatus} />
      <div className="header-cart flex-col-l p-l-65 p-r-25">
        <div className="header-cart-title flex-w flex-sb-m p-b-8">
          <span className="mtext-103 cl2">Your Cart</span>
          <div
            className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04"
            onClick={changeCartStatus}
          >
            <i className="zmdi zmdi-close" />
          </div>
        </div>
        <div className="header-cart-content flex-w js-pscroll">
          <ul className="header-cart-wrapitem w-full">
            {products.map(product => (
              <li
                className="header-cart-item flex-w flex-t m-b-12"
                key={product.name}
              >
                <div className="header-cart-item-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="header-cart-item-txt p-t-8">
                  <Link
                    href="/shop/[id]"
                    as={"/shop/" + product.name.replace(/\s/g, "_")}
                  >
                    <a
                      href="#"
                      className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                    >
                      {product.name}
                    </a>
                  </Link>

                  <span className="header-cart-item-info">{`${
                    product.amount
                  } x $${product.price.toLocaleString()}`}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <div className="header-cart-total w-full p-tb-40">
              {`Total: $${total()}`}
            </div>
            <div className="header-cart-buttons flex-w w-full">
              <Link href="/shopping-cart">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>
              </Link>
              <a
                href="shoping-cart.html"
                className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
              >
                Check Out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
