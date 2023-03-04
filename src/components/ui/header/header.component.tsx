import SimpleButton from '../button/simple-button/simple-button.component';
import styles from './header.module.css';
// Icons
import { RiShoppingBagLine, RiHandbagLine, RiUser3Line, RiUserLine, RiSearchLine } from 'react-icons/ri';
// Components
import NavigationBar from './navigation-bar/navigation-bar.component';
import PathNavigator from './path-navigator/path-navigator.component';
import AsideMenu from './aside-menu/aside-menu.component';

export default function Header() {
    return (
        <header className={styles.header}>
            <PathNavigator rootLabel={'ANDRE___ROCCO'} />

            <div className={styles.nav_container}>
                <NavigationBar className={styles.nav}>
                    <NavigationBar.item label="SHOP" path="/" />
                    <NavigationBar.item label="ARCHIVE" path="/archive" />
                    <NavigationBar.item label="ABOUT" path="/about" />
                    <NavigationBar.icon icon={<RiHandbagLine size={'1.1rem'} title={'Cart'} />} path="/cart" />
                    <NavigationBar.icon icon={<RiUser3Line size={'1.1rem'} title={'Account'} />} path="/account" />
                    <NavigationBar.icon icon={<RiSearchLine size={'1.1rem'} title={'Search'} />} path="/account" />
                </NavigationBar>
            </div>

            <AsideMenu />
        </header>
    );
}
