import {
  AuctionCard,
  Benefits,
  Hero,
  Search,
  Testimonials,
} from "@/components/landing";
import Banner from "@/components/landing/services";
import { Footer, SectionTitle } from "@/components/reusable_components";

const Landing = () => {
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
};

export default Landing;
