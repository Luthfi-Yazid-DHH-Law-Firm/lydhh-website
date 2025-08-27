import { TagIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const companyAddressType = defineType({
  name: "companyAddress",
  title: "Company Address",
  type: "document", // Change this temporarily
  icon: TagIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'geopoint'
    }
  ]
});