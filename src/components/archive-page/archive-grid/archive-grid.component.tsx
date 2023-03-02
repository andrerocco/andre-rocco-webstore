import styles from './archive-grid.module.css';
// Components
import GridItem from '../grid-item/grid-item.component';

export default function ArchiveGrid() {
    return (
        <div className={styles.container}>
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    );
}
