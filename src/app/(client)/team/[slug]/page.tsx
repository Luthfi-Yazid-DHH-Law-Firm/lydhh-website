import HeroSmall from '@/components/templates/hero-small';
import MemberProfile from '@/components/templates/team/member-profile';
import { client } from '@/sanity/lib/client';
import { MEMBER_QUERY } from '@/sanity/lib/queries';

const options = { next: { revalidate: 60 } };

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
    const member = await client.fetch(
      MEMBER_QUERY, 
      params = await params, 
      options,
    );
    
  return (
    <>
        <HeroSmall />
        <MemberProfile member={member} />
        
    </>
  );
};