import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
  children: string;
};

export function NavLink({ onClick, children }: Props) {
  return (
    <Button
      variant="ghost"
      textColor="whiteAlpha.900"
      fontSize={["xs", "lg"]}
      px="2"
      onClick={onClick}
      _hover={{
        color: "primary.400",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      _active={{ bg: "primary.300" }}
    >
      {children}
    </Button>
  );
}
