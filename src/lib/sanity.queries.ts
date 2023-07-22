import { groq } from 'next-sanity';

// TODO - Fix
export const queryArchivePostsCover = groq`
	*[_type == "archive_post"] | order(released_date desc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		slug,
		"data": {
			lineup,
			season,
			title,
			subtitle,
			preview_image_url,
		}
	}
`;

// Gets all slugs for 'Archive' posts
export const queryArchivePostsSlugs = groq`
	*[_type == "archive_post"] | order(date desc) {
		_id,
		slug
	}
`;

// Gets a single 'Archive' post by slug with all data
export const queryArchivePostBySlug = groq`
	*[_type == "archive_post" && slug.current == $slug][0] {
		_createdAt, _id, _rev, _type, _updatedAt,
		slug,
		"data": {
			title,
			lineup,
			date,
			price,
			quantity,
			season,
			"button": {
				"enabled": button_enabled,
				"url": redirect_url,
				"text": button_text,
			},
			product_images,
			images_description,
	  }
	}
`;
