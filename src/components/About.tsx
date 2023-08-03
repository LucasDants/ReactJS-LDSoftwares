import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

export const About = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Box
      as="section"
      w="100%"
      bgGradient="linear(to-r, #121212, black)"
      position="relative"
      overflowY="hidden"
      ref={ref}
    >
      <Box
        boxSize="lg"
        overflow="hidden"
        position="absolute"
        right={0}
        bottom={0}
      >
        <Image opacity={0.5} src="working.jpg" />
      </Box>
      <Flex maxWidth={1280} mx="auto" px="6" justifyContent="space-between">
        <Box boxSize="md" mt="10" zIndex={5}>
          <Text as="h1" fontSize={["3xl", "4xl"]} fontWeight="bold">
            LD
            <br /> Softwares
            <Text as="span" color="primary.400">
              .
            </Text>
          </Text>
          <Divider
            w="16"
            borderRadius="lg"
            borderColor="primary.400"
            opacity={1}
            mt="6"
            mb="4"
          />
          <Text fontSize="lg">
            A LD Softwares tem como objetivo criar impacto no mundo por meio do
            digital desenvolvendo tecnologias voltadas para resolver problemas
            críticos do seu negócio.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
});
