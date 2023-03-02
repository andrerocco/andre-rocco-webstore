const archivePost = {
  name: 'archive_post',
  type: 'document',
  title: 'Archive Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'preview_description',
      type: 'text',
      title: 'Preview description',
    },
    {
      name: 'preview_image_url',
      type: 'string',
      title: 'Preview image URL',
    },
  ],
}

export default archivePost
