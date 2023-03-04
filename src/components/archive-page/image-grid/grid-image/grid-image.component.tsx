import styles from './grid-image.module.css';
import Image from 'next/image';

interface GridImageProps {
    src: string;
    number: number;
    description?: string;
}

export default function GridImage({ src, number, description = 'Teste de descrição', ...props }: GridImageProps) {
    return (
        <div className={styles.container} {...props}>
            <span>{number}.</span>
            <div className={styles.image_description_container}>
                <div className={styles.image_wrapper}>
                    <Image fill src={src} alt={description} className={styles.image} />
                </div>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
