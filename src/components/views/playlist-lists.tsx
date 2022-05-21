import { chakra, Heading, HStack, IconButton, VStack, Text, Input, Stack, Link, Grid, GridItem } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";

export const Playlists = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <HStack w="full" alignItems="flex-end" justifyContent="space-between">
        <Heading fontWeight="600" fontSize="2xl">
          Your Playlists
          <IconButton aria-label="refresh data" minW={5} h={5} ml={2} color="gray.500" rounded="full" icon={<IoReload />} />
        </Heading>

        <chakra.div color="gray.600">
          <Input
            borderColor="gray.400"
            placeholder="Filter"
            variant="outline"
            size="xs"
            color="gray.600"
            _placeholder={{ color: "gray.500" }}
            _hover={{ borderColor: "gray.300" }}
          />
        </chakra.div>
      </HStack>

      <Stack direction="row" mt={4} spacing={4}>
        <Link fontSize="sm" fontWeight="500" color="gray.800">
          All
        </Link>

        <Link fontSize="sm" color="gray.500">
          Playlists You Own
        </Link>

        <Link fontSize="sm" color="gray.500">
          Playlists You Follow
        </Link>
      </Stack>

      <chakra.div
        h="350px"
        pos="relative"
        pt={4}
        _after={{
          content: '""',
          w: "100%",
          h: "17px",
          left: 0,
          bottom: 0,
          pos: "absolute",
          bgGradient: "linear(to-b, hsla(0 , 0%, 100%, 0), #fff)",
          zIndex: 1000,
        }}
      >
        <chakra.div overflow="scroll" h="full" w="full" pb={6}>
          <chakra.div sx={{ columnCount: 3, columnGap: 5 }}>
            {Array.from({ length: 8 }).map((_, idx) => (
              <chakra.div key={idx}>
                <Link fontSize="14px" color="gray.600">
                  Playlist {idx + 1}
                </Link>
              </chakra.div>
            ))}
          </chakra.div>
        </chakra.div>
      </chakra.div>
    </chakra.div>
  );
};
