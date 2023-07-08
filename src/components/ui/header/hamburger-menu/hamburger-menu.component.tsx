'use client';
import styles from './hamburger-menu.module.css';
import { useEffect, useState } from 'react';
import { Squash as Hamburger } from './hamburger-icon/squash-hamburger.component';
import { usePathname } from 'next/navigation';

interface HamburgerMenuProps {
    className?: string;
    children: React.ReactNode;
}

export default function HamburgerMenu({ className, children }: HamburgerMenuProps) {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        // Close the menu when the user navigates pages
        if (isOpen) {
            setIsOpen(false);
        }
    }, [path]);

    return (
        <div className={className ? `${styles.container} ${className}` : styles.container}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} label="Show menu" size={16} area={18} />
            <div className={isOpen ? `${styles.dropdown_container} ${styles.active}` : styles.dropdown_container}>
                <div className={isOpen ? `${styles.dropdown_wrapper} ${styles.active}` : styles.dropdown_wrapper}>
                    {children}
                </div>
            </div>
        </div>
    );
}
