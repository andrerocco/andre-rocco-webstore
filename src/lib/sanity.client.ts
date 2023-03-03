import { createClient } from 'next-sanity';
import { clientConfig } from './sanity.api';
import { archivePostsCoverQuery } from './sanity.queries';

const sanityClient = createClient(clientConfig);

export async function getAllArchivePostsCover() {
    return await sanityClient.fetch(archivePostsCoverQuery);
}
