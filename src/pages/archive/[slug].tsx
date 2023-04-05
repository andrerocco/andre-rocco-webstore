import ImageGrid from '@components/archive-page/image-grid/image-grid.component';
import PostIntroduction from '@components/archive-page/post-introduction/post-introduction.component';
import PageContainer from '@components/layout/page-container/page-container.component';

export default function Test() {
    return (
        <PageContainer>
            <PostIntroduction />
            <ImageGrid />
        </PageContainer>
    );
}
