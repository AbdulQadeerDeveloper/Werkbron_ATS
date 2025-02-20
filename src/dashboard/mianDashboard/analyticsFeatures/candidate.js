import { Box, Flex, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// **Dummy Data**
const data = [
  { name: "Oct 2024", value: 100 },
  { name: "Nov 2024", value: 250 },
  { name: "Dec 2024", value: 400 },
  { name: "Jan 2025", value: 750 },
  { name: "Feb 2025", value: 750 },
  { name: "Mar 2025", value: 750 },
  { name: "Apr 2025", value: 750 },
  { name: "May 2025", value: 750 },
  { name: "Jun 2025", value: 750 },
  { name: "Jul 2025", value: 750 },
  { name: "Aug 2025", value: 1000 },
  { name: "Sep 2025", value: 1200 },
];

const CandidatesCard = () => {
  return (
    <Box p={6} w="100%" h="520px" borderRadius="lg" border="1px solid #E2E8F0" bg="white" boxShadow="lg">
      {/* **Header Section** */}
      <Flex align="center" justify="space-between" mb={6}>
        <Flex align="center">
          <div className="devd">
          <Icon as={FaUser} className="icondev" color="#d64252" boxSize={6}  />
          </div>
          
          <Stat ml={4}>
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
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#d64252" strokeWidth={2.5} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default CandidatesCard;
