/* TopHeader.js */
import {
  Box,
  VStack,
  IconButton,
  Image,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  SimpleGrid,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBars, FaTimes, FaHome, FaCalculator, FaRobot, FaBriefcase, FaUser, FaMask, FaFileAlt, FaEnvelope, FaSearch, FaCog, FaQuestionCircle, FaSyncAlt, FaBell, FaPlus, FaSignOutAlt, FaKey, FaChartLine, FaUsers, FaClipboardList, FaDollarSign, FaChartPie, FaRegCalendarAlt } from "react-icons/fa";

const TopHeader = ({ onOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      bg="white"
      w="full"
      h="68px"
      px={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #D8DCE8"
      boxShadow="sm"
    >
      {/* Left Section - Dashboard (200px space) */}
      <Flex align="center" minW="200px">
        {isMobile && (
          <IconButton
            aria-label="Open Sidebar"
            icon={<FaBars />}
            onClick={onOpen}
            variant="ghost"
            mr={2}
          />
        )}
        <Text fontSize="xl" fontWeight="bold" color="#111827">
          Dashboard
        </Text>
      </Flex>

      {/* Right Section - Last Sync, Search, Icons */}
      <Flex align="center" flex="1" justify="flex-end">
        {!isMobile && (
          <Flex align="center" color="gray.500" fontSize="sm" mr={4}>
            <FaSyncAlt style={{ marginRight: "6px" }} />
            <Text>Last Sync Wed, Nov 2, 10:57</Text>
          </Flex>
        )}

        {!isMobile && (
          <InputGroup maxW="250px" mr={4}>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="#9ca3af" />
            </InputLeftElement>
            <Input type="text" placeholder="Search anything..." bg="white.100" borderRadius="md" />
          </InputGroup>
        )}

        <IconButton aria-label="Notifications" icon={<FaBell />} variant="ghost" color="#6b7280" mr={3} />
        <Button bg="#d64252" color="white" borderRadius="md" _hover={{ bg: "red.600" }} mr={3}>
          <FaPlus />
        </Button>

        {!isMobile && <Divider orientation="vertical" h="30px" mx={4} borderColor="#D8DCE8" />}

        {/* User Profile */}
        <Menu>
          <MenuButton>
            <Flex align="center">
              <Avatar size="sm" name="John Doe" src="https://bit.ly/dan-abramov" />
              {!isMobile && <Text ml={2} fontSize="sm" fontWeight="medium">John Doe</Text>}
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaUser />}>Profile</MenuItem>
            <MenuItem icon={<FaKey />}>Set Password</MenuItem>
            <MenuItem icon={<FaSignOutAlt />} color="red.500">Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
export default TopHeader;
