import { TabletDeviceIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companyContactType = defineType({
  name: "companyContact",
  title: "Company Contact",
  type: "document",
  icon: TabletDeviceIcon,
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
      name: 'contactAddress',
      type: 'string',
    }),
  ],
});
