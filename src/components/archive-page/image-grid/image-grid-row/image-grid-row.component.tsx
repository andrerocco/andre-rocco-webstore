import styles from './image-grid-row.module.css';
import { useState } from 'react';
import Image from 'next/image';
// Components
import IArchivePageGridImage from '@models/archive-page-image.interface';

type Layout =
    | ['horizontal', 'horizontal']
    | ['horizontal', 'vertical']
    | ['vertical', 'horizontal']
    | ['vertical', 'vertical', 'vertical'];

interface ImageGridRowProps {
    layout: Layout;
    imageList: IArchivePageGridImage[];
    fadeOpacity?: boolean;
    onMouseOverImage?: () => void;
    onMouseLeaveImage?: () => void;
}

export default function ImageGridRow({
    layout,
    imageList,
    fadeOpacity,
    onMouseOverImage,
    onMouseLeaveImage,
}: ImageGridRowProps) {
    const [shownDescriptionIndex, setShownDescriptionIndex] = useState(0); // Will be set to the last hovered image index

    function getGridTemplateColumns(layout: Layout) {
        if (layout.every((val, index) => val === ['horizontal', 'horizontal'][index])) {
            return styles.grid_hh;
        } else if (layout.every((val, index) => val === ['horizontal', 'vertical'][index])) {
            return styles.grid_vh;
        } else if (layout.every((val, index) => val === ['vertical', 'horizontal'][index])) {
            return styles.grid_hv;
        } else if (layout.every((val, index) => val === ['vertical', 'vertical', 'vertical'][index])) {
            return styles.grid_vvv;
        }
    }

    return (
        <div className={styles.container}>
            <div
                className={`${getGridTemplateColumns(layout)} ${
                    fadeOpacity ? `${styles.grid_wrapper} ${styles.fade}` : styles.grid_wrapper
                }`}
            >
                {imageList.map((imageData, index) => {
                    const { url, description } = imageData;

                    return (
                        <div
                            key={index}
                            className={styles.image_container}
                            onMouseOver={() => {
                                onMouseOverImage?.();
                                setShownDescriptionIndex(index);
                            }}
                            onMouseLeave={onMouseLeaveImage}
                        >
                            <div className={styles.image_description_wrapper}>
                                <div
                                    className={`${styles.image_wrapper} ${
                                        layout[index] === 'vertical' ? styles.vertical : styles.horizontal
                                    }`}
                                >
                                    <Image
                                        fill
                                        sizes="(max-width: 50rem) 100vw, 50vw" // Estimate the image size for loading performance
                                        src={url}
                                        alt={description ? description : 'Image'}
                                        className={styles.image}
                                    />
                                </div>
                                <p className={styles.description}>{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.hover_description_container}>
                {imageList.map((imageData, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                index !== shownDescriptionIndex
                                    ? `${styles.hover_description} ${styles.hidden}`
                                    : styles.hover_description
                            }
                        >
                            <span>{imageData.number}. </span>
                            <p>{imageData?.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
