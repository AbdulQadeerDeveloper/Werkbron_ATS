import { Box, Flex, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// **Dummy Data**
const data = [
  { name: "Oct 2024", value: 100 },
  { name: "Nov 2024", value: 250 },
  { name: "Dec 2024", value: 400 },
  { name: "Jan 2025", value: 750 },
];

const CandidatesCard = () => {
  return (
    <Box p={4} w="380px" h="370px" gap={10} borderRadius="lg" border="1px solid #E2E8F0" bg="white" boxShadow="md">
      {/* **Header Section** */}
      <Flex align="center" justify="space-between" mb={4}>
        <Flex align="center">
          <div className="devd">
            <Icon className="icondev" as={FaUser} boxSize={5}   color="#d64252" />
          </div>
          <Stat ml={3}>
            <StatNumber fontSize="2xl">728</StatNumber>
            <StatLabel>Current Candidates</StatLabel>
          </Stat>
        </Flex>
        <Stat>
          <StatHelpText color="red.500" fontWeight="bold">
            <StatArrow type="decrease" /> 4.5%
          </StatHelpText>
        </Stat>
      </Flex>

      {/* **Line Chart** */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="red" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CandidatesCard;
