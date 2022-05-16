import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  styles: {
    global: (props: any) => ({
      "html, body": {
        // backgroundColor: props.colorMode === "dark" ? "teal.600" : "white",
      },
    }),
  },

  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, sans-serif",
  },
});
