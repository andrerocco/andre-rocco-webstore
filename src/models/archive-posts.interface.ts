import { SanityDocument, Slug, UrlDefinition } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    slug?: Slug;
    data?: {
        title?: string;
        season?: string;
        price?: string;
        released?: boolean;
        released_date?: string;
        introduction_description?: string;
        preview_description?: string;
        preview_image_url?: string;
        details_grid?: {
            layout:
                | 'vertical-vertical-vertical'
                | 'horizontal-horizontal'
                | 'horizontal-vertical'
                | 'vertical-horizontal';
            images?: {
                url: string;
                alt: string;
                description?: string;
            }[];
        }[];
    };
}
