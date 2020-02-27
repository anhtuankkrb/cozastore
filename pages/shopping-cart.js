import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout";

import CartTable from "../components/cart/cartTable";
import CartTotals from "../components/cart/cartTotals";

const couponCode = ["12345", "23456"];

export default function shoppingCart() {
  const [cartTotals, setCartTotals] = useState(0);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState("wait");
  const checkCoupon = () => {
    for (let i = 0; i < couponCode.length; i++) {
      if (couponCode[i] == coupon) {
        setDiscount(true);
        break;
      } else {
        setDiscount(false);
      }
    }
  };

  return (
    <Layout title="Shoping cart">
      <div>
        {/* breadcrumb */}
        <div className="container">
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <Link href="/">
              <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
                Home
                <i
                  className="fa fa-angle-right m-l-9 m-r-10"
                  aria-hidden="true"
                />
              </a>
            </Link>
            <span className="stext-109 cl4">Shoping Cart</span>
          </div>
        </div>
        {/* Shoping Cart */}
        <form className="bg0 p-t-75 p-b-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <div className="m-l-25 m-r--38 m-lr-0-xl">
                  <div className="wrap-table-shopping-cart">
                    <CartTable setCartTotals={setCartTotals} />
                  </div>
                  <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                    <div className="flex-w flex-m m-r-20 m-tb-5">
                      <input
                        className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                        type="text"
                        name="coupon"
                        placeholder="Coupon Code"
                        value={coupon}
                        onChange={e => {
                          setCoupon(e.target.value);
                        }}
                      />
                      <div
                        className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5"
                        onClick={checkCoupon}
                      >
                        Apply coupon
                      </div>
                    </div>
                    <div
                      className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                      style={{
                        display: discount == "wait" ? "none" : "flex",
                        backgroundColor: !discount ? "#ff5353" : "#67e367"
                      }}
                    >
                      {discount && discount != "wait" ? "Correct" : "Incorrect"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <CartTotals cartTotals={cartTotals} discount={discount} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
