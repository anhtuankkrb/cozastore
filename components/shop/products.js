import React, { useState, useEffect } from "react";
import Modal from "./modal";
import Link from "next/link";
import { Collapse } from "reactstrap";

export default function Products({ title, data }) {
  const [cardsDefault, setCardsDefault] = useState(data);

  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    let efs = document.getElementsByClassName("ef");

    for (let i = 0; i < efs.length; i++) {
      efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
    }
  });

  const [modal, setModal] = useState(false);
  const showModal = (e, data) => {
    e.preventDefault();
    setModal(true);
    setDataForModal(data);
  };
  const hideModal = () => setModal(false);

  const [filter, setFilter] = useState(false);
  const toggleFilter = () => {
    setFilter(!filter);
    setSearch(false);
  };

  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);
    setFilter(false);
  };

  const categories = [
    "All Products",
    "Shirt",
    "Shoe",
    "Bag",
    "Accessories",
    "Watches"
  ];

  const onFilter = label => {
    setActive(label);
  };
  const [active, setActive] = useState("All Products");
  return (
    <>
      <section className="bg0 p-t-23 p-b-140">
        <div className="container">
          {title && (
            <div className="p-b-10">
              <h3 className="ltext-103 cl5">{title}</h3>
            </div>
          )}
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <div>
                {categories.map(f => (
                  <button
                    key={f}
                    onClick={() => {
                      if (active !== f) {
                        let efs = document.getElementsByClassName("ef");

                        for (let i = 0; i < efs.length; i++) {
                          efs[i].style =
                            "transform: scale(0);opacity: 0;transition: 0.5s;";
                        }
                        setTimeout(() => {
                          onFilter(f);
                        }, 500);
                      }
                    }}
                    className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                      f === active ? "how-active1" : ""
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-w flex-c-m m-tb-10">
              <div
                className={`flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter ${
                  filter ? "show-filter" : ""
                }`}
                onClick={toggleFilter}
              >
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Filter
              </div>
              <div
                className={`flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search ${
                  search ? "show-search" : ""
                }`}
                onClick={toggleSearch}
              >
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Search
              </div>
            </div>
            {/* Search product */}

            <div className="panel-search w-full p-t-10">
              <Collapse isOpen={search}>
                <div className="bor8 dis-flex p-l-15">
                  <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                    <i className="zmdi zmdi-search" />
                  </button>
                  <input
                    className="mtext-107 cl2 size-114 plh2 p-r-15"
                    type="text"
                    name="search-product"
                    placeholder="Search"
                  />
                </div>
              </Collapse>
            </div>

            {/* Filter */}

            <div className=" panel-filter w-full p-t-10">
              <Collapse isOpen={filter}>
                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                  <div className="filter-col1 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Sort By</div>
                    <ul>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Default
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Popularity
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Average rating
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a
                          href="#"
                          className="filter-link stext-106 trans-04 filter-link-active"
                        >
                          Newness
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Price: Low to High
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          Price: High to Low
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-col2 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Price</div>
                    <ul>
                      <li className="p-b-6">
                        <a
                          href="#"
                          className="filter-link stext-106 trans-04 filter-link-active"
                        >
                          All
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $0.00 - $50.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $50.00 - $100.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $100.00 - $150.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $150.00 - $200.00
                        </a>
                      </li>
                      <li className="p-b-6">
                        <a href="#" className="filter-link stext-106 trans-04">
                          $200.00+
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-col3 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Color</div>
                    <ul>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#222" }}
                        >
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Black
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#4272d7" }}
                        >
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a
                          href="#"
                          className="filter-link stext-106 trans-04 filter-link-active"
                        >
                          Blue
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#b3b3b3" }}
                        >
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Grey
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#00ad5f" }}
                        >
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Green
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#fa4251" }}
                        >
                          <i className="zmdi zmdi-circle" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          Red
                        </a>
                      </li>
                      <li className="p-b-6">
                        <span
                          className="fs-15 lh-12 m-r-6"
                          style={{ color: "#aaa" }}
                        >
                          <i className="zmdi zmdi-circle-o" />
                        </span>
                        <a href="#" className="filter-link stext-106 trans-04">
                          White
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="filter-col4 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Tags</div>
                    <div className="flex-w p-t-4 m-r--5">
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        Fashion
                      </a>
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        Lifestyle
                      </a>
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        Denim
                      </a>
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        Streetstyle
                      </a>
                      <a
                        href="#"
                        className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                      >
                        Crafts
                      </a>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="row isotope-grid">
            {cardsDefault &&
              cardsDefault.map(card => {
                if (
                  active === "All Products" ||
                  card.category.toLowerCase() === active.toLowerCase()
                ) {
                  return (
                    <div
                      key={card.id}
                      className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ef"
                    >
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                          <img src={card.images.coverImage} alt={card.name} />
                          <a
                            href="#"
                            className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                            onClick={e => showModal(e, card)}
                          >
                            Quick View
                          </a>
                        </div>
                        <div className="block2-txt flex-w flex-t p-t-14">
                          <div className="block2-txt-child1 flex-col-l ">
                            <Link
                              href="/shop/[id]"
                              as={"/shop/" + card.name.replace(/\s/g, "_")}
                            >
                              <a
                                href="product-detail.html"
                                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                              >
                                {card.name}
                              </a>
                            </Link>

                            <span className="stext-105 cl3">{`$ ${card.price.toLocaleString()}`}</span>
                          </div>
                          <div className="block2-txt-child2 flex-r p-t-3">
                            <a
                              href="#"
                              className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                              <img
                                className="icon-heart1 dis-block trans-04"
                                src="images/icons/icon-heart-01.png"
                                alt="ICON"
                              />
                              <img
                                className="icon-heart2 dis-block trans-04 ab-t-l"
                                src="images/icons/icon-heart-02.png"
                                alt="ICON"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>
      <Modal modalStatus={modal} hideModal={hideModal} data={dataForModal} />
    </>
  );
}