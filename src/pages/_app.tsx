import '@styles/globals.css';
import type { AppProps } from 'next/app';
// Animations
import { AnimatePresence, motion } from 'framer-motion';
// Components
import Header from '@components/ui/header/header.component';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Header />
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
        </>
    );
}
