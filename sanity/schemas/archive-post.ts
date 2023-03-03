import {defineType} from 'sanity'
// import {defineType, defineField, defineArrayMember} from 'sanity'

const archivePost = defineType({
  name: 'archive_post',
  type: 'document',
  title: 'Archive Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'release_date',
      type: 'date',
      title: 'Release date',
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
})

export default archivePost
