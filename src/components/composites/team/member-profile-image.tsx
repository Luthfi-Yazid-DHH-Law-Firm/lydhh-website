import { urlFor } from "@/sanity/lib/image";
import { SanityImageType } from "@/types/sanity-image-type";
import Image from "next/image";
import React, { FC } from "react";

interface MemberProfileImageProps {
  image: SanityImageType;
  name?: string | null;
  position?: string | null;
}

const MemberProfileImage: FC<MemberProfileImageProps> = ({
  image,
  name,
  position,
}) => {
  return (
    <div className="w-full md:w-80">
      {image ? (
        <Image
          src={urlFor(image).auto("format").url()}
          alt="member-image"
          width={320}
          height={384}
          className="w-full h-96 object-cover"
        />
      ) : (
        <Image
          className="w-full h-96 object-cover"
          src="/images/Placeholder_Person.jpg"
          alt={name ?? "Placeholder Person"}
          width={320}
          height={384}
        />
      )}
      <div className="w-full flex flex-col items-center justify-center p-5 bg-linear-to-r from-[#D5AA6D] to-[#9B6F45] text-white text-center">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default MemberProfileImage;
