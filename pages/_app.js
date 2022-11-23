import '../styles/globals.css';
import Layout from '../components/Layout';
import { AppContextProvider } from '../context/AppContext';

const MyApp = ({ Component, pageProps }) => {
    return (
        <AppContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppContextProvider>
    );
};

export default MyApp;
