import { TagIcon } from "@sanity/icons";
import { defineType } from "sanity";

export const companyAddressType = defineType({
  name: "companyAddress",
  title: "Company Address",
  type: "document",
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
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
  ]
});