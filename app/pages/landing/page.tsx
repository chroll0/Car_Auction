"use client";

import {
  AvailableCars,
  Benefits,
  Hero,
  Search,
  Testimonials,
} from "@/components/landing";
import Banner from "@/components/landing/services";
import { Footer } from "@/components/reusable";

const Landing = () => {
  return (
    <main>
      <Hero />
      <Search />
      <AvailableCars title="Current Auctions" isCurrent={true} />
      <Benefits />
      <AvailableCars title="Upcoming Auctions" isCurrent={false} />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  );
};

export default Landing;
