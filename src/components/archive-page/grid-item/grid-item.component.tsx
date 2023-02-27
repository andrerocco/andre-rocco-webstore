import styles from './grid-item.module.css';

export default function GridItem() {
    return (
        <div className={styles.container}>
            <img src="https://i.ebayimg.com/images/g/RtkAAOSwbF9j2lZN/s-l1600.jpg" className={styles.image} />
            <div className={styles.title_container}>
                <h5 className={styles.title}>Título do post</h5>
                <span>AW 2022</span>
            </div>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt,
                nisl nisl aliquam libero, vitae lacinia nisl nisl eget nisl. Sed tincidunt, nisl eget ultricies
                tincidunt, nisl nisl aliquam libero, vitae lacinia nisl nisl eget nisl.
            </p>
        </div>
    );
}
