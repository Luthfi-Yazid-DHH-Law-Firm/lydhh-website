export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const serviceName = slug.split("-").join(" ");
  return (
    <>
        <h1 className="text-2xl font-bold capitalize">{ serviceName }</h1>
    </>
  )
}
