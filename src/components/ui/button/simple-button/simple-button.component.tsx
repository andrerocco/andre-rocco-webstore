import styles from './simple-button.module.css';
import Link from 'next/link';

interface SimpleButtonProps {
    label: string;
    href?: string;
    className?: string;
}

export default function SimpleButton({ label, href, className, ...props }: SimpleButtonProps) {
    return (
        <Link
            href={href ? href : '/'}
            className={className ? `${styles.button} ${className}` : styles.button}
            {...props}
        >
            {label}
        </Link>
    );
}
