import { chakra, Stack, Button } from "@chakra-ui/react";
import { Views } from "containers/main-page";

export const Navigation = (props: { mainView: Views; setMainView: (view: Views) => void }) => {
  return (
    <chakra.aside w="full" rounded="20px" py={2}>
      <Stack direction="row" spacing={4}>
        <Stack spacing={2}>
          <Button
            size="xs"
            justifyContent="flex-start"
            colorScheme={props.mainView === Views.LikedSongs ? "pink" : undefined}
            onClick={() => props.setMainView(Views.LikedSongs)}
          >
            Your Liked Songs
          </Button>
          <Button
            size="xs"
            justifyContent="flex-start"
            colorScheme={props.mainView === Views.Playlists ? "pink" : undefined}
            onClick={() => props.setMainView(Views.Playlists)}
          >
            Your Playlists
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Saved Albums
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Followed Artists
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Top Tracks
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Top Artists
          </Button>
        </Stack>

        <Stack spacing={2}>
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
            Genres
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Random Genre
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Random Artist
          </Button>
        </Stack>
      </Stack>
    </chakra.aside>
  );
};
