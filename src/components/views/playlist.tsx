import { chakra, HStack, VStack, Heading, IconButton, Select, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";

export const PlaylistView = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <HStack w="full" alignItems="flex-end" justifyContent="space-between">
        <HStack spacing={4} alignItems="flex-end">
          <Image boxSize={24} src="/song.jpeg" alt="Song" />
          <VStack alignItems="flex-start" spacing={2}>
            <Heading fontWeight="600" fontSize="2xl">
              This Is Mall Grab
              <IconButton aria-label="refresh data" minW={5} h={5} ml={2} color="gray.500" rounded="full" icon={<IoReload />} />
            </Heading>

            <Text color="gray.600" fontSize="sm">
              This is Mall Grab. The essential tracks, all in one playlist.
            </Text>
          </VStack>
        </HStack>

        <chakra.div>
          <Select size="xs" placeholder="Sort by" borderColor="gray.400">
            <option value="option1">Sort by playlist order</option>
            <option value="option2">Sort by most popular</option>
            <option value="option3">Sort by album</option>
          </Select>
        </chakra.div>
      </HStack>

      <Grid
        mt={4}
        templateColumns={`repeat(auto-fill, minmax(4rem, 1fr))`}
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
        {Array.from({ length: 50 }).map((_, idx) => (
          <GridItem key={idx}>
            <Image key={idx} src="/song.jpeg" alt="Song" />
          </GridItem>
        ))}
      </Grid>
    </chakra.div>
  );
};
