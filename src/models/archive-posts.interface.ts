import { SanityDocument } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    data: {
        title: string;
        seasson: string;
        price: number;
        release_date: string;
        preview_description: string;
        preview_image_url: string;
    };
}
