import '@styles/globals.css';
import { Metadata } from 'next';
// Components
import Header from '@components/ui/header/header.component';
import Footer from '@components/ui/footer/footer.component';

export const metadata: Metadata = {
    title: 'ANDRE___ROCCO',
    description:
        'Explore a visão de Andre Rocco através do site oficial. Descubra os últimos lançamentos, projetos e criações.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.cdnfonts.com/css/univers-next-pro-extended" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
