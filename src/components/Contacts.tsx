import { Flex, Text } from "@chakra-ui/react";

import { LinkedinLogo, Envelope, WhatsappLogo } from "phosphor-react";
import { forwardRef } from "react";
import { ContactCard } from "./ContactCard";

export const Contacts = forwardRef<HTMLDivElement, any>((_, ref) => {
  return (
    <Flex
      as="footer"
      my="16"
      mx="auto"
      px="6"
      alignItems="center"
      flexDir="column"
      id="contacts"
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
        CONTATOS
      </Text>
      <Text
        as="h1"
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        color="gray.50"
        textAlign="center"
      >
        Como Entrar em Contato
      </Text>
      <Text
        textAlign="center"
        maxW={640}
        color="gray.100"
        pt="8"
        mb={["6", "12"]}
        fontSize="lg"
      >
        Entre em contato conosco para saber mais sobre nossos serviços e como
        podemos ajudar sua empresa a crescer. Estamos ansiosos para ouvir de
        você!
      </Text>
      <Flex
        gap="4"
        maxW={1280}
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
      >
        <ContactCard
          Icon={Envelope}
          title="ldsoftwares@hotmail.com"
          url="mailto:ldsoftwares@hotmail.com"
        />
        <ContactCard
          Icon={WhatsappLogo}
          title="+55 85 99417-3963"
          url="https://api.whatsapp.com/send/?phone=+5585994173963&text=Ol%C3%A1,%20LD%20Softwares!&type=phone_number&app_absent=0"
        />
        <ContactCard
          Icon={LinkedinLogo}
          title="ld-softwares"
          url="https://www.linkedin.com/company/ld-softwares/"
        />
      </Flex>
    </Flex>
  );
});
