import styles from './archive-cover-grid.module.css';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import GridItem from './grid-item/grid-item.component';

interface ArchiveCoverGridProps {
    data?: IArchivePost[];
}

export default function ArchiveCoverGrid({ data }: ArchiveCoverGridProps) {
    return (
        <div className={styles.container}>
            {data?.length != 0 && (
                <div className={styles.grid_wrapper}>
                    {data?.map((post, index) => (
                        <GridItem
                            key={post?._id}
                            priority={index < 6 ? true : false}
                            href={`/archive/${post?.slug?.current}`}
                            coverImageUrl={post?.data?.cover_images?.[0]}
                            hoverImageUrl={post?.data?.cover_images?.[1]}
                            title={post?.data?.title ? post?.data?.title : 'No title'}
                            subtitle={post?.data?.subtitle}
                            lineup={post?.data?.lineup}
                            season={post?.data?.season}
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
