import {
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  VStack,
  Image,
  Heading,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { FunctionComponent } from "react";

interface FeatureProps {
}

export const Feature: FunctionComponent<FeatureProps> = () => {
  return (
    <Center w="full" minH={[null, "120vh"]}>
      <Stack direction={["column","row"]}>
        <Card minW={[null, "70vh"]} background={"transparent"} p={[8, 8]}>
          <CardBody>
            <Flex>
              <Container maxW="container.md" textAlign="center">
                <Heading size="2xl" mb={8} color="gray.300">
                  Launch your vision
                </Heading>
                <Spacer />

                <Text my={16} fontSize="large" color="gray.400">
                  At PageLaunch, we specialize in building sleek and effective landing pages that elevate newly created startups.
                  Based in Berlin, we empower businesses to establish their online presence swiftly with professional designs tailored to their unique needs.
                  Our expert team understands the importance of first impressions and works closely with you to create landing pages
                  that not only attract attention but also drive conversions. Let us help you launch your vision today!
                </Text>
                <Spacer />
                <Button
                  colorScheme="green"
                  variant="outline"
                  textAlign={["center", "left"]}
                >
                  Get in touch →
                </Button>
              </Container>
            </Flex>
          </CardBody>
        </Card>
        <Spacer />
        <Card
          minW={[null, "70vh"]}
          backgroundImage="tech.webp"  // Make sure to use an optimized image like WebP
          backgroundSize="cover"  // Ensures the image covers the whole background
          backgroundPosition="center"
        >
          <CardBody minH={"70vh"}></CardBody>
        </Card>
      </Stack>
    </Center>
  );
};
