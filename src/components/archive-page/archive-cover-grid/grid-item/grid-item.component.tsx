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
    //console.log('key: ', key, typeof key === 'number' && key < 3 ? true : false);

    return (
        <Link href={href} className={styles.container}>
            <div className={styles.image_container}>
                {imageUrl && (
                    <Image
                        fill
                        sizes="(max-width: 900px) 100vw, (max-width: 1500px) 50vw, 33vw"
                        priority={priority ? priority : false}
                        alt={title}
                        src={imageUrl}
                        className={styles.image}
                        onLoadingComplete={() => {
                            console.log('Image loaded');
                        }}
                    />
                )}
            </div>
            <div className={styles.content_container}>
                <div className={styles.title_container}>
                    <h5 className={styles.title}>{title}</h5>
                    {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
                </div>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </Link>
    );
}
