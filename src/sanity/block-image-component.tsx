import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const BlockImageComponent: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
    blockquote: ({value}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        <p>{value.quote}</p>
        {value.author && <cite className="text-sm text-gray-600">— {value.author}</cite>}
      </blockquote>
    ),
  },
};