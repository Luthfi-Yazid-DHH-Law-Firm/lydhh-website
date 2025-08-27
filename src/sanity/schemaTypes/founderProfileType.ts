import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const founderProfileType = defineType({
  name: "founderProfile",
  title: "Founder Profile",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: 'summary',
      type: 'blockContent',
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
    }),
  ],
});
