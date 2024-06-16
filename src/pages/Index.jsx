import React, { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Select, Input, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([{ question: "", answer: "" }]);

  const handleAddItem = () => {
    setItems([...items, { question: "", answer: "" }]);
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = items.map((item, i) => (i === index ? { ...item, [field]: value } : item));
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  const handleCancel = () => {
    // Handle form cancellation
    console.log("Form cancelled");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="test">
            <FormLabel>Test</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>

          <FormControl id="age">
            <FormLabel>Age</FormLabel>
            <Input type="number" />
          </FormControl>

          <FormControl id="items">
            <FormLabel>Items</FormLabel>
            {items.map((item, index) => (
              <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
                <HStack spacing={4}>
                  <Input
                    placeholder="Question"
                    value={item.question}
                    onChange={(e) => handleItemChange(index, "question", e.target.value)}
                  />
                  <Input
                    placeholder="Answer"
                    value={item.answer}
                    onChange={(e) => handleItemChange(index, "answer", e.target.value)}
                  />
                  <IconButton
                    aria-label="Remove item"
                    icon={<FaTrash />}
                    onClick={() => handleRemoveItem(index)}
                  />
                </HStack>
              </Box>
            ))}
            <Button leftIcon={<FaPlus />} onClick={handleAddItem}>
              Add Item
            </Button>
          </FormControl>

          <FormControl id="precision">
            <FormLabel>Précision</FormLabel>
            <Input type="number" step="0.01" />
          </FormControl>

          <HStack spacing={4}>
            <Button colorScheme="blue" type="submit">
              Valider
            </Button>
            <Button colorScheme="red" onClick={handleCancel}>
              Annuler
            </Button>
          </HStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Index;