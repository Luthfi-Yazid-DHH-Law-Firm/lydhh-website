import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {articleType} from './articleType'
import {memberType} from './memberType'
import { testimonialType } from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, articleType, memberType, testimonialType],
}
