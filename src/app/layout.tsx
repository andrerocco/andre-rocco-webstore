import '@styles/globals.css';
import { Metadata } from 'next';
// Components
import Header from '@components/ui/header/header.component';
import Footer from '@components/ui/footer/footer.component';
import PageContainer from '@components/layout/page-container/page-container.component';

export const metadata: Metadata = {
    title: 'ANDRE  ROCCO',
    description:
        'Descubra as criações exclusivas da marca ANDRE ROCCO - fundada em 2023 no Brasil. Descubra peças em nossa loja online e explore o arquivo virtual de peças.',
    themeColor: '#000000',
    category: 'Fashion',
};

/* Explore nosso archive de peças de roupa únicas, desenvolvidas pelo criador da marca, André Rocco, desde 2023. */
/* Descubra as criações exclusivas da marca ANDRE ROCCO, fundada em 2023 no Brasil. Descubra peças em nossa loja online e explore o arquivo virtual de peças. */
/* Bem-vindo à ANDRE ROCCO. Encontre peças exclusivas em nossa loja online e desvende a história da marca através do arquivo virtual de criações. */

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.cdnfonts.com/css/univers-next-pro-extended" rel="stylesheet" />
            </head>
            <body>
                <PageContainer>{children}</PageContainer>
            </body>
        </html>
    );
}
