import '@styles/globals.css';
import type { AppProps } from 'next/app';
// Components
import Header from '@components/ui/header/header.component';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
