import Image from 'next/image';
import Link from 'next/link';
import styles from './grid-item.module.css';

interface ComponentProps {
    href: string;
    title: string;
    priority?: boolean;
    subtitle?: string;
    description?: string;
    imageUrl?: string;
}

export default function GridItem({ priority, href, imageUrl, title, subtitle, description }: ComponentProps) {
    return (
        <Link href={href} className={styles.container}>
            <div className={styles.image_container}>
                {imageUrl && (
                    <Image
                        fill
                        sizes="(max-width: 900px) 100vw, (max-width: 1500px) 50vw, 33vw"
                        priority={priority ? priority : false}
                        quality={100}
                        alt={title ? title : 'Image'}
                        src={imageUrl}
                        className={styles.image}
                    />
                )}
            </div>
            <div className={styles.content_container}>
                <p className={styles.description}>READY TO WEAR</p>
                {title && <h5 className={styles.title}>{title}</h5>}
                <p className={styles.description}>R$450</p>
            </div>
        </Link>
    );
}
