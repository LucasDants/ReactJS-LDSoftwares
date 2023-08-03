import { Text, useBreakpointValue } from "@chakra-ui/react";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Text
      fontSize={["lg", "2xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      LD {isWideVersion ? "Softwares" : ""}
      <Text as="span" color="primary.400">
        .
      </Text>
    </Text>
  );
}
