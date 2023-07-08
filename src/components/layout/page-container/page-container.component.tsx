import styles from './page-container.module.css';
// Components
import Header from '@components/ui/header/header.component';
import Footer from '@components/ui/footer/footer.component';

interface PageContainerProps {
    children?: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
    return (
        <main id={styles.main}>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
