import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    primary: {
      "50": "#f4f9fb",
      "100": "#e6f1f6",
      "200": "#c9dbe6",
      "300": "#b8cedb",
      "400": "#9fb9c9",
      "500": "#8ab0c8",
      "600": "#6f96ac",
      "700": "#567789",
      "800": "#314a59",
      "900": "#17232c",
    },
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 800,
      },
      variants: {
        solid: (props: any) => {
          if (props.colorScheme === "primary") {
            return {
              bg: props.colorMode === "dark" ? "primary.200" : "primary.700",
              color: props.colorMode === "dark" ? "#0b141c" : "white",
              _hover: {
                bg: props.colorMode === "dark" ? "primary.100" : "primary.800",
                _disabled: {
                  bg: props.colorMode === "dark" ? "primary.200" : "primary.700",
                },
              },
              _active: {
                bg: props.colorMode === "dark" ? "primary.300" : "primary.900",
              },
              _disabled: {
                opacity: 0.56,
                color: props.colorMode === "dark" ? "#0b141c" : "white",
              },
            };
          }

          return {};
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        background: props.colorMode === "dark" ? "#091018" : "#edf6fb",
        color: props.colorMode === "dark" ? "#f4f9fb" : "#17232c",
      },
      "#__next": {
        minHeight: "100vh",
      },
      "::selection": {
        background: "rgba(159, 185, 201, .35)",
      },
    }),
  },
});

export default theme;
