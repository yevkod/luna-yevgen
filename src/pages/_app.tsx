import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.css';
import Root from "@/Root";
import {useStore} from "@/redux";
import type { AppProps } from 'next/app'


function MyApp({Component, pageProps}: AppProps) {
    const store = useStore(pageProps.initialReduxState);
    return (
        <Root store={store}>
            <Component {...pageProps} />
        </Root>
    );
}

export default MyApp;
