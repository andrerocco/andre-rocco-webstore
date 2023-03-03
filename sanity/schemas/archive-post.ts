import {defineType} from 'sanity'
// import {defineType, defineField, defineArrayMember} from 'sanity'

const archivePost = defineType({
  name: 'archive_post',
  type: 'document',
  title: '[Posts] Archive',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'seasson',
      type: 'string',
      title: 'Seasson',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: 'released',
      type: 'boolean',
      title: 'Released',
      initialValue: true,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'released_date',
      description:
        'This value is used to sort the list of posts. If the item is not released, set this date to where you want it to appear in the list.',
      type: 'date',
      title: 'Released date',
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
  preview: {
    select: {
      title: 'title',
      date: 'released_date',
      slug: 'slug',
    },
    prepare(selection) {
      const {title, date, slug} = selection
      return {
        title: title,
        subtitle: `${date.split('-').reverse().join('/')} | ${slug.current}`,
      }
    },
  },
})

export default archivePost
