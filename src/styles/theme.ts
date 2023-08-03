import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff3e0",
      100: "#fee1b3",
      200: "#fece81",
      300: "#feb94f",
      400: "#feaa29",
      500: "#fe9b06",
      600: "#fa8f05",
      700: "#f47f03",
      800: "#ee7002",
      900: "#e55501",
    },
    secondary: {
      50: "#e2f1ff",
      100: "#b9dcfe",
      200: "#8bc6fe",
      300: "#5aaffe",
      400: "#319efe",
      500: "#008efd",
      600: "#0280ee",
      700: "#0b6eda",
      800: "#0e5cc8",
      900: "#103da9",
    },
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.05)",
      100: "rgba(255, 255, 255, 0.08)",
      200: "rgba(255, 255, 255, 0.12)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.60)",
      800: "rgba(255, 255, 255, 0.76)",
      900: "rgba(255, 255, 255, 0.87)",
    },
  },

  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "#121212",

        color: "whiteAlpha.900",
        "::-webkit-scrollbar": {
          w: "2",
          bg: "#040404",
        },
        "::-webkit-scrollbar-track": {
          w: "4",
        },
        "::-webkit-scrollbar-thumb": {
          borderRadius: "full",
          bg: "primary.400",
          opacity: 1,
        },
      },
    },
  },
});
