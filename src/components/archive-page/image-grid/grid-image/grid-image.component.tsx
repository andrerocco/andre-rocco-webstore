import styles from './grid-image.module.css';
import Image from 'next/image';
// Interfaces
import IArchivePageGridImage from '@models/archive-page-image.interface';

export default function GridImage({
    url,
    number,
    description = 'Teste de descrição',
    className,
    ...props
}: IArchivePageGridImage & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className ? `${styles.container} ${className}` : styles.container} {...props}>
            <div className={styles.image_description_container}>
                <div className={styles.image_wrapper}>
                    <Image fill src={url} alt={description} className={styles.image} />
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
