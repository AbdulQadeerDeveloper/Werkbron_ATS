import { Box, Flex, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// **Dummy Data**
const data = [
  { name: "Oct 2024", value: 10 },
  { name: "Nov 2024", value: 15 },
  { name: "Dec 2024", value: 25 },
  { name: "Jan 2025", value: 40 },
];

const ClientsCard = () => {
  return (
    <Box p={4} w="380px" h="370px" borderRadius="lg" border="1px solid #E2E8F0" bg="white" boxShadow="md">
      {/* **Header Section** */}
      <Flex align="center" justify="space-between" mb={4}>
        <Flex align="center">
          <div className="devd"><Icon as={FaBuilding} className="icondev" boxSize={5} color="#d64252" /></div>

          <Stat ml={3}>
            <StatNumber fontSize="2xl">40</StatNumber>
            <StatLabel>My Clients</StatLabel>
          </Stat>
        </Flex>
        <Stat>
          <StatHelpText color="green.500" fontWeight="bold">
            <StatArrow type="increase" /> 10.5%
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

export default ClientsCard;
