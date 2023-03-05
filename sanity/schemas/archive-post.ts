// import {defineType, defineField, defineArrayMember} from 'sanity'

const archivePost = {
  name: 'archive_post',
  type: 'document',
  title: '[Posts] Archive',
  groups: [
    {name: 'information', title: 'Information', default: true},
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
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
      group: 'information',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule: any) => Rule.required(),
      group: 'information',
    },
    {
      name: 'seasson',
      type: 'string',
      title: 'Seasson',
      group: 'information',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: any) => Rule.min(0),
      group: 'information',
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
    {
      name: 'preview_description',
      type: 'text',
      title: 'Preview description',
      group: 'information',
    },
    {
      name: 'preview_image_url',
      type: 'url',
      title: 'Preview image URL',
      group: 'information',
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
}

export default archivePost
