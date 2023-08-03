import { Flex, Text } from "@chakra-ui/react";
import { Icon as IconElement } from "phosphor-react";

type Props = {
  Icon: IconElement;
  title: string;
  subtitle: string;
};

export function SkillCard({ Icon, title, subtitle }: Props) {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bgColor="whiteAlpha.50"
      borderRadius="xl"
      px="6"
      py="10"
      minW="80"
    >
      <Icon size="64" color="rgba(255,255,255, 0.87)" weight="light" />
      <Text
        as="h2"
        pt="4"
        fontSize="lg"
        letterSpacing="wider"
        fontWeight="bold"
        color="primary.300"
      >
        {title}
      </Text>
      <Text pt="4" fontSize="md" maxW="64" align="center">
        {subtitle}
      </Text>
    </Flex>
  );
}
