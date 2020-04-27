import React, { useState, useEffect, createRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Collapse } from "reactstrap";

const wrapMenuDesktop = React.createRef();
const containerMenuDesktop = React.createRef();
const toBar = React.createRef();
export default function Header({ changeCartStatus, products }) {
  const path = useRouter().pathname;
  const level = path.split("").filter((item) => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  const menu = [
    ["/", "Home"],
    ["/shop", "Shop"],

    ["/blog", "Blog"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];
  const [modalSearch, setModalSearch] = useState(false);
  const showSearch = () => setModalSearch(!modalSearch);
  const hideSearch = () => {
    setModalSearch(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuMobie = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (pageYOffset > toBar.current.offsetHeight) {
      containerMenuDesktop.current.classList.add("fix-menu-desktop");
      wrapMenuDesktop.current.style.top = 0;
    }
    window.addEventListener("scroll", scroll);
    function scroll() {
      if (pageYOffset > toBar.current.offsetHeight) {
        containerMenuDesktop.current.classList.add("fix-menu-desktop");
        wrapMenuDesktop.current.style.top = 0;
      } else {
        containerMenuDesktop.current.classList.remove("fix-menu-desktop");
        wrapMenuDesktop.current.style.top = "40px";
      }
    }
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <header className={path !== "/" ? "header-v4" : null}>
      {/* Header desktop */}
      <div className="container-menu-desktop" ref={containerMenuDesktop}>
        {/* Topbar */}
        <div className="top-bar">
          <div
            className="content-topbar flex-sb-m h-full container"
            id="top-bar"
            ref={toBar}
          >
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help &amp; FAQs
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                USD
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-menu-desktop" ref={wrapMenuDesktop}>
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <Link href="/">
              <a href="#" className="logo">
                <img
                  src={fixPathImg + "images/icons/logo-01.png"}
                  alt="IMG-LOGO"
                />
              </a>
            </Link>
            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                {menu.map((page, index) => {
                  return (
                    <Link href={page[0]} key={index}>
                      <li
                        className={
                          `${path === page[0] ? "active-menu" : ""}${
                            page[1] === "Features" ? " label1" : ""
                          }` || null
                        }
                        data-label1={page[1] === "Features" ? "hot" : null}
                      >
                        <span className="link">{page[1]}</span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div
                onClick={showSearch}
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11"
              >
                <i className="zmdi zmdi-search" />
              </div>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={products.length}
                onClick={changeCartStatus}
              >
                <i className="zmdi zmdi-shopping-cart" />
              </div>
              <a
                href="#"
                className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                data-notify={0}
              >
                <i className="zmdi zmdi-favorite-outline" />
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <a href="index.html">
            <img src={fixPathImg + "images/icons/logo-01.png"} alt="IMG-LOGO" />
          </a>
        </div>
        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11"
            onClick={showSearch}
          >
            <i className="zmdi zmdi-search" />
          </div>
          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            onClick={changeCartStatus}
            data-notify={2}
          >
            <i className="zmdi zmdi-shopping-cart" />
          </div>
          <a
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify={0}
          >
            <i className="zmdi zmdi-favorite-outline" />
          </a>
        </div>
        {/* Button show menu */}
        <div
          className={`btn-show-menu-mobile hamburger hamburger--squeeze ${
            isOpen ? "is-active" : ""
          }`}
          onClick={toggleMenuMobie}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </div>
      </div>
      {/* Menu Mobile */}
      <Collapse isOpen={isOpen}>
        <div className={`menu-mobile`}>
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>
            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  Help &amp; FAQs
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  My Account
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>
          <ul className="main-menu-m">
            {menu.map((page, index) => {
              return (
                <Link href={page[0]} key={index}>
                  <li>
                    <a
                      className={page[1] === "Features" ? " label1 rs1" : null}
                      data-label1={page[1] === "Features" ? "hot" : null}
                    >
                      {page[1]}
                    </a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </Collapse>
      {/* Modal Search */}
      <div
        className={`modal-search-header flex-c-m trans-04 js-hide-modal-search ${
          modalSearch ? "show-modal-search" : ""
        }`}
        onClick={hideSearch}
      >
        <div
          className="container-search-header"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={hideSearch}
            className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search"
          >
            <img
              src={fixPathImg + "images/icons/icon-close2.png"}
              alt="CLOSE"
            />
          </button>
          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search" />
            </button>
            <input
              className="plh3"
              type="text"
              name="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </header>
  );
}
