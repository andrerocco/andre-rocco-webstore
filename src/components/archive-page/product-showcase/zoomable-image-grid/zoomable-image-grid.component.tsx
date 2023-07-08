import styles from './zoomable-image-grid.module.scss';
// Components
import ZoomableImage from '@components/ui/image/zoomable-image/zoomable-image.component';

interface ZoomableImageGridProps {
    images: string[];
}

export default function ZoomableImageGrid({ images }: ZoomableImageGridProps) {
    return (
        <div className={styles.container}>
            {images?.map((url: any, index: number) => (
                <div key={index} className={styles.image_wrapper}>
                    <ZoomableImage src={url} alt="Image" scale={1.75} />
                </div>
            ))}
        </div>
    );
}
