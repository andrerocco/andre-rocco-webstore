import styles from './dropdown-button.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface DropdownButtonProps {
    label: string;
    className?: string;
    labelStyles?: React.CSSProperties;
    listStyles?: React.CSSProperties;
    children?: React.ReactNode;
}

export default function DropdownButton({ label, className, labelStyles, listStyles, children }: DropdownButtonProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Close the menu when the user navigates to a new page
        if (isOpen) {
            setIsOpen(false);
        }
    }, [router.asPath]);

    return (
        <div className={className ? `${styles.container} ${className}` : styles.container}>
            <a className={styles.label} onClick={() => setIsOpen(!isOpen)} style={labelStyles}>
                {label}
            </a>
            <ul className={isOpen ? `${styles.list} ${styles.open}` : `${styles.list}`} style={listStyles}>
                {React.Children.map(children, (child) => {
                    return <li>{child}</li>;
                })}
            </ul>
        </div>
    );
}
