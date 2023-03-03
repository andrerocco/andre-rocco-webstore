import styles from './grid-item.module.css';

interface ComponentProps {
    imageUrl?: string;
    title?: string;
    subtitle?: string;
    description?: string;
}

export default function GridItem({ imageUrl, title, subtitle, description }: ComponentProps) {
    return (
        <div className={styles.container}>
            {imageUrl ? <img src={imageUrl} className={styles.image} /> : <div className={styles.image_square} />}
            <div className={styles.title_container}>
                <h5 className={styles.title}>{title}</h5>
                {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </div>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    );
}
