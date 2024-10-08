import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import LazyLoad from 'react-lazyload';

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <LazyLoad>
    <Box
      w={"full"}
    >
      <Center p={4} minHeight="70vh">
        <VStack>
          <Container maxW="container.md" textAlign="center">
            <Heading size="2xl" mb={4} color="gray.300">
              Launch your vision
            </Heading>

            <Text fontSize="xl" color="gray.400">
              Get started with stunning landing pages
            </Text>
          </Container>
        </VStack>
      </Center>
    </Box>
    </LazyLoad>
  );
};
