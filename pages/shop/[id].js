import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Slider from "react-slick";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

import db from "../../firebase/fire";
import Layout from "../../components/layout";
import Detail from "../../components/shop/detail";

import Modal from "../../components/shop/modal";

function NextArrow(props) {
  const { onClick } = props;

  return (
    <button
      className="arrow-slick2 next-slick2 slick-arrow"
      aria-disabled="false"
      onClick={onClick}
    >
      <i className="fa fa-angle-right" aria-hidden="true" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="arrow-slick2 prev-slick2 slick-arrow slick-disabled"
      aria-disabled="true"
      onClick={onClick}
    >
      <i className="fa fa-angle-left" aria-hidden="true" />
    </button>
  );
}

export default function Product({ data, relatedProducts }) {
  const [activeTab, setActiveTab] = useState("1");

  const path = useRouter().pathname;
  const level = path.split("").filter(item => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [dataForModal, setDataForModal] = useState({});
  const [modal, setModal] = useState(false);
  const showModal = (e, data) => {
    setModal(true);
    setDataForModal(data);
    e.preventDefault();
  };
  const hideModal = () => setModal(false);

  return (
    <Layout title={data.name}>
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
          <Link href="/shop">
            <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
              Shop
              <i
                className="fa fa-angle-right m-l-9 m-r-10"
                aria-hidden="true"
              />
            </a>
          </Link>
          <span className="stext-109 cl4">{data.name}</span>
        </div>
      </div>
      {/* Product Detail */}
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <Detail
            images={[data.images.coverImage, ...data.images.productsImage]}
            sizes={data.size}
            name={data.name}
            price={data.price}
            describe={data.describe}
          />
          <div className="bor10 m-t-50 p-t-43 p-b-40">
            {/* Tab01 */}
            <div className="tab01">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <span className="pointer"> Description</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <span className="pointer"> Additional information</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <span className="pointer"> Reviews (1)</span>
                  </NavLink>
                </NavItem>
              </Nav>

              {/* Tab panes */}
              <TabContent activeTab={activeTab}>
                <div className="tab-content p-t-43">
                  {/* - */}
                  <TabPane tabId="1">
                    <div className="tab-pane " id="description" role="tabpanel">
                      <div className="how-pos2 p-lr-15-md">
                        <p className="stext-102 cl6">{data.describe}</p>
                      </div>
                    </div>
                  </TabPane>

                  {/* - */}
                  <TabPane tabId="2">
                    <div className="tab-pane " id="information" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                          <ul className="p-lr-28 p-lr-15-sm">
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">
                                Weight
                              </span>
                              <span className="stext-102 cl6 size-206">
                                {`${data.weight.toLocaleString()} kg`}
                              </span>
                            </li>
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">
                                Dimensions
                              </span>
                              <span className="stext-102 cl6 size-206">
                                {`${data.dimensions.height.toLocaleString()} x ${data.dimensions.length.toLocaleString()} x ${data.dimensions.width.toLocaleString()} cm`}
                              </span>
                            </li>
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">
                                Materials
                              </span>
                              <span className="stext-102 cl6 size-206">
                                {data.meterial[0]}
                              </span>
                            </li>
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">
                                Color
                              </span>
                              <span className="stext-102 cl6 size-206">
                                Black, Blue, Grey, Green, Red, White
                              </span>
                            </li>
                            <li className="flex-w flex-t p-b-7">
                              <span className="stext-102 cl3 size-205">
                                Size
                              </span>
                              <span className="stext-102 cl6 size-206">
                                {data.size.reduce(
                                  (result, value) => result + ", " + value
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  {/* - */}

                  <TabPane tabId="3">
                    <div className="tab-pane " id="reviews" role="tabpanel">
                      <div className="row">
                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                          <div className="p-b-30 m-lr-15-sm">
                            {/* Review */}
                            <div className="flex-w flex-t p-b-68">
                              <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                <img
                                  src={fixPathImg + "images/avatar-01.jpg"}
                                  alt="AVATAR"
                                />
                              </div>
                              <div className="size-207">
                                <div className="flex-w flex-sb-m p-b-17">
                                  <span className="mtext-107 cl2 p-r-20">
                                    Ariana Grande
                                  </span>
                                  <span className="fs-18 cl11">
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star" />
                                    <i className="zmdi zmdi-star-half" />
                                  </span>
                                </div>
                                <p className="stext-102 cl6">
                                  Quod autem in homine praestantissimum atque
                                  optimum est, id deseruit. Apud ceteros autem
                                  philosophos
                                </p>
                              </div>
                            </div>
                            {/* Add review */}
                            <form className="w-full">
                              <h5 className="mtext-108 cl2 p-b-7">
                                Add a review
                              </h5>
                              <p className="stext-102 cl6">
                                Your email address will not be published.
                                Required fields are marked *
                              </p>
                              <div className="flex-w flex-m p-t-50 p-b-23">
                                <span className="stext-102 cl3 m-r-16">
                                  Your Rating
                                </span>
                                <span className="wrap-rating fs-18 cl11 pointer">
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <i className="item-rating pointer zmdi zmdi-star-outline" />
                                  <input
                                    className="dis-none"
                                    type="number"
                                    name="rating"
                                  />
                                </span>
                              </div>
                              <div className="row p-b-25">
                                <div className="col-12 p-b-5">
                                  <label
                                    className="stext-102 cl3"
                                    htmlFor="review"
                                  >
                                    Your review
                                  </label>
                                  <textarea
                                    className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10"
                                    id="review"
                                    name="review"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-sm-6 p-b-5">
                                  <label
                                    className="stext-102 cl3"
                                    htmlFor="name"
                                  >
                                    Name
                                  </label>
                                  <input
                                    className="size-111 bor8 stext-102 cl2 p-lr-20"
                                    id="name"
                                    type="text"
                                    name="name"
                                  />
                                </div>
                                <div className="col-sm-6 p-b-5">
                                  <label
                                    className="stext-102 cl3"
                                    htmlFor="email"
                                  >
                                    Email
                                  </label>
                                  <input
                                    className="size-111 bor8 stext-102 cl2 p-lr-20"
                                    id="email"
                                    type="text"
                                    name="email"
                                  />
                                </div>
                              </div>
                              <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </div>
              </TabContent>
            </div>
          </div>
        </div>
        <div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
          <span className="stext-107 cl6 p-lr-25">{`Categories: ${data.category[0].toUpperCase() +
            data.category.slice(1)}`}</span>
        </div>
      </section>
      {/* Related Products */}
      <section className="sec-relate-product bg0 p-t-45 p-b-105">
        <div className="container">
          <div className="p-b-45">
            <h3 className="ltext-106 cl5 txt-center">Related Products</h3>
          </div>
          {/* Slide2 */}
          <div className="wrap-slick2">
            <Slider {...settings}>
              {relatedProducts &&
                relatedProducts.map((product, index) => {
                  return (
                    <div
                      className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15"
                      key={index}
                    >
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img
                            src={product.images.coverImage}
                            alt={product.name}
                          />
                          <a
                            href="#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                            onClick={e => showModal(e, product)}
                          >
                            Quick View
                          </a>
                        </div>
                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <Link
                              href="[id]"
                              as={product.name.replace(/\s/g, "_")}
                            >
                              <a
                                href="product-detail.html"
                                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                              >
                                {product.name}
                              </a>
                            </Link>
                            <span className="stext-105 cl3">{`$ ${product.price.toLocaleString()}`}</span>
                          </div>
                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src={
                                  fixPathImg + "images/icons/icon-heart-01.png"
                                }
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src={
                                  fixPathImg + "images/icons/icon-heart-02.png"
                                }
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
      <Modal modalStatus={modal} hideModal={hideModal} data={dataForModal} />
    </Layout>
  );
}

Product.getInitialProps = async function(context) {
  const { id } = context.query;

  let result = await db
    .where("name", "==", id.replace(/_/g, " "))
    .get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });

  let products = await db
    .limit(8)

    .get()
    .then(snapshot => {
      let arrData = [];
      snapshot.forEach(doc => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })
    .catch(() => {
      return [];
    });

  return { data: result[0], relatedProducts: products };
};
