import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Box as="footer" w="100%" bg="#F6F6F6">
      <Flex
        maxWidth={1280}
        w="100%"
        mx="auto"
        justifyContent={["center", "space-between"]}
        align="center"
        flexDir={["column", "row"]}
        rowGap={[10, 0]}
        py="20"
      >
        <Flex
          direction="column"
          alignSelf={["center", "flex-start"]}
          mr={[0, 12]}
          textAlign={["center", "left"]}
        >
          <Heading fontSize="lg" mb="5">
            Code Fortress
          </Heading>
          <Text fontWeight="light">
            Building digital products,
            <br /> brands & experience
          </Text>
        </Flex>
        <Flex direction="column" gap="3" textAlign={["center", "left"]}>
          <Heading fontSize="lg" mb={2}>
            Resources
          </Heading>
          <Link fontWeight="light">Guides</Link>
          <Link fontWeight="light">Blog</Link>
          <Link fontWeight="light">Customer Stories</Link>
          <Link fontWeight="light">Glossery</Link>
        </Flex>
        <Flex direction="column" gap="3" textAlign={["center", "left"]}>
          <Heading fontSize="lg" mb={2}>
            Company
          </Heading>
          <Link fontWeight="light">About Us</Link>
          <Link fontWeight="light">Careers</Link>
          <Link fontWeight="light">Partners</Link>
          <Link fontWeight="light">Contact Us</Link>
        </Flex>
        <Flex direction="column" gap="3" textAlign={["center", "left"]}>
          <Heading fontSize="lg" mb={2}>
            Social Media
          </Heading>
          <Link fontWeight="light">LinkedIn</Link>
          <Link fontWeight="light">Instagram</Link>
          <Link fontWeight="light">Twitter</Link>
          <Link fontWeight="light">Facebook</Link>
        </Flex>
      </Flex>
    </Box>
  );
});
