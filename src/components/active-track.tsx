import React from "react";
import { chakra, Stack, Image, Text } from "@chakra-ui/react";

export const ActiveTrack = ({ track }: any) => {
  React.useEffect(() => {
    let audio = new Audio(track.preview_url);
    const playPromise = audio.play();

    return () => {
      playPromise.then(() => audio.pause());
    };
  }, [track]);

  return (
    <chakra.div pos="fixed" top="25vh" left="70vw" flex={1}>
      <Stack spacing={4}>
        <Image boxSize="sm" src={track.album.images[0].url} alt={track.name} />

        <Stack spacing={1}>
          <Text fontWeight="500" color="whiteAlpha.800">
            {track.name}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.700">
            {track.artists.map((a: any) => a.name).join(" & ")}
          </Text>
        </Stack>
      </Stack>
    </chakra.div>
  );
};
