import styles from './path-navigator.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PathNavigatorProps {
    rootLabel: string;
    className?: string;
}

export default function PathNavigator({ rootLabel, className }: PathNavigatorProps) {
    const router = useRouter();
    // Split the path into an array of paths
    const isRouteReady = router?.isReady;
    const pathsArray = router?.asPath.split('/').filter((item) => item !== '');

    return (
        <aside className={className}>
            <nav className={styles.nav}>
                <span>
                    <Link href="/">{rootLabel}</Link>
                </span>
                {isRouteReady &&
                    pathsArray.map((path, index) => {
                        // Creates a full path from the root to the current path
                        const relativePath = pathsArray ? '/' + pathsArray.slice(0, index + 1).join('/') : '/';
                        return (
                            <span key={index}>
                                {' / '}
                                <Link href={relativePath}>{path?.replaceAll('-', ' ')}</Link>
                            </span>
                        );
                    })}
            </nav>
        </aside>
    );
}
