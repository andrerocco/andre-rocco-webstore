import Image from 'next/image';
import styles from './grid-item.module.css';

interface ComponentProps {
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
}

export default function GridItem({ imageUrl, title, subtitle, description }: ComponentProps) {
    return (
        <div
            className={styles.container}
            style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                aspectRatio: 1,
                overflow: 'hidden',
            }}
        >
            <div className={styles.image_container}>
                {imageUrl && (
                    <Image fill alt={title} src={imageUrl} className={styles.image} style={{ objectFit: 'cover' }} />
                )}
            </div>
            <div className={styles.content_container}>
                <div className={styles.title_container}>
                    <h5 className={styles.title}>{title}</h5>
                    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                </div>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
}
