import React from "react";

import { chakra, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Navigation } from "components/navigation";
import { PlaylistView } from "components/views/playlist";
import { TrackView } from "components/views/track";
import { ArtistView } from "components/views/artist";
import { AlbumView } from "components/views/album";
import { Playlists } from "components/views/playlist-lists";
import { LikedSongs } from "components/views/liked-songs";
import { ActiveTrack } from "components/active-track";

export enum Views {
  LikedSongs = "liked-songs",
  Playlists = "playlists",
  SavedAlbums = "saved-albums",
  FollowedArtists = "followed-artists",
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 3, // 3 minutes
      cacheTime: 1000 * 60 * 10, // disable garbage collection
      retry: 1,
    },
  },
});

const Page = () => {
  const [mainView, setMainView] = React.useState(Views.LikedSongs);
  const [activeTrack, setActiveTrack] = React.useState<any>();

  const handleMouseEnter = async (track: any) => {
    setActiveTrack(track);
  };

  const handleMouseLeave = async () => {
    setActiveTrack(undefined);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container py={6} maxW="container.lg">
        <Stack direction="row" mb={5} alignItems="flex-end" justifyContent="space-between">
          <Heading fontSize="4xl" fontWeight="900">
            Musically
          </Heading>

          <Text color="purple.200" fontSize="sm">
            marvinkome
          </Text>
        </Stack>

        <Navigation mainView={mainView} setMainView={setMainView} />

        <Stack spacing={6} mt={14} direction="row" alignItems="flex-start">
          <Stack flex={3} spacing={6}>
            {mainView === Views.LikedSongs && <LikedSongs onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />}
            {mainView === Views.Playlists && <Playlists />}

            {/* <PlaylistView />
          <TrackView />
          <ArtistView />
          <AlbumView /> */}
          </Stack>

          <chakra.div flex={1} />
        </Stack>

        {activeTrack && <ActiveTrack track={activeTrack} />}
      </Container>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default Page;
