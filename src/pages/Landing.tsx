import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { About } from "../components/About";

import { Header } from "../components/Header";
import { Details } from "../components/Details";

import { ContactUs } from "../components/ContactUsCard";
import { List } from "phosphor-react";

export function LandingPage() {
  const isSmall = useBreakpointValue({ base: true, md: false }, { ssr: false });

  return (
    <Flex flex="1" flexDir="column" gap={[16, "20"]} pb={16}>
      <Header>
        {isSmall ? (
          <Flex flex={1} justify="flex-end">
            <IconButton
              variant="ghost"
              size="lg"
              aria-label="Menu"
              icon={<List />}
            />
          </Flex>
        ) : (
          <Flex as="nav" ml="auto" gap={[2, 4]}>
            {/* <NavLink onClick={scrollIntoAbout}>home</NavLink>
            <NavLink onClick={scrollIntoServices}>about</NavLink>
            <NavLink onClick={scrollIntoPortfolio}>testimonials</NavLink>
            <NavLink onClick={scrollIntoContacts}>contact</NavLink> */}
          </Flex>
        )}
      </Header>
      <About />
      <Details />
      <ContactUs />
    </Flex>
  );
}
