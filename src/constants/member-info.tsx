import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot, Slug } from "@/sanity/types";

type MemberContact = {
  phone: string;
  email: string;
};

export type MemberInfoProps = {
  name: string;
  position: string;
  description: string;
  imgUrl: string;
  contact: MemberContact;
};

export const MemberInfo: MemberInfoProps[] = [
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
  {
    name: "Jonson Leo",
    position: "Civil Lawyer",
    description: "With a knack for connecting dots and uncovering trends, Lisa finds unique opportunities for brands to reach consumers in new ways that inspire and motivate them to act.\n Lisa has more than 15 years of agency and client-side experience translating business strategy into integrated, multi-channel marketing communications campaigns for some of the world${&apos;}s most beloved brands.\n She joins us from General Mills, where she was responsible for developing and leading breakthrough campaigns for brands including Pillsbury, Pillsbury Bake-Off Contest, Betty Crocker, Lucky Charms, Cinnamon Toast Crunch, Cheerios and Nature Valley. Her oversight included all aspects of marketing communications and touched nearly every part of the customer journey.\nShe balances her retail brain with her CPG brain, making sure that strategy, creativity and executional excellence are part of every project. She says, “Brands now — more than ever — need a deep understanding of their purpose and target audience, which should inform everything they make, do and say.",
    imgUrl: "",
    contact: {
      phone: "+1 617 572 2000",
      email: "support@lawsight.com",
    },
  },
];

export type MemberProps = {
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
        _type: "image";
    } | null;
    position: string | null;
}