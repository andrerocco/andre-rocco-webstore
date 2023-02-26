import styles from './navigation-bar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationBarProps {
    children: React.ReactNode;
}

interface NavigationBarItemProps {
    label: string;
    path: string;
}

export default function NavigationBar({ children }: NavigationBarProps) {
    return <nav className={styles.nav}>{children}</nav>;
}

NavigationBar.item = ({ label, path }: NavigationBarItemProps) => {
    const router = useRouter();

    return (
        <Link href={path} className={`${styles.nav_button} ${path === router.pathname && styles.selected}`}>
            {label}
        </Link>
    );
};
