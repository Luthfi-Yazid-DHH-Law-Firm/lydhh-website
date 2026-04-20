import { MEMBER_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import React, { FC } from "react";

interface MemberBioProps {
  member: MEMBER_QUERYResult;
}

// Styled PortableText components matching the site's light theme typography
const bioComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#4a4a4a] text-sm leading-[1.85] mb-5 last:mb-0">
          {children}
        </p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
        <h2 className="text-[#0d1117] text-xl font-medium mt-8 mb-4">{children}</h2>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <h3 className="text-[#0d1117] text-lg font-medium mt-6 mb-3">{children}</h3>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-[#0d1117] text-base font-medium mt-5 mb-2">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="space-y-2 mb-5">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="space-y-2 mb-5">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="flex items-baseline gap-2.5 text-[#4a4a4a] text-sm leading-relaxed">
          <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#c9a84c] opacity-70 mt-[7px]" />
          <span>{children}</span>
        </li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="text-[#0d1117] font-medium">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
        <em className="text-[#5a5a5a] italic">{children}</em>
    ),
  },
};

const MemberBio: FC<MemberBioProps> = ({ member }) => {
  if (!member?.biography) {
    return (
        <p className="text-[#8a8a8a] text-sm italic">No biography provided.</p>
    );
  }

  return (
      <div className="w-full">
        <PortableText
            value={member.biography}
            components={bioComponents as never}
        />
      </div>
  );
};

export default MemberBio;