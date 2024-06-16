import React, { useState } from "react";
import { Container, VStack, FormControl, FormLabel, Select, Input, Button, Box, HStack, IconButton, Heading, Text } from "@chakra-ui/react";
import { Parallax } from 'react-scroll-parallax';
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
    <Parallax y={[-20, 20]} tagOuter="figure">
      <Container centerContent maxW="container.md" py={10}>
        <Heading as="h1" size="xl" mb={4}>Formulaire d'Inscription</Heading>
        <Text fontSize="lg" mb={6}>Veuillez remplir les informations ci-dessous pour vous inscrire.</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl id="test" mb={4}>
              <FormLabel>Test</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl id="age" mb={4}>
              <FormLabel>Age</FormLabel>
              <Input type="number" />
            </FormControl>

            <FormControl id="items" mb={4}>
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

            <FormControl id="precision" mb={4}>
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
    </Parallax>
  );
};

export default Index;