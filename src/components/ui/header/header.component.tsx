import styles from './header.module.css';
// Components
import NavigationBar from './navigation-bar/navigation-bar.component';
import PathNavigator from './path-navigator/path-navigator.component';

export default function Header() {
    return (
        <header className={styles.header}>
            <PathNavigator rootLabel={'ANDRE___ROCCO'} />
            <NavigationBar>
                <NavigationBar.item label="SHOP" path="/" />
                <NavigationBar.item label="ARCHIVE" path="/archive" />
                <NavigationBar.item label="ABOUT" path="/about" />
            </NavigationBar>
        </header>
    );
}
