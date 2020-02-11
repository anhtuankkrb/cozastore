import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const slick = document.createElement("script");
    slick.src = "./js/slick-custom.js";
    document.body.appendChild(slick);

    const script = document.createElement("script");
    script.src = "./js/script.js";
    document.body.appendChild(script);

    const main = document.createElement("script");
    main.src = "./js/main.js";
    document.body.appendChild(main);
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/bootstrap/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/iconic/css/material-design-iconic-font.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="fonts/linearicons-v1.0.0/icon-font.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/animate/animate.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/css-hamburgers/hamburgers.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/animsition/css/animsition.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/select2/select2.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/daterangepicker/daterangepicker.css"
        />
        <link rel="stylesheet" type="text/css" href="vendor/slick/slick.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/MagnificPopup/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="vendor/perfect-scrollbar/perfect-scrollbar.css"
        />
        <link rel="stylesheet" type="text/css" href="css/util.css" />
        <link rel="stylesheet" type="text/css" href="css/main.css" />
      </Head>
      <Component {...pageProps} />
      <script src="./vendor/jquery/jquery-3.2.1.min.js"></script>
      <script src="./vendor/animsition/js/animsition.min.js"></script>
      <script src="./vendor/bootstrap/js/popper.js"></script>
      <script src="./vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="./vendor/select2/select2.min.js"></script>
      <script src="./vendor/daterangepicker/moment.min.js"></script>
      <script src="./vendor/daterangepicker/daterangepicker.js"></script>
      <script src="./vendor/slick/slick.min.js"></script>
      <script src="./vendor/parallax100/parallax100.js"></script>
      <script src="./vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>
      <script src="./vendor/isotope/isotope.pkgd.min.js"></script>
      <script src="./vendor/sweetalert/sweetalert.min.js"></script>
      <script src="./vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKFWBqlKAGCeS1rMVoaNlwyayu0e0YRes"></script>
    </>
  );
}

export default MyApp;
