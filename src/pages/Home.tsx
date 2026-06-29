import Seo from '@/components/Seo'
import Marquee from '@/components/Marquee'
import HeroCanvas from '@/sections/home/HeroCanvas'
import Belief from '@/sections/home/Belief'
import Anatomy from '@/sections/home/Anatomy'
import HomeStory from '@/sections/HomeStory'
import Explore from '@/sections/Explore'
import FranchiseTeaser from '@/sections/FranchiseTeaser'
import Visit from '@/sections/Visit'

/** Home as a single scroll-choreographed canvas — paan reimagined as a healthy dessert.
 *  Hero → trust → belief → the healthy dessert → heritage → three worlds → franchise → visit. */
export default function Home() {
  return (
    <>
      <Seo
        title="Mauli — Paan, reimagined as dessert · Family Paan House since 1990"
        description="India's Ayurvedic family paan house since 1990. Sixteen herbs, zero tobacco — paan reimagined as a guilt-free dessert. Gift boxes, Pan-India products, luxury catering & franchise."
      />
      <HeroCanvas />
      <Marquee />
      <Belief />
      <Anatomy />
      <HomeStory />
      <Explore />
      <FranchiseTeaser />
      <Visit />
    </>
  )
}
