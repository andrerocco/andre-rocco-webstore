const information = {
  name: 'information',
  type: 'document',
  title: 'Information',
  groups: [
    {
      title: 'Social Media',
      name: 'social_media',
    },
  ],

  fields: [
    {
      name: 'instagram_url',
      type: 'url',
      title: 'Instagram URL',
      group: 'social_media',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tiktok_url',
      type: 'url',
      title: 'TikTok URL',
      group: 'social_media',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}

export default information
