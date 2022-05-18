import { chakra, Stack, Button } from "@chakra-ui/react";

export const Navigation = () => {
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
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Playlists
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Saved Albums
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Your Followed Artists
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Your Top Artists
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Spotify Playlists
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Random Artist
          </Button>
        </Stack>

        <Stack spacing={2}>
          <Button size="xs" justifyContent="flex-start">
            Random Genre
          </Button>
          <Button size="xs" justifyContent="flex-start">
            Genres
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
      </Stack>
    </chakra.aside>
  );
};
