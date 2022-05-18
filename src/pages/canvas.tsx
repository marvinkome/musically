import React from "react";
import { chakra, Grid, GridItem, Image, Stack } from "@chakra-ui/react";

// 244, 93%, 18% - #080357 - 3F88C5
// 162 36% 42% - #DBF9F0 - B3DEC1
// const FloatingCard = ({ idx }: any) => {
//   return (
//     <chakra.div
//       rounded="16px"
//       flex="2 2 10%"
//       sx={{
//         "--shadow-color": "42 60% 65%",
//         boxShadow: `
//           1px 2px 2px hsl(var(--shadow-color) / 0.2),
//           2px 4px 4px hsl(var(--shadow-color) / 0.2),
//           4px 8px 8px hsl(var(--shadow-color) / 0.2),
//           8px 16px 16px hsl(var(--shadow-color) / 0.2),
//           16px 32px 32px hsl(var(--shadow-color) / 0.2)
//         `,
//       }}
//     >
//       <Image objectFit="cover" src={`https://picsum.photos/500/500?random=${idx}`} alt="Song" rounded="8px" />
//     </chakra.div>
//   );
// };

const Page = () => {
  return (
    <chakra.div p={6} w="container.md" bg="#FFF8E8">
      <Grid
        templateColumns="repeat(auto-fill, minmax(4em, 1fr))"
        templateRows="repeat(auto-fit, 4em)"
        gridAutoFlow="dense"
        w="100%"
        gap={2}
      >
        {Array.from({ length: 15 }).map((_, idx) => (
          <GridItem key={idx} border="1px dotted blue">
            {/* <chakra.div bg="red.400" w="full" h="50px" /> */}
          </GridItem>
        ))}
      </Grid>
    </chakra.div>
  );
};

export default Page;
