import FounderProfile from '@/components/templates/about-us/founder-profile'
import HeroSmall from '@/components/templates/hero-small'
import HomepageArticles from '@/components/templates/homepage/homepage-articles'
import MemberList from '@/components/templates/team/member-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Team | Jakarta International Law Office",
  description: "Jakarta International Law Office focus on delivering best solution to the client’s problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "jilo", "jilolaw", "jakarta", "indonesia"]
};

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
