import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../layout";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function CartItem({ product }) {
  let { setCart } = useContext(CartContext);
  const [numProduct, setNumProduct] = useState(product.amount);
  const changeCard = (name, price, amount, image, slug, color, size) => {
    let productInfo = {
      price: price,
      amount: amount,
      image: image,
      slug: slug,
      color: color,
      size: size,
    };
    localStorage.setItem(name, JSON.stringify(productInfo));
    setCart();
  };

  const deleteItem = (item) => {
    localStorage.removeItem(item);
    setCart();
  };

  const augmentNumProduct = () => {
    setNumProduct(numProduct + 1);
  };
  const reduceNumProduct = () => {
    numProduct && setNumProduct(numProduct - 1);
  };

  useEffect(() => {
    changeCard(
      product.name,
      product.price,
      numProduct,
      product.image,
      product.slug,
      product.color,
      product.size
    );
  }, [numProduct]);

  //modal
  const [itemDelete, setItemDelete] = useState();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const okDelete = () => {
    deleteItem(itemDelete);
    toggle();
  };
  return (
    <>
      <tr className="table_row">
        <td className="column-1">
          <div className="how-itemcart1">
            <img src={product.image} alt={product.name} />
          </div>
        </td>
        <td className="column-2">
          {product.name}{" "}
          <div
            style={{ color: "#a2a2a2", fontSize: "12px" }}
          >{`Size: ${product.size}`}</div>
          <div
            style={{ color: "#a2a2a2", fontSize: "12px" }}
          >{`Color: ${product.color}`}</div>
        </td>
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
              onChange={(e) => {
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

        <td className="column-6">
          <div
            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
            style={{ color: "#a2a2a2" }}
            onClick={() => {
              // deleteItem(product.name);
              setItemDelete(product.name);
              toggle();
            }}
          >
            <i
              className="zmdi zmdi-delete"
              style={{
                fontSize: "20px",
                padding: "7px",
                cursor: "pointer",
                color: "",
              }}
            />
          </div>
        </td>
      </tr>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete product</ModalHeader>
        <ModalBody>{"Are you sure delete " + itemDelete + "?"}</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={okDelete}>
            Sure
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
