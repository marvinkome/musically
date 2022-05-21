import { chakra, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";

export const AlbumView = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <Stack direction="row">
        <chakra.section flex={1.5}>
          <Stack direction="row" spacing={6}>
            <Image boxSize={36} src="/song.jpeg" alt="Song" />

            <Stack spacing={1}>
              <Heading fontWeight="600" fontSize="2xl" lineHeight="1.2">
                Ice Melt
              </Heading>

              <chakra.div pt={2}>
                <Text fontSize="sm" color="gray.500">
                  Released April 30, 2021
                </Text>
                <Text fontSize="sm" color="gray.500">
                  album by <Link color="gray.700">Crumb</Link>
                </Text>
              </chakra.div>

              <chakra.div>
                <Image rounded="full" boxSize={10} src="/song.jpeg" alt="Song" />
              </chakra.div>
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section flex={1} pt={4}>
          <Heading fontWeight="normal" fontSize="xs" color="gray.600" textTransform="uppercase">
            Tracks
          </Heading>

          <chakra.div
            h="15em"
            pos="relative"
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
            <Stack spacing={2} mt={2} pb="15px" h="100%" overflow="auto">
              {Array.from({ length: 10 }).map((_, idx) => (
                <HStack key={idx}>
                  <Image boxSize={9} src="/song.jpeg" alt="Song" />
                  <Text fontSize="sm" color="gray.800">
                    Bones
                  </Text>
                </HStack>
              ))}
            </Stack>
          </chakra.div>
        </chakra.section>
      </Stack>
    </chakra.div>
  );
};
