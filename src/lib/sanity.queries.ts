import { groq } from 'next-sanity';

// TODO - Fix
export const archivePostsCoverQuery = groq`
	*[_type == "archive_post"] | order(released_date desc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		"data": {
			title,
			seasson,
			price,
			preview_description,
			preview_image_url,
		}
	}
`;
