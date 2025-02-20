import { Box, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";

const Calendar = () => {
  const events = [
    {
      title: "Follow Up Proposal",
      time: "10.00 - 11.00",
      startHour: 10,
    },
    {
      title: "Meeting with Client",
      time: "13.00 - 14.30",
      startHour: 13,
    },
  ];

  return (
    <Box bg="white" p={4} borderRadius="lg" border="1px solid #E2E8F0"  w="100%" h="520px" overflowY="auto">
      <Text fontSize="lg" fontWeight="bold">Calendar</Text><hr/>
      <Text fontSize="2xl" fontWeight="bold" mt={2}>28 January 2024</Text>
      <Text color="gray.500" mb={4}>Tuesday</Text>

      <VStack spacing={3} align="stretch">
        {[10, 11, 12, 13, 14, 15, 16].map((hour) => (
          <Box key={hour}>
            <Text fontSize="sm" color="gray.500">{hour}.00</Text>
            <Divider />
            {events.map(
              (event, index) =>
                event.startHour === hour && (
                  <Box
                    key={index}
                    bg="red.50"
                    p={3}
                    borderLeft="4px solid #d64252"
                    borderRadius="md"
                    mt={1}
                  >
                    <Text fontSize="sm" fontWeight="bold">{event.title}</Text>
                    <HStack mt={1} color="gray.500" fontSize="xs">
                      <FaClock />
                      <Text>{event.time}</Text>
                    </HStack>
                  </Box>
                )
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Calendar;