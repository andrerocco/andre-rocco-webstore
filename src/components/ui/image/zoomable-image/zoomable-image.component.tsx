'use client';
import styles from './zoomable-image.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ZoomableImage({ src, scale = 2 }: { src: string; scale: number }) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isZooming, setIsZooming] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const x = event.clientX - containerRect.left;
                const y = event.clientY - containerRect.top;

                if (x < 0 || y < 0 || x > containerRect.width || y > containerRect.height) {
                    // If mouse is outside the container, reset the mouse position to the center of the container
                    setIsZooming(false);
                    setMousePos({
                        x: 0,
                        y: 0,
                    });
                } else {
                    setMousePos({ x, y });
                }
            }
        };

        if (isZooming) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isZooming]);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // If the user clicks on the image, set the mouse position to the click position
        if (!isZooming) {
            const containerRect = containerRef.current?.getBoundingClientRect();
            if (containerRect) {
                const x = event.clientX - containerRect.left;
                const y = event.clientY - containerRect.top;

                setMousePos({ x, y });
            }
        }

        setIsZooming((prevZooming) => !prevZooming);
    };

    return (
        <div
            ref={containerRef}
            className={`${styles.container} ${isZooming ? styles.zooming : ''}`}
            onClick={handleClick}
        >
            <Image
                fill
                src={src}
                alt="Image"
                className={styles.image}
                style={
                    isZooming
                        ? {
                              transform: `scale(${scale})`,
                              transformOrigin: `${mousePos.x}px ${mousePos.y}px`,
                          }
                        : undefined
                }
            />
        </div>
    );
}
