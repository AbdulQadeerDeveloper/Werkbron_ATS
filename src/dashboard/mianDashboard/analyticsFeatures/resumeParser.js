import { Box, Text, VStack, Button, Icon, useToast } from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const ResumeParser = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];

    // Check file size (Max 10MB)
    if (uploadedFile.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large!",
        description: "Please upload a file smaller than 10MB.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setFile(uploadedFile);
    toast({
      title: "File uploaded!",
      description: `Successfully uploaded: ${uploadedFile.name}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "application/pdf": [".pdf"], "application/msword": [".doc", ".docx"] },
  });

  return (
    <Box p={5} border="1px solid #E2E8F0" borderRadius="md" w="380px" h="370px">
      <Text fontSize="lg" fontWeight="bold">Resume Parser</Text>
      <Text fontSize="sm" color="#d64252" mt={1}>
        Upload CV to automatically add candidate to database
      </Text>

      <Box
        {...getRootProps()}
        border="2px dashed #CBD5E0"
        borderRadius="md"
        p={6}
        textAlign="center"
        mt={4}
        cursor="pointer"
      >
        <input {...getInputProps()} />
        <VStack spacing={2}>
          <Icon as={FiUpload} boxSize={8} color="#d64252" />
          <Text fontSize="sm">Drop your file here or upload a file</Text>
          <Text fontSize="xs" color="gray.500">Maximum 10MB, one file at a time</Text>
          <Button size="sm" bg="#d64252" color="white">Upload File</Button>
        </VStack>
      </Box>

      {file && (
        <Box mt={3} p={2} bg="gray.50" borderRadius="md">
          <Text fontSize="sm">Uploaded: <strong>{file.name}</strong></Text>
        </Box>
      )}
    </Box>
  );
};

export default ResumeParser;
