import "./_app.css";
import Head from "next/head";
import useCrossOb from "cross-design";
import Link from "next/link";
import useCrossInit from "cross-design/useCrossInit";

useCrossOb.get().components.Link = Link;

export default function MyApp({ Component, pageProps }: any) {
  const inited = useCrossInit();

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"
        />
        <link rel="icon" href="/poet.ico" />
        <script src="//at.alicdn.com/t/font_1872911_kd304mu78oj.js"></script>
        <style type="text/css">
          {`.icon {
            width: 1em; height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
          }`}
        </style>
      </Head>
      <div className="full" style={{ display: inited ? undefined : "none" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
