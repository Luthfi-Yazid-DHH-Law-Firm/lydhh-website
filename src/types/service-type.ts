import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot, Slug } from "@/sanity/types";

export type ServiceType = {
  _id: string;
  name: string | null;
  slug: Slug | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  position: null;
};
