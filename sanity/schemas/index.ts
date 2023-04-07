// Documents
import archivePost from './documents/archive-post'
// Singleton documents
import information from './singletons/information'
import siteSettings from './singletons/site-settings'
// Modules
import imageRowTwoModule from './modules/image-row.two.module'
import imageRowThreeModule from './modules/image-row.three.module'

export const schemaTypes = [
  // Documents
  archivePost,

  // Singleton documents
  siteSettings,
  information,

  // Modules
  imageRowTwoModule,
  imageRowThreeModule,
]
