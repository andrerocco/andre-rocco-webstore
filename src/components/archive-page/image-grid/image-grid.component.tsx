import Image from 'next/image';
import ImageGridRow from './image-grid-row/image-grid-row.component';
import styles from './image-grid.module.css';

export default function ImageGrid() {
    return (
        <div className={styles.container}>
            <ImageGridRow
                layout={['vertical', 'vertical', 'vertical']}
                imageUrlList={[
                    'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0200.jpg?v=1670291975',
                    'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0201_f070f58c-0633-45b6-88d6-ddc301ba1f96.jpg?v=1670291976',
                    'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0201_f070f58c-0633-45b6-88d6-ddc301ba1f96.jpg?v=1670291976',
                ]}
            />
            <ImageGridRow
                layout={['horizontal', 'horizontal']}
                imageUrlList={[
                    'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_4429_1b798b85-96c5-497b-aace-ae94183deb73.jpg?v=1669938597',
                    'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_4426_09c3a7fb-5025-4da0-ae7e-62d0a6b24256.jpg?v=1669938596',
                ]}
            />
        </div>
    );
}
