import Hero from "@/components/hero";
import Header from "@/components/header";
import Features from "@/components/features";
import Quote from "@/components/quote";
import Service from "@/components/service";

export default function Home() {
  return (
    <main className="hero overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Quote />
      <Service />
    </main>
  );
}
