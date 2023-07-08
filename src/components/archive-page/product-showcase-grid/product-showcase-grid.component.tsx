import styles from './product-showcase-grid.module.scss';
import Image from 'next/image';

interface PageContainerProps {
    productImages: string[];
    productDescription: string;
}

export default function ProductShowcaseGrid({ productImages, productDescription }: PageContainerProps) {
    // Double line break is a paragraph break and single line break is a line break
    const productDescriptionArray = productDescription?.split('\n\n');

    return (
        <section className={styles.container}>
            <div className={styles.image_grid}>
                {productImages?.map((url: any, index: number) => (
                    <div key={index} className={styles.image_wrapper}>
                        <Image fill src={url} alt="Image" className={styles.image} />
                    </div>
                ))}
            </div>

            <div className={styles.description_container}>
                <div className={styles.description}>
                    {productDescriptionArray &&
                        productDescriptionArray.map((paragraph: string, index: number) => {
                            return (
                                <p key={index} className={styles.paragraph}>
                                    {paragraph}
                                </p>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
