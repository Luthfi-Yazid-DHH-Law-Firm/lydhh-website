import FounderProfile from '@/components/templates/about-us/founder-profile'
import HeroSmall from '@/components/templates/hero-small'
import HomepageArticles from '@/components/templates/homepage/homepage-articles'
import MemberList from '@/components/templates/team/member-list'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Team | Luthfi Yazid DHH Law Firm",
  description: "Luthfi Yazid DHH Law Firm focus on delivering best solution to the client's problem and ensuring the highest quality of services. We prepare to offer and to deliver the best services to our clients in an extensive variety of legal areas.",
  keywords: ["law firm", "law", "dhh", "luthfi yazid", "jakarta", "indonesia", "firm", "law firm indonesia"]
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
