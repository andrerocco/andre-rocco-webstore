import styles from './archive-cover-grid.module.css';
// Interfaces
import { IArchivePost } from '@models/archive-posts.interface';
// Components
import GridItem from './grid-item/grid-item.component';

interface ComponentProps {
    data?: IArchivePost[];
}

export default function ArchiveCoverGrid({ data }: ComponentProps) {
    return (
        <div className={styles.container}>
            {data?.length != 0 && (
                <div className={styles.grid_wrapper}>
                    {data?.map((post, index) => {
                        console.log(index);
                        return (
                            <GridItem
                                key={post?._id}
                                priority={index < 6 ? true : false}
                                href={`/archive/${post?.data?.slug?.current}`}
                                title={post?.data?.title}
                                subtitle={post?.data?.seasson}
                                description={post?.data?.preview_description}
                                imageUrl={post?.data?.preview_image_url}
                            />
                        );
                    })}
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
