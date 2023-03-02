import { groq } from 'next-sanity';

// TODO - Fix
export const archivePostsQuery = groq`
	*[_type == "archive_post"]{
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {preview_description, preview_image_url, title}
	}
`;
