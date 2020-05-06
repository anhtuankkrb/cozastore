import Slider from "react-slick";
import Link from "next/link";
function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow-slick1 next-slick1" onClick={onClick}>
      <i className="zmdi zmdi-caret-right" />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="arrow-slick1 prev-slick1" onClick={onClick}>
      <i className="zmdi zmdi-caret-left" />
    </button>
  );
}

export default function Slide(props) {
  const settings = {
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    waitForAnimate: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (index) => {
      const arr = document.getElementsByClassName("respon5");
      for (let i = 0; i < arr.length; i++) {
        const arr1 = arr[i].getElementsByClassName("animated");
        for (let z = 0; z < arr1.length; z++) {
          let att = arr1[z].getAttribute("data-appear");
          // arr1[z].classList.remove("visible-true", att);
          arr1[z].classList.add("visible-true", att);
        }
      }
    },
    beforeChange: () => {
      const arr = document.getElementsByClassName("respon5");
      for (let i = 0; i < arr.length; i++) {
        const arr1 = arr[i].getElementsByClassName("animated");
        for (let z = 0; z < arr1.length; z++) {
          let att = arr1[z].getAttribute("data-appear");
          arr1[z].classList.remove("visible-true", att);
          //   arr1[z].classList.add("visible-true", att);
        }
      }
    },
  };

  return (
    <section className="section-slide">
      <div className="wrap-slick1">
        <div className="slick1">
          <Slider {...settings}>
            <div>
              <div
                className="item-slick1"
                style={{ backgroundImage: "url(images/slide-01.jpg)" }}
              >
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      className="layer-slick1 animated visible-false fadeInDown visible-true"
                      data-appear="fadeInDown"
                      data-delay={0}
                    >
                      <span className="ltext-101 cl2 respon2">
                        Women Collection 2018
                      </span>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false fadeInUp visible-true"
                      data-appear="fadeInUp"
                      data-delay={800}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        NEW SEASON
                      </h2>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false zoomIn visible-true"
                      data-appear="zoomIn"
                      data-delay={1600}
                      style={{ animationDelay: "1.6s" }}
                    >
                      <Link href="/shop">
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                          Shop Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="item-slick1"
                style={{ backgroundImage: "url(images/slide-02.jpg)" }}
              >
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="rollIn"
                      data-delay={0}
                    >
                      <span className="ltext-101 cl2 respon2">
                        Men New-Season
                      </span>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="lightSpeedIn"
                      data-delay={800}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        Jackets &amp; Coats
                      </h2>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="fadeInUp"
                      data-delay={1600}
                      style={{ animationDelay: "1.6s" }}
                    >
                      <Link href="/shop">
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                          Shop Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className="item-slick1"
                style={{ backgroundImage: "url(images/slide-03.jpg)" }}
              >
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="rotateInDownLeft"
                      data-delay={0}
                    >
                      <span className="ltext-101 cl2 respon2">
                        Men Collection 2018
                      </span>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="rotateInUpRight"
                      data-delay={800}
                      style={{ animationDelay: "0.8s" }}
                    >
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        New arrivals
                      </h2>
                    </div>
                    <div
                      className="layer-slick1 animated visible-false"
                      data-appear="rotateIn"
                      data-delay={1600}
                      style={{ animationDelay: "1.6s" }}
                    >
                      <Link href="/shop">
                        <a
                          href="product.html"
                          className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                          Shop Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
