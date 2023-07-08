import ZoomableImage from '@components/ui/image/zoomable-image/zoomable-image.component';
import styles from './product-showcase.module.scss';
import Image from 'next/image';
import ZoomableImageGrid from '@components/archive-page/product-showcase/zoomable-image-grid/zoomable-image-grid.component';
import ContrastButton from '@components/ui/button/contrast-button/contrast-button.component';
import TextDescription from './text-description/text-description.component';

interface PageContainerProps {
    productImages: string[];
    productDescription: string;
    title: string;
    lineup?: string;
    season?: string;
}

export default function ProductShowcase({
    productImages,
    productDescription,
    title,
    lineup,
    season,
}: PageContainerProps) {
    // Double line break is a paragraph break and single line break is a line break
    const productDescriptionArray = productDescription?.split('\n\n');

    return (
        <section className={styles.container}>
            <ZoomableImageGrid images={productImages} />

            <div className={styles.description_container}>
                <div className={styles.sticky_description}>
                    <TextDescription text={productDescriptionArray} />
                </div>
            </div>

            <div className={styles.sticky_container}>
                <div className={styles.main_information}>
                    <div className={styles.title}>
                        {lineup && <h2>{lineup}</h2>}
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.season}>{season && <p>{season}</p>}</div>
                </div>

                <div className={styles.button_wrapper}>
                    <ContrastButton enabled={false}>
                        <ContrastButton.label>1/1</ContrastButton.label>
                    </ContrastButton>
                </div>
            </div>

            <div className={styles.mobile_description}>
                <TextDescription text={productDescriptionArray} />
            </div>
        </section>
    );
}
