import SimpleButton from '../button/simple-button/simple-button.component';
import styles from './header.module.css';
// Components
import NavigationBar from './navigation-bar/navigation-bar.component';
import PathNavigator from './path-navigator/path-navigator.component';

export default function Header() {
    return (
        <header className={styles.header}>
            <PathNavigator rootLabel={'ANDRE___ROCCO'} />

            <div className={styles.nav_container}>
                <NavigationBar className={styles.nav}>
                    <NavigationBar.item label="SHOP" path="/" />
                    <NavigationBar.item label="ARCHIVE" path="/archive" />
                    <NavigationBar.item label="ABOUT" path="/about" />
                </NavigationBar>
            </div>

            <aside>
                <SimpleButton label="LOGIN" href="/login" />
            </aside>
        </header>
    );
}
