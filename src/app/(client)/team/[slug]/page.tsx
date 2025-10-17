import HeroSmall from "@/components/templates/hero-small";
import MemberProfile from "@/components/templates/team/member-profile";
import { client } from "@/sanity/lib/client";
import { MEMBER_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Our Team | Luthfi Yazid DHH Law Firm",
  description: "JLuthfi Yazid DHH Law Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
};

const options = { next: { revalidate: 60 } };

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const member = await client.fetch(MEMBER_QUERY, resolvedParams, options);

  if (!member) {
    notFound();
  };

  return (
    <>
      <HeroSmall />
      <MemberProfile member={member} />
    </>
  );
};
