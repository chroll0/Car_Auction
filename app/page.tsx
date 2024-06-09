import Hero from "@/components/landing/hero";

import Benefits from "@/components/landing/benefits";
import Testimonials from "@/components/landing/testimonials";
import Search from "@/components/landing/search";
import AuctionCard from "@/components/landing/auctionCard";
import Banner from "@/components/landing/services";
import { Footer, SectionTitle } from "@/components/reusable_components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Search />

      <SectionTitle pretitle="Auction" title="Cars Available"></SectionTitle>
      <AuctionCard />

      <SectionTitle
        pretitle="Became a Buyer"
        title="Steps & Sign Up"
      ></SectionTitle>
      <Benefits />

      <SectionTitle pretitle="Customers" title="Reviews"></SectionTitle>
      <Testimonials />

      <SectionTitle
        pretitle="How it works"
        title="Our Auction Process"
      ></SectionTitle>

      <Banner />
      <Footer />
    </main>
  );
}
