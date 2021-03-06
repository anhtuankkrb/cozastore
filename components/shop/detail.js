import React, { useState, useContext } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot,
} from "pure-react-carousel";
import Select from "react-select";

import Lightbox from "react-image-lightbox";

import { CartContext } from "../layout";
import { Popover, PopoverBody, Modal, ModalBody } from "reactstrap";

export default function Detail(props) {
  const augmentNumProduct = () => {
    props.setNumProduct(props.numProduct + 1);
  };
  const reduceNumProduct = () => {
    props.numProduct && props.setNumProduct(props.numProduct - 1);
  };
  //select

  const size = props.sizes
    ? props.sizes.map((size) => {
        return { value: size, label: `Size ${size}` };
      })
    : [];

  const color = props.colors
    ? props.colors.map((color) => {
        return { value: color, label: color };
      })
    : [];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  let { setCart } = useContext(CartContext);

  const [pc, setpc] = useState();
  const [pt, setpt] = useState();

  const addToCard = (name, price, amount, image, slug) => {
    if (props.selectSize.value && props.selectColor.value) {
      let productInfo = {
        price: price,
        amount: amount,
        image: image,
        slug: slug,
        color: props.selectColor.value,
        size: props.selectSize.value,
      };
      setpt("Added to cart");
      setpc("PopoverBody");
      localStorage.setItem(name, JSON.stringify(productInfo));
      setCart();
    } else {
      setpc("PopoverBodyEror");
      setpt("Pleases! Choose color and size");
    }
  };
  //
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => {
    setPopoverOpen(true);
    setTimeout(() => setPopoverOpen(false), 2000);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(true);
    setTimeout(() => setModal(false), 2000);
  };

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={props.images[photoIndex]}
          nextSrc={props.images[(photoIndex + 1) % props.images.length]}
          prevSrc={
            props.images[
              (photoIndex + props.images.length - 1) % props.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + props.images.length - 1) % props.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % props.images.length)
          }
        />
      )}
      <div className="row">
        <div className="col-md-6 col-lg-7 p-b-30">
          <div className="p-l-25 p-r-30 p-lr-0-lg">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={props.images ? props.images.length : 1}
              infinite={true}
            >
              <div className="wrap-slick3 flex-sb flex-w">
                <div className="wrap-slick3-dots">
                  <ul className="slick3-dots" role="tablist">
                    {props.images &&
                      props.images.map((image, index) => {
                        return (
                          <Dot slide={index} key={index}>
                            <li role="presentation">
                              <img src={image} />
                              <div className="slick3-dot-overlay" />
                            </li>
                          </Dot>
                        );
                      })}
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
                    {props.images &&
                      props.images.map((image, index) => {
                        return (
                          <Slide index={index} key={index}>
                            <div className="item-slick3">
                              <div className="wrap-pic-w pos-relative">
                                <Image
                                  src={image}
                                  alt={`${props.name}-${index}`}
                                />
                                <a
                                  className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                                  href="#"
                                  onClick={(e) => {
                                    setIsOpen(true);
                                    e.preventDefault();
                                    setPhotoIndex(index);
                                  }}
                                >
                                  <i className="fa fa-expand" />
                                </a>
                              </div>
                            </div>
                          </Slide>
                        );
                      })}
                  </Slider>
                </div>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 p-b-30">
          <div className="p-r-50 p-t-5 p-lr-0-lg">
            <h4 className="mtext-105 cl2 js-name-detail p-b-14">
              {props.name ? props.name : ""}
            </h4>
            <span className="mtext-106 cl2">{`$ ${
              props.price ? props.price.toLocaleString() : ""
            }`}</span>
            <p className="stext-102 cl3 p-t-23">
              {props.describe ? props.describe : ""}
            </p>
            {/*  */}
            <div className="p-t-33">
              <div className="flex-w flex-r-m p-b-10">
                <div className="size-203 flex-c-m respon6">Size</div>
                <div className="size-204 respon6-next">
                  <div className="rs1-select2 bg0">
                    <Select
                      instanceId={
                        props.fixId
                          ? `Reac-select-${props.fixId[0]}`
                          : "Reac-select-1"
                      }
                      options={size}
                      value={props.selectSize}
                      onChange={(s) => {
                        props.setSelectSize(s);
                      }}
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
                      instanceId={
                        props.fixId
                          ? `Reac-select-${props.fixId[1]}`
                          : "Reac-select-2"
                      }
                      options={color}
                      value={props.selectColor}
                      onChange={(s) => {
                        props.setSelectColor(s);
                      }}
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
                      value={props.numProduct}
                      onChange={(e) => {
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
                  <button
                    id={props.page ? null : "Popover1"}
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail"
                    onClick={() => {
                      if (props.page) {
                        toggleModal();
                      }
                      addToCard(
                        props.name,
                        props.price,
                        props.numProduct,
                        props.images[0],
                        props.slug
                      );
                    }}
                  >
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
      <Popover
        placement="top"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody className={pc}>{pt}</PopoverBody>
      </Popover>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody
          style={
            pt == "Pleases! Choose color and size"
              ? { textAlign: "center", color: "red" }
              : { textAlign: "center", color: "green" }
          }
        >
          {pt}
        </ModalBody>
      </Modal>
    </>
  );
}
