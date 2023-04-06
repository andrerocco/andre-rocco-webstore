const siteSettings = {
  name: 'site_settings',
  type: 'document',
  title: '[Site] Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This is the title of the site',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This is the description of the site',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default siteSettings
