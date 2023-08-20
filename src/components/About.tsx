import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

export const About = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      maxWidth={1280}
      mx="auto"
      justifyContent={["center", "space-between"]}
      flexDir={["column", "row"]}
      align="center"
      px={[4, 0]}
    >
      <Flex
        flexDir="column"
        justifyContent={["center", "space-between"]}
        align={["center", "flex-start"]}
      >
        <Heading fontSize={["2.5rem", "4rem"]} textAlign={["center", "left"]}>
          Transforme suas ideias em realidade
        </Heading>
        <Text fontSize={["md", "lg"]} mt={4} textAlign={["center", "left"]}>
          Nossa missão é impulsionar o sucesso de nossos clientes, oferecendo
          soluções de desenvolvimento de software que atendam às suas
          necessidades exclusivas. Criamos aplicativos sob medida para
          plataformas móveis, web e desktop, garantindo uma experiência fluida e
          intuitiva.
        </Text>
        {/* <Button
          colorScheme="linkedin"
          mt={[6, 10]}
          mb={[4, 0]}
          size={["sm", "md"]}
        >
          ENTRE EM CONTATO
        </Button> */}
      </Flex>
      <Image src="/programmer.png" />
    </Flex>
  );
});
