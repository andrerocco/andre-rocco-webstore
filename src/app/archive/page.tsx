import { Metadata } from 'next';
// Sanity
import { getAllArchivePostsCover } from '@lib/sanity.client';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import ArchiveCoverGrid from '@components/archive-page/archive-cover-grid/archive-cover-grid.component';

export const metadata: Metadata = {
    title: 'Archive | ANDRE⠀⠀ROCCO',
    description: 'Navegue pelo arquivo de Andre Rocco e descubra os últimos lançamentos, projetos e criações.',
};

export default async function Page() {
    const archivePosts: IArchivePost[] = await getAllArchivePostsCover();

    return <ArchiveCoverGrid data={archivePosts} />;
}
