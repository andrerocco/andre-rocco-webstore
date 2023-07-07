import { groq } from 'next-sanity';

// TODO - Fix
//
export const queryArchivePostsCover = groq`
	*[_type == "archive_post"] | order(released_date desc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		slug,
		"data": {
			title,
			season,
			price,
			preview_description,
			preview_image_url,
		}
	}
`;

/* // Gets all 'Archive' posts with all data
export const queryArchivePosts = groq`
	*[_type == "archive_post"] | order(released_date desc) {
		_createdAt, _id, _rev, _type, _updatedAt,
		slug,
		"data": {
			title,
			lineup,
			price,
			"released": {
				"status": released,
				released_date,
			},
			product_images,
			images_description,
		}
	}
`; */

// Gets all slugs for 'Archive' posts
export const queryArchivePostsSlugs = groq`
	*[_type == "archive_post"] | order(released_date desc) {
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
			seasson,
			price,
			"released": {
				"status": released,
				released_date,
			},
			product_images,
			images_description,
	  }
	}
`;
