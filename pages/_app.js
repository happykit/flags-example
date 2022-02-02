import "../styles/globals.css";
import "../flags.config";
import * as React from "react";
import Head from "next/head";
import { config } from "@happykit/flags/config";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        {/*
          Preconnecting improves load times by establishing the connection upfront
          https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preconnect
        */}
        <link
          rel="preconnect"
          href={[config.endpoint, config.envKey].join("/")}
        />
      </Head>
      <Component {...pageProps} />;
    </React.Fragment>
  );
}

export default MyApp;
