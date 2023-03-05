import styles from './navigation-bar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavigationBarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavigationBarItemProps {
    label: string;
    path: string;
}

interface NavigationBarIconProps {
    icon: React.ReactNode;
    path: string;
}

export default function NavigationBar({ children, className }: NavigationBarProps) {
    return <nav className={className ? `${styles.nav} ${className}` : styles.nav}>{children}</nav>;
}

NavigationBar.item = ({ label, path }: NavigationBarItemProps) => {
    const router = useRouter();
    const isSubPath = router.pathname.split('/').slice(1)[0] === path.split('/').slice(1)[0];

    return (
        <Link href={path} className={`${styles.nav_button} ${isSubPath && styles.selected}`}>
            {label}
        </Link>
    );
};

NavigationBar.icon = ({ icon, path, ...props }: NavigationBarIconProps) => {
    const router = useRouter();
    const isSubPath = router.pathname.split('/').slice(1)[0] === path.split('/').slice(1)[0];

    return (
        <Link href={path} className={`${styles.nav_icon} ${isSubPath && styles.selected}`} {...props}>
            {icon}
        </Link>
    );
};
