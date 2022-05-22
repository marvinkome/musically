import { chakra, Heading, IconButton, Select, Grid, GridItem, Image, Link, Stack, Text } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";
import { useQuery } from "react-query";
import { fetchUserLikedSongs } from "libs/api";

export const LikedSongs = () => {
  const likedSongQuery = useQuery({
    queryKey: ["liked-songs"],
    queryFn: async () => fetchUserLikedSongs(),
  });

  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      {likedSongQuery.isLoading ? (
        <Stack direction="row" w="full" alignItems="flex-end" justifyContent="space-between">
          <Text fontWeight="normal" color="gray.500" fontSize="md">
            Loading tracks...
          </Text>
        </Stack>
      ) : (
        <>
          <Stack direction="row" w="full" alignItems="flex-end" justifyContent="space-between">
            <Heading fontWeight="600" fontSize="xl">
              Your Liked Songs
              <IconButton
                aria-label="refresh data"
                minW={5}
                h={5}
                ml={2}
                color="gray.500"
                rounded="full"
                icon={<IoReload />}
                isLoading={likedSongQuery.isFetching}
                onClick={() => likedSongQuery.refetch()}
              />
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
            templateColumns={`repeat(auto-fill, minmax(36px, 1fr))`}
            gridAutoRows="1fr"
            w="100%"
            gap={0}
            _before={{
              content: "''",
              w: 0,
              pb: "100%",
              gridRow: "1 / 1",
              gridColumn: "1 / 1",
            }}
            sx={{
              "& *:first-of-type": {
                gridRow: "1 / 1",
                gridColumn: "1 / 1",
              },
            }}
          >
            {(likedSongQuery.data || []).map((data, idx) => (
              <GridItem key={data.track.id} cursor="pointer">
                <Image src={data.track.album.images[0].url} alt={data.track.name} />
              </GridItem>
            ))}
          </Grid>
        </>
      )}
    </chakra.div>
  );
};
