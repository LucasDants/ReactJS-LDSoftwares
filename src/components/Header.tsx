import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Logo } from "./Logo";

type Props = {
  children: ReactNode;
};

export function Header({ children }: Props) {
  return (
    <Flex
      as="header"
      w="100%"
      py="6"
      px="6"
      align="center"
      position="sticky"
      top="0"
      zIndex="10"
      bg="#121212"
    >
      <Flex maxW={1280} mx="auto" w="100%" align="center">
        <Logo />
        {children}
      </Flex>
    </Flex>
  );
}
