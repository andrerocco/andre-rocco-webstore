import styles from './image-grid.module.css';
// Interfaces
import IImageModule from '@models/image-module.interface';
// Components
import ImageGridRow from './image-grid-row/image-grid-row.component';

type Layout = 'horizontal-horizontal' | 'horizontal-vertical' | 'vertical-horizontal' | 'vertical-vertical-vertical';

interface ImageGridProps {
    data?: {
        layout: Layout;
        images?: IImageModule[];
    }[];
}

export default function ImageGrid({ data }: ImageGridProps) {
    return (
        <div className={styles.container}>
            {data?.map((row, index) => {
                const layout = row.layout;
                const images = row?.images;
                return <ImageGridRow key={index} layout={layout} imageList={images} />;
            })}
        </div>
    );
}
