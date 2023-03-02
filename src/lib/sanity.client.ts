import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
import { archivePostsQuery } from './sanity.queries';

const sanityClient = createClient(clientConfig);

export async function getAllArchivePosts() {
    return await sanityClient.fetch(archivePostsQuery);
}
