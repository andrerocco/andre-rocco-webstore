import styles from './simple-button.module.css';
import Link from 'next/link';

interface SimpleButtonProps {
    label: string;
    href?: string;
    weight?: 'bold' | 'normal';
    className?: string;
}

export default function SimpleButton({ label, href, weight, className, ...props }: SimpleButtonProps) {
    return (
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
