import { SanityDocument, Slug } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    data: {
        title: string;
        slug: Slug;
        seasson?: string;
        price?: number;
        released: {
            status: boolean;
            date: string;
        };
        preview_description?: string;
        preview_image_url?: string;
    };
}
