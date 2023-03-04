import styles from './aside-menu.module.css';
import Link from 'next/link';
// Components
import SimpleButton from '@components/ui/button/simple-button/simple-button.component';

interface AsideMenuProps {
    className?: string;
}

export default function AsideMenu({ className }: AsideMenuProps) {
    return (
        <aside className={className ? `${styles.aside} ${className}` : styles.aside}>
            <nav className={styles.nav}>
                <SimpleButton label="LOGIN" href="/login" />
            </nav>
        </aside>
    );
}
