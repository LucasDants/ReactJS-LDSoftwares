import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { forwardRef } from "react";

export const Testimonials = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      maxWidth={1280}
      w="100%"
      mx="auto"
      justifyContent="space-between"
      align="center"
      direction="column"
      gap="8"
    >
      <Box>
        <Text textAlign="center" mb={2} fontSize={["sm", "md"]}>
          TESTIMONIALS
        </Text>
        <Heading textAlign="center" fontSize={["2rem", "3rem"]}>
          Read What Other
          <br />
          Have To Say
        </Heading>
      </Box>

      <Flex
        justify="space-between"
        gap="4"
        flexDir={["column", "row"]}
        px={[4, 0]}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="1"
          bg="#F6F6F6"
          p="6"
          borderRadius="2xl"
        >
          <Image src="/man.png" />
          <Text fontSize="lg" mb="4">
            Andrew Rathore
          </Text>
          <Text fontSize="sm" fontWeight="light" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </Text>
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="1"
          bg="#F6F6F6"
          p="8"
          borderRadius="2xl"
        >
          <Image src="/man.png" />
          <Text fontSize="lg" mb="4">
            Andrew Rathore
          </Text>
          <Text fontSize="sm" fontWeight="light" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </Text>
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          gap="1"
          bg="#F6F6F6"
          p="8"
          borderRadius="2xl"
        >
          <Image src="/man.png" />
          <Text fontSize="lg" mb="4">
            Andrew Rathore
          </Text>
          <Text fontSize="sm" fontWeight="light" textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ullamcorper scelerisque mi, in malesuada felis malesuada vel.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
});
