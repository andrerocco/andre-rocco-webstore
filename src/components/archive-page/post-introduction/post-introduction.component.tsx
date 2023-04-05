import styles from './post-introduction.module.css';

interface PostIntroductionProps {
    title?: string;
    description?: string;
}

export default function PostIntroduction({ title, description }: PostIntroductionProps) {
    return (
        <div className={styles.container}>
            <div className={styles.text_wrapper}>
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
            </div>
        </div>
    );
}
