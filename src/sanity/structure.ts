import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('category').title('Categories'),
      S.documentTypeListItem('member').title('Members'),
      S.documentTypeListItem('testimonial').title('Testimonial'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['article', 'category', 'member', 'testimonial'].includes(item.getId()!),
      ),
    ])
