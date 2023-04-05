import SimpleButton from '../button/simple-button/simple-button.component';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div></div>
            <ul className={styles.social_media}>
                <SimpleButton label={'Instagram'} href={'https://www.instagram.com/andre___rocco/'} target="_blank" />
                <SimpleButton label={'TikTok'} href={'https://www.tiktok.com/@andre_rocco'} target="_blank" />
            </ul>
        </div>
    );
}
