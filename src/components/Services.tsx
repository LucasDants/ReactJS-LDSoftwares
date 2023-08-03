import { forwardRef } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { CodeSimple, DeviceMobile, SketchLogo } from "phosphor-react";

import { SkillCard } from "./SkillCard";

export const Services = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      as="section"
      my="16"
      mx="auto"
      px="6"
      alignItems="center"
      flexDir="column"
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
        SERVIÇOS
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        textAlign="center"
      >
        No que somos Expert
      </Text>
      <Text textAlign="center" maxW={700} pt="4" fontSize="lg">
        Somos experts em desenvolvimento web e mobile, entregando para seu
        negócio soluções ponta a ponta. Utilizando ReactJS e React Native para
        criar interfaces altamente interativas e responsivas.
      </Text>
      <Stack direction={["column", "row"]} spacing="6" pt="8">
        <SkillCard
          Icon={DeviceMobile}
          title="Desenvolvimento Mobile"
          subtitle="Nós fornecemos serviços de desenvolvimento móvel com React Native, uma das melhores opções para desenvolvimento de aplicativos móveis multiplataforma. "
        />
        <SkillCard
          Icon={CodeSimple}
          title="Desenvolvimento Web"
          subtitle="Especializados em desenvolvimento web com ReactJS,  fornecemos serviços personalizados para criar interfaces de usuário modernas, dinâmicas e responsivas. "
        />
        <SkillCard
          Icon={SketchLogo}
          title="UI/UX Design"
          subtitle="Oferecemos serviços de design de interface de usuário (UI) e experiência do usuário (UX) personalizados para ajudá-lo a criar produtos digitais atraentes e intuitivos. "
        />
      </Stack>
    </Flex>
  );
});
