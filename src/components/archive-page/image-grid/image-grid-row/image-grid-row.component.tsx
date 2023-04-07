import styles from './image-grid-row.module.css';
import { useState } from 'react';
import Image from 'next/image';
// Components
import IImageModule from '@models/image-module.interface';

type Layout = 'horizontal-horizontal' | 'horizontal-vertical' | 'vertical-horizontal' | 'vertical-vertical-vertical';

interface ImageGridRowProps {
    layout: Layout;
    imageList?: IImageModule[];
}

export default function ImageGridRow({ layout, imageList }: ImageGridRowProps) {
    const layoutArray = layout.split('-');

    function getGridTemplateColumns(layout: Array<string>) {
        if (layoutArray.every((val, index) => val === ['horizontal', 'horizontal'][index])) {
            return styles.grid_hh;
        } else if (layoutArray.every((val, index) => val === ['horizontal', 'vertical'][index])) {
            return styles.grid_vh;
        } else if (layoutArray.every((val, index) => val === ['vertical', 'horizontal'][index])) {
            return styles.grid_hv;
        } else if (layoutArray.every((val, index) => val === ['vertical', 'vertical', 'vertical'][index])) {
            return styles.grid_vvv;
        }
    }

    return (
        <div className={`${getGridTemplateColumns(layoutArray)} ${styles.grid_wrapper}`}>
            {imageList?.map((imageData, index) => {
                const { url, alt, description } = imageData;

                return (
                    <div key={index} className={styles.image_description_wrapper}>
                        <div
                            className={`${styles.image_wrapper} ${
                                layoutArray[index] === 'vertical' ? styles.vertical : styles.horizontal
                            }`}
                        >
                            <Image
                                fill
                                quality={100}
                                sizes="(max-width: 50rem) 100vw, 50vw" // Estimate the image size for loading performance
                                src={url}
                                alt={alt ? alt : 'Image'}
                                className={styles.image}
                            />
                        </div>
                        <p className={styles.description}>{description}</p>
                    </div>
                );
            })}
        </div>
    );
}
