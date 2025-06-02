import FounderProfile from '@/components/templates/about-us/founder-profile'
import HeroSmall from '@/components/templates/hero-small'
import HomepageArticles from '@/components/templates/homepage/homepage-articles'
import MemberList from '@/components/templates/team/member-list'
import React from 'react'

export default function TeamPage() {
  return (
    <>
      <HeroSmall />
      <FounderProfile />
      <MemberList />
      <HomepageArticles />
    </>
  )
}
