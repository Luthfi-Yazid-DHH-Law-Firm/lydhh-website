import { BlockImageComponent } from "@/sanity/block-image-component";
import { client } from "@/sanity/lib/client";
import { SERVICE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 60 } };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const service = await client.fetch(
    SERVICE_QUERY,
    resolvedParams,
    options
  );

  if (!service) {
    notFound();
  };
  
  return (
    <div className="prose max-w-full">
      <h1 className="text-2xl font-bold capitalize">{service?.name || "Service Details"}</h1>
      {service?.description ? (
        <PortableText value={service?.description} components={BlockImageComponent} />
      ) : (
        "No descriptions"
      )}
    </div>
  );
}