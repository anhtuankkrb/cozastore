import { CartContext } from "../layout";
import React, { useContext, useEffect } from "react";
import CartItem from "./cartItem";
export default function CartTable({ setCartTotals }) {
  let { products } = useContext(CartContext);

  const total = () => {
    let result = 0;
    products.forEach((product) => {
      result += product.amount * product.price;
    });
    return result;
  };

  useEffect(() => {
    setCartTotals(total());
  }, [products]);

  return (
    <table className="table-shopping-cart">
      <tbody>
        <tr className="table_head">
          <th className="column-1">Product</th>
          <th className="column-2" />
          <th className="column-3">Price</th>
          <th className="column-4">Quantity</th>
          <th className="column-5">Total</th>
        </tr>

        {products.map((product, i) => {
          return <CartItem product={product} key={i} />;
        })}
      </tbody>
    </table>
  );
}
