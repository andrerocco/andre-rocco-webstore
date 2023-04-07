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
      name: 'images',
      title: 'Images',
      description:
        'Choose the images that will be displayed in the row. The images will be displayed in the selected order.',
      type: 'array',
      of: [{type: 'image_module'}],
      validation: (Rule: any) => Rule.required().min(2).max(2),
    },
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare(selection: any) {
      const {layout} = selection
      return {
        title: `Row - 2 Images (${layout.replaceAll('-', ', ')})`,
      }
    },
  },
}

export default imageRowTwoModule
