import { useState, useEffect } from "react";

import Detail from "./detail";
import { useRouter } from "next/router";

export default function Modal({ modalStatus, hideModal, data }) {
  const path = useRouter().pathname;
  const level = path.split("").filter((item) => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }
  useEffect(() => {
    setNumProduct(1);
    setSelectSize({ value: null, label: "Choose an option" });
    setSelectColor({ value: null, label: "Choose an option" });
  }, [data]);
  const [numProduct, setNumProduct] = useState(1);
  const [selectSize, setSelectSize] = useState({
    value: null,
    label: "Choose an option",
  });
  const [selectColor, setSelectColor] = useState({
    value: null,
    label: "Choose an option",
  });
  return (
    <>
      <div
        className={`wrap-modal1 js-modal1 p-t-60 p-b-20 ${
          modalStatus ? "show-modal1" : ""
        }`}
      >
        <div className="overlay-modal1 js-hide-modal1" onClick={hideModal} />
        <div className="container">
          <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
            <button
              className="how-pos3 hov3 trans-04 js-hide-modal1"
              onClick={hideModal}
            >
              <img
                src={fixPathImg + "images/icons/icon-close.png"}
                alt="CLOSE"
              />
            </button>
            <Detail
              fixId={[3, 4]}
              images={
                data.images
                  ? data.images.productsImage
                    ? [data.images.coverImage, ...data.images.productsImage]
                    : [data.images.coverImage]
                  : ""
              }
              sizes={data.size}
              name={data.name}
              price={data.price}
              describe={data.describe}
              slug={data.slug}
              colors={data.color}
              numProduct={numProduct}
              setNumProduct={setNumProduct}
              selectSize={selectSize}
              setSelectSize={setSelectSize}
              selectColor={selectColor}
              setSelectColor={setSelectColor}
            />
          </div>
        </div>
      </div>
    </>
  );
}
