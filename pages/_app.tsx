import React from "react";
import "../src/styles.css";
import "semantic-ui-css/semantic.min.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
