// Documents
import archivePost from './documents/archive-post'
// Singleton documents
import information from './singletons/information'
import siteSettings from './singletons/site-settings'
// Modules
import imageModule from './modules/image.module'

export const schemaTypes = [
  // Documents
  archivePost,

  // Singleton documents
  siteSettings,
  information,

  // Modules
  imageModule,
]
