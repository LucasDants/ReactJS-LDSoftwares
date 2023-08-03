import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

export const Portfolio = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      as="section"
      py="16"
      px="6"
      alignItems="center"
      flexDir="column"
      bg="brand.600"
      ref={ref}
    >
      <Text
        as="h6"
        color="primary.400"
        fontSize="xs"
        textAlign="center"
        letterSpacing="widest"
        mb="2"
      >
        PORTFOLIO
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="gray.50"
        textAlign="center"
      >
        Nossa Coleção
      </Text>
      <Text textAlign="center" maxW={620} pt="4" fontSize="lg">
        Confira abaixo alguns dos nossos projetos mais recentes e visite nosso
        portfolio pessoal para ver mais exemplos de como ajudamos nossos
        clientes a alcançarem seus objetivos:{" "}
        <Link
          href="https://github.com/LucasDants?tab=repositories"
          color="primary.400"
          isExternal
        >
          Portfolio
        </Link>
        .
      </Text>

      <Stack direction={["column", "row"]} pt="10" spacing="6">
        <Link
          href="https://github.com/LucasDants/ReactNative-GoPizza"
          isExternal
        >
          <Image
            borderRadius="8"
            h="28rem"
            objectFit="contain"
            src="gopizza.jpeg"
          />
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=co.rockitcoinx.app&hl=en&gl=US&pli=1"
          isExternal
        >
          <Image
            borderRadius="8"
            h="28rem"
            objectFit="contain"
            src="rockitcoin.jpeg"
          />
        </Link>
        <Link href="https://github.com/LucasDants/ReactNative-Rentx" isExternal>
          <Image
            borderRadius="8"
            h="28rem"
            objectFit="contain"
            src="rentx.png"
          />
        </Link>
      </Stack>
    </Flex>
  );
});
