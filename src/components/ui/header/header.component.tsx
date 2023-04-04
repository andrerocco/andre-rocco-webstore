import styles from './header.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// Components
import PathNavigator from './path-navigator/path-navigator.component';
import HamburgerMenu from './hamburger-menu/hamburger-menu.component';
import NavItem from './nav-item/nav-item.component';
import DropdownButton from '../button/dropdown-button/dropdown-button.component';
import SimpleButton from '../button/simple-button/simple-button.component';

export default function Header() {
    return (
        <header className={styles.header}>
            <PathNavigator rootLabel={'ANDRE___ROCCO'} />

            <ul className={styles.nav_list}>
                <NavItem label={'Shop'} labelHref={'/shop'} />
                <NavItem label={'Archive'} labelHref={'/archive'} />
                <NavItem label={'About'} labelHref={'/about'} />
            </ul>

            <HamburgerMenu className={styles.hamburger}>
                <div className={styles.dropdown_wrapper}>
                    <DropdownButton
                        label={'Shop'}
                        listStyles={{
                            width: '100%',
                            textAlign: 'right',
                        }}
                    >
                        <SimpleButton label={'Primeiro'} href={'/primeiro'} />
                        <SimpleButton label={'Segundo'} href={'/segundo'} />
                        <SimpleButton label={'Terceiro'} href={'/terceiro'} />
                    </DropdownButton>
                    <SimpleButton label={'Archive'} href={'/archive'} />
                    <SimpleButton label={'About'} href={'/about'} />
                </div>
            </HamburgerMenu>
        </header>
    );
}
