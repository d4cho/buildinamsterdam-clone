import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppContextProvider } from "../context/AppContext";
import BioStorybookWidget from "bio-storybook-widget";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <BioStorybookWidget projectSource={"bia"} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
};

export default MyApp;
