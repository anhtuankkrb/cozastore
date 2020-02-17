import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot
} from "pure-react-carousel";

import React, { useState } from "react";

import Lightbox from "react-image-lightbox";
import Select from "react-select";
const size = [
  { value: "S", label: "Size S" },
  { value: "M", label: "Size M" },
  { value: "L", label: "Size L" },
  { value: "XL", label: "Size XL" }
];
const color = [
  { value: "Red", label: "Red" },
  { value: "Blue", label: "Blue" },
  { value: "White", label: "White" },
  { value: "Grey", label: "Grey" }
];

const images = [
  "images/product-detail-01.jpg",
  "images/product-detail-02.jpg",
  "images/product-detail-03.jpg"
];

export default function Modal({ modalStatus, hideModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [numProduct, setNumProduct] = useState(1);

  const augmentNumProduct = () => {
    setNumProduct(numProduct + 1);
  };
  const reduceNumProduct = () => {
    numProduct && setNumProduct(numProduct - 1);
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

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
              <img src="images/icons/icon-close.png" alt="CLOSE" />
            </button>
            <div className="row">
              <div className="col-md-6 col-lg-7 p-b-30">
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                  <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={125}
                    totalSlides={3}
                    infinite={true}
                  >
                    <div className="wrap-slick3 flex-sb flex-w">
                      <div className="wrap-slick3-dots">
                        <ul className="slick3-dots" role="tablist">
                          <Dot slide={0}>
                            <li role="presentation">
                              <img src=" images/product-detail-01.jpg " />
                              <div className="slick3-dot-overlay" />
                            </li>
                          </Dot>
                          <Dot slide={1}>
                            <li role="presentation">
                              <img src=" images/product-detail-02.jpg " />
                              <div className="slick3-dot-overlay" />
                            </li>
                          </Dot>
                          <Dot slide={2}>
                            <li role="presentation">
                              <img src=" images/product-detail-03.jpg " />
                              <div className="slick3-dot-overlay" />
                            </li>
                          </Dot>
                        </ul>
                      </div>
                      <div className="wrap-slick3-arrows flex-sb-m flex-w">
                        <ButtonNext className="arrow-slick3 next-slick3">
                          <i className="fa fa-angle-right" aria-hidden="true" />
                        </ButtonNext>

                        <ButtonBack className="arrow-slick3 prev-slick3">
                          <i className="fa fa-angle-left" aria-hidden="true" />
                        </ButtonBack>
                      </div>
                      <div className="slick3 gallery-lb">
                        <Slider>
                          <Slide index={0}>
                            <div
                              className="item-slick3"
                              data-thumb="images/product-detail-01.jpg"
                            >
                              <div className="wrap-pic-w pos-relative">
                                <Image
                                  src="images/product-detail-01.jpg"
                                  alt="IMG-PRODUCT"
                                />
                                <a
                                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                  href="#"
                                  onClick={e => {
                                    setIsOpen(true);
                                    e.preventDefault();
                                    setPhotoIndex(0);
                                  }}
                                >
                                  <i className="fa fa-expand" />
                                </a>
                              </div>
                            </div>
                          </Slide>

                          <Slide index={1}>
                            <div
                              className="item-slick3"
                              data-thumb="images/product-detail-02.jpg"
                            >
                              <div className="wrap-pic-w pos-relative">
                                <Image
                                  src="images/product-detail-02.jpg"
                                  alt="IMG-PRODUCT"
                                />
                                <a
                                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                  href="#"
                                  onClick={e => {
                                    setIsOpen(true);
                                    e.preventDefault();
                                    setPhotoIndex(1);
                                  }}
                                >
                                  <i className="fa fa-expand" />
                                </a>
                              </div>
                            </div>
                          </Slide>

                          <Slide index={2}>
                            <div
                              className="item-slick3"
                              data-thumb="images/product-detail-03.jpg"
                            >
                              <div className="wrap-pic-w pos-relative">
                                <Image
                                  src="images/product-detail-03.jpg"
                                  alt="IMG-PRODUCT"
                                />
                                <a
                                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                  href="#"
                                  onClick={e => {
                                    setIsOpen(true);
                                    e.preventDefault();
                                    setPhotoIndex(2);
                                  }}
                                >
                                  <i className="fa fa-expand" />
                                </a>
                              </div>
                            </div>
                          </Slide>
                        </Slider>
                      </div>
                    </div>
                  </CarouselProvider>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 p-b-30">
                <div className="p-r-50 p-t-5 p-lr-0-lg">
                  <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                    Lightweight Jacket
                  </h4>
                  <span className="mtext-106 cl2">$58.79</span>
                  <p className="stext-102 cl3 p-t-23">
                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                    ligula. Mauris consequat ornare feugiat.
                  </p>
                  {/*  */}
                  <div className="p-t-33">
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Size</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bg0">
                          <Select
                            instanceId="Reac-select-1"
                            options={size}
                            placeholder="Choose an option"
                          />
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-203 flex-c-m respon6">Color</div>
                      <div className="size-204 respon6-next">
                        <div className="rs1-select2 bg0">
                          <Select
                            instanceId="Reac-select-2"
                            options={color}
                            placeholder="Choose an option"
                          />
                          <div className="dropDownSelect2" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-w flex-r-m p-b-10">
                      <div className="size-204 flex-w flex-m respon6-next">
                        <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                          <div
                            className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                            onClick={reduceNumProduct}
                          >
                            <i className="fs-16 zmdi zmdi-minus" />
                          </div>
                          <input
                            className="mtext-104 cl3 txt-center num-product"
                            type="number"
                            name="num-product"
                            value={numProduct}
                            onChange={e => {
                              setNumProduct(+e.target.value);
                            }}
                          />
                          {/* <div className="mtext-104 cl3 txt-center num-product center-number">
                            {numProduct}
                          </div> */}

                          <div
                            className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                            onClick={augmentNumProduct}
                          >
                            <i className="fs-16 zmdi zmdi-plus" />
                          </div>
                        </div>
                        <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                    <div className="flex-m bor9 p-r-10 m-r-11">
                      <a
                        href="#"
                        className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
                        data-tooltip="Add to Wishlist"
                      >
                        <i className="zmdi zmdi-favorite" />
                      </a>
                    </div>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Twitter"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                    <a
                      href="#"
                      className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
                      data-tooltip="Google Plus"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
