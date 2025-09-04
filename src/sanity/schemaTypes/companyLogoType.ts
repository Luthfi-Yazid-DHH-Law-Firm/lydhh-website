import {AsteriskIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const companyLogoType = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  icon: AsteriskIcon,
  fields: [
    defineField({
      name: 'name',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
