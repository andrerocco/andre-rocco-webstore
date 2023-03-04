import Image from 'next/image';
import styles from './image-grid-row.module.css';
// Components
import GridImage from '../grid-image/grid-image.component';

type Layout =
    | ['horizontal', 'horizontal']
    | ['horizontal', 'vertical']
    | ['vertical', 'horizontal']
    | ['vertical', 'vertical', 'vertical'];

interface ImageGridRowProps {
    layout: Layout;
    imageUrlList: string[];
}

export default function ImageGridRow({ layout, imageUrlList }: ImageGridRowProps) {
    function getGridTemplateColumns(layout: Layout) {
        let string = '';
        layout.forEach((type) => {
            if (type === 'horizontal') {
                string += '2.02fr ';
            } else if (type === 'vertical') {
                string += '1fr ';
            }
        });
        return string;
    }

    return (
        <div className={styles.container} style={{ gridTemplateColumns: getGridTemplateColumns(layout) }}>
            {imageUrlList.map((image, index) => {
                return <GridImage key={index} number={index + 1} src={image} />;
            })}
        </div>
    );
}
