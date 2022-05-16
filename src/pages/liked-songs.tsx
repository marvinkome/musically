import React from "react";
import NextImage from "next/image";
import { Button, chakra, Container, Grid, Image, GridItem, Heading, Select, Stack, Text, WrapItem, Wrap } from "@chakra-ui/react";

const Header = () => {
  return (
    <chakra.div mb={5}>
      <Heading fontSize="5xl" mb={2}>
        Musically
      </Heading>

      <Text>Follow your ears to discover new music...</Text>
    </chakra.div>
  );
};

const Navigation = () => {
  return (
    <chakra.aside w="full" rounded="20px" py={2}>
      <Stack direction="row" spacing={4}>
        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Liked Songs
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Top Tracks
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Top Artists
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Playlists
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Saved Albums
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Followed Artists
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Genres
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Discover Weekly
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Release Radar
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Spotify Playlists
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Random Artist
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Random Genre
          </Button>
        </Stack>
      </Stack>
    </chakra.aside>
  );
};

const Page = () => {
  return (
    <Container py={6} maxW="container.md">
      <Header />
      <Navigation />

      <chakra.div bg="whiteAlpha.100" shadow="base" mt={14} pt={5} p={3}>
        <Stack mb={6} direction="row" justifyContent="space-between" alignItems="flex-end">
          <Heading fontSize="3xl">Your Liked Songs</Heading>

          <Stack direction="row" spacing="2" alignItems="flex-end">
            <Button size="sm" variant="outline">
              Refresh
            </Button>

            <Select size="sm" rounded="md" placeholder="Sort by..">
              <option value="option1">Sort by saved date</option>
              <option value="option2">Sort by artist</option>
              <option value="option3">Sort by album</option>
              <option value="option4">Sort by popularity</option>
              <option value="option5">Sort by happiest to saddest</option>
            </Select>
          </Stack>
        </Stack>

        <chakra.div>
          <Grid templateColumns="repeat(auto-fit, minmax(64px, 1fr))">
            {Array.from({ length: 7 }).map((_, idx) => (
              <GridItem key={idx}>
                <chakra.div>
                  <Image alt="spotify" src="/song-thumbnail.jpeg" />
                </chakra.div>
              </GridItem>
            ))}
          </Grid>
        </chakra.div>
      </chakra.div>
    </Container>
  );
};

export default Page;
