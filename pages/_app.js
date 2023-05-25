import GlobalStyle from "../styles";
import Volumes from "./volumes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      {/* <Volumes /> */}
    </>
  );
}
