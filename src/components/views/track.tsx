import { chakra, Heading, HStack, VStack, Text, Image, Link } from "@chakra-ui/react";

export const TrackView = () => {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <HStack w="full" alignItems="flex-start" justifyContent="space-between">
        <HStack spacing={4} alignItems="stretch">
          <Image boxSize={24} src="/song.jpeg" alt="Song" />
          <VStack alignItems="flex-start" spacing={1}>
            <Heading fontWeight="600" fontSize="xl">
              Bust
            </Heading>

            <chakra.div>
              <Text color="gray.500" fontSize="sm">
                From the single{" "}
                <Link fontWeight="500" color="gray.700">
                  How Dogs Chill, Vol.1{" "}
                </Link>{" "}
                (2018)
              </Text>

              <Text color="gray.500" fontSize="sm">
                By{" "}
                <Link fontWeight="500" color="gray.700">
                  Mall Grab
                </Link>
              </Text>
            </chakra.div>

            <Link mt="auto !important" fontSize="sm" fontWeight="500" color="gray.700">
              Recommended songs based on this
            </Link>
          </VStack>
        </HStack>

        <chakra.div pt={6}>
          <Image rounded="full" boxSize={12} src="/song.jpeg" alt="Song" />
        </chakra.div>
      </HStack>
    </chakra.div>
  );
};
