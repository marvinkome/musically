import { chakra, Heading, HStack, IconButton, Select, VStack, Text, Image, Link } from "@chakra-ui/react";
import { IoReload } from "react-icons/io5";

export function TrackView() {
  return (
    <chakra.div bg="white" color="gray.800" shadow="base" p={4}>
      <HStack w="full" alignItems="flex-start" justifyContent="space-between">
        <HStack spacing={4} alignItems="stretch">
          <Image boxSize={24} src="/song.jpeg" alt="Song" />
          <VStack alignItems="flex-start" spacing={1}>
            <Heading fontWeight="600" fontSize="lg">
              Bust
            </Heading>

            <Text color="gray.500" fontSize="xs">
              From the single{" "}
              <Link fontWeight="500" color="gray.700">
                How Dogs Chill, Vol.1{" "}
              </Link>{" "}
              (2018)
            </Text>

            <Text color="gray.500" fontSize="xs">
              By{" "}
              <Link fontWeight="500" color="gray.700">
                Mall Grab
              </Link>
            </Text>

            <Link mt="auto !important" fontSize="xs" fontWeight="500" color="gray.700">
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
}
