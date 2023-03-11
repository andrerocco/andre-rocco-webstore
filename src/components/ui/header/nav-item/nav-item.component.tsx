import styles from './nav-item.module.css';
import Link from 'next/link';

export default function NavItem({ label, labelHref, dropdown }: any) {
    // Dropdown expands on hover with pure CSS
    return (
        <li className={styles.nav_item}>
            <Link href={labelHref ? labelHref : '/'} className={styles.title}>
                {label}
            </Link>
            {dropdown && (
                <div className={styles.dropdown_container}>
                    <div className={styles.dropdown_wrapper}>{dropdown}</div>
                </div>
            )}
        </li>
    );
}
