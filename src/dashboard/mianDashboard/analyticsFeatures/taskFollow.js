import React from "react";
import { Box, Checkbox, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";

// Sample Task Data
const tasks = [
  { id: 1, title: "Task 1. Descriptive task can be long and multiple line", date: "31 Jan 2025" },
  { id: 2, title: "Task 2", date: "1 Feb 2025" },
  { id: 3, title: "Task 3", date: "1 Feb 2025" },
  { id: 4, title: "Task 4", date: "1 Feb 2025" },
  
];

const TaskList = () => {
  return (
    <Box border="1px solid #E2E8F0" backgroundColor="white" borderRadius="md" p={4} boxShadow="sm" w="380px" h="370px">
      {/* Section Title */}
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Follow Up
      </Text>

      {/* Task List */}
      <VStack align="stretch" spacing={3}>
        {tasks.map((task) => (
          <HStack key={task.id} justify="space-between" p={2} borderBottom="1px solid #E2E8F0">
            {/* Checkbox & Task Info */}
            <HStack align="start" spacing={3}>
              <Checkbox size="lg" colorScheme="gray" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="medium">{task.title}</Text>
                <HStack color="gray.500" fontSize="sm">
                  <MdOutlineCalendarMonth />
                  <Text>{task.date}</Text>
                </HStack>
              </VStack>
            </HStack>

            {/* Options Menu */}
            <IconButton icon={<FiMoreVertical />} variant="ghost" size="sm" />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default TaskList

