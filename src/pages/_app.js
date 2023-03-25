import "@/styles/globals.css";
import { _api } from "@iconify/react";
// import fetch from "cross-fetch";

export default function App({ Component, pageProps }) {
  // _api.setFetch(fetch);
  return <Component {...pageProps} />;
}
