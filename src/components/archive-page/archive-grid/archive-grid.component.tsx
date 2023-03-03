import styles from './archive-grid.module.css';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import GridItem from '../grid-item/grid-item.component';

interface ComponentProps {
    data?: IArchivePost[];
}

export default function ArchiveGrid({ data }: ComponentProps) {
    console.log(data);

    return (
        <div className={styles.container}>
            {data && (
                <div className={styles.grid_wrapper}>
                    {data.map((post) => (
                        <GridItem
                            key={post._id}
                            title={post?.data?.title}
                            description={post?.data?.preview_description}
                            imageUrl={post?.data?.preview_image_url}
                        />
                    ))}
                </div>
            )}
            {data?.length == 0 && (
                <div className={styles.no_posts}>
                    <p>There are no posts in this category.</p>
                </div>
            )}
        </div>
    );
}
