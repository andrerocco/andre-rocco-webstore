import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
import { queryArchivePostsCover, queryArchivePostsSlugs, queryArchivePostBySlug } from './sanity.queries';

const sanityClient = createClient(clientConfig);

export async function getAllArchivePostsCover() {
    return await sanityClient.fetch(queryArchivePostsCover);
}

/* export async function getAllArchivePosts() {
    return await sanityClient.fetch(queryArchivePosts);
} */

export async function getArchivePostSlugs() {
    return await sanityClient.fetch(queryArchivePostsSlugs);
}

export async function getArchivePostBySlug(slug: string) {
    return await sanityClient.fetch(queryArchivePostBySlug, { slug });
}
