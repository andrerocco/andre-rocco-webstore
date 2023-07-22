import { Metadata } from 'next';
// Lib
import { getArchivePostSlugs, getArchivePostBySlug } from '@lib/sanity.client';
// Components
import ProductShowcase from '@components/archive-page/product-showcase/product-showcase.component';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';

export const metadata: Metadata = {
    title: 'Archive | ANDRE  ROCCO',
    description: 'Conheça a história das criações através do arquivo virtual de peças.',
};

export default async function Page({ params }: { params: { slug: string } }) {
    const post: IArchivePost = await getArchivePostBySlug(params.slug);
    const postData = post?.data;

    return (
        <ProductShowcase
            productImages={postData?.product_images}
            productDescription={postData?.images_description}
            title={postData?.title}
            season={postData?.season}
            lineup={postData?.lineup}
            buttonEnabled={postData?.button?.enabled}
            buttonUrl={postData?.button?.url}
            buttonText={postData?.button?.text}
        />
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
