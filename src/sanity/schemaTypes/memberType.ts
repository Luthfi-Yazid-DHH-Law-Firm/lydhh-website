import {UsersIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const memberType = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'biography',
      type: 'blockContent'
    }),
    defineField({
      name: 'background',
      type: 'blockContent'
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
