import { Box, Grid, Image, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
];

const ProductList = () => {
  return (
    <Box p={4}>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {sampleProducts.map((product) => (
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