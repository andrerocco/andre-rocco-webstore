import {RiArchiveLine, RiSettings5Line, RiInformationLine} from 'react-icons/ri'

export const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Archive')
        .icon(RiArchiveLine)
        .child(S.documentTypeList('archive_post').title('Archive')),
      /* S.listItem().title('Products').child(S.documentTypeList('product').title('Products')), */
      S.divider(),
      S.listItem()
        .title('Information')
        .icon(RiInformationLine)
        .child(S.editor().schemaType('information').documentId('information')),
      S.listItem()
        .title('Settings')
        .icon(RiSettings5Line)
        .child(S.editor().schemaType('site_settings').documentId('site_settings')),
      //...S.documentTypeListItems(),
    ])
