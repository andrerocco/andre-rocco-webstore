import {RiLayoutColumnLine} from 'react-icons/ri'

const imageRowThreeModule = {
  name: 'image_row_three_module',
  type: 'object',
  title: 'Row - 3 Images',
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
    {
      name: 'image_3_data',
      title: '3. Image data',
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
        list: [{title: 'Horizontal | Horizontal', value: 'vertical-vertical-vertical'}],
        layout: 'radio',
      },
      initialValue: 'vertical-vertical-vertical',
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
    {
      name: 'image3',
      title: 'Image',
      description: 'URL for an Image/GIF.',
      type: 'url',
      fieldset: 'image_3_data',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description3',
      title: 'Description',
      description:
        'Short to medium description of the image (not required, leave blank for no description).',
      type: 'text',
      fieldset: 'image_3_data',
    },
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare(selection: any) {
      const {layout} = selection
      return {
        title: `Row - 3 Images (${layout.replace('-', ', ')})`,
      }
    },
  },
}

export default imageRowThreeModule
