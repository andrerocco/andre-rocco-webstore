import styles from './contrast-button.module.css';

interface ContrastButtonProps {
    children: React.ReactNode;
    enabled?: boolean;
    href?: string;
}

export default function ContrastButton({ children, enabled = true, href, ...props }: ContrastButtonProps) {
    return (
        <a
            className={enabled ? `${styles.button} ${styles.enabled}` : `${styles.button} ${styles.disabled}`}
            href={enabled ? href : undefined}
            {...props}
        >
            {children}
        </a>
    );
}

ContrastButton.label = function ContrastButtonLabel({ children }: { children: React.ReactNode }) {
    return <span className={styles.label}>{children}</span>;
};
