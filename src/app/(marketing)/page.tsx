import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Themes } from "@/components/marketing/themes";
import { Pricing } from "@/components/marketing/pricing";

export const metadata = {
  title: "CommerceHub - The Premium eCommerce Platform",
  description:
    "Everything you need to sell online. Build your store, manage products, process orders, and grow your business.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Themes />
      <Pricing />
    </>
  );
}
