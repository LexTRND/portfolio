import "../styles/main.scss";
import { NavBar } from "../components/NavBar";

/* rest of app styles */

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
