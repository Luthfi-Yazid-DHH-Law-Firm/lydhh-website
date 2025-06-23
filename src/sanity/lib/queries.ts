import {defineQuery} from 'next-sanity'

export const MEMBERS_QUERY = defineQuery(`*[_type == "member" && defined(slug.current)][0...6]{
  _id, name, slug, image, position
}`)

export const MEMBERS_NO_FOUNDER_QUERY=defineQuery(`*[_type == "member" && position != "Founder"]{
  _id,
  name,
  image,
  position,
  slug,
}`)

export const MEMBER_QUERY = defineQuery(`*[_type == "member" && slug.current == $slug][0]{
  bio,
  image,
  name,
  position,
  slug
}`)

export const ARTICLES_QUERY = defineQuery(`*[_type == "article" && defined(slug.current)][0...6]{
  _id, title, slug, mainImage, publishedAt, categories
}`)

export const ARTICLE_QUERY = defineQuery(`*[_type == "article" && slug.current == $slug][0]{
  title,
  mainImage,
  body,
  categories,
  slug,
  publishedAt
}`)

export const SERVICES_QUERY = defineQuery(`*[_type == "services" && defined(slug.current)][0...6]{
  _id, name, slug, image, position
}`)

export const ALL_SERVICES_QUERY = defineQuery(`*[_type == "services" && defined(slug.current)]{
  _id, name, slug, image, position
}`)

export const SERVICE_QUERY = defineQuery(`*[_type == "services" && slug.current == $slug][0]{
  name,
  image,
  description,
  slug,
}`)