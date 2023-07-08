import styles from './contrast-button.module.css';

export default function ContrastButton({ children, ...props }: { children: React.ReactNode }) {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
}

ContrastButton.label = function ContrastButtonLabel({ children }: { children: React.ReactNode }) {
    return <span className={styles.label}>{children}</span>;
};
