import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  HStack,
  VStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import logo from "../../asserts/Icon.png"; // Import your icon

// Status Colors Mapping
const statusColors = {
  "Proposed": "blue",
  "1st Interview": "pink",
  "2nd Interview": "purple",
  "Placed": "green",
};

const CandidatesTable = ({ candidates = [] }) => {
  return (
    <Box border="1px solid #E2E8F0" borderRadius="md" overflow="hidden" boxShadow="sm" w="380px" h="370px" padding="0px" overflowY="auto">
      <Table variant="simple">
        {/* Table Header */}
        <Thead bg="gray.100">
          <Tr>
            <Th>Full Name</Th>
            <Th>Vacancy</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>

        {/* Table Body */}
        <Tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate, index) => (
              <Tr key={index} _hover={{ bg: "gray.50" }}>
                {/* Candidate Name */}
                <Td fontWeight="medium">{candidate.name}</Td>

                {/* Vacancy Details */}
                <Td>
                  <HStack>
                    <Avatar src={logo} size="sm" /> {/* Using Imported Icon */}
                    <VStack align="start" spacing={0}>
                      <Text fontSize="bold">{candidate.position}</Text>
                      <HStack>
                        <Text fontSize="sm" color="gray.500">{candidate.company}</Text>
                        <FiExternalLink size={12} color="red" />
                      </HStack>
                    </VStack>
                  </HStack>
                </Td>

                {/* Status Badge */}
                <Td>
                  <Badge colorScheme={statusColors[candidate.status] || "gray"} px={3} py={1} borderRadius="md">
                    {candidate.status}
                  </Badge>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td colSpan="3" textAlign="center" py={3} color="gray.500">
                No candidates found
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Box>
  );
};

// Example Usage
const sampleCandidates = [
  { name: "Maria Henderson", position: "Project Manager", company: "Company A", status: "Proposed" },
  { name: "Maria Henderson", position: "Project Manager", company: "Company A", status: "1st Interview" },
  { name: "Maria Henderson", position: "Project Manager", company: "Company A", status: "2nd Interview" },
  { name: "Maria Henderson", position: "Project Manager", company: "Company A", status: "Placed" },
];

export default function StatusCandiadate() {
  return (
    <Box p={0}>
      <CandidatesTable candidates={sampleCandidates} />
    </Box>
  );
}
