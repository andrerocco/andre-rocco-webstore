// import {defineType, defineField, defineArrayMember} from 'sanity'

const archivePost = {
  name: 'archive_post',
  type: 'document',
  title: '[Posts] Archive',
  groups: [
    {name: 'information', title: 'Information'},
    {name: 'content', title: 'Content'},
  ],
  fieldsets: [
    {
      name: 'release_information',
      title: 'Release information',
      options: {
        rows: 2,
        columns: 2,
      },
    },
  ],
  fields: [
    // Information
    {
      name: 'slug',
      title: 'Slug',
      description:
        'Value used to create the URL of the post. It should be unique and not contain any special characters.',
      type: 'slug',
      validation: (Rule: any) => Rule.required(),
      group: 'information',
    },
    {
      name: 'title',
      title: 'Title',
      description:
        'Displayed in the post cover/preview (where multiple archive posts are browsed) and used as title for the post introduction.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'information',
    },

    {
      name: 'preview_description',
      title: 'Preview description',
      description:
        'This description will be displayed in the post cover/previews (where multiple archive posts are browsed). Paragraphs inserted here are translated into line breaks in the preview.',
      type: 'text',
      group: 'information',
    },
    {
      name: 'preview_image_url',
      type: 'url',
      title: 'Preview image URL',
      group: 'information',
    },
    {
      name: 'season',
      type: 'string',
      title: 'Season',
      group: 'information',
      fieldset: 'release_information',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.min(0),
      group: 'information',
      fieldset: 'release_information',
    },
    {
      name: 'released',
      type: 'boolean',
      title: 'Released',
      description:
        'If your item is not yet released, set this to false. This will hide any release related information from the post.',
      initialValue: true,
      validation: (Rule: any) => Rule.required(),
      group: 'information',
      fieldset: 'release_information',
    },
    {
      name: 'released_date',
      type: 'date',
      title: 'Released date',
      description:
        'This value is used to sort the list of posts. If the item is not released, set this date to where you want it to appear in the list.',
      validation: (Rule: any) => Rule.required(),
      group: 'information',
      fieldset: 'release_information',
    },
    // Content
    {
      name: 'introduction_description',
      title: 'Introduction description',
      description:
        'This description will be displayed in the post introduction. Paragraphs inserted here are translated into line breaks in the introduction.',
      type: 'text',
      group: 'content',
    },
    {
      name: 'details_grid',
      title: 'Image grid',
      description:
        'This array of modules will be transformed into a grid of images where each row correlates to a module (in order). Set and 2-3 images per row with its respective description.',
      type: 'array',
      of: [{type: 'image_row_two_module'}, {type: 'image_row_three_module'}],
      group: 'content',
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'released_date',
      slug: 'slug',
      imageUrl: 'preview_image_url', // Add preview_image_url to select
    },
    prepare(selection: any) {
      const {title, date, slug, imageUrl} = selection // Destructure imageUrl
      return {
        title: title,
        subtitle: `${date.split('-').reverse().join('/')} | ${slug.current}`,
        imageUrl: imageUrl, // Add imageUrl to the returned object
      }
    },
  },
}

export default archivePost
