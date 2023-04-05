import ImageGrid from '@components/archive-page/image-grid/image-grid.component';
import PostIntroduction from '@components/archive-page/post-introduction/post-introduction.component';
import PageContainer from '@components/layout/page-container/page-container.component';

export default function Test() {
    return (
        <PageContainer>
            <PostIntroduction
                title={`Aviator Cropped Leather Jacket\nSS2023`}
                description={
                    'A jaqueta de couro é um clássico que nunca sai de moda. Ela é um item essencial no guarda-roupa de qualquer homem, pois é uma peça que combina com qualquer ocasião. Além disso, ela é super versátil e pode ser usada em qualquer estação do ano. A jaqueta de couro é um clássico que nunca sai de moda. Ela é um item essencial no guarda-roupa de qualquer homem, pois é uma peça que combina com qualquer ocasião. Além disso, ela é super versátil e pode ser usada em qualquer estação do ano. A jaqueta de couro é um clássico que nunca sai de moda. Ela é um item essencial no guarda-roupa de qualquer homem, pois é uma peça que combina com qualquer ocasião. Além disso, ela é super versátil e pode ser usada em qualquer estação do ano.'
                }
            />
            <ImageGrid />
        </PageContainer>
    );
}
