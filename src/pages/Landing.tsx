import { Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { About } from "../components/About";
import { Contacts } from "../components/Contacts";
import { Header } from "../components/Header";
import { NavLink } from "../components/NavLink";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";

export function LandingPage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  function scrollIntoAbout() {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  function scrollIntoServices() {
    servicesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function scrollIntoPortfolio() {
    portfolioRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function scrollIntoContacts() {
    contactsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return (
    <Flex flex="1" flexDir="column">
      <Header>
        <Flex as="nav" ml="auto" gap={[2, 4]}>
          <NavLink onClick={scrollIntoAbout}>Sobre</NavLink>
          <NavLink onClick={scrollIntoServices}>Serviços</NavLink>
          <NavLink onClick={scrollIntoPortfolio}>Portfolio</NavLink>
          <NavLink onClick={scrollIntoContacts}>Contatos</NavLink>
        </Flex>
      </Header>
      <About ref={aboutRef} />
      <Services ref={servicesRef} />
      <Portfolio ref={portfolioRef} />
      <Contacts ref={contactsRef} />
    </Flex>
  );
}
