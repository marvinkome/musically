import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    // useSystemColorMode: false,
  },

  styles: {
    global: (props: any) => ({
      "html, body": {
        backgroundColor: props.colorMode === "dark" ? "purple.900" : "#FFF8E8",
      },
    }),
  },

  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "13px",
  },
});
