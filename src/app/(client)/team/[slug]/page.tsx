import HeroSmall from '@/components/templates/hero-small';
import MemberProfile from '@/components/templates/team/member-profile';
import React from 'react'

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
  return (
    <>
        <HeroSmall />
        <MemberProfile />
        
    </>
  );
};