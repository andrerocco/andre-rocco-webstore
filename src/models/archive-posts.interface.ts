import { SanityDocument, Slug, DateDefinition, UrlDefinition } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    slug?: Slug;
    data?: {
        title?: string;
        subtitle?: string; // Shown in the cover below the title
        preview_image_url?: string; // Shown in the cover
        lineup?: string; // Shown in the cover and post information
        date?: DateDefinition;
        price?: number;
        quantity?: number;
        season?: string;
        button?: {
            available?: boolean;
            url?: string;
            text?: string;
        };
        product_images?: UrlDefinition[];
        images_description?: string;
    };
}
