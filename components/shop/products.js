import React, { useState, useEffect, useContext } from "react";
import Modal from "./modal";
import Link from "next/link";
import { Collapse } from "reactstrap";

import { db } from "../../firebase/fire";

import { LikeContext } from "../layout";

export default function Products({ title, data, category }) {
  //like
  let { setLike } = useContext(LikeContext);

  const likeProduct = (name, slug, image) => {
    let productInfo = {
      slug: slug,
      image: image,
    };
    sessionStorage.setItem(name, JSON.stringify(productInfo));
    setLike();
    activeLike();
  };

  const [arrLike, setArrLike] = useState([]);
  useEffect(() => {
    activeLike();
  }, []);

  const activeLike = () => {
    let arrProducts = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      let key = sessionStorage.key(i);
      arrProducts.push(key);
      setArrLike(arrProducts);
    }
  };

  const [cardsDefault, setCardsDefault] = useState(data);

  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    let efs = document.getElementsByClassName("ef");

    for (let i = 0; i < efs.length; i++) {
      efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
    }
  }, []);

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
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Accessories",
  ];
  const [active, setActive] = useState(category ? category : "All Products");
  const onFilter = (label) => {
    setActive(label);
    if (label == "All Products") {
      db.limit(8)
        .get()
        .then((snapshot) => {
          let arrData = [];
          snapshot.forEach((doc) => {
            arrData.push({ id: doc.id, ...doc.data() });
          });
          setCardsDefault(arrData);
          setSort(undefined);
          setpriceAtive("All");
          setColorActive("All");
          let efs = document.getElementsByClassName("ef");

          for (let i = 0; i < efs.length; i++) {
            efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
          }
          setPage(2);
          setLoad(true);
        });
    } else {
      db.where("category", "==", label.toLowerCase())
        .limit(8)
        .get()

        .then((snapshot) => {
          let arrData = [];
          snapshot.forEach((doc) => {
            arrData.push({ id: doc.id, ...doc.data() });
          });
          setCardsDefault(arrData);
          setSort(undefined);
          setpriceAtive("All");
          setColorActive("All");
          let efs = document.getElementsByClassName("ef");

          for (let i = 0; i < efs.length; i++) {
            efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
          }
          setPage(2);
          setLoad(true);
        });
    }
  };

  //filter
  //sort
  const [sort, setSort] = useState();
  const sortBy = ["Price: Low to High", "Price: High to Low"];

  const sortProducts = (item) => {
    switch (item) {
      case "Price: Low to High": {
        setCardsDefault([
          ...cardsDefault.sort(function (a, b) {
            return a.price - b.price;
          }),
        ]);
        let efs = document.getElementsByClassName("ef");

        for (let i = 0; i < efs.length; i++) {
          efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
        }
        break;
      }
      case "Price: High to Low": {
        setCardsDefault([
          ...cardsDefault.sort(function (a, b) {
            return b.price - a.price;
          }),
        ]);
        let efs = document.getElementsByClassName("ef");

        for (let i = 0; i < efs.length; i++) {
          efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
        }
        break;
      }
    }
  };

  //price
  const prices = ["All", "$0.00 - $100.00", "$100.00 - $200.00", "$200.00+"];
  const [priceAtive, setpriceAtive] = useState("All");

  const filterPrice = (price) => {
    switch (price) {
      case "All": {
        getDBByPrice(0, 0);
        break;
      }
      case "$0.00 - $100.00": {
        getDBByPrice(0, 100);
        break;
      }
      case "$100.00 - $200.00": {
        getDBByPrice(100, 200);
        break;
      }
      case "$200.00+": {
        getDBByPrice(200, 200);
        break;
      }
    }
  };
  const getDBByPrice = (from, to) => {
    let query1 = ["price", ">=", from];
    let query2 = ["price", "<", to];

    if (from == 0 && to == 0) {
      query1 = ["price", ">", from];
      query2 = ["price", ">", to];
    } else if (from == 200 && to == 200) {
      query1 = ["price", ">=", from];
      query2 = ["price", ">=", to];
    }

    let query3 =
      active != "All Products"
        ? ["category", "==", active.toLowerCase()]
        : false;
    let query4 =
      colorActive != "All" ? ["color", "array-contains", colorActive] : false;

    getDBFilter([query1, query2, query3, query4]);
  };

  //color
  const colors1 = ["Black", "Blue", "Grey", "Green"];
  const colors2 = ["Red", "Brown", "White"];

  const [colorActive, setColorActive] = useState("All");
  const filterColor = (color) => {
    switch (color) {
      case "All": {
        getDBByColor("All");
        break;
      }
      case "Black": {
        getDBByColor("Black");
        break;
      }
      case "Blue": {
        getDBByColor("Blue");
        break;
      }
      case "Grey": {
        getDBByColor("Grey");
        break;
      }
      case "Green": {
        getDBByColor("Green");
        break;
      }
      case "Red": {
        getDBByColor("Red");
        break;
      }
      case "Brown": {
        getDBByColor("Brown");
        break;
      }
      case "White": {
        getDBByColor("White");
        break;
      }
    }
  };

  const getDBByColor = (color) => {
    let query1 = ["color", "array-contains", color];

    if (color == "All") {
      query1 = [
        "color",
        "array-contains-any",
        ["Black", "Blue", "Grey", "Green", "Red", "Brown", "White"],
      ];
    }
    let query2 =
      active != "All Products"
        ? ["category", "==", active.toLowerCase()]
        : false;

    let query3;
    let query4;
    switch (priceAtive) {
      case "All": {
        query3 = false;
        query4 = false;
        break;
      }
      case "$0.00 - $100.00": {
        query3 = ["price", ">=", 0];
        query4 = ["price", "<", 100];
        break;
      }
      case "$100.00 - $200.00": {
        query3 = ["price", ">=", 100];
        query4 = ["price", "<", 200];
        break;
      }
      case "$200.00+": {
        query3 = ["price", ">=", 200];
        query4 = ["price", ">=", 200];
        break;
      }
    }

    getDBFilter([query1, query2, query3, query4]);
  };

  //get db
  const getDBFilter = (arr) => {
    let querys = arr.filter((item) => item != false);

    switch (querys.length) {
      case 1: {
        db.where(...querys[0])
          .limit(8 * page)
          .get()
          .then((snapshot) => {
            let arrData = [];
            snapshot.forEach((doc) => {
              arrData.push({ id: doc.id, ...doc.data() });
            });

            if (sort == "Price: Low to High") {
              arrData.sort(function (a, b) {
                return a.price - b.price;
              });
            } else if (sort == "Price: High to Low") {
              arrData.sort(function (a, b) {
                return b.price - a.price;
              });
            }

            setCardsDefault(arrData);
            let efs = document.getElementsByClassName("ef");

            for (let i = 0; i < efs.length; i++) {
              efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
            }
          });
        break;
      }
      case 2: {
        db.where(...querys[0])
          .where(...querys[1])
          .limit(8 * page)
          .get()
          .then((snapshot) => {
            let arrData = [];
            snapshot.forEach((doc) => {
              arrData.push({ id: doc.id, ...doc.data() });
            });
            if (sort == "Price: Low to High") {
              arrData.sort(function (a, b) {
                return a.price - b.price;
              });
            } else if (sort == "Price: High to Low") {
              arrData.sort(function (a, b) {
                return b.price - a.price;
              });
            }
            setCardsDefault(arrData);
            let efs = document.getElementsByClassName("ef");

            for (let i = 0; i < efs.length; i++) {
              efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
            }
          });
        break;
      }
      case 3: {
        db.where(...querys[0])
          .where(...querys[1])
          .where(...querys[2])
          .limit(8 * page)
          .get()
          .then((snapshot) => {
            let arrData = [];
            snapshot.forEach((doc) => {
              arrData.push({ id: doc.id, ...doc.data() });
            });
            if (sort == "Price: Low to High") {
              arrData.sort(function (a, b) {
                return a.price - b.price;
              });
            } else if (sort == "Price: High to Low") {
              arrData.sort(function (a, b) {
                return b.price - a.price;
              });
            }
            setCardsDefault(arrData);
            let efs = document.getElementsByClassName("ef");

            for (let i = 0; i < efs.length; i++) {
              efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
            }
          });
        break;
      }
      case 4: {
        db.where(...querys[0])
          .where(...querys[1])
          .where(...querys[2])
          .where(...querys[3])
          .limit(8 * page)
          .get()
          .then((snapshot) => {
            let arrData = [];
            snapshot.forEach((doc) => {
              arrData.push({ id: doc.id, ...doc.data() });
            });
            if (sort == "Price: Low to High") {
              arrData.sort(function (a, b) {
                return a.price - b.price;
              });
            } else if (sort == "Price: High to Low") {
              arrData.sort(function (a, b) {
                return b.price - a.price;
              });
            }
            setCardsDefault(arrData);
            let efs = document.getElementsByClassName("ef");

            for (let i = 0; i < efs.length; i++) {
              efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
            }
          });
        break;
      }
    }
  };

  //page
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(true);
  const loadMore = () => {
    if (active == "All Products") {
      db.limit(8 * page)
        .get()
        .then((snapshot) => {
          let arrData = [];
          snapshot.forEach((doc) => {
            arrData.push({ id: doc.id, ...doc.data() });
          });
          setCardsDefault(arrData);

          let efs = document.getElementsByClassName("ef");

          for (let i = 0; i < efs.length; i++) {
            efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
          }
          setSort(undefined);
          setpriceAtive("All");
          setColorActive("All");
          if (arrData.length == 0 || arrData.length < page * 8) {
            setLoad(false);
          } else {
            setPage(page + 1);
          }
        });
    } else {
      db.limit(8 * page)
        .where("category", "==", active.toLowerCase())
        .get()
        .then((snapshot) => {
          let arrData = [];
          snapshot.forEach((doc) => {
            arrData.push({ id: doc.id, ...doc.data() });
          });
          setCardsDefault(arrData);

          let efs = document.getElementsByClassName("ef");

          for (let i = 0; i < efs.length; i++) {
            efs[i].style = "transform: scale(1);opacity: 1;transition: 0.5s;";
          }
          setSort(undefined);
          setpriceAtive("All");
          setColorActive("All");
          if (arrData.length == 0 || arrData.length < page * 8) {
            setPage("end");
          } else {
            setPage(page + 1);
          }
        });
    }
  };

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
                {categories.map((f) => (
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
                      {sortBy.map((item, i) => (
                        <li className="p-b-6" key={i}>
                          <a
                            href="#"
                            className={`filter-link stext-106 trans-04 ${
                              item == sort ? "filter-link-active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setSort(item);
                              if (sort !== item) {
                                let efs = document.getElementsByClassName("ef");

                                for (let i = 0; i < efs.length; i++) {
                                  efs[i].style =
                                    "transform: scale(0);opacity: 0;transition: 0.5s;";
                                }
                                setTimeout(() => {
                                  sortProducts(item);
                                }, 500);
                              }
                            }}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="filter-col2 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Price</div>
                    <ul>
                      {prices.map((price) => (
                        <li className="p-b-6" key={price}>
                          <a
                            href="#"
                            className={`filter-link stext-106 trans-04 ${
                              price == priceAtive ? "filter-link-active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setpriceAtive(price);
                              if (priceAtive !== price) {
                                let efs = document.getElementsByClassName("ef");

                                for (let i = 0; i < efs.length; i++) {
                                  efs[i].style =
                                    "transform: scale(0);opacity: 0;transition: 0.5s;";
                                }
                                setTimeout(() => {
                                  filterPrice(price);
                                }, 500);
                              }
                            }}
                          >
                            {price}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="filter-col3 p-r-15 p-b-27">
                    <div className="mtext-102 cl2 p-b-15">Color</div>
                    <div className="row">
                      <ul className="col-sm-6">
                        <li className="p-b-6">
                          <a
                            href="#"
                            className={`filter-link stext-106 trans-04 ${
                              colorActive == "All" ? "filter-link-active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setColorActive("All");
                              if (colorActive !== "All") {
                                let efs = document.getElementsByClassName("ef");

                                for (let i = 0; i < efs.length; i++) {
                                  efs[i].style =
                                    "transform: scale(0);opacity: 0;transition: 0.5s;";
                                }
                                setTimeout(() => {
                                  filterColor("All");
                                }, 500);
                              }
                            }}
                          >
                            All
                          </a>
                        </li>
                        {colors1.map((color) => (
                          <li className="p-b-6" key={color}>
                            <span
                              className="fs-15 lh-12 m-r-6"
                              style={{ color: color }}
                            >
                              <i className="zmdi zmdi-circle" />
                            </span>
                            <a
                              href="#"
                              className={`filter-link stext-106 trans-04 ${
                                colorActive == color ? "filter-link-active" : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setColorActive(color);
                                if (colorActive !== color) {
                                  let efs = document.getElementsByClassName(
                                    "ef"
                                  );

                                  for (let i = 0; i < efs.length; i++) {
                                    efs[i].style =
                                      "transform: scale(0);opacity: 0;transition: 0.5s;";
                                  }
                                  setTimeout(() => {
                                    filterColor(color);
                                  }, 500);
                                }
                              }}
                            >
                              {color}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <ul className="col-sm-6">
                        <li className="p-b-6" style={{ visibility: "hidden" }}>
                          <a
                            href="#"
                            className={`filter-link stext-106 trans-04 ${
                              colorActive == "All" ? "filter-link-active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            All
                          </a>
                        </li>
                        {colors2.map((color) => (
                          <li className="p-b-6" key={color}>
                            <span
                              className="fs-15 lh-12 m-r-6"
                              style={
                                color == "White"
                                  ? { color: "#aaa" }
                                  : { color: color }
                              }
                            >
                              <i
                                className={`zmdi  ${
                                  color == "White"
                                    ? "zmdi-circle-o"
                                    : "zmdi-circle"
                                }`}
                              />
                            </span>
                            <a
                              href="#"
                              className={`filter-link stext-106 trans-04 ${
                                colorActive == color ? "filter-link-active" : ""
                              }`}
                              onClick={(e) => {
                                e.preventDefault();
                                setColorActive(color);
                                if (colorActive !== color) {
                                  let efs = document.getElementsByClassName(
                                    "ef"
                                  );

                                  for (let i = 0; i < efs.length; i++) {
                                    efs[i].style =
                                      "transform: scale(0);opacity: 0;transition: 0.5s;";
                                  }
                                  setTimeout(() => {
                                    filterColor(color);
                                  }, 500);
                                }
                              }}
                            >
                              {color}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="row isotope-grid">
            {cardsDefault &&
              cardsDefault.map((card) => {
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
                          onClick={(e) => showModal(e, card)}
                        >
                          Quick View
                        </a>
                      </div>
                      <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                          <Link href="/shop/[id]" as={"/shop/" + card.slug}>
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
                            onClick={(e) => {
                              e.preventDefault();
                              likeProduct(
                                card.name,
                                card.slug,
                                card.images.coverImage
                              );
                            }}
                          >
                            <img
                              className="icon-heart1 dis-block trans-04"
                              src="images/icons/icon-heart-01.png"
                              alt="ICON"
                            />
                            <img
                              className={`${
                                arrLike.includes(card.name) ? "" : "icon-heart2"
                              } dis-block trans-04 ab-t-l`}
                              src="images/icons/icon-heart-02.png"
                              alt="ICON"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                // }
              })}
          </div>
          {/* Load more */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
              style={load ? null : { visibility: "hidden" }}
              onClick={(e) => {
                e.preventDefault();
                let efs = document.getElementsByClassName("ef");

                for (let i = 0; i < efs.length; i++) {
                  efs[i].style =
                    "transform: scale(0);opacity: 0;transition: 0.5s;";
                }
                setTimeout(() => {
                  loadMore();
                }, 500);
              }}
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
