import { chakra, Heading, IconButton, Select, Grid, GridItem, Image, Link, Stack } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";

export const LikedSongs = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <Stack direction="row" w="full" alignItems="flex-end" justifyContent="space-between">
        <Heading fontWeight="600" fontSize="xl">
          Your Liked Songs
          <IconButton aria-label="refresh data" minW={5} h={5} ml={2} color="gray.500" rounded="full" icon={<IoReload />} />
        </Heading>

        <chakra.div>
          <Select size="xs" placeholder="Sort by" borderColor="gray.400">
            <option value="option1">Sort by playlist order</option>
            <option value="option2">Sort by most popular</option>
            <option value="option3">Sort by album</option>
          </Select>
        </chakra.div>
      </Stack>

      <Grid
        mt={6}
        templateColumns={`repeat(auto-fill, minmax(3rem, 1fr))`}
        gridAutoRows="1fr"
        w="100%"
        gap={1}
        _before={{
          content: "''",
          w: 0,
          pb: "100%",
          gridRow: "1 / 1",
          gridColumn: "1 / 1",
        }}
        sx={{
          "& *:first-child": {
            gridRow: "1 / 1",
            gridColumn: "1 / 1",
          },
        }}
      >
        {Array.from({ length: 250 }).map((_, idx) => (
          <GridItem key={idx}>
            <Image key={idx} src="/song.jpeg" alt="Song" />
          </GridItem>
        ))}
      </Grid>
    </chakra.div>
  );
};
