import styles from './image-grid.module.css';
import { useState } from 'react';
import Image from 'next/image';
// Components
import ImageGridRow from './image-grid-row/image-grid-row.component';

export default function ImageGrid() {
    const [isHoveringImage, setIsHoveringImage] = useState(false); // Will be set to true if any image is beeing hovered

    return (
        <div className={styles.container}>
            <ImageGridRow
                layout={['vertical', 'vertical', 'vertical']}
                imageList={[
                    {
                        url: 'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0200.jpg?v=1670291975',
                        description: 'Jaqueta de couro possui botões.',
                        number: 1,
                    },
                    {
                        url: 'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0201_f070f58c-0633-45b6-88d6-ddc301ba1f96.jpg?v=1670291976',
                        description:
                            'A parte de trás possui ajuste para permitir a movimentação livre. Isso permite que não haja dureza para fazer movimentos maiores.',
                        number: 2,
                    },
                    {
                        url: 'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_0201_f070f58c-0633-45b6-88d6-ddc301ba1f96.jpg?v=1670291976',
                        description: 'Cinto de couro com fivela de metal.',
                        number: 3,
                    },
                ]}
            />
            <ImageGridRow
                layout={['horizontal', 'horizontal']}
                imageList={[
                    {
                        url: 'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_4429_1b798b85-96c5-497b-aace-ae94183deb73.jpg?v=1669938597',
                        description: 'Jaqueta de couro possui botões.',
                        number: 4,
                    },
                    {
                        url: 'https://cdn.shopify.com/s/files/1/0527/0362/5380/products/IMG2_4426_09c3a7fb-5025-4da0-ae7e-62d0a6b24256.jpg?v=1669938596',
                        description: 'A parte de trás possui ajuste para permitir a movimentação livre.',
                        number: 5,
                    },
                ]}
            />
        </div>
    );
}
