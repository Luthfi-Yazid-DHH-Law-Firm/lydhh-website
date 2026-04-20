import { client } from "@/sanity/lib/client";
import { SERVICE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const options = { next: { revalidate: 60 } };

// Reusable section heading with gold left bar
const SectionHeading = ({ children }: { children?: React.ReactNode }) => (
    <h2 className="flex items-center gap-2 text-[#0d1117] text-[15px] font-medium mt-8 mb-4 pb-2.5 border-b border-[#c9a84c]/15">
      <span className="flex-shrink-0 w-[3px] h-[14px] bg-gradient-to-b from-[#c9a84c] to-[#a98e16] rounded-full" />
      {children}
    </h2>
);

// Styled PortableText components for the service description
const serviceComponents = {
  types: {
    image: ({
              value,
            }: {
      value: { asset?: object; alt?: string; caption?: string };
    }) => {
      if (!value?.asset) return null;
      return (
          <figure className="my-7">
            <div className="relative overflow-hidden">
              <Image
                  src={urlFor(value).auto("format").url()}
                  alt={value.alt ?? "Service image"}
                  width={720}
                  height={480}
                  className="w-full h-auto object-cover"
                  style={{ filter: "brightness(0.97)" }}
              />
              {/* Subtle gold bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c9a84c]/60 via-[#c9a84c]/20 to-transparent" />
            </div>
            {value.caption && (
                <figcaption className="mt-2.5 text-center text-[#8a8a8a] text-[11.5px] italic">
                  {value.caption}
                </figcaption>
            )}
          </figure>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="text-[#4a4a4a] text-[13.5px] leading-[1.85] mb-5 last:mb-0">
          {children}
        </p>
    ),
    h1: ({ children }: { children?: React.ReactNode }) => (
        <SectionHeading>{children}</SectionHeading>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
        <SectionHeading>{children}</SectionHeading>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
        <h4 className="text-[#0d1117] text-[14px] font-medium mt-6 mb-3">
          {children}
        </h4>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="space-y-2.5 mb-5">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="space-y-2.5 mb-5 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="flex items-baseline gap-2.5 text-[#4a4a4a] text-[13.5px] leading-relaxed">
          <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#c9a84c] opacity-70 mt-[7px]" />
          <span>{children}</span>
        </li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
        <li className="text-[#4a4a4a] text-[13.5px] leading-relaxed">{children}</li>
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

export default async function ServiceDetailPage({
                                                  params,
                                                }: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = await client.fetch(SERVICE_QUERY, resolvedParams, options);

  if (!service) notFound();

  return (
      <div className="w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 mb-6 text-[11px] text-[#8a8a8a]">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">
            Home
          </Link>
          <span className="text-[#c9a84c]">›</span>
          <Link href="/practice-areas" className="hover:text-[#c9a84c] transition-colors">
            Practice Areas
          </Link>
          <span className="text-[#c9a84c]">›</span>
          <span className="text-[#c9a84c]">{service.name}</span>
        </nav>

        {/* Header */}
        <p className="text-[#c9a84c] text-[10px] tracking-[0.22em] uppercase font-medium mb-2">
          Practice Area
        </p>
        <h1 className="text-[#0d1117] text-3xl font-light leading-snug mb-3">
          {service.name ?? "Service Details"}
        </h1>
        <div className="w-9 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#a98e16] rounded mb-8" />

        {/* Content */}
        {service.description ? (
            <PortableText
                value={service.description}
                components={serviceComponents as never}
            />
        ) : (
            <p className="text-[#8a8a8a] text-sm italic">No description available.</p>
        )}
      </div>
  );
}