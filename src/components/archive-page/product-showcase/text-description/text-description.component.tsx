import styles from './text-description.module.css';

interface TextDescriptionProps {
    text: string[];
    className?: string;
}

export default function TextDescription({ text, className }: TextDescriptionProps) {
    return (
        <div className={className ? `${styles.container} ${className}` : styles.container}>
            {text.map((paragraph: string, index: number) => {
                return (
                    <p key={index} className={styles.paragraph}>
                        {paragraph}
                    </p>
                );
            })}
        </div>
    );
}
