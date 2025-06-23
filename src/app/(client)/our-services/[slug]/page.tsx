import { BlockImageComponent } from "@/sanity/block-image-component";
import { client } from "@/sanity/lib/client";
import { SERVICE_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

const options = { next: { revalidate: 60 } };

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await client.fetch(
    SERVICE_QUERY,
    params = await params,
    options
  );
  console.log(service);
  
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