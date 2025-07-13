import { StarFilledIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const companyValueType = defineType({
  name: "value",
  title: "Company Values",
  type: "document",
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: "value",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "blockContent",
    }),
  ],
});
