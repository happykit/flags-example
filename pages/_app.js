import "../styles/globals.css";
import { configure } from "@happykit/flags/config";

configure({ envKey: process.env.NEXT_PUBLIC_FLAGS_CLIENT_ID });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
