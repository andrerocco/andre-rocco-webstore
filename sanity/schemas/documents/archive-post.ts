// import {defineType, defineField, defineArrayMember} from 'sanity'

const archivePost = {
  name: 'archive_post',
  type: 'document',
  title: '[Posts] Archive',
  groups: [
    {name: 'general_information', title: 'General information'},
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
      group: 'general_information',
    },
    {
      name: 'title',
      title: 'Title',
      description:
        'Displayed in the post cover/preview (where multiple archive posts are browsed) and used as title for the post introduction.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'general_information',
    },
    {
      name: 'preview_image_url',
      type: 'url',
      title: 'Preview image URL',
      group: 'general_information',
    },
    {
      name: 'lineup',
      type: 'string',
      title: 'Lineup',
      description: 'The lineup this product belongs to.',
      options: {
        list: [
          {title: 'MAINLINE', value: 'Mainline'},
          {title: 'READY TO WEAR', value: 'Ready to wear'},
          {title: 'ARCHIVE', value: 'Archive'},
          {title: 'PROTOTYPE', value: 'Prototype'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
      group: 'general_information',
      fieldset: 'release_information',
    },
    {
      name: 'season',
      type: 'string',
      title: 'Season',
      description: 'The season this product belongs to.',
      group: 'general_information',
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
      group: 'general_information',
      fieldset: 'release_information',
    },
    {
      name: 'released_date',
      type: 'date',
      title: 'Released date',
      description:
        'This value is used to sort the list of posts. If the item is not released, set this date to where you want it to appear in the list.',
      validation: (Rule: any) => Rule.required(),
      group: 'general_information',
      fieldset: 'release_information',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.min(0),
      group: 'general_information',
      fieldset: 'release_information',
    },
    // Content
    {
      name: 'product_images',
      title: 'Product images',
      description: "Images of the product that will be displayed in the product showcase's grid.",
      type: 'array',
      of: [
        {
          type: 'url',
          title: 'Image URL',
        },
      ],
      validation: (Rule: any) => Rule.min(2),
      group: 'content',
    },
    {
      name: 'images_description',
      title: 'Images description',
      description:
        'Description of the images. This will be displayed in the product showcase. Line breaks are reflected in the output and double line will create a new paragraph (text will be inserted in a new <p> element).',
      type: 'text',
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
