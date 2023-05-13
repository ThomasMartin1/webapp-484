import { SessionProvider } from "next-auth/react";
import Footer from "../components/footer";
import "bootstrap/dist/css/bootstrap.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
