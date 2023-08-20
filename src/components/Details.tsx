import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { forwardRef } from "react";

export const Details = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      maxWidth={1280}
      w="100%"
      mx="auto"
      justifyContent={["center", "space-between"]}
      align="center"
      flexDir={["column-reverse", "row"]}
      px={[4, 0]}
    >
      <Image src="/tailored.png" />
      <Box maxW={560} textAlign={["center", "left"]}>
        <Heading fontSize={["2rem", "3rem"]}>Nosso processo</Heading>
        <Text mt={4}>
          Acreditamos que a colaboração é a chave para o sucesso. Trabalhamos em
          estreita colaboração com nossos clientes em todas as etapas do
          projeto, desde a concepção até a entrega e o suporte contínuo. Nossa
          abordagem orientada ao cliente garante que sua visão seja traduzida em
          soluções concretas e inovadoras.
        </Text>
      </Box>
    </Flex>
  );
});
