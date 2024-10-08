import {
  Box,
  Center,
  Container,
  Wrap,
  WrapItem,
  Text,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Feature } from "./components/Feature";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { PricingSection } from "./components/PricingSection";
import ImageSlider from "./components/ImageSlider";
import { SlideData } from "./components/SlideData";
import { Helmet } from "react-helmet";
import Contact from "./components/contact";

export const App = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>PageLaunch</title>
      </Helmet>
      <Box
        w={"100%"}
        backgroundImage="bg.webp"  // Make sure to use an optimized image like WebP
        backgroundSize="cover"  // Ensures the image covers the whole background
        backgroundPosition="center"  // Centers the image
        backgroundAttachment="fixed"  // Makes the background image fixed while scrolling
        backdropBrightness={"5%"}
      >
        <HeroSection />
        <Container py={28} maxW="container.lg" w="full" id="feature">
          <Feature />
        </Container>
        <Container py={28} maxW="container.xl" w="full" id="feature">
          <ImageSlider slides= {SlideData}/>
        </Container>
        <Container py={28} maxW="container.lg" w="full" id="pricing">
          <PricingSection />
        </Container>
        <Container py={28} maxW={"container.lg"} w="full" id="contact">
          <Contact />
        </Container>
      </Box>
    </Layout>
  );
};
