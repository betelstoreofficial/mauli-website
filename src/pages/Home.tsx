import Seo from '@/components/Seo'
import Marquee from '@/components/Marquee'
import Hero from '@/sections/Hero'
import HomeStory from '@/sections/HomeStory'
import Explore from '@/sections/Explore'
import Testimonials from '@/sections/Testimonials'
import FranchiseTeaser from '@/sections/FranchiseTeaser'
import Visit from '@/sections/Visit'

/** A single, continuous brand narrative — distinct from the catalog pages.
 *  Hero → trust → what Mauli means & heritage → wellness → craft → explore → proof → franchise → visit. */
export default function Home() {
  return (
    <>
      <Seo
        title="Mauli — Family Paan House · Dinner is not complete without a paan"
        description="India's first OG family paan house since 1990. Premium Ayurvedic paan — 16 herbs, no tobacco — crafted fresh. Gift boxes, Pan-India products, luxury catering & franchise."
      />
      <Hero />
      <Marquee />
      <HomeStory />
      <Explore />
      <Testimonials />
      <FranchiseTeaser />
      <Visit />
    </>
  )
}
