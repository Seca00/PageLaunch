import { Box, Center, CardBody, Flex, Image, useColorModeValue, HStack, Container, Heading, Slider, Spacer, VStack } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }: { slides: any }) => {
    return (
        <Center minW={[null, "70vh"]} minHeight="70vh">
            <VStack spacing={10} align="center" direction={["column","row"]}>
                <Container maxW="container.md" textAlign="center">
                    <Heading size="2xl" mb={4} color="gray.300">
                        Our Works
                    </Heading>
                </Container>
                <Spacer />
                <Carousel infiniteLoop showStatus={false} selectedItem={2} centerMode centerSlidePercentage={40} width={"full"} autoFocus >
                    {slides.map((slide: { image: string | undefined; }) => {
                        return (
                            <Flex
                                boxShadow="sm"
                                rounded="lg"
                                bg={"transparent"}
                                h='30%'
                                w={"80%"}
                                direction='row'
                                margin={[4, 2, 16, 2]}
                                pb={12}>
                                <Box p='5px' h={"50%"}>
                                    <Image src={slide.image} width="40%" objectFit={"contain"} />
                                </Box>
                            </Flex>
                        );
                    })}
                </Carousel>
            </VStack>
        </Center>
    );
};

export default ImageSlider;