import { SanityDocument, Slug, DateDefinition, UrlDefinition } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    slug?: Slug;
    data?: {
        title?: string;
        subtitle?: string; // Shown in the cover below the title
        cover_images?: string[]; // Shown in the cover
        lineup?: string; // Shown in the cover and post information
        date?: DateDefinition;
        price?: number;
        quantity?: number;
        season?: string;
        button?: {
            enabled?: boolean;
            url?: string;
            text?: string[]; // Array of strings to show in the button
        };
        product_images?: string[]; // Array of images to show in the product section
        images_description?: string;
    };
}
