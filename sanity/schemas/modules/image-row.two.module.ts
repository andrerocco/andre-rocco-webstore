import {RiLayoutColumnLine} from 'react-icons/ri'

const imageRowTwoModule = {
  name: 'image_row_two_module',
  type: 'object',
  title: 'Row - 2 Images',
  icon: RiLayoutColumnLine,
  fieldsets: [
    {
      name: 'image_1_data',
      title: '1. Image data',
      options: {
        rows: 2,
      },
    },
    {
      name: 'image_2_data',
      title: '2. Image data',
      options: {
        rows: 2,
      },
    },
  ],
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Horizontal | Horizontal', value: 'horizontal-horizontal'},
          {title: 'Horizontal | Vertical', value: 'horizontal-vertical'},
          {title: 'Vertical | Horizontal', value: 'vertical-horizontal'},
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image1',
      title: 'Image',
      description: 'URL for an Image/GIF.',
      type: 'url',
      fieldset: 'image_1_data',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description1',
      title: 'Description',
      description:
        'Short to medium description of the image (not required, leave blank for no description).',
      type: 'text',
      fieldset: 'image_1_data',
    },
    {
      name: 'image2',
      title: 'Image',
      description: 'URL for an Image/GIF.',
      type: 'url',
      fieldset: 'image_2_data',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description2',
      title: 'Description',
      description:
        'Short to medium description of the image (not required, leave blank for no description).',
      type: 'text',
      fieldset: 'image_2_data',
    },
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare(selection: any) {
      const {layout} = selection
      return {
        title: `Row - 2 Images (${layout.replace('-', ', ')})`,
      }
    },
  },
}

export default imageRowTwoModule
