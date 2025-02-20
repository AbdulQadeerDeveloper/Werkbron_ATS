import { useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Sidebar from "../sidebar/sidebar";  // Import Sidebar
import TopHeader from "../topHeader/header";  // Import TopHeader
import CandidatesCard from "../analyticsFeatures/candidate";
import ClientsCard from "../analyticsFeatures/client";
import Calendar from "../analyticsFeatures/calendar";
import ResumeParser from "../analyticsFeatures/resumeParser";
import TaskList from "../analyticsFeatures/taskFollow";
import StatusCandiadate from "../analyticsFeatures/statusCandiadate";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Flex>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box flex="1" p={5}>
        <TopHeader onOpen={() => setSidebarOpen(true)} />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} mt={5}>
          <CandidatesCard  />
          <ClientsCard />
          <Calendar />
          <ResumeParser />
          <StatusCandiadate />
          <TaskList />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Dashboard;
