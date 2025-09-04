import { defineQuery } from "next-sanity";

export const MEMBERS_QUERY =
  defineQuery(`*[_type == "member" && defined(slug.current)] | order(position)[0...6]{
  _id, name, slug, image, position
}`);

export const MEMBERS_NO_FOUNDER_QUERY =
  defineQuery(`*[_type == "member" && position != "Founder"] | order(position){
  _id,
  name,
  image,
  position,
  slug,
}`);

export const MEMBER_QUERY =
  defineQuery(`*[_type == "member" && slug.current == $slug][0]{
  bio,
  image,
  name,
  position,
  slug
}`);

export const FOUNDER_PROFILE =
  defineQuery(`*[_type == "founderProfile"][0]{
  name,
  mainImage,
  slug,
  summary,
  description
}`);

export const ARTICLES_QUERY =
  defineQuery(`*[_type == "article" && defined(slug.current)][0...6]{
  _id, title, slug, mainImage, publishedAt, categories
}`);

export const ARTICLES_PAGINATED_QUERY =
  defineQuery(`*[_type == "article" && defined(slug.current)
    && ($search == null || lower(title) match lower($search) + "*")
    && ($category == null || $category in categories[]->slug.current)] | order(publishedAt desc) [0...$end]{
  _id, title, slug, mainImage, publishedAt, categories
}`);

export const ARTICLE_QUERY =
  defineQuery(`*[_type == "article" && slug.current == $slug][0]{
  title,
  mainImage,
  body,
  categories,
  slug,
  publishedAt
}`);

export const ARTICLES_COUNT_QUERY = defineQuery(
  `count(*[_type == "article" && defined(slug.current)
  && ($search == null || lower(title) match lower($search) + "*" || lower(pt::text(body)) match lower($search) + "*")
  && ($category == null || $category in categories[]->slug.current)])`
);

export const SERVICES_QUERY =
  defineQuery(`*[_type == "services" && defined(slug.current)][0...8]{
  _id, name, slug, image, position
}`);

export const ALL_SERVICES_QUERY =
  defineQuery(`*[_type == "services" && defined(slug.current)]{
  _id, name, slug, image, position
}`);

export const SERVICE_QUERY =
  defineQuery(`*[_type == "services" && slug.current == $slug][0]{
  name,
  image,
  description,
  slug,
}`);

export const ALL_CATEGORY_QUERIES =
  defineQuery(`*[_type == "category" && defined(slug.current)]{
  _id, slug, title
}`);

export const COMPANY_VALUES_QUERY = defineQuery(
  `*[_type == "value" && defined(value)] | order(_createdAt asc)`
);

export const COMPANY_PROFILE_QUERY =
  defineQuery(`*[_type == "companyProfile" && slug.current == "about-us"][0]{
  title,
  slug,
  summary,
  description
}`);

export const COMPANY_ADDRESSES_QUERY =
  defineQuery(`*[_type == "companyAddress"]{
  name, location, email, phone
}`);

export const COMPANY_LOGO_QUERY =
  defineQuery(`*[_type == "logo" && slug.current == $slug][0]{
  name, slug, image
}`);