// Sidebar Component
import { useState } from "react";
import {
  Box,
  VStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaBars, FaTimes, FaHome, FaCalculator, FaRobot, FaBriefcase, FaUser, FaMask, FaFileAlt, FaEnvelope, FaSearch, FaCog, FaQuestionCircle, FaSyncAlt, FaBell, FaPlus, FaSignOutAlt, FaKey, FaChartLine, FaUsers, FaClipboardList, FaDollarSign, FaChartPie, FaRegCalendarAlt } from "react-icons/fa";
import logo from "../../asserts/Logo.png"
const Sidebar = ({ isOpen, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <Box
      as="nav"
      bg="#2B3759"
      w={isMobile ? (isOpen ? "100px" : "0") : isHovered ? "100px" : "68px"}
      h="auto"
      transition="width 0.3s ease-in-out"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={4}
      position={isMobile ? "fixed" : "relative"}
      left={isMobile ? (isOpen ? "0" : "-200px") : "0"}
      zIndex="1000"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {isMobile && (
        <IconButton
          aria-label="Close Sidebar"
          icon={<FaTimes />}
          position="absolute"
          top={4}
          right={4}
          onClick={onClose}
          color="white"
          bg="red"
          variant="ghost"
        />
      )}

      <Box mb={6} display={isOpen || !isMobile ? "block" : "none"}>
        <Image src={logo} alt="Logo" boxSize="40px" />
      </Box>

      <VStack spacing="5px" flex="1" display={isOpen || !isMobile ? "flex" : "none"}>
        {[FaHome, FaCalculator, FaRobot, FaBriefcase, FaUser, FaMask, FaFileAlt, FaEnvelope, FaSearch, FaQuestionCircle, FaCog, FaSyncAlt].map((Icon, index) => {
          // Check if the current icon needs top margin
          const addTopMargin = Icon === FaQuestionCircle;
          const addSpacingBetween = [FaQuestionCircle, FaCog, FaSyncAlt].includes(Icon) ? "10px" : "5px";
          const addTopBorder = Icon === FaQuestionCircle;

          return (
            <IconButton
              key={index}
              aria-label={Icon.name}
              icon={<Icon />}
              size="lg"
              variant="ghost"
              color="white"
              sx={{
                mt: addTopMargin ? "70px" : "0px",  // 200px top margin for FaQuestionCircle
                borderTop: addTopBorder ? "1px solid white" : "none",
                mb: addSpacingBetween, // 30px spacing between FaQuestionCircle, FaCog, FaSyncAlt
              }}
            />
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar