import Layout from "../components/layout";
import Link from "next/link";

import { dbBlog, Timestamp } from "../firebase/fire";

import SideMenu from "../components/blog/side-menu";

export default function Blog({ data, category }) {
  return (
    <Layout title="Blog">
      {/* Title page */}
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: 'url("images/bg-02.jpg")' }}
      >
        <h2 className="ltext-105 cl0 txt-center">{category || "Blog"}</h2>
      </section>
      {/* Content page */}
      <section className="bg0 p-t-62 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9 p-b-80">
              <div className="p-r-45 p-r-0-lg">
                {/* item blog */}
                {data &&
                  data.map((post) => {
                    const time = new Timestamp(
                      post.archiveDate.seconds,
                      post.archiveDate.nanoseconds
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
                    return (
                      <div className="p-b-63" key={post.slug}>
                        <Link href="/blog/[id]" as={"/blog/" + post.slug}>
                          <a
                            href="blog-detail.html"
                            className="hov-img0 how-pos5-parent"
                          >
                            <img src={post.coverImage} alt={post.title} />
                            <div className="flex-col-c-m size-123 bg9 how-pos5">
                              <span className="ltext-107 cl2 txt-center">
                                {date}
                              </span>
                              <span className="stext-109 cl3 txt-center">
                                {months[month] + " " + year}
                              </span>
                            </div>
                          </a>
                        </Link>
                        <div className="p-t-32">
                          <h4 className="p-b-15">
                            <Link href="/blog/[id]" as={"/blog/" + post.slug}>
                              <a
                                href="blog-detail.html"
                                className="ltext-108 cl2 hov-cl1 trans-04"
                              >
                                {post.title}
                              </a>
                            </Link>
                          </h4>
                          <p className="stext-117 cl6">
                            {post.descriptiveParagraph}
                          </p>
                          <div className="flex-w flex-sb-m p-t-18">
                            <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                              <span>
                                <span className="cl4">By</span> {post.author}
                                <span className="cl12 m-l-4 m-r-6">|</span>
                              </span>
                              <span>
                                {post.categories.concat(post.tags).join(", ")}
                                <span className="cl12 m-l-4 m-r-6">|</span>
                              </span>
                              <span>8 Comments</span>
                            </span>
                            <Link href="/blog/[id]" as={"/blog/" + post.slug}>
                              <a
                                href="blog-detail.html"
                                className="stext-101 cl2 hov-cl1 trans-04 m-tb-10"
                              >
                                Continue Reading
                                <i className="fa fa-long-arrow-right m-l-9" />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* Pagination */}
                <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
                  <a
                    href="#"
                    className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="flex-c-m how-pagination1 trans-04 m-all-7"
                  >
                    2
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 p-b-80">
              <SideMenu category={category} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Blog.getInitialProps = async function (context) {
  if (context.query.category || context.query.tag) {
    let field = "";
    let value = "";
    let category;
    if (context.query.category) {
      field = "categories";
      category = value = context.query.category.replace(/@/g, "&");
    } else {
      field = "tags";
      value = context.query.tag;
    }

    let result = await dbBlog
      .where(field, "array-contains", value)
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
    return { data: result, category: category };
  }
  let result = await dbBlog.get().then((snapshot) => {
    let arrData = [];
    snapshot.forEach((doc) => {
      arrData.push({ id: doc.id, ...doc.data() });
    });
    return arrData;
  });
  return { data: result };
};
