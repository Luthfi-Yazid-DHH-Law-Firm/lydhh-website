import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companyProfileType = defineType({
  name: "companyProfile",
  title: "Company Profile",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
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
