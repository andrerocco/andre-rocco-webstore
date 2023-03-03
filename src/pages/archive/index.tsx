// Sanity
import { createClient } from 'next-sanity';
import { getAllArchivePosts } from '@lib/sanity.client';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import PageContainer from '@components/layout/page-container/page-container.component';
import ArchiveGrid from '@components/archive-page/archive-grid/archive-grid.component';

interface props {
    archivePosts: IArchivePost[];
}

export default function Archive({ archivePosts }: props) {
    return (
        <PageContainer title="Archive | ANDRE⠀⠀ROCCO™">
            <ArchiveGrid data={archivePosts} />
        </PageContainer>
    );
}

export async function getStaticProps() {
    // const archivePosts = [{}];
    const archivePosts = await getAllArchivePosts();

    return {
        props: {
            archivePosts,
        },
    };
}
