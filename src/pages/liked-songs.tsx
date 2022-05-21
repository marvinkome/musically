import React from "react";
import { chakra, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { Navigation } from "components/navigation";
import { PlaylistView } from "components/views/playlist";
import { TrackView } from "components/views/track";
import { ArtistView } from "components/views/artist";
import { AlbumView } from "components/views/album";
import { Playlists } from "components/views/playlist-lists";

const Page = () => {
  return (
    <Container py={6} maxW="container.lg">
      <Stack direction="row" mb={5} alignItems="flex-end" justifyContent="space-between">
        <Heading fontSize="4xl" fontWeight="900">
          Musically
        </Heading>

        <Text color="purple.200" fontSize="sm">
          marvinkome
        </Text>
      </Stack>

      <Navigation />

      <Stack spacing={6} mt={14} direction="row" alignItems="flex-start">
        <Stack flex={3} spacing={6}>
          <Playlists />
          {/* <PlaylistView />
          <TrackView />
          <ArtistView />
          <AlbumView /> */}
        </Stack>

        <chakra.div flex={1} />
      </Stack>

      <chakra.div pos="fixed" top="30vh" left="70vw" flex={1}>
        <Stack spacing={4}>
          <Image boxSize="xs" src="/song.jpeg" alt="Song" />

          <Stack spacing={1}>
            <Text fontWeight="500" color="whiteAlpha.800">
              Love Reigns
            </Text>
            <Text fontSize="sm" color="whiteAlpha.700">
              Mall Grab
            </Text>
          </Stack>

          <Stack spacing={1}>
            <Text fontSize="xs" color="whiteAlpha.700">
              The first track on the playlist:
            </Text>
            <Text fontWeight="500" fontSize="lg" color="whiteAlpha.900">
              This Is Mall Grab
            </Text>
          </Stack>
        </Stack>
      </chakra.div>
    </Container>
  );
};

export default Page;
