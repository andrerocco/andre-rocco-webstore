import ContrastButton from '@components/ui/button/contrast-button/contrast-button.component';
import styles from './page.module.css';

import { getArchivePostSlugs, getArchivePostBySlug } from '@lib/sanity.client';
import Image from 'next/image';
import ProductShowcaseGrid from '@components/archive-page/product-showcase-grid/product-showcase-grid.component';
import ZoomableImage from '@components/ui/image/zoomable-image/zoomable-image.component';

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getArchivePostBySlug(params.slug);
    const postData = post?.data;

    return (
        <>
            <ProductShowcaseGrid
                productImages={postData?.product_images}
                productDescription={postData?.images_description}
            />

            {/* <div className={styles.container}>
                <div className={styles.left_wrapper}>
                    <div className={styles.showcase_grid}>
                        {postData?.product_images?.map((url: any) => (
                            <div className={styles.image_wrapper}>
                                <Image fill src={url} alt="Image" className={styles.image} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.showcase_description_container}>
                    <div className={styles.showcase_description}>
                        <p>Peça ready-to-wear, envio imediato do produto.</p>
                        <p>
                            1. Tecido encorpado com gramatura de 12Oz
                            <br />
                            2. Caimento baggy com barras largas
                            <br />
                            3. Zipper YKK e botão de ferro
                            <br />
                            4. Efeito de tingimento na peça
                        </p>
                        <p>
                            Peça produzida no Brasil com algodão japonês. O tecido assume um desbotamento natural ao
                            longo do tempo, deixando-o com marcas de uso únicas.
                        </p>
                    </div>
                </div>

                <div className={styles.product_drawer}>
                    <div className={styles.title_container}>
                        <h1 className={styles.title}>Calça Baggy Jeans</h1>
                        <p className={styles.subtitle}>READY TO WEAR</p>
                    </div>
                    <p>Fall Winter 2023</p>
                </div>
                <div className={styles.button_area}>
                    <ContrastButton>
                        <ContrastButton.label>Adicionar ao carrinho</ContrastButton.label>
                        <ContrastButton.label>R$ 450</ContrastButton.label>
                    </ContrastButton>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.product_details}>
                    <p>Materiais</p>
                </div>

                <div style={{ height: '4000px' }}></div>
            </div> */}
        </>
    );
}

export async function generateStaticParams() {
    const archivePosts = await getArchivePostSlugs();

    return archivePosts.map((post: any) => ({
        params: {
            slug: post.slug?.current,
        },
    }));
}
