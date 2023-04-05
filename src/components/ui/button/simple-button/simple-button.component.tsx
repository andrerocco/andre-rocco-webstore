import styles from './simple-button.module.css';
import Link from 'next/link';

interface SimpleButtonProps {
    label: string;
    href?: string;
    weight?: 'bold' | 'normal';
    className?: string;
    [propName: string]: any;
}

export default function SimpleButton({ label, href, weight, className, ...props }: SimpleButtonProps) {
    const isUrl = href && (href.startsWith('http') || href.startsWith('www.'));

    return isUrl ? (
        <a
            href={href ? href : '/'}
            className={className ? `${styles.button} ${className}` : styles.button}
            style={{ fontWeight: weight ? weight : 'normal' }}
            {...props}
        >
            {label}
        </a>
    ) : (
        <Link
            href={href ? href : '/'}
            className={className ? `${styles.button} ${className}` : styles.button}
            style={{ fontWeight: weight ? weight : 'normal' }}
            {...props}
        >
            {label}
        </Link>
    );
}
