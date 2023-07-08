import styles from './contrast-button.module.css';

interface ContrastButtonProps {
    children: React.ReactNode;
    enabled?: boolean;
}

export default function ContrastButton({ children, enabled = true, ...props }: ContrastButtonProps) {
    return (
        <button
            className={enabled ? `${styles.button} ${styles.enabled}` : `${styles.button} ${styles.disabled}`}
            disabled={enabled ? false : true}
            {...props}
        >
            {children}
        </button>
    );
}

ContrastButton.label = function ContrastButtonLabel({ children }: { children: React.ReactNode }) {
    return <span className={styles.label}>{children}</span>;
};
