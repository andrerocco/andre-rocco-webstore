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
        list: [{title: 'Vertical | Vertical | Vertical', value: 'vertical-vertical-vertical'}],
        layout: 'radio',
      },
      initialValue: 'vertical-vertical-vertical',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      description:
        'Choose the images that will be displayed in the row. The images will be displayed in the selected order.',
      type: 'array',
      of: [{type: 'image_module'}],
      validation: (Rule: any) => Rule.required().min(3).max(3),
    },
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare(selection: any) {
      const {layout} = selection
      return {
        title: `Row - 3 Images (${layout.replaceAll('-', ', ')})`,
      }
    },
  },
}

export default imageRowThreeModule
