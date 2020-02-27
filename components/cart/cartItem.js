import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../layout";

export default function CartItem({ product }) {
  let { setCart } = useContext(CartContext);
  const [numProduct, setNumProduct] = useState(product.amount);
  const changeCard = (name, price, amount, image) => {
    let productInfo = {
      price: price,
      amount: amount,
      image: image
    };
    localStorage.setItem(name, JSON.stringify(productInfo));
    setCart();
  };

  const augmentNumProduct = () => {
    setNumProduct(numProduct + 1);
  };
  const reduceNumProduct = () => {
    numProduct && setNumProduct(numProduct - 1);
  };

  useEffect(() => {
    changeCard(product.name, product.price, numProduct, product.image);
  }, [numProduct]);

  return (
    <>
      <tr className="table_row">
        <td className="column-1">
          <div className="how-itemcart1">
            <img src={product.image} alt={product.name} />
          </div>
        </td>
        <td className="column-2">{product.name}</td>
        <td className="column-3">{`$ ${product.price}`}</td>
        <td className="column-4">
          <div className="wrap-num-product flex-w m-l-auto m-r-0">
            <div
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
              onClick={reduceNumProduct}
            >
              <i className="fs-16 zmdi zmdi-minus" />
            </div>
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="number"
              name="num-product2"
              value={numProduct}
              onChange={e => {
                setNumProduct(+e.target.value);
              }}
            />
            <div
              className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
              onClick={augmentNumProduct}
            >
              <i className="fs-16 zmdi zmdi-plus" />
            </div>
          </div>
        </td>
        <td className="column-5">{`$ ${product.price * numProduct}`}</td>
      </tr>
    </>
  );
}
