import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { articleType } from "./articleType";
import { memberType } from "./memberType";
import { testimonialType } from "./testimonialType";
import { serviceType } from "./servicesType";
import { companyValueType } from "./companyValueType";
import { founderProfileType } from "./founderProfileType";
import { companyProfileType } from "./companyProfileType";
import { companyAddressType } from "./companyAddressType";
import { companyLogoType } from "./companyLogoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    articleType,
    memberType,
    testimonialType,
    serviceType,
    companyValueType,
    founderProfileType,
    companyProfileType,
    companyAddressType,
    companyLogoType,
  ],
};
