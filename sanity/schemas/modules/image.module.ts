/* TODO - Remove unused */
const imageModule = {
  name: 'image_module',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt',
      description: 'Alternative text for the image, used for accessibility.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Not required, leave blank for no description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'url',
      alt: 'alt',
      description: 'description',
      imageUrl: 'url',
    },
    prepare({title, alt, description, imageUrl}: any) {
      return {
        title,
        subtitle: description ? `${alt} | ${description}` : alt,
        imageUrl,
      }
    },
  },
}

export default imageModule
