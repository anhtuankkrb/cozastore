import Detail from "./detail";
import { useRouter } from "next/router";

export default function Modal({ modalStatus, hideModal, data }) {
  const path = useRouter().pathname;
  const level = path.split("").filter(item => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }
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
                  ? [data.images.coverImage, ...data.images.productsImage]
                  : ""
              }
              sizes={data.size}
              name={data.name}
              price={data.price}
              describe={data.describe}
            />
          </div>
        </div>
      </div>
    </>
  );
}
