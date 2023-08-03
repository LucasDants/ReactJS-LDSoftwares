import { Flex, Link } from "@chakra-ui/react";
import { Icon as IconElement } from "phosphor-react";

type Props = {
  Icon: IconElement;
  title: string;
  url: string;
};
export function ContactCard({ Icon, title, url }: Props) {
  return (
    <Flex
      alignItems="center"
      bgColor="whiteAlpha.50"
      borderRadius="md"
      py="4"
      px="6"
      gap="4"
    >
      <Icon size="22" color="#EEEEEE" weight="light" />
      <Link
        fontSize="sm"
        letterSpacing="wider"
        color="primary.400"
        fontWeight="bold"
        isExternal
        href={url}
      >
        {title}
      </Link>
    </Flex>
  );
}
