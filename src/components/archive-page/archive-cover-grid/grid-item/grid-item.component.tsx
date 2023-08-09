import Image from 'next/image';
import Link from 'next/link';
import styles from './grid-item.module.css';

interface ComponentProps {
    priority?: boolean;
    href: string;
    coverImageUrl?: string;
    hoverImageUrl?: string;
    title: string;
    subtitle?: string;
    lineup?: string;
    season?: string;
}

export default function GridItem({
    priority,
    href,
    coverImageUrl,
    hoverImageUrl,
    title,
    subtitle,
    lineup,
    season,
}: ComponentProps) {
    return (
        <Link href={href} className={styles.container}>
            <div className={styles.image_container}>
                {hoverImageUrl && (
                    <Image
                        fill
                        sizes="(max-width: 900px) 100vw, (max-width: 1500px) 50vw, 33vw"
                        priority={priority ? priority : false}
                        quality={100}
                        alt={title ? title : 'Image'}
                        src={hoverImageUrl}
                        className={styles.image}
                    />
                )}
                {coverImageUrl && (
                    <Image
                        fill
                        sizes="(max-width: 900px) 100vw, (max-width: 1500px) 50vw, 33vw"
                        priority={priority ? priority : false}
                        quality={100}
                        alt={title ? title : 'Image'}
                        src={coverImageUrl}
                        // If there is a hover image, add the hover_disapear class so that image fades out on hover
                        className={hoverImageUrl ? `${styles.image} ${styles.hover_disapear}` : styles.image}
                    />
                )}
            </div>
            <div className={styles.information_container}>
                <div className={styles.flex}>
                    {lineup && <h2>{lineup}</h2>}
                    {season && <h3>{season}</h3>}
                </div>
                {title && <h1>{title}</h1>}
                {subtitle && <p>{subtitle}</p>}
            </div>
        </Link>
    );
}
