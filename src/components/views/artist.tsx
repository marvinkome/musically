import { chakra, Grid, GridItem, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";

export const ArtistView = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <Stack direction="row" spacing={6}>
        <chakra.section>
          <HStack alignItems="stretch" spacing={6}>
            <Image boxSize={28} rounded="full" src="/song.jpeg" alt="Song" />

            <Stack spacing={2}>
              <Heading fontWeight="600" fontSize="2xl" lineHeight="1.2">
                Mall Grab
              </Heading>

              <Text fontSize="sm" fontWeight="500" color="gray.600">
                <Link>aussietronica</Link>, <Link>australian house</Link>, <Link>lo-fi house</Link>
              </Text>

              <Stack spacing={0}>
                <Text fontSize="sm" color="gray.600">
                  20 releases between 2015 - 2022
                </Text>
                <Text fontSize="sm" color="gray.600">
                  160,613 followers
                </Text>
              </Stack>

              <Link mt="auto !important" fontSize="sm" fontWeight="500" color="gray.700">
                Recommended songs based on Mall Grab
              </Link>
            </Stack>

            <chakra.div pt={6}>
              <Image boxSize={24} src="/song.jpeg" alt="Song" />
            </chakra.div>
          </HStack>

          <chakra.article mt={8}>
            <Heading fontWeight="500" fontSize="xs" color="gray.600" textTransform="uppercase">
              Top Tracks
            </Heading>

            <Grid mt={2} templateColumns={`repeat(auto-fill, 48px)`} gap={1}>
              {Array.from({ length: 10 }).map((_, idx) => (
                <GridItem key={idx}>
                  <Image key={idx} src="/song.jpeg" alt="Song" />
                </GridItem>
              ))}
            </Grid>
          </chakra.article>

          <chakra.article mt={8}>
            <Heading fontWeight="500" fontSize="xs" color="gray.600" textTransform="uppercase">
              Albums
            </Heading>

            <Grid mt={2} templateColumns={`repeat(auto-fill, 48px)`} gap={1}>
              {Array.from({ length: 3 }).map((_, idx) => (
                <GridItem key={idx}>
                  <Image key={idx} src="/song.jpeg" alt="Song" />
                </GridItem>
              ))}
            </Grid>
          </chakra.article>

          <chakra.article mt={8}>
            <Heading fontWeight="500" fontSize="xs" color="gray.600" textTransform="uppercase">
              Singles & compilations
            </Heading>

            <Grid mt={2} templateColumns={`repeat(auto-fill, 32px)`} gap={1}>
              {Array.from({ length: 24 }).map((_, idx) => (
                <GridItem key={idx}>
                  <Image key={idx} src="/song.jpeg" alt="Song" />
                </GridItem>
              ))}
            </Grid>
          </chakra.article>

          <chakra.article mt={8}>
            <Heading fontWeight="500" fontSize="xs" color="gray.600" textTransform="uppercase">
              Appears on
            </Heading>

            <Grid mt={2} templateColumns={`repeat(auto-fill, 32px)`} gap={1}>
              {Array.from({ length: 32 }).map((_, idx) => (
                <GridItem key={idx}>
                  <Image key={idx} src="/song.jpeg" alt="Song" />
                </GridItem>
              ))}
            </Grid>
          </chakra.article>
        </chakra.section>

        <chakra.aside px={3} pt={14}>
          <Heading fontWeight="normal" fontSize="xs" color="gray.600" textTransform="uppercase">
            Related Artists
          </Heading>

          <SimpleGrid templateColumns="repeat(2, 1fr)" gap={2} mt={4} alignItems="center">
            {Array.from({ length: 16 }).map((_, idx) => (
              <Image key={idx} rounded="full" boxSize={10} src="/song.jpeg" alt="Song" />
            ))}
          </SimpleGrid>
        </chakra.aside>
      </Stack>
    </chakra.div>
  );
};
