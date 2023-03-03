import { SanityDocument } from '@sanity/types';

export interface IArchivePost extends SanityDocument {
    data: { title: string; preview_description: string; preview_image_url: string };
}
