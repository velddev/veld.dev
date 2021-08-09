import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    gray: {
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#000000",
      600: "#000000",
      700: "#000000",
      800: "#000000",
      900: "#000000",
    },
  },
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Prompt", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
