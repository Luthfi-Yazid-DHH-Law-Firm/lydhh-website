import { urlFor } from "@/sanity/lib/image";
import { SanityImageType } from "@/types/sanity-image-type";
import Image from "next/image";
import { FC } from "react";

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
      <div className="relative w-full lg:w-[320px] flex-shrink-0">
        {/* Gold corner brackets */}
        <div className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-[#c9a84c]/60 z-10 pointer-events-none" />
        <div className="absolute -right-2 z-10 pointer-events-none"
             style={{ bottom: "calc(72px - 8px)" }}
        >
          <div className="w-10 h-10 border-b border-r border-[#c9a84c]/60" />
        </div>

        {/* Photo */}
        {image ? (
            <Image
                src={urlFor(image).auto("format").url()}
                alt={name ?? "Member"}
                width={320}
                height={380}
                className="w-full h-[380px] object-cover object-top"
                style={{ filter: "brightness(0.95) contrast(1.02)" }}
            />
        ) : (
            <Image
                src="/images/Placeholder_Person.jpg"
                alt={name ?? "Member"}
                width={320}
                height={380}
                className="w-full h-[380px] object-cover object-top"
            />
        )}

        {/* Dark name plate */}
        <div className="bg-[#0d1117] px-5 py-4 border-t-2 border-[#c9a84c]">
          <p className="text-[#c9a84c] text-[9.5px] tracking-[0.18em] uppercase font-medium mb-1.5">
            {position ?? "Team Member"}
          </p>
          <h3 className="text-white text-[15px] font-medium leading-snug">
            {name}
          </h3>
        </div>
      </div>
  );
};

export default MemberProfileImage;