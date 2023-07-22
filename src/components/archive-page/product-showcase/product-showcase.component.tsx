import styles from './product-showcase.module.scss';
// Components
import ZoomableImageGrid from '@components/archive-page/product-showcase/zoomable-image-grid/zoomable-image-grid.component';
import ContrastButton from '@components/ui/button/contrast-button/contrast-button.component';
import TextDescription from './text-description/text-description.component';

interface PageContainerProps {
    productImages: string[] | undefined;
    productDescription?: string;
    title?: string;
    lineup?: string;
    season?: string;
    buttonEnabled?: boolean;
    buttonUrl?: string;
    buttonText?: string[];
}

export default function ProductShowcase({
    productImages,
    productDescription,
    title,
    lineup,
    season,
    buttonEnabled,
    buttonUrl,
    buttonText,
}: PageContainerProps) {
    // Double line break is a paragraph break and single line break is a line break
    const productDescriptionArray = productDescription?.split('\n\n') || [];

    return (
        <section className={styles.container}>
            <ZoomableImageGrid images={productImages ? productImages : []} />

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
                    {season && <p className={styles.season}>{season}</p>}
                </div>

                <div className={styles.button_wrapper}>
                    <ContrastButton enabled={buttonEnabled} href={buttonUrl}>
                        {buttonText?.map((text, index) => (
                            <ContrastButton.label key={index}>{text}</ContrastButton.label>
                        ))}
                    </ContrastButton>
                </div>
            </div>

            <div className={styles.mobile_description}>
                <TextDescription text={productDescriptionArray} />
            </div>
        </section>
    );
}
