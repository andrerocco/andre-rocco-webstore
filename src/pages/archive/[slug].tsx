// Sanity
import { getArchivePostBySlug, getArchivePostSlugs } from '@lib/sanity.client';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import ImageGrid from '@components/archive-page/image-grid/image-grid.component';
import PostIntroduction from '@components/archive-page/post-introduction/post-introduction.component';
import PageContainer from '@components/layout/page-container/page-container.component';

interface props {
    post: IArchivePost;
}

export default function ArchivePost({ post }: props) {
    return (
        <PageContainer>
            <PostIntroduction
                title={post?.data?.season ? `${post?.data?.title}\n${post?.data?.season}` : post?.data?.title}
                description={post?.data?.introduction_description}
            />
            <ImageGrid data={post?.data?.details_grid} />
        </PageContainer>
    );
}

export async function getStaticPaths() {
    const archivePosts = await getArchivePostSlugs();

    return {
        paths: archivePosts.map((post: IArchivePost) => ({
            params: {
                slug: post.slug?.current,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const archivePost = await getArchivePostBySlug(params.slug);

    return {
        props: {
            post: archivePost,
        },
    };
}
