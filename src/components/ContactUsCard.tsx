import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { forwardRef } from "react";

export const ContactUs = forwardRef<HTMLDivElement, any>((_, ref) => {
  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });

  return (
    <Flex
      maxWidth={1280}
      w={["auto", "100%"]}
      mx={[4, "auto"]}
      justifyContent="space-between"
      align="center"
      bg="#F6F6F6"
      borderRadius="2xl"
      px={[8, "20"]}
      py={[12, 0]}
    >
      <Box maxW={600} textAlign={["center", "left"]}>
        <Heading fontSize={["2rem", "3rem"]}>
          Inicie a transformação digital do seu negócio
        </Heading>
        <Text mt={4}>
          Seja qual for o desafio tecnológico que você está enfrentando, a Code
          Fortress está aqui para ajudar. Entre em contato conosco hoje mesmo e
          descubra como podemos transformar sua visão em realidade por meio do
          poder do software
        </Text>
        <Button colorScheme="linkedin" mt={[8, 10]}>
          Entre em contato
        </Button>
      </Box>
      {!isSmall && <Image src="/customer-support.png" />}
    </Flex>
  );
});
