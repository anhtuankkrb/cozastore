import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { dbBlog, Timestamp } from "../../firebase/fire";
import parse, { domToReact } from "html-react-parser";

export default function Post({ data }) {
  const path = useRouter().pathname;
  const level = path.split("").filter((item) => item == "/");
  let fixPathImg = "";
  for (let i = 0; i < level.length - 1; i++) {
    fixPathImg += "../";
  }

  const time = new Timestamp(
    data.archiveDate.seconds,
    data.archiveDate.nanoseconds
  ).toDate();

  const date = time.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = time.getMonth();
  const year = time.getFullYear();
  const jsx = parse(data.html, {
    replace: function (domNode) {
      if (domNode.name == "p") {
        return (
          <p className="stext-117 cl6 p-b-26">{domToReact(domNode.children)}</p>
        );
      }
    },
  });

  return (
    <Layout title={data.title}>
      <div>
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
            <Link href="/blog">
              <a href="blog.html" className="stext-109 cl8 hov-cl1 trans-04">
                Blog
                <i
                  className="fa fa-angle-right m-l-9 m-r-10"
                  aria-hidden="true"
                />
              </a>
            </Link>
            <span className="stext-109 cl4">{data.title}</span>
          </div>
        </div>
        {/* Content page */}
        <section className="bg0 p-t-52 p-b-20">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-9 p-b-80">
                <div className="p-r-45 p-r-0-lg">
                  {/*  */}
                  <div className="wrap-pic-w how-pos5-parent">
                    <img src={data.coverImage} alt={data.title} />
                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                      <span className="ltext-107 cl2 txt-center">{date}</span>
                      <span className="stext-109 cl3 txt-center">
                        {months[month] + " " + year}
                      </span>
                    </div>
                  </div>
                  <div className="p-t-32">
                    <span className="flex-w flex-m stext-111 cl2 p-b-19">
                      <span>
                        <span className="cl4">By</span>
                        {" " + data.author}
                        <span className="cl12 m-l-4 m-r-6">|</span>
                      </span>
                      <span>
                        {date + " " + months[month] + ", " + year}
                        <span className="cl12 m-l-4 m-r-6">|</span>
                      </span>
                      <span>
                        {data.categories.concat(data.tags).join(", ")}
                        <span className="cl12 m-l-4 m-r-6">|</span>
                      </span>
                      <span>8 Comments</span>
                    </span>
                    <h4 className="ltext-109 cl2 p-b-28">{data.title}</h4>
                    {jsx}
                  </div>
                  <div className="flex-w flex-t p-t-16">
                    <span className="size-216 stext-116 cl8 p-t-4">Tags</span>
                    <div className="flex-w size-217">
                      {data.tags &&
                        data.tags.map((tag) => (
                          <a
                            key={tag}
                            href="#"
                            className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                          >
                            {tag}
                          </a>
                        ))}
                    </div>
                  </div>
                  {/*  */}
                  <div className="p-t-40">
                    <h5 className="mtext-113 cl2 p-b-12">Leave a Comment</h5>
                    <p className="stext-107 cl6 p-b-40">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form>
                      <div className="bor19 m-b-20">
                        <textarea
                          className="stext-111 cl2 plh3 size-124 p-lr-18 p-tb-15"
                          name="cmt"
                          placeholder="Comment..."
                          defaultValue={""}
                        />
                      </div>
                      <div className="bor19 size-218 m-b-20">
                        <input
                          className="stext-111 cl2 plh3 size-116 p-lr-18"
                          type="text"
                          name="name"
                          placeholder="Name *"
                        />
                      </div>
                      <div className="bor19 size-218 m-b-20">
                        <input
                          className="stext-111 cl2 plh3 size-116 p-lr-18"
                          type="text"
                          name="email"
                          placeholder="Email *"
                        />
                      </div>
                      <div className="bor19 size-218 m-b-30">
                        <input
                          className="stext-111 cl2 plh3 size-116 p-lr-18"
                          type="text"
                          name="web"
                          placeholder="Website"
                        />
                      </div>
                      <button className="flex-c-m stext-101 cl0 size-125 bg3 bor2 hov-btn3 p-lr-15 trans-04">
                        Post Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 p-b-80">
                <div className="side-menu">
                  <div className="bor17 of-hidden pos-relative">
                    <input
                      className="stext-103 cl2 plh4 size-116 p-l-28 p-r-55"
                      type="text"
                      name="search"
                      placeholder="Search"
                    />
                    <button className="flex-c-m size-122 ab-t-r fs-18 cl4 hov-cl1 trans-04">
                      <i className="zmdi zmdi-search" />
                    </button>
                  </div>
                  <div className="p-t-55">
                    <h4 className="mtext-112 cl2 p-b-33">Categories</h4>
                    <ul>
                      <li className="bor18">
                        <a
                          href="#"
                          className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                        >
                          Fashion
                        </a>
                      </li>
                      <li className="bor18">
                        <a
                          href="#"
                          className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                        >
                          Beauty
                        </a>
                      </li>
                      <li className="bor18">
                        <a
                          href="#"
                          className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                        >
                          Street Style
                        </a>
                      </li>
                      <li className="bor18">
                        <a
                          href="#"
                          className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                        >
                          Life Style
                        </a>
                      </li>
                      <li className="bor18">
                        <a
                          href="#"
                          className="dis-block stext-115 cl6 hov-cl1 trans-04 p-tb-8 p-lr-4"
                        >
                          DIY &amp; Crafts
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-t-65">
                    <h4 className="mtext-112 cl2 p-b-33">Featured Products</h4>
                    <ul>
                      <li className="flex-w flex-t p-b-30">
                        <a
                          href="#"
                          className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                        >
                          <img
                            src={fixPathImg + "images/product-min-01.jpg"}
                            alt="PRODUCT"
                          />
                        </a>
                        <div className="size-215 flex-col-t p-t-8">
                          <a
                            href="#"
                            className="stext-116 cl8 hov-cl1 trans-04"
                          >
                            White Shirt With Pleat Detail Back
                          </a>
                          <span className="stext-116 cl6 p-t-20">$19.00</span>
                        </div>
                      </li>
                      <li className="flex-w flex-t p-b-30">
                        <a
                          href="#"
                          className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                        >
                          <img
                            src={fixPathImg + "images/product-min-02.jpg"}
                            alt="PRODUCT"
                          />
                        </a>
                        <div className="size-215 flex-col-t p-t-8">
                          <a
                            href="#"
                            className="stext-116 cl8 hov-cl1 trans-04"
                          >
                            Converse All Star Hi Black Canvas
                          </a>
                          <span className="stext-116 cl6 p-t-20">$39.00</span>
                        </div>
                      </li>
                      <li className="flex-w flex-t p-b-30">
                        <a
                          href="#"
                          className="wrao-pic-w size-214 hov-ovelay1 m-r-20"
                        >
                          <img
                            src={fixPathImg + "images/product-min-03.jpg"}
                            alt="PRODUCT"
                          />
                        </a>
                        <div className="size-215 flex-col-t p-t-8">
                          <a
                            href="#"
                            className="stext-116 cl8 hov-cl1 trans-04"
                          >
                            Nixon Porter Leather Watch In Tan
                          </a>
                          <span className="stext-116 cl6 p-t-20">$17.00</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="p-t-55">
                    <h4 className="mtext-112 cl2 p-b-20">Archive</h4>
                    <ul>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>July 2018</span>
                          <span>(9)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>June 2018</span>
                          <span>(39)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>May 2018</span>
                          <span>(29)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>April 2018</span>
                          <span>(35)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>March 2018</span>
                          <span>(22)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>February 2018</span>
                          <span>(32)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>January 2018</span>
                          <span>(21)</span>
                        </a>
                      </li>
                      <li className="p-b-7">
                        <a
                          href="#"
                          className="flex-w flex-sb-m stext-115 cl6 hov-cl1 trans-04 p-tb-2"
                        >
                          <span>December 2017</span>
                          <span>(26)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-t-50">
                    <h4 className="mtext-112 cl2 p-b-27">Tags</h4>
                    <div className="flex-w m-r--5">
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

Post.getInitialProps = async function (context) {
  const { id } = context.query;

  let result = await dbBlog
    .where("slug", "==", id)
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })

    .catch(() => {
      return [];
    });

  return { data: result[0] };
};
