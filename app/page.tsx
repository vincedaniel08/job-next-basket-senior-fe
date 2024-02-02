/* Components */
import { Box } from "@mui/material";

import AboutUs from "./components/home/AboutUs";
import Banner from "./components/home/Banner";
import BigBanner from "./components/home/BigBanner";
import FeaturedBestSeller from "./components/home/FeaturedBestSeller";
import FeaturedBestServices from "./components/home/FeaturedBestServices";
import FeaturedPosts from "./components/home/FeaturedPosts";

export default function IndexPage() {
  return (
    <Box>
      <Banner />;
      <FeaturedBestSeller />
      <FeaturedBestServices />
      <FeaturedPosts />
      <AboutUs />
      <BigBanner />
    </Box>
  );
}

export const metadata = {
  title: "Bandage",
  description: "Bandage is a React Starter Kit based on Next.js",
};
