// Sanity
import { getAllArchivePostsCover } from '@lib/sanity.client';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ArchiveCoverGrid from '@components/archive-page/archive-cover-grid/archive-cover-grid.component';

interface props {
    archivePosts: IArchivePost[];
}

export default function Archive({ archivePosts }: props) {
    return (
        <PageContainer.animated title="Archive | ANDRE⠀⠀ROCCO™">
            <ArchiveCoverGrid data={archivePosts} />
        </PageContainer.animated>
    );
}

export async function getStaticProps() {
    const archivePosts = await getAllArchivePostsCover();

    return {
        props: {
            archivePosts,
        },
    };
}
