import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot, Slug } from "@/sanity/types";

export type ArticleType = {
  _id: string;
  title: string | null;
  slug: Slug | null;
  mainImage: {
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
  publishedAt: string | null;
  categories: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }> | null;
};
