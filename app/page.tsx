/* Components */
import { Counter } from "./components/Counter/Counter";
import Banner from "./components/home/Banner";
import FeaturedBestSeller from "./components/home/FeaturedBestSeller";

export default function IndexPage() {
  return (
    <div>
      <Banner />;
      <FeaturedBestSeller />
    </div>
  );
}

export const metadata = {
  title: "Bandage",
  description: "Bandage is a React Starter Kit based on Next.js",
};
