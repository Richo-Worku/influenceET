import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import Categories from "@/components/landing/Categories";
import FeaturedCampaigns from "@/components/landing/FeaturedCampaigns";
import HowItWorks from "@/components/landing/HowItWorks";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedCampaigns />
      <Categories />
      <HowItWorks />
      <CallToAction />
      <Footer />

    </main>
  );
}
