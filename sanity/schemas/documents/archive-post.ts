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
        columns: 2,
      },
    },
    {
      name: 'button',
      title: 'Button',
      options: {
        columns: 1,
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
      name: 'subtitle',
      title: 'Subtitle',
      description:
        'Displayed in the post cover/preview (where multiple archive posts are browsed). It can be the price, quantity, etc. Leave it blank for no subtitle.',
      type: 'string',
      group: 'general_information',
    },
    {
      name: 'cover_images',
      title: 'Cover images',
      description:
        'Images that will be displayed in the post cover/preview (where multiple archive posts are browsed).',
      type: 'array',
      of: [
        {
          type: 'url',
          title: 'Image URL',
        },
      ],
      validation: (Rule: any) => Rule.min(1).max(2).required(),
      group: 'general_information',
    },
    // Release information
    {
      name: 'lineup',
      type: 'string',
      title: 'Lineup',
      description: 'The lineup this product belongs to.',
      options: {
        list: [
          {title: 'Mainline', value: 'Mainline'},
          {title: 'Ready to wear', value: 'Ready to wear'},
          {title: 'Archive', value: 'Archive'},
          {title: 'Prototype', value: 'Prototype'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
      group: 'general_information',
      fieldset: 'release_information',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
      description: 'This value is used to sort the list of posts.',
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
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      description: 'The amount of items produced.',
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
    // Button
    {
      name: 'button_enabled',
      title: 'Button available',
      description: 'Set this to true if the button should be clickable.',
      type: 'boolean',
      initialValue: false,
      group: 'general_information',
      fieldset: 'button',
    },
    {
      name: 'redirect_url',
      title: 'Redirect URL',
      description: 'The URL the button will redirect to.',
      type: 'url',
      hidden: ({document}: any) => !document.button_enabled,
      group: 'general_information',
      fieldset: 'button',
    },
    {
      name: 'button_text',
      title: 'Button text',
      description:
        'This is the text that will be shown in the button of the archive product page. Examples of text are "Sold out", "1/1", "Coming soon", etc. Each element of the array will be spaced',
      type: 'array',
      of: [
        {
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.max(2),
      group: 'general_information',
      fieldset: 'button',
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
      date: 'date',
      slug: 'slug',
      imageUrl: 'cover_images', // Add cover_images to select
    },
    prepare(selection: any) {
      const {title, date, slug, imageUrl} = selection // Destructure imageUrl
      return {
        title: title,
        subtitle: `${date.split('-').reverse().join('/')} | ${slug.current}`,
        imageUrl: imageUrl[0], // Add imageUrl to the returned object
      }
    },
  },
}

export default archivePost
