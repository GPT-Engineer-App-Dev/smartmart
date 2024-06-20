import { useState } from "react";
import { Box, Grid, Image, Text, VStack, Button, Input, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", category: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", category: "Accessories", image: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = sampleProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
    );
  });

  return (
    <Box p={4}>
      <Input
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />
      <Select
        placeholder="Filter by category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        mb={4}
      >
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
      </Select>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <VStack p={4}>
              <Text fontWeight="bold">{product.name}</Text>
              <Text>{product.price}</Text>
              <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">
                View Details
              </Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;